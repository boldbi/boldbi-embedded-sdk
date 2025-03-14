export interface IWidgetList {
    widgetName: string;
    containerId: string;
}
export interface IDatasources {
    id: string;
    canEdit?: boolean;
    canDelete?: boolean;
}
export interface IDashboardOptions {
    serverUrl?: string;
    dashboardId?: string;
    dashboardPath?: string;
    datasourceId?: string;
    datasourceName?: string;
    embedContainerId?: string;
    viewId?: string;
    viewName?: string;
    nonce?: string;
    filterParameters?: string;
    height?: string;
    width?: string;
    token?: string;
    pinboardName?: string;
    dashboardIds?: string[];
    dashboardPaths?: string[];
    anonymousToken?: IAnonymousToken;
    datasources?: IDatasources[];
    widgetList?: IWidgetList[];
    expirationTime?: number;
    scalingFactor?: number;
    isRemoveStyle?: boolean;
    isBingMapRequired?: boolean;
    disableAutoRecover?: boolean;
    restrictMobileView?: boolean;
    embedType?: typeof BoldBI.EmbedType;
    environment?: typeof BoldBI.Environment;
    mode?: typeof BoldBI.Mode;
    theme?: typeof BoldBI.Theme;
    localData?: ILocalData;
    layoutSettings?: ILayoutSettings;
    dashboardSettings?: IDashboardSettings;
    widgetSettings?: IWidgetSettings;
    dynamicConnection?: IDynamicConnection;
    exportSettings?: IExportSettings;
    authorizationServer?: IAuthorizationServer;
    autoRefreshSettings?: IAutoRefreshSettings;
    localeSettings?: ILocaleSettings;
    languageSettings?: ILanguageSettings;
    customBrandSettings?: ICustomBrandSettings;
    toolbarSettings?: IToolbarSettings;
    pinboardSettings?: IPinboardSettings;
    designCanvasSettings?: IDesignCanvasSettings;
    widgetContainerSettings?: IWidgetContainerSettings;
    preConfiguredWidgets?: IPreConfiguredWidgets;
    embedAiAssistant?: IEmbedAiAssistant;
    actionBegin?: (_event: Event) => void;
    actionComplete?: (_event: Event) => void;
    beforeContextMenuRender?: (_event: Event) => void;
    beforeDashboardMobileMenuOpen?: (_event: Event) => void;
    beforeNavigateUrlLinking?: (_event: Event) => void;
    beforeNavigateToDashboard?: (_event: Event) => void;
    beforeFilterApply?: (_event: Event) => void;
    afterFilterApply?: (_event: Event) => void;
    onError?: (_event: Event) => void;
    onUnpin?: (_event: Event) => void;
    onDrag?: (_event: Event) => void;
    onDrop?: (_event: Event) => void;
    onLayoutChange?: (_event: Event) => void;
    onResize?: (_event: Event) => void;
    beforeDatasourceSave?: (_event: Event) => void;
    afterDatasourceSave?: (_event: Event) => void;
    ajaxBeforeLoad?: (_event: Event) => void;
    enableDomainMasking?: boolean;
}
export interface ILocalData {
    layoutData?: string;
    widgetData?: string;
    loadFromData?: boolean;
}
export interface ILayoutSettings {
    hideDesignerScroller?: boolean;
}
export interface IAnonymousToken {
    isEnabled?: boolean;
    groupName?: string;
    userEmail?: string;
}
export interface IDashboardList {
    dashboardId: string;
    dashboardName: string;
}
export interface IDashboardSettings {
    dashboardName?: string | IDashboardList[];
    fontFamily?: string;
    showHeader?: boolean;
    showExport?: boolean;
    showRefresh?: boolean;
    showMoreOption?: boolean;
    enableTheme?: boolean;
    enableFilterOverview?: boolean;
    enableFullScreen?: boolean;
    showDashboardParameter?: boolean;
    enableComment?: boolean;
    showPreviewAs?: boolean;
    showMetrics?: boolean;
    widgetsPanel?: IWidgetsPanel;
    dataSourceConfig?: IDatasourceConfig;
    viewDataSettings?: IViewDataSettings;
    themeSettings?: IThemeSettings;
    filterOverviewSettings?: IFilterOverviewSettings;
    onFavoriteIconClick?: (_event: Event) => void;
    beforeIconRender?: (_event: Event) => void;
    onIconClick?: (_event: Event) => void;
    onInteraction?: (_event: Event) => void;
    beforePublishAs?: (_event: Event) => void;
    beforeDesignerToolbarButtons?: (_event: Event) => void;
    beforeDesignerToolbarIconsRendered?: (_event: Event) => void;
    beforeDatasourceToolbarButtonsRendered?: (_event: Event) => void;
    beforeDatasourceToolbarIconsRendered?: (_event: Event) => void;
    toolbarClick?: (_event: Event) => void;
    saveFilterClick?: (_event: Event) => void;
    saveAsFilterClick?: (_event: Event) => void;
    viewSavedFiltersClick?: (_event: Event) => void;
    beforeSaveViewDialogOpen?: (_event: Event) => void;
    beforeSaveAsViewDialogOpen?: (_event: Event) => void;
    onViewSavedFiltersClick?: (_event: Event) => void;
}
export interface ILanguageSettings {
    hideLanguageDropdown?: boolean;
    languageCode?: string;
}
export interface ICustomBrandSettings {
    hideHelpLink?: boolean;
    customBrandName?: string;
    customDomain?: string;
}
export interface IWidgetsPanel {
    defaultPanelDisplayText?: string;
    existingPanelDisplayText?: string;
    defaultPanelSearchPlaceholder?: string;
    existingPanelSearchPlaceholder?: string;
    existingDashboards?: string[];
    hideDefaultWidgets?: boolean;
    hideExistingWidgets?: boolean;
    dragAndDropSettings?: IDragAndDropSettings;
}
export interface IDragAndDropSettings {
    rowSpan?: number | null;
    columnSpan?: number | null;
    isWidgetMode?: boolean;
}
export interface IDatasourceConfig {
    hideDataSourceConfig?: boolean;
    hideSampleDataSources?: boolean;
}
export interface IViewDataSettings {
    showAllColumns?: boolean;
    enableExporting?: boolean;
    enableColumnSelection?: boolean;
}
export interface IThemeSettings {
    appearance?: string;
    application?: string;
    dashboard?: string;
    isLocalTheme?: boolean;
}
export interface IFilterOverviewSettings {
    viewId?: string;
    viewName?: string;
    showSaveAsIcon?: boolean;
    showSaveIcon?: boolean;
    showViewSavedFilterIcon?: boolean;
}
export interface IWidgetSettings {
    showExport?: boolean;
    showMaximize?: boolean;
    showMoreOption?: boolean;
    showFilter?: boolean;
    enableComment?: boolean;
    beforeIconRender?: (_event: Event) => void;
    onIconClick?: (_event: Event) => void;
    beforeWidgetControlMenuOpen?: (_event: Event) => void;
    onWidgetControlMenuClick?: (_event: Event) => void;
    beforeWidgetItemsListed?: (_event: Event) => void;
    beforeWidgetLayoutRender?: (_event: Event) => void;
}
export interface IDynamicConnection {
    identity?: string;
    isEnabled?: boolean;
}
export interface IExportSettings {
    showExcel?: boolean;
    showPDF?: boolean;
    showImage?: boolean;
    showCSV?: boolean;
}
export interface IAuthorizationServer {
    url?: string;
    data?: string;
    headers?: Record<string, any>;
    authorizionComplete?: (_event: Event) => void;
}
export interface IAutoRefreshSettings {
    enabled?: boolean;
    hourlySchedule?: IHourlySchedule;
}
export interface IHourlySchedule {
    hours?: number;
    minutes?: number;
    seconds?: number;
}
export interface ILocaleSettings {
    culture?: string;
    dateFormat?: string;
    timeFormat?: string;
    appLocale?: string;
}
export interface IToolbarSettings {
    showToolbar?: boolean;
}
export interface IPinboardSettings {
    enablePinboardHeader?: boolean;
    enableUnpinWidget?: boolean;
}
export interface IDesignCanvasSettings {
    margin?: number | null;
}
export interface IWidgetContainerSettings {
    margin?: number | null;
    boxShadow?: string;
}
export interface IPreConfiguredWidgets {
    dashboardId?: string;
    categoryName?: string;
}
export interface IEmbedAiAssistant {
    enableAiAssistant?: boolean;
    aiAssistantPosition?: string;
    enableAiSummary?: boolean;
    enableWidgetSummary?: boolean;
    enableDashboardSummary?: boolean;
    hideAiDataUsage?: boolean;
}
export declare class BoldBI {
    IsDependencyLoaded: boolean;
    rootUrl: string;
    baseUrl: string;
    siteIdentifier: string;
    dashboardServerApiUrl: string;
    designerRootUrl: string;
    customThemeUrl: string;
    scheduleEndpointUrl: string;
    childContainer: any;
    cdnLink: string;
    beforeSaveViewDialogOpenFn: string;
    beforeSaveAsViewDialogOpenFn: string;
    onViewSavedFiltersClickFn: string;
    onBannerIconClickFn: string;
    beforeWidgetIconRenderedFn: string;
    onWidgetIconClickFn: string;
    actionBeginFn: string;
    actionCompleteFn: string;
    beforeBannerIconRenderFn: string;
    beforeOtherRenderFn: string;
    isWidgetMode: boolean;
    widgetName: string;
    isDashboardViewMode: boolean;
    dashboardViewName: string;
    errorImage: string;
    pinBoardRendered: boolean;
    pinboardIds: any;
    fromColumn: number;
    toColumn: number;
    fromPosition: number;
    toPosition: number;
    column: number;
    position: number;
    viewerScriptFiles: Array<string>;
    pinBoardScriptFiles: Array<string>;
    pinboardCssFiles: Array<string>;
    ejDependentFiles: Array<string>;
    ejViewerDependentFiles: Array<string>;
    ejDesignerDependentFiles: Array<string>;
    designerScriptFiles: Array<string>;
    cssFiles: Array<string>;
    designerCssFiles: Array<string>;
    applicationThemeCssFiles: Array<string>;
    dashboardThemeCssFiles: Array<string>;
    embedAuthorizeEndPoint: string;
    embedGetDetailsEndPoint: string;
    embedOptions: any;
    afterVirtualHomepageSave: Function;
    id: any;
    onFavoriteStateChangeFn: string;
    isMultiTab: boolean;
    parentDbrdId: any;
    multiTabTheme: string;
    isNewConnection: boolean;
    dashboardDetails: any;
    pinboardDetails: any;
    accessToken: string;
    homepageItemId: string;
    isVirtualHomepage: boolean;
    dashboardUrl: string;
    commentsArgs: any;
    _widgetsCollection: any;
    jQueryDepedentFile: string;
    jqConflictFile: string;
    isFullscreen: boolean;
    wrapperDependentScriptFiles: Array<string>;
    isMultipleWidgetMode: boolean;
    invalidDetail: boolean;
    fontFamilyCssFiles: Array<string>;
    isDefaultView: boolean;
    embedSDKWrapperVersion: string;
    isDashboardRendering: boolean;
    isPinboardRendering: boolean;
    isDashboardViewRendering: boolean;
    tokenResponse: any;
    maskedCdnUrl: any;
    static Mode: any;
    static EmbedType: any;
    static Environment: any;
    static Theme: any;
    static _storage: any;
    static _widgetsCollection: any;
    loadDashboard: any;
    loadMultitabDashboard: any;
    loadView: any;
    loadDashboardWidget: any;
    loadMultipleWidgets: any;
    loadDesigner: any;
    refreshWidgetData: any;
    addWidgetToPinboard: any;
    saveFilterView: any;
    saveAsFilterView: any;
    updateFilterView: any;
    getViewsByDashboardId: any;
    getViewByViewId: any;
    deleteFilterView: any;
    constructor();
    static create(options: IDashboardOptions): any;
    static getInstance(eleID: string): any;
    Invoke<T extends (...args: any[]) => any>(originalMethod: T): T;
    destroy(): any;
    loadPinboard: any;
    loadDashboardView(): any;
    loadDatasource: any;
    /**
     * @param {object} exportInformation - It is an object that holds "dashboardId" - Define the unique id of the dashboard if it is present within the multitab dashboard, "fileName" - Define the name of the file to be exported, "pageSize" - Define the size of the page('A3','A4','A5','Letter'), "pageOrientation" - Define the page orientation('Landscape','Portrait'), "showAppliedFilters" - Define whether we need to export the dashboard with or without a filter.
     * @param {string} exportInformation.dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard
     * @param {string} exportInformation.fileName - Define the name of the file to be exported
     * @param {string} exportInformation.pageSize - Define the size of the page('A3','A4','A5','Letter').
     * @param {string} exportInformation.pageOrientation - Define the page orientation('Landscape','Portrait').
     * @param {boolean} exportInformation.showAppliedFilters - Define whether we need to export the dashboard with or without a filter.
     */
    exportDashboardAsPdf(exportInformation: {
        dashboardId: string;
        fileName?: string;
        pageSize?: string;
        pageOrientation?: string;
        showAppliedFilters?: boolean;
    }): any;
    /**
     * @param {object} exportInformation -It is an object that holds "dashboardId" - Define the unique id of the dashboard if it is present within the multitab dashboard, "fileName" - Define the name of the file to be exported, "exportImageFormat" - Define the format of the image to be exported('jpg','png'and'bmp'), "resolutionDpi" - Define the resolution of the image (Integer value above 96),"showAppliedFilters" - Define whether we need to export the dashboard with or without a filter
     * @param {string} exportInformation.dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard
     * @param {string} exportInformation.fileName - Define the name of the file to be exported
     * @param {string} exportInformation.exportImageFormat - Define the format of the image to be exported('jpg','png'and'bmp').
     * @param {number} exportInformation.resolutionDpi - Define the resolution of the image (Integer value above 96).
     * @param {boolean} exportInformation.showAppliedFilters - Define whether we need to export the dashboard with or without a filter
     */
    exportDashboardAsImage(exportInformation: {
        dashboardId: string;
        fileName?: string;
        exportImageFormat?: string;
        resolutionDpi?: string;
        showAppliedFilters?: boolean;
    }): any;
    /**
     * @param {object} exportInformation - It is an object that holds "dashboardId" - Define the unique id of the dashboard if it is present within the multitab dashboard, "fileName" - Define the name of the file to be exported, "fileType" - Define the type of file to be exported ('xlsx','xls').
     * @param {string} exportInformation.dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard
     * @param {string} exportInformation.fileName - Define the name of the file to be exported
     * @param {string} exportInformation.fileType - Define the type of file to be exported ('xlsx','xls').
     */
    exportDashboardAsExcel(exportInformation: {
        dashboardId: string;
        fileName?: string;
        fileType?: string;
    }): any;
    /**
     * @param {object} exportInformation - It is an object that holds "dashboardId" - Define the unique id of the dashboard if it is present within the multitab dashboard or widget id present in the pinboard, "widgetName" - Define the name of the widget to be exported, "fileName" - Define the name of the file to be exported, "pageSize" - Define the size of the page('A3','A4','A5','Letter'), "pageOrientation" - Define the page orientation('Landscape','Portrait'), "showAppliedFilters" - Define whether we need to export the dashboard with or without a filter.
     * @param {string} exportInformation.dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard or widget id present in the pinboard
     * @param {string} exportInformation.widgetName - Define the name of the widget to be exported
     * @param {string} exportInformation.fileName - Define the name of the file to be exported
     * @param {string} exportInformation.pageSize - Define the size of the page('A3','A4','A5','Letter').
     * @param {string} exportInformation.pageOrientation - Define the page orientation('Landscape','Portrait').
     * @param {boolean} exportInformation.showAppliedFilters - Define whether we need to export the dashboard with or without a filter.
     */
    exportWidgetAsPdf(exportInformation: {
        dashboardId: string;
        widgetName: string;
        fileName?: string;
        pageSize?: string;
        pageOrientation?: string;
        showAppliedFilters?: boolean;
    }): any;
    /**
     * @param {object} exportInformation - It is an object that holds "dashboardId" - Define the unique id of the dashboard if it is present within the multitab dashboard or widget id present in the pinboard, "widgetName" - Define the name of the widget to be exported, "fileName" - Define the name of the file to be exported, "exportImageFormat" - Define the format of the image to be exported('jpg','png'and'bmp'), "resolutionDpi" - Define the resolution of the image (Integer value above 96), "showAppliedFilters" - Define whether we need to export the dashboard with or without a filter.
     * @param {string} exportInformation.dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard or widget id present in the pinboard
     * @param {string} exportInformation.widgetName - Define the name of the widget to be exported
     * @param {string} exportInformation.fileName - Define the name of the file to be exported
     * @param {string} exportInformation.exportImageFormat - Define the format of the image to be exported('jpg','png'and'bmp').
     * @param {number} exportInformation.resolutionDpi - Define the resolution of the image (Integer value above 96).
     * @param {boolean} exportInformation.showAppliedFilters - Define whether we need to export the dashboard with or without a filter.
     */
    exportWidgetAsImage(exportInformation: {
        dashboardId: string;
        widgetName: string;
        fileName?: string;
        exportImageFormat?: string;
        resolutionDpi?: string;
        showAppliedFilters?: boolean;
    }): any;
    /**
     * @param {object} exportInformation - It is an object that holds "dashboardId" - Define the unique id of the dashboard if it is present within the multitab dashboard or widget id present in the pinboard, "widgetName" - Define the name of the widget to be exported, "fileName" - Define the name of the file to be exported, "fileType" - Define the type of file to be exported ('xlsx','xls').
     * @param {string} exportInformation.dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard or widget id present in the pinboard
     * @param {string} exportInformation.widgetName - Define the name of the widget to be exported
     * @param {string} exportInformation.fileName - Define the name of the file to be exported
     * @param {string} exportInformation.fileType - Define the type of file to be exported ('xlsx','xls').
     */
    exportWidgetAsExcel(exportInformation: {
        dashboardId: string;
        widgetName: string;
        fileName?: string;
        fileType?: string;
    }): any;
    /**
     * @param {object} exportInformation - It is an object that holds "dashboardId" - Define the unique id of the dashboard if it is present within the multitab dashboard or widget id present in the pinboard, "widgetName" - Define the name of the widget to be exported, "fileName" - Define the name of the file to be exported.
     * @param {string} exportInformation.dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard or widget id present in the pinboard
     * @param {string} exportInformation.widgetName - Define the name of the widget to be exported
     * @param {string} exportInformation.fileName - Define the name of the file to be exported
     */
    exportWidgetAsCsv(exportInformation: {
        dashboardId: string;
        widgetName: string;
        fileName?: string;
    }): any;
    updateDatasource(): any;
    updateFilters(filterParameters: string): any;
    updateDashboardTheme(dashboardTheme: string): any;
    resizeDashboard(filterParameters?: string): any;
    refreshDashboard(): any;
    clearAllFilter(): any;
    hidePopup(): any;
    hideWaitingIndicator(): any;
    getWidgetData(widgetName: string, clientFnc: Function, dashboardId: string): any;
    getWidgetDataWithFilters(widgetName: string, dashboardId: string, filter: any, clientFnc: Function): any;
    /**
     * @param {string} clientFnc - It denotes the method name to be defined
     * @param {string} containerId - This should be the container id where you want to embed the dashboard
     */
    getDashboardCategories(clientFnc: Function, containerId: string): any;
    /**
     * @param {string} categoryName - Define new category name want to create .
     * @param {string} categoryDescription - Define the description of new category name .
     * @param {string} clientFnc - It denotes the method name to be defined
     * @param {string} containerId - This should be the container id where you want to embed the dashboard
     */
    createDashboardCategory(categoryName: string, categoryDescription: string, clientFnc: Function, containerId: string): any;
    /**
     * @param {string} publishModel - Define the information about publish dashboard
     * @param {string} containerId - This should be the container id where you want to embed the dashboard
     */
    saveDashboard(publishModel: any, containerId: string): any;
    getWidgetInstance(eleID: string): any;
    /**
     * @param {string} containerId - This should be the container id where you want to embed the dashboard
     */
    updateWidgetFilters(containerId: string): any;
    _initializeEmbedOptions(options: {
        embedContainerId?: string;
        serverUrl?: string;
        pinboardName?: string;
        mode?: any;
        dashboardId?: string;
        dashboardPath?: string;
        environment?: any;
        datasourceId?: string;
        datasourceName?: string;
    }): any;
    _setDimensions(): void;
    _onBrowserWindowResize(): void;
    _initializeUrls: any;
    _loadCloudDepedentFiles(responseInfo: {
        Data: {
            CdnUrl: string;
            DesignerServerUrl: string;
        };
    }): any;
    _handleEnvironmentError(arg: any): void;
    _addJquerydependentFiles: any;
    _getCloudLinks(): any;
    _loadDepedentFiles(): any;
    _loadBingmapDependentFiles(): any;
    _loadDependentDesignerFiles(that: BoldBI): any;
    _addWrapperDependentFiles(obj: BoldBI, fileUriArray: Array<string>): any;
    _addedDependentFiles(that: BoldBI, fileUriArray: Array<string>, isCSS: boolean): any;
    _checkDepedentFileExists(file: string, isCSS: boolean): any;
    getDashboardData(): any;
    _renderDashboard: any;
    _renderPinboard(itemDetail: object): any;
    _widgetNamesEmpty(): any;
    errorOnContainer(error: string, containerId: string): void;
    createEmptyList(from: number, to: number): any;
    appendListItem(appendTo: number, count: number): any;
    changeLayout(layout: number): any;
    _changeLayoutSuccess: any;
    _createPinboardDom: any;
    _checkEmptyHomepage(): boolean;
    _setLayout(layout: number): any;
    setListMinimumHeight(): any;
    enableSorting(): any;
    showEmptyList(): any;
    dragAndDrop(fromColumn: number, toColumn: number, fromPosition: number, toPosition: number): any;
    _unPinItem(column: number, position: number): any;
    _unPinSuccess(result: {
        Status: boolean;
    }): any;
    checkEmptyHomepage(): boolean;
    _dragAndDropSuccess: any;
    _renderItem(itemDetail: {
        ItemType?: any;
        ColumnInfo?: any;
    }): any;
    _addWidgetInPinboard(itemDetails: {
        ColumnInfo?: any;
    }): any;
    _renderMultiTabDashboard: any;
    _tabSelected(): any;
    _isDependencyLoaded(that: BoldBI, dashboardId?: string): any;
    validateServerAndWrapperVersion(): any;
    _getDashboardInstance(embedChildId?: string): any;
    _checkWidgetList(): any;
    _onBoldBIDashboardInstaceActionBegin(arg: {
        eventType: string;
    }, embedContainerId: string): any;
    _onBoldBIDashboardInstaceActionComplete(arg: {
        eventType: string;
        data?: any;
        source?: any;
        schema?: any;
    }): any;
    _onBoldBIBeforeDatasourceSaveAction(arg: object): any;
    _onBoldBIAfterDatasourceSaveAction(arg: object): any;
    _onBoldBIDashboardBeforeBannerIconRender(arg: {
        iconsinformation?: any;
    }): any;
    _createBannerIcon(tag: string, id: string, className: string, label: string, dataName: string, dataEvent: boolean, showText: boolean, css: object, href?: string): any;
    _onBoldBIDashboardBeforeOtherOptionContextMenuRender(arg: {
        iconsinformation?: any;
    }): any;
    _onBoldBIDashboardSaveFilter(arg: any): any;
    _addSaveViewDialogStyles(): any;
    _createSaveViewDialog(args: any): any;
    _saveFilterView(dbrdInstance: BoldBI): any;
    _updateInFilterOverviewUI(viewName: string, viewId: string): any;
    _viewNameValidation(isExistingView?: boolean): any;
    getActiveChildDashboardId(): any;
    _getParametersFromQueryString(queryString: string): any;
    _onBoldBIDashboardSaveAsFilter(arg: any): any;
    _onBoldBIDashboardOpenViewSection(arg: any): any;
    _onBoldBIDashboardBannerIconClick(arg: {
        name: string;
        selectedTheme: string;
    }): any;
    getComments(commentType: string, args: {
        dashboardId: string;
        widgetId?: string;
        multitabDashboardId?: string;
    }, callBackFn: Function): any;
    /**
     * @param {object} arg - It is an object that holds 'content' - Defines the comment you want to add, 'dashboardId" -Defines the unique id of the dashboard,"parentCommentId" Defines the comment Id of the comment for which the reply comment is to be added. It should be defined only when adding a reply to the dashboard comment. For other cases, it should be null,"multitabDashboardId"Defines the unique id of the multitab dashboard. It should be defined only when adding a multitab dashboard comment. For other cases, it should be null.
     * @param {string} arg.content - Defines the comment you want to add to the dashboard.
     * @param {string} arg.dashboardId - Define the unique id of the dashboard.
     * @param {string} arg.multitabDashboardId - Defines the unique id of the multitab dashboard
     * @param {string} arg.parentCommentId - Defines the comment Id of the comment for which the reply comment is to be added. It should be defined only when adding a reply to the Dashboard comment. For other cases, it should be null.
     * @param {string} callBackFn - It denotes the callback method name that must be defined. It would returns the updated comments as arguments.
     */
    addDashboardComment(arg: {
        content: string;
        dashboardId: string;
        multitabDashboardId?: string;
        parentCommentId?: string;
    }, callBackFn: Function): any;
    /**
     * @param {object} arg - It is an object that holds 'content' - Defines the comment you want to add,'widgetId' - Defines the unique id of the widget,"dashboardId" -Defines the unique id of the dashboard,"parentCommentId" - Defines the comment Id of the comment for which the reply comment is to be added. It should be defined only when adding a reply to the widget comment. For other cases, it should be null,"multitabDashboardId"- Defines the unique id of the multitab dashboard. It should be defined only when adding a multitab widget comment. For other cases, it should be null.
     * @param {string} arg.content - Defines the comment you want to add to the Widget.
     * @param {string} arg.widgetId - Defines the unique id of the widget
     * @param {string} arg.dashboardId - Defines the unique id of the dashboard
     * @param {string} arg.parentCommentId - Defines the comment Id of the comment for which the reply comment is to be added. It should be defined only when adding a reply to the widget comment. For other cases, it should be null.
     * @param {string} arg.multitabDashboardId - Defines the unique id of the multitab dashboard. It should be defined only when adding a multitab widget comment. For other cases, it should be null.
     * @param {string} callBackFn -  It denotes the callback method name that must be defined. It would returns the updated comments as arguments.
     */
    addWidgetComment(arg: {
        content: string;
        widgetId: string;
        dashboardId: string;
        multitabDashboardId?: string;
        parentCommentId?: string;
    }, callBackFn: Function): any;
    /**
     * @param {object} arg - It is an object that holds "commentId" - Defines the comment Id of the comment you want to delete,"dashboardId" - Defines the unique dashboard Id,"multitabDashboardId" - Defines the unique id of the multitab dashboard. It should be defined only when deleting a multitab dashboard comment. For other cases, it should be null.
     * @param {string} arg.commentId - Defines the comment Id of the comment you want to delete in the dashboard.
     * @param {string} arg.dashboardId - Defines the unique dashboard Id
     * @param {string} arg.multitabDashboardId - Defines the unique id of the multitab dashboard
     * @param {string} callBackFn - It denotes the callback method name that must be defined. It would returns the updated comments as arguments.
     */
    deleteDashboardComment(arg: {
        dashboardId: string;
        multitabDashboardId?: string;
        commentId: string;
    }, callBackFn: Function): any;
    /**
     * @param {object} arg - It is an object that holds "commentId" - It defines the comment Id of the comment that you want to delete,"widgetId" -Defines the unique widget Id,"dashboardId" -Defines the unique id of the dashboard,"multitabDashboardId" - Defines the unique id of the multitab dashboard. It should be defined only when deleting a multitab widget comment. For other cases, it should be null.
     * @param {string} arg.commentId - It defines the comment Id of the comment that you want to delete in the widget
     * @param {string} arg.widgetId - Defines the unique widget Id
     * @param {string} arg.dashboardId - Defines the unique id of the dashboard
     * @param {string} arg.multitabDashboardId - Defines the unique id of the multitab dashboard
     * @param {string} callBackFn -  It denotes the callback method name that must be defined. It would returns the updated comments as arguments.
     */
    deleteWidgetComment(arg: {
        widgetId: string;
        dashboardId: string;
        multitabDashboardId?: string;
        commentId: string;
    }, callBackFn: Function): any;
    /**
     * @param {object} arg - It is an object that holds "content" - Defines the comment you have edited,"commentId" - Defines the comment Id of the comment you have edited,"dashboardId" - Defines the unique dashboard Id,"multitabDashboardId" - Defines the unique id of the multitab dashboard. It should be defined only when editing a multitab widget comment. For other cases, it should be null.
     * @param {string} arg.content - Defines the comment you have to edited in the dashboard
     * @param {string} arg.commentId - Defines the comment Id of the comment you have to edit
     * @param {string} arg.dashboardId - Defines the unique id of the dashboard
     * @param {string} arg.multitabDashboardId - Defines the unique id of the multitab dashboard
     * @param {string} callBackFn -  It denotes the callback method name that must be defined. It would returns the updated comments as arguments.
     */
    editDashboardComment(arg: {
        content: string;
        dashboardId: string;
        multitabDashboardId?: string;
        commentId: string;
    }, callBackFn: Function): any;
    /**
     * @param {object} arg - It is an object that holds,"content" - Defines the comment you have edited,"commentId" - Defines the comment Id of the comment you have edited,"widgetId" - Defines the unique widget Id,"dashboardId" - Defines the unique id of the dashboard,"multitabDashboardId" - Defines the unique id of the multitab dashboard. It should be defined only when editing a multitab dashboard comment or widget comment. For other cases, it should be null.
     * @param {string} arg.content - Defines the comment you have edited
     * @param {string} arg.commentId - Defines the comment Id of the comment you have edited
     * @param {string} arg.widgetId - Defines the unique widget Id
     * @param {string} arg.dashboardId - Defines the unique id of the dashboard
     * @param {string} arg.multitabDashboardId - Defines the unique id of the multitab dashboard
     * @param {string} callBackFn - It denotes the callback method name that must be defined. It would returns the updated comments as arguments.
     */
    editWidgetComment(arg: {
        content: string;
        widgetId: string;
        dashboardId: string;
        multitabDashboardId?: string;
        commentId: string;
    }, callBackFn: Function): any;
    ajaxErrorFnc(jqXHR: {
        status: number;
        responseText: string;
        statusText?: string;
    }): any;
    setDefaultTheme(bgColor: string, textColor: string, iconColor: string): any;
    _switchFullscreenMode(arg: any): any;
    _fullscreenExitHandler(boldBIObj: {
        isMultiTab?: boolean;
        embedOptions?: any;
    }): any;
    _onBoldBIDashboardBeforeWidgetIconRendered(arg: {
        iconsinformation: any;
        widgetInformation: any;
    }): any;
    _onBoldBIBeforeControlMenuOpen(arg: {
        menuItems: Array<object>;
    }): any;
    _onBoldBIBeforeDashboardMobileMenuOpen(arg: {
        menuItems: any;
    }): any;
    _onBoldBIAjaxBeforeLoad(arg: object): any;
    _onBoldBIbeforeDesignerToolbarButtonsRendered(arg: object): any;
    _onBoldBIbeforeDatasourceToolbarButtonsRendered(arg: {
        toolbarButtons: any;
    }): any;
    _onBoldBIbeforeDatasourceToolbarIconsRendered(arg: object): any;
    _onBoldBIbeforeDesignerToolbarIconsRendered(arg: object): any;
    _onBoldBItoolbarClick(arg: object): any;
    _onBoldBIbeforeWidgetItemsListed(arg: object): any;
    _onBoldBIbeforeWidgetLayoutRender(arg: object): any;
    _onBoldBIDashboardWidgetIconClick(arg: object): any;
    _onBoldBIonControlMenuClick(arg: object): any;
    _onBoldBIDashboardUpdatefavorite(arg: object): any;
    _onBoldBIBeforeNavigateUrlLinking(arg: object): any;
    _onBoldBIBeforeNavigateToDashboard(arg: object): any;
    _onBoldBIAuthorizionComplete(arg: object): any;
    _showLoader(container?: any): any;
    _getAuthorizationToken: any;
    _xhrRequestHelper(type: string, url: string, data: object, headers: object, callBackFn: Function): any;
    _emptyHtml(elementID: string): any;
    _removeElement(id: string): any;
    _uuidv4Generartor(): string;
    _isEmptyOrSpaces(str: string): any;
    _isNullOrUndefined(value: string): any;
    _validateOptions: any;
    _isUrl(str: string): any;
    _throwError(errorMsg: string, embedContainerId?: string): any;
    onErrorClient(errorMessage: any): any;
    _removeElementsClass(id: string, childElement: string, targeClass: string): any;
    _hasClass(el: {
        classList?: any;
        className?: any;
    }, className: string): any;
    _addClass(el: {
        classList?: any;
        className?: any;
    }, className: string): any;
    _removeClass(el: {
        classList?: any;
        className?: any;
    }, className: string): any;
    _arraySlice(arr: Array<object>, key: string, value: string): any;
    _getFilterData(filterQuery: any): any;
    _createFilterCollection(masterdata: any): any;
    _lengthensSelectedFilterInfo(shortenFilterInfoList: any): any;
    _hasValue(filterObj: any, property: any): any;
    _unEscapeSelectedFilterDataforURLFilter(filterInfoList: any): any;
    _getWidgetFilterInfo(): any;
    _multipleWidgets(methodName: string, ...args: any): void;
    addStyles(): any;
    destroyStyles(): any;
    _validatetoken(token: string): any;
    _isJwtFormat(token: any): boolean;
    removeWidgetInstance(widgetId: string): any;
    static _putinstance(element: string, key: string, obj: object): any;
    static _gettinstance(element: string, key: string): any;
    static _hasinstance(element: string, key: string): any;
    static _removeinstance(element: string, key: string): any;
    static _removewidgetinstance(element: string, key: string): any;
}
export declare class widgetBI {
    containerID: string;
    widgetCollection: Array<string>;
    constructor();
    setFilterParameters(filters: any): any;
}
