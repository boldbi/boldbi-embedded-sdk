"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForDependencyReadiness = waitForDependencyReadiness;
/** Event-driven wakeup around the SDK's existing readiness predicate. */
function waitForDependencyReadiness(isReady, isCurrent, onReady, listen = true) {
    let ended = false, poll, wake;
    // Event callbacks run before target onload handlers. The zero-delay task
    // observes their final state and coalesces simultaneous last resources.
    const notify = (event) => {
        var _a;
        const name = (_a = event.target) === null || _a === void 0 ? void 0 : _a.tagName;
        if (name !== 'SCRIPT' && name !== 'LINK' && event.type !== 'boldbi-sdk-resources-ready')
            return;
        clearTimeout(wake);
        wake = setTimeout(check, 0);
    };
    const stopEvents = () => { document.removeEventListener('load', notify, true); document.removeEventListener('error', notify, true); document.removeEventListener('boldbi-sdk-resources-ready', notify); };
    const cancel = () => { ended = true; clearTimeout(poll); clearTimeout(wake); clearTimeout(eventsDeadline); stopEvents(); };
    const check = () => {
        if (ended)
            return;
        if (!isCurrent()) {
            cancel();
            return;
        }
        if (isReady()) {
            cancel();
            onReady();
            return;
        }
        clearTimeout(poll);
        poll = setTimeout(check, 500);
    };
    if (listen) {
        document.addEventListener('load', notify, true);
        document.addEventListener('error', notify, true);
        document.addEventListener('boldbi-sdk-resources-ready', notify);
    }
    // Slow/older hosts retain the old 500 ms fallback after a bounded event window.
    const eventsDeadline = setTimeout(stopEvents, 3000);
    check();
    return cancel;
}
