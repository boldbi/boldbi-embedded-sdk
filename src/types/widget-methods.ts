export interface WidgetMethods {
    dispose?: (eleID: string) => void;
    updatefilters?: (filters: any) => void;
    setFilters?: (filters: any) => void;
    getInstance?: (eleID: string) => void;
    refresh?: (widgetNames: string, hideLoader: boolean, dashboardId: string) => void;
    fetchData?: (widgetName: string, clientFnc: Function, dashboardId: string) => void;
}