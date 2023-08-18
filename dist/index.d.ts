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
    onSaveFilterFn: string;
    onSaveAsFilterFn: string;
    onViewSavedFiltersFn: string;
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
    static Mode: any;
    static EmbedType: any;
    static Environment: any;
    static Theme: any;
    static _storage: any;
    static _widgetsCollection: any;
    loadDashboard: any;
    loadDashboardWidget: any;
    loadMultipleWidgets: any;
    loadDesigner: any;
    refreshWidgetData: any;
    addWidgetToPinboard: any;
    constructor();
    static create(options: object): any;
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
    resizeDashboard(filterParameters?: string): any;
    refreshDashboard(): any;
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
    _initializeUrls: any;
    _loadCloudDepedentFiles(responseInfo: {
        Data: {
            CdnUrl: string;
            DesignerServerUrl: string;
        };
    }): any;
    _addJquerydependentFiles: any;
    _getCloudLinks(): any;
    _loadDepedentFiles(): any;
    _loadBingmapDependentFiles(): any;
    _loadDependentDesignerFiles(that: BoldBI): any;
    _addWrapperDependentFiles(obj: BoldBI, fileUriArray: Array<string>): any;
    _addedDependentFiles(that: BoldBI, fileUriArray: Array<string>, isCSS: boolean): any;
    _checkDepedentFileExists(file: string, isCSS: boolean): any;
    _renderDashboard: any;
    _renderPinboard(itemDetail: object): any;
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
    _getDashboardInstance(embedChildId?: string): any;
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
    _onBoldBIDashboardSaveFilter(arg: object): any;
    _onBoldBIDashboardSaveAsFilter(arg: object): any;
    _onBoldBIDashboardOpenViewSection(arg: object): any;
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
    _onBoldBIDashboardWidgetIconClick(arg: object): any;
    _onBoldBIonControlMenuClick(arg: object): any;
    _onBoldBIDashboardUpdatefavorite(arg: object): any;
    _onBoldBIWidgetExportRender(arg: {
        iconsinformation?: any;
        exportOptionCollection?: any;
    }): any;
    _onBoldBIBeforeNavigateUrlLinking(arg: object): any;
    _onBoldBIBeforeNavigateToDashboard(arg: object): any;
    _onBoldBIAuthorizionComplete(arg: object): any;
    _showLoader(): any;
    _getAuthorizationToken(dashboardId?: string): any;
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
    addStyles(): any;
    destroyStyles(): any;
    static _putinstance(element: string, key: string, obj: object): any;
    static _gettinstance(element: string, key: string): any;
    static _hasinstance(element: string, key: string): any;
    static _removeinstance(element: string, key: string): any;
}
export declare class widgetBI {
    containerID: string;
    widgetCollection: Array<string>;
    constructor();
    setFilterParameters(filters: any): any;
}
