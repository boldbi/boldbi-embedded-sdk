import { EmbedType, Environment, Mode } from './enum';

export const DefaultConstructor = {
    IsDependencyLoaded: false,
    rootUrl: '',
    baseUrl: '',
    siteIdentifier: '',
    dashboardServerApiUrl: '',
    designerRootUrl: '',
    customThemeUrl: '',
    scheduleEndpointUrl: '',
    childContainer: '',
    cdnLink: '',
    maskedCdnUrl: 'https://cdn.boldbi.com/resources/v',
    beforeSaveViewDialogOpenFn: 'beforeSaveViewDialogRendered',
    beforeSaveAsViewDialogOpenFn: 'beforeSaveAsViewDialogRendered',
    onViewSavedFiltersClickFn: 'openViewSection',
    onBannerIconClickFn: 'onBannerIconClick',
    beforeWidgetIconRenderedFn: 'beforeWidgetIconRendered',
    onWidgetIconClickFn: 'onWidgetIconClick',
    actionBeginFn: 'onActionBeginOfNewDashboardViewer',
    actionCompleteFn: 'onActionCompleteOfNewDashboardViewer',
    beforeBannerIconRenderFn: 'beforeBannerIconRender',
    beforeOtherRenderFn: 'beforeOtherOptionContextMenuRender',
    isWidgetMode: false,
    isDashboardRendering: false,
    isPinboardRendering: false,
    isDashboardViewRendering: false,
    widgetName: '',
    isDashboardViewMode: false,
    dashboardViewName: '',
    errorImage : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjExNzgwNzk4MzhBOTExRTQ4MDMxRTZEMkIzQUQzNjdCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjExNzgwNzk5MzhBOTExRTQ4MDMxRTZEMkIzQUQzNjdCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTE3ODA3OTYzOEE5MTFFNDgwMzFFNkQyQjNBRDM2N0IiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3ODA3OTczOEE5MTFFNDgwMzFFNkQyQjNBRDM2N0IiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4RB5yjAAABXklEQVR42rRUsU7DQAzNRWxESMydK2XsAhtiQGHo1LmsZYCBMSNDx3wASJQ1zN0rJjZYOlbqDCsSPxCeq5f0anwtSMHSk52L/c4++85VVRW1KXu14ZwLOn2enK1+Hr48B3evE3ONoQhBcgw1AjKgw+V3YAY8gvz1V4QgOoC6B4b0nQML2inQo/0EXIH4K0hIMslAspsCOQKWKvMuVAEMAMkyE9KmF2LUH3AugQoYK5IbgVob07f0eWJ1ZlLmFDveqjM/JRqhj1QxZOxKYs9nRJ0bTdwHEmM9V7EbhNLNuT4zSkLSSGW5ZNMyi7DjddMiTAL/Ft5YrQd7h3z8+aZwaFPLCaX1t3CkjP1Rssxfj3Omb825wFjvctBnFuGEujCyeCC0FCp2TYiy3qBkSAd6sCF9YmOweVtKxv7P1Qs9DnfAxY7HQaq53vo4qEyOoC4Dz9fEL9MkbEviqGX5FmAA1Vq0VgBUvekAAAAASUVORK5CYII=',
    pinBoardRendered: true,
    pinboardIds: [],
    fromColumn: null,
    toColumn: null,
    fromPosition: null,
    toPosition: null,
    column: null,
    position: null,
    isMultiTab: false,
    parentDbrdId: '',
    isNewConnection: false,
    multiTabTheme: '',
    dashboardDetails: {},
    pinboardDetails: [],
    accessToken: '',
    homepageItemId: '',
    isVirtualHomepage: false,
    dashboardUrl: '',
    commentsArgs: {},
    _widgetsCollection: [],
    jQueryDepedentFile: 'jquery-1.10.2.min.js',
    jqConflictFile: 'window.bb$ = jQuery.noConflict();',
    isFullscreen: false,
    embedAuthorizeEndPoint: '/embed/authorize',
    embedGetDetailsEndPoint: '/embed/get-details',
    isMultipleWidgetMode: false,
    invalidDetail: false,
    isDefaultView: false,
    embedSDKWrapperVersion: '11.3',
    tokenResponse: {
        draftItemID: '',
        DatasourceId: '',
        ConnectionList: '',
        ItemDetail: {
            IsPublic: false,
            Description: '',
            Name: ''
        }
    },
    wrapperDependentScriptFiles: [
        'jquery.easing.1.3.min.js',
        'jquery-ui.min.js',
        'jsrender.min.js'
    ],
    viewerScriptFiles: [
        'ej1.web.all.min.js',
        'ej2.web.all.min.js',
        'designerlocalization.js'
    ],
    pinBoardScriptFiles: ['bootstrap.min.js'],
    pinboardCssFiles: ['pinboard-embed.min.css'],
    ejViewerDependentFiles: ['ej.dashboarddesigner.min.js'],
    ejDesignerDependentFiles: ['codemirror.min.js'],
    designerScriptFiles: [
        'ej1.web.all.min.js',
        'ej2.web.all.min.js',
        'designerlocalization.js',
        'signalr.min.js'
    ],
    cssFiles: [
        'font-server.min.css',
        'ej1.web.all.min.css',
        'ej2.partone.web.all.min.css',
        'ej2.parttwo.web.all.min.css',
        'ej.designerwidgets.all.min.css',
        'ej.dashboarddesigner.min.css'
    ],
    designerCssFiles: ['ej.codemirror.min.css'],
    applicationThemeCssFiles: [
        'boldbi.theme.definition.min.css',
        'application.theme.css'
    ],
    dashboardThemeCssFiles: ['dashboard.theme.css'],
    fontFamilyCssFiles: ['font-family.min.css'],
    embedOptions : {
        isdesignerdraft: false,
        serverUrl: '',
        dashboardId: '',
        dashboardIds: [],
        dashboardPath: '',
        dashboardPaths: [],
        datasourceId: '',
        datasourceName: '',
        embedContainerId: '',
        embedType: EmbedType.Component,
        environment: Environment.Enterprise,
        mode: Mode.View,
        restrictMobileView: false,
        localData: {
            loadFromData: false,
            layoutData: null,
            widgetData: null
        },
        viewId: '',
        viewName: '',
        nonce: '',
        anonymousToken:  {
            isEnabled: false,
            groupName: '',
            userEmail: ''
        },
        layoutSettings: {
            hideDesignerScroller: false
        },
        dashboardSettings: {
            showHeader: true,
            showExport: true,
            showRefresh: true,
            showMoreOption: true,
            showMetrics: true,
            onFavoriteIconClick: '',
            beforeIconRender: '',
            onIconClick: '',
            onInteraction: '',
            enableTheme: false,
            enableFilterOverview: true,
            enableFullScreen: false,
            showDashboardParameter: true,
            dashboardName: '',
            beforePublishAs: '',
            beforeDesignerToolbarButtons: '',
            enableComment: false,
            beforeDesignerToolbarIconsRendered: '',
            beforeDatasourceToolbarButtonsRendered: '',
            beforeDatasourceToolbarIconsRendered: '',
            toolbarClick: '',
            fontFamily: '',
            widgetsPanel: {
                hideDefaultWidgets: false,
                hideExistingWidgets: false,
                defaultPanelDisplayText: '',
                existingPanelDisplayText: '',
                defaultPanelSearchPlaceholder: '',
                existingPanelSearchPlaceholder: '',
                existingDashboards: [],
                dragAndDropSettings: {
                    rowSpan: null,
                    columnSpan: null,
                    isWidgetMode: false
                }
            },
            dataSourceConfig: {
                hideDataSourceConfig: false,
                hideSampleDataSources: false,
                hideExpression: false,
                hideDataSourceList: false
            },
            viewDataSettings: {
                showAllColumns: false,
                enableExporting: true,
                enableColumnSelection: true
            },
            showPreviewAs: true,
            themeSettings: {
                appearance: '',
                application: '',
                dashboard: '',
                isLocalTheme: false
            },
            filterOverviewSettings: {
                showSaveAsIcon: false,
                showSaveIcon: false,
                showViewSavedFilterIcon: false,
                viewId: '',
                viewName: ''
            },
            saveFilterClick: '',
            saveAsFilterClick: '',
            viewSavedFiltersClick: '',
            beforeSaveViewDialogOpen: '',
            beforeSaveAsViewDialogOpen: '',
            onViewSavedFiltersClick: ''
        },
        widgetSettings: {
            showExport: true,
            showMaximize: true,
            showMoreOption: true,
            showFilter: true,
            beforeIconRender: '',
            onIconClick: '',
            beforeWidgetControlMenuOpen: '',
            onWidgetControlMenuClick: '',
            enableComment: false,
            beforeWidgetItemsListed: '',
            beforeWidgetLayoutRender: ''
        },
        languageSettings: {
            hideLanguageDropdown: false,
            languageCode: ''
        },
        customBrandSettings: {
            hideHelpLink: false,
            customBrandName: '',
            customDomain: ''
        },
        filterParameters: '',
        dynamicConnection: {
            isEnabled: false,
            identity: ''
        },
        exportSettings: {
            showExcel: true,
            showPDF: true,
            showImage: true,
            showCSV: true
        },
        height: '',
        width: '',
        theme: '',
        authorizationServer: {
            url: '',
            data: '',
            headers: {

            },
            authorizionComplete: ''
        },
        token: '',
        expirationTime: 86400,
        autoRefreshSettings: {
            enabled: false,
            hourlySchedule: {
                hours: 0,
                minutes: 0,
                seconds: 0
            }

        },
        embedAiAssistant: {
            enableAiAssistant: false,
            aiAssistantPosition: 'bottom',
            enableAiSummary: false,
            enableWidgetSummary: false,
            enableDashboardSummary: false,
            hideAiDataUsage: false
        },
        isRemoveStyle : false,
        scalingFactor: 1,
        localeSettings: {
            culture: 'en-US',
            dateFormat: 'M/d/yyyy',
            timeFormat: 'h:mm:ss tt',
            appLocale: 'en-US'
        },
        actionBegin: '',
        actionComplete: '',
        beforeContextMenuRender: '',
        beforeNavigateUrlLinking: '',
        beforeNavigateToDashboard: '',
        beforeFilterApply: '',
        afterFilterApply: '',
        toolbarSettings: {
            showToolbar: true
        },
        pinboardName: '',
        pinboardSettings: {
            enablePinboardHeader: true,
            enableUnpinWidget: true
        },
        onUnpin: '',
        onDrag: '',
        onDrop: '',
        onLayoutChange: '',
        onResize: '',
        datasources: [],
        designCanvasSettings: {
            margin: null
        },
        widgetContainerSettings: {
            margin: null,
            boxShadow: null
        },
        beforeDatasourceSave: '',
        afterDatasourceSave: '',
        preConfiguredWidgets: {
            dashboardId: '',
            categoryName: ''
        },
        disableAutoRecover: false,
        ajaxBeforeLoad: '',
        isBingMapRequired: false,
        widgetList: '',
        enableDomainMasking: false
    }

};
