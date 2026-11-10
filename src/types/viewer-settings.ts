import { IAutoRefreshSettings } from './auto-refresh-settings';
import { IDashboardList } from './dashboard-list';
import { IFilterOverviewSettings } from './filter-overview-settings';
import { IWidgetContainerSettings } from './widget-container-settings';

export interface IViewerSettings {
    /** Defaults to shared early loading feedback for supported Enterprise viewer components. Set false for legacy loading. */
    earlyFeedback?: boolean;
    /** Defaults to matched selective bundles for supported private Enterprise components. Set false for legacy bundles. */
    bundleOptimization?: boolean;
    dashboardName?: string | IDashboardList[];
    showLoadingLogo?: boolean;
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
