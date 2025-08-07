export interface ViewMethods {
    delete?: (viewId: string, callBackFn: Function) => void;
    update?: (viewParameters: any, callBackFunc: Function) => void;
    save?: (viewParameters: any, callBackFunc: Function) => void;
    saveAs?: (viewParameters: any, callBackFunc: Function) => void;
    fetchByDashboardId?: (dashboardId: string, callBackFn: Function) => void;
    fetchById?: (viewId: string, callBackFn: Function) => void;
}
