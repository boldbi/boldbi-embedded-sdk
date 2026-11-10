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
export declare function prefetchEarlyFeedbackProjection(owner: HTMLElement, path: string, serviceUrl: string, tenantUrl: string, site: string, token: string, hasAPIKey: boolean): EarlyFeedbackProjection | null;
