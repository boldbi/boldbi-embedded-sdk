/** Optional document-scoped selective viewer delivery. Never contains user or dashboard state. */
export interface OptimizedViewerAssetPlan {
    readonly root: string;
    readonly releaseId: string;
    readonly contract: any;
}
export declare function prepareOptimizedViewerAssets(root: string): Promise<OptimizedViewerAssetPlan | null>;
export declare function reserveLegacyViewerAssets(): void;
export declare function activateOptimizedViewerAssets(root: string, nonce?: string): Promise<boolean>;
