"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prefetchEarlyFeedbackProjection = prefetchEarlyFeedbackProjection;
function prefetchEarlyFeedbackProjection(owner, path, serviceUrl, tenantUrl, site, token, hasAPIKey) {
    if (!owner || !owner.isConnected || typeof fetch !== 'function' || typeof AbortController !== 'function' ||
        !/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}\/(0|[1-9][0-9]{0,8})$/i.test(path) ||
        typeof token !== 'string' || !token || /[\r\n]/.test(token) || !/^[a-z0-9_-]{1,128}$/i.test(site))
        return null;
    let endpoint, tenant;
    try {
        endpoint = new URL(serviceUrl.replace(/\/$/, '') + '/v1.0/design/earlylayout/');
        tenant = new URL(tenantUrl);
        const local = ['localhost', '127.0.0.1', '[::1]'].indexOf(endpoint.hostname) >= 0;
        if ((endpoint.protocol !== 'https:' && !(endpoint.protocol === 'http:' && local)) || endpoint.origin !== tenant.origin ||
            endpoint.username || endpoint.password || endpoint.search || endpoint.hash || tenant.username || tenant.password || tenant.search || tenant.hash)
            return null;
    }
    catch (_) {
        return null;
    }
    let claimed = false, cancelled = false, bodyComplete = false;
    let state = 'pending';
    const controller = new AbortController();
    // Includes CORS preflight and the authorized POST; independent of the
    // renderer's visible-lease deadline and ordinary Open.
    const timer = setTimeout(() => controller.abort(), 30000);
    const parts = path.split('/');
    const promise = (() => __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(endpoint.href, { method: 'POST', credentials: 'omit', redirect: 'error', cache: 'no-store', signal: controller.signal,
                headers: { 'Content-Type': 'application/json; charset=utf-8', Authorization: token, DashboardPath: path,
                    TenantURL: tenant.href, siteidentifier: site, hasAPIKey: String(hasAPIKey), isembed: 'true', IsPublic: 'false', Mode: 'view' },
                body: JSON.stringify({ dashboardId: parts[0].toLowerCase(), version: Number(parts[1]) }) });
            // An explicit no-layout outcome is a completed optional request, not a
            // transport failure. Consume that result once and keep canonical Open;
            // replaying the same request would not grant an unavailable projection.
            if (response.status === 204) {
                bodyComplete = true;
                state = 'unavailable';
                return null;
            }
            if (!response.ok || !response.body || !/^application\/json(?:;|$)/i.test(response.headers.get('Content-Type') || '') ||
                Number(response.headers.get('Content-Length')) > 65536)
                return null;
            const reader = response.body.getReader();
            const chunks = [];
            let bytes = 0;
            while (true) {
                const result = yield reader.read();
                if (result.done) {
                    bodyComplete = true;
                    break;
                }
                bytes += result.value.byteLength;
                if (bytes > 65536) {
                    yield reader.cancel();
                    return null;
                }
                chunks.push(result.value);
            }
            if (controller.signal.aborted || !owner.isConnected)
                return null;
            const data = new Uint8Array(bytes);
            let offset = 0;
            chunks.forEach(chunk => { data.set(chunk, offset); offset += chunk.length; });
            const projection = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(data));
            if (!projection || typeof projection !== 'object' || Array.isArray(projection))
                return null;
            state = 'ready';
            return projection;
        }
        catch (_) {
            return null;
        }
        finally {
            if (state === 'pending')
                state = 'failed';
            clearTimeout(timer);
            if (!bodyComplete) {
                controller.abort();
            }
        }
    }))();
    return { owner, path, serviceUrl: serviceUrl.trim().replace(/\/?$/, '/'), tenantUrl, siteIdentifier: site, authorizationToken: token, promise,
        claim: () => { if (claimed || cancelled || state === 'failed')
            return false; claimed = true; return true; },
        isCancelled: () => cancelled,
        abort: () => { cancelled = true; clearTimeout(timer); if (!bodyComplete) {
            controller.abort();
        } } };
}
