import { EmbedType, Environment, Mode } from './enum';
export declare const DefaultConstructor: {
    IsDependencyLoaded: boolean;
    rootUrl: string;
    baseUrl: string;
    siteIdentifier: string;
    dashboardServerApiUrl: string;
    designerRootUrl: string;
    customThemeUrl: string;
    scheduleEndpointUrl: string;
    childContainer: string;
    cdnLink: string;
    maskedCdnUrl: string;
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
    isDashboardRendering: boolean;
    isPinboardRendering: boolean;
    isDashboardViewRendering: boolean;
    widgetName: string;
    isDashboardViewMode: boolean;
    dashboardViewName: string;
    errorImage: string;
    pinBoardRendered: boolean;
    pinboardIds: any[];
    fromColumn: any;
    toColumn: any;
    fromPosition: any;
    toPosition: any;
    column: any;
    position: any;
    isMultiTab: boolean;
    parentDbrdId: string;
    isNewConnection: boolean;
    multiTabTheme: string;
    dashboardDetails: {};
    pinboardDetails: any[];
    accessToken: string;
    homepageItemId: string;
    isVirtualHomepage: boolean;
    dashboardUrl: string;
    commentsArgs: {};
    _widgetsCollection: any[];
    jQueryDepedentFile: string;
    jqConflictFile: string;
    isFullscreen: boolean;
    embedAuthorizeEndPoint: string;
    embedGetDetailsEndPoint: string;
    isMultipleWidgetMode: boolean;
    invalidDetail: boolean;
    isDefaultView: boolean;
    embedSDKWrapperVersion: string;
    tokenResponse: {
        draftItemID: string;
        DatasourceId: string;
        ConnectionList: string;
        ItemDetail: {
            IsPublic: boolean;
            Description: string;
            Name: string;
        };
    };
    wrapperDependentScriptFiles: string[];
    viewerScriptFiles: string[];
    pinBoardScriptFiles: string[];
    pinboardCssFiles: string[];
    ejViewerDependentFiles: string[];
    ejDesignerDependentFiles: string[];
    designerScriptFiles: string[];
    cssFiles: string[];
    designerCssFiles: string[];
    applicationThemeCssFiles: string[];
    dashboardThemeCssFiles: string[];
    fontFamilyCssFiles: string[];
    embedOptions: {
        isdesignerdraft: boolean;
        serverUrl: string;
        dashboardId: string;
        dashboardIds: any[];
        dashboardPath: string;
        dashboardPaths: any[];
        datasourceId: string;
        datasourceName: string;
        embedContainerId: string;
        embedType: EmbedType;
        environment: Environment;
        mode: Mode;
        restrictMobileView: boolean;
        localData: {
            loadFromData: boolean;
            layoutData: any;
            widgetData: any;
        };
        viewId: string;
        viewName: string;
        nonce: string;
        anonymousToken: {
            isEnabled: boolean;
            groupName: string;
            userEmail: string;
        };
        layoutSettings: {
            hideDesignerScroller: boolean;
        };
        dashboardSettings: {
            showHeader: boolean;
            showExport: boolean;
            showRefresh: boolean;
            showMoreOption: boolean;
            showMetrics: boolean;
            onFavoriteIconClick: string;
            beforeIconRender: string;
            onIconClick: string;
            onInteraction: string;
            enableTheme: boolean;
            enableFilterOverview: boolean;
            enableFullScreen: boolean;
            showDashboardParameter: boolean;
            dashboardName: string;
            beforePublishAs: string;
            beforeDesignerToolbarButtons: string;
            enableComment: boolean;
            beforeDesignerToolbarIconsRendered: string;
            beforeDatasourceToolbarButtonsRendered: string;
            beforeDatasourceToolbarIconsRendered: string;
            toolbarClick: string;
            fontFamily: string;
            widgetsPanel: {
                hideDefaultWidgets: boolean;
                hideExistingWidgets: boolean;
                defaultPanelDisplayText: string;
                existingPanelDisplayText: string;
                defaultPanelSearchPlaceholder: string;
                existingPanelSearchPlaceholder: string;
                existingDashboards: any[];
                dragAndDropSettings: {
                    rowSpan: any;
                    columnSpan: any;
                    isWidgetMode: boolean;
                };
            };
            dataSourceConfig: {
                hideDataSourceConfig: boolean;
                hideSampleDataSources: boolean;
                hideExpression: boolean;
                hideDataSourceList: boolean;
            };
            viewDataSettings: {
                showAllColumns: boolean;
                enableExporting: boolean;
                enableColumnSelection: boolean;
            };
            showPreviewAs: boolean;
            themeSettings: {
                appearance: string;
                application: string;
                dashboard: string;
                isLocalTheme: boolean;
            };
            filterOverviewSettings: {
                showSaveAsIcon: boolean;
                showSaveIcon: boolean;
                showViewSavedFilterIcon: boolean;
                viewId: string;
                viewName: string;
            };
            saveFilterClick: string;
            saveAsFilterClick: string;
            viewSavedFiltersClick: string;
            beforeSaveViewDialogOpen: string;
            beforeSaveAsViewDialogOpen: string;
            onViewSavedFiltersClick: string;
        };
        widgetSettings: {
            showExport: boolean;
            showMaximize: boolean;
            showMoreOption: boolean;
            showFilter: boolean;
            beforeIconRender: string;
            onIconClick: string;
            beforeWidgetControlMenuOpen: string;
            onWidgetControlMenuClick: string;
            enableComment: boolean;
            beforeWidgetItemsListed: string;
            beforeWidgetLayoutRender: string;
        };
        languageSettings: {
            hideLanguageDropdown: boolean;
            languageCode: string;
        };
        customBrandSettings: {
            hideHelpLink: boolean;
            customBrandName: string;
            customDomain: string;
        };
        filterParameters: string;
        dynamicConnection: {
            isEnabled: boolean;
            identity: string;
        };
        exportSettings: {
            showExcel: boolean;
            showPDF: boolean;
            showImage: boolean;
            showCSV: boolean;
        };
        height: string;
        width: string;
        theme: string;
        authorizationServer: {
            url: string;
            data: string;
            headers: {};
            authorizionComplete: string;
        };
        token: string;
        expirationTime: number;
        autoRefreshSettings: {
            enabled: boolean;
            hourlySchedule: {
                hours: number;
                minutes: number;
                seconds: number;
            };
        };
        embedAiAssistant: {
            enableAiAssistant: boolean;
            aiAssistantPosition: string;
            enableAiSummary: boolean;
            enableWidgetSummary: boolean;
            enableDashboardSummary: boolean;
            hideAiDataUsage: boolean;
        };
        isRemoveStyle: boolean;
        scalingFactor: number;
        localeSettings: {
            culture: string;
            dateFormat: string;
            timeFormat: string;
            appLocale: string;
        };
        actionBegin: string;
        actionComplete: string;
        beforeContextMenuRender: string;
        beforeNavigateUrlLinking: string;
        beforeNavigateToDashboard: string;
        beforeFilterApply: string;
        afterFilterApply: string;
        toolbarSettings: {
            showToolbar: boolean;
        };
        pinboardName: string;
        pinboardSettings: {
            enablePinboardHeader: boolean;
            enableUnpinWidget: boolean;
        };
        onUnpin: string;
        onDrag: string;
        onDrop: string;
        onLayoutChange: string;
        onResize: string;
        datasources: any[];
        designCanvasSettings: {
            margin: any;
        };
        widgetContainerSettings: {
            margin: any;
            boxShadow: any;
        };
        beforeDatasourceSave: string;
        afterDatasourceSave: string;
        preConfiguredWidgets: {
            dashboardId: string;
            categoryName: string;
        };
        disableAutoRecover: boolean;
        ajaxBeforeLoad: string;
        isBingMapRequired: boolean;
        widgetList: string;
        enableDomainMasking: boolean;
    };
};
