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
exports.beginEarlyFeedbackAssets = beginEarlyFeedbackAssets;
/** Optional static visual assets. Never carries tokens, dashboard data or access grants. */
const flights = new Map();
function resourceBase(value) {
    try {
        const url = new URL(value);
        const local = ['localhost', '127.0.0.1', '[::1]'].indexOf(url.hostname) >= 0;
        if ((url.protocol !== 'https:' && !(url.protocol === 'http:' && local)) ||
            url.username || url.password || url.search || url.hash) {
            return null;
        }
        url.pathname = url.pathname.replace(/\/$/, '') + '/cdn/scripts/designer/native-widget-shimmer/';
        return url;
    }
    catch (_) {
        return null;
    }
}
function validAsset(entry, extension) {
    if (!entry || typeof entry.sha256 !== 'string' || !/^[a-f0-9]{64}$/.test(entry.sha256) ||
        entry.file !== 'native-widget-shimmer-' + entry.sha256 + '.' + extension ||
        !Number.isSafeInteger(entry.bytes) || entry.bytes < 1 || entry.bytes > 262144) {
        return false;
    }
    const bytes = entry.sha256.match(/../g).map((hex) => String.fromCharCode(parseInt(hex, 16))).join('');
    return entry.integrity === 'sha256-' + btoa(bytes);
}
/** Best effort only: callers must not await this before normal authorization/rendering. */
function beginEarlyFeedbackAssets(serverRoot, nonce) {
    const base = resourceBase(serverRoot);
    if (!base || typeof fetch !== 'function' || typeof AbortController !== 'function') {
        return Promise.resolve(false);
    }
    const existing = flights.get(base.href);
    if (existing) {
        return existing;
    }
    const pending = new Promise(resolve => {
        const controller = new AbortController();
        const nodes = [];
        let settled = false;
        const finish = (accepted) => {
            if (settled) {
                return;
            }
            settled = true;
            clearTimeout(timer);
            controller.abort();
            nodes.forEach(node => {
                node.onload = null;
                node.onerror = null;
                if (!accepted) {
                    node.remove();
                }
            });
            resolve(accepted);
        };
        // This bounds downloading, not how long a visible layout is retained.
        // Manifest plus asset roundtrips must also work on slow connections.
        const timer = setTimeout(() => finish(false), 30000);
        const load = (entry, script) => new Promise((loaded, reject) => {
            const node = document.createElement(script ? 'script' : 'link');
            node.id = script ? 'bbi-native-widget-shimmer-script' : 'bbi-native-widget-shimmer-style';
            node.integrity = entry.integrity;
            node.crossOrigin = 'anonymous';
            node.fetchPriority = 'high';
            if (nonce) {
                node.nonce = nonce;
            }
            if (script) {
                node.src = new URL(entry.file, base).href;
                node.async = true;
            }
            else {
                node.rel = 'stylesheet';
                node.href = new URL(entry.file, base).href;
            }
            node.onload = () => loaded();
            node.onerror = () => reject(new Error('early-feedback-asset-unavailable'));
            nodes.push(node);
            document.head.appendChild(node);
        });
        (() => __awaiter(this, void 0, void 0, function* () {
            const request = {
                credentials: 'omit', redirect: 'error', cache: 'no-cache', signal: controller.signal, priority: 'high'
            };
            const response = yield fetch(new URL('manifest.json', base).href, request);
            if (!response.ok || settled) {
                return false;
            }
            const text = yield response.text();
            if (settled || text.length > 65536) {
                return false;
            }
            const manifest = JSON.parse(text);
            if (manifest.schemaVersion !== 1 || manifest.kind !== 'native-widget-shimmer' ||
                !validAsset(manifest.script, 'js') || !validAsset(manifest.style, 'css')) {
                return false;
            }
            // A pre-existing server/other release owns these IDs. Never overwrite it.
            if (document.getElementById('bbi-native-widget-shimmer-script') ||
                document.getElementById('bbi-native-widget-shimmer-style')) {
                return false;
            }
            yield Promise.all([load(manifest.style, false), load(manifest.script, true)]);
            return !settled;
        }))().then(finish, () => finish(false));
    });
    flights.set(base.href, pending);
    return pending;
}
