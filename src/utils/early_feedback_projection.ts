/** Internal, instance-scoped optional transport. This never starts data queries. */
export interface EarlyFeedbackProjection {
    owner: HTMLElement;
    path: string;
    serviceUrl: string;
    authorizationToken: string;
    tenantUrl: string;
    siteIdentifier: string;
    claim(): boolean;
    isCancelled(): boolean;
    promise: Promise<any>;
    abort(): void;
}

export function prefetchEarlyFeedbackProjection(owner: HTMLElement, path: string, serviceUrl: string,
    tenantUrl: string, site: string, token: string, hasAPIKey: boolean): EarlyFeedbackProjection | null {
    if (!owner || !owner.isConnected || typeof fetch !== 'function' || typeof AbortController !== 'function' ||
        !/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}\/(0|[1-9][0-9]{0,8})$/i.test(path) ||
        typeof token !== 'string' || !token || /[\r\n]/.test(token) || !/^[a-z0-9_-]{1,128}$/i.test(site)) return null;
    let endpoint: URL, tenant: URL;
    try {
        endpoint = new URL(serviceUrl.replace(/\/$/, '') + '/v1.0/design/earlylayout/'); tenant = new URL(tenantUrl);
        const local = ['localhost', '127.0.0.1', '[::1]'].indexOf(endpoint.hostname) >= 0;
        if ((endpoint.protocol !== 'https:' && !(endpoint.protocol === 'http:' && local)) || endpoint.origin !== tenant.origin ||
            endpoint.username || endpoint.password || endpoint.search || endpoint.hash || tenant.username || tenant.password || tenant.search || tenant.hash) return null;
    } catch (_) { return null; }
    let claimed = false, cancelled = false, bodyComplete = false;
    let state: 'pending' | 'ready' | 'unavailable' | 'failed' = 'pending';
    const controller = new AbortController();
    // Includes CORS preflight and the authorized POST; independent of the
    // renderer's visible-lease deadline and ordinary Open.
    const timer = setTimeout(() => controller.abort(), 30000);
    const parts = path.split('/');
    const promise = (async () => {
        try {
            const response = await fetch(endpoint.href, {method: 'POST', credentials: 'omit', redirect: 'error', cache: 'no-store', signal: controller.signal,
                headers: {'Content-Type': 'application/json; charset=utf-8', Authorization: token, DashboardPath: path,
                    TenantURL: tenant.href, siteidentifier: site, hasAPIKey: String(hasAPIKey), isembed: 'true', IsPublic: 'false', Mode: 'view'},
                body: JSON.stringify({dashboardId: parts[0].toLowerCase(), version: Number(parts[1])})});
            // An explicit no-layout outcome is a completed optional request, not a
            // transport failure. Consume that result once and keep canonical Open;
            // replaying the same request would not grant an unavailable projection.
            if (response.status === 204) { bodyComplete = true; state = 'unavailable'; return null; }
            if (!response.ok || !response.body || !/^application\/json(?:;|$)/i.test(response.headers.get('Content-Type') || '') ||
                Number(response.headers.get('Content-Length')) > 65536) return null;
            const reader = response.body.getReader(); const chunks: Uint8Array[] = []; let bytes = 0;
            while (true) {
                const result = await reader.read(); if (result.done) { bodyComplete = true; break; }
                bytes += result.value.byteLength;
                if (bytes > 65536) { await reader.cancel(); return null; }
                chunks.push(result.value);
            }
            if (controller.signal.aborted || !owner.isConnected) return null;
            const data = new Uint8Array(bytes); let offset = 0;
            chunks.forEach(chunk => {data.set(chunk, offset); offset += chunk.length;});
            const projection = JSON.parse(new TextDecoder('utf-8', {fatal: true}).decode(data));
            if (!projection || typeof projection !== 'object' || Array.isArray(projection)) return null;
            state = 'ready';return projection;
        } catch (_) { return null; }
        finally {if (state === 'pending') state = 'failed';clearTimeout(timer); if (!bodyComplete) { controller.abort(); }}
    })();
    return {owner, path, serviceUrl: serviceUrl.trim().replace(/\/?$/, '/'), tenantUrl, siteIdentifier: site, authorizationToken: token, promise,
        claim: () => {if (claimed || cancelled || state === 'failed') return false; claimed = true; return true;},
        isCancelled: () => cancelled,
        abort: () => {cancelled = true;clearTimeout(timer);if (!bodyComplete) {controller.abort();}}};
}
