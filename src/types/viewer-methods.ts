
export interface ViewerMethods {
    refresh?: () => void;
    resize?: () => void;
    resetFilter?: () => void;
    updateFilters?: (filtervalues: string) => void;
    exportAsExcel?: (exportInformation: ExportInformation) => void;
    exportAsImage?: (exportInformation: ExportInformation) => void;
    exportAsPdf?: (exportInformation: ExportInformation) => void;
    exportAsCSV?: (exportInformation: ExportInformation) => void;
    addComment?: (comment: CommentArgs, callBackFn: Function) => void;
    editComment?: (comment: CommentArgs, callBackFn: Function) => void;
    deleteComment?: (comment: CommentArgs, callBackFn: Function) => void;
    fetchComments?: (commentType: string, comment: CommentArgs, callBackFn: Function) => void;
}

export interface ExportInformation {
    dashboardId: string;
    widgetName?: string;
    fileName?: string;
    fileType?: string;
    exportImageFormat?: string;
    resolutionDpi?: string;
    showAppliedFilters?: boolean;
    pageSize?: string;
    pageOrientation?: string;
}


export interface CommentArgs {
    content: string;
    dashboardId: string;
    widgetId?: string;
    multitabDashboardId?: string;
    parentCommentId?: string;
    commentId?: string;
}
