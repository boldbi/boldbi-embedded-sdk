export declare class BoldBI {
    IsDependencyLoaded: any;
    rootUrl: any;
    baseUrl: any;
    siteIdentifier: any;
    dashboardServerApiUrl: any;
    designerRootUrl: any;
    scheduleEndpointUrl: any;
    childContainer: any;
    cdnLink: any;
    onSaveFilterFn: any;
    onSaveAsFilterFn: any;
    onViewSavedFiltersFn: any;
    onBannerIconClickFn: any;
    beforeWidgetIconRenderedFn: any;
    onWidgetIconClickFn: any;
    actionBeginFn: any;
    actionCompleteFn: any;
    beforeBannerIconRenderFn: any;
    beforeOtherRenderFn: any;
    isWidgetMode: any;
    widgetName: any;
    isDashboardViewMode: any;
    dashboardViewName: any;
    errorImage: any;
    pinBoardRendered: any;
    pinboardIds: any;
    fromColumn: any;
    toColumn: any;
    fromPosition: any;
    toPosition: any;
    column: any;
    position: any;
    viewerScriptFiles: any;
    pinBoardScriptFiles: any;
    pinboardCssFiles: any;
    ejDependentFiles: any;
    ejViewerDependentFiles: any;
    ejDesignerDependentFiles: any;
    designerScriptFiles: any;
    cssFiles: any;
    designerCssFiles: any;
    embedOptions: any;
    afterVirtualHomepageSave: any;
    id: any;
    onFavoriteStateChangeFn: any;
    isMultiTab: any;
    parentDbrdId: any;
    multiTabTheme: any;
    isNewConnection: any;
    dashboardDetails: any;
    pinboardDetails: any;
    accessToken: any;
    homepageItemId: any;
    isVirtualHomepage: any;
    static Mode: Readonly<{
        View: string;
        Design: string;
        Connection: string;
        DataSource: string;
    }>;
    static EmbedType: Readonly<{
        Component: string;
        IFrame: string;
    }>;
    static Environment: Readonly<{
        Enterprise: string;
        Cloud: string;
    }>;
    static Theme: Readonly<{
        Off: string;
        Light: string;
        Dark: string;
    }>;
    static _storage: any;
    static _widgetsCollection: any[];
    constructor();
    static create(options: any): any;
    static getInstance(eleID: any): any;
    destroy(): void;
    loadDashboard(dashboardId: any): void;
    loadPinboard(): void;
    loadDashboardView(name: any): void;
    loadDashboardWidget(name: any, dashboardId: any): void;
    loadDesigner(dashboardId: any): void;
    loadDatasource(): void;
    /**
    * @param {string} dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard
    * @param {string} fileName - Define the name of the file to be exported
    * @param {string} pageSize - Define the size of the page('A3','A4','A5','Letter').
    * @param {string} pageOrientation - Define the page orientation('Landscape','Portrait').
    * @param {boolean} showAppliedFilters - Define whether we need to export the dashboard with or without a filter.
    */
    exportDashboardAsPdf(exportInformation: any): void;
    /**
    * @param {string} dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard
    * @param {string} fileName - Define the name of the file to be exported
    * @param {string} exportImageFormat - Define the format of the image to be exported('jpg','png'and'bmp').
    * @param {number} resolutionDpi - Define the resolution of the image (Integer value above 96).
    * @param {boolean} showAppliedFilters - Define whether we need to export the dashboard with or without a filter
    */
    exportDashboardAsImage(exportInformation: any): void;
    /**
    * @param {string} dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard
    * @param {string} fileName - Define the name of the file to be exported
    * @param {string} fileType - Define the type of file to be exported ('xlsx','xls').
    */
    exportDashboardAsExcel(exportInformation: any): void;
    /**
    * @param {string} dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard or widget id present in the pinboard
    * @param {string} widgetName - Define the name of the widget to be exported
    * @param {string} fileName - Define the name of the file to be exported
    * @param {string} pageSize - Define the size of the page('A3','A4','A5','Letter').
    * @param {string} pageOrientation - Define the page orientation('Landscape','Portrait').
    * @param {boolean} showAppliedFilters - Define whether we need to export the dashboard with or without a filter.
    */
    exportWidgetAsPdf(exportInformation: any): void;
    /**
    * @param {string} dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard or widget id present in the pinboard
    * @param {string} widgetName - Define the name of the widget to be exported
    * @param {string} fileName - Define the name of the file to be exported
    * @param {string} exportImageFormat - Define the format of the image to be exported('jpg','png'and'bmp').
    * @param {number} resolutionDpi - Define the resolution of the image (Integer value above 96).
    * @param {boolean} showAppliedFilters - Define whether we need to export the dashboard with or without a filter.
    */
    exportWidgetAsImage(exportInformation: any): void;
    /**
    * @param {string} dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard or widget id present in the pinboard
    * @param {string} widgetName - Define the name of the widget to be exported
    * @param {string} fileName - Define the name of the file to be exported
    * @param {string} fileType - Define the type of file to be exported ('xlsx','xls').
    */
    exportWidgetAsExcel(exportInformation: any): void;
    /**
    * @param {string} dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard or widget id present in the pinboard
    * @param {string} widgetName - Define the name of the widget to be exported
    * @param {string} fileName - Define the name of the file to be exported
    */
    exportWidgetAsCsv(exportInformation: any): void;
    updateDatasource(): void;
    updateFilters(filterParameters: any): void;
    resizeDashboard(filterParameters: any): void;
    refreshDashboard(): void;
    hidePopup(embedId: any): void;
    /**
     * @param {string} widgetNames - Define the name of the widget to be Refresh.
     * @param {boolean} hideLoader - Define whether to show or hide loading indicator while processing.
     * @param {string} dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard.
     */
    refreshWidgetData(widgetNames: any, hideLoader: any, dashboardId: any): void;
    getWidgetData(widgetName: any, clientFnc: any, dashboardId: any): void;
    /**
      * @param {string} clientFnc - It denotes the method name to be defined
      * @param {string} ContainerId - This should be the container id where you want to embed the dashboard
    */
    getDashboardCategories(clientFnc: any, containerId: any): void;
    /**
      * @param {string} categoryName - Define new category name want to create .
      * @param {string} categoryDescription - Define the description of new category name .
      * @param {string} clientFnc - It denotes the method name to be defined
      * @param {string} ContainerId - This should be the container id where you want to embed the dashboard
    */
    createDashboardCategory(categoryName: any, categoryDescription: any, clientFnc: any, containerId: any): void;
    /**
      * @param {string} publishModel - Define the information about publish dashboard
      * @param {string} ContainerId - This should be the container id where you want to embed the dashboard
    */
    saveDashboard(publishModel: any, containerId: any): void;
    getWidgetInstance(eleID: any): any;
    /**
      * @param {string} ContainerId - This should be the container id where you want to embed the dashboard
    */
    updateWidgetFilters(containerId: any): void;
    _initializeEmbedOptions(options: any): void;
    _initializeUrls(): void;
    _loadCloudDepedentFiles(responseInfo: any): void;
    _getCloudLinks(): void;
    _loadDepedentFiles(): void;
    _loadBingmapDependentFiles(that: any): void;
    _loadDependentDesignerFiles(that: any): void;
    _addedDependentFiles(that: any, fileUriArray: any, isCSS: any): void;
    _checkDepedentFileExists(file: any, isCSS: any): boolean;
    _renderDashboard(responseInfo: any): void;
    _renderPinboard(itemDetail: any): void;
    createEmptyList(from: any, to: any): void;
    appendListItem(appendTo: any, count: any): void;
    changeLayout(layout: any): void;
    _changeLayoutSuccess(result: any): void;
    _createPinboardDom(itemDetail: any): void;
    _checkEmptyHomepage(): boolean;
    _setLayout(layout: any): void;
    setListMinimumHeight(): void;
    enableSorting(): void;
    showEmptyList(): void;
    dragAndDrop(fromColumn: any, toColumn: any, fromPosition: any, toPosition: any, ui: any): void;
    _unPinItem(column: any, position: any, event: any): void;
    _unPinSuccess(result: any): void;
    checkEmptyHomepage(): boolean;
    _dragAndDropSuccess(result: any): void;
    _renderItem(itemDetail: any): void;
    addWidgetToPinboard(dashboardId: any, widgetId: any, widgetName: any): void;
    _addWidgetInPinboard(itemDetails: any): void;
    _renderMultiTabDashboard(embedResponse: any): void;
    _tabSelected(args: any): void;
    _isDependencyLoaded(that: any, dashboardId?: any): void;
    _getDashboardInstance(embedChildId?: any): any;
    _onBoldBIDashboardInstaceActionBegin(arg: any, embedContainerId: any): void;
    _onBoldBIDashboardInstaceActionComplete(arg: any): void;
    _onBoldBIBeforeDataSourceToolbarButtonRenders(arg: any): void;
    _onBoldBIBeforeDatasourceSaveAction(arg: any): void;
    _onBoldBIAfterDatasourceSaveAction(arg: any): void;
    _onBoldBIDashboardBeforeBannerIconRender(arg: any): void;
    _createBannerIcon(tag: any, id: any, className: any, label: any, dataName: any, dataEvent: any, showText: any, css: any, href?: any): any;
    _onBoldBIDashboardBeforeOtherOptionContextMenuRender(arg: any): void;
    _onBoldBIDashboardSaveFilter(arg: any): void;
    _onBoldBIDashboardSaveAsFilter(arg: any): void;
    _onBoldBIDashboardOpenViewSection(arg: any): void;
    _onBoldBIDashboardBannerIconClick(arg: any): void;
    setDefaultTheme(bgColor: any, textColor: any, iconColor: any): void;
    _switchFullscreenMode(arg: any): void;
    _fullscreenExitHandler(boldBIObj: any): void;
    _onBoldBIDashboardBeforeWidgetIconRendered(arg: any): void;
    _onBoldBIBeforeControlMenuOpen(arg: any): void;
    _onBoldBIBeforeDashboardMobileMenuOpen(arg: any): void;
    _onBoldBIAjaxBeforeLoad(arg: any): void;
    _onBoldBIbeforeDesignerToolbarButtonsRendered(arg: any): void;
    _onBoldBIDashboardWidgetIconClick(arg: any): void;
    _onBoldBIonControlMenuClick(arg: any): void;
    _onBoldBIDashboardUpdatefavorite(arg: any): void;
    _onBoldBIWidgetExportRender(arg: any): void;
    _onBoldBIBeforeNavigateUrlLinking(arg: any): void;
    _onBoldBIBeforeNavigateToDashboard(arg: any): void;
    _onBoldBIAuthorizionComplete(arg: any): void;
    _showLoader(): void;
    _getAuthorizationToken(dashboardId?: any): void;
    _xhrRequestHelper(type: any, url: any, data: any, headers: any, callBackFn: any): void;
    _emptyHtml(elementID: any): void;
    _removeElement(id: any): void;
    _uuidv4Generartor(): string;
    _isEmptyOrSpaces(str: any): boolean;
    _isNullOrUndefined(value: any): boolean;
    _validateOptions(options: any): boolean;
    _isUrl(str: any): boolean;
    _throwError(errorMsg: any, embedContainerId?: any): void;
    _removeElementsClass(id: any, childElement: any, targeClass: any): void;
    _hasClass(el: any, className: any): any;
    _addClass(el: any, className: any): void;
    _removeClass(el: any, className: any): void;
    _arraySlice(arr: any, key: any, value: any): any;
    _getFilterData(filterQuery: any): any[];
    _createFilterCollection(masterdata: any): any[];
    _lengthensSelectedFilterInfo(shortenFilterInfoList: any): {
        masterData: any[];
    };
    _hasValue(filterObj: any, property: any): boolean;
    _unEscapeSelectedFilterDataforURLFilter(filterInfoList: any): any;
    _getWidgetFilterInfo(): any[];
    static _putinstance(element: any, key: any, obj: any): void;
    static _gettinstance(element: any, key: any): any;
    static _hasinstance(element: any, key: any): any;
    static _removeinstance(element: any, key: any): any;
}
export declare class widgetBI {
    containerID: any;
    constructor();
    setFilterParameters(filters: any): void;
}
