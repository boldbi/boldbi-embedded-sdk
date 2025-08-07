import { IAutoRefreshSettings } from './auto-refresh-settings';
import { IDashboardList } from './dashboard-list';
import { IFilterOverviewSettings } from './filter-overview-settings';
import { IWidgetContainerSettings } from './widget-container-settings';
export interface IViewerSettings {
    dashboardName?: string | IDashboardList[];
    header?: boolean;
    export?: boolean;
    refresh?: boolean;
    moreOption?: boolean;
    fullScreen?: boolean;
    edit?: boolean;
    dashboardParameter?: boolean;
    comment?: boolean;
    metrics?: boolean;
    filterOverview?: IFilterOverviewSettings;
    widgetContainer?: IWidgetContainerSettings;
    autoRefresh?: IAutoRefreshSettings;
}
