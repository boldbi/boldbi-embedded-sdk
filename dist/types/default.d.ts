export declare const DefaultConstructor: {
    IsDependencyLoaded: boolean;
    deprecated: boolean;
    bingMapRequired: boolean;
    azureMapRequired: boolean;
    disableAutoRecover: boolean;
    restrictMobileView: boolean;
    rootUrl: string;
    baseUrl: string;
    siteIdentifier: string;
    dashboardServerApiUrl: string;
    designerRootUrl: string;
    customThemeUrl: string;
    scheduleEndpointUrl: string;
    childContainer: string;
    cdnLink: string;
    liveHelpLink: string;
    maskedCdnUrl: string;
    beforeSaveViewDialogOpenFn: string;
    beforeSaveAsViewDialogOpenFn: string;
    onViewSavedFiltersClickFn: string;
    onBannerIconClickFn: string;
    beforeWidgetIconRenderedFn: string;
    onWidgetIconClickFn: string;
    actionBeginFn: string;
    actionCompleteFn: string;
    reportOpenedFn: string;
    performNavigateDashboardFn: string;
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
    authToken: string;
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
        dashboardVersion: string;
        draftItemID: string;
        CanWrite: boolean;
        DatasourceId: string;
        ConnectionList: string;
        ItemDetail: {
            IsPublic: boolean;
            Description: string;
            Name: string;
        };
    };
    dashboardWidgetExports: {
        dashboard: {
            showExport: boolean;
            showMoreOption: boolean;
            showMetrics: boolean;
        };
        widget: {
            showExport: boolean;
            showMoreOption: boolean;
        };
        export: {
            image: boolean;
            pdf: boolean;
            excel: boolean;
            csv: boolean;
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
    AICssFiles: string[];
    AIScriptFiles: string[];
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
        embedType: "component";
        environment: "onpremise";
        cloudCdnTimeStamp: string;
        customDashboardVersion: string;
        embedToken: string;
        isPublicDashboard: boolean;
        isMultiTabDashboard: boolean;
        mode: "view";
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
        settings: {
            bingMapRequired: boolean;
            azureMapRequired: boolean;
            hideErrorMessage: boolean;
            restrictMobileView: boolean;
            disableAutoRecover: boolean;
            datasources: any[];
            viewer: {
                dashboardName: string;
                header: boolean;
                export: boolean;
                refresh: boolean;
                moreOption: boolean;
                fullScreen: boolean;
                edit: boolean;
                dashboardParameter: boolean;
                comment: boolean;
                metrics: boolean;
                filterOverview: {
                    enabled: boolean;
                    saveAs: boolean;
                    save: boolean;
                    viewSavedFilter: boolean;
                    viewId: string;
                    viewName: string;
                };
                widgetContainer: {
                    margin: any;
                    boxShadow: any;
                };
                autoRefresh: {
                    enabled: boolean;
                    hourlySchedule: {
                        hours: number;
                        minutes: number;
                        seconds: number;
                    };
                };
            };
            designer: {
                previewAs: boolean;
                hideSettings: boolean;
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
                toolbar: {
                    enabled: boolean;
                };
                preConfiguredWidgets: {
                    dashboardId: string;
                    categoryName: string;
                };
            };
            designCanvas: {
                margin: any;
            };
            viewData: {
                allColumns: boolean;
                exporting: boolean;
                columnSelection: boolean;
            };
            theme: {
                appearance: string;
                application: string;
                dashboard: string;
                localTheme: boolean;
                fontFamily: string;
            };
            widget: {
                export: boolean;
                filter: boolean;
                maximize: boolean;
                moreOption: boolean;
                comment: boolean;
            };
            dynamicConnection: {
                enabled: boolean;
                identity: string;
            };
            pinboard: {
                header: boolean;
                unpinWidget: boolean;
            };
            export: {
                csv: boolean;
                image: boolean;
                excel: boolean;
                pdf: boolean;
            };
            brand: {
                hideHelpLink: boolean;
                domain: string;
                name: string;
            };
            language: {
                hideDropdown: boolean;
                code: string;
            };
            locale: {
                culture: string;
                dateFormat: string;
                timeFormat: string;
                appLocale: string;
            };
            aiAssistant: {
                enabled: boolean;
                position: string;
                name: string;
                hideBetaTag: boolean;
                headerTextColor: string;
                hideLogo: boolean;
                hideIcons: {
                    history: boolean;
                    usageAnalytics: boolean;
                    helpLink: boolean;
                    newSession: boolean;
                };
                hideWelcomeNote: boolean;
                hideDashboardTag: boolean;
                hideDatasourceTag: boolean;
                queryDisplayLimit: number;
                dashboards: any[];
                dataSources: any[];
                userName: string;
                summary: {
                    enabled: boolean;
                    widget: boolean;
                    dashboard: boolean;
                };
            };
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
            enableFilterOverview: boolean;
            enableFullScreen: boolean;
            edit: boolean;
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
            enabled: boolean;
            position: string;
            name: string;
            hideAiDataUsage: boolean;
            hideAiChatHelp: boolean;
            summary: {
                enabled: boolean;
                includeWidgetSummary: boolean;
                includeDashboardSummary: boolean;
            };
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
        reportOpened: string;
        performNavigateToDashboard: string;
        beforeContextMenuRender: string;
        beforeNavigateUrlLinking: string;
        beforeViewdataIconRender: string;
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
        hideErrorMessage: boolean;
        events: {
            onActionStart: string;
            onActionComplete: string;
            onAjaxStart: string;
            onResize: string;
            onError: string;
            viewer: {
                beforeContextMenuRender: string;
                beforeUrlNavigation: string;
                beforeViewDataRender: string;
                beforeToolBarItemsRender: string;
                onToolbarItemClick: string;
                beforeMobileMenuOpen: string;
            };
            designer: {
                beforeWidgetsListed: string;
                beforeToolbarButtonsRender: string;
                beforeToolbarIconsRender: string;
                onToolbarItemClick: string;
                beforePublishDialogOpen: string;
            };
            datasource: {
                beforeToolbarButtonsRender: string;
                beforeToolbarIconsRender: string;
                beforeSave: string;
                afterSave: string;
                onToolbarItemClick: string;
            };
            pinboard: {
                onDrag: string;
                onDrop: string;
                onLayoutChange: string;
                onUnpin: string;
            };
            widget: {
                beforeLayoutRender: string;
                beforeToolBarItemsRender: string;
                beforeContextMenuRender: string;
                onToolbarItemClick: string;
            };
            filters: {
                afterApply: string;
                beforeApply: string;
                onInteraction: string;
                onSavedFilterClick: string;
                beforeSaveViewDialogOpen: string;
                beforeSaveAsViewDialogOpen: string;
            };
        };
    };
};
