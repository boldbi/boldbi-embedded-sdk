/** Optional document-scoped selective viewer delivery. Never contains user or dashboard state. */
export interface OptimizedViewerAssetPlan {
    readonly root: string;
    readonly releaseId: string;
    readonly contract: any;
}
export declare function prepareOptimizedViewerAssets(root: string, nonce?: string): Promise<OptimizedViewerAssetPlan | null>;
/** Layout widget types the validated release cannot render (mirrors the server's ViewerWidgetTypeGate). */
export declare function unsupportedViewerWidgetTypes(contract: any, nativeTypes: any[]): any[];
/**
 * Whether this document already runs selective viewer resources (an authoring embed may then add the full designer).
 *
 * @returns {boolean} True once selective activation completed on this page.
 */
export declare function selectiveViewerAssetsActive(): boolean;
export declare function reserveLegacyViewerAssets(): void;
/** Whether the release renders every widget type it knows; then no dashboard type can need legacy delivery. */
export declare function viewerReleaseRendersAllTypes(contract: any): boolean;
/**
 * Optional server-parity widget-type gate (ViewerWidgetTypeGate). Consulted only when the release leaves some widget
 * type unsupported: the dashboard's early-layout types are then awaited and any unsupported type keeps legacy delivery
 * before a selective node is inserted. Unknown types (no layout, failure or a slow response) also keep legacy, even when
 * the caller set bundleOptimization explicitly: a selective page cannot render an unsupported widget and cannot switch to
 * legacy later, so it would end in an unrecoverable viewer. isCurrent false after the wait means no side effect.
 */
export interface ViewerWidgetTypeGate {
    types: () => Promise<any[] | null>;
    isCurrent?: () => boolean;
}
export declare function activateOptimizedViewerAssets(root: string, nonce?: string, gate?: ViewerWidgetTypeGate | null): Promise<boolean>;
