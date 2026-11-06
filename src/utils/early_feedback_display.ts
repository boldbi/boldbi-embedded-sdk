import { EarlyFeedbackProjection } from './early_feedback_projection';

/**
 * Upper bound for masking the designer's centred loaders while the layout
 * projection and shared visual assets are still pending. After it elapses the
 * ordinary loading experience resumes; a late projection may still mount.
 */
export const EARLY_FEEDBACK_PENDING_MASK_TIMEOUT_MS = 3000;

/** Display an authorized receipt without waiting for or starting native/data initialization. */
export function beginEarlyFeedbackDisplay(owner: HTMLElement, host: HTMLElement, receipt: EarlyFeedbackProjection,
    assets: Promise<boolean>, options: { showToolbar: boolean; darkTheme?: boolean; isCurrent(): boolean; onPendingEnd?(): void }): () => void {
    let ended = false, mounted = false, pending = true;
    let themeMarker: string | null | undefined;
    let observer: MutationObserver = null, shared: any = null, pendingTimer: ReturnType<typeof setTimeout> = null;
    const visibility = new Map<HTMLElement, {value: string; priority: string}>();
    const waitingPanes = new Set<HTMLElement>();
    const loaderFlow = new Map<HTMLElement, {value: string; priority: string}>();
    const current = (): boolean => !ended && owner && owner.isConnected && host && host.isConnected &&
        host.contains(owner) && receipt && receipt.owner === owner && options.isCurrent();
    const restoreVisibility = (node: HTMLElement): void => {
        const before = visibility.get(node);
        if (before && node.style.getPropertyValue('visibility') === 'hidden' && node.style.getPropertyPriority('visibility') === 'important') {
            if (before.value) node.style.setProperty('visibility', before.value, before.priority);
            else node.style.removeProperty('visibility');
        }
        visibility.delete(node);
    };
    const restoreAllVisibility: () => void = (): void => {
        visibility.forEach((_before, node) => restoreVisibility(node));
        waitingPanes.clear();
    };
    // Leave the pending phase exactly once. The SDK uses this to release a
    // deferred removal of its own basic loader in the same task as any restore.
    const settlePending: () => void = (): void => {
        if (!pending) { return; }
        pending = false;
        if (pendingTimer !== null) { clearTimeout(pendingTimer); pendingTimer = null; }
        if (typeof options.onPendingEnd === 'function') {
            try { options.onPendingEnd(); } catch (_) { /* Loader cleanup must not affect early feedback. */ }
        }
    };
    const finish = (cancel: boolean): void => {
        if (ended) return;
        ended = true;
        if (observer) observer.disconnect();
        // Retire the factory first; its restoration must not overwrite the
        // original visibility of loaders that this SDK display subsequently hid.
        if (cancel && mounted && shared && typeof shared.cancelRuntimeHost === 'function') shared.cancelRuntimeHost(owner);
        restoreAllVisibility();
        loaderFlow.forEach((before, node) => {
            if (node.style.getPropertyValue('display') === 'none' && node.style.getPropertyPriority('display') === 'important') {
                if (before.value) node.style.setProperty('display', before.value, before.priority);
                else node.style.removeProperty('display');
            }
        });
        loaderFlow.clear();
        if (themeMarker !== undefined && owner.getAttribute('data-native-shimmer-theme') === 'dark') {
            if (themeMarker === null) { owner.removeAttribute('data-native-shimmer-theme'); }
            else { owner.setAttribute('data-native-shimmer-theme', themeMarker); }
        }
        themeMarker = undefined;
        settlePending();
    };
    // Native WaitingPopup appends its translucent pane directly to this owner.
    // Hiding the child spinner alone leaves that pane covering early feedback.
    const ownWaitingPane = (node: HTMLElement): boolean => node.parentElement === owner &&
        node.classList.contains('e-waitpopup-pane') && node.classList.contains('e-designer-waitingpopup') &&
        node.classList.contains('bbi-designer-loader-designer') && !/\s/.test(owner.id) && node.classList.contains(owner.id + '_designer_waiting_popup');
    const maskLoadingVisuals = (): void => {
        if (!current()) { finish(true); return; }
        waitingPanes.forEach(node => {
            if (!ownWaitingPane(node)) { restoreVisibility(node); waitingPanes.delete(node); }
        });
        host.querySelectorAll<HTMLElement>('.viewer-blue-loader,[id$="_designer_progress_loader"],[id$="_designer_waiting_loader"],.e-designer-waitingpopup').forEach(node => {
            const ownBlueLoader = node.parentElement === host && node.classList.contains('viewer-blue-loader');
            if (!ownBlueLoader && !ownWaitingPane(node) && node.id !== owner.id + '_designer_progress_loader' &&
                node.id !== owner.id + '_designer_waiting_loader') return;
            // While pending, the SDK's basic loader remains the visible feedback;
            // only the designer's centred loaders are held back.
            if (ownBlueLoader && !mounted) { return; }
            if (ownWaitingPane(node)) waitingPanes.add(node);
            const value = node.style.getPropertyValue('visibility'), priority = node.style.getPropertyPriority('visibility');
            if (!visibility.has(node) || value !== 'hidden' || priority !== 'important') visibility.set(node, {value, priority});
            if (value !== 'collapse' && (value !== 'hidden' || priority !== 'important')) node.style.setProperty('visibility', 'hidden', 'important');
        });
    };
    const observe: () => void = (): void => {
        if (observer || typeof MutationObserver !== 'function') { return; }
        observer = new MutationObserver(records => {
            if (ended || (!pending && !mounted)) { return; }
            // A native loader can become visible without DOM insertion.
            // Handle that microtask before paint rather than allowing an
            // extra central-loader frame while early feedback owns the UI.
            if (records.some(record => record.type === 'childList' ||
                (record.target instanceof HTMLElement &&
                    (visibility.has(record.target) || ownWaitingPane(record.target) || record.target.id === owner.id + '_designer_progress_loader' ||
                        record.target.id === owner.id + '_designer_waiting_loader')))) maskLoadingVisuals();
        });
        observer.observe(host, {childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class']});
    };
    // Pending ended without a mount (timeout): resume the ordinary loading
    // experience synchronously. A later successful mount masks again as before.
    const releasePending: () => void = (): void => {
        if (!pending || ended || mounted) { return; }
        if (observer) { observer.disconnect(); observer = null; }
        restoreAllVisibility();
        settlePending();
    };
    // From the request onward, keep this owner's centred designer loaders
    // hidden so they cannot flash between the SDK loader and the early layout.
    if (current()) {
        try {
            maskLoadingVisuals();
            if (!ended) {
                observe();
                if (!observer) { releasePending(); } else { pendingTimer = setTimeout(releasePending, EARLY_FEEDBACK_PENDING_MASK_TIMEOUT_MS); }
            }
        } catch (_) { releasePending(); }
    } else { settlePending(); }
    // A visual consumer observes the promise; the native one-shot claim remains
    // available and retains its own authorization/path/instance checks.
    void Promise.all([assets, receipt && receipt.promise]).then(([ready, projection]) => {
        if (ended) { return; }
        // Native Open can retire a supplied receipt before these assets arrive.
        // Check pending ownership only here: after a successful mount the shared
        // factory owns visual cancellation, independently of transport cleanup.
        if (!ready || !current() || receipt.isCancelled() || !projection || typeof projection !== 'object' || Array.isArray(projection)) { finish(false); return; }
        const path = receipt.path.split('/');
        if (projection.dashboardId !== path[0].toLowerCase() ||
            typeof projection.revision !== 'string' || !/^[1-9][0-9]{0,8}$/.test(projection.revision) ||
            (path[1] !== '0' && projection.revision !== path[1]) ||
            typeof projection.sourceSha256 !== 'string' || !/^[a-f0-9]{64}$/.test(projection.sourceSha256)) { finish(false); return; }
        shared = (window as any).BoldBINativeShimmer;
        if (!shared || typeof shared.mountSdkHost !== 'function') { finish(false); return; }
        // Before native CSS arrives, the SDK's basic loader can occupy normal
        // flow and push the empty viewer below its real host. Remove only these
        // direct owned loaders while measuring. A rejected mount restores them
        // synchronously, before a paint; successful feedback keeps them out of flow.
        host.querySelectorAll<HTMLElement>('.viewer-blue-loader').forEach(node => {
            if (node.parentElement !== host) return;
            loaderFlow.set(node, {value: node.style.getPropertyValue('display'), priority: node.style.getPropertyPriority('display')});
            node.style.setProperty('display', 'none', 'important');
        });
        // The theme stylesheet may still be loading: select the shared dark
        // fallbacks for the appearance this embed will load. Inherited theme
        // variables still win once present.
        if (options.darkTheme === true) {
            themeMarker = owner.getAttribute('data-native-shimmer-theme');
            owner.setAttribute('data-native-shimmer-theme', 'dark');
        }
        // The shared native factory validates geometry and measures the current
        // host. The SDK does not infer canvas rows, header height or cell sizing.
        mounted = shared.mountSdkHost(owner, projection, {showToolbar: options.showToolbar, host,
            onFinish: () => finish(false)}) === true;
        if (!mounted || ended) { finish(false);return; }
        settlePending();
        maskLoadingVisuals();
        observe();
    }).catch(() => finish(true));
    return () => finish(true);
}
