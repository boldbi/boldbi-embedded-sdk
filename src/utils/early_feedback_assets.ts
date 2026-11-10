/** Optional static visual assets. Never carries tokens, dashboard data or access grants. */
const flights = new Map<string, Promise<boolean>>();

function resourceBase(value: string): URL | null {
    try {
        const url = new URL(value);
        const local = ['localhost', '127.0.0.1', '[::1]'].indexOf(url.hostname) >= 0;
        if ((url.protocol !== 'https:' && !(url.protocol === 'http:' && local)) ||
            url.username || url.password || url.search || url.hash) { return null; }
        url.pathname = url.pathname.replace(/\/$/, '') + '/cdn/scripts/designer/native-widget-shimmer/';
        return url;
    } catch (_) { return null; }
}

function validAsset(entry: any, extension: string): boolean {
    if (!entry || typeof entry.sha256 !== 'string' || !/^[a-f0-9]{64}$/.test(entry.sha256) ||
        entry.file !== 'native-widget-shimmer-' + entry.sha256 + '.' + extension ||
        !Number.isSafeInteger(entry.bytes) || entry.bytes < 1 || entry.bytes > 262144) { return false; }
    const bytes = entry.sha256.match(/../g).map((hex: string) => String.fromCharCode(parseInt(hex, 16))).join('');
    return entry.integrity === 'sha256-' + btoa(bytes);
}

/** Best effort only: callers must not await this before normal authorization/rendering. */
export function beginEarlyFeedbackAssets(serverRoot: string, nonce?: string): Promise<boolean> {
    const base = resourceBase(serverRoot);
    if (!base || typeof fetch !== 'function' || typeof AbortController !== 'function') { return Promise.resolve(false); }
    const existing = flights.get(base.href);
    if (existing) { return existing; }
    const pending = new Promise<boolean>(resolve => {
        const controller = new AbortController();
        const nodes: Array<HTMLScriptElement | HTMLLinkElement> = [];
        let settled = false;
        const finish = (accepted: boolean): void => {
            if (settled) { return; }
            settled = true;
            clearTimeout(timer);
            controller.abort();
            nodes.forEach(node => {
                node.onload = null;
                node.onerror = null;
                if (!accepted) { node.remove(); }
            });
            resolve(accepted);
        };
        // This bounds downloading, not how long a visible layout is retained.
        // Manifest plus asset roundtrips must also work on slow connections.
        const timer = setTimeout(() => finish(false), 30000);
        const load = (entry: any, script: boolean): Promise<void> => new Promise((loaded, reject) => {
            const node: any = document.createElement(script ? 'script' : 'link');
            node.id = script ? 'bbi-native-widget-shimmer-script' : 'bbi-native-widget-shimmer-style';
            node.integrity = entry.integrity;
            node.crossOrigin = 'anonymous';
            node.fetchPriority = 'high';
            if (nonce) { node.nonce = nonce; }
            if (script) { node.src = new URL(entry.file, base).href; node.async = true; }
            else { node.rel = 'stylesheet'; node.href = new URL(entry.file, base).href; }
            node.onload = () => loaded();
            node.onerror = () => reject(new Error('early-feedback-asset-unavailable'));
            nodes.push(node);
            document.head.appendChild(node);
        });
        (async () => {
            const request: RequestInit & {priority: 'high'} = {
                credentials: 'omit', redirect: 'error', cache: 'no-cache', signal: controller.signal, priority: 'high'
            };
            const response = await fetch(new URL('manifest.json', base).href, request);
            if (!response.ok || settled) { return false; }
            const text = await response.text();
            if (settled || text.length > 65536) { return false; }
            const manifest = JSON.parse(text);
            if (manifest.schemaVersion !== 1 || manifest.kind !== 'native-widget-shimmer' ||
                !validAsset(manifest.script, 'js') || !validAsset(manifest.style, 'css')) { return false; }
            // A pre-existing server/other release owns these IDs. Never overwrite it.
            if (document.getElementById('bbi-native-widget-shimmer-script') ||
                document.getElementById('bbi-native-widget-shimmer-style')) { return false; }
            await Promise.all([load(manifest.style, false), load(manifest.script, true)]);
            return !settled;
        })().then(finish, () => finish(false));
    });
    flights.set(base.href, pending);
    return pending;
}
