/** Optional document-scoped selective viewer delivery. Never contains user or dashboard state. */
export interface OptimizedViewerAssetPlan { readonly root: string; readonly releaseId: string; readonly contract: any; }
const coordinatorKey = '__boldbiSdkViewerAssetsV1';
const metadata = new Map<string, Promise<OptimizedViewerAssetPlan | null>>();
const own = (value: any, key: string): boolean => value != null && Object.prototype.hasOwnProperty.call(value, key);
const record = (value: any): boolean => value != null && typeof value === 'object' && !Array.isArray(value);
const digest = (value: any): boolean => typeof value === 'string' && /^[a-f0-9]{64}$/.test(value);
const names = (value: any): string[] => { if (!record(value)) { throw Error('Invalid viewer metadata map'); } return Object.keys(value); };
const sri = (hash: string): string => 'sha256-' + btoa(hash.match(/../g).map(byte => String.fromCharCode(parseInt(byte, 16))).join(''));
function rootUrl(value: string): URL | null {
    try {
        const url = new URL(value), local = ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname);
        if (typeof value !== 'string' || url.username || url.password || url.search || url.hash ||
            (url.protocol !== 'https:' && !(url.protocol === 'http:' && local))) { return null; }
        url.pathname = url.pathname.replace(/\/+$/, ''); return url;
    } catch (_) { return null; }
}
function asset(value: any, prefix: string, extension: string = 'js'): void {
    if (!record(value) || !digest(value.sha256) || value.file !== prefix + '-' + value.sha256 + '.' + extension ||
        (own(value, 'integrity') && value.integrity !== sri(value.sha256))) { throw Error('Invalid viewer asset identity'); }
}
function safePath(value: any): boolean {
    return typeof value === 'string' && /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)+$/.test(value) &&
        value.split('.').every(key => !['__proto__', 'prototype', 'constructor'].includes(key));
}
function runtimeDescriptor(value: any, families: any): void {
    if (!record(value) || Object.keys(value).sort().join(',') !== 'NameSpace,ScriptName' || !safePath(value.NameSpace) ||
        !/^(?:ej|ejdashboard|BoldBIDashboard)\./.test(value.NameSpace) || !own(families, value.ScriptName)) { throw Error('Invalid viewer runtime dependency'); }
}
function validate(contract: any): void {
    if (!record(contract) || contract.schemaVersion !== 1 || contract.kind !== 'sdk-viewer-selective' || !digest(contract.releaseId)) { throw Error('Unsupported viewer release'); }
    const selected = contract.selective, shared = contract.shared;
    if (!record(selected) || selected.version !== 1 || selected.runtimeEnabled !== true || selected.releaseId !== contract.releaseId ||
        !record(shared) || shared.version !== 1 || shared.runtimeEnabled !== true || !digest(shared.releaseId)) { throw Error('Invalid viewer release'); }
    for (const name of ['core', 'entry', 'common', 'loader']) { asset(selected[name], name); }
    for (const name of ['authoringEntry', 'authoringShell']) { if (selected[name]) { asset(selected[name], name === 'authoringEntry' ? 'authoring-entry' : 'authoring-shell'); } }
    asset(contract.foundation, 'sdk-foundation');
    if (!Number.isSafeInteger(contract.foundation.bytes) || contract.foundation.bytes < 1 || contract.foundation.bytes > 16777216 ||
        contract.foundation.integrity !== sri(contract.foundation.sha256)) { throw Error('Invalid viewer foundation'); }
    asset(contract.sharedLoader, 'loader'); asset(shared.loader, 'loader');
    if (contract.sharedLoader.sha256 !== shared.loader.sha256 || contract.sharedLoader.integrity !== sri(shared.loader.sha256)) { throw Error('Invalid shared loader'); }
    const bundles = names(shared.bundles), allowed = ['common', 'calendars', 'combobox', 'chart', 'grid', 'grid-runtime', 'polyfill', 'pivotgrid'];
    if (!bundles.length || bundles.length > 8 || !own(shared.bundles, 'common')) { throw Error('Invalid shared graph'); }
    const visiting = new Set<string>(), visited = new Set<string>();
    const visit = (name: string): void => {
        if (visited.has(name)) { return; } if (visiting.has(name) || !own(shared.bundles, name)) { throw Error('Invalid shared dependency graph'); }
        visiting.add(name); const entry = shared.bundles[name]; asset(entry, name);
        if (!allowed.includes(name) || !Array.isArray(entry.requires) || entry.requires.length > 8 || !Array.isArray(entry.inputs) || (name !== 'combobox' && !entry.inputs.length) || entry.inputs.length > 1024 || entry.inputs.some(input => typeof input !== 'string')) { throw Error('Invalid shared graph'); }
        entry.requires.forEach(visit); visiting.delete(name); visited.add(name);
    }; bundles.forEach(visit);
    if (shared.bundles.common.requires.length || bundles.some(name => name !== 'common' && !shared.bundles[name].requires.includes('common'))) { throw Error('Missing common prerequisite'); }
    const edges = {chart: ['common'], polyfill: ['common'], 'grid-runtime': ['common', 'polyfill'], grid: ['common', 'grid-runtime'], pivotgrid: ['common', 'chart', 'grid-runtime']};
    Object.keys(edges).forEach(name => { if (own(shared.bundles, name) && JSON.stringify(shared.bundles[name].requires) !== JSON.stringify(edges[name])) { throw Error('Invalid canonical shared prerequisite order'); } });
    const families = selected.runtimeFamilies;
    if (!record(families) || families.version !== 1 || names(families.files).length > 64 || !own(families.files, 'ej1.common.all.min.js')) { throw Error('Invalid runtime family graph'); }
    names(families.files).forEach(name => {
        if (!/^ej[12]\.[a-z]+(?:\.[a-z]+)*\.all\.min\.js$/.test(name)) { throw Error('Invalid runtime family'); }
        asset(families.files[name], 'runtime-' + name.slice(0, -7).replace(/\./g, '-'));
    });
    if (families.files['ej1.common.all.min.js'].sha256 !== contract.foundation.sha256) { throw Error('Foundation release mismatch'); }
    const chunks = names(selected.chunks);
    if (chunks.length > 1024 || !Array.isArray(selected.orderedInputs) || selected.orderedInputs.length !== chunks.length || new Set(selected.orderedInputs).size !== chunks.length || selected.orderedInputs.some(input => !own(selected.chunks, input))) { throw Error('Invalid widget chunk order'); }
    if (selected.authoringPrerequisites !== undefined && (!Array.isArray(selected.authoringPrerequisites) || selected.authoringPrerequisites.some(input => !own(selected.chunks, input)))) { throw Error('Invalid authoring prerequisites'); }
    chunks.forEach(key => { const entry = selected.chunks[key]; if (!record(entry) || !/^widget-\d+-[a-f0-9]{64}\.js$/.test(entry.file)) { throw Error('Invalid widget chunk'); } asset(entry, entry.file.slice(0, -68)); });
    names(selected.optionalModules || {}).forEach(name => { if (!['advanced-color', 'query-designer', 'code-editor'].includes(name)) { throw Error('Unknown optional viewer module'); } asset(selected.optionalModules[name], name); });
    if (selected.cultures) { asset(selected.cultures, 'cultures'); }
    const styles = selected.styles;
    if (!record(styles) || styles.version !== 1 || !Array.isArray(styles.slots) || styles.slots.length > 100000) { throw Error('Invalid style graph'); }
    asset(styles.common, 'styles-common', 'css'); names(styles.families).forEach(name => { if (!/^[a-z]+$/.test(name)) { throw Error('Invalid style family'); } asset(styles.families[name], 'styles-' + name, 'css'); });
    const styleNames = ['common', ...names(styles.families)];
    if (styles.slots.some(name => !styleNames.includes(name))) { throw Error('Unknown style slot'); }
    const types = names(selected.types), registry = selected.dependencyRegistry && selected.dependencyRegistry.runtime && selected.dependencyRegistry.runtime.requiredScripts;
    if (!types.length || types.length > 512 || !record(registry)) { throw Error('Invalid runtime widget registry'); }
    names(selected.constructors).forEach(type => { if (!own(selected.types, type) || !safePath(selected.constructors[type])) { throw Error('Invalid widget constructor'); } });
    types.forEach(type => {
        const inputs = selected.types[type]; if (inputs === null) { return; }
        if (!Array.isArray(inputs) || inputs.length > 1024 || inputs.some(input => !own(selected.chunks, input)) || !own(selected.constructors, type) ||
            !own(styles.typeFamilies, type) || !Array.isArray(styles.typeFamilies[type]) || styles.typeFamilies[type].some(name => !styleNames.includes(name))) { throw Error('Invalid widget closure'); }
        const required = own(registry, type) && registry[type];
        if (!record(required) || !Array.isArray(required.DependentScripts) || required.DependentScripts.length > 64 || !own(required, 'MainScript')) { throw Error('Invalid runtime dependency collection'); }
        [...required.DependentScripts, ...(required.MainScript ? [required.MainScript] : [])].forEach(entry => runtimeDescriptor(entry, families.files));
    });
    const freeze = (value: any, depth: number = 0): void => {
        if (depth > 64) { throw Error('Viewer metadata depth exceeded'); }
        if (value && typeof value === 'object') { Object.keys(value).forEach(key => { if (['__proto__', 'prototype'].includes(key)) { throw Error('Unsafe viewer metadata key'); } freeze(value[key], depth + 1); }); Object.freeze(value); }
    }; freeze(contract);
}
export function prepareOptimizedViewerAssets(root: string): Promise<OptimizedViewerAssetPlan | null> {
    const url = rootUrl(root); if (!url || typeof fetch !== 'function' || typeof AbortController !== 'function') { return Promise.resolve(null); }
    const canonical = url.href.replace(/\/$/, ''); if (metadata.has(canonical)) { return metadata.get(canonical); }
    const controller = new AbortController(); let timer: any, bodyComplete = false;
    const work = (async (): Promise<OptimizedViewerAssetPlan | null> => {
        try {
            const response = await fetch(canonical + '/cdn/scripts/designer/sdk-viewer/manifest.json', {credentials: 'omit', redirect: 'error', cache: 'no-store', signal: controller.signal});
            if (!response.ok || !response.body || !/^application\/json(?:;|$)/i.test(response.headers.get('Content-Type') || '') || Number(response.headers.get('Content-Length')) > 1048576) { return null; }
            const reader = response.body.getReader(), chunks: Uint8Array[] = []; let length = 0;
            while (true) { const result = await reader.read(); if (result.done) { break; } length += result.value.byteLength; if (length > 1048576) { void reader.cancel().catch(() => {}); return null; } chunks.push(result.value); }
            bodyComplete = true;
            if (controller.signal.aborted) { return null; }
            const bytes = new Uint8Array(length); let offset = 0; chunks.forEach(chunk => { bytes.set(chunk, offset); offset += chunk.length; });
            const contract = JSON.parse(new TextDecoder('utf-8', {fatal: true}).decode(bytes)); validate(contract);
            return Object.freeze({root: canonical, releaseId: contract.releaseId, contract});
        } catch (_) { return null; }
    })();
    // Keep default-on discovery bounded: a slow but healthy resource origin gets
    // a realistic network window, while an unavailable origin cannot hold the
    // normal viewer for the former 30-second opt-in budget. This preflight still
    // fails before script side effects and never replays legacy constructors
    // after partial selective activation.
    const result = Promise.race([work, new Promise<null>(resolve => { timer = setTimeout(() => { controller.abort(); resolve(null); }, 5000); })])
        .finally(() => { clearTimeout(timer); if (!bodyComplete) { controller.abort(); } });
    metadata.set(canonical, result); return result;
}
function conflict(): Error { return Error('Viewer resource mode or release conflict; clean reload required'); }
function coordinator(): any { return (window as any)[coordinatorKey]; }
function install(state: any): void { Object.defineProperty(window, coordinatorKey, {value: state}); }
function existingResources(): boolean { return ['boldbiViewerWidgetResources', 'boldbiViewerSharedResources', 'boldbiViewerStyleResources', 'boldbiDashboardResources'].some(name => (window as any)[name]); }
function legacyPresent(): boolean {
    const view = window as any;
    return !!view.BoldBIDashboardDesigner || !!view.BoldBIDashboard || !!view.ejdashboard ||
        Array.from(document.querySelectorAll('script[src]')).some((node: any) => /\/(?:ej\.dashboarddesigner|ej[12]\.web\.all|ej[12]\.common\.all|bbi-core)(?:\.min)?\.js(?:[?#]|$)/.test(node.src));
}
export function reserveLegacyViewerAssets(): void {
    const state = coordinator(); if (state && state.mode !== 'legacy' || existingResources()) { throw conflict(); }
    if (!state) { install({mode: 'legacy'}); }
}
export async function activateOptimizedViewerAssets(root: string, nonce: string = ''): Promise<boolean> {
    const url = rootUrl(root); if (!url) { return false; }
    const canonical = url.href.replace(/\/$/, ''); let state = coordinator();
    if (state) { if (state.mode === 'legacy') { return false; } if (state.mode === 'poison' || state.root !== canonical) { throw conflict(); } return state.promise; }
    if (existingResources()) { throw conflict(); }
    if (legacyPresent()) { reserveLegacyViewerAssets(); return false; }
    const plan = await prepareOptimizedViewerAssets(canonical); if (!plan) { return false; }
    state = coordinator(); if (state) { if (state.mode === 'legacy') { return false; } if (state.mode === 'poison' || state.root !== canonical || state.releaseId !== plan.releaseId) { throw conflict(); } return state.promise; }
    if (existingResources()) { throw conflict(); } if (legacyPresent()) { reserveLegacyViewerAssets(); return false; }
    state = {mode: 'loading', promise: null}; Object.defineProperties(state, {root: {value: canonical}, releaseId: {value: plan.releaseId}}); install(state);
    const view = window as any, contract = plan.contract, selected = contract.selective;
    const scriptBase = canonical + '/cdn/scripts/designer/', selectiveBase = scriptBase + 'viewer-selective/', sharedBase = scriptBase + 'viewer-shared/', styleBase = canonical + '/cdn/css/designer/';
    const scripts = new Map<string, Promise<void>>(); let beganScript = false, initialStyle: any;
    const recover = (): void => {
        if (state.mode === 'poison') { return; } state.mode = 'poison';
        try {
            if (view.console && typeof view.console.error === 'function') {
                view.console.error('BoldBI viewer resources could not be recovered. Reload before retrying the affected component.');
            }
        } catch (_) { /* Console diagnostics must never interrupt recovery notification. */ }
        try { view.dispatchEvent(new view.CustomEvent('boldbi-viewer-resource-error')); } catch (_) { /* Notification never conceals the original resource error. */ }
    };
    const resource = (entry: any, base: string, style: boolean = false): Promise<void> => {
        const href = new URL(entry.file, base).href;
        if (!style && scripts.has(href)) { return scripts.get(href); }
        const task = new Promise<void>((resolve, reject) => {
            const node: any = document.createElement(style ? 'link' : 'script'); let settled = false;
            const finish = (error?: Error): void => { if (settled) { return; } settled = true; clearTimeout(timer); node.onload = node.onerror = null; if (error) { node.remove(); reject(error); } else { resolve(); } };
            const timer = setTimeout(() => finish(Error('Viewer asset timeout; clean reload required')), 15000);
            node.crossOrigin = 'anonymous'; node.integrity = sri(entry.sha256); if (nonce) { node.nonce = nonce; }
            if (style) { node.rel = 'stylesheet'; node.href = href; initialStyle = node; } else { node.src = href; node.async = false; beganScript = true; }
            node.onload = () => finish(); node.onerror = () => finish(Error('Viewer asset download or integrity failure; clean reload required'));
            try { document.head.appendChild(node); } catch (_) { finish(Error('Viewer resource insertion failed; clean reload required')); }
        }); if (!style) { scripts.set(href, task); } return task;
    };
    const resolveNamespace = (path: string): any => {
        const native = path.replace(/^ej\./, 'BoldBIDashboard.'); return native.split('.').reduce((value, key) => value && value[key], view);
    };
    const publish = (name: string, value: any): void => { if (own(view, name)) { throw conflict(); } Object.defineProperty(view, name, {value}); };
    state.promise = (async (): Promise<boolean> => {
        try {
            await resource(selected.styles.common, styleBase, true);
            await resource(contract.foundation, selectiveBase);
            await resource(contract.sharedLoader, sharedBase);
            if (!view.BoldBISharedResources || typeof view.BoldBISharedResources.create !== 'function') { throw conflict(); }
            const shared = view.BoldBISharedResources.create(document, contract.shared, sharedBase, contract.shared.releaseId, {nonce, trustedAssetOrigin: url.origin});
            publish('boldbiViewerSharedResources', shared); await shared.load('common');
            for (const name of ['core', 'entry', 'common', 'loader']) { await resource(selected[name], selectiveBase); }
            if (!view.BoldBIOrderedStyles || !view.BoldBIViewerWidgets) { throw conflict(); }
            const styles = view.BoldBIOrderedStyles.create({document, manifest: selected.styles, link: initialStyle, baseUrl: styleBase, trustedAssetOrigin: url.origin});
            let widgets: any;
            const ensureRuntime = async (types: string[]): Promise<void> => {
                try {
                    if (state.mode === 'poison') { throw conflict(); }
                    const required = new Map<string, any>(), registry = selected.dependencyRegistry.runtime.requiredScripts;
                    for (const type of types) {
                        if (!own(registry, type)) { throw conflict(); } const entry = registry[type];
                        [...entry.DependentScripts, ...(entry.MainScript ? [entry.MainScript] : [])].forEach(value => { if (!required.has(value.ScriptName)) { required.set(value.ScriptName, value); } });
                    }
                    const aliases = {'ej2.calendars.all.min.js': 'calendars', 'ej2.combobox.all.min.js': 'combobox', 'ej2.chart.all.min.js': 'chart', 'ej2.grid.all.min.js': 'grid', 'ej2.pivotgrid.all.min.js': 'pivotgrid'};
                    const selectedShared: string[] = [], remaining: string[] = [];
                    required.forEach((value, name) => { const alias = aliases[name]; if (alias && shared.has(alias)) { selectedShared.push(alias); } else { remaining.push(name); } });
                    shared.assertCompatibleLegacyScripts(remaining, selectedShared);
                    for (const [name, value] of required) {
                        const alias = aliases[name];
                        if (alias && shared.has(alias)) { await shared.load(alias); }
                        else if (resolveNamespace(value.NameSpace) == null) {
                            const pinned = widgets.resolveRuntimeScript(name, scriptBase), entry = selected.runtimeFamilies.files[name];
                            if (!pinned || pinned.url !== new URL(entry.file, selectiveBase).href || pinned.integrity !== sri(entry.sha256) || pinned.crossOrigin !== 'anonymous') { throw conflict(); }
                            await resource(entry, selectiveBase);
                        }
                        if (typeof resolveNamespace(value.NameSpace) !== 'function') { throw Error('Viewer runtime constructor missing; clean reload required'); }
                    }
                } catch (error) { recover(); throw error; }
            };
            widgets = view.BoldBIViewerWidgets.create({document, manifest: selected, expectedRelease: selected.releaseId, nonce, baseUrl: selectiveBase,
                styles: {ensure: (types: string[]) => {
                    const families: string[] = []; if ((document.querySelector && document.querySelector('.e-bigger,.e-small,.e-filled,.e-outline')) || (view.matchMedia && view.matchMedia('(pointer: coarse)').matches)) { families.push('variants'); }
                    types.forEach(type => { if (!own(selected.styles.typeFamilies, type)) { throw conflict(); } families.push(...selected.styles.typeFamilies[type]); }); return styles.ensure(families);
                }}, runtime: {ensure: ensureRuntime}, verify: (types: string[]) => types.every(type => typeof resolveNamespace(selected.constructors[type]) === 'function')});
            widgets.recover = recover;
            publish('boldbiViewerStyleResources', Object.freeze({ensure: (families: string[]) => styles.ensure(families), recover}));
            publish('boldbiViewerWidgetResources', widgets); publish('boldbiRecoverViewerAssets', recover); state.mode = 'selective'; return true;
        } catch (error) {
            if (beganScript) { recover(); throw Error('Viewer selective activation failed; clean reload required'); }
            if (initialStyle) { initialStyle.remove(); } state.mode = 'legacy'; return false;
        }
    })(); return state.promise;
}
