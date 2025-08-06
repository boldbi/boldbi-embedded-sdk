// src/utils/sdk_deprecation_utils.ts

// Event name remapping
export const deprecatedEventMap: Record<string, string| string[]> = {
    'actionBegin': 'events.onActionStart',
    'actionComplete': 'events.onActionComplete',
    'ajaxBeforeLoad': 'events.onAjaxStart',
    'onResize': 'events.onResize',
    'onError': 'events.onError',
    'beforeContextMenuRender': 'events.viewer.beforeContextMenuRender',
    'beforeNavigateUrlLinking': 'events.viewer.beforeUrlNavigation',
    'beforeViewdataIconRender': 'events.viewer.beforeViewDataRender',
    'dashboardSettings.beforeIconRender': 'events.viewer.beforeToolBarItemsRender',
    'dashboardSettings.onIconClick': 'events.viewer.onToolbarItemClick',
    'beforeDashboardMobileMenuOpen': 'events.viewer.beforeMobileMenuOpen',
    'widgetSettings.beforeWidgetItemsListed': 'events.designer.beforeWidgetsListed',
    'dashboardSettings.beforeDesignerToolbarButtons': 'events.designer.beforeToolbarButtonsRender',
    'dashboardSettings.beforeDesignerToolbarIconsRendered': 'events.designer.beforeToolbarIconsRender',
    'dashboardSettings.toolbarClick': [
        'events.designer.onToolbarItemClick',
        'events.datasource.onToolbarItemClick'
    ],
    'dashboardSettings.beforePublishAs': 'events.designer.beforePublishDialogOpen',
    'dashboardSettings.beforeDatasourceToolbarButtonsRendered': 'events.datasource.beforeToolbarButtonsRender',
    'dashboardSettings.beforeDatasourceToolbarIconsRendered': 'events.datasource.beforeToolbarIconsRender',
    'beforeDatasourceSave': 'events.datasource.beforeSave',
    'afterDatasourceSave': 'events.datasource.afterSave',
    'onDrag': 'events.pinboard.onDrag',
    'onDrop': 'events.pinboard.onDrop',
    'onLayoutChange': 'events.pinboard.onLayoutChange',
    'onUnpin': 'events.pinboard.onUnpin',
    'widgetSettings.beforeWidgetLayoutRender': 'events.widget.beforeLayoutRender',
    'widgetSettings.beforeIconRender': 'events.widget.beforeToolBarItemsRender',
    'widgetSettings.beforeWidgetControlMenuOpen': 'events.widget.beforeContextMenuRender',
    'widgetSettings.onIconClick': 'events.widget.onToolbarItemClick',
    'widgetSettings.onWidgetControlMenuClick': 'events.widget.onToolbarItemClick',
    'afterFilterApply': 'events.filters.afterApply',
    'beforeFilterApply': 'events.filters.beforeApply',
    'dashboardSettings.onInteraction': 'events.filters.onInteraction',
    'dashboardSettings.onViewSavedFiltersClick': 'events.filters.onSavedFilterClick',
    'dashboardSettings.beforeSaveViewDialogOpen': 'events.filters.beforeSaveViewDialogOpen',
    'dashboardSettings.beforeSaveAsViewDialogOpen': 'events.filters.beforeSaveAsViewDialogOpen'
};

// Member/property remapping
export const deprecatedMemberMap: Record<string, string> = {
    'isBingMapRequired': 'settings.bingMapRequired',
    'hideErrorMessage': 'settings.hideErrorMessage',
    'restrictMobileView': 'settings.restrictMobileView',
    'disableAutoRecover': 'settings.disableAutoRecover',
    'datasources': 'settings.datasources',

    //viewer
    'dashboardSettings.showHeader': 'settings.viewer.header',
    'dashboardSettings.showExport': 'settings.viewer.export',
    'dashboardSettings.showRefresh': 'settings.viewer.refresh',
    'dashboardSettings.showMoreOption': 'settings.viewer.moreOption',
    'dashboardSettings.showMetrics': 'settings.viewer.metrics',
    'dashboardSettings.enableFullScreen': 'settings.viewer.fullScreen',
    'dashboardSettings.showDashboardParameter': 'settings.viewer.dashboardParameter',
    'dashboardSettings.dashboardName': 'settings.viewer.displayName',
    'dashboardSettings.enableFilterOverview': 'settings.viewer.filterOverview.enabled',
    'dashboardSettings.filterOverviewSettings.showSaveAsIcon': 'settings.viewer.filterOverview.saveAs',
    'dashboardSettings.filterOverviewSettings.showSaveIcon': 'settings.viewer.filterOverview.save',
    'dashboardSettings.filterOverviewSettings.showViewSavedFilterIcon': 'settings.viewer.filterOverview.viewSavedFilter',
    'dashboardSettings.filterOverviewSettings.viewId': 'settings.viewer.filterOverview.viewId',
    'dashboardSettings.filterOverviewSettings.viewName': 'settings.viewer.filterOverview.viewName',
    'designCanvasSettings.margin': 'settings.designCanvas.margin',
    'widgetContainerSettings.margin': 'settings.viewer.widgetContainer.margin',
    'widgetContainerSettings.boxShadow': 'settings.viewer.widgetContainer.boxShadow',
    'autoRefreshSettings.enabled': 'settings.viewer.autoRefresh.enabled',
    'autoRefreshSettings.hourlySchedule.hours': 'settings.viewer.autoRefresh.hourlySchedule.hours',
    'autoRefreshSettings.hourlySchedule.minutes': 'settings.viewer.autoRefresh.hourlySchedule.minutes',
    'autoRefreshSettings.hourlySchedule.seconds': 'settings.viewer.autoRefresh.hourlySchedule.seconds',
    //designer
    'dashboardSettings.showPreviewAs': 'settings.designer.previewAs',
    'dashboardSettings.widgetsPanel.hideDefaultWidgets': 'settings.designer.widgetsPanel.hideDefaultWidgets',
    'dashboardSettings.widgetsPanel.hideExistingWidgets': 'settings.designer.widgetsPanel.hideExistingWidgets',
    'dashboardSettings.widgetsPane.existingDashboards': 'settings.designer.widgetsPanel.existingDashboards',
    'dashboardSettings.dataSourceConfig.hideDataSourceConfig': 'settings.designer.dataSourceConfig.hideDataSourceConfig',
    'dashboardSettings.dataSourceConfig.hideSampleDataSources': 'settings.designer.dataSourceConfig.hideSampleDataSources',
    'dashboardSettings.dataSourceConfig.hideDataSourceList': 'settings.designer.dataSourceConfig.hideDataSourceList',
    'dashboardSettings.dataSourceConfig.hideExpression': 'settings.designer.dataSourceConfig.hideExpression',
    'preConfiguredWidgets.dashboardId': 'settings.designer.preConfiguredWidgets.dashboardId',
    'preConfiguredWidgets.categoryName': 'settings.designer.preConfiguredWidgets.categoryName',
    'dashboardSettings.viewDataSettings.showAllColumns': 'settings.viewData.allColumns',
    'dashboardSettings.viewDataSettings.enableExporting': 'settings.viewData.exporting',
    'dashboardSettings.viewDataSettings.enableColumnSelection': 'settings.viewData.columnSelection',
    'dashboardSettings.themeSettings.appearance': 'settings.theme.appearance',
    'dashboardSettings.themeSettings.application': 'settings.theme.application',
    'dashboardSettings.themeSettings.dashboard': 'settings.theme.dashboard',
    'dashboardSettings.themeSettings.isLocalTheme': 'settings.theme.localTheme',
    'dashboardSettings.fontFamily': 'settings.theme.fontFamily',
    'widgetSettings.showExport': 'settings.widgets.export',
    'widgetSettings.showFilter': 'settings.widgets.filter',
    'widgetSettings.showMaximize': 'settings.widgets.maximize',
    'widgetSettings.showMoreOption': 'settings.widgets.moreOption',
    'dynamicConnection.isEnabled': 'settings.dynamicConnection.enabled',
    'dynamicConnection.identity': 'settings.dynamicConnection.identity',
    'pinboardSettings.enablePinboardHeader': 'settings.pinboard.header',
    'pinboardSettings.enableUnpinWidget': 'settings.pinboard.unpinWidget',
    'exportSettings.showCSV': 'settings.export.csv',
    'exportSettings.showExcel': 'settings.export.image',
    'exportSettings.showImage': 'settings.export.excel',
    'exportSettings.showPDF': 'settings.export.pdf',
    'customBrandSettings.hideHelpLink': 'settings.brand.hideHelpLink',
    'customBrandSettings.customDomain': 'settings.brand.domain',
    'languageSettings.hideLanguageDropdown': 'settings.language.hideDropdown',
    'languageSettings.languageCode': 'settings.language.code',
    'localeSettings.culture': 'settings.locale.culture',
    'localeSettings.dateFormat': 'settings.locale.dateFormat',
    'localeSettings.timeFormat': 'settings.locale.timeFormat',
    'localeSettings.appLocale': 'settings.locale.appLocale',
    'embedAiAssistant.enabled': 'settings.aiAssistant.enabled',
    'embedAiAssistant.position': 'settings.aiAssistant.position',
    'embedAiAssistant.name': 'settings.aiAssistant.name',
    'embedAiAssistant.hideAiDataUsage': 'settings.aiAssistant.hideUsageAnalytics',
    'embedAiAssistant.hideAiChatHelp': 'settings.aiAssistant.hideChatHelp',
    'embedAiAssistant.summary.enabled': 'settings.aiAssistant.summary.enabled',
    'embedAiAssistant.summary.includeWidgetSummary': 'settings.aiAssistant.summary.widget',
    'embedAiAssistant.summary.includeDashboardSummary': 'settings.aiAssistant.summary.dashboard'
};

// Methods property remapping
const deprecatedMethodMap: Record<string, string> = {
    destroy: 'dispose',
    hideWaitingIndicator: 'hideLoader',
    updateDashboardTheme: 'applyTheme',
    validateServerAndWrapperVersion : 'checkCompatibility',
    destroyStyles: 'removeStyles',
    addStyles: 'applyStyles',
    loadMultitabDashboard: 'loadTabbedDashboards',
    refreshDashboard: 'viewer.refresh',
    resizeDashboard: 'viewer.resize',
    clearAllFilter: 'viewer.resetFilter',
    updateFilters: 'viewer.updateFilters',
    exportWidgetAsExcel: 'viewer.exportAsExcel',
    exportDashboardAsExcel: 'viewer.exportAsExcel',
    exportWidgetAsImage: 'viewer.exportAsImage',
    exportDashboardAsImage: 'viewer.exportAsImage',
    exportDashboardAsPdf: 'viewer.exportAsPdf',
    exportWidgetAsPdf: 'viewer.exportAsPdf',
    exportWidgetAsCsv: 'viewer.exportAsCSV',
    addDashboardComment: 'viewer.addComment',
    addWidgetComment: 'viewer.addComment',
    editDashboardComment: 'viewer.editComment',
    editWidgetComment: 'viewer.editComment',
    deleteDashboardComment: 'viewer.deleteComment',
    deleteWidgetComment: 'viewer.deleteComment',
    getComments: 'viewer.fetchComments',
    loadMultipleWidgets: 'loadWidgets',
    loadDashboardWidget: 'loadWidget',
    getWidgetData: 'widget.fetchData',
    refreshWidgetData : 'widget.refresh',
    getWidgetInstance : 'widget.getInstance',
    updateWidgetFilters: 'widget.updatefilters',
    removeWidgetInstance: 'widget.dispose',
    setFilterParameters: 'setFilters',
    deleteFilterView: 'view.delete',
    updateFilterView: 'view.update',
    saveFilterView: 'view.save',
    saveAsFilterView: 'view.saveAs',
    getViewByViewId: 'view.fetchById',
    getViewsByDashboardId: 'view.fetchByDashboardId',
    addWidgetToPinboard: 'pinboard.addWidget',
    updateDatasource: 'dataSource.refresh',
    saveDashboard: 'designer.publish',
    getDashboardCategories: 'fetchCategories',
    createDashboardCategory: 'createCategory'
};

export function migrateDeprecatedEventKeys(embedOptions: any): any {
    const normalized = { ...embedOptions };

    Object.keys(deprecatedEventMap).forEach((oldKey) => {
        const newKey = deprecatedEventMap[oldKey];
        if (!newKey) return;

        // Traverse oldKey path
        const oldKeyParts = oldKey.split('.');
        let oldValue = embedOptions;
        for (const part of oldKeyParts) {
            if (oldValue && part in oldValue) {
                oldValue = oldValue[part];
            } else {
                oldValue = undefined;
                break;
            }
        }

        if (oldValue === undefined || oldValue === "") return;

        // Traverse newKey path and set value
        const targets = Array.isArray(newKey) ? newKey : [newKey];
        targets.forEach((newKey) => {
            const newKeyParts = newKey.split('.');
            let current = normalized;

            for (let i = 0; i < newKeyParts.length - 1; i++) {
                const part = newKeyParts[i];
                if (!current[part] || typeof current[part] !== 'object') {
                    current[part] = {};
                }
                current = current[part];
            }
      
            const finalKey = newKeyParts[newKeyParts.length - 1];
            const isMeaningfulValue = oldValue !== undefined && oldValue !== "";
            if (isMeaningfulValue) {
                console.warn(`[Deprecation Warning] Event '${oldKey}' is deprecated. Use '${newKey}' instead.`);
                current[finalKey] = oldValue;
            }
        });
    });

    return normalized;
}


// Check deprecated nested config members
export function checkDeprecatedEmbedOptions(options: any): void {
    Object.keys(deprecatedMemberMap).forEach((oldKey) => {
        let current = options;
        const keys = oldKey.split('.');
        let found = true;
        for (let i = 0; i < keys.length; i++) {
            if (current && keys[i] in current) {
                current = current[keys[i]];
            } else {
                found = false;
                break;
            }
        }
        if (found) {
            console.warn(`[Deprecation Warning] '${oldKey}' is deprecated. Please use '${deprecatedMemberMap[oldKey]}' instead.`);
        }
    });
}

export function deprecatedMethod(  methodName: string): any {
    if (deprecatedMethodMap[methodName]) {
        console.warn(
            `[Deprecation Warning] '${methodName}()' is deprecated. Please use '${deprecatedMethodMap[methodName]}()' instead.`
        );
    }
}


