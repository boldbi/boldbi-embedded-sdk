'use strict';

let bbEmbed: any;
let tabInstance: any;

declare const window : any;
declare const ejdashboard: any;
declare const document: any;
declare const shortenEnum: any;
declare const SelectedFilterValue: any;
declare const lengthenEnum: any;
declare const WeakMap: any;
declare const Map: any;
declare const Element : any;

export class BoldBI {
    public IsDependencyLoaded: boolean;
    public rootUrl: string;
    public baseUrl: string;
    public siteIdentifier: string;
    public dashboardServerApiUrl: string;
    public designerRootUrl: string;
    public customThemeUrl: string;
    public scheduleEndpointUrl: string;
    public childContainer: any;
    public cdnLink: string;
    public onSaveFilterFn: string;
    public onSaveAsFilterFn: string;
    public onViewSavedFiltersFn: string;
    public onBannerIconClickFn: string;
    public beforeWidgetIconRenderedFn: string;
    public onWidgetIconClickFn: string;
    public actionBeginFn: string;
    public actionCompleteFn: string;
    public beforeBannerIconRenderFn: string;
    public beforeOtherRenderFn: string;
    public isWidgetMode: boolean;
    public widgetName: string;
    public isDashboardViewMode: boolean;
    public dashboardViewName: string;
    public errorImage: string;
    public pinBoardRendered: boolean;
    public pinboardIds: any;
    public fromColumn: number;
    public toColumn: number;
    public fromPosition: number;
    public toPosition: number;
    public column: number;
    public position: number;
    public viewerScriptFiles: Array<string>;
    public pinBoardScriptFiles: Array<string>;
    public pinboardCssFiles: Array<string>;
    public ejDependentFiles: Array<string>;
    public ejViewerDependentFiles: Array<string>;
    public ejDesignerDependentFiles: Array<string>;
    public designerScriptFiles: Array<string>;
    public cssFiles: Array<string>;
    public designerCssFiles: Array<string>;
    public applicationThemeCssFiles: Array<string>;
    public dashboardThemeCssFiles: Array<string>;
    public embedAuthorizeEndPoint: string;
    public embedGetDetailsEndPoint: string;
    public embedOptions: any;
    public afterVirtualHomepageSave: Function;
    public id: any;
    public onFavoriteStateChangeFn: string;
    public isMultiTab: boolean;
    public parentDbrdId: any;
    public multiTabTheme: string;
    public isNewConnection: boolean;
    public dashboardDetails: any;
    public pinboardDetails: any;
    public accessToken: string;
    public homepageItemId: string;
    public isVirtualHomepage: boolean;
    public dashboardUrl: string;
    public commentsArgs: any;
    public _widgetsCollection: any;
    public jQueryDepedentFile: string;
    public jqConflictFile: string;
    public isFullscreen: boolean;
    public wrapperDependentScriptFiles: Array<string>;
    public isMultipleWidgetMode: boolean;
    public invalidDetail: boolean;
    public fontFamilyCssFiles: Array<string>;

    static Mode: any = Object.freeze({'View': 'view', 'Design': 'design', 'Connection': 'connection', 'DataSource': 'datasource'});

    static EmbedType: any = Object.freeze({'Component': 'component', 'IFrame': 'iframe'});

    static Environment: any = Object.freeze({'Enterprise': 'onpremise', 'Cloud': 'cloud'});

    static Theme: any = Object.freeze({'Off': 'off', 'Light': 'light', 'Dark':  'dark'});

    static _storage: any = new WeakMap();

    static _widgetsCollection: any = [];

    loadDashboard: any;

    loadDashboardWidget: any;

    loadMultipleWidgets: any;

    loadDesigner: any;

    refreshWidgetData: any;

    addWidgetToPinboard: any;

    constructor() {
        this.IsDependencyLoaded = false;
        this.rootUrl = '';
        this.baseUrl = '';
        this.siteIdentifier = '';
        this.dashboardServerApiUrl = '';
        this.designerRootUrl = '';
        this.customThemeUrl = '';
        this.scheduleEndpointUrl = '';
        this.childContainer = '';
        this.cdnLink = '';
        this.onSaveFilterFn = 'saveFilter';
        this.onSaveAsFilterFn = 'saveAsFilter';
        this.onViewSavedFiltersFn = 'openViewSection';
        this.onBannerIconClickFn = 'onBannerIconClick';
        this.beforeWidgetIconRenderedFn = 'beforeWidgetIconRendered';
        this.onWidgetIconClickFn = 'onWidgetIconClick';
        this.actionBeginFn = 'onActionBeginOfNewDashboardViewer';
        this.actionCompleteFn = 'onActionCompleteOfNewDashboardViewer';
        this.beforeBannerIconRenderFn = 'beforeBannerIconRender';
        this.beforeOtherRenderFn = 'beforeOtherOptionContextMenuRender';
        this.isWidgetMode = false;
        this.widgetName = '';
        this.isDashboardViewMode = false;
        this.dashboardViewName = '';
        this.errorImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjExNzgwNzk4MzhBOTExRTQ4MDMxRTZEMkIzQUQzNjdCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjExNzgwNzk5MzhBOTExRTQ4MDMxRTZEMkIzQUQzNjdCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTE3ODA3OTYzOEE5MTFFNDgwMzFFNkQyQjNBRDM2N0IiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTE3ODA3OTczOEE5MTFFNDgwMzFFNkQyQjNBRDM2N0IiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4RB5yjAAABXklEQVR42rRUsU7DQAzNRWxESMydK2XsAhtiQGHo1LmsZYCBMSNDx3wASJQ1zN0rJjZYOlbqDCsSPxCeq5f0anwtSMHSk52L/c4++85VVRW1KXu14ZwLOn2enK1+Hr48B3evE3ONoQhBcgw1AjKgw+V3YAY8gvz1V4QgOoC6B4b0nQML2inQo/0EXIH4K0hIMslAspsCOQKWKvMuVAEMAMkyE9KmF2LUH3AugQoYK5IbgVob07f0eWJ1ZlLmFDveqjM/JRqhj1QxZOxKYs9nRJ0bTdwHEmM9V7EbhNLNuT4zSkLSSGW5ZNMyi7DjddMiTAL/Ft5YrQd7h3z8+aZwaFPLCaX1t3CkjP1Rssxfj3Omb825wFjvctBnFuGEujCyeCC0FCp2TYiy3qBkSAd6sCF9YmOweVtKxv7P1Qs9DnfAxY7HQaq53vo4qEyOoC4Dz9fEL9MkbEviqGX5FmAA1Vq0VgBUvekAAAAASUVORK5CYII=';
        this.pinBoardRendered = true;
        this.pinboardIds = [];
        this.fromColumn = null;
        this.toColumn = null;
        this.fromPosition = null;
        this.toPosition = null;
        this.column = null;
        this.position = null;
        this.isMultiTab = false;
        this.parentDbrdId = '';
        this.isNewConnection = false;
        this.multiTabTheme = '';
        this.dashboardDetails = {};
        this.pinboardDetails = [];
        this.accessToken = '';
        this.homepageItemId = '';
        this.isVirtualHomepage = false;
        this.dashboardUrl = '';
        this.commentsArgs = {};
        this._widgetsCollection = [];
        this.jQueryDepedentFile = 'jquery-1.10.2.min.js';
        this.jqConflictFile = 'window.bb$ = jQuery.noConflict();';
        this.isFullscreen = false;
        this.embedAuthorizeEndPoint = '/embed/authorize';
        this.embedGetDetailsEndPoint = '/embed/get-details';
        this.isMultipleWidgetMode = false;
        this.invalidDetail =  false;

        this.wrapperDependentScriptFiles = [
            'jquery.easing.1.3.min.js',
            'jquery-ui.min.js',
            'jsrender.min.js'
        ];

        this.viewerScriptFiles = [
            'ej1.web.all.min.js',
            'ej2.web.all.min.js',
            'designerlocalization.js'
        ];

        this.pinBoardScriptFiles = [
            'bootstrap.min.js'
        ];

        this.pinboardCssFiles = [
            'pinboard-embed.min.css'
        ];

        this.ejViewerDependentFiles = [
            'ej.dashboarddesigner.min.js'
        ];

        this.ejDesignerDependentFiles = [
            'codemirror.min.js'
        ];

        this.designerScriptFiles = [
            'ej1.web.all.min.js',
            'ej2.web.all.min.js',
            'designerlocalization.js',
            'signalr.min.js'
        ];

        this.cssFiles = [
            'font-server.min.css',
            'ej1.web.all.min.css',
            'ej2.partone.web.all.min.css',
            'ej2.parttwo.web.all.min.css',
            'ej.designerwidgets.all.min.css',
            'ej.dashboarddesigner.min.css'
        ];

        this.designerCssFiles = [
            'ej.codemirror.min.css'
        ];

        this.applicationThemeCssFiles = [
            'boldbi.theme.definition.min.css',
            'application.theme.css'
        ];

        this.dashboardThemeCssFiles = [
            'dashboard.theme.css'
        ];

        this.fontFamilyCssFiles = [
            'font-family.min.css'
        ];

        this.embedOptions = {
            serverUrl: '',
            dashboardId: '',
            dashboardPath: '',
            datasourceId: '',
            datasourceName: '',
            embedContainerId: '',
            embedType: BoldBI.EmbedType.Component,
            environment: BoldBI.Environment.Enterprise,
            mode: BoldBI.Mode.View,
            dashboardSettings: {
                showHeader: true,
                showExport: true,
                showRefresh: true,
                showMoreOption: true,
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
                    hideDataSourceConfig: false
                },
                viewDataSettings: {
                    showAllColumns: false
                },
                showPreviewAs: true,
                themeSettings: {
                    appearance: '',
                    application: '',
                    dashboard: '',
                    isLocalTheme: false
                }
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
                beforeWidgetItemsListed: ''
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
            height: '768px',
            width: '1024px',
            theme: '',
            authorizationServer: {
                url: '',
                data: '',
                headers: {

                },
                authorizionComplete: ''
            },
            expirationTime: 86400,
            autoRefreshSettings: {
                enabled: false,
                hourlySchedule: {
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                }

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
            widgetList: ''
        };
        this.loadDashboard = this.Invoke(function(dashboardId?: string): any {
            if (!this.invalidDetail) {
                if (this.embedOptions.mode != BoldBI.Mode.View) {
                    throw new Error ('Invalid embeded Mode');
                }
                if (this.embedOptions.pinboardName != '') {
                    this.embedOptions.pinboardName = '';
                }
                if (dashboardId != undefined) {
                    this.embedOptions.dashboardId = dashboardId;
                }
                if (this.embedOptions.embedType == BoldBI.EmbedType.Component) {
                    this.isWidgetMode = false;
                    this.widgetName = '';
                    this.isDashboardViewMode = false;
                    this.dashboardViewName = '';
                    this._showLoader();
                    this._isDependencyLoaded(this);
                } else if (this.embedOptions.embedType == BoldBI.EmbedType.IFrame) {
                    const iframe: any = document.createElement('iframe');
                    iframe.frameBorder = 0;
                    iframe.width = this.embedOptions.width;
                    iframe.height = this.embedOptions.height;
                    iframe.id = this.embedOptions.embedContainerId + '_' + this.embedOptions.dashboardId;
                    iframe.allowfullscreen = this.embedOptions.dashboardSettings.showFullScreen;
                    iframe.setAttribute('src', this.embedOptions.serverUrl + '/dashboards/' + this.embedOptions.dashboardId + '?isembed=true');

                    document.getElementById(this.embedOptions.embedContainerId).appendChild(iframe);
                }
            }
        });

        this.loadDashboardWidget = this.Invoke(function(name: string, dashboardId?: string): any {
            if (!this.invalidDetail) {
                if (this._isEmptyOrSpaces(name)) {
                    throw new Error ('Widget name should not be empty');
                }
                if (this.embedOptions.mode != BoldBI.Mode.View) {
                    throw new Error ('Cant able to render the Widget in design mode');
                }
                if (this.embedOptions.pinboardName != '' && this.pinBoardRendered) {
                    this.embedOptions.pinboardName = '';
                }
                if (this.embedOptions.embedType == BoldBI.EmbedType.Component) {
                    this.isWidgetMode = true;
                    this.widgetName = name;
                    this.isDashboardViewMode = false;
                    this.dashboardViewName = '';
                    this._showLoader();
                    this._isDependencyLoaded(this, dashboardId);
                } else if (this.embedOptions.embedType == BoldBI.EmbedType.IFrame) {
                    const iframe: any = document.createElement('iframe');
                    iframe.frameBorder = 0;
                    iframe.width = this.embedOptions.width;
                    iframe.height = this.embedOptions.height;
                    iframe.id = this.embedOptions.embedContainerId + '_' + this.embedOptions.dashboardId;
                    iframe.allowfullscreen = this.embedOptions.dashboardSettings.showFullScreen;
                    iframe.setAttribute('src', this.embedOptions.serverUrl + '/dashboards/' + this.embedOptions.dashboardId + '?isembed=true');

                    document.getElementById(this.embedOptions.embedContainerId).appendChild(iframe);
                }
            }
        });

        this.loadMultipleWidgets = this.Invoke(function(dashboardId?: string): any {
            if (!this.invalidDetail) {
                if (this.embedOptions.mode != BoldBI.Mode.View) {
                    throw new Error ('Invalid embed mode');
                }
                if (this.embedOptions.pinboardName != '') {
                    this.embedOptions.pinboardName = '';
                }
                if (dashboardId != undefined) {
                    this.embedOptions.dashboardId = dashboardId;
                }
                if (this.embedOptions.embedType == BoldBI.EmbedType.Component) {
                    this.isWidgetMode = true;
                    this.isMultipleWidgetMode = true;
                    this.widgetName = '';
                    this.isDashboardViewMode = false;
                    this.dashboardViewName = '';
                    const that: BoldBI = this;
                    const multipleWidgetsList: any = this.embedOptions.widgetList;
                    const checkjQueryLoaded: any = setInterval(() => {
                        if (window.jQuery) {
                            clearInterval(checkjQueryLoaded);
                            multipleWidgetsList.forEach(function (widgetInfo: any): any {
                                const embedWidgetContainerId: string = widgetInfo.containerId;
                                let embedContainer: any = window.bbEmbed.call(that, '#' + embedWidgetContainerId + '_embeddedbi');
                                if (embedContainer.length === 0) {
                                    this.childContainer = document.createElement('div');
                                    this.childContainer.id = embedWidgetContainerId + '_embeddedbi';
                                    bbEmbed('#' + embedWidgetContainerId).css({ 'width': bbEmbed('.e-content.e-lib.e-touch').width(), 'height': this.embedOptions.height });
                                    document.getElementById(embedWidgetContainerId).append(this.childContainer);
                                    embedContainer = window.bbEmbed.call(that, '#' + embedWidgetContainerId + '_embeddedbi');
                                }
                                this._showLoader(embedWidgetContainerId);
                            }.bind(this));
                            this._isDependencyLoaded(this, dashboardId);
                        }
                    }, 1000);
                }
            }
        });

        this.loadDesigner = this.Invoke(function(dashboardId?: string): any {
            if (!this.invalidDetail) {
                if (this.embedOptions.mode != BoldBI.Mode.Design) {
                    throw new Error ('Invalid embed Mode');
                }
                if (this.embedOptions.pinboardName != '') {
                    this.embedOptions.pinboardName = '';
                }
                if (dashboardId != undefined) {
                    this.embedOptions.dashboardId = dashboardId;
                }
                if (this.embedOptions.embedType == BoldBI.EmbedType.Component) {
                    this.isWidgetMode = false;
                    this.widgetName = '';
                    this.isDashboardViewMode = false;
                    this.dashboardViewName = '';
                    this._showLoader();
                    this._isDependencyLoaded(this);
                } else if (this.embedOptions.embedType == BoldBI.EmbedType.IFrame) {
                    const iframe: any = document.createElement('iframe');
                    iframe.frameBorder = 0;
                    iframe.width = this.embedOptions.width;
                    iframe.height = this.embedOptions.height;
                    iframe.id = this.embedOptions.embedContainerId + '_' + this.embedOptions.dashboardId;
                    iframe.allowfullscreen = this.embedOptions.dashboardSettings.showFullScreen;
                    iframe.setAttribute('src', this.embedOptions.serverUrl + '/dashboard-designer/' + this.embedOptions.dashboardId + '?isembed=true');

                    document.getElementById(this.embedOptions.embedContainerId).appendChild(iframe);
                }
            }
        });

        /**
         * @param {string} widgetNames - Define the name of the widget to be Refresh.
         * @param {boolean} hideLoader - Define whether to show or hide loading indicator while processing.
         * @param {string} dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard.
         */
        this.refreshWidgetData = this.Invoke(function(widgetNames: string, hideLoader: boolean, dashboardId: string): any {
            if (Array.isArray(widgetNames) == true) {
                if (this.isMultiTab) {
                    const dashboardContainer: any = bbEmbed('#' + this.embedOptions.embedContainerId).find('.e-content .bbembed-multitab-dbrd');
                    for (let i: any = 0; i < dashboardContainer.length; i++) {
                        if (bbEmbed(dashboardContainer[`${i}`]).attr('id').includes(dashboardId.toString().replaceAll('-', '')) > 0) {
                            const embedId: string = bbEmbed(dashboardContainer[`${i}`]).attr('id');
                            const dbrdInstance: any = this._getDashboardInstance(embedId);
                            if (dbrdInstance != undefined) {
                                dbrdInstance.refreshWidget(widgetNames, hideLoader);
                            }
                            break;
                        }
                    }
                } else {
                    const dbrdInstance: any = this._getDashboardInstance();
                    if (dbrdInstance != undefined) {
                        dbrdInstance.refreshWidget(widgetNames, hideLoader);
                    }
                }
            }
            else {
                throw new Error('Cannot able to refresh the widget the WigetName should be in array');
            }
        });

        this.addWidgetToPinboard = this.Invoke(function(dashboardId: string, widgetId: string, widgetName: string): any {
            if (!this._isEmptyOrSpaces(dashboardId) && !this._isEmptyOrSpaces(widgetId) && !this._isEmptyOrSpaces(widgetName)) {
                const homepageItemId: any = bbEmbed('#widget-container').attr('data-homepage-id');
                const that: BoldBI = this;
                const embedQuerString: any = 'embed_nonce=' + this._uuidv4Generartor() +
                    '&homepageId=' + homepageItemId +
                    '&isPinUpdate=' + true +
                    '&pinWidgetId=' + widgetId +
                    '&pinDashbooardId=' + dashboardId +
                    '&pinWidgetName=' + (this._isNullOrUndefined(widgetName) ? null : widgetName) +
                    '&pinboard_name=' + this.embedOptions.pinboardName +
                    '&embed_mode=' + this.embedOptions.mode +
                    '&embed_timestamp=' + Math.round((new Date()).getTime() / 1000) +
                    '&embed_expirationtime=' + this.embedOptions.expirationTime;
                const data: any = {
                    embedQuerString: encodeURI(embedQuerString),
                    dashboardServerApiUrl: this.dashboardServerApiUrl
                };
                this._xhrRequestHelper('POST', this.embedOptions.authorizationServer.url, data, this.embedOptions.authorizationServer.headers, function (result: {Status: boolean, Message: string, Data?: any }): any {
                    if (result.Status) {
                        that._addWidgetInPinboard(result.Data);
                    }
                    else if (!result.Status) {
                        throw new Error('Cant able to add the widget due to ' + result.Message);
                    }
                });
            } else {
                throw new Error('Please provide the valid dashboard id and widget id');
            }
        });
    }


    // Customer exposed functions
    static create (options: object): any {
        const boldBIObj: BoldBI = new BoldBI();
        boldBIObj.isMultiTab = false;
        boldBIObj.parentDbrdId = '';
        boldBIObj.pinboardIds = [];
        delete window['multiTabFilterParameter'];
        if (document.addEventListener) {
            document.addEventListener('webkitfullscreenchange', function (): any { boldBIObj._fullscreenExitHandler(boldBIObj); }, false);
            document.addEventListener('mozfullscreenchange', function (): any { boldBIObj._fullscreenExitHandler(boldBIObj); }, false);
            document.addEventListener('fullscreenchange', function (): any { boldBIObj._fullscreenExitHandler(boldBIObj); }, false);
            document.addEventListener('MSFullscreenChange', function (): any { boldBIObj._fullscreenExitHandler(boldBIObj); }, false);
            window.addEventListener('resize', function (): any {
                if (boldBIObj.isMultiTab) {
                    boldBIObj.resizeDashboard('');
                } else if (!boldBIObj._isEmptyOrSpaces(boldBIObj.embedOptions.pinboardName) || !boldBIObj._isNullOrUndefined(boldBIObj.embedOptions.pinboardName)) {
                    boldBIObj.setListMinimumHeight();
                }
            });
        }
        if (boldBIObj._validateOptions(options)) {
            boldBIObj._initializeEmbedOptions(options);
            if (boldBIObj.embedOptions.embedType == BoldBI.EmbedType.Component) {
                try {
                    if (boldBIObj.embedOptions.widgetList == '') {
                        boldBIObj.childContainer = document.createElement('div');
                        boldBIObj.childContainer.id = boldBIObj.embedOptions.embedContainerId + '_embeddedbi';
                        const _biInstance: any = BoldBI._gettinstance(document.getElementById(boldBIObj.embedOptions.embedContainerId), 'embeddedBoldBI');
                        if (_biInstance != null || _biInstance != undefined) {
                            _biInstance.destroy();
                        }
                        document.getElementById(boldBIObj.embedOptions.embedContainerId).innerHTML = '';
                        document.getElementById(boldBIObj.embedOptions.embedContainerId).append(boldBIObj.childContainer);
                    }
                    if (boldBIObj._initializeUrls()) {
                        if (!boldBIObj.IsDependencyLoaded) {
                            if (boldBIObj.embedOptions.environment == BoldBI.Environment.Cloud) {
                                if (boldBIObj._isEmptyOrSpaces(boldBIObj.cdnLink) || boldBIObj._isEmptyOrSpaces(boldBIObj.designerRootUrl)) {
                                    boldBIObj._getCloudLinks();
                                }
                            } else {
                                boldBIObj._addJquerydependentFiles();
                            }
                        }
                    } else {
                        boldBIObj.invalidDetail = true;
                        const retObj: BoldBI = Object.assign(boldBIObj);
                        return retObj;
                    }
                } catch (ex) {
                    if (ex.message == 'Cannot read property append of null') {
                        alert('Invalid Embed Container Id');
                        return false;
                    }
                    else {
                        boldBIObj._throwError(ex.message, boldBIObj.embedOptions.embedContainerId);
                        boldBIObj.invalidDetail = true;
                        const retObj: BoldBI  = Object.assign(boldBIObj);
                        return retObj;
                    }
                }
            } else {
                boldBIObj._throwError('Invalid EmbedType', boldBIObj.embedOptions.embedContainerId);
                boldBIObj.invalidDetail = true;
                const retObj: BoldBI  = Object.assign(boldBIObj);
                return retObj;
            }
            if (boldBIObj.embedOptions.widgetList == ''){
                const ele: string = document.getElementById(boldBIObj.embedOptions.embedContainerId);
                if (this._hasinstance(ele, 'embeddedBoldBI')) {
                    this._removeinstance(ele, 'embeddedBoldBI');
                }
            }
            //const retObj:any = Object.assign({}, boldBIObj)
            // eslint-disable-next-line
            const retObj: BoldBI = (<any>Object).assign(boldBIObj);
            if (boldBIObj.embedOptions.widgetList == ''){
                const ele: string = document.getElementById(boldBIObj.embedOptions.embedContainerId);
                this._putinstance(ele, 'embeddedBoldBI', retObj);
            }
            return retObj;
        }
        boldBIObj._initializeEmbedOptions(options);
        boldBIObj.invalidDetail = true;
        const retObj: BoldBI = Object.assign(boldBIObj);
        return retObj;
    }

    static getInstance(eleID: string): any {
        BoldBI._widgetsCollection = [];
        return this._gettinstance(document.getElementById(eleID), 'embeddedBoldBI');
    }

    // eslint-disable-next-line
    Invoke<T extends (...args: any[]) => any>(originalMethod: T): T {
        const that: this = this;
        // eslint-disable-next-line
        return function (...args: Parameters<T>) {
            try {
                return originalMethod.apply(this, args);
            } catch (error) {
                that._throwError(error, this.embedOptions.embedContainer);
            }
        }.bind(this) as T;
    }

    destroy(): any {
        const that: BoldBI = this;
        if (this.isMultiTab) {
            const dashboardContainer: any = bbEmbed('#' + this.embedOptions.embedContainerId).find('.e-content .bbembed-multitab-dbrd');
            for (let i: any = 0; i < dashboardContainer.length; i++) {
                const embedId: string = bbEmbed(dashboardContainer[`${i}`]).attr('id');
                const existingDashboardInstance: any = this._getDashboardInstance(embedId);
                if (existingDashboardInstance != undefined) {
                    existingDashboardInstance.destroy();
                }
            }
            BoldBI._removeinstance(document.getElementById(this.embedOptions.embedContainerId), 'embeddedBoldBI');
            document.getElementById(this.embedOptions.embedContainerId).innerHTML = '';
        } else if (bbEmbed('.pinBoardDbrd').length > 0) {
            bbEmbed('.pinBoardDbrd').each(function (): any {
                const existingDashboardInstance: any = that._getDashboardInstance(this.id);
                if (existingDashboardInstance != undefined) {
                    existingDashboardInstance.destroy();
                }
            });
            BoldBI._removeinstance(document.getElementById(this.embedOptions.embedContainerId), 'embeddedBoldBI');
            document.getElementById(this.embedOptions.embedContainerId).innerHTML = '';
        } else {
            const embedContainerId: any = this.embedOptions.embedContainerId;
            const existingDashboardInstance: any = this._getDashboardInstance();
            if (existingDashboardInstance != undefined) {
                existingDashboardInstance.destroy();
            }
            BoldBI._removeinstance(document.getElementById(embedContainerId), 'embeddedBoldBI');
            document.getElementById(embedContainerId).innerHTML = '';
        }
        if (this.embedOptions.isRemoveStyle == true){
            document.querySelectorAll('link').forEach(function (node: {href?: any, parentNode?: any}): any {
                that.cssFiles.forEach(function (file : string): any {
                    if (node.href.toLowerCase().indexOf(file.toLowerCase()) != -1) {
                        node.parentNode.removeChild(node);
                    }
                });
            });
        }
    }

    loadPinboard: any = this.Invoke(function(): any {
        if (!this.invalidDetail) {
            if (this.embedOptions.pinboardName == '') {
                throw new Error ('Pinboard name should not be empty');
            }
            if (this.embedOptions.mode != BoldBI.Mode.View) {
                throw new Error ('Cant able to render the Pinboard in design mode');

            }
            if (this.embedOptions.embedType == BoldBI.EmbedType.Component) {
                this.isWidgetMode = false;
                this.widgetName = '';
                this.isDashboardViewMode = false;
                this.dashboardViewName = '';
                this._showLoader();
                this._isDependencyLoaded(this);
            } else if (this.embedOptions.embedType == BoldBI.EmbedType.IFrame) {
                const iframe: any = document.createElement('iframe');
                iframe.frameBorder = 0;
                iframe.width = this.embedOptions.width;
                iframe.height = this.embedOptions.height;
                iframe.id = this.embedOptions.embedContainerId + '_' + this.embedOptions.dashboardId;
                iframe.allowfullscreen = this.embedOptions.dashboardSettings.showFullScreen;
                iframe.setAttribute('src', this.embedOptions.serverUrl + '/dashboards/' + this.embedOptions.dashboardId + '?isembed=true');

                document.getElementById(this.embedOptions.embedContainerId).appendChild(iframe);
            }
        }
    });

    loadDashboardView(): any {
        throw new Error ('loadDashboardView not implemented');
    }


    loadDatasource: any = this.Invoke(function (): any {
        if (!this.invalidDetail) {
            if (this.embedOptions.dashboardId || this.embedOptions.dashboardPath) {
                this.embedOptions.dashboardId = this.embedOptions.dashboardPath = '';
            }
            if (this.embedOptions.pinboardName != '') {
                this.embedOptions.pinboardName = '';
            }
            if (this.embedOptions.mode == BoldBI.Mode.DataSource || this.embedOptions.mode == BoldBI.Mode.Connection) {
                if (this.embedOptions.embedType == BoldBI.EmbedType.Component) {
                    this.isWidgetMode = false;
                    this.widgetName = '';
                    this.isDashboardViewMode = false;
                    this.dashboardViewName = '';
                    this._showLoader();
                    this._isDependencyLoaded(this);
                } else if (this.embedOptions.embedType == BoldBI.EmbedType.IFrame) {
                    const iframe: any = document.createElement('iframe');
                    iframe.frameBorder = 0;
                    iframe.width = this.embedOptions.width;
                    iframe.height = this.embedOptions.height;
                    iframe.id = this.embedOptions.embedContainerId + '_' + this.embedOptions.datasourceId;
                    iframe.allowfullscreen = this.embedOptions.dashboardSettings.showFullScreen;
                    iframe.setAttribute('src', this.embedOptions.serverUrl + '/datasource-designer/' + this.embedOptions.datasourceId + '?isembed=true');

                    document.getElementById(this.embedOptions.embedContainerId).appendChild(iframe);
                }
            } else {
                throw new Error ('Invalid embed Mode');
            }
        }
    });

    /**
     * @param {object} exportInformation - It is an object that holds "dashboardId" - Define the unique id of the dashboard if it is present within the multitab dashboard, "fileName" - Define the name of the file to be exported, "pageSize" - Define the size of the page('A3','A4','A5','Letter'), "pageOrientation" - Define the page orientation('Landscape','Portrait'), "showAppliedFilters" - Define whether we need to export the dashboard with or without a filter.
     * @param {string} exportInformation.dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard
     * @param {string} exportInformation.fileName - Define the name of the file to be exported
     * @param {string} exportInformation.pageSize - Define the size of the page('A3','A4','A5','Letter').
     * @param {string} exportInformation.pageOrientation - Define the page orientation('Landscape','Portrait').
     * @param {boolean} exportInformation.showAppliedFilters - Define whether we need to export the dashboard with or without a filter.
     */
    exportDashboardAsPdf(exportInformation : {dashboardId: string; fileName?: string; pageSize?: string; pageOrientation?: string; showAppliedFilters?: boolean }): any {
        if (this.isMultiTab) {
            let dashboardId: string = exportInformation.dashboardId;
            dashboardId = dashboardId.replaceAll('-', '');
            const MultitabDashboardId: string = 'multi_' + dashboardId + '_embeddedbi';
            const dbrdInstance: any = this._getDashboardInstance(MultitabDashboardId);
            if (dbrdInstance != undefined) {
                dbrdInstance.exportAsPdf(exportInformation.fileName, exportInformation.pageSize, exportInformation.pageOrientation, exportInformation.showAppliedFilters);
            }
        }
        else {
            const dbrdInstance: any = this._getDashboardInstance();
            if (dbrdInstance != undefined) {
                if (exportInformation) {
                    dbrdInstance.exportAsPdf(exportInformation.fileName, exportInformation.pageSize, exportInformation.pageOrientation, exportInformation.showAppliedFilters);
                }
                else{
                    dbrdInstance.exportAsPdf();
                }
            }
        }
    }

    /**
     * @param {object} exportInformation -It is an object that holds "dashboardId" - Define the unique id of the dashboard if it is present within the multitab dashboard, "fileName" - Define the name of the file to be exported, "exportImageFormat" - Define the format of the image to be exported('jpg','png'and'bmp'), "resolutionDpi" - Define the resolution of the image (Integer value above 96),"showAppliedFilters" - Define whether we need to export the dashboard with or without a filter
     * @param {string} exportInformation.dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard
     * @param {string} exportInformation.fileName - Define the name of the file to be exported
     * @param {string} exportInformation.exportImageFormat - Define the format of the image to be exported('jpg','png'and'bmp').
     * @param {number} exportInformation.resolutionDpi - Define the resolution of the image (Integer value above 96).
     * @param {boolean} exportInformation.showAppliedFilters - Define whether we need to export the dashboard with or without a filter
     */
    exportDashboardAsImage(exportInformation : {dashboardId: string; fileName?: string; exportImageFormat?: string; resolutionDpi?: string; showAppliedFilters?: boolean }): any {
        if (parseInt(exportInformation.resolutionDpi, 10) > 300) {
            exportInformation.resolutionDpi = '300';
        }
        if (this.isMultiTab) {
            let dashboardId: string = exportInformation.dashboardId;
            dashboardId = dashboardId.replaceAll('-', '');
            const MultitabDashboardId: string = 'multi_' + dashboardId + '_embeddedbi';
            const dbrdInstance: any = this._getDashboardInstance(MultitabDashboardId);
            if (dbrdInstance != undefined) {
                dbrdInstance.exportAsImage(exportInformation.fileName, exportInformation.exportImageFormat, exportInformation.resolutionDpi, exportInformation.showAppliedFilters);
            }
        }
        else {
            const dbrdInstance: any = this._getDashboardInstance();
            if (dbrdInstance != undefined) {
                if (exportInformation) {
                    dbrdInstance.exportAsImage(exportInformation.fileName, exportInformation.exportImageFormat, exportInformation.resolutionDpi, exportInformation.showAppliedFilters);
                }
                else{
                    dbrdInstance.exportAsImage();
                }
            }
        }
    }

    /**
     * @param {object} exportInformation - It is an object that holds "dashboardId" - Define the unique id of the dashboard if it is present within the multitab dashboard, "fileName" - Define the name of the file to be exported, "fileType" - Define the type of file to be exported ('xlsx','xls').
     * @param {string} exportInformation.dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard
     * @param {string} exportInformation.fileName - Define the name of the file to be exported
     * @param {string} exportInformation.fileType - Define the type of file to be exported ('xlsx','xls').
     */
    exportDashboardAsExcel(exportInformation : {dashboardId: string; fileName?: string; fileType?: string }): any {
        if (this.isMultiTab) {
            let dashboardId: string = exportInformation.dashboardId;
            dashboardId = dashboardId.replaceAll('-', '');
            const MultitabDashboardId: string = 'multi_' + dashboardId + '_embeddedbi';
            const dbrdInstance: any = this._getDashboardInstance(MultitabDashboardId);
            if (dbrdInstance != undefined) {
                dbrdInstance.exportAsExcel(exportInformation.fileName, exportInformation.fileType);
            }
        }
        else {
            const dbrdInstance: any = this._getDashboardInstance();
            if (dbrdInstance != undefined) {
                if (exportInformation) {
                    dbrdInstance.exportAsExcel(exportInformation.fileName, exportInformation.fileType);
                }
                else{
                    dbrdInstance.exportAsExcel();
                }
            }
        }
    }

    /**
     * @param {object} exportInformation - It is an object that holds "dashboardId" - Define the unique id of the dashboard if it is present within the multitab dashboard or widget id present in the pinboard, "widgetName" - Define the name of the widget to be exported, "fileName" - Define the name of the file to be exported, "pageSize" - Define the size of the page('A3','A4','A5','Letter'), "pageOrientation" - Define the page orientation('Landscape','Portrait'), "showAppliedFilters" - Define whether we need to export the dashboard with or without a filter.
     * @param {string} exportInformation.dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard or widget id present in the pinboard
     * @param {string} exportInformation.widgetName - Define the name of the widget to be exported
     * @param {string} exportInformation.fileName - Define the name of the file to be exported
     * @param {string} exportInformation.pageSize - Define the size of the page('A3','A4','A5','Letter').
     * @param {string} exportInformation.pageOrientation - Define the page orientation('Landscape','Portrait').
     * @param {boolean} exportInformation.showAppliedFilters - Define whether we need to export the dashboard with or without a filter.
     */
    exportWidgetAsPdf(exportInformation : {dashboardId: string; widgetName: string; fileName?: string; pageSize?: string; pageOrientation?: string; showAppliedFilters?: boolean }): any {
        const that: BoldBI = this;
        if (this.isMultiTab) {
            let dashboardId: string = exportInformation.dashboardId;
            dashboardId = dashboardId.replaceAll('-', '');
            const MultitabDashboardId: string = 'multi_' + dashboardId + '_embeddedbi';
            const dbrdInstance: any = this._getDashboardInstance(MultitabDashboardId);
            if (dbrdInstance != undefined) {
                dbrdInstance.exportWidgetAsPdf(exportInformation.widgetName, exportInformation.fileName, exportInformation.pageSize, exportInformation.pageOrientation, exportInformation.showAppliedFilters);
            }
        }
        else if (bbEmbed('.pinBoardDbrd').length > 0) {
            const length: any = bbEmbed('.pinBoardDbrd').length;
            for (let i: any = 0; i < length; i++) {
                if (that.pinboardIds[`${i}`].widgetId == exportInformation.dashboardId) {
                    const pinboardId: string = that.pinboardIds[`${i}`].pinboardContainerId;
                    const dbrdInstance: any = that._getDashboardInstance(pinboardId + '_embeddedbi');
                    if (dbrdInstance != undefined) {
                        dbrdInstance.exportWidgetAsPdf(exportInformation.widgetName, exportInformation.fileName, exportInformation.pageSize, exportInformation.pageOrientation, exportInformation.showAppliedFilters);
                    }
                }
            }
        }
        else {
            const dbrdInstance: any = this._getDashboardInstance();
            if (dbrdInstance != undefined) {
                dbrdInstance.exportWidgetAsPdf(exportInformation.widgetName, exportInformation.fileName, exportInformation.pageSize, exportInformation.pageOrientation, exportInformation.showAppliedFilters);
            }
        }
    }

    /**
     * @param {object} exportInformation - It is an object that holds "dashboardId" - Define the unique id of the dashboard if it is present within the multitab dashboard or widget id present in the pinboard, "widgetName" - Define the name of the widget to be exported, "fileName" - Define the name of the file to be exported, "exportImageFormat" - Define the format of the image to be exported('jpg','png'and'bmp'), "resolutionDpi" - Define the resolution of the image (Integer value above 96), "showAppliedFilters" - Define whether we need to export the dashboard with or without a filter.
     * @param {string} exportInformation.dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard or widget id present in the pinboard
     * @param {string} exportInformation.widgetName - Define the name of the widget to be exported
     * @param {string} exportInformation.fileName - Define the name of the file to be exported
     * @param {string} exportInformation.exportImageFormat - Define the format of the image to be exported('jpg','png'and'bmp').
     * @param {number} exportInformation.resolutionDpi - Define the resolution of the image (Integer value above 96).
     * @param {boolean} exportInformation.showAppliedFilters - Define whether we need to export the dashboard with or without a filter.
     */
    exportWidgetAsImage(exportInformation : {dashboardId: string; widgetName: string; fileName?: string; exportImageFormat?: string; resolutionDpi?: string; showAppliedFilters?: boolean }): any {
        const that: BoldBI = this;
        if (parseInt(exportInformation.resolutionDpi, 10) > 300) {
            exportInformation.resolutionDpi = '300';
        }
        if (this.isMultiTab) {
            let dashboardId: string = exportInformation.dashboardId;
            dashboardId = dashboardId.replaceAll('-', '');
            const MultitabDashboardId: string = 'multi_' + dashboardId + '_embeddedbi';
            const dbrdInstance: any = this._getDashboardInstance(MultitabDashboardId);
            if (dbrdInstance != undefined) {
                dbrdInstance.exportWidgetAsImage(exportInformation.widgetName, exportInformation.fileName, exportInformation.exportImageFormat, exportInformation.resolutionDpi, exportInformation.showAppliedFilters);
            }
        }
        else if (bbEmbed('.pinBoardDbrd').length > 0) {
            const length: number = bbEmbed('.pinBoardDbrd').length;
            for (let i: any = 0; i < length; i++) {
                if (that.pinboardIds[`${i}`].widgetId == exportInformation.dashboardId) {
                    const pinboardId: string = that.pinboardIds[`${i}`].pinboardContainerId;
                    const dbrdInstance: any = that._getDashboardInstance(pinboardId + '_embeddedbi');
                    if (dbrdInstance != undefined) {
                        dbrdInstance.exportWidgetAsImage(exportInformation.widgetName, exportInformation.fileName, exportInformation.exportImageFormat, exportInformation.resolutionDpi, exportInformation.showAppliedFilters);
                    }
                }
            }
        }
        else {
            const dbrdInstance: any = this._getDashboardInstance();
            if (dbrdInstance != undefined) {
                dbrdInstance.exportWidgetAsImage(exportInformation.widgetName, exportInformation.fileName, exportInformation.exportImageFormat, exportInformation.resolutionDpi, exportInformation.showAppliedFilters);
            }
        }
    }

    /**
     * @param {object} exportInformation - It is an object that holds "dashboardId" - Define the unique id of the dashboard if it is present within the multitab dashboard or widget id present in the pinboard, "widgetName" - Define the name of the widget to be exported, "fileName" - Define the name of the file to be exported, "fileType" - Define the type of file to be exported ('xlsx','xls').
     * @param {string} exportInformation.dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard or widget id present in the pinboard
     * @param {string} exportInformation.widgetName - Define the name of the widget to be exported
     * @param {string} exportInformation.fileName - Define the name of the file to be exported
     * @param {string} exportInformation.fileType - Define the type of file to be exported ('xlsx','xls').
     */
    exportWidgetAsExcel(exportInformation : {dashboardId: string; widgetName: string, fileName?:  string; fileType?: string }): any {
        const that: BoldBI = this;
        if (this.isMultiTab) {
            let dashboardId: string = exportInformation.dashboardId;
            dashboardId = dashboardId.replaceAll('-', '');
            const MultitabDashboardId: string = 'multi_' + dashboardId + '_embeddedbi';
            const dbrdInstance: any = this._getDashboardInstance(MultitabDashboardId);
            if (dbrdInstance != undefined) {
                dbrdInstance.exportWidgetAsExcel(exportInformation.widgetName, exportInformation.fileName, exportInformation.fileType);
            }
        }
        else if (bbEmbed('.pinBoardDbrd').length > 0) {
            const length: any = bbEmbed('.pinBoardDbrd').length;
            for (let i: any = 0; i < length; i++) {
                if (that.pinboardIds[`${i}`].widgetId == exportInformation.dashboardId) {
                    const pinboardId: string = that.pinboardIds[`${i}`].pinboardContainerId;
                    const dbrdInstance: any = that._getDashboardInstance(pinboardId + '_embeddedbi');
                    if (dbrdInstance != undefined) {
                        dbrdInstance.exportWidgetAsExcel(exportInformation.widgetName, exportInformation.fileName, exportInformation.fileType);
                    }
                }
            }
        }
        else {
            const dbrdInstance: any = this._getDashboardInstance();
            if (dbrdInstance != undefined) {
                dbrdInstance.exportWidgetAsExcel(exportInformation.widgetName, exportInformation.fileName, exportInformation.fileType);
            }
        }
    }

    /**
     * @param {object} exportInformation - It is an object that holds "dashboardId" - Define the unique id of the dashboard if it is present within the multitab dashboard or widget id present in the pinboard, "widgetName" - Define the name of the widget to be exported, "fileName" - Define the name of the file to be exported.
     * @param {string} exportInformation.dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard or widget id present in the pinboard
     * @param {string} exportInformation.widgetName - Define the name of the widget to be exported
     * @param {string} exportInformation.fileName - Define the name of the file to be exported
     */
    exportWidgetAsCsv(exportInformation : {dashboardId: string; widgetName: string, fileName?: string }): any {
        const that: BoldBI = this;
        if (this.isMultiTab) {
            let dashboardId: string = exportInformation.dashboardId;
            dashboardId = dashboardId.replaceAll('-', '');
            const MultitabDashboardId: string = 'multi_' + dashboardId + '_embeddedbi';
            const dbrdInstance: any = this._getDashboardInstance(MultitabDashboardId);
            if (dbrdInstance != undefined) {
                dbrdInstance.exportWidgetAsCsv(exportInformation.widgetName, exportInformation.fileName);
            }
        }
        else if (bbEmbed('.pinBoardDbrd').length > 0) {
            const length: any = bbEmbed('.pinBoardDbrd').length;
            for (let i: any = 0; i < length; i++) {
                if (that.pinboardIds[`${i}`].widgetId == exportInformation.dashboardId) {
                    const pinboardId: string = that.pinboardIds[`${i}`].pinboardContainerId;
                    const dbrdInstance: any = that._getDashboardInstance(pinboardId + '_embeddedbi');
                    if (dbrdInstance != undefined) {
                        dbrdInstance.exportWidgetAsCsv(exportInformation.widgetName, exportInformation.fileName);
                    }
                }
            }
        }
        else {
            const dbrdInstance: any = this._getDashboardInstance();
            if (dbrdInstance != undefined) {
                dbrdInstance.exportWidgetAsCsv(exportInformation.widgetName, exportInformation.fileName);
            }
        }
    }

    updateDatasource(): any  {
        const dbrdInstance: any = this._getDashboardInstance();
        if (dbrdInstance != undefined) {
            dbrdInstance.modules.queryDesigner.saveQueryInfo();
        }
    }

    updateFilters(filterParameters: string): any {
        const that: BoldBI = this;
        if (this.isMultiTab) {
            window['multiTabFilterParameter'] = filterParameters;
            const dashboardContainer: any = bbEmbed('#' + this.embedOptions.embedContainerId).find('.e-content .bbembed-multitab-dbrd');
            for (let i: any = 0; i < dashboardContainer.length; i++) {
                const embedId: string = bbEmbed(dashboardContainer[`${i}`]).attr('id');
                const existingDashboardInstance: any = this._getDashboardInstance(embedId);
                if (existingDashboardInstance != undefined) {
                    existingDashboardInstance.option('filterParameters', filterParameters);
                }
            }
        } else if (bbEmbed('.pinBoardDbrd').length > 0) {
            bbEmbed('.pinBoardDbrd').each(function (): any {
                const existingDashboardInstance: any = that._getDashboardInstance(this.id);
                if (existingDashboardInstance != undefined) {
                    existingDashboardInstance.option('filterParameters', filterParameters);
                }
            });
        } else {
            const existingDashboardInstance: any = this._getDashboardInstance();
            if (existingDashboardInstance != undefined) {
                existingDashboardInstance.option('filterParameters', filterParameters);
            }
        }
    }

    resizeDashboard(filterParameters?: string): any {
        const that: BoldBI = this;
        if (this.isMultiTab) {
            bbEmbed('#' + that.embedOptions.embedContainerId + '_multi_tab_dashboard').css('width', bbEmbed('#' + that.embedOptions.embedContainerId).width());
            window['multiTabFilterParameter'] = filterParameters;
            const dashboardContainer: any = bbEmbed('#' + this.embedOptions.embedContainerId).find('.e-content .bbembed-multitab-dbrd');
            for (let i: any = 0; i < dashboardContainer.length; i++) {
                const embedId: string = bbEmbed(dashboardContainer[`${i}`]).attr('id');
                const existingDashboardInstance: any = this._getDashboardInstance(embedId);
                if (existingDashboardInstance != undefined) {
                    const clientFnc: any = window[that.embedOptions.onResize];
                    if (clientFnc instanceof Function) {
                        clientFnc.call(this, existingDashboardInstance);
                    }
                    if (this.embedOptions.onResize instanceof Function) {
                        this.embedOptions.onResize.call(this, existingDashboardInstance);
                    }
                    existingDashboardInstance.resizeDashboard();
                }
            }
            this._tabSelected();
        } else if (bbEmbed('.pinBoardDbrd').length > 0) {
            bbEmbed('.pinBoardDbrd').each(function (): any {
                const existingDashboardInstance: any = that._getDashboardInstance(this.id);
                if (existingDashboardInstance != undefined) {
                    const clientFnc: any = window[that.embedOptions.onResize];
                    if (clientFnc instanceof Function) {
                        clientFnc.call(that, existingDashboardInstance);
                    }
                    if (that.embedOptions.onResize instanceof Function) {
                        that.embedOptions.onResize.call(that, existingDashboardInstance);
                    }
                    existingDashboardInstance.resizeDashboard();
                }
            });
        } else {
            const existingDashboardInstance: any = this._getDashboardInstance();
            if (existingDashboardInstance != undefined) {
                const clientFnc: any = window[that.embedOptions.onResize];
                if (clientFnc instanceof Function) {
                    clientFnc.call(this, existingDashboardInstance);
                }
                if (this.embedOptions.onResize instanceof Function) {
                    this.embedOptions.onResize.call(this, existingDashboardInstance);
                }
                existingDashboardInstance.resizeDashboard();
            }
        }
    }

    refreshDashboard(): any {
        const that: BoldBI = this;
        if (this.isMultiTab) {
            const dashboardContainer: any = bbEmbed('#' + this.embedOptions.embedContainerId).find('.e-content .bbembed-multitab-dbrd');
            for (let i: any = 0; i < dashboardContainer.length; i++) {
                const embedId: string = bbEmbed(dashboardContainer[`${i}`]).attr('id');
                const existingDashboardInstance: any = this._getDashboardInstance(embedId);
                if (existingDashboardInstance != undefined) {
                    existingDashboardInstance.updateDashboard();
                }
            }
        } else if (bbEmbed('.pinBoardDbrd').length > 0) {
            bbEmbed('.pinBoardDbrd').each(function (): any {
                const existingDashboardInstance: any = that._getDashboardInstance(this.id);
                if (existingDashboardInstance != undefined) {
                    existingDashboardInstance.updateDashboard();
                }
            });
        } else {
            const existingDashboardInstance: any = this._getDashboardInstance();
            if (existingDashboardInstance != undefined) {
                existingDashboardInstance.updateDashboard();
            }
        }
    }

    hidePopup(): any {
        if (this.isMultiTab) {
            const dashboardContainer: any = bbEmbed('#' + this.embedOptions.embedContainerId).find('.e-content .bbembed-multitab-dbrd');
            for (let i: any = 0; i < dashboardContainer.length; i++) {
                const embedId: string = bbEmbed(dashboardContainer[`${i}`]).attr('id');
                const existingDashboardInstance: any = this._getDashboardInstance(embedId);
                if (existingDashboardInstance != undefined) {
                    existingDashboardInstance.hideAllPopupsForDashboard();
                }
            }
        } else {
            const dbrdInstance: any = this._getDashboardInstance();
            if (dbrdInstance != undefined) {
                dbrdInstance.hideAllPopupsForDashboard();
            }
        }
    }

    hideWaitingIndicator(): any {
        if (this.isMultiTab) {
            const dashboardContainer: any = bbEmbed('#' + this.embedOptions.embedContainerId).find('.e-content .bbembed-multitab-dbrd');
            for (let i: any = 0; i < dashboardContainer.length; i++) {
                const embedId: string = bbEmbed(dashboardContainer[`${i}`]).attr('id');
                const waitingPopupInstance: any = bbEmbed('#' + embedId + '_designAreaContainer').data('BoldBIDashboardWaitingPopup');
                if (waitingPopupInstance !== null && waitingPopupInstance !== undefined) {
                    waitingPopupInstance.destroy();
                }
            }
        } else {
            const waitingPopupInstance: any = bbEmbed('.bbi-dashboarddesigner-designAreaContainer').data('BoldBIDashboardWaitingPopup');
            if (waitingPopupInstance !== null && waitingPopupInstance !== undefined) {
                waitingPopupInstance.destroy();
            }
        }
    }


    getWidgetData(widgetName: string, clientFnc: Function, dashboardId: string): any {
        let widgetValue: any;
        if (this.isMultiTab) {
            const dashboardContainer: any = bbEmbed('#' + this.embedOptions.embedContainerId).find('.e-content .bbembed-multitab-dbrd');
            for (let i: any = 0; i < dashboardContainer.length; i++) {
                if (bbEmbed(dashboardContainer[`${i}`]).attr('id').includes(dashboardId.toString().replaceAll('-', '')) > 0) {
                    const embedId: string = bbEmbed(dashboardContainer[`${i}`]).attr('id');
                    const dbrdInstance: any = this._getDashboardInstance(embedId);
                    if (dbrdInstance != undefined) {
                        widgetValue = dbrdInstance.getWidgetData(widgetName, clientFnc);
                        if (widgetValue.toLowerCase().includes('widget') > 0) {
                            if (window[`${clientFnc}`] instanceof Function) {
                                window[`${clientFnc}`].call(this, widgetValue);
                            } else {
                                clientFnc.call(this, widgetValue);
                            }
                        }
                    }
                    break;
                }
            }
        } else {
            const dbrdInstance: any = this._getDashboardInstance();
            if (dbrdInstance != undefined) {
                widgetValue = dbrdInstance.getWidgetData(widgetName, clientFnc);
                if (widgetValue.toLowerCase().includes('widget') > 0) {
                    if (window[`${clientFnc}`] instanceof Function) {
                        window[`${clientFnc}`].call(this, widgetValue);
                    } else {
                        clientFnc.call(this, widgetValue);
                    }
                }
            }
        }
    }

    getWidgetDataWithFilters(widgetName: string, dashboardId: string, filter: any, clientFnc: Function): any {
        let responseData: any;
        const data: any = JSON.stringify({
            'dashboardId': dashboardId, 'widgetName': widgetName, 'filter': filter
        });
        if (this._isEmptyOrSpaces(dashboardId)) {
            responseData = {
                'status': false, 'message': 'dashboardId is invalid', 'request': data };
            return responseData;
        }
        if (this._isEmptyOrSpaces(widgetName)) {
            responseData = {
                'status': false, 'message': 'widgetName is invalid', 'request': data };
            return responseData;
        }

        const thatIns: BoldBI = this;
        bbEmbed.ajax({
            type: 'POST',
            url: this.designerRootUrl + '/v1.0/design/loadwidgetdata',
            data: data,
            contentType: 'application/json; charset=utf-8',
            beforeSend: function (xhr: any): any {
                xhr.setRequestHeader('Authorization', 'bearer ' + thatIns.accessToken);
                xhr.setRequestHeader('Caller', thatIns.dashboardServerApiUrl);
            },
            success: function (result: any): any {
                if (result.Status) {
                    responseData = {
                        'status': result.Status, 'data': result.Data, 'message': result.Message, 'request': data };
                } else {
                    responseData = {
                        'status': result.Status, 'message': result.Message, 'request': data };
                }
                clientFnc.call(thatIns, responseData);
            },
            error: function (request: any, message: string): any {
                responseData = {
                    'status': false, 'message': message, 'request': request };
                clientFnc.call(thatIns, responseData);
            }
        });

        responseData = {
            'status': true, 'message': 'Data fetching initiated.', 'request': data };
        return responseData;
    }

    /**
     * @param {string} clientFnc - It denotes the method name to be defined
     * @param {string} containerId - This should be the container id where you want to embed the dashboard
     */
    getDashboardCategories(clientFnc: Function, containerId: string): any {
        const dbrdInstance: any = (this._isNullOrUndefined(containerId) || this._isEmptyOrSpaces(containerId)) ? this._getDashboardInstance() : this._getDashboardInstance(containerId + '_embeddedbi');
        if (dbrdInstance != undefined) {
            const widgetValue: any = dbrdInstance.GetDashboardCategories(clientFnc);
            if (window[`${clientFnc}`] instanceof Function) {
                window[`${clientFnc}`].call(this, widgetValue);
            } else {
                clientFnc.call(this, widgetValue);
            }
        }
    }

    /**
     * @param {string} categoryName - Define new category name want to create .
     * @param {string} categoryDescription - Define the description of new category name .
     * @param {string} clientFnc - It denotes the method name to be defined
     * @param {string} containerId - This should be the container id where you want to embed the dashboard
     */
    createDashboardCategory(categoryName: string, categoryDescription: string, clientFnc: Function, containerId: string): any {
        const dbrdInstance: any = (this._isNullOrUndefined(containerId) || this._isEmptyOrSpaces(containerId)) ? this._getDashboardInstance() : this._getDashboardInstance(containerId + '_embeddedbi');
        if (dbrdInstance != undefined) {
            const widgetValue: any = dbrdInstance.CreateDashboardCategory(categoryName, categoryDescription, clientFnc);
            if (window[`${clientFnc}`] instanceof Function) {
                window[`${clientFnc}`].call(this, widgetValue);
            } else {
                clientFnc.call(this, widgetValue);
            }
        }
    }

    /**
     * @param {string} publishModel - Define the information about publish dashboard
     * @param {string} containerId - This should be the container id where you want to embed the dashboard
     */
    saveDashboard(publishModel: any, containerId: string): any {
        const dbrdInstance: any = (this._isNullOrUndefined(containerId) || this._isEmptyOrSpaces(containerId)) ? this._getDashboardInstance() : this._getDashboardInstance(containerId + '_embeddedbi');
        if (dbrdInstance != undefined) {
            dbrdInstance.model.serverSettings.enableMarkAsPublic = publishModel.IsPublic ? publishModel.IsPublic : false;
            dbrdInstance.saveDashboardToServer(publishModel);
        }
    }

    getWidgetInstance(eleID: string): any {
        const widgetBIObjvalue: widgetBI = new widgetBI();
        widgetBIObjvalue.containerID = this.embedOptions.embedContainerId;
        this._widgetsCollection[this._widgetsCollection.length] = eleID;
        const returnValue: any = Object.assign(widgetBIObjvalue);
        widgetBIObjvalue.widgetCollection = this._widgetsCollection;
        if (!BoldBI._hasinstance(document.getElementById(this.embedOptions.embedContainerId), 'embeddedBoldBIWidget_' + eleID)) {
            BoldBI._putinstance(document.getElementById(this.embedOptions.embedContainerId), 'embeddedBoldBIWidget_' + eleID, returnValue);
        }
        return returnValue;
    }

    /**
     * @param {string} containerId - This should be the container id where you want to embed the dashboard
     */
    updateWidgetFilters(containerId: string): any {
        const that: BoldBI = this;
        const filters: any = this._getWidgetFilterInfo();
        if (this.isMultiTab) {
            const dashboardContainer: any = bbEmbed('#' + this.embedOptions.embedContainerId).find('.e-content .bbembed-multitab-dbrd');
            for (let i: any = 0; i < dashboardContainer.length; i++) {
                const embedId: string = bbEmbed(dashboardContainer[`${i}`]).attr('id');
                const existingDashboardInstance: any = this._getDashboardInstance(embedId);
                if (existingDashboardInstance != undefined) {
                    existingDashboardInstance.option('widgets', filters);
                }
            }
        } else if (bbEmbed('.pinBoardDbrd').length > 0) {
            bbEmbed('.pinBoardDbrd').each(function (): any {
                const existingDashboardInstance: any = that._getDashboardInstance(this.id);
                if (existingDashboardInstance != undefined) {
                    existingDashboardInstance.option('widgets', filters);
                }
            });
        } else {
            const dbrdInstance: any = (this._isNullOrUndefined(containerId) || this._isEmptyOrSpaces(containerId)) ? this._getDashboardInstance() : this._getDashboardInstance(containerId + '_embeddedbi');
            if (dbrdInstance != undefined) {
                dbrdInstance.option('widgets', filters);
            }
        }
    }

    // Internal functions. Will not be accessible outside of this scope.
    _initializeEmbedOptions(options: {embedContainerId?: string, serverUrl?: string, pinboardName?: string, mode?: any, dashboardId?: string, dashboardPath?: string, environment?: any, datasourceId?: string, datasourceName?: string }): any {
        this.embedOptions = Object.assign(this.embedOptions, options);
    }

    _initializeUrls: any = this.Invoke(function(): any {
        if ( this.embedOptions.serverUrl.indexOf('/bi') <= 0) {
            throw new Error('Invalid Bold BI serverUrl.');
        }
        if (this.embedOptions.environment == BoldBI.Environment.Enterprise) {
            this.rootUrl = this.embedOptions.serverUrl.substr(0, (this.embedOptions.serverUrl.indexOf('/bi/') >= 0 ? (this.embedOptions.serverUrl.indexOf('/bi/') + 3) : (this.embedOptions.serverUrl.indexOf('/bi') + 3)));
            this.baseUrl = this.embedOptions.serverUrl;
            this.siteIdentifier = this.embedOptions.serverUrl.indexOf('/site/') >= 0 ? this.embedOptions.serverUrl.substr(this.embedOptions.serverUrl.indexOf('/site/') + 1) : '';
            this.dashboardServerApiUrl = this.rootUrl + '/api' + (this._isEmptyOrSpaces(this.siteIdentifier) ? '' : ('/' + this.siteIdentifier));
            this.designerRootUrl = this.rootUrl + '/designer';
            this.customThemeUrl = this.rootUrl.replace(/\/bi(?!.*\/bi)/, '/ums/theme/styles');
        } else {
            this.rootUrl = this.embedOptions.serverUrl.endsWith('/') ? this.embedOptions.serverUrl.slice(0, -1) : this.embedOptions.serverUrl;
            this.baseUrl = this.embedOptions.serverUrl;
            this.siteIdentifier = '';
            this.dashboardServerApiUrl = this.rootUrl + '/api';
        }
        this.scheduleEndpointUrl = this.baseUrl + '/datasources/recurrence-type-page';
        return true;
    });

    _loadCloudDepedentFiles(responseInfo: {Data: {CdnUrl: string, DesignerServerUrl: string}}): any {
        const responseData: {CdnUrl: string, DesignerServerUrl: string} = responseInfo.Data;
        this.cdnLink = responseData.CdnUrl;
        this.designerRootUrl = responseData.DesignerServerUrl;
        this._addJquerydependentFiles();
    }

    _addJquerydependentFiles: any = this.Invoke(function(): any {
        if (!this._checkDepedentFileExists(this.jQueryDepedentFile, false) && !(window.jQuery != undefined && window.jQuery().jquery == '1.10.2')) {
            const script: any = document.createElement('script');
            if (this.embedOptions.environment == BoldBI.Environment.Enterprise) {
                script.setAttribute('src', this.rootUrl + '/cdn/scripts/designer/' + this.jQueryDepedentFile);
            } else {
                script.setAttribute('src', this.cdnLink + '/scripts/designer/' + this.jQueryDepedentFile);
            }
            document.head.appendChild(script);
            // now wait for it to load...
            script.onload = () => {
                try {
                    const scriptTag: any = document.createElement('script');
                    scriptTag.append(this.jqConflictFile);
                    document.head.appendChild(scriptTag);
                    bbEmbed = window.bbEmbed = window.bb$;
                    this._addWrapperDependentFiles(this, this.wrapperDependentScriptFiles);
                    this._loadDepedentFiles();
                }
                catch (e) {
                    this._throwError ('server Not Found');
                    this.invalidDetail = true;
                }
            };
        }
        else {
            // Wait for jQuery to finish loading
            const checkjQueryLoaded: any = setInterval(() => {
                if (window.jQuery) {
                    clearInterval(checkjQueryLoaded);
                    bbEmbed = window.bbEmbed = window.$;
                    if (typeof window.bb$ != 'undefined') {
                        bbEmbed = window.bbEmbed = window.bb$;
                    }
                    this._addWrapperDependentFiles(this, this.wrapperDependentScriptFiles);
                    this._loadDepedentFiles();
                }
            }, 1000);
        }
    });

    _getCloudLinks(): any {
        this._xhrRequestHelper('Get', this.dashboardServerApiUrl + '/system-settings/get-url', {}, {}, this._loadCloudDepedentFiles);
    }

    _loadDepedentFiles(): any {
        if (this.embedOptions.dashboardSettings.themeSettings && !this.embedOptions.dashboardSettings.themeSettings.isLocalTheme && this.embedOptions.dashboardSettings.themeSettings.dashboard) {
            this._addedDependentFiles(this, this.dashboardThemeCssFiles, true);
        }
        else if (this.embedOptions.dashboardSettings.themeSettings && !this.embedOptions.dashboardSettings.themeSettings.isLocalTheme) {
            this._addedDependentFiles(this, this.applicationThemeCssFiles, true);
        }
        else if (!this.embedOptions.dashboardSettings.themeSettings) {
            this._addedDependentFiles(this, this.applicationThemeCssFiles, true);
        }
        if (this.embedOptions.mode == BoldBI.Mode.Design || this.embedOptions.mode == BoldBI.Mode.DataSource || this.embedOptions.mode == BoldBI.Mode.Connection) {
            this._addedDependentFiles(this, this.designerScriptFiles, false);
        }
        else {
            this._addedDependentFiles(this, this.viewerScriptFiles, false);
        }

        if (!this._isNullOrUndefined(this.embedOptions.dashboardSettings.fontFamily) && !this._isEmptyOrSpaces(this.embedOptions.dashboardSettings.fontFamily)) {
            this._addedDependentFiles(this, this.fontFamilyCssFiles, true);
        }

        if (this.embedOptions.pinboardName != '') {
            this._addedDependentFiles(this, this.pinBoardScriptFiles, false);
        }

        this._addedDependentFiles(this, this.cssFiles, true);
        if (this.embedOptions.pinboardName != '') {
            this._addedDependentFiles(this, this.pinboardCssFiles, true);
        }

        if (this.embedOptions.mode == BoldBI.Mode.Design || this.embedOptions.mode == BoldBI.Mode.DataSource || this.embedOptions.mode == BoldBI.Mode.Connection) {
            this._addedDependentFiles(this, this.designerCssFiles, true);
        }

        if (this.embedOptions.isBingMapRequired) {
            this._loadBingmapDependentFiles();
        }

        this._loadDependentDesignerFiles(this);
    }

    _loadBingmapDependentFiles(): any {
        const scriptTag: any = '<script type="text/javascript" src="https://www.bing.com/api/maps/mapcontrol" async></script>';
        bbEmbed(scriptTag).appendTo('head');
    }

    _loadDependentDesignerFiles(that: BoldBI): any {
        if (window.BoldBIDashboard instanceof Object &&
            window.BoldBIDashboard.createObject instanceof Function &&
            window.Designer instanceof Object) {
            that._addedDependentFiles(that, that.ejViewerDependentFiles, false);
            if (that.embedOptions.mode == BoldBI.Mode.Design || that.embedOptions.mode == BoldBI.Mode.DataSource || that.embedOptions.mode == BoldBI.Mode.Connection) {
                that._addedDependentFiles(that, that.ejDesignerDependentFiles, false);
            }
        } else {
            setTimeout(that._loadDependentDesignerFiles, 50, that);
        }
    }

    _addWrapperDependentFiles(obj: BoldBI, fileUriArray: Array<string>): any {
        const that: BoldBI = obj;
        fileUriArray.forEach(function (file: string): any {
            if (!((file == 'jquery-ui.min.js' && window.jQuery.ui != undefined && window.jQuery.ui.version == '1.12.1') || (file == 'jsrender.min.js' && window.jQuery.views != undefined && window.jQuery.views.jsviews == 'v1.0.0-beta'))) {
                const scriptTag: any = document.createElement('script');
                if (file == 'jquery.easing.1.3.min.js') {
                    const fileUri: any = (that.embedOptions.environment == BoldBI.Environment.Enterprise) ? that.rootUrl + '/cdn/scripts/designer/' + file : that.cdnLink + '/scripts/designer/' + file;
                    scriptTag.append('bbEmbed(document).ready(function () { bbEmbed.getScript("' + fileUri + '");});');
                }
                if (file == 'jquery-ui.min.js') {
                    scriptTag.src = (that.embedOptions.environment == BoldBI.Environment.Enterprise) ? that.rootUrl + '/cdn/scripts/' + file : that.cdnLink + '/scripts/' + file;
                }
                else if (file == 'jsrender.min.js') {
                    scriptTag.src = (that.embedOptions.environment == BoldBI.Environment.Enterprise) ? that.rootUrl + '/cdn/scripts/designer/' + file : that.cdnLink + '/scripts/designer/' + file;
                }
                document.head.appendChild(scriptTag);
            }
        }.bind(that));
    }

    _addedDependentFiles(that: BoldBI, fileUriArray: Array<string>, isCSS: boolean): any {
        let fileUri: any = '';
        fileUriArray.forEach(function (file: string): any {
            if (!that._checkDepedentFileExists(file, isCSS)) {
                if (isCSS) {
                    if (that.embedOptions.environment == BoldBI.Environment.Enterprise) {
                        if (file == 'font-server.min.css') {
                            fileUri = that.rootUrl + '/cdn/css/' + file;
                        }
                        else if (file == 'bootstrap.min.css') {
                            fileUri = that.rootUrl + '/Content/Styles/Bootstrap/' + file;
                        }
                        else if (file == 'pinboard-embed.min.css') {
                            fileUri = that.rootUrl + '/cdn/css/' + file;
                        }
                        else if (file == 'boldbi.theme.definition.min.css') {
                            if (that.embedOptions.dashboardSettings.themeSettings && !that.embedOptions.dashboardSettings.themeSettings.isLocalTheme && !that._isNullOrUndefined(that.embedOptions.dashboardSettings.themeSettings.appearance) && !that._isEmptyOrSpaces(that.embedOptions.dashboardSettings.themeSettings.appearance)) {
                                fileUri = that.rootUrl + '/cdn/css/designer/' + that.embedOptions.dashboardSettings.themeSettings.appearance + '/' + file;
                            }
                            else {
                                fileUri = that.rootUrl + '/cdn/css/designer/light/' + file;
                            }
                        }
                        else if (file == 'application.theme.css' || file == 'dashboard.theme.css') {
                            if (that.embedOptions.dashboardSettings.themeSettings && !that.embedOptions.dashboardSettings.themeSettings.isLocalTheme && !that._isNullOrUndefined(that.embedOptions.dashboardSettings.themeSettings.dashboard) && !that._isEmptyOrSpaces(that.embedOptions.dashboardSettings.themeSettings.dashboard)) {
                                fileUri = that.customThemeUrl + '/dashboard?theme=' + that.embedOptions.dashboardSettings.themeSettings.dashboard;
                            }
                            else if (that.embedOptions.dashboardSettings.themeSettings && !that.embedOptions.dashboardSettings.themeSettings.isLocalTheme && !that._isNullOrUndefined(that.embedOptions.dashboardSettings.themeSettings.application) && !that._isEmptyOrSpaces(that.embedOptions.dashboardSettings.themeSettings.application)) {
                                fileUri = that.customThemeUrl + '/application?theme=' + that.embedOptions.dashboardSettings.themeSettings.application;
                            }
                        }
                        else if (file == 'font-family.min.css') {
                            const fontFamilyUrl : any = this.rootUrl.replace(/\/bi(?!.*\/bi)/, '/ums/user-interface/fonts');
                            fileUri = fontFamilyUrl + '?family=' + that.embedOptions.dashboardSettings.fontFamily;
                        }
                        else {
                            fileUri = that.rootUrl + '/webdesignerservice/themes/' + file;
                        }
                    }
                    else {
                        if (file == 'font-server.min.css') {
                            fileUri = that.cdnLink + '/css/' + file;
                        }
                        else if (file == 'bootstrap.min.css') {
                            fileUri = that.cdnLink + '/css/' + file;
                        }
                        else if (file == 'pinboard-embed.min.css') {
                            fileUri = that.cdnLink + '/css/' + file;
                        }
                        else if (file == 'boldbi.theme.definition.min.css') {
                            if (that.embedOptions.dashboardSettings.themeSettings && !that.embedOptions.dashboardSettings.themeSettings.isLocalTheme && !that._isNullOrUndefined(that.embedOptions.dashboardSettings.themeSettings.appearance) && !that._isEmptyOrSpaces(that.embedOptions.dashboardSettings.themeSettings.appearance)) {
                                fileUri = that.cdnLink + '/css/designer/' + that.embedOptions.dashboardSettings.themeSettings.appearance + '/' + file;
                            }
                            else {
                                fileUri = that.cdnLink + '/css/designer/light/' + file;
                            }
                        }
                        else if (file == 'application.theme.css' || file == 'dashboard.theme.css') {
                            if (that.embedOptions.dashboardSettings.themeSettings && !that.embedOptions.dashboardSettings.themeSettings.isLocalTheme && !that._isNullOrUndefined(that.embedOptions.dashboardSettings.themeSettings.dashboard) && !that._isEmptyOrSpaces(that.embedOptions.dashboardSettings.themeSettings.dashboard)) {
                                fileUri = that.rootUrl + '/theme/styles/dashboard?theme=' + that.embedOptions.dashboardSettings.themeSettings.dashboard;
                            }
                            else if (that.embedOptions.dashboardSettings.themeSettings && !that.embedOptions.dashboardSettings.themeSettings.isLocalTheme && !that._isNullOrUndefined(that.embedOptions.dashboardSettings.themeSettings.application) && !that._isEmptyOrSpaces(that.embedOptions.dashboardSettings.themeSettings.application)) {
                                fileUri = that.rootUrl + '/theme/styles/application?theme=' + that.embedOptions.dashboardSettings.themeSettings.application;
                            }
                        }
                        else if (file == 'font-family.min.css') {
                            fileUri = that.rootUrl + '/user-interface/fonts?family=' + that.embedOptions.dashboardSettings.fontFamily;
                        }
                        else  {
                            fileUri = that.cdnLink + '/css/designer/' + file;
                        }
                    }

                    const cssTag: any = document.createElement('link');
                    cssTag.rel = 'stylesheet';
                    cssTag.href = fileUri;
                    if (bbEmbed('link[href="' + fileUri + '"]').length < 1) {
                        document.head.appendChild(cssTag);
                    }
                }
                else {
                    if (that.embedOptions.environment == BoldBI.Environment.Enterprise) {
                        if (file == 'bootstrap.min.js') {
                            fileUri = that.rootUrl + '/cdn/scripts/' + file;
                        }
                        else if (file == 'designerlocalization.js') {
                            fileUri = that.rootUrl + '/designer/localization/' + file + '?c=' + that.embedOptions.localeSettings.appLocale;
                        }
                        else if (file == 'signalr.min.js') {
                            fileUri = that.rootUrl + '/cdn/scripts/signalr/' + file;
                        }
                        else {
                            fileUri = that.rootUrl + '/cdn/scripts/designer/' + file;
                        }
                    }
                    else {
                        if (file == 'bootstrap.min.js') {
                            fileUri = that.cdnLink + '/scripts/' + file;
                        }
                        else if (file == 'designerlocalization.js') {
                            fileUri = that.designerRootUrl + '/localization/' + file;
                        }
                        else if (file == 'signalr.min.js') {
                            fileUri = that.cdnLink + '/scripts/signalr/' + file;
                        }
                        else {
                            fileUri = that.cdnLink + '/scripts/designer/' + file;
                        }
                    }

                    const scriptTag: any = document.createElement('script');
                    scriptTag.type = 'text/javascript';
                    scriptTag.src = fileUri;
                    if (bbEmbed('script[src= "' + fileUri + '"]').length < 1) {
                        document.head.appendChild(scriptTag);
                    }
                }
            }
        }.bind(that));
    }

    _checkDepedentFileExists(file: string, isCSS: boolean): any {
        let isFileExists: any = false;
        const selectItem: any = isCSS ? 'link' : 'script';
        const tagList: any = document.head.querySelectorAll(selectItem);
        tagList.forEach(function (tag: {href?: any, src?: any}): any {
            if (!isFileExists) {
                if (isCSS) {
                    isFileExists = tag.href.indexOf(file) != -1;
                }
                else {
                    isFileExists = tag.src.indexOf(file) != -1;
                }
            }
        });

        return isFileExists;
    }


    _renderDashboard: any = this.Invoke(function(responseInfo: {Status?: boolean, Message?: string, Data?: any, errorMessage: any }): any {
        const that: BoldBI = this;
        const parameter: any = '';
        if (!responseInfo.Status) {
            if (responseInfo.errorMessage == 'The page you are looking for was unavailable.') {
                responseInfo.Status = false;
                responseInfo.Message = responseInfo.errorMessage;
            }
            if (responseInfo.Message === 'Object reference not set to an instance of an object.') {
                if (this.embedOptions.mode === 'view' || this.embedOptions.mode === 'design') {
                    if (!this._isEmptyOrSpaces(this.embedOptions.dashboardId) || !this._isEmptyOrSpaces(this.embedOptions.dashboardPath)) {
                        responseInfo.Message = 'Invalid dashboard details.';
                    }
                    if (!this._isEmptyOrSpaces(this.embedOptions.pinboardName)) {
                        responseInfo.Message = 'Invalid pinboard name.';
                    }
                }
            }
            throw new Error (responseInfo.Message);
        } else {
            const embedResponse: any = responseInfo.Data;
            if (this.embedOptions.pinboardName != '' && this.pinboardIds.length == 0) {
                this._renderPinboard(embedResponse);
            } else if (embedResponse.length) {
                this._renderMultiTabDashboard(embedResponse);
            }
            else {
                embedResponse.ItemDetail = this.embedOptions.mode != BoldBI.Mode.Connection ? JSON.parse(responseInfo.Data.ItemDetail) : null;
                let embedContainerId: any;
                if (this.embedOptions.mode == BoldBI.Mode.View) {
                    this.dashboardUrl = '/dashboard/' + embedResponse.ItemDetail.Id + '/' + embedResponse.ItemDetail.CategoryName + '/' + embedResponse.ItemDetail.Name + '?';
                }
                this.accessToken = embedResponse.access_token;
                let dashboardName: any = '';
                if (this.pinboardIds.length > 0) {
                    bbEmbed.map(this.pinboardIds, function (value: object): any {
                        if (value['widgetId'] == embedResponse.WidgetId) {
                            const instance: any = that._getDashboardInstance(value['pinboardContainerId'] + '_embeddedbi');
                            if (that._isNullOrUndefined(instance)) {
                                embedContainerId = value['pinboardContainerId'];
                            }
                        }
                    });
                }
                else if (this.isMultiTab) {
                    embedContainerId = 'multi_' + embedResponse.ItemDetail.Id.toString().replaceAll('-', '');
                    if (!that._isNullOrUndefined(that.embedOptions.dashboardSettings.dashboardName) && typeof that.embedOptions.dashboardSettings.dashboardName != 'string') {
                        bbEmbed.map(that.embedOptions.dashboardSettings.dashboardName, function (val: {dashboardId: string, dashboardName: string}): any {
                            if (embedResponse.ItemDetail.Id == val.dashboardId) {
                                dashboardName = val.dashboardName;
                            }
                        });
                    }
                } else {
                    embedContainerId = this.embedOptions.embedContainerId;
                    if (!that._isNullOrUndefined(that.embedOptions.dashboardSettings.dashboardName) && typeof that.embedOptions.dashboardSettings.dashboardName == 'string') {
                        dashboardName = that.embedOptions.dashboardSettings.dashboardName;
                    }
                }
                const height: any = this.pinboardIds.length > 0 ? bbEmbed('#' + embedContainerId).height() : this.isMultiTab ? (this.embedOptions.height.indexOf('%') > 0 ? (this.embedOptions.height.includes('calc') ? 'calc(100% - 36px)' : 'calc(' + this.embedOptions.height + ' - 36px)') : (parseInt(this.embedOptions.height, 10) - 36 + 'px')) : this.embedOptions.height;
                if (typeof (responseInfo.Data.UserDetail) != 'undefined') {
                    embedResponse.UserDetail = JSON.parse(responseInfo.Data.UserDetail);
                }
                if (this.embedOptions.mode == BoldBI.Mode.Connection) {
                    bbEmbed('<style type="text/css"> .e-dashboarddesigner .bbi-dbrd-connection-mode-dlg .bbi-dbrd-connection-mode-header .bbi-dbrd-icon-container .bbi-dbrd-close-icon{ display: none !important} </style>').appendTo('head');
                }

                this._onBoldBIAuthorizionComplete(embedResponse);
                if (this.embedOptions.widgetList == '') {
                    document.getElementById(embedContainerId).style.height = height;
                    document.getElementById(embedContainerId).style.width = (this.embedOptions.pinboardName != '' ? document.getElementById(embedContainerId).style.width : (!this.isMultiTab ? this.embedOptions.width : '100%'));
                }
                let dashboardOptions: any;
                // eslint-disable-next-line
                dashboardOptions = {
                    siteUrl: this.baseUrl,
                    serviceUrl: this.designerRootUrl,
                    dataServiceUrl: this.designerRootUrl,
                    serverUrl: this.dashboardServerApiUrl,
                    viewerSettings: {
                        serviceUrl: this.designerRootUrl + '/v1.0/design'
                    },
                    localeSettings: {
                        culture: this.embedOptions.localeSettings.culture,
                        dateFormat: this._isEmptyOrSpaces(this.embedOptions.localeSettings.dateFormat) ? 'M/d/yyyy' : this.embedOptions.localeSettings.dateFormat,
                        timeFormat: this._isEmptyOrSpaces(this.embedOptions.localeSettings.timeFormat) ? 'h:mm:ss tt' : this.embedOptions.localeSettings.timeFormat
                    },
                    mode: this.embedOptions.mode,
                    environment: this.embedOptions.environment,
                    IsEmbed: true,
                    _isPublic: this.embedOptions.mode != BoldBI.Mode.Connection ? embedResponse.ItemDetail.IsPublic : '',
                    itemId: this.embedOptions.mode != BoldBI.Mode.Connection ? embedResponse.ItemDetail.Id : '',
                    dashboardPath: (this.embedOptions.mode == BoldBI.Mode.DataSource || this.embedOptions.mode == BoldBI.Mode.Connection) ? '' : embedResponse.ItemDetail.ItemLocation,
                    serviceAuthorizationToken: embedResponse.access_token,
                    dashboardName: (this.embedOptions.mode == BoldBI.Mode.DataSource || this.embedOptions.mode == BoldBI.Mode.Connection) ? '' :  this._isEmptyOrSpaces(dashboardName) ? embedResponse.ItemDetail.Name : dashboardName,
                    dashboardDescription: (this.embedOptions.mode == BoldBI.Mode.DataSource || this.embedOptions.mode == BoldBI.Mode.Connection) ? '' : embedResponse.ItemDetail.Description,
                    theme: this._isEmptyOrSpaces(this.multiTabTheme) ? this.embedOptions.theme : this.multiTabTheme,
                    enableTheme: this.embedOptions.dashboardSettings.enableTheme === undefined ? false : this.embedOptions.dashboardSettings.enableTheme,
                    enableFilterOverview: this.embedOptions.dashboardSettings.enableFilterOverview,
                    isPinWidget: this.pinboardIds.length > 0,
                    export: {
                        Image: this.embedOptions.exportSettings.showImage,
                        Excel: this.embedOptions.exportSettings.showExcel,
                        Pdf: this.embedOptions.exportSettings.showPDF
                    },
                    filterParameters: parameter + (this._isEmptyOrSpaces(this.embedOptions.filterParameters) ? '' : '&') + ((this.isMultiTab && window['multiTabFilterParameter']) ? window['multiTabFilterParameter'] : this.embedOptions.filterParameters),
                    designCanvasSettings: this.embedOptions.designCanvasSettings,
                    widgetContainerSettings: this.embedOptions.widgetContainerSettings,
                    viewDataSettings: {
                        checkShowAllColumns: this._isNullOrUndefined(this.embedOptions.dashboardSettings.viewDataSettings) ? false : this.embedOptions.dashboardSettings.viewDataSettings.showAllColumns
                    },
                    dashboardThemeSettings: {
                        appearance: !this._isNullOrUndefined(this.embedOptions.dashboardSettings.themeSettings) ? (!this._isNullOrUndefined(this.embedOptions.dashboardSettings.themeSettings.appearance) ? this.embedOptions.dashboardSettings.themeSettings.appearance : 'light') : 'light',
                        applicationTheme: !this._isNullOrUndefined(this.embedOptions.dashboardSettings.themeSettings) ? (!this._isNullOrUndefined(this.embedOptions.dashboardSettings.themeSettings.application) ? this.embedOptions.dashboardSettings.themeSettings.application : null) : null,
                        dashboardTheme: !this._isNullOrUndefined(this.embedOptions.dashboardSettings.themeSettings) ? (!this._isNullOrUndefined(this.embedOptions.dashboardSettings.themeSettings.dashboard) ? this.embedOptions.dashboardSettings.themeSettings.dashboard : (this.embedOptions.dashboardSettings.themeSettings.isLocalTheme ? 'boldBITheme' : null)) : null
                    },
                    widgets: this._getWidgetFilterInfo(),
                    actionComplete: function (arg: {eventType: string, data?: any, source?: any, schema?: any }): any {
                        that._onBoldBIDashboardInstaceActionComplete(arg);
                    },
                    beforeBannerIconRender: function (arg: object): any {
                        that._onBoldBIDashboardBeforeBannerIconRender(arg);
                    },
                    beforeOtherOptionContextMenuRender: function (arg: object): any {
                        that._onBoldBIDashboardBeforeOtherOptionContextMenuRender(arg);
                    },
                    _onSaveFilter: function (arg: object): any {
                        that._onBoldBIDashboardSaveFilter(arg);
                    },
                    _onSaveAsFilter: function (arg: object): any {
                        that._onBoldBIDashboardSaveAsFilter(arg);
                    },
                    _onViewSavedFilters: function (arg: object): any {
                        that._onBoldBIDashboardOpenViewSection(arg);
                    },
                    onBannerIconClick: function (arg: {name: string, selectedTheme: string }): any {
                        that._onBoldBIDashboardBannerIconClick(arg);
                    },
                    beforeWidgetIconRendered: function (arg: any): any {
                        that._onBoldBIDashboardBeforeWidgetIconRendered(arg);
                    },
                    onWidgetIconClick: function (arg: object): any {
                        that._onBoldBIDashboardWidgetIconClick(arg);
                    },
                    _onFavoriteStateChange: function (arg: object): any {
                        that._onBoldBIDashboardUpdatefavorite(arg);
                    },
                    onExportRender: function (arg: object): any {
                        that._onBoldBIWidgetExportRender(arg);
                    },
                    beforeNavigateUrlLinking: function (arg: object): any {
                        that._onBoldBIBeforeNavigateUrlLinking(arg);
                    },
                    beforeControlMenuOpen: function (arg: {menuItems: Array<object>}): any {
                        that._onBoldBIBeforeControlMenuOpen(arg);
                    },
                    beforeDashboardMobileMenuOpen: function (arg: any): any {
                        that._onBoldBIBeforeDashboardMobileMenuOpen(arg);
                    },
                    ajaxBeforeLoad: function (arg: object): any {
                        that._onBoldBIAjaxBeforeLoad(arg);
                    },
                    beforeDesignerToolbarButtonsRendered: function (arg: object): any {
                        that._onBoldBIbeforeDesignerToolbarButtonsRendered(arg);
                    },
                    onControlMenuClick: function (arg: object): any {
                        that._onBoldBIonControlMenuClick(arg);
                    },
                    beforeDatasourceToolbarButtonsRendered: function (arg: any): any {
                        that._onBoldBIbeforeDatasourceToolbarButtonsRendered(arg);
                    },
                    beforeDatasourceToolbarIconsRendered: function (arg: object): any {
                        that._onBoldBIbeforeDatasourceToolbarIconsRendered(arg);
                    },
                    beforeDesignerToolbarIconsRendered: function (arg: object): any {
                        that._onBoldBIbeforeDesignerToolbarIconsRendered(arg);
                    },
                    toolbarClick: function (arg: object): any {
                        that._onBoldBItoolbarClick(arg);
                    },
                    beforeWidgetItemsListed: function (arg: object): any {
                        that._onBoldBIbeforeWidgetItemsListed(arg);
                    }
                };
                if (this.embedOptions.widgetList == '') {
                    dashboardOptions.actionBegin = function (arg: any): any {
                        that._onBoldBIDashboardInstaceActionBegin(arg, embedContainerId);
                    };
                }
                if (this.embedOptions.mode == BoldBI.Mode.Design) {
                    if (embedResponse.ItemDetail.IsDraft) {
                        dashboardOptions.dashboardPath = '';
                    }
                    const datasourceId: any = !this._isEmptyOrSpaces(embedResponse.DatasourceId) ? embedResponse.DatasourceId : '';
                    if (!this._isEmptyOrSpaces(datasourceId)) {
                        dashboardOptions.datasource = datasourceId;
                    }
                    if (this.embedOptions.datasources.length > 0) {
                        dashboardOptions.datasources = this.embedOptions.datasources;
                    }

                    dashboardOptions.disableAutoRecover = this.embedOptions.disableAutoRecover;

                    dashboardOptions.schedule = {
                        endPoint: this.scheduleEndpointUrl,
                        summaryText: ''
                    };
                    dashboardOptions.serverSettings = {
                        isAdmin: typeof (embedResponse.IsAdmin) == 'undefined' ? false : embedResponse.IsAdmin
                    };
                    dashboardOptions.intermediateDbStatus = embedResponse.IntermediateDbStatus;
                    dashboardOptions.connectionList = embedResponse.ConnectionList;
                    dashboardOptions.isAllowUserToCreateDatasource = embedResponse.CanCreateDatasource;
                    dashboardOptions.enablePublicDashboardSetting = false;
                    dashboardOptions.beforeNavigateToDashboard = function (arg: object): any {
                        that._onBoldBIBeforeNavigateToDashboard(arg);
                    };
                    dashboardOptions.toolbarSettings = {
                        showToolbar: this.embedOptions.toolbarSettings.showToolbar
                    };
                    dashboardOptions.predefinedWidgets = this.embedOptions.preConfiguredWidgets;
                    if (this.embedOptions.environment == BoldBI.Environment.Enterprise) {
                        dashboardOptions.configuration = this.rootUrl + '/webdesignerservice/scripts/settings/' + embedResponse.Branding + '/settings.min.js';
                    } else {
                        dashboardOptions.configuration = this.cdnLink + '/scripts/settings/' + embedResponse.Branding + '/settings.min.js';
                    }
                    dashboardOptions.designerSettings = {
                        widgetsPanel: {
                            hideExistingWidgets: this._isNullOrUndefined(this.embedOptions.dashboardSettings.widgetsPanel) ? false : this.embedOptions.dashboardSettings.widgetsPanel.hideExistingWidgets,
                            hideDefaultWidgets: this._isNullOrUndefined(this.embedOptions.dashboardSettings.widgetsPanel) ? false : this.embedOptions.dashboardSettings.widgetsPanel.hideDefaultWidgets,
                            defaultPanelDisplayText: this._isNullOrUndefined(this.embedOptions.dashboardSettings.widgetsPanel) ? '' : this.embedOptions.dashboardSettings.widgetsPanel.defaultPanelDisplayText,
                            existingPanelDisplayText: this._isNullOrUndefined(this.embedOptions.dashboardSettings.widgetsPanel) ? '' : this.embedOptions.dashboardSettings.widgetsPanel.existingPanelDisplayText,
                            defaultPanelSearchPlaceholder: this._isNullOrUndefined(this.embedOptions.dashboardSettings.widgetsPanel) ? '' : this.embedOptions.dashboardSettings.widgetsPanel.defaultPanelSearchPlaceholder,
                            existingPanelSearchPlaceholder: this._isNullOrUndefined(this.embedOptions.dashboardSettings.widgetsPanel) ? '' : this.embedOptions.dashboardSettings.widgetsPanel.existingPanelSearchPlaceholder,
                            existingDashboards: this._isNullOrUndefined(this.embedOptions.dashboardSettings.widgetsPanel) ? [] : this.embedOptions.dashboardSettings.widgetsPanel.existingDashboards,
                            dragAndDropSettings: {
                                rowSpan: (!this._isNullOrUndefined(this.embedOptions.dashboardSettings.widgetsPanel) && !this._isNullOrUndefined(this.embedOptions.dashboardSettings.widgetsPanel.dragAndDropSettings)) ? this.embedOptions.dashboardSettings.widgetsPanel.dragAndDropSettings.rowSpan : null,
                                columnSpan: (!this._isNullOrUndefined(this.embedOptions.dashboardSettings.widgetsPanel) && !this._isNullOrUndefined(this.embedOptions.dashboardSettings.widgetsPanel.dragAndDropSettings)) ? this.embedOptions.dashboardSettings.widgetsPanel.dragAndDropSettings.columnSpan : null,
                                isWidgetMode: (!this._isNullOrUndefined(this.embedOptions.dashboardSettings.widgetsPanel) && !this._isNullOrUndefined(this.embedOptions.dashboardSettings.widgetsPanel.dragAndDropSettings)) ? this.embedOptions.dashboardSettings.widgetsPanel.dragAndDropSettings.isWidgetMode : false
                            }
                        },
                        dataSourceConfig: {
                            hideDataSourceConfig: this._isNullOrUndefined(this.embedOptions.dashboardSettings.dataSourceConfig) ? false : this.embedOptions.dashboardSettings.dataSourceConfig.hideDataSourceConfig
                        }
                    };
                    dashboardOptions.userSettings = {
                        hidePreviewAs: this._isNullOrUndefined(this.embedOptions.dashboardSettings.showPreviewAs) ? false : !this.embedOptions.dashboardSettings.showPreviewAs
                    };
                }

                if (this.embedOptions.mode == BoldBI.Mode.Connection) {
                    dashboardOptions.connectionList = embedResponse.ConnectionList;
                }
                if (this.embedOptions.mode == BoldBI.Mode.DataSource) {
                    dashboardOptions.datasourceName = embedResponse.ItemDetail.Name;
                    dashboardOptions.datasource = embedResponse.ItemDetail.Id;
                }
                this.isMultipleWidgetMode = (this.embedOptions.widgetList == '') ? false : this.isMultipleWidgetMode;
                if (this.isWidgetMode) {
                    dashboardOptions.isPinWidget = this.isWidgetMode;
                    dashboardOptions.widgetId = embedResponse.WidgetId;
                }
                if (this.embedOptions.dashboardSettings.showHeader == false) {
                    dashboardOptions.isHideHeader = true;
                } else {
                    dashboardOptions.isHideHeader = false;
                }

                if (this.isMultiTab) {
                    dashboardOptions.dashboardSettings = {
                        parentId: this.parentDbrdId,
                        isMultiTab: true
                    };
                }

                if (this.embedOptions.dynamicConnection.isEnabled) {
                    dashboardOptions.customIdentity = this.embedOptions.dynamicConnection.identity;
                }

                if (this.embedOptions.autoRefreshSettings.enabled) {
                    dashboardOptions.enableAutoRefresh = true;
                    dashboardOptions.autoRefreshSettings = {
                        intervalSettings: {
                            mode: 'Hourly',
                            hourlySchedule: {
                                hours: this.embedOptions.autoRefreshSettings.hourlySchedule.hours,
                                minutes: this.embedOptions.autoRefreshSettings.hourlySchedule.minutes,
                                seconds: this.embedOptions.autoRefreshSettings.hourlySchedule.seconds
                            }
                        }
                    };
                }

                if (window.bbEmbed instanceof Function) {
                    if (this.isMultipleWidgetMode == false) {
                        let embedContainer: any = window.bbEmbed.call(that, '#' + (that.pinboardIds.length > 0 ? (embedContainerId + '_embeddedbi') : that.childContainer.id));
                        let embedChildId: any;
                        if (embedContainer.length === 0) {
                            embedContainer = window.bbEmbed.call(that, '#' + embedContainerId + '_embeddedbi');
                            embedChildId = embedContainerId + '_embeddedbi';
                        }
                        if (window.BoldBIDashboardDesigner instanceof Function) {
                            const existingDashboardInstance: any = this._getDashboardInstance(embedChildId);
                            if (existingDashboardInstance != undefined) {
                                existingDashboardInstance.model = Object.assign(existingDashboardInstance.model, dashboardOptions);
                                existingDashboardInstance.redrawDashboard();
                            } else {
                                window.BoldBIDashboardDesigner.call(that, embedContainer, dashboardOptions);
                            }
                        } else {
                            this._throwError('BoldBIDashboardDesigner is not defined');
                        }
                    }
                    else {
                        const thatIns: any = this;
                        bbEmbed.ajax({
                            type: 'POST',
                            url: dashboardOptions.serviceUrl + '/v1.0/dashboard/preloaddashboard/' + embedResponse.ItemDetail.ItemLocation
                            ,
                            beforeSend: function (xhr: any): any {
                                xhr.setRequestHeader('Authorization', 'bearer ' + responseInfo.Data.access_token);
                                xhr.setRequestHeader('Caller', dashboardOptions.serverUrl);
                            },
                            success: function (result: any): any {
                                if (result.ApiStatus) {
                                    dashboardOptions.isPreLoaded = true;
                                    const widgetIdList: any = JSON.parse(responseInfo.Data.WidgetList);

                                    const multipleWidgetsList: any = thatIns.embedOptions.widgetList;
                                    multipleWidgetsList.forEach(function (widgetInfo: any): any  {
                                        const boldBIMulObj: any = new BoldBI();

                                        dashboardOptions.widgetId = widgetIdList[widgetInfo.widgetName.toLowerCase()];

                                        const embedWidgetContainerId: any = widgetInfo.containerId;
                                        dashboardOptions.actionBegin = function (arg: any): any {
                                            that._onBoldBIDashboardInstaceActionBegin(arg, embedWidgetContainerId);
                                        };
                                        document.getElementById(embedWidgetContainerId).style.height = height;
                                        document.getElementById(embedWidgetContainerId).style.width = !this.isMultiTab ? this.embedOptions.width : '100%';

                                        const embedContainer: any = window.bbEmbed.call(that, '#' + (embedWidgetContainerId + '_embeddedbi'));
                                        const embedChildId: any = embedWidgetContainerId + '_embeddedbi';

                                        boldBIMulObj.childContainer = embedContainer[0];
                                        boldBIMulObj.childContainer.id = embedWidgetContainerId + '_embeddedbi';
                                        boldBIMulObj.embedOptions = thatIns.embedOptions;
                                        boldBIMulObj._initializeUrls();
                                        boldBIMulObj.isMultipleWidgetMode = true;
                                        boldBIMulObj.isWidgetMode = true;
                                        const ele: any = document.getElementById(embedWidgetContainerId);
                                        if (BoldBI._hasinstance(ele, 'embeddedBoldBI')) {
                                            BoldBI._removeinstance(ele, 'embeddedBoldBI');
                                        }

                                        const retObj: any = Object.assign(boldBIMulObj);
                                        BoldBI._putinstance(ele, 'embeddedBoldBI', retObj);
                                        if (window.BoldBIDashboardDesigner instanceof Function) {
                                            const existingDashboardInstance: any = that._getDashboardInstance(embedChildId);
                                            if (existingDashboardInstance != undefined) {
                                                existingDashboardInstance.model = Object.assign(existingDashboardInstance.model, dashboardOptions);
                                                existingDashboardInstance.redrawDashboard();
                                            } else {
                                                window.BoldBIDashboardDesigner.call(that, embedContainer, dashboardOptions);
                                            }
                                        } else {
                                            this._throwError('BoldBIDashboardDesigner is not defined');
                                        }
                                        this._removeElementsClass(embedWidgetContainerId, '.preloader-wrap', 'viewer-blue-loader');
                                    }.bind(thatIns));
                                }
                            },
                            error: function (): any {
                                that._throwError('Error while downloading the dashboards' + this.embedOptions.dashboardId);
                            }
                        });
                    }
                } else {
                    throw new Error('bbEmbed is not defined');
                }
                if (this.embedOptions.widgetList == ''){
                    this._removeElementsClass(embedContainerId, '.preloader-wrap', 'viewer-blue-loader');
                }
            }
        }
    });

    _renderPinboard(itemDetail: object): any {
        const widgetContainer: any = bbEmbed('<div id="server-app-container" style="background: #f9f9f9; overflow: hidden !important;min-height: 600px; width:' + this.embedOptions.width + ';"><div id="content-area" class="clearfix col-xs-12 e-waitingpopup e-js" style="padding: 0;padding-bottom: 30px"><div id="homepage-page-container"><div id="homepage-header" style="display:' + (this.embedOptions.pinboardSettings.enablePinboardHeader || this.embedOptions.pinboardSettings.enablePinboardHeader === undefined ? 'block' : 'none') + ';font-family:var(--font-family)"><div id="element-container"><div id="homepage-menu" style="margin-top: 5px"><span id="homepage-list-container" style="font-size: 15px;width: 165px;line-height: 18px;padding: 25px;">' + this.embedOptions.pinboardName + '</span></div><div id="options-container"><div id="pinboard-fullscreen" class="server-banner-icon e-dashboard-banner-icon bbi-dbrd-designer-hoverable su su-maximize-1 e-icon-dbrd-theme" data-tooltip="Fullscreen" data-name="fullscreen" data-event="true" style="font-size: 14px;display: block;float: left;margin: 8px 15px 0 7px; cursor: pointer"></div><div id="divider"></div><div id="layout-container"><div id="layout" class="dropdown-toggle" data-toggle="dropdown">Edit Layout</div><div class="dropdown-menu" id="layout-items" role="menu"><span class="su su-single-column" id="1"></span><span class="su su-two-column" id="11"></span><span class="su su-small-big-column" id="12"></span><span class="su su-big-small-column" id="21"></span><span class="su su-three-column" id="111"></span></div></div></div></div></div><div id="widget-container" data-homepage-id="" data-current-layout="" data-virtual-homepage="" style="margin-bottom: 30px"></div></div></div></div>');
        bbEmbed('#' + this.embedOptions.embedContainerId).append(widgetContainer);
        this._createPinboardDom(itemDetail);
        this._renderItem(itemDetail);
        this._removeElementsClass(this.embedOptions.embedContainerId, '.preloader-wrap', 'viewer-blue-loader');
        const that: BoldBI = this;
        bbEmbed(document).on('click', '.unpin-widget', function (e: {preventDefault?: any, target?: any}): any {
            e.preventDefault();
            const unpinWidgetInstance: any = bbEmbed('#' + bbEmbed(e.target).parents('li').find('.pinWidget').attr('id') + '_embeddedbi').data('BoldBIDashboardDesigner');
            const clientFnc: any = window[that.embedOptions.onUnpin];
            if (clientFnc instanceof Function) {
                clientFnc.call(this, unpinWidgetInstance);
            }
            if (that.embedOptions.onUnpin instanceof Function) {
                that.embedOptions.onUnpin.call(that, unpinWidgetInstance);
            }
            that.column = parseInt(bbEmbed(this).closest('ul').attr('data-column-id'), 10);
            that.position = bbEmbed(this).parents('li').index() + 1;
            unpinWidgetInstance.destroy();
            that._unPinItem(that.column, that.position);
        });

        bbEmbed(document).on('click', '#pinboard-fullscreen', function (): any {
            const embedElement: any = bbEmbed('#server-app-container')[0];
            if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
                bbEmbed('#server-app-container').removeAttr('style');
                bbEmbed('#server-app-container').attr('style', 'background-color: #f9f9f9; overflow: auto !important');
                if (embedElement.requestFullscreen) {
                    embedElement.requestFullscreen();
                } else if (embedElement.msRequestFullscreen) {
                    embedElement.msRequestFullscreen();
                } else if (embedElement.mozRequestFullScreen) {
                    embedElement.mozRequestFullScreen();
                } else if (embedElement.webkitRequestFullscreen) {
                    embedElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                } else {
                    if ('ActiveXObject' in window) {
                        const wscript: any = new ActiveXObject('Wscript.shell');
                        wscript.SendKeys('{F11}');
                        setTimeout(function (): any {
                            if ((screen.availHeight || screen.height - 30) <= window.innerHeight) {
                                bbEmbed('#pinboard-fullscreen').removeClass('su-maximize-1').addClass('su-minimize').attr('data-tooltip', 'Exit Fullscreen');
                            } else {
                                bbEmbed('#pinboard-fullscreen').addClass('su-maximize-1').removeClass('su-minimize').attr('data-tooltip', 'Fullscreen');
                            }
                        }, 400);
                    }
                }
            } else {
                bbEmbed('#server-app-container').attr('style', 'background-color: #f9f9f9; height:' + bbEmbed('#content-area').height() + 'px;overflow: hidden !important;min-height: 600px; width:' + that.embedOptions.width + '');
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }
        });

        bbEmbed(document).on('click', '#layout-items span', function (): any {
            const clientFnc: any = window[that.embedOptions.onLayoutChange];
            if (clientFnc instanceof Function) {
                clientFnc.call(this, bbEmbed('#widget-container'));
            }
            if (that.embedOptions.onLayoutChange instanceof Function) {
                that.embedOptions.onLayoutChange.call(that, bbEmbed('#widget-container'));
            }
            const currentLayout: any = bbEmbed('#widget-container').attr('data-current-layout');
            bbEmbed('#widget-container').attr('data-current-layout', bbEmbed(this).attr('id'));
            bbEmbed('#layout-items span').removeClass('active');
            bbEmbed(this).addClass('active');
            switch (bbEmbed(this).attr('id')) {
            case '1':
                if (currentLayout != '1') {
                    that.changeLayout(1);
                    if (currentLayout == '111') {
                        that.appendListItem(1, 2);
                    }
                    else if (currentLayout == '11' || currentLayout == '12' || currentLayout == '21') {
                        that.appendListItem(1, 1);
                    }
                    that._setLayout(1);
                }
                break;
            case '11':
                if (currentLayout != '11') {
                    that.changeLayout(11);
                    if (currentLayout == '111') {
                        that.appendListItem(2, 1);
                    }
                    else if (currentLayout == '1') {
                        that.createEmptyList(2, 2);
                    }
                    that._setLayout(11);
                }
                break;
            case '12':
                if (currentLayout != '12') {
                    that.changeLayout(12);
                    if (currentLayout == '111') {
                        that.appendListItem(2, 1);
                    }
                    else if (currentLayout == '1') {
                        that.createEmptyList(2, 2);
                    }
                    that._setLayout(12);
                }
                break;
            case '21':
                if (currentLayout != '21') {
                    that.changeLayout(21);
                    if (currentLayout == '111') {
                        that.appendListItem(2, 1);
                    }
                    else if (currentLayout == '1') {
                        that.createEmptyList(2, 2);
                    }
                    that._setLayout(21);
                }
                break;
            case '111':
                if (currentLayout != '111') {
                    that.changeLayout(111);
                    if (currentLayout == '1') {
                        that.createEmptyList(2, 3);
                    }
                    else if (currentLayout == '11' || currentLayout == '12' || currentLayout == '21') {
                        that.createEmptyList(3, 3);
                    }
                    that._setLayout(111);
                }
                break;
            }
        });
        bbEmbed.map(that.pinboardDetails, function (value: any): any {
            that.isWidgetMode = true;
            that.widgetName = value.WidgetId;
            that.isDashboardViewMode = false;
            that.dashboardViewName = '';
            const response: any = {
                Apistatus: true,
                Data: JSON.parse(value),
                Status: true
            };
            that._renderDashboard(response);
        });
    }

    createEmptyList(from: number, to: number): any {
        for (let i: number = from; i <= to; i++) {
            bbEmbed('#widget-container').append('<ul id="column-' + i + '" data-column-id="' + i + '" data-child-count="0"><li class="empty click-container"><div class="empty-content empty-homepage"><span class="drag-widget" style="font-family:var(--font-family)">Drag your widgets here to customize layout</span></div></li></ul>');
        }
    }

    appendListItem(appendTo: number, count: number): any {
        for (let i: number = appendTo + 1; i <= appendTo + count; i++) {
            if (bbEmbed('#column-' + i + ' li:not(.empty)').length > 0) {
                bbEmbed('#column-' + appendTo + ' li.empty').remove();
            }
            bbEmbed('#column-' + appendTo).append(bbEmbed('#column-' + i + ' li:not(.empty)'));
            bbEmbed('#column-' + i).remove();
        }
    }

    changeLayout(layout: number): any {
        const that: BoldBI = this;
        let data: any;
        that.homepageItemId = bbEmbed('#widget-container').attr('data-homepage-id');
        that.isVirtualHomepage = bbEmbed('#widget-container').attr('data-virtual-homepage');
        if (that.homepageItemId == '' && that.isVirtualHomepage) {
            //that.homepageItemId = saveVirtualHomepage();
            bbEmbed('#initial-message').hide();
        }
        const embedQuerString: any = 'embed_nonce=' + this._uuidv4Generartor() +
            '&homepageId=' + that.homepageItemId +
            '&layout=' + layout +
            '&embed_mode=' + this.embedOptions.mode +
            '&embed_timestamp=' + Math.round((new Date()).getTime() / 1000) +
            '&embed_expirationtime=' + this.embedOptions.expirationTime;
        if (!that._isEmptyOrSpaces(that.embedOptions.authorizationServer.url)) {
            data = {
                embedQuerString: encodeURI(embedQuerString),
                dashboardServerApiUrl: this.dashboardServerApiUrl
            };
            this._xhrRequestHelper('POST', this.embedOptions.authorizationServer.url, data, this.embedOptions.authorizationServer.headers, this._changeLayoutSuccess);
        }
        else {
            data = {
                'homepageId': that.homepageItemId,
                'layout': layout
            };
            bbEmbed.ajax({
                async: false,
                type: 'POST',
                url: that.dashboardServerApiUrl + this.embedGetDetailsEndPoint,
                headers: {
                    'Authorization': 'Bearer ' + that.accessToken
                },
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: bbEmbed.proxy(that._changeLayoutSuccess, that)
            });
        }
    }

    _changeLayoutSuccess: any = this.Invoke(function(result: {Status: boolean, Message: string}): any {
        if (result.Status && this.homepageItemId != '' && this.isVirtualHomepage) {
            this.afterVirtualHomepageSave(this.homepageItemId);
        }
        else if (!result.Status) {
            throw new Error ('Change layout failure due to' + result.Message);
        }
    });

    _createPinboardDom: any = this.Invoke(function(itemDetail: {ColumnInfo?: any, ItemType?: any, Id?: any, IsVirtualHomepage?: any}): any  {
        const that: BoldBI = this;
        if (itemDetail.ColumnInfo) {
            bbEmbed('#widget-container').attr('data-homepage-id', itemDetail.Id).attr('data-current-layout', itemDetail.ColumnInfo.Layout).attr('data-item-type', itemDetail.ItemType).attr('data-virtual-homepage', itemDetail.IsVirtualHomepage);
            if (itemDetail.ItemType.toLowerCase() == 'widget') {
                const column: any = itemDetail.ColumnInfo.Column;
                bbEmbed.each(column, function (i: number): any {
                    bbEmbed('#widget-container').append('<ul id=column-' + (i + 1) + ' class="widget-list" data-column-id=' + (i + 1) + '></ul>');
                    if (column[`${i}`].Item.length > 0) {
                        bbEmbed.each(column[`${i}`].Item, function (j: number): any {
                            const item: any = column[`${i}`].Item[`${j}`].Id == null ? '/bi/' + that.siteIdentifier + '/widgets/widgets' : '/bi/' + that.siteIdentifier + '/dashboards';
                            const itemName: any = column[`${i}`].Item[`${j}`].Name;
                            const widgetType: any = column[`${i}`].Item[`${j}`].WidgetType;
                            let height: any = 0;
                            if (widgetType != null && (widgetType.includes('Card') || widgetType.includes('Image'))) {
                                height = 250;
                            }
                            else {
                                height = 400;
                            }
                            const queryString: any = column[`${i}`].Item[`${j}`].QueryString != null ? column[`${i}`].Item[`${j}`].QueryString : '';
                            const href: any = column[`${i}`].Item[`${j}`].TabId == null ? (item + '/' + column[`${i}`].Item[`${j}`].ItemId + '/' + (column[`${i}`].Item[`${j}`].Id != null ? (column[`${i}`].Item[`${j}`].CategoryName + '/') : '') + column[`${i}`].Item[`${j}`].ItemName + (queryString != '' ? '?' + queryString : queryString)) : (item + '/' + column[`${i}`].Item[`${j}`].ItemId + '/' + (column[`${i}`].Item[`${j}`].Id != null ? (column[`${i}`].Item[`${j}`].CategoryName + '/') : '') + column[`${i}`].Item[`${j}`].ItemName + '?tab=' + column[`${i}`].Item[`${j}`].TabId + (queryString != '' ? '&' + queryString : queryString));
                            const styleAttr: any = j != 0 ? 'style="width:100%;height:100%;"' : '';
                            if (column[`${i}`].Item[`${j}`].ItemExtension.toLowerCase() != '.sydj') {
                                bbEmbed('#column-' + (i + 1)).append('<li class="list-item" ' + styleAttr + '><div class="widget" id=widget_' + (i + 1) + '_' + (j + 1) + ' data-dashboardurl="' + href + '" style="height:100%;width:100%;"></div></li>');
                            }
                            else {
                                const deleteIconDiv: any = that.embedOptions.pinboardSettings.enableUnpinWidget || that.embedOptions.pinboardSettings.enableUnpinWidget === undefined ? '<div id="widget-icons"><i class="items unpin-widget su su-delete" data-toggle="tooltip" data-original-title="Unpin Widget"  style="color: black;" /></div>' : '';
                                bbEmbed('#column-' + (i + 1)).append('<li class="list-item" ' + styleAttr + '><div class="widget" id=widget_' + (i + 1) + '_' + (j + 1) + ' data-dashboardurl="' + href + '" style="height: ' + height + 'px;width:100%;background:#fff;"><div class="widget-sortable" style="width:100%;float:left;display:block;height:0px"><div style="height:100%;width:100%;cursor:move;"><div id="item-name">' + itemName + '</div>' + deleteIconDiv + '</div></div></div></li>');
                            }

                        });
                    }
                    else {
                        bbEmbed('#column-' + (i + 1)).append('<li class="empty click-container"><div class="empty-content empty-homepage"><span class="drag-widget" style="font-family:var(--font-family)">Drag your widgets here to customize layout</span></div></li>');
                    }
                });
                const listItems: any = bbEmbed('li.list-item a');
                for (let t: any = 0; t < listItems.length; t++) {
                    bbEmbed('li.list-item a').eq(t).attr('href', bbEmbed('li.list-item a').eq(t).attr('data-url'));
                }
            }
            else if (itemDetail.ItemType.toLowerCase() == 'dashboard') {
                bbEmbed('#add-item, #layout-container, #divider').hide();
                bbEmbed('#widget-container').append('<ul id="column-1" class="dashboard-column col-lg-12 col-md-12 col-sm-12 col-xs-12" data-column-id="1"><li class="dashboard-list"><div class="dashboard" id="dashboard_1_1" style="height:100%;width:100%"></div></li></ul>');
            }
        } else {
            throw new Error('Pinboard Details not found');
        }
    });

    _checkEmptyHomepage(): boolean {
        let length: any = 0;
        let isEmptyHomepage: any = false;
        bbEmbed('#widget-container ul').each(function (i: number): any {
            length = bbEmbed('#column-' + (i + 1) + ' li:not(".empty")').length;
            isEmptyHomepage = length > 0 ? false : true;
            return length > 0 ? false : true;
        });
        return isEmptyHomepage;
    }

    _setLayout(layout: number): any {
        const itemType: any = bbEmbed('#widget-container').attr('data-item-type').toLowerCase();
        bbEmbed('#layout-items').find('span#' + layout).addClass('active');
        switch (layout) {
        case 1:
            bbEmbed('#column-1').removeClass().addClass('col-lg-12 col-md-12 col-sm-12 col-xs-12');
            break;
        case 11:
            bbEmbed('#column-1,#column-2').removeClass().addClass('col-lg-6 col-md-6 col-sm-6 col-xs-6');
            break;
        case 12:
            bbEmbed('#column-1').removeClass().addClass('col-lg-4 col-md-4 col-sm-4 col-xs-4');
            bbEmbed('#column-2').removeClass().addClass('col-lg-8 col-md-8 col-sm-8 col-xs-8');
            break;
        case 21:
            bbEmbed('#column-1').removeClass().addClass('col-lg-8 col-md-8 col-sm-8 col-xs-8');
            bbEmbed('#column-2').removeClass().addClass('col-lg-4 col-md-4 col-sm-4 col-xs-4');
            break;
        case 111:
            bbEmbed('#column-1,#column-2,#column-3').removeClass().addClass('col-lg-4 col-md-4 col-sm-4 col-xs-4');
            break;
        }
        const isEmptyHomepage: any = this._checkEmptyHomepage();
        if (isEmptyHomepage) {
            if (!window.IsMobile) {
                bbEmbed('#widget-container ul li.empty .empty-content').find('.drag-widget').hide();
                bbEmbed('#widget-container ul li.empty .empty-content').removeClass('non-empty-homepage').addClass('empty-homepage');
            }
            else {
                bbEmbed('#widget-container ul li.empty .empty-content').removeClass('non-empty-homepage').addClass('mobile-empty-homepage');
                bbEmbed('#widget-container ul li.empty .empty-content').find('.drag-widget').text('Log in using a desktop client to add widgets to this pinboard.').show();
                bbEmbed('#widget-container ul li.empty').css('border', 'none');
            }
        }
        if (itemType != 'dashboard') {
            const that: BoldBI = this;
            this.enableSorting();
            this.setListMinimumHeight();
            bbEmbed('.pinBoardDbrd').each(function (): any {
                const dbrdInstance: any = that._getDashboardInstance(this.id);
                const clientFnc: any = window[that.embedOptions.onResize];
                if (clientFnc instanceof Function) {
                    clientFnc.call(that, dbrdInstance);
                }
                if (that.embedOptions.onResize instanceof Function) {
                    that.embedOptions.onResize.call(that, dbrdInstance);
                }
                dbrdInstance.resizeDashboard();
            });
        }
    }

    setListMinimumHeight(): any {
        const tempArr: any = [];
        bbEmbed('#widget-container > ul').each(function (i: number): any {
            let tempVar: any = 0;
            bbEmbed(this).find('li').each(function (): any {
                tempVar = tempVar + bbEmbed(this).innerHeight() + 20;
            });
            tempArr[`${i}`] = tempVar;
        });
        const minimumHeight: any = Math.max(...tempArr) > 400 ? Math.max(...tempArr) : 440;
        bbEmbed('#widget-container > ul').css('min-height', minimumHeight);
        bbEmbed('#server-app-container').height(bbEmbed('#content-area').height());
    }

    enableSorting(): any {
        const that: BoldBI = this;
        window.bbEmbed('#column-1, #column-2, #column-3').sortable({
            connectWith: 'ul',
            placeholder: 'placeholder',
            handle: '.e-rteItem .e-rte-content, .bbi-dbrd-control-header:not(.bbi-dbrd-control-menu-icon)',
            cancel: '.empty, .bbi-dbrd-control-menu-icon',
            containment: '#server-app-container',
            cursor: 'move',
            tolerance: 'pointer',
            scroll: true,
            scrollSensitivity: 10,
            scrollSpeed: 20,
            update: function (event: {target?: any}, ui: {item?: any}): any {
                that.toColumn = bbEmbed(event.target).data('column-id');
                that.toPosition = ui.item.index() + 1;
            },
            start: function (event: {target?: any}, ui: {item?: any}): any {
                bbEmbed('li.placeholder').append('<div class="placeholder-text" style="color: dimgray; font-size: 20px;padding-top: 10px;text-align: center;font-family:var(--font-family)">Drag your widgets here to customize layout</div>');
                bbEmbed('li.placeholder').css({ 'height': ui.item.height().toString() + 'px', 'background-color': '#eeeeee', 'border': 'dashed lightgray' });
                bbEmbed('#widget-container ul li.empty').remove();
                that.fromColumn = bbEmbed(event.target).data('column-id');
                that.fromPosition = ui.item.index() + 1;
                that.toColumn = bbEmbed(event.target).data('column-id');
                that.toPosition = ui.item.index() + 1;
                const dragPinWidgetInstance: any = bbEmbed('#' + ui.item.find('.pinWidget').attr('id') + '_embeddedbi').data('BoldBIDashboardDesigner');
                const clientFnc: any = window[that.embedOptions.onDrag];
                if (clientFnc instanceof Function) {
                    clientFnc.call(this, dragPinWidgetInstance);
                }
                if (that.embedOptions.onDrag instanceof Function) {
                    that.embedOptions.onDrag.call(that, dragPinWidgetInstance);
                }
            },
            stop: function (event: {target?: any}, ui: {item?: any}): any {
                that.showEmptyList();
                const clientFnc: any = window[that.embedOptions.onDrop];
                const dropPinWidgetInstance: any = bbEmbed('#' + ui.item.find('.pinWidget').attr('id') + '_embeddedbi').data('BoldBIDashboardDesigner');
                if (clientFnc instanceof Function) {
                    clientFnc.call(this, dropPinWidgetInstance);
                }
                if (that.embedOptions.onDrop instanceof Function) {
                    that.embedOptions.onDrop.call(that, dropPinWidgetInstance);
                }
                if (!(that.fromColumn == that.toColumn && that.fromPosition == that.toPosition)) {
                    if (that.fromColumn != that.toColumn) {
                        window.bbEmbed('#' + ui.item.find('.pinWidget').attr('id') + '_embeddedbi').data('BoldBIDashboardDesigner').resizeDashboard();
                    }
                    that.dragAndDrop(that.fromColumn, that.toColumn, that.fromPosition, that.toPosition);
                }
                that.setListMinimumHeight();
            }
        });
        window.bbEmbed('#column-1, #column-2, #column-3').disableSelection();
    }

    showEmptyList(): any {
        bbEmbed('#widget-container ul').each(function (i: number): any {
            if (bbEmbed('#column-' + (i + 1) + ' li').length < 1) {
                bbEmbed('#column-' + (i + 1)).append('<li class="empty click-container"><div class="empty-content empty-homepage"><span class="drag-widget" style="font-family:var(--font-family)">Drag your widgets here to customize layout</span></div></li>');
            }
        });
    }

    dragAndDrop(fromColumn: number, toColumn: number, fromPosition: number, toPosition: number): any {
        const that: BoldBI = this;
        let data: any;
        const homepageItemId: any = bbEmbed('#widget-container').attr('data-homepage-id');
        const from: any = { Column: fromColumn, Position: fromPosition };
        const to: any = { Column: toColumn, Position: toPosition };
        const embedQuerString: any = 'embed_nonce=' + this._uuidv4Generartor() +
            '&homepageId=' + homepageItemId +
            '&moveFrom=' + JSON.stringify(from) +
            '&moveTo=' + JSON.stringify(to) +
            '&embed_mode=' + this.embedOptions.mode +
            '&embed_timestamp=' + Math.round((new Date()).getTime() / 1000) +
            '&embed_expirationtime=' + this.embedOptions.expirationTime;
        if (!that._isEmptyOrSpaces(that.embedOptions.authorizationServer.url)) {
            data = {
                embedQuerString: encodeURI(embedQuerString),
                dashboardServerApiUrl: this.dashboardServerApiUrl
            };
            this._xhrRequestHelper('POST', this.embedOptions.authorizationServer.url, data, this.embedOptions.authorizationServer.headers, this._dragAndDropSuccess);
        }
        else {
            data = {
                'homepageId': homepageItemId,
                'moveFrom': JSON.stringify(from),
                'moveTo': JSON.stringify(to)
            };
            bbEmbed.ajax({
                async: false,
                type: 'POST',
                url: that.dashboardServerApiUrl + this.embedGetDetailsEndPoint,
                data: JSON.stringify(data),
                headers: {
                    'Authorization': 'Bearer ' + that.accessToken
                },
                contentType: 'application/json',
                success: bbEmbed.proxy(that._dragAndDropSuccess, that)
            });
        }
    }

    _unPinItem(column: number, position: number): any {
        const that: BoldBI = this;
        let data: any;
        const homepageItemId: any = bbEmbed('#widget-container').attr('data-homepage-id');
        const unpinPosition: any = { Column: column, Position: position };
        const embedQuerString: any = 'embed_nonce=' + this._uuidv4Generartor() +
            '&homepageId=' + homepageItemId +
            '&unpinPosition=' + JSON.stringify(unpinPosition) +
            '&isUnpin=' + true +
            '&embed_mode=' + this.embedOptions.mode +
            '&embed_timestamp=' + Math.round((new Date()).getTime() / 1000) +
            '&embed_expirationtime=' + this.embedOptions.expirationTime;
        if (!that._isEmptyOrSpaces(that.embedOptions.authorizationServer.url)) {
            data = {
                embedQuerString: encodeURI(embedQuerString),
                dashboardServerApiUrl: this.dashboardServerApiUrl
            };
            this._xhrRequestHelper('POST', this.embedOptions.authorizationServer.url, data, this.embedOptions.authorizationServer.headers, this._unPinSuccess);
        }
        else {
            data = {
                'homepageId': homepageItemId,
                'unpinPosition': JSON.stringify(unpinPosition),
                'isUnpin': true
            };
            bbEmbed.ajax({
                async: false,
                type: 'POST',
                url: that.dashboardServerApiUrl + this.embedGetDetailsEndPoint,
                headers: {
                    'Authorization': 'Bearer ' + that.accessToken
                },
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: bbEmbed.proxy(that._unPinSuccess, that)
            });
        }
    }

    _unPinSuccess(result: {Status: boolean}): any {
        if (result.Status) {
            bbEmbed('#column-' + this.column + ' li:eq(' + (this.position - 1) + ')').remove();
            this.showEmptyList();
            const isEmptyHomepage: any = this.checkEmptyHomepage();
            if (isEmptyHomepage) {
                bbEmbed('#widget-container ul li.empty .empty-content').find('.drag-widget').hide();
                bbEmbed('#widget-container ul li.empty .empty-content').removeClass('non-empty-homepage').addClass('empty-homepage');
            }
            this.setListMinimumHeight();
        }
    }

    checkEmptyHomepage(): boolean {
        let length: any = 0;
        let isEmptyHomepage: any = false;
        bbEmbed('#widget-container ul').each(function (i: number): any {
            length = bbEmbed('#column-' + (i + 1) + ' li:not(".empty")').length;
            isEmptyHomepage = length > 0 ? false : true;
            return length > 0 ? false : true;
        });
        return isEmptyHomepage;
    }

    _dragAndDropSuccess: any = this.Invoke(function(result: {Status: boolean, Message: string}): any {
        if (!result.Status) {
            throw new Error('Drag and drop failure due to' + result.Message);
        }
    });

    _renderItem(itemDetail: {ItemType?: any, ColumnInfo?: any}): any {
        const that: BoldBI = this;
        const isEmptyHomepage: any = this._checkEmptyHomepage();
        if (isEmptyHomepage) {
            bbEmbed('#widget-container ul li.empty .empty-content').find('.drag-widget').hide();
            bbEmbed('#widget-container ul li.empty .empty-content').removeClass('non-empty-homepage').addClass('empty-homepage');
        }

        bbEmbed('#widget-container').hide();
        if (itemDetail.ItemType.toLowerCase() == 'widget') {
            this._setLayout(itemDetail.ColumnInfo.Layout);
            const column: any = itemDetail.ColumnInfo.Column;
            bbEmbed.each(column, function (i: number): any {
                if (column[`${i}`].Item.length > 0) {
                    bbEmbed.each(column[`${i}`].Item, function (j: number): any {
                        if (column[`${i}`].Item[`${j}`].ItemExtension.toLowerCase() != '.sydj') {
                            bbEmbed('#widget_' + (i + 1) + '_' + (j + 1)).ejDashboardViewer({
                                accessToken: this.accessToken,
                                serviceUrl: this.dashboardServiceUrl,
                                serverUrl: this.dashboardServerUrl,
                                _enableHyperLinkOnErrorMessage: false,
                                cdnFilePath: this.isUseCdn ? this.cdnLink + '/scripts/viewer' : '',
                                dashboardPath: column[`${i}`].Item[`${j}`].Path,
                                _itemId: column[`${i}`].Item[`${j}`].ItemId,
                                reportName: '',
                                reportDescription: '',
                                enableExport: true,
                                enablePrint: false,
                                actionBegin: function (args: {eventType: string}): any {
                                    if (args.eventType == 'beforeNavigate') {
                                        this.hasWidgetLink = true;
                                    }
                                },
                                localeSettings: {
                                    resourcePath: ''
                                },
                                enableWidgetMode: column[`${i}`].Item[`${j}`].Id == null ? false : true,
                                filterParameters: column[`${i}`].Item[`${j}`].QueryString,
                                showTab: column[`${i}`].Item[`${j}`].TabId == null ? true : false,
                                widgetModeSettings: {
                                    name: '',
                                    id: column[`${i}`].Item[`${j}`].Id == null ? '' : column[`${i}`].Item[`${j}`].Id,
                                    title: column[`${i}`].Item[`${j}`].Name
                                },
                                _selectedTabGuid: column[`${i}`].Item[`${j}`].TabId == null ? '' : column[`${i}`].Item[`${j}`].TabId,
                                afterWidgetRender: bbEmbed.proxy(function (args: number, param: {data?: any}): any {
                                    if (param.data.controlType.toLowerCase() == 'card') {
                                        if (!bbEmbed('#widget_' + (i + 1) + '_' + (j + 1) + ' .e-control-heading span').hasClass('e-control-title')) {
                                            bbEmbed('#widget_' + (i + 1) + '_' + (j + 1) + ' .e-control-heading').text(args[`${i}`].Item[`${j}`].Name);
                                        }
                                    }
                                    if (args[`${i}`].Item[`${j}`].IsActive && !args[`${i}`].Item[`${j}`].IsHavingPermission) {
                                        bbEmbed('#widget_' + (i + 1) + '_' + (j + 1)).find('.bbi-dbrd-control').remove();
                                        bbEmbed('#widget_' + (i + 1) + '_' + (j + 1)).find('.bbi-dbrd-control-container').append('<div class="no-permission"><span class="message">You do not have permission to view this widget.</span></div>');
                                    }
                                    else if (!args[`${i}`].Item[`${j}`].IsActive && !args[`${i}`].Item[`${j}`].IsHavingPermission) {
                                        bbEmbed('#widget_' + (i + 1) + '_' + (j + 1)).find('.bbi-dbrd-control').remove();
                                        bbEmbed('#widget_' + (i + 1) + '_' + (j + 1)).find('.bbi-dbrd-control-container').append('<div class="no-permission"><span class="message">This widget has been deleted.</span></div>');
                                    }
                                    if (args[`${i}`].Item[`${j}`].IsActive && args[`${i}`].Item[`${j}`].IsHavingPermission && args[`${i}`].Item[`${j}`].QueryString != null) {
                                        const currentElement: any = bbEmbed('#widget_' + (i + 1) + '_' + (j + 1));
                                        currentElement.find('#filter-info').parent().append('<div class="filter-overview"><span id="heading">Applied Filters</span><div id="outer-div"><div id="scroller-content"><div id="applied-filters-container"></div></div></div></div>');
                                        //const filtersDom = buildAppliedFiltersDom(parsedQueryFilter);
                                        //currentElement.find(".filter-overview #applied-filters-container").append(filtersDom);
                                        if (currentElement.find('.filter-overview #applied-filters-container').height() > 180) {
                                            currentElement.find('.filter-overview #scroller-content').BoldBIDashboardScroller({
                                                height: 180,
                                                width: 248,
                                                scrollerSize: 9
                                            });
                                        }
                                        currentElement.find('.filter-overview').addClass('display-none');
                                    }
                                }, this, column),
                                beforeWidgetIconRendered: bbEmbed.proxy(function (args: number, event: {widgetInformation?: any, iconsinformation?: any }): any {
                                    if (event.widgetInformation.Name.toLowerCase() != 'widget not configured') {
                                        if (!window.IsMobile) {
                                            if (event.widgetInformation.Name.toLowerCase() != 'card') {
                                                bbEmbed('#widget_' + (i + 1) + '_' + (j + 1)).data('ejDashboardViewer').model.size.height = '400px';
                                            }
                                            else {
                                                bbEmbed('#widget_' + (i + 1) + '_' + (j + 1)).data('ejDashboardViewer').model.size.height = '250px';
                                            }
                                        }
                                        else {
                                            bbEmbed('#widget_' + (i + 1) + '_' + (j + 1)).data('ejDashboardViewer').model.size.height = '250px';
                                        }
                                    }
                                    else {
                                        bbEmbed('#widget_' + (i + 1) + '_' + (j + 1)).data('ejDashboardViewer').model.size.height = '200px';
                                        bbEmbed('#widget_' + (i + 1) + '_' + (j + 1)).find('.bbi-dbrd-control-container').append('<div class="no-permission"><span class="message">This widget has been deleted.</span></div>');
                                    }
                                    if (event.iconsinformation.length > 0 && event.iconsinformation[0].classname == 'bbi-dbrd-link-enable') {
                                        event.iconsinformation[0].margintop = '1px';
                                    }

                                    if (!window.IsMobile) {
                                        event.iconsinformation.unshift({ 'classname': 'su su-delete unpin', 'name': 'Unpin Widget', 'datatooltip': 'Unpin Widget', 'marginright': '-18px', 'margintop': '4px' });
                                    }

                                    const addWidgetIcons: any = args[`${i}`].Item[`${j}`].IsActive && args[`${i}`].Item[`${j}`].IsHavingPermission && event.widgetInformation.Name.toLowerCase() != 'widget not configured';
                                    if (addWidgetIcons) {
                                        event.iconsinformation.unshift({ 'classname': 'su su-maximize unpin', 'name': 'Maximize Widget', 'datatooltip': 'Maximize Widget', 'marginright': '-18px', 'margintop': '4px' });
                                        event.iconsinformation.unshift({ 'classname': 'su su-open-link-newtab unpin', 'name': 'Go to Dashboard', 'datatooltip': 'Go to Dashboard', 'marginright': '-18px', 'margintop': '4px' });
                                    }

                                    if (addWidgetIcons && args[`${i}`].Item[`${j}`].QueryString != null) {
                                        event.iconsinformation.unshift({ 'id': 'filter-info', 'classname': 'su su-info unpin', 'name': 'Applied Filters', 'datatooltip': 'View Applied Filters', 'margintop': '4px', 'marginright': '0px' });
                                    }

                                    bbEmbed('#widget-container').show();
                                    //hideWaitingPopup('content-area');
                                    const data: any = bbEmbed('#widget_' + (i + 1) + '_' + (j + 1)).ejDashboardViewer();
                                    data.resize();
                                }, this, column),
                                dashboardCreated: function (): any {
                                    const href: any = bbEmbed('#widget_' + (i + 1) + '_' + (j + 1)).attr('data-dashboardurl');
                                    bbEmbed('#widget_' + (i + 1) + '_' + (j + 1)).find('.su-open-link-newtab').wrap(bbEmbed('<a class="redirect" href="' + href + '" target="_blank">'));
                                },
                                onMenuIconClick: function (information: {name?: any, target?: any, event?: any}): any {
                                    if (typeof (information.name) != 'undefined' && information.name.toLowerCase() == 'unpin widget') {
                                        //ShowWaitingProgress('#content-area', 'show');
                                        const column: any = information.target.parents('ul').data('column-id');
                                        const position: any = information.target.parents('li').index() + 1;
                                        this.unPinItem(column, position, information.event);
                                    }
                                    else if (typeof (information.name) != 'undefined' && information.name.toLowerCase() == 'maximize widget') {
                                        //parent.bbEmbed('#maximize').removeClass('display-none');
                                        //const control = parent.bbEmbed('#' + currentElement).data('ejDashboardViewer').getWidgetDataByReportName(information.widgetId);
                                        //maximizeWidget(header, control, information.event, information.serviceUrl, information.dashboardPath);
                                    }
                                    else if (typeof (information.name) != 'undefined' && information.name.toLowerCase() == 'applied filters') {
                                        const currentElement: any = bbEmbed(information.event.target).parent().find('.filter-overview');
                                        currentElement.toggleClass('display-none');
                                        bbEmbed('.filter-overview').not(currentElement).addClass('display-none');
                                        information.event.preventDefault();
                                    }
                                }
                            });
                        }
                        else {
                            const pinboardIdName: any = that.embedOptions.embedContainerId + '_pinBoard_' + (i + 1) + '_' + (j + 1);
                            bbEmbed('#widget_' + (i + 1) + '_' + (j + 1)).append('<div class="pinWidget" style="height:calc(100% - 5px);width:93%;overflow: hidden !important;" id="' + pinboardIdName + '"><div id="' + pinboardIdName + '_embeddedbi" class="pinBoardDbrd"></div ></div>');
                            that.pinBoardRendered = false;
                            that.pinboardIds.push({ 'widgetId': column[`${i}`].Item[`${j}`].Id, 'pinboardContainerId': pinboardIdName });
                            that.pinboardDetails[that.pinboardDetails.length] = column[`${i}`].Item[`${j}`].WidgetDetails;

                            if (column[`${i}`].Item[`${j}`].IsActive && !column[`${i}`].Item[`${j}`].IsHavingPermission) {
                                bbEmbed('#widget_' + (i + 1) + '_' + (j + 1)).find('iframe').remove();
                                bbEmbed('#widget_' + (i + 1) + '_' + (j + 1)).append('<div class="no-permission"><span class="message">You do not have permission to view this widget.</span></div>');
                            }
                            else if (!column[`${i}`].Item[`${j}`].IsActive && !column[`${i}`].Item[`${j}`].IsHavingPermission) {
                                bbEmbed('#widget_' + (i + 1) + '_' + (j + 1)).find('iframe').remove();
                                bbEmbed('#widget_' + (i + 1) + '_' + (j + 1)).append('<div class="no-permission"><span class="message">This widget has been deleted.</span></div>');
                            }
                        }
                    });

                    bbEmbed('#widget-container').show();
                }
                else {
                    bbEmbed('#widget-container').show();
                }
            });
            this.enableSorting();
            this.setListMinimumHeight();
        }
        else if (itemDetail.ItemType.toLowerCase() == 'dashboard') {
            const column: any = itemDetail.ColumnInfo.Column;
            bbEmbed('#dashboard_1_1').css({ 'height': bbEmbed(window).height() - bbEmbed('#header-area').outerHeight() - bbEmbed('#base-footer-div').outerHeight() - bbEmbed('#homepage-header').outerHeight() - 30, 'width': bbEmbed('#content-area').width() - 10 });
            if (column[0].Item[0].IsActive && column[0].Item[0].IsHavingPermission && column[0].Item[0].ItemExtension.toLowerCase() != '.sydj') {
                bbEmbed('#dashboard_1_1').ejDashboardViewer({
                    // accessToken: accessToken,
                    // serviceUrl: dashboardServiceUrl,
                    // serverUrl: dashboardServerUrl,
                    // _enableHyperLinkOnErrorMessage: false,
                    // cdnFilePath: isUseCdn ? cdnLink + "/scripts/viewer" : "",
                    dashboardPath: itemDetail.ColumnInfo.Column[0].Item[0].Path,
                    _itemId: itemDetail.ColumnInfo.Column[0].Item[0].ItemId,
                    reportName: '',
                    reportDescription: '',
                    enableExport: true,
                    enablePrint: false,
                    showGetLinkIcon: false,
                    localeSettings: {
                        resourcePath: ''
                    },
                    interactionSettings: {
                        allowHistoryMaintenance: false,
                        handleHistoryEvent: false
                    },
                    enableWidgetMode: false,
                    filterParameters: itemDetail.ColumnInfo.Column[0].Item[0].QueryString,
                    showTab: itemDetail.ColumnInfo.Column[0].Item[0].TabId != null ? false : true,
                    _selectedTabGuid: itemDetail.ColumnInfo.Column[0].Item[0].TabId != null ? itemDetail.ColumnInfo.Column[0].Item[0].TabId : '',
                    beforeControlMenuOpen: function (e: {menuData?: any}): any {
                        e.menuData.splice(1, 1);
                    },
                    onTabSelectionFailure: 'OnFailtoLoadChildDashboard',
                    beforeContextMenuOpen: function (e: {menuData: any}): any {
                        const removeByAttr: any = function (arr: Array<object>, attr: string, value: string): any {
                            let i: number = arr.length;
                            while (i--) {
                                if (arr[`${i}`] && Object.prototype.hasOwnProperty.call(arr[`${i}`], attr) && (arguments.length > 2 && arr[`${i}`][`${attr}`] == value)) {
                                    arr.splice(i, 1);
                                }
                            }
                            return arr;
                        };
                        removeByAttr(e.menuData, 'text', 'Export');
                    }
                });
            }
            else {
                if (!column[0].Item[0].IsActive) {
                    bbEmbed('#dashboard_1_1').append('<div class="no-permission"><span class="message">This dashboard has been deleted.</span></div>');
                }
                else if (column[0].Item[0].IsActive && !column[0].Item[0].IsHavingPermission) {
                    bbEmbed('#dashboard_1_1').append('<div class="no-permission"><span class="message">You do not have permission to view this dashboard.</span></div>');
                }
                else if (column[0].Item[0].IsActive && column[0].Item[0].IsHavingPermission && column[0].Item[0].ItemExtension.toLowerCase() == '.sydj') {
                    bbEmbed('#dashboard_1_1').append('<div class="no-permission"><span class="message">Currently this dashboard is not supported.</span></div>');
                }
            }
            bbEmbed('#widget-container').show();
            //hideWaitingPopup("content-area");
        }
    }


    _addWidgetInPinboard(itemDetails: {ColumnInfo?: any}): any {
        const ulElement: any = bbEmbed('#widget-container').find('ul:first');
        if (bbEmbed('#widget-container').find('ul:first li').length == 1 && bbEmbed('#widget-container').find('ul:first li').hasClass('empty')) {
            bbEmbed('#widget-container').find('ul:first li').remove();
        }
        const ulElementLilength: any = bbEmbed('#widget-container').find('ul:first li').length;
        const column: any = itemDetails.ColumnInfo.Column[0];
        const item: any = column.Item[0].Id == null ? '/bi/' + this.siteIdentifier + '/widgets/widgets' : '/bi/' + this.siteIdentifier + '/dashboards';
        const itemName: any = column.Item[0].Name;
        const widgetType: any = column.Item[0].WidgetType;
        let height: any = 0;
        if (widgetType != null && (widgetType.includes('Card') || widgetType.includes('Image'))) {
            height = 250;
        }
        else {
            height = 400;
        }
        const queryString: any = column.Item[0].QueryString != null ? column.Item[0].QueryString : '';
        const href: any = column.Item[0].TabId == null ? (item + '/' + column.Item[0].ItemId + '/' + (column.Item[0].Id != null ? (column.Item[0].CategoryName + '/') : '') + column.Item[0].ItemName + (queryString != '' ? '?' + queryString : queryString)) : (item + '/' + column.Item[0].ItemId + '/' + (column.Item[0].Id != null ? (column.Item[0].CategoryName + '/') : '') + column.Item[0].ItemName + '?tab=' + column.Item[0].TabId + (queryString != '' ? '&' + queryString : queryString));
        const deleteIconDiv: any = this.embedOptions.pinboardSettings.enableUnpinWidget  || this.embedOptions.pinboardSettings.enableUnpinWidget === undefined ? '<div id="widget-icons"><i class="items unpin-widget su su-delete" data-toggle="tooltip" data-original-title="Unpin Widget"  style="color: black;" /></div>' : '';
        bbEmbed(ulElement).prepend('<li class="list-item"><div class="widget" id=widget_' + 1 + '_' + (ulElementLilength + 1) + ' data-dashboardurl="' + href + '" style="height: ' + height + 'px;width:100%;background:#fff;"><div class="widget-sortable" style="width:100%;float:left;display:block;height:0px"><div style="height:100%;width:100%;cursor:move;"><div id="item-name">' + itemName + '</div>' + deleteIconDiv + '</div></div></div></li>');
        const pinboardIdName: any = this.embedOptions.embedContainerId + '_pinBoard_1' + '_' + (ulElementLilength + 1);
        bbEmbed('#widget_1' + '_' + (ulElementLilength + 1)).append('<div class="pinWidget" style="height:calc(100% - 5px);width:93%;overflow: hidden !important;" id="' + pinboardIdName + '"><div id="' + pinboardIdName + '_embeddedbi" class="pinBoardDbrd"></div ></div>');
        this.pinBoardRendered = false;
        this.pinboardIds.push({ 'widgetId': column.Item[0].Id, 'pinboardContainerId': pinboardIdName });
        this.loadDashboardWidget(column.Item[0].Id, column.Item[0].ItemId);
        this.enableSorting();
        this.setListMinimumHeight();
        this._removeElementsClass(this.embedOptions.embedContainerId, '.preloader-wrap', 'viewer-blue-loader');
    }

    _renderMultiTabDashboard: any = this.Invoke(function(embedResponse: object): any {
        if (this.embedOptions.mode == BoldBI.Mode.View && !this.isWidgetMode) {
            this.isMultiTab = true;
            const that: BoldBI = this;
            const embedContainer: any = bbEmbed('#' + that.embedOptions.embedContainerId);
            embedContainer.html('');
            const containerName: any = that.embedOptions.embedContainerId + '_multi_tab_dashboard';
            const multiTabContainer: any = bbEmbed('<div id="' + containerName + '" class="multitab-dbrd" style="height: 100% !important"></div>');
            embedContainer.append(multiTabContainer);
            const tabHeader: any = bbEmbed('<div class="e-tab-header"></div>');
            const tabContent: any = bbEmbed('<div class="e-content"></div>');
            bbEmbed.map(embedResponse, function (value: {ItemDetail?: any, parentId?: any}): any {
                const dashboardItemDetail: any = JSON.parse(value.ItemDetail);
                that.parentDbrdId = value.parentId;
                const dashboardId: any = dashboardItemDetail.Id.replaceAll('-', '');
                that.dashboardDetails[`${dashboardId}`] = value;
                if (!that._isNullOrUndefined(that.embedOptions.dashboardSettings.dashboardName) && typeof that.embedOptions.dashboardSettings.dashboardName != 'string') {
                    bbEmbed.map(that.embedOptions.dashboardSettings.dashboardName, function (val: {dashboardId: string, dashboardName: string}): any {
                        dashboardItemDetail.Name = (dashboardId == val.dashboardId.replaceAll('-', '')) ? that._isEmptyOrSpaces(val.dashboardName) ? dashboardItemDetail.Name : val.dashboardName : dashboardItemDetail.Name;
                    });
                }
                tabHeader.append(bbEmbed('<div>' + dashboardItemDetail.Name + '</div>'));
                const multitabDbrdEle: any = bbEmbed('<div style="height:100%;width:100%;overflow: hidden !important;" id="multi_' + dashboardId + '"></div>');
                tabContent.append(bbEmbed('<div></div>').append(multitabDbrdEle.append('<div id="multi_' + dashboardId + '_embeddedbi" class="bbembed-multitab-dbrd"></div>')));
            });
            multiTabContainer.append(tabHeader).append(tabContent);
            tabInstance = new ejdashboard.navigations.Tab({
                enableAnimation: false,
                selected: bbEmbed.proxy(this._tabSelected, this)
            });
            tabInstance.appendTo('#' + containerName);
            bbEmbed('.e-tab-header .e-toolbar-item .e-tab-text').css({ 'display': 'inline-block', 'width': '150px', 'white-space': 'nowrap', 'overflow': 'hidden', 'text-overflow': 'ellipsis', 'color': '#000', 'font-family': 'var(--font-family)', 'text-transform': 'none' });
            bbEmbed('<style type="text/css"> .embed-multi-tab-indicator{ background: var(--primary-branding-color) !important; border-radius: 4px; display: block !important; height: 5px !important;}</style>').appendTo('head');
            bbEmbed('.e-control.e-tab .e-tab-header .e-indicator').addClass('embed-multi-tab-indicator');
            bbEmbed.map(bbEmbed('.e-tab-header .e-toolbar-item .e-tab-text'), function (value: object, index: number): any {
                bbEmbed(value).attr('title', bbEmbed(value).text());
                bbEmbed(bbEmbed('.e-content').find('#e-content-multi_tab_dashboard_' + index).children()).css({ 'height': '100%', 'width': '100%', 'overflow': 'hidden', 'display': 'block', 'position': 'absolute', 'left': bbEmbed('.e-content.e-lib.e-touch').width() * index });
            });
            bbEmbed('.multitab-dbrd .e-content').attr('style', 'height: 100% !important');
            bbEmbed.map(bbEmbed('.multitab-dbrd .e-content').children(), function (value: object): any {
                bbEmbed(value).css({ 'height': '100%' });
            });
            bbEmbed(embedContainer).css({ 'overflow-x': 'hidden', 'overflow-y': 'hidden', 'width': that.embedOptions.width });
            bbEmbed('#' + containerName).css({ 'width': bbEmbed('.e-content.e-lib.e-touch').width(), 'height': this.embedOptions.height });
            bbEmbed('.e-tab-header')[0].ej2_instances[0].refreshOverflow();
            tabInstance.resizeContext();
            bbEmbed.map(embedResponse, function (value: object, index: number): any {
                if (index == 0) {
                    const response: any = {
                        Apistatus: true,
                        Data: value,
                        Status: true
                    };
                    that._renderDashboard(response);
                }
            });
        } else {
            if (this.isWidgetMode) {
                const ele: any = document.getElementById(this.embedOptions.embedContainerId);
                if (BoldBI._hasinstance(ele, 'embeddedBoldBI')) {
                    BoldBI._removeinstance(ele, 'embeddedBoldBI');
                }
                throw new Error('Cant able to render the widget mode in Multitab dashboard');
            } else {
                const ele: any = document.getElementById(this.embedOptions.embedContainerId);
                if (BoldBI._hasinstance(ele, 'embeddedBoldBI')) {
                    BoldBI._removeinstance(ele, 'embeddedBoldBI');
                }
                throw new Error('Cant able to render the Multitab dashboard in design mode');
            }
        }
    });

    _tabSelected(): any {
        const containerName: any = window.bbEmbed('.multitab-dbrd').attr('id');
        for (let i: any = 0; i < window.bbEmbed('#' + containerName + ' .e-toolbar-item').length; i++) {
            window.bbEmbed('.e-content').find('#e-content-' + containerName + '_' + i).attr('style', 'display:block !important');
            if (window.bbEmbed('#' + containerName + ' .e-toolbar-item.e-active').attr('aria-controls') == 'e-content-' + containerName + '_' + i) {
                window.bbEmbed(window.bbEmbed('.e-content').find('#e-content-' + containerName + '_' + i).children()).css({ 'display': 'block', 'position': 'absolute', 'left': 0 });
                const dbrdInstance: any = window.bbEmbed('#' + window.bbEmbed(window.bbEmbed('.e-content').find('#e-content-' + containerName + '_' + i).children()).children().attr('id')).data('BoldBIDashboardDesigner');
                if (dbrdInstance == null || dbrdInstance == undefined) {
                    const dashboardId: any = window.bbEmbed('.e-content').find('#e-content-' + containerName + '_' + i).children().attr('id').split('_')[1];
                    const response: any = {
                        Apistatus: true,
                        Data: this.dashboardDetails[`${dashboardId}`],
                        Status: true
                    };
                    this._renderDashboard(response);
                }
            } else {
                window.bbEmbed(window.bbEmbed('.e-content').find('#e-content-' + containerName + '_' + i).children()).css({ 'display': 'block', 'position': 'absolute', 'left': window.bbEmbed('.e-content.e-lib.e-touch').width() * (i + 1) });
            }
        }
    }

    _isDependencyLoaded(that: BoldBI, dashboardId?: string): any {
        if (window.bbEmbed instanceof Function &&
            window.BoldBIDashboard instanceof Object && !that._isNullOrUndefined(window.BoldBIDashboard) &&
            window.BoldBIDashboard.Designer instanceof Object &&
            window.BoldBIDashboardDesigner instanceof Function &&
            !that._isEmptyOrSpaces(that.designerRootUrl) &&
            window.Designer instanceof Object) {
            if (!that.IsDependencyLoaded) {
                that.IsDependencyLoaded = true;
            }
            that._getAuthorizationToken(dashboardId);

        } else {
            setTimeout(that._isDependencyLoaded, 500, that);
        }
    }

    _getDashboardInstance(embedChildId?: string): any {
        const ele: any = window.bbEmbed.call(this, '#' + (embedChildId ? embedChildId : this.childContainer.id))[0];
        if (ele) {
            return window.bbEmbed.data.call(this, ele, 'BoldBIDashboardDesigner');
        }
    }

    _onBoldBIDashboardInstaceActionBegin(arg: {eventType: string }, embedContainerId: string): any {

        if (this.isMultiTab && parseInt(bbEmbed('.e-content .e-active').attr('id').split('_')[bbEmbed('.e-content .e-active').attr('id').split('_').length - 1], 10) == 0) {
            const dashboadInstance: any = bbEmbed('.e-content .e-active').find('.bbembed-multitab-dbrd').data('BoldBIDashboardDesigner');
            this.setDefaultTheme(dashboadInstance.modules.themeHelper.getBannerBackground(), dashboadInstance.modules.themeHelper.getBannerTextColor(), dashboadInstance.modules.themeHelper.getBannerIconColor());
        }

        if (typeof (arg) != 'undefined') {
            switch (arg.eventType) {
            case 'renderLayout':
                this._removeElementsClass(embedContainerId, '.preloader-wrap', 'viewer-blue-loader');
                break;
            default:
                break;
            }
        }

        const serverFnc: any = window[this.actionBeginFn];
        if (serverFnc instanceof Function) {
            serverFnc.call(this, arg);
        }

        const clientFnc: any = window[this.embedOptions.actionBegin];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.actionBegin instanceof Function) {
            this.embedOptions.actionBegin.call(this, arg);
        }

        if (arg.eventType == 'dataSourceSaveAction') {
            this._onBoldBIBeforeDatasourceSaveAction(arg);
        }

        if (arg.eventType == 'filterInteraction') {
            const clientFnc: any = window[this.embedOptions.beforeFilterApply];
            if (clientFnc instanceof Function) {
                clientFnc.call(this, arg);
            }
            if (this.embedOptions.beforeFilterApply instanceof Function) {
                this.embedOptions.beforeFilterApply.call(this, arg);
            }
        }

        if (arg.eventType == 'publishAsAction') {
            const clientFnc: any = window[this.embedOptions.dashboardSettings.beforePublishAs];
            if (clientFnc instanceof Function) {
                clientFnc.call(this, arg);
            }
            if (this.embedOptions.dashboardSettings.beforePublishAs instanceof Function) {
                this.embedOptions.dashboardSettings.beforePublishAs.call(this, arg);
            }
        }

    }

    _onBoldBIDashboardInstaceActionComplete(arg: {eventType: string, data?: any, source?: any, schema?: any }): any {
        const that: BoldBI = this;
        let data: any;
        const serverFnc: any = window[this.actionCompleteFn];
        if (!this._isNullOrUndefined(arg.data)) {
            if (arg.data.event == 'createConnection') {
                this.embedOptions.datasourceId = arg.data.source.data;
                this.embedOptions.mode = BoldBI.Mode.DataSource;
                this.isNewConnection = true;
                if (!that._isEmptyOrSpaces(that.embedOptions.authorizationServer.url)) {
                    this._getAuthorizationToken();
                }
                else {
                    data = {
                        'embed_datasource_id': that.embedOptions.datasourceId,
                        'embed_mode': that.embedOptions.mode
                    };
                    bbEmbed.ajax({
                        async: false,
                        type: 'POST',
                        url: that.dashboardServerApiUrl + this.embedGetDetailsEndPoint,
                        headers: {
                            'Authorization': 'Bearer ' + that.accessToken
                        },
                        data: JSON.stringify(data),
                        contentType: 'application/json',
                        success: bbEmbed.proxy(that._renderDashboard, that)
                    });
                }
            }

            if (arg.data.event == 'cancelDataSource') {
                this.embedOptions.mode = BoldBI.Mode.Connection;
                if (!that._isEmptyOrSpaces(that.embedOptions.authorizationServer.url)) {
                    this._getAuthorizationToken();
                }
                else {
                    data = {
                        'embed_mode': that.embedOptions.mode
                    };
                    bbEmbed.ajax({
                        async: false,
                        type: 'POST',
                        url: that.dashboardServerApiUrl + this.embedGetDetailsEndPoint,
                        headers: {
                            'Authorization': 'Bearer ' + that.accessToken
                        },
                        data: JSON.stringify(data),
                        contentType: 'application/json',
                        success: bbEmbed.proxy(that._renderDashboard, that)
                    });
                }
            }
        }

        if (this.pinboardIds.length > 0 && arg.eventType === 'renderWidget') {
            const controlHeaderWrapper: any = arg.source.element.find('.bbi-dbrd-control-header .bbi-dbrd-control-title-wrapper');
            if (controlHeaderWrapper.length === 0) {
                arg.source.element.parents('.widget').find('#widget-icons').css('margin-top', '8px');
                if (arg.source.element.attr('data-name').toLowerCase().includes('card')) {
                    arg.source.element.find('.bbi-dbrd-control').css('top', '20px');
                }
            } else {
                arg.source.element.find('.bbi-dbrd-control-header').css('margin-left', '-8px');
                arg.source.element.find('.bbi-dbrd-control-title-wrapper').css('margin-left', '8px');
            }
        }

        if (arg.eventType == 'interactionCompleted') {
            data = {
                filterData: this._getFilterData(arg.source.data.encryptedData),
                data: arg
            };
            const clientFnc: any = window[this.embedOptions.dashboardSettings.onInteraction];
            if (clientFnc instanceof Function) {
                clientFnc.call(this, data);
            }
            if (this.embedOptions.dashboardSettings.onInteraction instanceof Function) {
                this.embedOptions.dashboardSettings.onInteraction.call(this, arg);
            }

        } else {

            if (serverFnc instanceof Function) {
                serverFnc.call(this, arg);
            }

            const clientFnc: any = window[this.embedOptions.actionComplete];
            if (clientFnc instanceof Function) {
                clientFnc.call(this, arg);
            }
            if (this.embedOptions.actionComplete instanceof Function) {
                this.embedOptions.actionComplete.call(this, arg);
            }
        }

        if (arg.eventType == 'filterInteraction') {
            const clientFnc: any = window[this.embedOptions.afterFilterApply];
            if (clientFnc instanceof Function) {
                clientFnc.call(this, arg);
            }
            if (this.embedOptions.afterFilterApply instanceof Function) {
                this.embedOptions.afterFilterApply.call(this, arg);
            }
        }

        if (arg.eventType == 'dataSourceSaveAction' && JSON.parse(arg.schema.schema).length > 0) {
            this._onBoldBIAfterDatasourceSaveAction(arg);
        }
    }

    _onBoldBIBeforeDatasourceSaveAction(arg: object): any {
        const clientFnc: any = window[this.embedOptions.beforeDatasourceSave];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.beforeDatasourceSave instanceof Function) {
            this.embedOptions.beforeDatasourceSave.call(this, arg);
        }
    }

    _onBoldBIAfterDatasourceSaveAction(arg: object): any {
        const clientFnc: any = window[this.embedOptions.afterDatasourceSave];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.afterDatasourceSave instanceof Function) {
            this.embedOptions.afterDatasourceSave.call(this, arg);
        }
    }

    _onBoldBIDashboardBeforeBannerIconRender(arg: {iconsinformation?: any}) : any{
        const themeGroup: any = arg.iconsinformation.shift();
        const filterOverviewOption: any = arg.iconsinformation.shift();
        const refreshGroup: any = arg.iconsinformation.shift();
        if (this.embedOptions.dashboardSettings.showMoreOption == false || this.embedOptions.dashboardSettings.showExport == false || (this.embedOptions.exportSettings.showExcel == false && this.embedOptions.exportSettings.showImage == false && this.embedOptions.exportSettings.showPDF == false)) {
            arg.iconsinformation = this._arraySlice(arg.iconsinformation, 'groupName', 'Option');
        }

        if (this.embedOptions.dashboardSettings.showDashboardParameter == false) {
            for (let i: number = filterOverviewOption.items.length - 1; i >= 0; i--) {
                if (!this._isNullOrUndefined(filterOverviewOption.items[`${i}`]) && filterOverviewOption.items[`${i}`][0].dataset['name'] == 'dashboardparameters') {
                    filterOverviewOption.items.splice(i, 1);
                }
            }
        }
        if (this.embedOptions.dashboardSettings.showRefresh == false) {
            refreshGroup.items.splice(0, 1);
        }
        const serverFnc: any = window[this.beforeBannerIconRenderFn];
        if (this.embedOptions.dashboardSettings.enableFullScreen) {
            const refreshAndFullScreen: any = {
                groupId: 'refresh-fullscreen',
                groupName: 'Refresh & FullScreen',
                enableGroupSeperator: true,
                items: [
                    this._createBannerIcon('<div/>', 'dashboard-refresh', 'e-dbrd-banner-refresh', 'Refresh', 'refreshdashboard', true, false, { 'display': 'none', 'font-size': '14px' }),
                    this._createBannerIcon('<div/>', 'dashboard-fullscreen', this.isFullscreen ? 'su su-minimize' : 'su su-maximize-1', 'Fullscreen', 'fullscreen', true, false, { 'font-size': '14px' })
                ]
            };
            arg.iconsinformation.unshift(refreshAndFullScreen);
        }
        if (refreshGroup.items.length > 0) {
            arg.iconsinformation.unshift(refreshGroup);
            arg.iconsinformation[0].enableGroupSeperator = this.embedOptions.dashboardSettings.enableFullScreen ? false : true;
        }

        if (filterOverviewOption.items.length > 0) {
            arg.iconsinformation.unshift(filterOverviewOption);
        }

        if (themeGroup.items.length > 0) {
            arg.iconsinformation.unshift(themeGroup);
        }

        if (serverFnc instanceof Function) {
            serverFnc.call(this, arg);
        }
        const clientFnc: any = window[this.embedOptions.dashboardSettings.beforeIconRender];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.dashboardSettings.beforeIconRender instanceof Function) {
            this.embedOptions.dashboardSettings.beforeIconRender.call(this, arg);
        }
        bbEmbed('<style type="text/css"> #dashboard-refresh { display: none !important} </style>').appendTo('head');
    }

    _createBannerIcon(tag: string, id: string, className: string, label: string, dataName: string, dataEvent: boolean, showText: boolean, css: object, href?: string): any {
        if (showText) {
            return bbEmbed(tag, {
                id: id,
                html: bbEmbed('<span/>', { 'class': 'icon-with-label', text: label, css: { 'font-family': 'Roboto', 'padding': '10px' } }),
                'class': 'server-banner-icon e-dashboard-banner-icon bbi-dbrd-designer-hoverable ' + className,
                'data-name': dataName,
                'data-event': dataEvent,
                'href': href,
                css: css
            });
        } else {
            return bbEmbed(tag, {
                id: id,
                'class': 'server-banner-icon e-dashboard-banner-icon bbi-dbrd-designer-hoverable ' + className,
                'data-tooltip': label,
                'data-name': dataName,
                'data-event': dataEvent,
                css: css
            });
        }
    }

    _onBoldBIDashboardBeforeOtherOptionContextMenuRender(arg: {iconsinformation?: any}): any {

        if (this.embedOptions.dashboardSettings.showExport == false) {
            arg.iconsinformation = this._arraySlice(arg.iconsinformation, 'groupName', 'export');
        }

        arg.iconsinformation.forEach(function (x: {groupName?: any, items?: any}): any {
            if (x.groupName == 'export') {

                if (this.embedOptions.exportSettings.showExcel == false) {
                    x.items[0].child = this._arraySlice(x.items[0].child, 'id', 'excel');
                }
                if (this.embedOptions.exportSettings.showImage == false) {
                    x.items[0].child = this._arraySlice(x.items[0].child, 'id', 'image');
                }
                if (this.embedOptions.exportSettings.showPDF == false) {
                    x.items[0].child = this._arraySlice(x.items[0].child, 'id', 'pdf');
                }
                if (this.embedOptions.exportSettings.showCSV == false) {
                    x.items[0].child = this._arraySlice(x.items[0].child, 'id', 'csv');
                }
            }
        }.bind(this));

        const serverFnc: any = window[this.beforeOtherRenderFn];
        if (serverFnc instanceof Function) {
            serverFnc.call(this, arg);
        }

        const clientFnc: any = window[this.embedOptions.beforeContextMenuRender];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.beforeContextMenuRender instanceof Function) {
            this.embedOptions.beforeContextMenuRender.call(this, arg);
        }
    }

    _onBoldBIDashboardSaveFilter(arg: object): any {
        const serverFnc: any = window[this.onSaveFilterFn];
        if (serverFnc instanceof Function) {
            serverFnc.call(this, arg);
        }

        const clientFnc: any = window[this.embedOptions.filterSettings.onSaveFilter];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.filterSettings.onSaveFilter instanceof Function) {
            this.embedOptions.filterSettings.onSaveFilter.call(this, arg);
        }
    }

    _onBoldBIDashboardSaveAsFilter(arg: object): any {
        const serverFnc: any = window[this.onSaveAsFilterFn];
        if (serverFnc instanceof Function) {
            serverFnc.call(this, arg);
        }

        const clientFnc: any = window[this.embedOptions.filterSettings.onSaveAsFilter];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.filterSettings.onSaveAsFilter instanceof Function) {
            this.embedOptions.filterSettings.onSaveAsFilter.call(this, arg);
        }
    }

    _onBoldBIDashboardOpenViewSection(arg: object): any {
        const serverFnc: any = window[this.onViewSavedFiltersFn];
        if (serverFnc instanceof Function) {
            serverFnc.call(this, arg);
        }

        const clientFnc: any = window[this.embedOptions.filterSettings.onViewSavedFilters];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.filterSettings.onViewSavedFilters instanceof Function) {
            this.embedOptions.filterSettings.onViewSavedFilters.call(this, arg);
        }
    }

    _onBoldBIDashboardBannerIconClick(arg: {name: string, selectedTheme: string }): any {
        if (arg.name.toLowerCase() == 'fullscreen') {
            this._switchFullscreenMode(arg);
        }
        if (arg.name.toLowerCase() == 'refreshdashboard') {
            if (this.isMultiTab) {
                const dashboardInstance: any = window.bbEmbed('.e-content .e-active').find('.bbembed-multitab-dbrd').data('BoldBIDashboardDesigner');
                dashboardInstance.updateDashboard();
            }
            else {
                const dashboardInstance: any = this._getDashboardInstance();
                dashboardInstance.updateDashboard();
            }
        }
        if (arg.name.toLowerCase() == 'dashboardparameters') {
            const styleElement: any = document.createElement('style');
            styleElement.innerHTML = '.remove-scroller-dashboard-parameter { width: 100% !important; height: 100% !important; color: #333; background: #fff; border-radius: 0; }';
            document.head.appendChild(styleElement);
            const that: BoldBI = this;
            setTimeout(function (): any {
                const dashboardInstance: any = that.isMultiTab ? window.bbEmbed('.e-content .e-active').find('.bbembed-multitab-dbrd').data('BoldBIDashboardDesigner') : that._getDashboardInstance();
                bbEmbed('#' + dashboardInstance._id + '_dashboardparameter_dialog').addClass('remove-scroller-dashboard-parameter');
            }, 50);
        }
        const serverFnc: any = window[this.onBannerIconClickFn];
        if (serverFnc instanceof Function) {
            serverFnc.call(this, arg);
        }

        const clientFnc: any = window[this.embedOptions.dashboardSettings.onIconClick];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.dashboardSettings.onIconClick instanceof Function) {
            this.embedOptions.dashboardSettings.onIconClick.call(this, arg);
        }

        if (typeof (arg.name) != 'undefined' && arg.name.toLowerCase() == 'theming') {
            let embedId: any;
            if (this.isMultiTab) {
                this.multiTabTheme = arg.selectedTheme;
                const dashboadInstance: any = window.bbEmbed('.e-content .e-active').find('.bbembed-multitab-dbrd').data('BoldBIDashboardDesigner');
                dashboadInstance.applyDashboardTheme(arg.selectedTheme);
                this.setDefaultTheme(dashboadInstance.modules.themeHelper.getBannerBackground(), dashboadInstance.modules.themeHelper.getBannerTextColor(), dashboadInstance.modules.themeHelper.getBannerIconColor());
                const dashboardContainer: any = window.bbEmbed('#' + this.embedOptions.embedContainerId).find('.e-content .bbembed-multitab-dbrd');
                for (let i: any = 0; i < dashboardContainer.length; i++) {
                    if (window.bbEmbed(window.bbEmbed('.e-content .e-active').find('.bbembed-multitab-dbrd')).attr('id') != window.bbEmbed(dashboardContainer[`${i}`]).attr('id')) {
                        const embedId: any = window.bbEmbed(dashboardContainer[`${i}`]).attr('id');
                        const dashboardViewerInstance: any = this._getDashboardInstance(embedId);
                        if (dashboardViewerInstance != undefined) {
                            dashboardViewerInstance.applyDashboardTheme(arg.selectedTheme);
                        }
                    }
                }
            } else {
                const dashboardViewerInstance: any = this._getDashboardInstance(embedId);
                dashboardViewerInstance.applyDashboardTheme(arg.selectedTheme);
            }
        }

    }

    getComments(commentType: string, args: {dashboardId: string, widgetId?: string, multitabDashboardId?: string }, callBackFn: Function): any {
        const that: BoldBI = this;
        const data: any = {
            'ItemId': commentType == 'dashboard' ? args.dashboardId : args.widgetId,
            'DashboardItemId': commentType == 'dashboard' ? ((this.isMultiTab ? args.multitabDashboardId : args.dashboardId)) : (args.dashboardId),
            'ItemType': commentType,
            'ParentItemId': this.isMultiTab ? args.multitabDashboardId : null,
            'CommentAction': 3, //To get dashboard comment or widget comment from server.
            'OrderBy': 1 //To get the comment in decending order (newly added first).
        };
        bbEmbed.ajax({
            async: false,
            type: 'POST',
            url: this.dashboardServerApiUrl + '/comments/operation',
            headers: {
                'Authorization': 'bearer ' + this.accessToken
            },
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function (result: {Status: boolean, Comments: string, ActiveCommentsCount: number, ItemId: string}): any {
                if (result.Status) {
                    if (commentType == 'dashboard') {
                        that.commentsArgs['Comments'] = result.Comments;
                        that.commentsArgs['ActiveCommentsCount'] = result.ActiveCommentsCount;
                        that.commentsArgs['SortBy'] = 1;
                        that.commentsArgs['DashboardId'] = result.ItemId;
                        if (window[`${callBackFn}`] instanceof Function) {
                            window[`${callBackFn}`].call(that, that.commentsArgs);
                        } else {
                            callBackFn.call(that, that.commentsArgs);
                        }
                    }
                    else if (commentType == 'widget') {
                        const widgetContainer: any = bbEmbed('[data-widget-id=' + args.widgetId + ']');
                        const widgetId: any = widgetContainer[0].id;
                        const widgetContanierWidth: any = bbEmbed('#' + widgetId).width();
                        const positionX: any = widgetContainer.offset().left + widgetContanierWidth;
                        const positionY: any = widgetContainer.offset().top;
                        let right: number = bbEmbed(window).width() - (positionX + 350);
                        if (right < 0) {
                            right = bbEmbed(window).width() - (positionX - (bbEmbed(window).width() < 450 ? 0 : 75));
                            if (bbEmbed(window).width() < 375) {
                                right = 0;
                            }
                        }
                        that.commentsArgs['Comments'] = result.Comments;
                        that.commentsArgs['Position'] = { 'top': positionY + 20, 'right': right + 40 };
                        that.commentsArgs['ActiveCommentsCount'] = result.ActiveCommentsCount;
                        that.commentsArgs['SortBy'] = 1;
                        that.commentsArgs['WidgetId'] = args.widgetId;
                        that.commentsArgs['DashboardId'] = args.dashboardId;
                        if (window[`${callBackFn}`] instanceof Function) {
                            window[`${callBackFn}`].call(that, that.commentsArgs);
                        } else {
                            callBackFn.call(that, that.commentsArgs);
                        }
                    }
                }
            },
            error: function (jqXHR: {status: number, responseText: string}): any { that.ajaxErrorFnc(jqXHR); }

        });
    }


    /**
     * @param {object} arg - It is an object that holds 'content' - Defines the comment you want to add, 'dashboardId" -Defines the unique id of the dashboard,"parentCommentId" Defines the comment Id of the comment for which the reply comment is to be added. It should be defined only when adding a reply to the dashboard comment. For other cases, it should be null,"multitabDashboardId"Defines the unique id of the multitab dashboard. It should be defined only when adding a multitab dashboard comment. For other cases, it should be null.
     * @param {string} arg.content - Defines the comment you want to add to the dashboard.
     * @param {string} arg.dashboardId - Define the unique id of the dashboard.
     * @param {string} arg.multitabDashboardId - Defines the unique id of the multitab dashboard
     * @param {string} arg.parentCommentId - Defines the comment Id of the comment for which the reply comment is to be added. It should be defined only when adding a reply to the Dashboard comment. For other cases, it should be null.
     * @param {string} callBackFn - It denotes the callback method name that must be defined. It would returns the updated comments as arguments.
     */
    addDashboardComment(arg: {content: string, dashboardId: string, multitabDashboardId?: string, parentCommentId?: string  }, callBackFn: Function): any {
        const that: BoldBI = this;
        const regex: any = /^(?:\{{0,1}(?:[0-9a-fA-F]){8}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){12}\}{0,1})$/;
        const isGuidDbrd: any = regex.exec(arg.dashboardId);
        const isGuidMultiDbrd: any = arg.multitabDashboardId ? (regex.exec(arg.multitabDashboardId) ? true : false) : true;
        const isReplyCmtId: any = arg.parentCommentId ? (Number(arg.parentCommentId) ? true : false) : true;
        if (isGuidDbrd && isGuidMultiDbrd && isReplyCmtId && !this._isEmptyOrSpaces(arg.content)) {
            const isoStr: any = new Date().toISOString();
            const data: any = {
                'ItemType': 'dashboard',
                'Comment': arg.content,
                'ItemId': arg.dashboardId,
                'ParentId': arg.parentCommentId,
                'ParentItemId': arg.multitabDashboardId,
                'CommentAction': 0, //To add comment in server
                'CurrentDate': isoStr, // Current time
                'Url': this.dashboardUrl
            };
            bbEmbed.ajax({
                async: false,
                type: 'POST',
                url: this.dashboardServerApiUrl + '/comments/operation',
                headers: {
                    'Authorization': 'bearer ' + this.accessToken
                },
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (result: {Status: boolean}): any {
                    if (result.Status) {
                        that.getComments('dashboard', arg, callBackFn);
                    }
                },
                error: function (jqXHR: {status: number, responseText: string}): any { that.ajaxErrorFnc(jqXHR); }
            });
        }
        else {
            if (!isGuidDbrd || !isGuidMultiDbrd) {
                console.error('Please provide valid dashboard ID.');
            }
            else if (!isReplyCmtId) {
                console.error('Please provide a valid reply comment Id.');
            }
            else if (this._isEmptyOrSpaces(arg.content)) {
                console.error('Please provide valid comment text.');
            }
        }
    }

    /**
     * @param {object} arg - It is an object that holds 'content' - Defines the comment you want to add,'widgetId' - Defines the unique id of the widget,"dashboardId" -Defines the unique id of the dashboard,"parentCommentId" - Defines the comment Id of the comment for which the reply comment is to be added. It should be defined only when adding a reply to the widget comment. For other cases, it should be null,"multitabDashboardId"- Defines the unique id of the multitab dashboard. It should be defined only when adding a multitab widget comment. For other cases, it should be null.
     * @param {string} arg.content - Defines the comment you want to add to the Widget.
     * @param {string} arg.widgetId - Defines the unique id of the widget
     * @param {string} arg.dashboardId - Defines the unique id of the dashboard
     * @param {string} arg.parentCommentId - Defines the comment Id of the comment for which the reply comment is to be added. It should be defined only when adding a reply to the widget comment. For other cases, it should be null.
     * @param {string} arg.multitabDashboardId - Defines the unique id of the multitab dashboard. It should be defined only when adding a multitab widget comment. For other cases, it should be null.
     * @param {string} callBackFn -  It denotes the callback method name that must be defined. It would returns the updated comments as arguments.
     */
    addWidgetComment(arg: {content: string, widgetId: string,  dashboardId: string, multitabDashboardId?: string, parentCommentId?: string }, callBackFn: Function): any {
        const that: BoldBI = this;
        const regex: any = /^(?:\{{0,1}(?:[0-9a-fA-F]){8}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){12}\}{0,1})$/;
        const isGuidDbrd: any = regex.exec(arg.dashboardId);
        const isGuidWidget: any = regex.exec(arg.widgetId);
        const isGuidMultiDbrd: any = arg.multitabDashboardId ? (regex.exec(arg.multitabDashboardId) ? true : false) : true;
        const isReplyCmtId: any = arg.parentCommentId ? (Number(arg.parentCommentId) ? true : false) : true;
        if (isGuidWidget && isGuidDbrd && isGuidMultiDbrd && isReplyCmtId && !this._isEmptyOrSpaces(arg.content)) {
            const isoStr: any = new Date().toISOString();
            const data: any = {
                'ItemType': 'widget',
                'Comment': arg.content,
                'ItemId': arg.widgetId,
                'DashboardItemId': arg.dashboardId,
                'ParentId': arg.parentCommentId,
                'ParentItemId': arg.multitabDashboardId,
                'CommentAction': 0, // To add comment in server
                'CurrentDate': isoStr, // Current time
                'Url': this.dashboardUrl

            };
            bbEmbed.ajax({
                async: false,
                type: 'POST',
                url: this.dashboardServerApiUrl + '/comments/operation',
                headers: {
                    'Authorization': 'bearer ' + this.accessToken
                },
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (result: {Status: boolean}): any {
                    if (result.Status) {
                        that.getComments('widget', arg, callBackFn);
                    }
                },
                error: function (jqXHR: {status: number, responseText: string}): any { that.ajaxErrorFnc(jqXHR); }
            });
        }
        else {
            if (!isGuidDbrd || !isGuidMultiDbrd || !isGuidWidget) {
                console.error('Please provide valid dashboard or widget ID.');
            }
            else if (!isReplyCmtId) {
                console.error('Please provide a valid reply comment Id.');
            }
            else if (this._isEmptyOrSpaces(arg.content)) {
                console.error('Please provide valid comment text.');
            }
        }
    }

    /**
     * @param {object} arg - It is an object that holds "commentId" - Defines the comment Id of the comment you want to delete,"dashboardId" - Defines the unique dashboard Id,"multitabDashboardId" - Defines the unique id of the multitab dashboard. It should be defined only when deleting a multitab dashboard comment. For other cases, it should be null.
     * @param {string} arg.commentId - Defines the comment Id of the comment you want to delete in the dashboard.
     * @param {string} arg.dashboardId - Defines the unique dashboard Id
     * @param {string} arg.multitabDashboardId - Defines the unique id of the multitab dashboard
     * @param {string} callBackFn - It denotes the callback method name that must be defined. It would returns the updated comments as arguments.
     */
    deleteDashboardComment(arg: {dashboardId: string, multitabDashboardId?: string, commentId: string }, callBackFn: Function): any {
        const that: BoldBI = this;
        const regex: any = /^(?:\{{0,1}(?:[0-9a-fA-F]){8}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){12}\}{0,1})$/;
        const isGuidDbrd: any = regex.exec(arg.dashboardId);
        const isGuidMultiDbrd: any = arg.multitabDashboardId ? (regex.exec(arg.multitabDashboardId) ? true : false) : true;
        if (isGuidDbrd && isGuidMultiDbrd && !this._isEmptyOrSpaces(arg.commentId)) {
            const isoStr: any = new Date().toISOString();
            const data: any = {
                'ItemType': 'dashboard',
                'CommentId': arg.commentId,
                'ItemId': arg.dashboardId,
                'ParentItemId': arg.multitabDashboardId,
                'CommentAction': 2, // To delete comment in server
                'CurrentDate': isoStr, // Current time
                'Url': this.dashboardUrl

            };
            bbEmbed.ajax({
                async: false,
                type: 'POST',
                url: this.dashboardServerApiUrl + '/comments/operation',
                headers: {
                    'Authorization': 'bearer ' + this.accessToken
                },
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (result: {Status: boolean}): any {
                    if (result.Status) {
                        that.getComments('dashboard', arg, callBackFn);
                    }
                },
                error: function (jqXHR: {status: number, responseText: string}): any { that.ajaxErrorFnc(jqXHR); }
            });
        }
        else {
            if (!isGuidDbrd || !isGuidMultiDbrd) {
                console.error('Please provide valid dashboard ID.');
            }
            else if (this._isEmptyOrSpaces(arg.commentId)) {
                console.error('Please provide a valid comment Id.');
            }
        }
    }
    /**
     * @param {object} arg - It is an object that holds "commentId" - It defines the comment Id of the comment that you want to delete,"widgetId" -Defines the unique widget Id,"dashboardId" -Defines the unique id of the dashboard,"multitabDashboardId" - Defines the unique id of the multitab dashboard. It should be defined only when deleting a multitab widget comment. For other cases, it should be null.
     * @param {string} arg.commentId - It defines the comment Id of the comment that you want to delete in the widget
     * @param {string} arg.widgetId - Defines the unique widget Id
     * @param {string} arg.dashboardId - Defines the unique id of the dashboard
     * @param {string} arg.multitabDashboardId - Defines the unique id of the multitab dashboard
     * @param {string} callBackFn -  It denotes the callback method name that must be defined. It would returns the updated comments as arguments.
     */
    deleteWidgetComment(arg: {widgetId: string,  dashboardId: string, multitabDashboardId?: string, commentId: string}, callBackFn: Function): any {
        const that: BoldBI = this;
        const regex: any = /^(?:\{{0,1}(?:[0-9a-fA-F]){8}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){12}\}{0,1})$/;
        const isGuidDbrd: any = regex.exec(arg.dashboardId);
        const isGuidWidget: any = regex.exec(arg.widgetId);
        const isGuidMultiDbrd: any = arg.multitabDashboardId ? (regex.exec(arg.multitabDashboardId) ? true : false) : true;
        if (isGuidWidget && isGuidDbrd && isGuidMultiDbrd && !this._isEmptyOrSpaces(arg.commentId)) {
            const isoStr: any = new Date().toISOString();
            const data: any = {
                'ItemType': 'widget',
                'CommentId': arg.commentId,
                'ItemId': arg.widgetId,
                'DashboardItemId': arg.dashboardId,
                'ParentItemId': arg.multitabDashboardId,
                'CommentAction': 2, // To delete comment in server
                'CurrentDate': isoStr, // Current time
                'Url': this.dashboardUrl

            };
            bbEmbed.ajax({
                async: false,
                type: 'POST',
                url: this.dashboardServerApiUrl + '/comments/operation',
                headers: {
                    'Authorization': 'bearer ' + this.accessToken
                },
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (result: {Status: boolean}): any {
                    if (result.Status) {
                        that.getComments('widget', arg, callBackFn);
                    }
                },
                error: function (jqXHR: {status: number, responseText: string}): any { that.ajaxErrorFnc(jqXHR); }
            });
        }
        else {
            if (!isGuidDbrd || !isGuidMultiDbrd || !isGuidWidget) {
                console.error('Please provide valid dashboard or widget ID.');
            }
            else if (this._isEmptyOrSpaces(arg.commentId)) {
                console.error('Please provide a valid comment Id.');
            }
        }
    }

    /**
     * @param {object} arg - It is an object that holds "content" - Defines the comment you have edited,"commentId" - Defines the comment Id of the comment you have edited,"dashboardId" - Defines the unique dashboard Id,"multitabDashboardId" - Defines the unique id of the multitab dashboard. It should be defined only when editing a multitab widget comment. For other cases, it should be null.
     * @param {string} arg.content - Defines the comment you have to edited in the dashboard
     * @param {string} arg.commentId - Defines the comment Id of the comment you have to edit
     * @param {string} arg.dashboardId - Defines the unique id of the dashboard
     * @param {string} arg.multitabDashboardId - Defines the unique id of the multitab dashboard
     * @param {string} callBackFn -  It denotes the callback method name that must be defined. It would returns the updated comments as arguments.
     */
    editDashboardComment(arg: {content: string, dashboardId: string, multitabDashboardId?: string, commentId: string  }, callBackFn: Function): any {
        const that: BoldBI = this;
        const regex: any = /^(?:\{{0,1}(?:[0-9a-fA-F]){8}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){12}\}{0,1})$/;
        const isGuidDbrd: any = regex.exec(arg.dashboardId);
        const isGuidMultiDbrd: any = arg.multitabDashboardId ? (regex.exec(arg.multitabDashboardId) ? true : false) : true;
        if (isGuidDbrd && isGuidMultiDbrd && !this._isEmptyOrSpaces(arg.content) && !this._isEmptyOrSpaces(arg.commentId)) {
            const isoStr: any = new Date().toISOString();
            const data: any = {
                'ItemType': 'dashboard',
                'Comment': arg.content,
                'CommentId': arg.commentId,
                'ItemId': arg.dashboardId,
                'ParentItemId': arg.multitabDashboardId,
                'CommentAction': 1, // To edit comment in server
                'CurrentDate': isoStr, // Current time
                'Url': this.dashboardUrl

            };
            bbEmbed.ajax({
                async: false,
                type: 'POST',
                url: this.dashboardServerApiUrl + '/comments/operation',
                headers: {
                    'Authorization': 'bearer ' + this.accessToken
                },
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (result: {Status: boolean}): any {
                    if (result.Status) {
                        that.getComments('dashboard', arg, callBackFn);
                    }
                },
                error: function (jqXHR: {status: number, responseText: string}): any { that.ajaxErrorFnc(jqXHR); }
            });
        }
        else {
            if (!isGuidDbrd || !isGuidMultiDbrd) {
                console.error('Please provide valid dashboard ID.');
            }
            else if (this._isEmptyOrSpaces(arg.commentId)) {
                console.error('Please provide a valid comment Id.');
            }
            else if (this._isEmptyOrSpaces(arg.content)) {
                console.error('Please provide valid comment text.');
            }
        }
    }

    /**
     * @param {object} arg - It is an object that holds,"content" - Defines the comment you have edited,"commentId" - Defines the comment Id of the comment you have edited,"widgetId" - Defines the unique widget Id,"dashboardId" - Defines the unique id of the dashboard,"multitabDashboardId" - Defines the unique id of the multitab dashboard. It should be defined only when editing a multitab dashboard comment or widget comment. For other cases, it should be null.
     * @param {string} arg.content - Defines the comment you have edited
     * @param {string} arg.commentId - Defines the comment Id of the comment you have edited
     * @param {string} arg.widgetId - Defines the unique widget Id
     * @param {string} arg.dashboardId - Defines the unique id of the dashboard
     * @param {string} arg.multitabDashboardId - Defines the unique id of the multitab dashboard
     * @param {string} callBackFn - It denotes the callback method name that must be defined. It would returns the updated comments as arguments.
     */
    editWidgetComment(arg: {content: string, widgetId: string,  dashboardId: string, multitabDashboardId?: string, commentId: string  }, callBackFn: Function): any {
        const that: BoldBI = this;
        const regex: any = /^(?:\{{0,1}(?:[0-9a-fA-F]){8}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){12}\}{0,1})$/;
        const isGuidDbrd: any = regex.exec(arg.dashboardId);
        const isGuidWidget: any = regex.exec(arg.widgetId);
        const isGuidMultiDbrd: any = arg.multitabDashboardId ? (regex.exec(arg.multitabDashboardId) ? true : false) : true;
        if (isGuidWidget && isGuidDbrd && isGuidMultiDbrd && !this._isEmptyOrSpaces(arg.content) && !this._isEmptyOrSpaces(arg.commentId)) {
            const isoStr: any = new Date().toISOString();
            const data: any = {
                'ItemType': 'widget',
                'Comment': arg.content,
                'CommentId': arg.commentId,
                'ItemId': arg.widgetId,
                'DashboardItemId': arg.dashboardId,
                'ParentItemId': arg.multitabDashboardId,
                'CommentAction': 1, // To edit comment in server
                'CurrentDate': isoStr, // Current time
                'Url': this.dashboardUrl

            };
            bbEmbed.ajax({
                async: false,
                type: 'POST',
                url: this.dashboardServerApiUrl + '/comments/operation',
                headers: {
                    'Authorization': 'bearer ' + this.accessToken
                },
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (result: {Status: boolean, StatusMessage: string}): any {
                    if (result.Status) {
                        that.commentsArgs['StatusMessage'] = result.StatusMessage;
                        that.getComments('widget', arg, callBackFn);
                    }
                },
                error: function (jqXHR: {status: number, responseText: string}): any { that.ajaxErrorFnc(jqXHR); }
            });
        }
        else {
            if (!isGuidDbrd || !isGuidMultiDbrd || !isGuidWidget) {
                console.error('Please provide valid dashboard or widget ID.');
            }
            else if (this._isEmptyOrSpaces(arg.commentId)) {
                console.error('Please provide a valid comment Id.');
            }
            else if (this._isEmptyOrSpaces(arg.content)) {
                console.error('Please provide valid comment text.');
            }
        }
    }

    ajaxErrorFnc(jqXHR: {status: number, responseText: string}): any {
        let msg: any = '';
        if (jqXHR.status == 0) {
            msg = 'Not connected. Please check the network.';
        } else if (jqXHR.status == 404) {
            msg = 'The requested page was not found (404).';
        } else if (jqXHR.status == 500) {
            msg = 'There is an Internal Server Error (500).';
        } else {
            msg = 'Uncaught Error occurred.' + jqXHR.responseText;
        }
        console.error(msg);
    }

    setDefaultTheme(bgColor: string, textColor: string, iconColor: string): any {
        bbEmbed('.e-tab-header.e-control.e-toolbar.e-lib.e-keyboard').css('color', iconColor);
        bbEmbed('.e-toolbar-item .e-tab-text').css('color', textColor);
        bbEmbed('.e-toolbar-item.e-active .e-tab-text').addClass('active-font-color');
        bbEmbed('.multitab-dbrd').css('background', bgColor);
        bbEmbed('.e-items.e-toolbar-items.e-lib.e-hscroll.e-control.e-touch .e-nav-arrow').css('color', iconColor);
    }

    _switchFullscreenMode(arg: any): any {
        const embedElement: any = document.getElementById(arg.target.parent().attr('id').split('_embeddedbi')[0]);
        this.isFullscreen = false;
        if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
            if (embedElement.requestFullscreen) {
                embedElement.requestFullscreen();
            } else if (embedElement.msRequestFullscreen) {
                embedElement.msRequestFullscreen();
            } else if (embedElement.mozRequestFullScreen) {
                embedElement.mozRequestFullScreen();
            } else if (embedElement.webkitRequestFullscreen) {
                embedElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            } else {
                if ('ActiveXObject' in window) {
                    const wscript: any = new ActiveXObject('Wscript.shell');
                    wscript.SendKeys('{F11}');
                    setTimeout(function (): any {
                        if ((screen.availHeight || screen.height - 30) <= window.innerHeight) {
                            bbEmbed('<style id="embed-fullscreen" type="text/css"> .hide-dashboard-icons #dashboard-refresh {  display: block !important; } .hide-dashboard-icons ul.options, .hide-dashboard-icons .su-pin, .hide-dashboard-icons .su-edit, .hide-dashboard-icons .bbi-dbrd-banner-link, .hide-dashboard-icons .bbi-dbrd-banner-menu, .hide-dashboard-icons .bbi-dbrd-banner-text-icon, .hide-dashboard-icons .bbi-dbrd-banner-widget-withoutcomments, .hide-dashboard-icons .bbi-dbrd-banner-widget-withcomments, .hide-dashboard-icons .bbi-dbrd-control-menu, .hide-dashboard-icons .e-dashboard-banner-menu, .hide-dashboard-icons .e-dashboard-banner-link, .hide-dashboard-icons .su-icon, .hide-dashboard-icons .bbi-dbrd-control-menu-icon, .hide-dashboard-icons .e-dashboard-banner-icon:not(#dashboard-fullscreen):not(#dashboard-refresh):not(#pinboard-fullscreen), .hide-dashboard-icons .e-dashboard-banner-description, .hide-dashboard-icons .server-banner-icon + .e-banner-verticalsplitline, .hide-dashboard-icons #dashboard_bannerPanel div a + .e-banner-verticalsplitline, .hide-dashboard-icons .bbi-dashboard-widget-menu { display: none !important; } .hide-dashboard-icons #dashboard { width: 100% !important; } .hide-embed-dashboard-icons .bbi-dbrd-banner-link, .hide-embed-dashboard-icons .bbi-dbrd-banner-menu, .hide-embed-dashboard-icons .bbi-dbrd-banner-text-icon, .hide-embed-dashboard-icons .bbi-dbrd-banner-widget-withoutcomments, .hide-embed-dashboard-icons .bbi-dbrd-banner-widget-withcomments, .hide-embed-dashboard-icons .bbi-dbrd-control-menu, .hide-embed-dashboard-icons .e-dashboard-banner-menu, .hide-embed-dashboard-icons .e-dashboard-banner-link, .hide-embed-dashboard-icons .e-dashboard-banner-icon:not(#dashboard-fullscreen):not(#dashboard-refresh):not(#dashboard_otheroption):not(#dashboard-view):not(#dashboard-comment):not(#dashboard_dashboardmenu), .hide-embed-dashboard-icons #dashboard_bannerPanel div a + .e-banner-verticalsplitline, .hide-embed-dashboard-icons .saved-view .su.cursor-pointer { display: none !important; } </style>').appendTo('head');
                            bbEmbed('body').addClass('hide-dashboard-icons');
                            bbEmbed('#dashboard-fullscreen').removeClass('su-maximize-1').addClass('su-minimize').attr('data-tooltip', 'Exit Fullscreen');
                        } else {
                            bbEmbed('#embed-fullscreen').remove();
                            bbEmbed('body').removeClass('hide-dashboard-icons');
                            if (this.isMultiTab) {
                                bbEmbed('#' + this.embedOptions.embedContainerId).find('.multitab-dbrd').css('width', this.embedOptions.width);
                            }
                            bbEmbed('#dashboard-fullscreen').addClass('su-maximize-1').removeClass('su-minimize').attr('data-tooltip', 'Fullscreen');
                        }
                    }, 400);
                }
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }

    _fullscreenExitHandler(boldBIObj: {isMultiTab?: boolean, embedOptions?: any}): any {
        if (!document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
            bbEmbed('#embed-fullscreen').remove();
            bbEmbed('body').removeClass('hide-dashboard-icons');
            if (boldBIObj.isMultiTab) {
                bbEmbed('#' + boldBIObj.embedOptions.embedContainerId).find('.multitab-dbrd').css('width', '100%');
                bbEmbed('#' + boldBIObj.embedOptions.embedContainerId).find('.multitab-dbrd .e-content .e-active').find('#dashboard-fullscreen').addClass('su-maximize-1').removeClass('su-minimize').attr('data-tooltip', 'Fullscreen');
            } else {
                bbEmbed('#dashboard-fullscreen').addClass('su-maximize-1').removeClass('su-minimize').attr('data-tooltip', 'Fullscreen');
            }
            bbEmbed('#pinboard-fullscreen').addClass('su-maximize-1').removeClass('su-minimize').attr('data-tooltip', 'Fullscreen');
            bbEmbed('#server-app-container').attr('style', 'background-color: #f9f9f9; height:' + bbEmbed('#content-area').height() + 'px;overflow: hidden !important;min-height: 600px; width:' + boldBIObj.embedOptions.width + '');
        } else {
            this.isFullscreen = true;
            const displayVal: any = (this.embedOptions.dashboardSettings.showRefresh != false) ? 'block !important' : 'none !important';
            bbEmbed('<style id="embed-fullscreen" type="text/css"> .hide-dashboard-icons #dashboard-refresh { display:' + displayVal + '; } .hide-dashboard-icons ul.options, .hide-dashboard-icons .su-pin, .hide-dashboard-icons .su-edit, .hide-dashboard-icons .bbi-dbrd-banner-link, .hide-dashboard-icons .bbi-dbrd-banner-menu, .hide-dashboard-icons .bbi-dbrd-banner-text-icon, .hide-dashboard-icons .bbi-dbrd-banner-widget-withoutcomments, .hide-dashboard-icons .bbi-dbrd-banner-widget-withcomments, .hide-dashboard-icons .bbi-dbrd-control-menu, .hide-dashboard-icons .e-dashboard-banner-menu, .hide-dashboard-icons .e-dashboard-banner-link, .hide-dashboard-icons .su-icon, .hide-dashboard-icons .bbi-dbrd-control-menu-icon, .hide-dashboard-icons .e-dashboard-banner-icon:not(#dashboard-fullscreen):not(#dashboard-refresh):not(#pinboard-fullscreen), .hide-dashboard-icons .e-dashboard-banner-description, .hide-dashboard-icons .server-banner-icon + .e-banner-verticalsplitline, .hide-dashboard-icons #dashboard_bannerPanel div a + .e-banner-verticalsplitline, .hide-dashboard-icons .bbi-dashboard-widget-menu { display: none !important; } .hide-dashboard-icons #dashboard { width: 100% !important; } .hide-embed-dashboard-icons .bbi-dbrd-banner-link, .hide-embed-dashboard-icons .bbi-dbrd-banner-menu, .hide-embed-dashboard-icons .bbi-dbrd-banner-text-icon, .hide-embed-dashboard-icons .bbi-dbrd-banner-widget-withoutcomments, .hide-embed-dashboard-icons .bbi-dbrd-banner-widget-withcomments, .hide-embed-dashboard-icons .bbi-dbrd-control-menu, .hide-embed-dashboard-icons .e-dashboard-banner-menu, .hide-embed-dashboard-icons .e-dashboard-banner-link, .hide-embed-dashboard-icons .e-dashboard-banner-icon:not(#dashboard-fullscreen):not(#dashboard-refresh):not(#dashboard_otheroption):not(#dashboard-view):not(#dashboard-comment):not(#dashboard_dashboardmenu), .hide-embed-dashboard-icons #dashboard_bannerPanel div a + .e-banner-verticalsplitline, .hide-embed-dashboard-icons .saved-view .su.cursor-pointer { display: none !important; } </style>').appendTo('head');
            bbEmbed('body').addClass('hide-dashboard-icons');
            if (boldBIObj.isMultiTab) {
                bbEmbed('#' + boldBIObj.embedOptions.embedContainerId).find('.multitab-dbrd .e-content .e-active').find('#dashboard-fullscreen').removeClass('su-maximize-1').addClass('su-minimize').attr('data-tooltip', 'Exit Fullscreen');
            } else {
                bbEmbed('#dashboard-fullscreen').removeClass('su-maximize-1').addClass('su-minimize').attr('data-tooltip', 'Exit Fullscreen');
            }
            bbEmbed('#pinboard-fullscreen').removeClass('su-maximize-1').addClass('su-minimize').attr('data-tooltip', 'Exit Fullscreen');
            bbEmbed('#server-app-container').attr('style', 'background-color: #f9f9f9; overflow: auto !important');
        }
    }

    _onBoldBIDashboardBeforeWidgetIconRendered(arg: {iconsinformation: any, widgetInformation: any}): any {
        if (this.embedOptions.widgetSettings.showMaximize == false) {
            arg.iconsinformation = this._arraySlice(arg.iconsinformation, 'name', 'maximize');
        }
        if (this.embedOptions.widgetSettings.showFilter == false) {
            arg.iconsinformation = this._arraySlice(arg.iconsinformation, 'name', 'filter');
        }
        if (this.embedOptions.widgetSettings.showExport == false || (this.embedOptions.exportSettings.showExcel == false &&  this.embedOptions.exportSettings.showImage == false && this.embedOptions.exportSettings.showPDF == false && this.embedOptions.exportSettings.showCSV == false)) {
            arg.iconsinformation = this._arraySlice(arg.iconsinformation, 'name', 'export');
            if (!this._isNullOrUndefined(arg.widgetInformation) &&
                !this._isNullOrUndefined(arg.widgetInformation.widgetJson) &&
                !this._isNullOrUndefined(arg.widgetInformation.widgetJson.ContainerSettings) &&
                !arg.widgetInformation.widgetJson.ContainerSettings.ViewData) {
                arg.iconsinformation = this._arraySlice(arg.iconsinformation, 'name', 'menu');
            }
        }
        if (this.embedOptions.widgetSettings.showMoreOption == false) {
            arg.iconsinformation = this._arraySlice(arg.iconsinformation, 'name', 'menu');
        }
        const serverFnc: any = window[this.beforeWidgetIconRenderedFn];
        if (serverFnc instanceof Function) {
            serverFnc.call(this, arg);
        }

        const clientFnc: any = window[this.embedOptions.widgetSettings.beforeIconRender];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.widgetSettings.beforeIconRender instanceof Function) {
            this.embedOptions.widgetSettings.beforeIconRender.call(this, arg);
        }
    }

    _onBoldBIBeforeControlMenuOpen(arg: {menuItems: Array<object>}): any {
        if (this.embedOptions.widgetSettings.showExport == false || (this.embedOptions.exportSettings.showExcel == false && this.embedOptions.exportSettings.showCSV == false && this.embedOptions.exportSettings.showImage == false && this.embedOptions.exportSettings.showPDF == false)) {
            arg.menuItems = this._arraySlice(arg.menuItems, 'id', 'export');
        }
        const clientFnc: any = window[this.embedOptions.widgetSettings.beforeWidgetControlMenuOpen];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.widgetSettings.beforeWidgetControlMenuOpen instanceof Function) {
            this.embedOptions.widgetSettings.beforeWidgetControlMenuOpen.call(this, arg);
        }
    }

    _onBoldBIBeforeDashboardMobileMenuOpen(arg: {menuItems: any}): any {
        if (this.embedOptions.dashboardSettings.showDashboardParameter == false || this.embedOptions.dashboardSettings.showRefresh == false || this.embedOptions.dashboardSettings.showExport == false) {
            for (let i: number = arg.menuItems.length - 1; i >= 0; i--) {
                if ((this.embedOptions.dashboardSettings.showDashboardParameter == false && arg.menuItems[`${i}`].id == 'dashboardparameters') || (this.embedOptions.dashboardSettings.showRefresh == false && arg.menuItems[`${i}`].id == 'refreshDashboard') || (this.embedOptions.dashboardSettings.showExport == false && arg.menuItems[`${i}`].id == 'export')) {
                    arg.menuItems.splice(i, 1);
                }
            }
        }
        const clientFnc: any = window[this.embedOptions.beforeDashboardMobileMenuOpen];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.beforeDashboardMobileMenuOpen instanceof Function) {
            this.embedOptions.beforeDashboardMobileMenuOpen.call(this, arg);
        }
    }

    _onBoldBIAjaxBeforeLoad(arg: object): any {
        const clientFnc: any = window[this.embedOptions.ajaxBeforeLoad];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.ajaxBeforeLoad instanceof Function) {
            this.embedOptions.ajaxBeforeLoad.call(this, arg);
        }
    }

    _onBoldBIbeforeDesignerToolbarButtonsRendered(arg: object): any {
        const clientFnc: any = window[this.embedOptions.dashboardSettings.beforeDesignerToolbarButtons];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.dashboardSettings.beforeDesignerToolbarButtons instanceof Function) {
            this.embedOptions.dashboardSettings.beforeDesignerToolbarButtons.call(this, arg);
        }
    }

    _onBoldBIbeforeDatasourceToolbarButtonsRendered(arg: {toolbarButtons: any}): any {
        for (let i: number = arg.toolbarButtons.length - 1; i >= 0; i--) {
            // For Datasource Edit Mode.
            if (!this.isNewConnection && this.embedOptions.mode != BoldBI.Mode.Design) {
                if (arg.toolbarButtons[`${i}`].elementId == this.embedOptions.embedContainerId + '_embeddedbi_continue_dashboard_button' || arg.toolbarButtons[`${i}`].elementId == this.embedOptions.embedContainerId + '_embeddedbi_cancelButton') {
                    arg.toolbarButtons.splice(i, 1);
                }
            } else { // For Datasource Connection Mode.
                if (arg.toolbarButtons[`${i}`].elementId == this.embedOptions.embedContainerId + '_embeddedbi_continue_dashboard_button') {
                    arg.toolbarButtons.splice(i, 1);
                }
            }
        }
        this.isNewConnection = false;
        const clientFnc: any = window[this.embedOptions.dashboardSettings.beforeDatasourceToolbarButtonsRendered];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.dashboardSettings.beforeDatasourceToolbarButtonsRendered instanceof Function) {
            this.embedOptions.dashboardSettings.beforeDatasourceToolbarButtonsRendered.call(this, arg);
        }
    }

    _onBoldBIbeforeDatasourceToolbarIconsRendered(arg: object): any {
        const clientFnc: any = window[this.embedOptions.dashboardSettings.beforeDatasourceToolbarIconsRendered];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.dashboardSettings.beforeDatasourceToolbarIconsRendered instanceof Function) {
            this.embedOptions.dashboardSettings.beforeDatasourceToolbarIconsRendered.call(this, arg);
        }
    }

    _onBoldBIbeforeDesignerToolbarIconsRendered(arg: object): any {
        const clientFnc: any = window[this.embedOptions.dashboardSettings.beforeDesignerToolbarIconsRendered];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.dashboardSettings.beforeDesignerToolbarIconsRendered instanceof Function) {
            this.embedOptions.dashboardSettings.beforeDesignerToolbarIconsRendered.call(this, arg);
        }
    }

    _onBoldBItoolbarClick(arg: object): any {
        const clientFnc: any = window[this.embedOptions.dashboardSettings.toolbarClick];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.dashboardSettings.toolbarClick instanceof Function) {
            this.embedOptions.dashboardSettings.toolbarClick.call(this, arg);
        }
    }

    _onBoldBIbeforeWidgetItemsListed(arg: object): any {
        const clientFnc: any = window[this.embedOptions.widgetSettings.beforeWidgetItemsListed];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.widgetSettings.beforeWidgetItemsListed instanceof Function) {
            this.embedOptions.widgetSettings.beforeWidgetItemsListed.call(this, arg);
        }
    }

    _onBoldBIDashboardWidgetIconClick(arg: object): any {
        const serverFnc: any = window[this.onWidgetIconClickFn];
        if (serverFnc instanceof Function) {
            serverFnc.call(this, arg);
        }

        const clientFnc: any = window[this.embedOptions.widgetSettings.onIconClick];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.widgetSettings.onIconClick instanceof Function) {
            this.embedOptions.widgetSettings.onIconClick.call(this, arg);
        }
    }

    _onBoldBIonControlMenuClick(arg: object): any {
        const clientFnc: any = window[this.embedOptions.widgetSettings.onWidgetControlMenuClick];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.widgetSettings.onWidgetControlMenuClick instanceof Function) {
            this.embedOptions.widgetSettings.onWidgetControlMenuClick.call(this, arg);
        }
    }

    _onBoldBIDashboardUpdatefavorite(arg: object): any {
        const serverFnc: any = window[this.onFavoriteStateChangeFn];
        if (serverFnc instanceof Function) {
            serverFnc.call(this, arg);
        }
        const clientFnc: any = window[this.embedOptions.dashboardSettings.onFavoriteIconClick];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.dashboardSettings.onFavoriteIconClick instanceof Function) {
            this.embedOptions.dashboardSettings.onFavoriteIconClick.call(this, arg);
        }
    }

    _onBoldBIWidgetExportRender(arg: {iconsinformation?: any, exportOptionCollection?: any }): any {
        if (this.embedOptions.exportSettings.showExcel == false) {
            arg.iconsinformation = this._arraySlice(arg.exportOptionCollection, 'id', 'excel');
        }
        if (this.embedOptions.exportSettings.showImage == false) {
            arg.iconsinformation = this._arraySlice(arg.exportOptionCollection, 'id', 'image');
        }
        if (this.embedOptions.exportSettings.showPDF == false) {
            arg.iconsinformation = this._arraySlice(arg.exportOptionCollection, 'id', 'pdf');
        }
        if (this.embedOptions.exportSettings.showCSV == false) {
            arg.iconsinformation = this._arraySlice(arg.exportOptionCollection, 'id', 'csv');
        }
    }

    _onBoldBIBeforeNavigateUrlLinking(arg: object): any {
        const clientFnc: any = window[this.embedOptions.beforeNavigateUrlLinking];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.beforeNavigateUrlLinking instanceof Function) {
            this.embedOptions.beforeNavigateUrlLinking.call(this, arg);
        }
    }

    _onBoldBIBeforeNavigateToDashboard(arg: object): any {
        const clientFnc: any = window[this.embedOptions.beforeNavigateToDashboard];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.beforeNavigateToDashboard instanceof Function) {
            this.embedOptions.beforeNavigateToDashboard.call(this, arg);
        }
    }

    _onBoldBIAuthorizionComplete(arg: object): any {
        const clientFnc: any = window[this.embedOptions.authorizationServer.authorizionComplete];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.authorizationServer.authorizionComplete instanceof Function) {
            this.embedOptions.authorizationServer.authorizionComplete.call(this, arg);
        }
    }

    _showLoader(): any {
        const loaderStyle: any = document.createElement('style');
        loaderStyle.innerHTML = '#' + this.embedOptions.embedContainerId + ' .viewer-blue-loader { display: block !important; }	' +
            ' #' + this.embedOptions.embedContainerId + ' .loader-icon { display: block; }' +
            ' #' + this.embedOptions.embedContainerId + ' .loader-icon { left: 0px !important; position: relative; margin: 0px auto; width: 54px; height: 54px; }' +
            ' #' + this.embedOptions.embedContainerId + ' .loader-icon .circular { -webkit-animation: rotate 2s linear infinite; animation: rotate 2s linear infinite; height: 54px; width: 54px; position: relative; }' +
            ' #' + this.embedOptions.embedContainerId + ' .loader-icon .path { stroke-dasharray: 1,200; stroke-dashoffset: 0; -webkit-animation: dash 1.5s ease-in-out infinite; animation: dash 1.5s ease-in-out infinite; stroke: #5592FB; stroke-linecap: square; }' +
            ' @keyframes rotate { 100% { transform: rotate(360deg); } }' +
            ' @-webkit-keyframes rotate { 100% { transform: rotate(360deg); } }' +
            ' @keyframes dash { 0% { stroke-dasharray: 1,200; stroke-dashoffset: 0; } 50% { stroke-dasharray: 89,200; stroke-dashoffset: -35; } 100% { stroke-dasharray: 89,200; stroke-dashoffset: -124; } }' +
            ' @-webkit-keyframes dash { 0% { stroke-dasharray: 1,200; stroke-dashoffset: 0; } 50% { stroke-dasharray: 89,200; stroke-dashoffset: -35; } 100% { stroke-dasharray: 89,200; stroke-dashoffset: -124; } }';

        document.head.appendChild(loaderStyle);

        const loader: any = '<div class="preloader-wrap viewer-blue-loader" style="display: none; width: ' + this.embedOptions.width + ';height: ' + this.embedOptions.height + '; top: 0; bottom: 0; z-index : 2;"> <div id="loader_image" align="center" style="position:relative;top:45%;"> <div class="loader-blue loader-icon" id="loader-icon"> <svg class="circular"> <circle class="path" cx="27" cy="27" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"></circle> </svg> </div> </div> </div>';
        this._removeElement('embedded-bi-error');
        document.getElementById(this.embedOptions.embedContainerId).insertAdjacentHTML('afterbegin', loader);
    }

    _getAuthorizationToken: any = this.Invoke(function(dashboardId?: string): any {
        const that: BoldBI = this;
        const embedDbrdId: any = dashboardId ? dashboardId : this.embedOptions.dashboardId;
        let embedQuerString: any = 'embed_nonce=' + this._uuidv4Generartor() +
            '&embed_dashboard_id=' + embedDbrdId +
            '&embed_dashboard_path=' + this.embedOptions.dashboardPath +
            '&pinboard_name=' + (this.pinBoardRendered ? this.embedOptions.pinboardName : '') +
            '&embed_mode=' + this.embedOptions.mode +
            '&embed_timestamp=' + Math.round((new Date()).getTime() / 1000) +
            '&embed_expirationtime=' + this.embedOptions.expirationTime;

        if (this.isWidgetMode) {
            if (this.isMultipleWidgetMode == false){
                embedQuerString = embedQuerString +
                '&embed_widget_isenabled=' + this.isWidgetMode +
                '&embed_widget_name=' + this.widgetName;
            }
            else{
                const multipleWidgetList: any = [];
                this.embedOptions.widgetList.forEach(function (widgetDetails: any): any {
                    multipleWidgetList.push(widgetDetails.widgetName.toLowerCase());
                });

                embedQuerString = embedQuerString +
                    '&embed_widget_isenabled=' + this.isWidgetMode +
                    '&embed_widget_list=' + multipleWidgetList;
            }
        }

        if (this.isMultiTab) {
            embedQuerString = embedQuerString +
                '&isMultiTab=' + this.isMultiTab;
        }

        if (!this._isEmptyOrSpaces(this.embedOptions.datasourceId)) {
            embedQuerString = embedQuerString +
                '&embed_datasource_id=' + this.embedOptions.datasourceId;
        }
        else if (!this._isEmptyOrSpaces(this.embedOptions.datasourceName)) {
            embedQuerString = embedQuerString +
                '&embed_datasource_name=' + this.embedOptions.datasourceName;
        }

        const data: any = {
            embedQuerString: encodeURI(embedQuerString),
            dashboardServerApiUrl: this.dashboardServerApiUrl
        };

        if (this.embedOptions.authorizationServer.url != '') {
            this._xhrRequestHelper('POST', this.embedOptions.authorizationServer.url, data, this.embedOptions.authorizationServer.headers, this._renderDashboard);
        } else if (!(this._isNullOrUndefined(this.embedOptions.authorizationServer.data)) && this.embedOptions.authorizationServer.data != '' && this.embedOptions.authorizationServer.url == '') {
            this._renderDashboard(this.embedOptions.authorizationServer.data);
        } else if ((this.embedOptions.authorizationServer.url == '' || this.embedOptions.authorizationServer.data == '') && this.embedOptions.mode == BoldBI.Mode.View && this._isEmptyOrSpaces(this.embedOptions.pinboardName)  && (this.embedOptions.dashboardId || this.embedOptions.dashboardPath) ) {
            bbEmbed.ajax({
                async: true,
                type: 'POST',
                url: this.dashboardServerApiUrl + this.embedAuthorizeEndPoint,
                data: JSON.stringify(embedQuerString),
                contentType: 'application/json',
                success: bbEmbed.proxy(that._renderDashboard, that)
            });
        }
        else {
            throw new Error('Access has been denied due to the AuthorizationServer is missing in the BoldBI.Create().');
        }
        this.pinBoardRendered = true;
    });

    _xhrRequestHelper(type: string, url: string, data: object, headers: object, callBackFn: Function): any {
        const that: BoldBI = this;
        const http: XMLHttpRequest = new XMLHttpRequest();

        http.open(type, url, true);
        http.responseType = 'json';
        http.setRequestHeader('Content-type', 'application/json');

        for (const key in headers) {
            if (Object.prototype.hasOwnProperty.call(headers, key)) {
                http.setRequestHeader(key, headers[`${key}`]);
            }
        }

        http.onreadystatechange = function () : any {
            if (http.readyState == 4 && http.status == 200) {
                callBackFn.call(that, typeof http.response == 'object' ? http.response : JSON.parse(http.response));
            }
            else if (http.readyState == 4 && http.status == 404) {
                that._throwError('Server not found');
            }
            else if (http.readyState == 4) {
                that._throwError(http.statusText);
            }
        };
        http.send(JSON.stringify(data));
    }

    _emptyHtml(elementID: string): any {
        document.getElementById(elementID).innerHTML = '';
    }

    _removeElement(id: string): any {
        const elem: any = document.getElementById(id);
        if (elem != null) {
            elem.parentNode.removeChild(elem);
        }
    }

    _uuidv4Generartor(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c: string): any {
            const r: any = Math.random() * 16 | 0;
            const v: any = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    _isEmptyOrSpaces(str: string): any {
        return typeof (str) == 'undefined' || str == null || str.match(/^ *$/) != null;
    }

    _isNullOrUndefined(value: string): any {
        return value == undefined || value == null;
    }

    _validateOptions: any = this.Invoke(function(options: {embedContainerId?: string , serverUrl?: string , pinboardName?: string , mode?: any , dashboardId?: string , dashboardPath?: string , environment?: any , datasourceId?: string , datasourceName?: string , onError?: any  }): any  {
        this.embedOptions.embedContainer = options.embedContainerId;
        if (!this._isNullOrUndefined(options.onError)) {
            this.embedOptions.onError = options.onError;
        }
        if (this._isEmptyOrSpaces(options.embedContainerId)) {
            this.invalidDetail = true;
            throw new Error ('Please provide the valid Embed container Id');
        }
        if (this._isEmptyOrSpaces(options.serverUrl)) {
            this.invalidDetail = true;
            throw new Error('Server URL cannot be empty');
        }
        if (!this._isUrl(options.serverUrl)) {
            this.invalidDetail = true;
            throw new Error('Please provide a valid Server URL');
        }
        if (options.environment != BoldBI.Environment.Enterprise && options.environment != BoldBI.Environment.Cloud) {
            this.invalidDetail = true;
            throw new Error(options.environment += ' is not valid environment. Please provide valid environment value.');
        }
        if (!this._isEmptyOrSpaces(options.pinboardName)) {
            return true;
        }
        if (options.mode == BoldBI.Mode.Connection) {
            return true;
        }
        if (this._isEmptyOrSpaces(options.dashboardId) && this._isEmptyOrSpaces(options.dashboardPath) && options.mode != BoldBI.Mode.Design && this._isEmptyOrSpaces(options.datasourceId) && this._isEmptyOrSpaces(options.datasourceName)) {
            if (options.mode != BoldBI.Mode.DataSource) {
                if (this._isEmptyOrSpaces(options.pinboardName) && !this._isNullOrUndefined(options.pinboardName)){
                    this.invalidDetail = true;
                    throw new Error('Pinboard name cannot be empty');
                }
                else {
                    this.invalidDetail = true;
                    throw new Error('Dashboard id or path cannot be empty');
                }
            } else {
                this.invalidDetail = true;
                throw new Error('Datasource id or name cannot be empty');
            }
        }
        return true;
    });

    _isUrl(str: string): any {
        let url: any;
        try {
            url = new URL(str);
        } catch (_) {
            return false;
        }
        return url.protocol == 'http:' || url.protocol == 'https:';
    }


    _throwError(errorMsg: string, embedContainerId?: string): any {
        embedContainerId = this._isEmptyOrSpaces(embedContainerId) ? this.embedOptions.embedContainerId : embedContainerId;
        if (embedContainerId) {
            this._removeElementsClass(embedContainerId, '.preloader-wrap', 'viewer-blue-loader');
            const errorMessage: string = '<div id="embedded-bi-error" style="display:table;height:100%;width:100%;"><div style="display: table-cell;vertical-align: middle;text-align: center;"><div style="display: inline-block;"><img src=' + this.errorImage + ' style="float: left"/><div style="float: left;margin-left: 10px;line-height: 20px;">BoldBI Embedded: ' + errorMsg + '</div></div>';
            document.getElementById(embedContainerId).innerHTML = errorMessage;
        } else {
            alert(errorMsg);
        }
        if (!this._isNullOrUndefined(this.embedOptions.onError) && this.embedOptions.onError != '') {
            const errormessage: any = new Error('BoldBI Embedded: ' + errorMsg);
            this.onErrorClient(errormessage);
        }
        else {
            throw new Error('BoldBI Embedded: ' + errorMsg);
        }
    }

    //The method uses to passes the client side error.
    onErrorClient(errorMessage: any): any {
        const errorDetail: any = {
            errorStatus: true,
            StatusMessage: errorMessage,
            StatusCode: 500
        };
        const clientFnc: any = window[this.embedOptions.onError];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, errorDetail);
        }
        if (this.embedOptions.onError instanceof Function) {
            this.embedOptions.onError.call(this, errorDetail);
        }
    }

    _removeElementsClass(id: string, childElement: string, targeClass: string): any {
        let nodeList: any = [];
        if (this._isEmptyOrSpaces(id)) {
            nodeList = document.querySelector(childElement);
        } else if (this._isEmptyOrSpaces(childElement)) {
            nodeList.push(document.getElementById(id));
        } else {
            nodeList = document.getElementById(id).querySelectorAll(childElement);
        }
        nodeList.forEach(function (element: string): any {
            this._removeClass(element, targeClass);
        }.bind(this));
    }

    _hasClass(el: {classList?: any, className?: any  }, className: string): any {
        if (el.classList) {
            return el.classList.contains(className);
        }
        const regex : any = RegExp;
        return !!el.className.match(new regex('(\\s|^)' + className + '(\\s|$)'));
    }

    _addClass(el: {classList?: any , className?: any  }, className: string): any {
        if (el.classList) {
            el.classList.add(className);
        }
        else if (!this._hasClass(el, className)) {
            el.className += ' ' + className;
        }
    }

    _removeClass(el: {classList?: any, className?: any }, className: string): any {
        if (el.classList) {
            el.classList.remove(className);
        }
        else if (this._hasClass(el, className)) {
            const regex : any = RegExp;
            const reg: any = new regex('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
    }

    _arraySlice(arr: Array<object>, key: string, value: string): any {

        arr.forEach(function (item: any, index: any, object: any): any {
            if (item[`${key}`] == value) {
                object.splice(index, 1);
            }
        }.bind(this));
        return arr;
    }

    _getFilterData(filterQuery: any): any {
        const processData: any = {masterData: []};
        const decryptfilterParam: any = decodeURI(filterQuery).
            replace(/~&~/g, String.fromCharCode(251) + String.fromCharCode(251)).
            replace(/~=~/g, String.fromCharCode(250) + String.fromCharCode(250)).
            replace(/~[?]~/g, String.fromCharCode(253) + String.fromCharCode(253)).
            replace(/~[/]~/g, String.fromCharCode(254) + String.fromCharCode(254)).
            replace(/&&/g, '&').
            replace(/&/g, '|,|').
            replace(/=/g, '|:|').
            replace(/~,~/g, String.fromCharCode(252) + String.fromCharCode(252));
        const splitFilterParamObj: any = decryptfilterParam.split('|,|');
        for (let index: any = 0; index < splitFilterParamObj.length; index++) {
            const splitFilterQuery: any = splitFilterParamObj[`${index}`].split('|:|');
            if (splitFilterQuery.length >= 2 && splitFilterQuery[0].trim().toUpperCase() == 'FILTERQUERY') {
                const filterValue: string = splitFilterQuery[1];
                const filterData: any = bbEmbed.parseJSON(filterValue);
                if (filterData != '' && filterData.length != 0) {
                    processData.masterData = this._lengthensSelectedFilterInfo(filterData);
                    this._unEscapeSelectedFilterDataforURLFilter(processData.masterData);
                }
                continue;
            }

        }
        return this._createFilterCollection(processData.masterData);
    }

    _createFilterCollection(masterdata: any): any {
        if (masterdata) {
            const collection: Array<object> = [];

            masterdata.forEach(function (filter: {ColumnName?: any, InitialDateFilter?: any, InitialMeasureFilter?: any, InitialDimensionFilter?: any, IsRange?: any}): any {
                let columnName: string = filter.ColumnName;
                let values: any = [];
                if (filter.InitialDateFilter.DisplayDateFilterList.length > 0) {
                    values = filter.InitialDateFilter.DisplayDateFilterList;
                    if (filter.IsRange) {
                        values = [values[0] + ' - ' + values[1]];
                    }
                }
                if (filter.InitialMeasureFilter.Values.length > 0) {
                    values = filter.InitialMeasureFilter.Values;
                }
                if (filter.InitialDimensionFilter.Text.length > 0) {
                    values = filter.InitialDimensionFilter.Text;
                    columnName = columnName + ' (' + filter.InitialDimensionFilter.DimesnionFilterCondition + ')';
                }
                if (filter.InitialDimensionFilter.Text.length > 0) {
                    values = filter.InitialDimensionFilter.Text;
                }
                collection.push({ 'ColumnName': columnName, 'Values': values });
            }.bind(this));
            return collection;
        }
    }

    _lengthensSelectedFilterInfo(shortenFilterInfoList: any): any {
        const unMinifiedList: any = [];
        const shortenListLen: any = shortenFilterInfoList.length;
        for (let index: any = 0; index < shortenListLen; index++) {
            const minObj: any = shortenFilterInfoList[`${index}`];
            const unMinifyObj: any = new SelectedFilterValue();
            if (this._hasValue(minObj, shortenEnum.UniqueColumnName)) {
                unMinifyObj[lengthenEnum.UniqueColumnName] = minObj[shortenEnum.UniqueColumnName];
            }
            if (this._hasValue(minObj, shortenEnum.ReportName)) {
                unMinifyObj[lengthenEnum.ReportName] = minObj[shortenEnum.ReportName];
            }
            if (this._hasValue(minObj, shortenEnum.IsStdDateTime)) {
                unMinifyObj[lengthenEnum.IsStdDateTime] = minObj[shortenEnum.IsStdDateTime];
            }
            if (this._hasValue(minObj, shortenEnum.IsRange)) {
                unMinifyObj[lengthenEnum.IsRange] = minObj[shortenEnum.IsRange];
            }
            if (this._hasValue(minObj, shortenEnum.IsGroupBarFilter)) {
                unMinifyObj[lengthenEnum.IsGroupBarFilter] = minObj[shortenEnum.IsGroupBarFilter];
            }
            if (this._hasValue(minObj, shortenEnum.IsMultiSelection)) {
                unMinifyObj[lengthenEnum.IsMultiSelection] = minObj[shortenEnum.IsMultiSelection];
            }
            if (this._hasValue(minObj, shortenEnum.ColumnName)) {
                unMinifyObj[lengthenEnum.ColumnName] = minObj[shortenEnum.ColumnName];
            }
            if (this._hasValue(minObj, shortenEnum.FieldId)) {
                unMinifyObj[lengthenEnum.FieldId] = minObj[shortenEnum.FieldId];
            }
            if (this._hasValue(minObj, shortenEnum.IsPoPWidget)) {
                unMinifyObj[lengthenEnum.IsPoPWidget] = minObj[shortenEnum.IsPoPWidget];
            }
            if (this._hasValue(minObj, shortenEnum.InitialDateFilter)) {
                if (this._hasValue(minObj[shortenEnum.InitialDateFilter], shortenEnum.DateFilterCondition)) {
                    unMinifyObj.InitialDateFilter[lengthenEnum.DateFilterCondition] =
                        minObj[shortenEnum.InitialDateFilter][shortenEnum.DateFilterCondition];
                }
                if (this._hasValue(minObj[shortenEnum.InitialDateFilter], shortenEnum.DateFilterList)) {
                    unMinifyObj.InitialDateFilter[lengthenEnum.DateFilterList] =
                        minObj[shortenEnum.InitialDateFilter][shortenEnum.DateFilterList];
                }
                if (this._hasValue(minObj[shortenEnum.InitialDateFilter], shortenEnum.DateFilterType)) {
                    unMinifyObj.InitialDateFilter[lengthenEnum.DateFilterType] =
                        minObj[shortenEnum.InitialDateFilter][shortenEnum.DateFilterType];
                }
                if (this._hasValue(minObj[shortenEnum.InitialDateFilter], shortenEnum.DisplayDateFilterList)) {
                    unMinifyObj.InitialDateFilter[lengthenEnum.DisplayDateFilterList] =
                        minObj[shortenEnum.InitialDateFilter][shortenEnum.DisplayDateFilterList];
                }
                if (this._hasValue(minObj[shortenEnum.InitialDateFilter], shortenEnum.DateFormat)) {
                    unMinifyObj.InitialDateFilter[lengthenEnum.DateFormat] =
                        minObj[shortenEnum.InitialDateFilter][shortenEnum.DateFormat];
                }
                if (this._hasValue(minObj[shortenEnum.InitialDateFilter], shortenEnum.SelectedRangeforRelativeFilter)) {
                    unMinifyObj.InitialDateFilter[lengthenEnum.SelectedRangeforRelativeFilter] =
                        minObj[shortenEnum.InitialDateFilter][shortenEnum.SelectedRangeforRelativeFilter];
                }
            }
            if (this._hasValue(minObj, shortenEnum.InitialDimensionFilter)) {
                if (this._hasValue(minObj[shortenEnum.InitialDimensionFilter], shortenEnum.DimesnionFilterCondition)) {
                    unMinifyObj.InitialDimensionFilter[lengthenEnum.DimesnionFilterCondition] =
                        minObj[shortenEnum.InitialDimensionFilter][shortenEnum.DimesnionFilterCondition];
                }
                if (this._hasValue(minObj[shortenEnum.InitialDimensionFilter], shortenEnum.Text)) {
                    unMinifyObj.InitialDimensionFilter[lengthenEnum.Text] = minObj[shortenEnum.InitialDimensionFilter][shortenEnum.Text];
                }
            }
            if (this._hasValue(minObj, shortenEnum.InitialMeasureFilter)) {
                if (this._hasValue(minObj[shortenEnum.InitialMeasureFilter], shortenEnum.MeasureFilterCondition)) {
                    unMinifyObj.InitialMeasureFilter[lengthenEnum.MeasureFilterCondition] =
                        minObj[shortenEnum.InitialMeasureFilter][shortenEnum.MeasureFilterCondition];
                }
                if (this._hasValue(minObj[shortenEnum.InitialMeasureFilter], shortenEnum.Values)) {
                    unMinifyObj.InitialMeasureFilter[lengthenEnum.Values] = minObj[shortenEnum.InitialMeasureFilter][shortenEnum.Values];
                }
            }
            if (this._hasValue(minObj, shortenEnum.PoPFilter)) {
                if (this._hasValue(minObj[shortenEnum.PoPFilter], shortenEnum.DateFieldId)) {
                    unMinifyObj.PoPFilter[lengthenEnum.DateFieldId] = minObj[shortenEnum.PoPFilter][shortenEnum.DateFieldId];
                }
                if (this._hasValue(minObj[shortenEnum.PoPFilter], shortenEnum.PrimaryType)) {
                    unMinifyObj.PoPFilter[lengthenEnum.PrimaryType] = minObj[shortenEnum.PoPFilter][shortenEnum.PrimaryType];
                }
                if (this._hasValue(minObj[shortenEnum.PoPFilter], shortenEnum.SecondaryType)) {
                    unMinifyObj.PoPFilter[lengthenEnum.SecondaryType] = minObj[shortenEnum.PoPFilter][shortenEnum.SecondaryType];
                }
                if (this._hasValue(minObj[shortenEnum.PoPFilter], shortenEnum.PrimaryCustomRange)) {
                    unMinifyObj.PoPFilter[lengthenEnum.PrimaryCustomRange][lengthenEnum.StartRange] = minObj[shortenEnum.PoPFilter][shortenEnum.PrimaryCustomRange][shortenEnum.StartRange];
                    unMinifyObj.PoPFilter[lengthenEnum.PrimaryCustomRange][lengthenEnum.EndRange] = minObj[shortenEnum.PoPFilter][shortenEnum.PrimaryCustomRange][shortenEnum.EndRange];
                }
                if (this._hasValue(minObj[shortenEnum.PoPFilter], shortenEnum.SecondaryCustomRange)) {
                    if (minObj[shortenEnum.PoPFilter][shortenEnum.SecondaryCustomRange].length > 0) {
                        unMinifyObj.PoPFilter[lengthenEnum.SecondaryCustomRange][0][lengthenEnum.StartRange] = minObj[shortenEnum.PoPFilter][shortenEnum.SecondaryCustomRange][0][shortenEnum.StartRange];
                        unMinifyObj.PoPFilter[lengthenEnum.SecondaryCustomRange][0][lengthenEnum.EndRange] = minObj[shortenEnum.PoPFilter][shortenEnum.SecondaryCustomRange][0][shortenEnum.EndRange];
                    }
                }
            }
            if (this._hasValue(unMinifyObj, lengthenEnum.UniqueColumnName) && this._hasValue(unMinifyObj, lengthenEnum.ReportName)) {
                unMinifiedList.push(unMinifyObj);
            }
        }
        return unMinifiedList;
    }

    _hasValue(filterObj: any, property: any): any {
        return !this._isNullOrUndefined(filterObj) && !this._isNullOrUndefined(filterObj[`${property}`]);
    }

    _unEscapeSelectedFilterDataforURLFilter(filterInfoList: any): any {
        for (let index: any = 0; index < filterInfoList.length; index++) {
            const filterInfo: any = filterInfoList[`${index}`];
            if ((!this._isNullOrUndefined(filterInfo.InitialDimensionFilter.Text) && filterInfo.InitialDimensionFilter.Text.length != 0)) {
                for (let i: any = 0; i < filterInfo.InitialDimensionFilter.Text.length; i++) {
                    filterInfo.InitialDimensionFilter.Text[`${i}`] = filterInfo.InitialDimensionFilter.Text[`${i}`].replaceAll(String.fromCharCode(252) + String.fromCharCode(252), ',').
                        replaceAll(String.fromCharCode(251) + String.fromCharCode(251), '&').
                        replaceAll(String.fromCharCode(250) + String.fromCharCode(250), '=').
                        replaceAll(String.fromCharCode(253) + String.fromCharCode(253), '?').
                        replaceAll(String.fromCharCode(254) + String.fromCharCode(254), '/');
                }
            }
        }
        return filterInfoList;
    }

    _getWidgetFilterInfo(): any {
        const widgetId: any = this._widgetsCollection;
        const widgetDetails: Array<object> = [];
        if (Array.isArray(widgetId) == true) {
            for (let i: any = 0; i < widgetId.length; i++) {
                let filtersDetails: any = BoldBI._gettinstance(document.getElementById(this.embedOptions.embedContainerId), 'embeddedBoldBIWidget_' + widgetId[`${i}`]);
                filtersDetails = Array.isArray(filtersDetails) ? filtersDetails : [filtersDetails];
                const filtervalue: any = [];
                let filterscolumn: any;
                for (let k: any = 0; k < filtersDetails.length; k++) {
                    if (filtersDetails[`${k}`].includes('=')) {
                        filterscolumn = {
                            columnName: filtersDetails[`${k}`].split('=')[0].toString(),
                            values: filtersDetails[`${k}`].split('=')[1].split(',')
                        };
                    }
                    else {
                        filterscolumn = {
                            values: filtersDetails
                        };
                    }
                    filtervalue[filtervalue.length] = filterscolumn;
                }
                const widgetValue: any = {
                    id: widgetId[`${i}`],
                    filters: filtervalue
                };
                widgetDetails[widgetDetails.length] = widgetValue;
            }
        }
        return widgetDetails;
    }

    addStyles(): any {
        const that: BoldBI = this;
        that._loadDepedentFiles();
    }

    destroyStyles(): any {
        const that: BoldBI = this;
        document.querySelectorAll('link').forEach(function (node: any): any {
            that.cssFiles.forEach(function (file: string): any {
                if (node.href.toLowerCase().indexOf(file.toLowerCase()) != -1) {
                    node.parentNode.removeChild(node);
                }
            });
        });
    }

    static _putinstance(element: string, key: string , obj: object): any {
        //_storage = new WeakMap();
        if (!BoldBI._storage.has(element)) {
            BoldBI._storage.set(element, new Map());
        }
        BoldBI._storage.get(element).set(key, obj);
    }

    static _gettinstance(element: string, key: string): any {
        if (BoldBI._storage.has(element)) {
            return BoldBI._storage.get(element).get(key);
        }
    }

    static _hasinstance(element: string, key: string): any {
        return BoldBI._storage.has(element) && BoldBI._storage.get(element).has(key);
    }

    static _removeinstance(element: string, key: string): any {
        if (BoldBI._storage.has(element)) {
            const ret: any = BoldBI._storage.get(element).delete(key);
            if (BoldBI._storage.get(element).size != 0) {
                BoldBI._storage.delete(element);
            }
            return ret;
        }
    }

}

export class widgetBI {
    public containerID: string;
    public widgetCollection: Array<string>;
    constructor() {
        this.containerID = '';
        this.widgetCollection = [];
    }
    setFilterParameters(filters: any): any {
        const widgetId: Array<string> = this.widgetCollection;
        if (Array.isArray(widgetId) == true) {
            if (BoldBI._hasinstance(document.getElementById(this.containerID), 'embeddedBoldBIWidget_' + widgetId[widgetId.length - 1])) {
                BoldBI._putinstance(document.getElementById(this.containerID), 'embeddedBoldBIWidget_' + widgetId[widgetId.length - 1], filters);
            }
        }
    }
}
