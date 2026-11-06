/** Event-driven wakeup around the SDK's existing readiness predicate. */
export function waitForDependencyReadiness(isReady: () => boolean, isCurrent: () => boolean, onReady: () => void, listen: boolean = true): () => void {
    let ended = false, poll: ReturnType<typeof setTimeout>, wake: ReturnType<typeof setTimeout>;
    // Event callbacks run before target onload handlers. The zero-delay task
    // observes their final state and coalesces simultaneous last resources.
    const notify = (event: Event): void => {
        const name = (event.target as HTMLElement)?.tagName;
        if (name !== 'SCRIPT' && name !== 'LINK' && event.type !== 'boldbi-sdk-resources-ready') return;
        clearTimeout(wake); wake = setTimeout(check, 0);
    };
    const stopEvents = (): void => {document.removeEventListener('load', notify, true);document.removeEventListener('error', notify, true);document.removeEventListener('boldbi-sdk-resources-ready', notify);};
    const cancel = (): void => {ended = true;clearTimeout(poll);clearTimeout(wake);clearTimeout(eventsDeadline);stopEvents();};
    const check = (): void => {
        if (ended) return;
        if (!isCurrent()) {cancel();return;}
        if (isReady()) {cancel();onReady();return;}
        clearTimeout(poll);poll = setTimeout(check, 500);
    };
    if (listen) {document.addEventListener('load', notify, true);document.addEventListener('error', notify, true);document.addEventListener('boldbi-sdk-resources-ready', notify);}
    // Slow/older hosts retain the old 500 ms fallback after a bounded event window.
    const eventsDeadline = setTimeout(stopEvents, 3000);
    check();
    return cancel;
}
