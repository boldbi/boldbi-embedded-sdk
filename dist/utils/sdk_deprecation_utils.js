"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deprecatedMemberMap = exports.deprecatedEventMap = void 0;
exports.migrateDeprecatedEventKeys = migrateDeprecatedEventKeys;
exports.checkDeprecatedEmbedOptions = checkDeprecatedEmbedOptions;
exports.deprecatedMethod = deprecatedMethod;
// src/utils/sdk_deprecation_utils.ts
const default_1 = require("../types/default");
const helplink = default_1.DefaultConstructor.liveHelpLink;
// Event name remapping
exports.deprecatedEventMap = {
    'actionBegin': {
        newKey: 'events.onActionStart',
        url: 'component-api-v2.0/dashboard/dashboard-events/#onactionstart'
    },
    'actionComplete': {
        newKey: 'events.onActionComplete',
        url: 'component-api-v2.0/dashboard/dashboard-events/#onactioncomplete'
    },
    'ajaxBeforeLoad': {
        newKey: 'events.onAjaxStart',
        url: 'component-api-v2.0/dashboard/dashboard-events/#onajaxstart'
    },
    'onResize': {
        newKey: 'events.onResize',
        url: 'component-api-v2.0/pinboard/pinboard-events/#onresize'
    },
    'onError': {
        newKey: 'events.onError',
        url: 'component-api-v2.0/dashboard/dashboard-events/#onerror'
    },
    'beforeContextMenuRender': {
        newKey: 'events.viewer.beforeContextMenuRender',
        url: 'component-api-v2.0/dashboard/dashboard-events/#beforecontextmenurender'
    },
    'beforeNavigateUrlLinking': {
        newKey: 'events.viewer.beforeUrlNavigation',
        url: 'component-api-v2.0/dashboard/dashboard-events/#beforeurlnavigation'
    },
    'beforeViewdataIconRender': {
        newKey: 'events.viewer.beforeViewDataRender',
        url: 'component-api-v2.0/dashboard/dashboard-events/#beforeviewdatarender'
    },
    'dashboardSettings.beforeIconRender': {
        newKey: 'events.viewer.beforeToolBarItemsRender',
        url: 'component-api-v2.0/dashboard/dashboard-events/#beforetoolbaritemsrender'
    },
    'dashboardSettings.onIconClick': {
        newKey: 'events.viewer.onToolbarItemClick',
        url: 'component-api-v2.0/dashboard/dashboard-events/#ontoolbaritemclick'
    },
    'beforeDashboardMobileMenuOpen': {
        newKey: 'events.viewer.beforeMobileMenuOpen',
        url: 'component-api-v2.0/dashboard/dashboard-events/#beforemobilemenuopen'
    },
    'widgetSettings.beforeWidgetItemsListed': {
        newKey: 'events.designer.beforeWidgetsListed',
        url: 'component-api-v2.0/designer/designer-events/#beforewidgetslisted'
    },
    'dashboardSettings.beforeDesignerToolbarButtons': {
        newKey: 'events.designer.beforeToolbarButtonsRender',
        url: 'component-api-v2.0/designer/designer-events/#beforetoolbarbuttonsrender'
    },
    'dashboardSettings.beforeDesignerToolbarIconsRendered': {
        newKey: 'events.designer.beforeToolbarIconsRender',
        url: 'component-api-v2.0/designer/designer-events/#beforetoolbariconsrender'
    },
    'dashboardSettings.toolbarClick': {
        newKey: [
            'events.designer.onToolbarItemClick',
            'events.datasource.onToolbarItemClick'
        ],
        url: [
            'component-api-v2.0/designer/designer-events/#ontoolbaritemclick',
            'component-api-v2.0/datasource/datasource-events/#ontoolbaritemclick'
        ]
    },
    'dashboardSettings.beforePublishAs': {
        newKey: 'events.designer.beforePublishDialogOpen',
        url: 'component-api-v2.0/designer/designer-events/#beforepublishdialogopen'
    },
    'dashboardSettings.beforeDatasourceToolbarButtonsRendered': {
        newKey: 'events.datasource.beforeToolbarButtonsRender',
        url: 'component-api-v2.0/datasource/datasource-events/#beforetoolbarbuttonsrender'
    },
    'dashboardSettings.beforeDatasourceToolbarIconsRendered': {
        newKey: 'events.datasource.beforeToolbarIconsRender',
        url: 'component-api-v2.0/datasource/datasource-events/#beforetoolbariconsrender'
    },
    'beforeDatasourceSave': {
        newKey: 'events.datasource.beforeSave',
        url: 'component-api-v2.0/datasource/datasource-events/#beforesave'
    },
    'afterDatasourceSave': {
        newKey: 'events.datasource.afterSave',
        url: 'component-api-v2.0/datasource/datasource-events/#aftersave'
    },
    'onDrag': {
        newKey: 'events.pinboard.onDrag',
        url: 'component-api-v2.0/pinboard/pinboard-events/#ondrag'
    },
    'onDrop': {
        newKey: 'events.pinboard.onDrop',
        url: 'component-api-v2.0/pinboard/pinboard-events/#ondrop'
    },
    'onLayoutChange': {
        newKey: 'events.pinboard.onLayoutChange',
        url: 'component-api-v2.0/pinboard/pinboard-events/#onlayoutchange'
    },
    'onUnpin': {
        newKey: 'events.pinboard.onUnpin',
        url: 'component-api-v2.0/pinboard/pinboard-events/#onunpin'
    },
    'widgetSettings.beforeWidgetLayoutRender': {
        newKey: 'events.widget.beforeLayoutRender',
        url: 'component-api-v2.0/widget/widget-events/#beforelayoutrender'
    },
    'widgetSettings.beforeIconRender': {
        newKey: 'events.widget.beforeToolBarItemsRender',
        url: 'component-api-v2.0/widget/widget-events/#beforetoolbaritemsrender'
    },
    'widgetSettings.beforeWidgetControlMenuOpen': {
        newKey: 'events.widget.beforeContextMenuRender',
        url: 'component-api-v2.0/widget/widget-events/#beforecontextmenurender'
    },
    'widgetSettings.onIconClick': {
        newKey: 'events.widget.onToolbarItemClick',
        url: 'component-api-v2.0/widget/widget-events/#ontoolbaritemclick'
    },
    'widgetSettings.onWidgetControlMenuClick': {
        newKey: 'events.widget.onToolbarItemClick',
        url: 'component-api-v2.0/widget/widget-events/#ontoolbaritemclick'
    },
    'afterFilterApply': {
        newKey: 'events.filters.afterApply',
        url: 'component-api-v2.0/dashboard/dashboard-events/#afterapply'
    },
    'beforeFilterApply': {
        newKey: 'events.filters.beforeApply',
        url: 'component-api-v2.0/dashboard/dashboard-events/#beforeapply'
    },
    'dashboardSettings.onInteraction': {
        newKey: 'events.filters.onInteraction',
        url: 'component-api-v2.0/dashboard/dashboard-events/#oninteraction'
    },
    'dashboardSettings.onViewSavedFiltersClick': {
        newKey: 'events.filters.onSavedFilterClick',
        url: 'component-api-v2.0/dashboard/dashboard-events/#onsavedfilterclick'
    },
    'dashboardSettings.beforeSaveViewDialogOpen': {
        newKey: 'events.filters.beforeSaveViewDialogOpen',
        url: 'component-api-v2.0/dashboard/dashboard-events/#beforesaveviewdialogopen'
    },
    'dashboardSettings.beforeSaveAsViewDialogOpen': {
        newKey: 'events.filters.beforeSaveAsViewDialogOpen',
        url: 'component-api-v2.0/dashboard/dashboard-events/#beforesaveasviewdialogopen'
    }
};
// Member/property remapping
exports.deprecatedMemberMap = {
    'isBingMapRequired': {
        newKey: 'settings.bingMapRequired',
        url: 'component-api-v2.0/dashboard/dashboard-members/#bingmaprequired'
    },
    'hideErrorMessage': {
        newKey: 'settings.hideErrorMessage',
        url: 'component-api-v2.0/dashboard/dashboard-members/#hideerrormessage'
    },
    'restrictMobileView': {
        newKey: 'settings.restrictMobileView',
        url: 'component-api-v2.0/dashboard/dashboard-members/#restrictmobileview'
    },
    'disableAutoRecover': {
        newKey: 'settings.disableAutoRecover',
        url: 'component-api-v2.0/designer/designer-members/#disableautorecover'
    },
    'datasources': {
        newKey: 'settings.datasources',
        url: 'component-api-v2.0/designer/designer-members/#datasources'
    },
    //viewer
    'dashboardSettings.showHeader': {
        newKey: 'settings.viewer.header',
        url: 'component-api-v2.0/dashboard/dashboard-members/#header'
    },
    'dashboardSettings.showExport': {
        newKey: 'settings.viewer.export',
        url: 'component-api-v2.0/dashboard/dashboard-members/#viewerexport'
    },
    'dashboardSettings.showRefresh': {
        newKey: 'settings.viewer.refresh',
        url: 'component-api-v2.0/dashboard/dashboard-members/#refresh'
    },
    'dashboardSettings.showMoreOption': {
        newKey: 'settings.viewer.moreOption',
        url: 'component-api-v2.0/dashboard/dashboard-members/#moreoption'
    },
    'dashboardSettings.showMetrics': {
        newKey: 'settings.viewer.metrics',
        url: 'component-api-v2.0/dashboard/dashboard-members/#metrics'
    },
    'dashboardSettings.enableFullScreen': {
        newKey: 'settings.viewer.fullScreen',
        url: 'component-api-v2.0/dashboard/dashboard-members/#fullscreen'
    },
    'dashboardSettings.showDashboardParameter': {
        newKey: 'settings.viewer.dashboardParameter',
        url: 'component-api-v2.0/dashboard/dashboard-members/#dashboardparameter'
    },
    'dashboardSettings.dashboardName': {
        newKey: 'settings.viewer.dashboardName',
        url: 'component-api-v2.0/dashboard/dashboard-members/#dashboardname'
    },
    'dashboardSettings.enableFilterOverview': {
        newKey: 'settings.viewer.filterOverview.enabled',
        url: 'component-api-v2.0/dashboard/dashboard-members/#filteroverviewenabled'
    },
    'dashboardSettings.filterOverviewSettings.showSaveAsIcon': {
        newKey: 'settings.viewer.filterOverview.saveAs',
        url: 'component-api-v2.0/dashboard/dashboard-members/#save'
    },
    'dashboardSettings.filterOverviewSettings.showSaveIcon': {
        newKey: 'settings.viewer.filterOverview.save',
        url: 'component-api-v2.0/dashboard/dashboard-members/#saveas'
    },
    'dashboardSettings.filterOverviewSettings.showViewSavedFilterIcon': {
        newKey: 'settings.viewer.filterOverview.viewSavedFilter',
        url: 'component-api-v2.0/dashboard/dashboard-members/#viewsavedfilter'
    },
    'dashboardSettings.filterOverviewSettings.viewId': {
        newKey: 'settings.viewer.filterOverview.viewId',
        url: 'component-api-v2.0/dashboard/dashboard-members/#viewid'
    },
    'dashboardSettings.filterOverviewSettings.viewName': {
        newKey: 'settings.viewer.filterOverview.viewName',
        url: 'component-api-v2.0/dashboard/dashboard-members/#viewname'
    },
    'designCanvasSettings.margin': {
        newKey: 'settings.designCanvas.margin',
        url: 'component-api-v2.0/dashboard/dashboard-members/#margin'
    },
    'widgetContainerSettings.margin': {
        newKey: 'settings.viewer.widgetContainer.margin',
        url: 'component-api-v2.0/dashboard/dashboard-members/#widgetcontainermargin'
    },
    'widgetContainerSettings.boxShadow': {
        newKey: 'settings.viewer.widgetContainer.boxShadow',
        url: 'component-api-v2.0/dashboard/dashboard-members/#boxshadow'
    },
    'autoRefreshSettings.enabled': {
        newKey: 'settings.viewer.autoRefresh.enabled',
        url: 'component-api-v2.0/dashboard/dashboard-members/#autorefreshenabled'
    },
    'autoRefreshSettings.hourlySchedule.hours': {
        newKey: 'settings.viewer.autoRefresh.hourlySchedule.hours',
        url: 'component-api-v2.0/dashboard/dashboard-members/#hourlyschedulehours'
    },
    'autoRefreshSettings.hourlySchedule.minutes': {
        newKey: 'settings.viewer.autoRefresh.hourlySchedule.minutes',
        url: 'component-api-v2.0/dashboard/dashboard-members/#hourlyscheduleminutes'
    },
    'autoRefreshSettings.hourlySchedule.seconds': {
        newKey: 'settings.viewer.autoRefresh.hourlySchedule.seconds',
        url: 'component-api-v2.0/dashboard/dashboard-members/#hourlyscheduleseconds'
    },
    //designer
    'dashboardSettings.showPreviewAs': {
        newKey: 'settings.designer.previewAs',
        url: 'component-api-v2.0/designer/designer-members/#previewas'
    },
    'dashboardSettings.widgetsPanel.hideDefaultWidgets': {
        newKey: 'settings.designer.widgetsPanel.hideDefaultWidgets',
        url: 'component-api-v2.0/designer/designer-members/#hidedefaultwidgets'
    },
    'dashboardSettings.widgetsPanel.hideExistingWidgets': {
        newKey: 'settings.designer.widgetsPanel.hideExistingWidgets',
        url: 'component-api-v2.0/designer/designer-members/#hideexistingwidgets'
    },
    'dashboardSettings.widgetsPanel.existingDashboards': {
        newKey: 'settings.designer.widgetsPanel.existingDashboards',
        url: 'component-api-v2.0/designer/designer-members/#existingdashboards'
    },
    'dashboardSettings.dataSourceConfig.hideDataSourceConfig': {
        newKey: 'settings.designer.dataSourceConfig.hideDataSourceConfig',
        url: 'component-api-v2.0/designer/designer-members/#hidedatasourceconfig'
    },
    'dashboardSettings.dataSourceConfig.hideSampleDataSources': {
        newKey: 'settings.designer.dataSourceConfig.hideSampleDataSources',
        url: 'component-api-v2.0/designer/designer-members/#hidesampledatasources'
    },
    'dashboardSettings.dataSourceConfig.hideDataSourceList': {
        newKey: 'settings.designer.dataSourceConfig.hideDataSourceList',
        url: 'component-api-v2.0/designer/designer-members/#hidedatasourcelist'
    },
    'dashboardSettings.dataSourceConfig.hideExpression': {
        newKey: 'settings.designer.dataSourceConfig.hideExpression',
        url: 'component-api-v2.0/designer/designer-members/#hideexpression'
    },
    'preConfiguredWidgets.dashboardId': {
        newKey: 'settings.designer.preConfiguredWidgets.dashboardId',
        url: 'component-api-v2.0/designer/designer-members/#preconfiguredwidgetsdashboardid'
    },
    'preConfiguredWidgets.categoryName': {
        newKey: 'settings.designer.preConfiguredWidgets.categoryName',
        url: 'component-api-v2.0/designer/designer-members/#categoryname'
    },
    'dashboardSettings.viewDataSettings.showAllColumns': {
        newKey: 'settings.viewData.allColumns',
        url: 'component-api-v2.0/designer/designer-members/#allcolumns'
    },
    'dashboardSettings.viewDataSettings.enableExporting': {
        newKey: 'settings.viewData.exporting',
        url: 'component-api-v2.0/designer/designer-members/#exporting'
    },
    'dashboardSettings.viewDataSettings.enableColumnSelection': {
        newKey: 'settings.viewData.columnSelection',
        url: 'component-api-v2.0/designer/designer-members/#columnselection'
    },
    'dashboardSettings.themeSettings.appearance': {
        newKey: 'settings.theme.appearance',
        url: 'component-api-v2.0/dashboard/dashboard-members/#appearance'
    },
    'dashboardSettings.themeSettings.application': {
        newKey: 'settings.theme.application',
        url: 'component-api-v2.0/dashboard/dashboard-members/#application'
    },
    'dashboardSettings.themeSettings.dashboard': {
        newKey: 'settings.theme.dashboard',
        url: 'component-api-v2.0/dashboard/dashboard-members/#dashboard'
    },
    'dashboardSettings.themeSettings.isLocalTheme': {
        newKey: 'settings.theme.localTheme',
        url: 'component-api-v2.0/dashboard/dashboard-members/#localTheme'
    },
    'dashboardSettings.fontFamily': {
        newKey: 'settings.theme.fontFamily',
        url: 'component-api-v2.0/dashboard/dashboard-members/#fontFamily'
    },
    'widgetSettings.showExport': {
        newKey: 'settings.widget.export',
        url: 'component-api-v2.0/widget/widget-members/#widgetexport'
    },
    'widgetSettings.showFilter': {
        newKey: 'settings.widget.filter',
        url: 'component-api-v2.0/widget/widget-members/#filter'
    },
    'widgetSettings.showMaximize': {
        newKey: 'settings.widget.maximize',
        url: 'component-api-v2.0/widget/widget-members/#maximize'
    },
    'widgetSettings.showMoreOption': {
        newKey: 'settings.widget.moreOption',
        url: 'component-api-v2.0/widget/widget-members/#moreoption'
    },
    'dynamicConnection.isEnabled': {
        newKey: 'settings.dynamicConnection.enabled',
        url: 'component-api-v2.0/dashboard/dashboard-members/#dynamicconnectionenabled'
    },
    'dynamicConnection.identity': {
        newKey: 'settings.dynamicConnection.identity',
        url: 'component-api-v2.0/dashboard/dashboard-members/#identity'
    },
    'pinboardSettings.enablePinboardHeader': {
        newKey: 'settings.pinboard.header',
        url: 'component-api-v2.0/pinboard/pinboard-members/#header'
    },
    'pinboardSettings.enableUnpinWidget': {
        newKey: 'settings.pinboard.unpinWidget',
        url: 'component-api-v2.0/pinboard/pinboard-members/#unpinWidget'
    },
    'exportSettings.showCSV': {
        newKey: 'settings.export.csv',
        url: 'component-api-v2.0/dashboard/dashboard-members/#csv'
    },
    'exportSettings.showExcel': {
        newKey: 'settings.export.excel',
        url: 'component-api-v2.0/dashboard/dashboard-members/#excel'
    },
    'exportSettings.showImage': {
        newKey: 'settings.export.image',
        url: 'component-api-v2.0/dashboard/dashboard-members/#image'
    },
    'exportSettings.showPDF': {
        newKey: 'settings.export.pdf',
        url: 'component-api-v2.0/dashboard/dashboard-members/#pdf'
    },
    'customBrandSettings.hideHelpLink': {
        newKey: 'settings.brand.hideHelpLink',
        url: 'component-api-v2.0/designer/designer-members/#hidehelplink'
    },
    'customBrandSettings.customDomain': {
        newKey: 'settings.brand.domain',
        url: 'component-api-v2.0/designer/designer-members/#domain'
    },
    'languageSettings.hideLanguageDropdown': {
        newKey: 'settings.language.hideDropdown',
        url: 'component-api-v2.0/dashboard/dashboard-members/#hidedropdown'
    },
    'languageSettings.languageCode': {
        newKey: 'settings.language.code',
        url: 'component-api-v2.0/dashboard/dashboard-members/#code'
    },
    'localeSettings.culture': {
        newKey: 'settings.locale.culture',
        url: 'component-api-v2.0/dashboard/dashboard-members/#culture'
    },
    'localeSettings.dateFormat': {
        newKey: 'settings.locale.dateFormat',
        url: ''
    },
    'localeSettings.timeFormat': {
        newKey: 'settings.locale.timeFormat',
        url: ''
    },
    'localeSettings.appLocale': {
        newKey: 'settings.locale.appLocale',
        url: 'component-api-v2.0/dashboard/dashboard-members/#applocale'
    },
    'embedAiAssistant.enabled': {
        newKey: 'settings.aiAssistant.enabled',
        url: 'component-api-v2.0/dashboard/dashboard-members/#enabled'
    },
    'embedAiAssistant.position': {
        newKey: 'settings.aiAssistant.position',
        url: ''
    },
    'embedAiAssistant.name': {
        newKey: 'settings.aiAssistant.name',
        url: 'component-api-v2.0/dashboard/dashboard-members/#name'
    },
    'embedAiAssistant.hideAiDataUsage': {
        newKey: 'settings.aiAssistant.hideUsageAnalytics',
        url: 'component-api-v2.0/dashboard/dashboard-members/#hideusageanalytics'
    },
    'embedAiAssistant.hideAiChatHelp': {
        newKey: 'settings.aiAssistant.hideChatHelp',
        url: 'component-api-v2.0/dashboard/dashboard-members/#hidechathelp'
    },
    'embedAiAssistant.summary.enabled': {
        newKey: 'settings.aiAssistant.summary.enabled',
        url: 'component-api-v2.0/dashboard/dashboard-members/#summaryenabled'
    },
    'embedAiAssistant.summary.includeWidgetSummary': {
        newKey: 'settings.aiAssistant.summary.widget',
        url: 'component-api-v2.0/dashboard/dashboard-members/#summarywidget'
    },
    'embedAiAssistant.summary.includeDashboardSummary': {
        newKey: 'settings.aiAssistant.summary.dashboard',
        url: 'component-api-v2.0/dashboard/dashboard-members/#summarydashboard'
    }
};
// Methods property remapping
const deprecatedMethodMap = {
    destroy: {
        newKey: 'dispose',
        url: 'component-api-v2.0/dashboard/dashboard-methods/#dispose'
    },
    hideWaitingIndicator: {
        newKey: 'hideLoader',
        url: 'component-api-v2.0/dashboard/dashboard-methods/#hideloader'
    },
    updateDashboardTheme: {
        newKey: 'applyTheme',
        url: 'component-api-v2.0/dashboard/dashboard-methods/#applytheme'
    },
    validateServerAndWrapperVersion: {
        newKey: 'checkCompatibility',
        url: 'component-api-v2.0/dashboard/dashboard-methods/#checkcompatibility'
    },
    destroyStyles: {
        newKey: 'removeStyles',
        url: 'component-api-v2.0/dashboard/dashboard-methods/#removestyles'
    },
    addStyles: {
        newKey: 'applyStyles',
        url: 'component-api-v2.0/dashboard/dashboard-methods/#applystyles'
    },
    loadMultitabDashboard: {
        newKey: 'loadTabbedDashboards',
        url: 'component-api-v2.0/multi-tab/multi-tab-methods/#loadtabbeddashboards'
    },
    refreshDashboard: {
        newKey: 'viewer.refresh',
        url: 'component-api-v2.0/dashboard/dashboard-methods/#refresh'
    },
    resizeDashboard: {
        newKey: 'viewer.resize',
        url: 'component-api-v2.0/dashboard/dashboard-methods/#resize'
    },
    clearAllFilter: {
        newKey: 'viewer.resetFilter',
        url: 'component-api-v2.0/dashboard/dashboard-methods/#resetfilter'
    },
    updateFilters: {
        newKey: 'viewer.updateFilters',
        url: 'component-api-v2.0/dashboard/dashboard-methods/#updatefilters'
    },
    exportWidgetAsExcel: {
        newKey: 'viewer.exportAsExcel',
        url: 'component-api-v2.0/widget/widget-methods/#exportasexcel'
    },
    exportWidgetAsImage: {
        newKey: 'viewer.exportAsImage',
        url: 'component-api-v2.0/widget/widget-methods/#exportasimage'
    },
    exportWidgetAsPdf: {
        newKey: 'viewer.exportAsPdf',
        url: 'component-api-v2.0/widget/widget-methods/#exportaspdf'
    },
    exportWidgetAsCsv: {
        newKey: 'viewer.exportAsCSV',
        url: 'component-api-v2.0/widget/widget-methods/#exportascsv'
    },
    exportDashboardAsExcel: {
        newKey: 'viewer.resize',
        url: 'component-api-v2.0/dashboard/dashboard-methods/#exportasexcel'
    },
    exportDashboardAsImage: {
        newKey: 'viewer.resetFilter',
        url: 'component-api-v2.0/dashboard/dashboard-methods/#exportasimage'
    },
    exportDashboardAsPdf: {
        newKey: 'viewer.updateFilters',
        url: 'component-api-v2.0/dashboard/dashboard-methods/#exportaspdf'
    },
    addDashboardComment: {
        newKey: 'viewer.addComment',
        url: 'component-api-v2.0/dashboard/dashboard-methods/#addcomment'
    },
    editDashboardComment: {
        newKey: 'viewer.editComment',
        url: 'component-api-v2.0/dashboard/dashboard-methods/#editcomment'
    },
    deleteDashboardComment: {
        newKey: 'viewer.deleteComment',
        url: 'component-api-v2.0/dashboard/dashboard-methods/#deletecomment'
    },
    addWidgetComment: {
        newKey: 'viewer.addComment',
        url: 'component-api-v2.0/widget/widget-methods/#addcomment'
    },
    editWidgetComment: {
        newKey: 'viewer.editComment',
        url: 'component-api-v2.0/widget/widget-methods/#editcomment'
    },
    deleteWidgetComment: {
        newKey: 'viewer.deleteComment',
        url: 'component-api-v2.0/widget/widget-methods/#deletecomment'
    },
    getComments: {
        newKey: 'viewer.fetchComments',
        url: 'component-api-v2.0/dashboard/dashboard-methods/#fetchcomments'
    },
    loadMultipleWidgets: {
        newKey: 'loadWidgets',
        url: 'component-api-v2.0/widget/widget-methods/#loadwidgets'
    },
    loadDashboardWidget: {
        newKey: 'loadWidget',
        url: 'component-api-v2.0/widget/widget-methods/#loadwidget'
    },
    getWidgetData: {
        newKey: 'widget.fetchData',
        url: 'component-api-v2.0/widget/widget-methods/#fetchdata'
    },
    refreshWidgetData: {
        newKey: 'widget.refresh',
        url: 'component-api-v2.0/widget/widget-methods/#refresh'
    },
    getWidgetInstance: {
        newKey: 'widget.getInstance',
        url: 'component-api-v2.0/widget/widget-methods/#getinstance'
    },
    updateWidgetFilters: {
        newKey: 'widget.updatefilters',
        url: 'component-api-v2.0/widget/widget-methods/#updatefilters'
    },
    removeWidgetInstance: {
        newKey: 'widget.dispose',
        url: 'component-api-v2.0/widget/widget-methods/#dispose'
    },
    setFilterParameters: {
        newKey: 'setFilters',
        url: 'component-api-v2.0/widget/widget-methods/#setfilters'
    },
    deleteFilterView: {
        newKey: 'view.delete',
        url: 'component-api-v2.0/dashboard/dashboard-methods/#delete'
    },
    updateFilterView: {
        newKey: 'view.update',
        url: 'component-api-v2.0/dashboard/dashboard-methods/#update'
    },
    saveFilterView: {
        newKey: 'view.save',
        url: 'component-api-v2.0/dashboard/dashboard-methods/#save'
    },
    saveAsFilterView: {
        newKey: 'view.saveAs',
        url: 'component-api-v2.0/dashboard/dashboard-methods/#saveas'
    },
    getViewByViewId: {
        newKey: 'view.fetchById',
        url: 'component-api-v2.0/dashboard/dashboard-methods/#fetchbyid'
    },
    getViewsByDashboardId: {
        newKey: 'view.fetchByDashboardId',
        url: 'component-api-v2.0/dashboard/dashboard-methods/#fetchbydashboardid'
    },
    addWidgetToPinboard: {
        newKey: 'pinboard.addWidget',
        url: 'component-api-v2.0/pinboard/pinboard-methods/#addwidget'
    },
    updateDatasource: {
        newKey: 'dataSource.refresh',
        url: 'component-api-v2.0/datasource/datasource-methods/#refresh'
    },
    saveDashboard: {
        newKey: 'designer.publish',
        url: 'component-api-v2.0/designer/designer-methods/#publish'
    },
    getDashboardCategories: {
        newKey: 'fetchCategories',
        url: 'component-api-v2.0/dashboard/dashboard-methods/#fetchcategories'
    },
    createDashboardCategory: {
        newKey: 'createCategory',
        url: 'component-api-v2.0/dashboard/dashboard-methods/#createcategory'
    }
};
function migrateDeprecatedEventKeys(embedOptions) {
    const normalized = Object.assign({}, embedOptions);
    Object.keys(exports.deprecatedEventMap).forEach((oldKey) => {
        const { newKey, url } = exports.deprecatedEventMap[oldKey];
        // const newKey = deprecatedEventMap[oldKey];
        if (!newKey)
            return;
        // Traverse oldKey path
        const oldKeyParts = oldKey.split('.');
        let oldValue = embedOptions;
        for (const part of oldKeyParts) {
            if (oldValue && part in oldValue) {
                oldValue = oldValue[part];
            }
            else {
                oldValue = undefined;
                break;
            }
        }
        if (oldValue === undefined || oldValue === "")
            return;
        // Traverse newKey path and set value
        const targets = Array.isArray(newKey) ? newKey : [newKey];
        const urls = Array.isArray(url) ? url : [url];
        targets.forEach((newKey, index) => {
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
            const isMeaningfulValue = oldValue !== undefined && oldValue !== '';
            if (isMeaningfulValue) {
                const eventUrl = urls[index] || '';
                console.warn(`[Deprecation Warning] Event '${oldKey}' is deprecated. Use '${newKey}' instead. For more details, visit: %s`, `${helplink}${eventUrl}`);
                current[finalKey] = oldValue;
            }
        });
    });
    return normalized;
}
// Check deprecated nested config members
function checkDeprecatedEmbedOptions(options) {
    Object.keys(exports.deprecatedMemberMap).forEach((oldKey) => {
        let current = options;
        const keys = oldKey.split('.');
        let found = true;
        for (let i = 0; i < keys.length; i++) {
            if (current && keys[i] in current) {
                current = current[keys[i]];
            }
            else {
                found = false;
                break;
            }
        }
        if (found) {
            const { newKey, url } = exports.deprecatedMemberMap[oldKey];
            if (url) {
                console.warn(`[Deprecation Warning] '${oldKey}' is deprecated. Please use '${newKey}' instead. For more details, visit: %s`, `${helplink}${url}`);
            }
            else {
                console.warn(`[Deprecation Warning] '${oldKey}' is deprecated. Please use '${newKey}' instead.`);
            }
        }
    });
}
function deprecatedMethod(methodName) {
    const { newKey, url } = deprecatedMethodMap[methodName];
    if (newKey) {
        if (url) {
            console.warn(`[Deprecation Warning] '${methodName}()' is deprecated. Please use '${newKey}()' instead. For more details, visit: %s`, `${helplink}${url}`);
        }
        else {
            console.warn(`[Deprecation Warning] '${methodName}()' is deprecated. Please use '${newKey}()' instead.`);
        }
    }
}
