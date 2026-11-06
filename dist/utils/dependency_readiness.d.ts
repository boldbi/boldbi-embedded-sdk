/** Event-driven wakeup around the SDK's existing readiness predicate. */
export declare function waitForDependencyReadiness(isReady: () => boolean, isCurrent: () => boolean, onReady: () => void, listen?: boolean): () => void;
