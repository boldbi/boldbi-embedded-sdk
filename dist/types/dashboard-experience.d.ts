export interface IWidgetProgressSettings {
    showInBanner?: boolean;
    showInDetailsView?: boolean;
    showInWidgets?: boolean;
}
export interface IDashboardExperienceSettings {
    enableSkeletonLoading?: boolean;
    widgetProgress?: IWidgetProgressSettings;
}
