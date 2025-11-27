'use strict';

import { errorMessages, successMessages } from './types/embeddingLocalization';
import { IDashboardOptions } from './types/dashboard-options';
import { Mode, EmbedType, Environment, Theme } from './types/enum';
import { DefaultConstructor } from './types/default';
import { migrateDeprecatedEventKeys, checkDeprecatedEmbedOptions, deprecatedMethod} from './utils/sdk_deprecation_utils';
import { CommentArgs, ExportInformation, ViewerMethods } from './types/viewer-methods';
import { PinboardMethods } from './types/pinboard-methods';
import { DatasourceMethods } from './types/datasource-methods';
import { DesignerMethods } from './types/designer-methods';
import { ViewMethods } from './types/view-methods';
import { WidgetMethods } from './types/widget-methods';

let bbEmbed: any;
let tabInstance: any;

declare const window: any;
declare const ejdashboard: any;
declare const document: any;
declare const shortenEnum: any;
declare const SelectedFilterValue: any;
declare const lengthenEnum: any;
declare const WeakMap: any;
declare const Map: any;
declare const Element: any;

export class BoldBI {
    public IsDependencyLoaded: boolean;
    public deprecated: boolean;
    public rootUrl: string;
    public baseUrl: string;
    public siteIdentifier: string;
    public dashboardServerApiUrl: string;
    public designerRootUrl: string;
    public customThemeUrl: string;
    public scheduleEndpointUrl: string;
    public childContainer: any;
    public cdnLink: string;
    public beforeSaveViewDialogOpenFn: string;
    public beforeSaveAsViewDialogOpenFn: string;
    public onViewSavedFiltersClickFn: string;
    public onBannerIconClickFn: string;
    public beforeWidgetIconRenderedFn: string;
    public onWidgetIconClickFn: string;
    public actionBeginFn: string;
    public actionCompleteFn: string;
    public reportOpenedFn: string;
    public performNavigateDashboardFn: string;
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
    public authToken: string;
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
    public AIScriptFiles: Array<string>;
    public AICssFiles: Array<string>;
    public isDefaultView: boolean;
    public embedSDKWrapperVersion: string;
    public isDashboardRendering: boolean;
    public isPinboardRendering: boolean;
    public isDashboardViewRendering: boolean;
    public isEditGroupSeparatorEnabled: boolean;
    public editIgnore: boolean;
    public bingMapRequired: boolean;
    public restrictMobileView: boolean;
    public disableAutoRecover: boolean;
    public tokenResponse: any;
    public dashboardWidgetExports: any;
    public maskedCdnUrl: any;
    private _authorizeResponse: any = null;
    public storeObj!: BoldBI;
    static Mode = Mode;
    static EmbedType = EmbedType;
    static Environment = Environment;
    static Theme = Theme;
    static _storage: any = new WeakMap();
    static _widgetsCollection: any = [];
    loadDashboard: any;
    loadMultitabDashboard: any;
    loadTabbedDashboards: any;
    loadView: any;
    loadDashboardWidget: any;
    loadMultipleWidgets: any;
    loadAIAssistant: any;
    loadWidgets: any;
    loadWidget: any;
    loadDesigner: any;
    refreshWidgetData: any;
    addWidgetToPinboard: any;
    saveFilterView: any;

    saveAsFilterView: any;

    updateFilterView: any;

    getViewsByDashboardId: any;

    getViewByViewId: any;

    deleteFilterView: any;
    loadMultipleWidget: boolean;

    constructor(config?: Partial<typeof DefaultConstructor>) {
        const clonedDefaults: any = JSON.parse(JSON.stringify(DefaultConstructor));
        Object.assign(this, clonedDefaults, config);
        this.loadDashboard = this.Invoke(function (dashboardId?: string): any {
            this._loadDashboard(dashboardId);
        });

        this.loadMultitabDashboard = this.Invoke(function (dashboardIds?: string[]): any {
            this.deprecationMessage('loadMultitabDashboard');
            this._loadMultitabDashboard(dashboardIds);
        });

        this.loadTabbedDashboards = this.Invoke(function (dashboardIds?: string[]): any {
            this.deprecated = false;
            this._loadMultitabDashboard(dashboardIds);
        });

        this.loadView = this.Invoke(function (): any {
            this._loadView();
        });

        this.loadDashboardWidget = this.Invoke(function (name: string, dashboardId?: string): any {
            this.deprecationMessage('loadDashboardWidget');
            this._loadDashboardWidget(name, dashboardId);
        });

        this.loadAIAssistant = this.Invoke(function (): any {
            this._loadAIAssistant();
        })

        this.loadWidget = this.Invoke(function (name: string, dashboardId?: string): any {
            this.deprecated = false;
            this._loadDashboardWidget(name, dashboardId);  
        });

        this.loadMultipleWidgets = this.Invoke(function (dashboardId?: string): any {
            this.deprecationMessage('loadMultipleWidgets');
            this._loadMultipleWidgets(dashboardId);
        });

        this.loadWidgets = this.Invoke(function (dashboardId?: string): any {
            this.deprecated = false;
            this._loadMultipleWidgets(dashboardId);
        });

        this.loadDesigner = this.Invoke(function (dashboardId?: string): any {
            this._loadDesigner(dashboardId);
        });

        /**
         * @param {string} widgetNames - Define the name of the widget to be Refresh.
         * @param {boolean} hideLoader - Define whether to show or hide loading indicator while processing.
         * @param {string} dashboardId - Define the unique id of the dashboard if it is present within the multitab dashboard.
         */
        this.refreshWidgetData = this.Invoke(function (widgetNames: string, hideLoader: boolean, dashboardId: string): any {
            this.deprecationMessage('refreshWidgetData');
            this._refreshWidgetData(widgetNames, hideLoader, dashboardId);
        });

        this.addWidgetToPinboard = this.Invoke(function (dashboardId: string, widgetId: string, widgetName: string): any {
            this.deprecationMessage('addWidgetToPinboard');
            this._addWidgetToPinboard(dashboardId, widgetId, widgetName);
        });

        this.saveFilterView = this.Invoke(function (viewParameters: any, callBackFunc: Function): any {
            this.deprecationMessage('saveFilterView');
            this._saveFilterViews(viewParameters, callBackFunc);
        });

        this.saveAsFilterView = this.Invoke(function (viewParameters: any, callBackFunc: Function): any {
            this.deprecationMessage('saveAsFilterView');
            this._saveAsFilterViews(viewParameters, callBackFunc);
        });

        this.updateFilterView = this.Invoke(function (viewParameters: any, callBackFunc: Function): any {
            this.deprecationMessage('updateFilterView');
            this._updateFilterViews(viewParameters, callBackFunc);
        });

        this.getViewsByDashboardId = this.Invoke(function (dashboardId: string, callBackFunc: Function): any {
            this.deprecationMessage('getViewsByDashboardId');
            this._getViewsByDashboardId(dashboardId, callBackFunc);
        });

        this.getViewByViewId = this.Invoke(function (viewId?: string, callBackFunc?: Function): any {
            this.deprecationMessage('getViewByViewId');
            this._getViewByViewId(viewId, callBackFunc);
        });

        this.deleteFilterView = this.Invoke(function (viewId?: string, callBackFunc?: Function): any {
            this.deprecationMessage('deleteFilterView');
            this._deleteFilterView(viewId, callBackFunc);
        });
    }

    private _loadAIAssistant(): void {
        if (this._isInvalidEmbed(BoldBI.Mode.AIAssistant, 'EmbedModeInvalid')) { return; }
        else {
                this._showLoader();
                this._isAIDepdencyLoaded(this);
        }
    }

    private _loadDashboard(dashboardId?: string): void {
        if (this._isInvalidEmbed(BoldBI.Mode.View, 'EmbedModeInvalid')) { return; }
        if (dashboardId != undefined) {
            this.embedOptions.dashboardId = dashboardId;
        }
        if (this._isEmptyOrSpaces(this.embedOptions.dashboardId) && this._isEmptyOrSpaces(this.embedOptions.dashboardPath) && this._isEmptyOrSpaces(this.embedOptions.ViewId)) {
            throw new Error(errorMessages['EmptyDbrdOrViewID']);
        }
        if (this.embedOptions.anonymousToken.isEnabled) {
            const { groupName, userEmail } = this.embedOptions.anonymousToken;
            if (this._isEmptyOrSpaces(groupName) && this._isEmptyOrSpaces(userEmail)) {
                throw new Error(errorMessages['AnonymousEmailandGroup']);
            }
            if (this._isEmptyOrSpaces(groupName)) {
                throw new Error(errorMessages['AnonymousGroup']);
            }
            if (this._isEmptyOrSpaces(userEmail)) {
                throw new Error(errorMessages['AnonymousEmail']);
            }
        }
        if (!this._checkWidgetList()) {
            if (this.embedOptions.embedType == BoldBI.EmbedType.Component) {
                this.embedOptions.dashboardIds = [];
                this.embedOptions.dashboardPaths = [];
                this.isDashboardRendering = true;
                this._setEmbedDefaults();
                this._showLoader();
                this._isDependencyLoaded(this);
            } else if (this.embedOptions.embedType == BoldBI.EmbedType.IFrame) {
                this._createIframe(`${this.embedOptions.serverUrl}/dashboards/${this.embedOptions.dashboardId}?isembed=true`);
            }
        }
    }
    private _loadMultitabDashboard(dashboardIds?: string): void {
        if (this._isInvalidEmbed(BoldBI.Mode.View, 'EmbedModeInvalid')) { return; }
        if (dashboardIds !== undefined && dashboardIds !== null) {
            this.embedOptions.dashboardIds = dashboardIds;
        }
        if (this.embedOptions.embedToken || this.embedOptions.token) {
            throw new Error(errorMessages['UnableMultitabDashboardToken']);
        }
        if (this.embedOptions.dashboardIds?.length) {
            this.embedOptions.dashboardIds = Array.from(new Set(this.embedOptions.dashboardIds));
        }

        if (this.embedOptions.dashboardPaths?.length) {
            this.embedOptions.dashboardPaths = Array.from(new Set(this.embedOptions.dashboardPaths));
        }

        if (this.embedOptions.embedType == BoldBI.EmbedType.Component) {
            this.embedOptions.viewId = '';
            this.embedOptions.viewName = '';
            this._setEmbedDefaults();
            this._showLoader();
            this._isDependencyLoaded(this);
        }
    }
    private _loadView(): void {
        if (this._isInvalidEmbed(BoldBI.Mode.View, 'EmbedModeInvalid')) { return; }
        if (this.embedOptions.viewId == '' && this.embedOptions.viewName == '') {
            throw new Error(errorMessages['EmptyViewDetails']);
        }
        if (this.embedOptions.embedType == BoldBI.EmbedType.Component) {
            this.embedOptions.dashboardIds = [];
            this.embedOptions.dashboardPaths = [];
            this.isDashboardViewRendering = true;
            this._setEmbedDefaults();
            this._showLoader();
            this._isDependencyLoaded(this);
        }
    }
    private _loadDashboardWidget(name: string, dashboardId?: string): void {
        if (this._isEmptyOrSpaces(name)) {
            throw new Error(errorMessages['EmptyWidgetID']);
        }
        if (this._isInvalidEmbed(BoldBI.Mode.View, 'UnableWidgetRender')) { return; }
        if (this.embedOptions.pinboardName != '' && this.pinBoardRendered) {
            this.embedOptions.pinboardName = '';
        }
        if (!this._checkWidgetList()) {
            if (this.embedOptions.embedType == BoldBI.EmbedType.Component) {
                this.embedOptions.viewId = '';
                this.embedOptions.viewName = '';
                this.embedOptions.dashboardIds = [];
                this.embedOptions.dashboardPaths = [];
                this._setEmbedDefaults();
                this.isWidgetMode = true;
                this.widgetName = name;
                this._showLoader();
                this._isDependencyLoaded(this, dashboardId);
            } else if (this.embedOptions.embedType == BoldBI.EmbedType.IFrame) {
                this._createIframe(`${this.embedOptions.serverUrl}/dashboards/${this.embedOptions.dashboardId}?isembed=true`);
            }
        }
    }
    private _loadMultipleWidgets(dashboardId?: string): void {
        if (this.embedOptions.widgetList == '') {
            throw new Error(errorMessages['EmptyWidgetList']);
        }
        if (this._isInvalidEmbed(BoldBI.Mode.View, 'EmbedModeInvalid')) { return; }
        if (dashboardId != undefined) {
            this.embedOptions.dashboardId = dashboardId;
        }
        if (this.embedOptions.embedToken || this.embedOptions.token) {
            throw new Error(errorMessages['UnableMultipleWidgetsToken']);
        }
        if (this.embedOptions.embedType == BoldBI.EmbedType.Component) {
            this._setEmbedDefaults();
            this.isWidgetMode = true;
            this.isMultipleWidgetMode = true;
            this.loadMultipleWidget = true;
            const checkjQueryLoaded: any = setInterval(() => {
                if (window.jQuery) {
                    clearInterval(checkjQueryLoaded);
                    if (this._widgetNamesEmpty()) {
                        this._isDependencyLoaded(this, dashboardId);
                    }
                }
            }, 1000);
        }
    }
    private _loadDesigner(dashboardId?: string): void {
        if (this._isInvalidEmbed(BoldBI.Mode.Design, 'EmbedModeInvalid')) { return; }
        if (dashboardId != undefined) {
            this.embedOptions.dashboardId = dashboardId;
        }
        if (!this._checkWidgetList()) {
            if (this.embedOptions.embedType == BoldBI.EmbedType.Component) {
                this.isDashboardRendering = true;
                this._setEmbedDefaults();
                this._showLoader();
                this._isDependencyLoaded(this);
            } else if (this.embedOptions.embedType == BoldBI.EmbedType.IFrame) {
                this._createIframe(`${this.embedOptions.serverUrl}/dashboard-designer/${this.embedOptions.dashboardId}?isembed=true`);
            }
        }
    }
    private _createIframe(url: string): void {
        const iframe: any = document.createElement('iframe');
        iframe.frameBorder = 0;
        iframe.width = this.embedOptions.width;
        iframe.height = this.embedOptions.height;
        iframe.id = `${this.embedOptions.embedContainerId}_${this.embedOptions.dashboardId}`;
        iframe.allowfullscreen = this.embedOptions.dashboardSettings.showFullScreen;
        iframe.setAttribute('src', url);
        document.getElementById(this.embedOptions.embedContainerId)?.appendChild(iframe);
    }
    private _setEmbedDefaults(): void {
        this.isWidgetMode = false;
        this.widgetName = '';
        this.isDashboardViewMode = false;
        this.dashboardViewName = '';
    }
    private _isInvalidEmbed(expectedMode: Mode, errorMessage: keyof typeof errorMessages): boolean {
        if (this.invalidDetail) { return true; }
        if (this.embedOptions.mode !== expectedMode) {
            throw new Error(errorMessages[errorMessage]);
        }
        if (this.embedOptions.pinboardName != '') {
            this.embedOptions.pinboardName = '';
        }
        return false;
    }
    private _refreshWidgetData(widgetNames: string, hideLoader: boolean, dashboardId: string): void {
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
            } else if (this.isMultipleWidgetMode) {
                this._multipleWidgets('refreshWidget', widgetNames, hideLoader);
            } else {
                const dbrdInstance: any = this._getDashboardInstance();
                if (dbrdInstance != undefined) {
                    dbrdInstance.refreshWidget(widgetNames, hideLoader);
                }
            }
        }
        else {
            throw new Error(errorMessages['ArrayWidgetNames']);
        }
    }
    private _addWidgetToPinboard(dashboardId: string, widgetId: string, widgetName: string): void {
        if (!this._isEmptyOrSpaces(dashboardId) && !this._isEmptyOrSpaces(widgetId) && !this._isEmptyOrSpaces(widgetName)) {
            const specialCharsRegex: any = /^[a-zA-Z0-9!@$^ ()_=\-}{.`~]*$/;
            if (!(specialCharsRegex.test(widgetName))) {
                throw new Error(errorMessages['WidgetNameSpecialChar']);
            }
            const homepageItemId: any = bbEmbed('#widget-container').attr('data-homepage-id');
            const that: BoldBI = this;
            const embedQueryString: any = 'embed_nonce=' + this._uuidv4Generator() +
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
                embedQuerString: encodeURI(embedQueryString),
                embedQueryString: encodeURI(embedQueryString),
                dashboardServerApiUrl: this.dashboardServerApiUrl
            };
            this._xhrRequestHelper('POST', this.embedOptions.authorizationServer.url, data, this.embedOptions.authorizationServer.headers, function (result: { Status: boolean, Message: string, Data?: any }): any {
                if (result.Status) {
                    that._addWidgetInPinboard(result.Data);
                }
                else if (!result.Status) {
                    that._throwError(errorMessages['UnableAddWidget'] + result.Message);
                }
            });
        } else if (this._isEmptyOrSpaces(dashboardId) || this._isEmptyOrSpaces(widgetId)) {
            throw new Error(errorMessages['InvalidDbrdAndWidget']);
        } else {
            throw new Error(errorMessages['InvalidWidgetName']);
        }
    }
    private _makeAjaxRequest(method: string, url: string, data: any, callBackFunc: Function, additionalData: any = {}, successMethodName: string): void {
        const token = this._validatetoken(this.accessToken);
        const context = this;
        bbEmbed.ajax({
            async: false,
            type: method,
            url,
            headers: { 'Authorization': token },
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function (result: any) {
                context[successMethodName](result, callBackFunc, context, additionalData);
            },
            error: function (jqXHR: { status: number; responseText: string }) {
                context.ajaxErrorFnc(jqXHR);
            }
        });
    }
    private _saveFilterViews(viewParameters: any, callBackFunc: Function): void {
        const isGuidDbrd: boolean = this._isValidGuid(viewParameters.ItemId);
        const isGuidChildDbrd: boolean = this.isMultiTab ? this._isValidGuid(viewParameters.ChildItemId) : false;
        if ((!this._isEmptyOrSpaces(viewParameters.ViewName)) && (!this._isEmptyOrSpaces(viewParameters.QueryString)) && ((this.isMultiTab && isGuidChildDbrd && isGuidDbrd) || (isGuidDbrd))) {
            const data: any = {
                'ViewName': viewParameters.ViewName,
                'ItemId': viewParameters.ItemId,
                'QueryString': viewParameters.QueryString,
                'IsPublic': false,
                'ChildItemId': this.isMultiTab ? viewParameters.ChildItemId : null,
                'IsDefault': viewParameters.IsDefault ? viewParameters.IsDefault : false
            };
            this._makeAjaxRequest('POST', `${this.dashboardServerApiUrl}/v4.0/dashboards/views`, data, callBackFunc, viewParameters, '_saveViewSuccess');
        }
        else {
            if (!isGuidDbrd) {
                throw new Error(errorMessages['InvalidDashboardID']);
            }
            if (this.isMultiTab && !isGuidChildDbrd) {
                throw new Error(errorMessages['InvalidChildDbrdID']);
            }
            if (this._isEmptyOrSpaces(viewParameters.ViewName)) {
                throw new Error(errorMessages['InvalidViewName']);
            }
            if (this._isEmptyOrSpaces(viewParameters.QueryString)) {
                throw new Error(errorMessages['InvalidQueryString']);
            }
        }
    }
    private _saveAsFilterViews(viewParameters: any, callBackFunc: Function): void {
        const isGuidDbrd: boolean = this._isValidGuid(viewParameters.ItemId);
        const isGuidChildDbrd: boolean = this.isMultiTab ? this._isValidGuid(viewParameters.ChildItemId) : false;
        if ((!this._isEmptyOrSpaces(viewParameters.ViewName)) && (!this._isEmptyOrSpaces(viewParameters.QueryString)) && ((this.isMultiTab && isGuidChildDbrd && isGuidDbrd) || (isGuidDbrd))) {
            const data: any = {
                'ViewName': viewParameters.ViewName,
                'ItemId': viewParameters.ItemId,
                'QueryString': viewParameters.QueryString,
                'ChildItemId': this.isMultiTab ? viewParameters.ChildItemId : null,
                'IsDefault': viewParameters.IsDefault ? viewParameters.IsDefault : false
            };
            this._makeAjaxRequest('POST', `${this.dashboardServerApiUrl}/v4.0/dashboards/views`, data, callBackFunc, viewParameters, '_saveViewSuccess');
        }
        else {
            if (!isGuidDbrd) {
                throw new Error(errorMessages['InvalidDashboardID']);
            }
            if (this.isMultiTab && !isGuidChildDbrd) {
                throw new Error(errorMessages['InvalidChildDbrdID']);
            }
            if (this._isEmptyOrSpaces(viewParameters.ViewName)) {
                throw new Error(errorMessages['InvalidViewName']);
            }
            if (this._isEmptyOrSpaces(viewParameters.QueryString)) {
                throw new Error(errorMessages['InvalidQueryString']);
            }
        }
    }
    private _updateFilterViews(viewParameters: any, callBackFunc: Function): void {
        const isGuidDbrd: boolean = this._isValidGuid(viewParameters.DashboardId);
        const isGuidView: boolean = this._isValidGuid(viewParameters.ViewId);
        if (isGuidDbrd && (!this._isEmptyOrSpaces(viewParameters.QueryString)) && isGuidView) {
            const data: any = {
                'ViewId': viewParameters.ViewId,
                'DashboardId': viewParameters.DashboardId,
                'QueryString': viewParameters.QueryString,
                'IsDefault': viewParameters.IsDefault
            };
            this._makeAjaxRequest('PUT', `${this.dashboardServerApiUrl}/v4.0/dashboards/views`, data, callBackFunc, viewParameters, '_updateFilterViewsSuccess');
        }
        else {
            if (!isGuidDbrd) {
                throw new Error(errorMessages['InvalidDashboardID']);
            }
            if (!isGuidView) {
                throw new Error(errorMessages['InvalidViewID']);
            }
            if (this._isEmptyOrSpaces(viewParameters.QueryString)) {
                throw new Error(errorMessages['InvalidQueryString']);
            }
        }
    }
    private _getViewsByDashboardId(dashboardId: string, callBackFunc: Function): void {
        const isGuidDbrd: boolean = this._isValidGuid(dashboardId);
        if (isGuidDbrd) {
            const data: any = {
                'DashboardId': dashboardId
            };
            this._makeAjaxRequest('GET', `${this.dashboardServerApiUrl}/v4.0/dashboards/${dashboardId}/views`, data, callBackFunc, null, '_getViewsByDashboardIdSuccess');
        }
        else {
            if (!isGuidDbrd) {
                throw new Error(errorMessages['InvalidDashboardID']);
            }
        }
    }
    private _getViewByViewId(viewId?: string, callBackFunc?: Function): void {
        const isGuidView: boolean = this._isValidGuid(viewId);
        if (isGuidView) {
            const data: any = {
                'ViewId': viewId
            };
            this._makeAjaxRequest('GET', `${this.dashboardServerApiUrl}/v4.0/dashboards/views/${viewId}`, data, callBackFunc, null, '_getViewByViewIdSuccess');
        }
        else {
            if (!isGuidView) {
                throw new Error(errorMessages['InvalidViewID']);
            }
        }
    }
    private _deleteFilterView(viewId?: string, callBackFunc?: Function): void {
        const isGuidView: boolean = this._isValidGuid(viewId);
        if (isGuidView) {
            const data: any = {
                'ViewId': viewId
            };
            this._makeAjaxRequest('DELETE', `${this.dashboardServerApiUrl}/v4.0/dashboards/views/${viewId}`, data, callBackFunc, viewId, '_deleteFilterViewSuccess');
        }
        else {
            if (!isGuidView) {
                throw new Error(errorMessages['InvalidViewID']);
            }
        }
    }
    private _saveViewSuccess(result: { Status: boolean; Data: any; StatusMessage: string }, callBackFunc: Function, context: any, additionalData: any): void {
        const that = context;
        if (result.Status) {
            const view = {
                ItemId: additionalData.ItemId,
                ViewId: result.Data,
                ViewName: additionalData.ViewName
            };
            that._updateInFilterOverviewUI(view.ViewName, result.Data);

            if (window[`${callBackFunc}`] instanceof Function) {
                window[`${callBackFunc}`].call(that, view, result.StatusMessage);
            }
            else {
                callBackFunc.call(that, view, result.StatusMessage);
            }
        } else {
            if (window[`${callBackFunc}`] instanceof Function) {
                window[`${callBackFunc}`].call(that, null, result.StatusMessage);
            }
            else {
                callBackFunc.call(that, null, result.StatusMessage);
            }
        }
    }
    private _updateFilterViewsSuccess(result: { Status: boolean; Data: any; StatusMessage: string }, callBackFunc: Function, context: any, viewParameters: any): void {
        const that = context;
        if (result.Status) {
            const view: any = {}; // Create a new object in each iteration
            view['ViewId'] = viewParameters.ViewId;
            if (window[`${callBackFunc}`] instanceof Function) {
                window[`${callBackFunc}`].call(that, view, result.StatusMessage);
            }
            else {
                callBackFunc.call(that, view, result.StatusMessage);
            }
        }
    }
    private _deleteFilterViewSuccess(result: any, callBackFunc: Function, context: any, viewId: any): void {
        var that = context;
        if (window[`${callBackFunc}`] instanceof Function) {
            window[`${callBackFunc}`].call(that, viewId);
        }
        else {
            callBackFunc.call(that, viewId);
        }
    }
    private _getViewByViewIdSuccess(result: any, callBackFunc: Function, context: any): void {
        const that = context;
        const view: any = {}; // Create a new object in each iteration
        if (result) {
            view['ViewId'] = result.ViewId;
            view['ViewName'] = result.ViewName;
            view['QueryString'] = result.QueryString;
        }
        if (window[`${callBackFunc}`] instanceof Function) {
            window[`${callBackFunc}`].call(that, view);
        }
        else {
            callBackFunc.call(that, view);
        }
    }
    private _getViewsByDashboardIdSuccess(result: any, callBackFunc: Function, context: any): void {
        const that = context;
        if (result) {
            const viewItems: Array<object> = [];
            for (let x: any = 0; x < result.length; x++) {
                const view: any = {}; // Create a new object in each iteration
                view['ItemId'] = result[`${x}`].ItemId;
                view['ViewId'] = result[`${x}`].ViewId;
                view['ViewName'] = result[`${x}`].ViewName;
                view['QueryString'] = result[`${x}`].QueryString;
                viewItems.push(view); // Push the new object to the array
            }
            if (window[`${callBackFunc}`] instanceof Function) {
                window[`${callBackFunc}`].call(that, viewItems);
            }
            else {
                callBackFunc.call(that, viewItems);
            }
        }
        else {
            if (window[`${callBackFunc}`] instanceof Function) {
                window[`${callBackFunc}`].call(that);
            }
            else {
                callBackFunc.call(that);
            }
        }
    }
    private _isValidGuid(id: string): boolean {
        const regex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
        return regex.test(id);
    }
    private _initializeDashboardContainer(): void {
        const embedcontainerId = this.embedOptions.embedContainerId;
        // Create new child container
        this.childContainer = document.createElement('div');
        this.childContainer.id = embedcontainerId + '_embeddedbi';
        // Destroy existing instance if present
        const existingInstance = BoldBI._gettinstance(document.getElementById(embedcontainerId), 'embeddedBoldBI');
        if (existingInstance && typeof bbEmbed !== 'undefined') {
            this.deprecated = false;
            existingInstance.destroy();
        }
        // Clear existing content and append new container
        const container = document.getElementById(embedcontainerId);
        if (container) {
            container.innerHTML = '';
            container.append(this.childContainer);
        }
        BoldBI._putinstance(container, 'embeddedBoldBI', this.storeObj);
    }
    // Customer exposed functions
    static create(options: IDashboardOptions): any {
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
                if (!boldBIObj._isNullOrUndefined(bbEmbed)) {
                    boldBIObj.deprecated = false;
                    boldBIObj.resizeDashboard();
                }
                if (!boldBIObj._isEmptyOrSpaces(boldBIObj.embedOptions.pinboardName) || !boldBIObj._isNullOrUndefined(boldBIObj.embedOptions.pinboardName) && !boldBIObj._isNullOrUndefined(bbEmbed)) {
                    boldBIObj.setListMinimumHeight();
                }
            });
        }

        if (boldBIObj._validateOptions(options)) {
            boldBIObj._initializeEmbedOptions(options);
            if (boldBIObj.embedOptions.embedType == BoldBI.EmbedType.Component) {
                try {
                    if (boldBIObj.embedOptions.widgetList == '' || boldBIObj.embedOptions.embedContainerId) {
                        boldBIObj.childContainer = document.createElement('div');
                        boldBIObj.childContainer.id = boldBIObj.embedOptions.embedContainerId + '_embeddedbi';
                        const _biInstance: any = BoldBI._gettinstance(document.getElementById(boldBIObj.embedOptions.embedContainerId), 'embeddedBoldBI');
                        if (_biInstance != null || _biInstance != undefined) {
                            if (!boldBIObj._isNullOrUndefined(bbEmbed)) {
                                _biInstance.dispose();
                            }
                        }
                        document.getElementById(boldBIObj.embedOptions.embedContainerId).innerHTML = '';
                        document.getElementById(boldBIObj.embedOptions.embedContainerId).append(boldBIObj.childContainer);
                    }
                    if (boldBIObj._initializeUrls()) {
                        if (!boldBIObj.embedOptions.width && !boldBIObj.embedOptions.height) {
                            boldBIObj._setDimensions();
                        }
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
                        boldBIObj.storeObj = retObj; // storeObj for reuse
                        return retObj;
                    }
                } catch (ex) {
                    if (ex.message == errorMessages['CantReadNull']) {
                        alert(errorMessages['InvalidEmbedContainerID']);
                        return false;
                    }
                    else {
                        boldBIObj._throwError(ex.message, boldBIObj.embedOptions.embedContainerId);
                        boldBIObj.invalidDetail = true;
                        const retObj: BoldBI = Object.assign(boldBIObj);
                        boldBIObj.storeObj = retObj; // storeObj for reuse
                        return retObj;
                    }
                }
            } else {
                boldBIObj._throwError(errorMessages['InvalidEmbedType'], boldBIObj.embedOptions.embedContainerId);
                boldBIObj.invalidDetail = true;
                const retObj: BoldBI = Object.assign(boldBIObj);
                boldBIObj.storeObj = retObj; // storeObj for reuse
                return retObj;
            }
            if (boldBIObj.embedOptions.widgetList == '' || boldBIObj.embedOptions.embedContainerId) {
                const ele: string = document.getElementById(boldBIObj.embedOptions.embedContainerId);
                if (this._hasinstance(ele, 'embeddedBoldBI')) {
                    this._removeinstance(ele, 'embeddedBoldBI');
                }
            }
            //const retObj:any = Object.assign({}, boldBIObj)
            // eslint-disable-next-line
            const retObj: BoldBI = (<any>Object).assign(boldBIObj);
            boldBIObj.storeObj = retObj; // storeObj for reuse
            if (boldBIObj.embedOptions.widgetList == '' || boldBIObj.embedOptions.embedContainerId) {
                const ele: string = document.getElementById(boldBIObj.embedOptions.embedContainerId);
                this._putinstance(ele, 'embeddedBoldBI', retObj);
            }
            return retObj;
        }
        boldBIObj._initializeEmbedOptions(options);
        boldBIObj.invalidDetail = true;
        const retObj: BoldBI = Object.assign(boldBIObj);
        boldBIObj.storeObj = retObj; // storeObj for reuse
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

    dispose(): any {
        this.deprecated = false;
        this.destroy();
        
    }

    destroy(): any {
        this.deprecationMessage('destroy');
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
            if (this.isMultipleWidgetMode) {
                this._multipleWidgets("destroy");

            }
            const embedContainerId: any = this.embedOptions.embedContainerId;
            const existingDashboardInstance: any = this._getDashboardInstance();
            if (existingDashboardInstance != undefined) {
                existingDashboardInstance.destroy();
            }
            BoldBI._removeinstance(document.getElementById(embedContainerId), 'embeddedBoldBI');
            document.getElementById(embedContainerId).innerHTML = '';
        }
        if (this.embedOptions.isRemoveStyle == true) {
            document.querySelectorAll('link').forEach(function (node: { href?: any, parentNode?: any }): any {
                that.cssFiles.forEach(function (file: string): any {
                    if (node.href.toLowerCase().indexOf(file.toLowerCase()) != -1) {
                        node.parentNode.removeChild(node);
                    }
                });
            });
        }
    }

    loadPinboard: any = this.Invoke(function (): any {
        if (!this.invalidDetail) {
            if (this.embedOptions.pinboardName == '') {
                throw new Error(errorMessages['PinboardNameEmpty']);
            }
            if (this.embedOptions.mode != BoldBI.Mode.View) {
                throw new Error(errorMessages['UnablePinboardRender']);
            }
            this.embedOptions.dashboardIds = [];
            this.embedOptions.dashboardPaths = [];
            if (!this._checkWidgetList()) {
                if (this.embedOptions.embedType == BoldBI.EmbedType.Component) {
                    this._setEmbedDefaults();
                    this.isPinboardRendering = true;
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
        }
    });

    loadDashboardView(): any {
        throw new Error(errorMessages['NotImplementedMethod']);
    }


    loadDatasource: any = this.Invoke(function (): any {
        if (!this.invalidDetail) {
            if (this.embedOptions.dashboardId || this.embedOptions.dashboardPath) {
                this.embedOptions.dashboardId = this.embedOptions.dashboardPath = '';
            }
            if (this.embedOptions.pinboardName != '') {
                this.embedOptions.pinboardName = '';
            }
            if (!this._checkWidgetList()) {
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
                    throw new Error(errorMessages['EmbedModeInvalid']);
                }
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
    exportDashboardAsPdf(exportInformation: { dashboardId: string; fileName?: string; pageSize?: string; pageOrientation?: string; showAppliedFilters?: boolean }): any {
        this.deprecationMessage('exportDashboardAsPdf');
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
                else {
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
    exportDashboardAsImage(exportInformation: { dashboardId: string; fileName?: string; exportImageFormat?: string; resolutionDpi?: string; showAppliedFilters?: boolean }): any {
        this.deprecationMessage('exportDashboardAsImage');
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
                else {
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
    exportDashboardAsExcel(exportInformation: { dashboardId: string; fileName?: string; fileType?: string }): any {
        this.deprecationMessage('exportDashboardAsExcel');
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
                else {
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
    exportWidgetAsPdf(exportInformation: { dashboardId: string; widgetName?: string; fileName?: string; pageSize?: string; pageOrientation?: string; showAppliedFilters?: boolean }): any {
        this.deprecationMessage('exportWidgetAsPdf');
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
        else if (this.isMultipleWidgetMode) {
            this._multipleWidgets("exportWidgetAsPdf", exportInformation.dashboardId, exportInformation.widgetName, exportInformation.fileName, exportInformation.pageSize, exportInformation.pageOrientation, exportInformation.showAppliedFilters);
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
    exportWidgetAsImage(exportInformation: { dashboardId: string; widgetName?: string; fileName?: string; exportImageFormat?: string; resolutionDpi?: string; showAppliedFilters?: boolean }): any {
        this.deprecationMessage('exportWidgetAsImage');
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
        else if (this.isMultipleWidgetMode) {
            this._multipleWidgets("exportWidgetAsImage", exportInformation.dashboardId, exportInformation.widgetName, exportInformation.fileName, exportInformation.exportImageFormat, exportInformation.resolutionDpi, exportInformation.showAppliedFilters);
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
    exportWidgetAsExcel(exportInformation: { dashboardId: string; widgetName?: string, fileName?: string; fileType?: string }): any {
        this.deprecationMessage('exportWidgetAsExcel');
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
        else if (this.isMultipleWidgetMode) {
            this._multipleWidgets("exportWidgetAsExcel", exportInformation.dashboardId, exportInformation.widgetName, exportInformation.fileName, exportInformation.fileType);
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
    exportWidgetAsCsv(exportInformation: { dashboardId: string; widgetName?: string, fileName?: string }): any {
        this.deprecationMessage('exportWidgetAsCsv');
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
        else if (this.isMultipleWidgetMode) {
            this._multipleWidgets("exportWidgetAsCsv", exportInformation.dashboardId, exportInformation.widgetName, exportInformation.fileName);
        }
        else {
            const dbrdInstance: any = this._getDashboardInstance();
            if (dbrdInstance != undefined) {
                dbrdInstance.exportWidgetAsCsv(exportInformation.widgetName, exportInformation.fileName);
            }
        }
    }

    updateDatasource(): any {
        this.deprecationMessage('updateDatasource');
        const dbrdInstance: any = this._getDashboardInstance();
        if (dbrdInstance != undefined) {
            dbrdInstance.modules.queryDesigner.saveQueryInfo();
        }
    }

    updateFilters(filterParameters: string): any {
        this.deprecationMessage('updateFilters');
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
        } else if (this.isMultipleWidgetMode) {
            this._multipleWidgets("filterParameters", filterParameters);
        } else {
            const existingDashboardInstance: any = this._getDashboardInstance();
            if (existingDashboardInstance != undefined) {
                existingDashboardInstance.option('filterParameters', filterParameters);
            }
        }
    }

    applyTheme(dashboardTheme: string): any {
        this.deprecated = false;
        this.updateDashboardTheme(dashboardTheme);
    }

    updateDashboardTheme(dashboardTheme: string): any {
        this.deprecationMessage('updateDashboardTheme');
        if (dashboardTheme && dashboardTheme.trim() !== '') {
            const that: BoldBI = this;
            this.embedOptions.dashboardSettings = this.embedOptions.dashboardSettings || {};
            this.embedOptions.settings.theme = this.embedOptions.settings.theme || {};
            this.embedOptions.dashboardSettings.themeSettings = this.embedOptions.dashboardSettings.themeSettings || {};
            this.embedOptions.dashboardSettings.themeSettings.dashboard = dashboardTheme;
            this.embedOptions.settings.theme.dashboard = dashboardTheme;
            document.querySelectorAll('link').forEach(function (node: any): any {
                if (node.href.includes('/dashboard?theme=')) {
                    node.parentNode.removeChild(node);
                }
            });
            const cssTag: any = document.createElement('link');
            cssTag.rel = 'stylesheet';
            if (this.embedOptions.environment == BoldBI.Environment.Enterprise) {
                cssTag.href = this.customThemeUrl + '/dashboard?theme=' + dashboardTheme;
            }
            else {
                cssTag.href = this.rootUrl + '/theme/styles/dashboard?theme=' + dashboardTheme;
            }
            if (bbEmbed('link[href="' + cssTag.href + '"]').length < 1) {
                document.head.appendChild(cssTag);
            }
            if (this.isMultiTab) {
                const dashboardContainer: any = bbEmbed('#' + this.embedOptions.embedContainerId).find('.e-content .bbembed-multitab-dbrd');
                for (let i: any = 0; i < dashboardContainer.length; i++) {
                    const embedId: string = bbEmbed(dashboardContainer[`${i}`]).attr('id');
                    const existingDashboardInstance: any = this._getDashboardInstance(embedId);
                    if (existingDashboardInstance != undefined) {
                        existingDashboardInstance.option('dashboardThemeSettings.dashboardTheme', dashboardTheme);
                    }
                }
            } else if (bbEmbed('.pinBoardDbrd').length > 0) {
                bbEmbed('.pinBoardDbrd').each(function (): any {
                    const existingDashboardInstance: any = that._getDashboardInstance(this.id);
                    if (existingDashboardInstance != undefined) {
                        existingDashboardInstance.option('dashboardThemeSettings.dashboardTheme', dashboardTheme);
                    }
                });
            } else {
                const existingDashboardInstance: any = this._getDashboardInstance();
                if (existingDashboardInstance != undefined) {
                    existingDashboardInstance.option('dashboardThemeSettings.dashboardTheme', dashboardTheme);
                }
            }
        }
        else {
            this._throwError(errorMessages['InvalidThemeName']);
        }
    }

    resizeDashboard(filterParameters?: string): any {
        this.deprecationMessage('resizeDashboard');
        const that: BoldBI = this;
        if (this.embedOptions.isDynamicWidth && this.embedOptions.isDynamicHeight) {
            this._onBrowserWindowResize();
        }

        if (this.isMultiTab) {
            bbEmbed('#' + that.embedOptions.embedContainerId + '_multi_tab_dashboard').css('width', bbEmbed('#' + that.embedOptions.embedContainerId).width());
            window['multiTabFilterParameter'] = filterParameters;
            const dashboardContainer: any = bbEmbed('#' + this.embedOptions.embedContainerId).find('.e-content .bbembed-multitab-dbrd');
            for (let i: any = 0; i < dashboardContainer.length; i++) {
                const embedId: string = bbEmbed(dashboardContainer[`${i}`]).attr('id');
                const existingDashboardInstance: any = this._getDashboardInstance(embedId);
                if (existingDashboardInstance != undefined) {
                    const clientFnc: any = window[that.embedOptions.events.onResize];
                    if (clientFnc instanceof Function) {
                        clientFnc.call(this, existingDashboardInstance);
                    }
                    if (this.embedOptions.events.onResize instanceof Function) {
                        this.embedOptions.events.onResize.call(this, existingDashboardInstance);
                    }
                    setTimeout(() => {
                        existingDashboardInstance.resizeDashboard();
                    }, 200);
                }
            }
            this._tabSelected();
        } else if (bbEmbed('.pinBoardDbrd').length > 0) {
            bbEmbed('.pinBoardDbrd').each(function (): any {
                const existingDashboardInstance: any = that._getDashboardInstance(this.id);
                if (existingDashboardInstance != undefined) {
                    const clientFnc: any = window[that.embedOptions.events.onResize];
                    if (clientFnc instanceof Function) {
                        clientFnc.call(that, existingDashboardInstance);
                    }
                    if (that.embedOptions.events.onResize instanceof Function) {
                        that.embedOptions.events.onResize.call(that, existingDashboardInstance);
                    }
                    existingDashboardInstance.resizeDashboard();
                }
            });
        } else if (this.isMultipleWidgetMode) {
            this._multipleWidgets("resizeDashboard");
        } else {
            const existingDashboardInstance: any = this._getDashboardInstance();
            if (existingDashboardInstance != undefined) {
                const clientFnc: any = window[that.embedOptions.events.onResize];
                if (clientFnc instanceof Function) {
                    clientFnc.call(this, existingDashboardInstance);
                }
                if (this.embedOptions.events.onResize instanceof Function) {
                    this.embedOptions.events.onResize.call(this, existingDashboardInstance);
                }
                setTimeout(() => {
                    existingDashboardInstance.resizeDashboard();
                }, 200);
            }
        }
    }

    viewer: ViewerMethods = {
        refresh: () => {
            this.deprecated = false;
            this.refreshDashboard();
        },
        resize: () => {
            this.deprecated = false;
            this.resizeDashboard();
        },
        resetFilter: () => {
            this.deprecated = false;
            this.clearAllFilter();
        },
        updateFilters: (filtervalues: string) => {
            this.deprecated = false;
            this.updateFilters(filtervalues);
        },
        exportAsExcel: (info: ExportInformation) => {
            this.deprecated = false;
            if (info.widgetName) {
                this.exportWidgetAsExcel(info);
            }
            else {
                this.exportDashboardAsExcel(info);
            }
        },
        exportAsImage: (info: ExportInformation) => {
            this.deprecated = false;
            if (info.widgetName) {
                this.exportWidgetAsImage(info);
            }
            else {
                this.exportDashboardAsImage(info);
            }
        },
        exportAsPdf: (info: ExportInformation) => {
            this.deprecated = false;
            if (info.widgetName) {
                this.exportWidgetAsPdf(info);
            }
            else {
                this.exportDashboardAsPdf(info);
            }
        },
        exportAsCSV: (info: ExportInformation) => {
            this.deprecated = false;
            if (info.widgetName) {
                this.exportWidgetAsCsv(info);
            }
        },
        addComment: (comment: CommentArgs, callBackFn: Function) => {
            this.deprecated = false;
            if (comment.widgetId) {
                this.addWidgetComment(comment, callBackFn);
            }
            else {
                this.addDashboardComment(comment, callBackFn);
            }
        },
        editComment: (comment: CommentArgs, callBackFn: Function) => {
            this.deprecated = false;
            if (comment.widgetId) {
                this.editWidgetComment(comment, callBackFn);
            }
            else {
                this.editDashboardComment(comment, callBackFn);
            }
        },
        deleteComment: (comment: CommentArgs, callBackFn: Function) => {
            this.deprecated = false;
            if (comment.widgetId) {
                this.deleteWidgetComment(comment, callBackFn);
            }
            else {
                this.deleteDashboardComment(comment, callBackFn);
            }
        },
        fetchComments: (commentType: string, comment: CommentArgs, callBackFn: Function) => {
            this.deprecated = false;
            this.getComments(commentType, comment, callBackFn);
        }
    };

    pinboard: PinboardMethods = {
        addWidget: (Id: string, widgetId: string, widgetName: string) => {
            this.deprecated = false;
            this.addWidgetToPinboard(Id, widgetId, widgetName);
        }
    };

    dataSource: DatasourceMethods = {
        refresh: () => {
            this.deprecated = false;
            this.updateDatasource();
        }
    };

    designer: DesignerMethods = {
        publish: (publishModel: any, containerId: string) => {
            this.deprecated = false;
            this.saveDashboard(publishModel, containerId);
        }
    };

    widget: WidgetMethods = {
        fetchData: (widgetName: string, clientFnc: Function, dashboardId: string) => {
            this.deprecated = false;
            this.getWidgetData(widgetName, clientFnc, dashboardId);
        },

        refresh: (widgetNames: string, hideLoader: boolean, dashboardId: string) => {
            this.deprecated = false;
            this.refreshWidgetData(widgetNames, hideLoader, dashboardId);
        },

        getInstance: (eleID: string) => {
            this.deprecated = false;
            return this.getWidgetInstance(eleID);
        },

        updatefilters: (filters: any) => {
            this.deprecated = false;
            this.updateWidgetFilters(filters);
        },
        dispose: (eleID: string) => {
            this.deprecated = false;
            this.removeWidgetInstance(eleID);
            this.deprecated = false;
        }
    };

    view: ViewMethods = {
        delete: (viewId: string, callBackFn: Function) => {
            this.deprecated = false;
            this.deleteFilterView(viewId, callBackFn);
        },
        update: (viewParameters: any, callBackFunc: Function) => {
            this.deprecated = false;
            this.updateFilterView(viewParameters, callBackFunc);
        },
        save: (viewParameters: any, callBackFunc: Function) => {
            this.deprecated = false;
            this.saveFilterView(viewParameters, callBackFunc);
        },
        saveAs: (viewParameters: any, callBackFunc: Function) => {
            this.deprecated = false;
            this.saveAsFilterView(viewParameters, callBackFunc);
        },
        fetchById: (viewId: string, callBackFn: Function) => {
            this.deprecated = false;
            this.getViewByViewId(viewId, callBackFn);
        },
        fetchByDashboardId: (dashboardId: string, callBackFn: Function) => {
            this.deprecated = false;
            this.getViewsByDashboardId(dashboardId, callBackFn);
        }
    };

    deprecationMessage(methodName: string): void{
        if (this.deprecated){
            deprecatedMethod(methodName);
        }
        this.deprecated = true;
    }

    refreshDashboard(): any {
        this.deprecationMessage('refreshDashboard');
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
        } else if (this.isMultipleWidgetMode) {
            this._multipleWidgets("updateDashboard");
        } else {
            const existingDashboardInstance: any = this._getDashboardInstance();
            if (existingDashboardInstance != undefined) {
                existingDashboardInstance.updateDashboard();
            }
        }
    }

    clearAllFilter(): any {
        this.deprecationMessage('clearAllFilter');
        if (this.isMultiTab) {
            const dashboardContainer: any = bbEmbed('#' + this.embedOptions.embedContainerId).find('.e-content .bbembed-multitab-dbrd');
            for (let i: any = 0; i < dashboardContainer.length; i++) {
                const embedId: string = bbEmbed(dashboardContainer[`${i}`]).attr('id');
                const existingDashboardInstance: any = this._getDashboardInstance(embedId);
                if (existingDashboardInstance != undefined) {
                    existingDashboardInstance.clearAllFilters();
                }
            }
        } else if (this.isMultipleWidgetMode) {
            this._multipleWidgets("clearAllFilters");
        } else {
            const existingDashboardInstance: any = this._getDashboardInstance();
            if (existingDashboardInstance != undefined) {
                existingDashboardInstance.clearAllFilters();
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
    hideLoader(): any {
        this.deprecated = false;
        this.hideWaitingIndicator();
    }

    hideWaitingIndicator(): any {
        this.deprecationMessage('hideWaitingIndicator');
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
        this.deprecationMessage('getWidgetData');
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
                'status': false, 'message': errorMessages['InvalidDashboardID'], 'request': data
            };
            return responseData;
        }
        if (this._isEmptyOrSpaces(widgetName)) {
            responseData = {
                'status': false, 'message': errorMessages['InvalidWidgetName'], 'request': data
            };
            return responseData;
        }

        const thatIns: BoldBI = this;
        var token = this._validatetoken(thatIns.accessToken)
        bbEmbed.ajax({
            type: 'POST',
            url: this.designerRootUrl + '/v1.0/design/loadwidgetdata',
            data: data,
            contentType: 'application/json; charset=utf-8',
            beforeSend: function (xhr: any): any {
                xhr.setRequestHeader('Authorization', token);
                xhr.setRequestHeader('Caller', thatIns.dashboardServerApiUrl);
            },
            success: function (result: any): any {
                if (result.Status) {
                    responseData = {
                        'status': result.Status, 'data': result.Data, 'message': result.Message, 'request': data
                    };
                } else {
                    responseData = {
                        'status': result.Status, 'message': result.Message, 'request': data
                    };
                }
                clientFnc.call(thatIns, responseData);
            },
            error: function (request: any, message: string): any {
                responseData = {
                    'status': false, 'message': message, 'request': request
                };
                clientFnc.call(thatIns, responseData);
            }
        });

        responseData = {
            'status': true, 'message': errorMessages['InitFetch'], 'request': data
        };
        return responseData;
    }

    fetchCategories(clientFnc: Function, containerId: string): any {
        this.deprecated = false;
        this.getDashboardCategories(clientFnc, containerId);
    }
    /**
     * @param {string} clientFnc - It denotes the method name to be defined
     * @param {string} containerId - This should be the container id where you want to embed the dashboard
     */
    getDashboardCategories(clientFnc: Function, containerId: string): any {
        this.deprecationMessage('getDashboardCategories');
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

    createCategory(categoryName: string, categoryDescription: string, clientFnc: Function, containerId: string): any {
        this.deprecated = false;
        this.createDashboardCategory(categoryName, categoryDescription, clientFnc, containerId);
    }

    /**
     * @param {string} categoryName - Define new category name want to create .
     * @param {string} categoryDescription - Define the description of new category name .
     * @param {string} clientFnc - It denotes the method name to be defined
     * @param {string} containerId - This should be the container id where you want to embed the dashboard
     */
    createDashboardCategory(categoryName: string, categoryDescription: string, clientFnc: Function, containerId: string): any {
        this.deprecationMessage('createDashboardCategory');
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
        this.deprecationMessage('saveDashboard');
        const dbrdInstance: any = (this._isNullOrUndefined(containerId) || this._isEmptyOrSpaces(containerId)) ? this._getDashboardInstance() : this._getDashboardInstance(containerId + '_embeddedbi');
        if (dbrdInstance != undefined) {
            dbrdInstance.model.serverSettings.enableMarkAsPublic = publishModel.isPublic ? publishModel.isPublic : false;
            dbrdInstance.saveDashboardToServer(publishModel);
        }
    }

    getWidgetInstance(eleID: string): any {
        this.deprecationMessage('getWidgetInstance');
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
        this.deprecationMessage('updateWidgetFilters');
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
        } else if (this.isMultipleWidgetMode) {
            this._multipleWidgets("widgets", filters);
        } else {
            const dbrdInstance: any = (this._isNullOrUndefined(containerId) || this._isEmptyOrSpaces(containerId)) ? this._getDashboardInstance() : this._getDashboardInstance(containerId + '_embeddedbi');
            if (dbrdInstance != undefined) {
                dbrdInstance.option('widgets', filters);
            }
        }
    }

    // Internal functions. Will not be accessible outside of this scope.
    _initializeEmbedOptions(options: { embedContainerId?: string, serverUrl?: string, pinboardName?: string, mode?: any, dashboardId?: string, dashboardPath?: string, environment?: any, datasourceId?: string, datasourceName?: string }): any {
        checkDeprecatedEmbedOptions(options);
        this.embedOptions = Object.assign(this.embedOptions, options);
        this.embedOptions = migrateDeprecatedEventKeys(this.embedOptions);
    }

    _setDimensions() {
        // Get DOM elements
        const embedContainer = document.getElementById(this.embedOptions.embedContainerId);

        // Check if the width and height value are set in DOM element via inline styles
        if (embedContainer.style.width && embedContainer.style.height) {
            this.embedOptions.width = embedContainer.style.width;
            this.embedOptions.height = embedContainer.style.height;
        }

        // Set width and height based on parent container dimensions
        else {
            const parentContainer = embedContainer.parentNode;
            this.embedOptions.width = `${parentContainer?.clientWidth || window.innerWidth}px`;
            this.embedOptions.height = `${parentContainer?.clientHeight || window.innerHeight}px`;
            Object.assign(this.embedOptions, { isDynamicWidth: true, isDynamicHeight: true });
        }
    }

    _onBrowserWindowResize() {
        if (this.embedOptions.isDynamicWidth && this.embedOptions.isDynamicHeight) {
            const embedContainer = document.getElementById(this.embedOptions.embedContainerId);
            const parentContainer = embedContainer.parentNode;
            embedContainer.style.width = `${parentContainer?.clientWidth || window.innerWidth}px`;
            embedContainer.style.height = `${parentContainer?.clientHeight || window.innerHeight}px`;
        }
    }

    _initializeUrls: any = this.Invoke(function (): any {
        if (this.embedOptions.enableDomainMasking) {
            if (this.embedOptions.authorizationServer.url === '' && this.embedOptions.token === '' && this.embedOptions.embedToken === '') {
                this.designerRootUrl = this.embedOptions.serverUrl;
                return true;
            } else {
                throw new Error(errorMessages['DomainMaskingError']);
            }
        }
        if (this.embedOptions.serverUrl.indexOf('/bi') <= 0) {
            throw new Error(errorMessages['InvalidBoldBIURL']);
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

    _loadCloudDepedentFiles(responseInfo: { Data: { CdnUrl: string, DesignerServerUrl: string } }): any {
        const responseData: { CdnUrl: string, DesignerServerUrl: string } = responseInfo.Data;
        this.cdnLink = responseData.CdnUrl;
        this.designerRootUrl = responseData.DesignerServerUrl;
        this._addJquerydependentFiles();
    }

    _handleEnvironmentError(arg: any): void {
        if (arg.type == 'error') {
            this._throwError(errorMessages['EnvironmentMemberError']);
            this.invalidDetail = true;
        }
    }

    _addJquerydependentFiles: any = this.Invoke(function (): any {
        if (!this._checkDepedentFileExists(this.jQueryDepedentFile, false) && !(window.jQuery != undefined && window.jQuery().jquery == '3.5.0')) {
            const script: any = document.createElement('script');
            if (this.embedOptions.environment == BoldBI.Environment.Enterprise) {
                var URL = this.embedOptions.enableDomainMasking ? this.maskedCdnUrl + this.embedSDKWrapperVersion + "/script/" + this.jQueryDepedentFile : this.rootUrl + '/cdn/scripts/designer/' + this.jQueryDepedentFile;

                script.setAttribute('src', URL);
            } else {
                script.setAttribute('src', this.cdnLink + '/scripts/designer/' + this.jQueryDepedentFile);
            }

            if (this.embedOptions.nonce) {
                script.nonce = this.embedOptions.nonce;
            }
            document.head.appendChild(script);
            // now wait for it to load...
            script.onload = () => {
                try {
                    const scriptTag: any = document.createElement('script');
                    scriptTag.append(this.jqConflictFile);
                    if (this.embedOptions.nonce) {
                        scriptTag.nonce = this.embedOptions.nonce;
                    }
                    document.head.appendChild(scriptTag);
                    bbEmbed = window.bbEmbed = window.bb$;
                    this._addWrapperDependentFiles(this, this.wrapperDependentScriptFiles);
                    this._loadDepedentFiles();
                }
                catch (e) {
                    this._throwError(errorMessages['ServerNotFound']);
                    this.invalidDetail = true;
                }
            };
            script.onerror = (arg: any) => this._handleEnvironmentError(arg);
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
        if (this._isEmptyOrSpaces(this.embedOptions.cloudCdnTimeStamp)) {
            this._xhrRequestHelper('Get', this.dashboardServerApiUrl + '/system-settings/get-url', {}, {}, this._loadCloudDepedentFiles);
        }
        else {
            this.cdnLink = `https://cdn.boldbi.com/ds/${this.embedOptions.cloudCdnTimeStamp}/cdn`;
            this.designerRootUrl = 'https://data.boldbi.com';
            this._addJquerydependentFiles();
        }
    }

    _loadDepedentFiles(): any {
        const dashboardSettings = this.embedOptions?.dashboardSettings?.themeSettings;
        const globalSettings = this.embedOptions?.settings?.theme;
        const isLocalTheme = typeof dashboardSettings?.isLocalTheme === 'boolean'
            ? dashboardSettings.isLocalTheme
            : typeof globalSettings?.localTheme === 'boolean'
                ? globalSettings.localTheme
                : false;
        const dashboardTheme = dashboardSettings?.dashboard?.trim() || globalSettings?.dashboard?.trim() || '';
        const applicationTheme = dashboardSettings?.application?.trim() || globalSettings?.application?.trim() || '';

        if (dashboardSettings && !isLocalTheme && dashboardTheme !== '') {
            this._addedDependentFiles(this, this.dashboardThemeCssFiles, true);
        }
        else if (dashboardSettings && !isLocalTheme && applicationTheme !== '') {
            this._addedDependentFiles(this, this.applicationThemeCssFiles, true);
        }
        else if (!dashboardSettings || !globalSettings) {
            this._addedDependentFiles(this, this.applicationThemeCssFiles, true);
        }
        if (this.embedOptions.mode == BoldBI.Mode.Design || this.embedOptions.mode == BoldBI.Mode.DataSource || this.embedOptions.mode == BoldBI.Mode.Connection) {
            this._addedDependentFiles(this, this.designerScriptFiles, false);
        }
        else {
            this._addedDependentFiles(this, this.viewerScriptFiles, false);
        }

        const fontFamilyValue = !this._isEmptyOrSpaces(this.embedOptions.dashboardSettings?.fontFamily) ? this.embedOptions.dashboardSettings.fontFamily : !this._isEmptyOrSpaces(this.embedOptions?.settings?.theme?.fontFamily) ? this.embedOptions.settings.theme.fontFamily : '';
        if (fontFamilyValue !== '') {
            this._addedDependentFiles(this, this.fontFamilyCssFiles, true);
        }

        if (this.embedOptions.pinboardName != '') {
            this._addedDependentFiles(this, this.pinBoardScriptFiles, false);
        }

        if(this.embedOptions.mode == BoldBI.Mode.AIAssistant) {
            this._addedDependentFiles(this,this.AICssFiles,true);
            this._addedDependentFiles(this,this.AIScriptFiles,false);
            this._addedDependentFiles(this, this.applicationThemeCssFiles, true);
        }

        this._addedDependentFiles(this, this.cssFiles, true);
        if (this.embedOptions.pinboardName != '') {
            this._addedDependentFiles(this, this.pinboardCssFiles, true);
        }

        if (this.embedOptions.mode == BoldBI.Mode.Design || this.embedOptions.mode == BoldBI.Mode.DataSource || this.embedOptions.mode == BoldBI.Mode.Connection) {
            this._addedDependentFiles(this, this.designerCssFiles, true);
        }

        const bingMapValue : boolean = this.bingMapRequired;
        if (bingMapValue) {
            this._loadBingmapDependentFiles();
        }

        if (this.embedOptions.settings.azureMapRequired) {
            this._loadAzureMapDependentFiles();
        }

        if(this.embedOptions.mode != BoldBI.Mode.AIAssistant) {
        this._loadDependentDesignerFiles(this);
        }
    }

    _loadBingmapDependentFiles(): any {
        const scriptTag: any = document.createElement('script');
        if (this.embedOptions.nonce) {
            scriptTag.nonce = this.embedOptions.nonce;
        }
        scriptTag.src = 'https://www.bing.com/api/maps/mapcontrol';
        scriptTag.async = true;
        document.head.appendChild(scriptTag);
    }

    _loadAzureMapDependentFiles(): any {
        const cssTag = document.createElement('link');
        cssTag.rel = 'stylesheet';
        cssTag.href = 'https://atlas.microsoft.com/sdk/javascript/mapcontrol/3/atlas.min.css';
        document.head.appendChild(cssTag);
        
        const scriptTag = document.createElement('script');
        if (this.embedOptions.nonce) {
            scriptTag.nonce = this.embedOptions.nonce;
        }
        scriptTag.type = 'text/javascript';
        scriptTag.src = 'https://atlas.microsoft.com/sdk/javascript/mapcontrol/3/atlas.min.js';
        scriptTag.async = true;
        document.head.appendChild(scriptTag);
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
            if (!((file == 'jquery-ui.min.js' && window.jQuery.ui != undefined && window.jQuery.ui.version == '1.14.1') || (file == 'jsrender.min.js' && window.jQuery.views != undefined && window.jQuery.views.jsviews == 'v1.0.0-beta'))) {
                const scriptTag: any = document.createElement('script');
                if (this.embedOptions.nonce) {
                    scriptTag.nonce = this.embedOptions.nonce;
                }
                if (file == 'jquery.easing.1.3.min.js') {
                    scriptTag.src = (that.embedOptions.environment == BoldBI.Environment.Enterprise) ? that.embedOptions.enableDomainMasking ? this.maskedCdnUrl + this.embedSDKWrapperVersion + "/script/" + file : that.rootUrl + '/cdn/scripts/designer/' + file : that.cdnLink + '/scripts/designer/' + file;
                }
                if (file == 'jquery-ui.min.js') {
                    //scriptTag.src = this.maskedCdnUrl.slice(0, -1) + 'jquery-ui.min.js';
                    scriptTag.src = (that.embedOptions.environment == BoldBI.Environment.Enterprise) ? that.embedOptions.enableDomainMasking ? this.maskedCdnUrl + this.embedSDKWrapperVersion + "/script/" + file : that.rootUrl + '/cdn/scripts/' + file : that.cdnLink + '/scripts/' + file;
                }
                else if (file == 'jsrender.min.js') {
                    scriptTag.src = (that.embedOptions.environment == BoldBI.Environment.Enterprise) ? that.embedOptions.enableDomainMasking ? this.maskedCdnUrl + this.embedSDKWrapperVersion + "/script/" + file : that.rootUrl + '/cdn/scripts/designer/' + file : that.cdnLink + '/scripts/designer/' + file;
                }
                document.head.appendChild(scriptTag);
                scriptTag.onerror = (arg: any) => this._handleEnvironmentError(arg);
            }
        }.bind(that));
    }

    _addedDependentFiles(that: BoldBI, fileUriArray: Array<string>, isCSS: boolean): any {
        let fileUri: any = '';
        const localTheme = typeof this.embedOptions.dashboardSettings?.themeSettings?.isLocalTheme === 'boolean' ? this.embedOptions.dashboardSettings?.themeSettings?.isLocalTheme : this.embedOptions.settings?.theme?.localTheme ?? false;
        const themeAppearance = !this._isEmptyOrSpaces(this.embedOptions?.dashboardSettings?.themeSettings?.appearance) ? this.embedOptions.dashboardSettings.themeSettings.appearance : !this._isEmptyOrSpaces(this.embedOptions?.settings?.theme?.appearance) ? this.embedOptions.settings.theme.appearance : 'light';
        const themeApplication = !this._isEmptyOrSpaces(this.embedOptions?.dashboardSettings?.themeSettings?.application) ? this.embedOptions.dashboardSettings.themeSettings.application : !this._isEmptyOrSpaces(this.embedOptions?.settings?.theme?.application) ? this.embedOptions.settings.theme.application : '';
        const themeDashboard = !this._isEmptyOrSpaces(this.embedOptions?.dashboardSettings?.themeSettings?.dashboard) ? this.embedOptions.dashboardSettings.themeSettings.dashboard : !this._isEmptyOrSpaces(this.embedOptions?.settings?.theme?.dashboard) ? this.embedOptions.settings.theme.dashboard : '';

        fileUriArray.forEach(function (file: string): any {
            if (!that._checkDepedentFileExists(file, isCSS)) {
                if (isCSS) {
                    const fontFamilyValue = !this._isEmptyOrSpaces(this.embedOptions.dashboardSettings?.fontFamily) ? this.embedOptions.dashboardSettings.fontFamily : !this._isEmptyOrSpaces(this.embedOptions?.settings?.theme?.fontFamily) ? this.embedOptions.settings.theme.fontFamily : '';
                    if (that.embedOptions.environment == BoldBI.Environment.Enterprise) {
                        if (file == 'font-server.min.css') {
                            fileUri = that.embedOptions.enableDomainMasking ? this.maskedCdnUrl + this.embedSDKWrapperVersion + "/css/" + file : that.rootUrl + '/cdn/css/' + file;
                        }
                        else if (file == 'bootstrap.min.css') {
                            fileUri = that.rootUrl + '/Content/Styles/Bootstrap/' + file;
                        }
                        else if (file == 'pinboard-embed.min.css') {
                            fileUri = that.rootUrl + '/cdn/css/' + file;
                        }
                        else if (file == 'dashboard-viewer-bundle.min.css') {
                            fileUri = that.rootUrl + '/cdn/css/designer/' + file;
                        }
                        else if (file == 'dashboard-designer.min.css') {
                            fileUri = that.rootUrl + '/cdn/css/designer/' + file;
                        }
                        else if (file == 'boldbi.theme.definition.min.css') {
                            if (!localTheme && themeAppearance && !that.embedOptions.enableDomainMasking) {
                                fileUri = that.rootUrl + '/cdn/css/designer/' + themeAppearance + '/' + file;
                            }
                            else {
                                fileUri = that.embedOptions.enableDomainMasking ? this.maskedCdnUrl + this.embedSDKWrapperVersion + "/css/light/" + file : that.rootUrl + '/cdn/css/designer/light/' + file;
                            }
                        }
                        else if (file == 'application.theme.css' || file == 'dashboard.theme.css') {
                            if (!localTheme && themeDashboard) {
                                fileUri = that.customThemeUrl + '/dashboard?theme=' + themeDashboard;
                            }
                            else if (!localTheme && themeApplication) {
                                fileUri = that.customThemeUrl + '/application?theme=' + themeApplication;
                            }
                        }
                        else if (file == 'font-family.min.css') {
                            const fontFamilyUrl: any = this.rootUrl.replace(/\/bi(?!.*\/bi)/, '/ums/user-interface/fonts');
                            fileUri = fontFamilyUrl + '?family=' + fontFamilyValue;
                        }
                        else {
                            fileUri = that.embedOptions.enableDomainMasking ? this.maskedCdnUrl + this.embedSDKWrapperVersion + "/css/" + file : that.rootUrl + '/webdesignerservice/themes/' + file;
                        }
                    }
                    else {
                        if (file == 'font-server.min.css') {
                            fileUri = that.embedOptions.enableDomainMasking ? this.maskedCdnUrl + this.embedSDKWrapperVersion + "/css/" + file : that.cdnLink + '/css/' + file;
                        }
                        else if (file == 'bootstrap.min.css') {
                            fileUri = that.cdnLink + '/css/' + file;
                        }
                        else if (file == 'pinboard-embed.min.css') {
                            fileUri = that.cdnLink + '/css/' + file;
                        }
                        else if (file == 'boldbi.theme.definition.min.css') {
                            if (!localTheme && themeAppearance) {
                                fileUri = that.cdnLink + '/css/designer/' + themeAppearance + '/' + file;
                            }
                            else {
                                fileUri = that.embedOptions.enableDomainMasking ? this.maskedCdnUrl + this.embedSDKWrapperVersion + "/css/light/" + file : that.cdnLink + '/css/designer/light/' + file;
                            }
                        }
                        else if (file == 'application.theme.css' || file == 'dashboard.theme.css') {
                            if (!localTheme && themeDashboard) {
                                fileUri = that.rootUrl + '/theme/styles/dashboard?theme=' + themeDashboard;
                            }
                            else if (!localTheme && themeApplication) {
                                fileUri = that.rootUrl + '/theme/styles/application?theme=' + themeApplication;
                            }
                        }
                        else if (file == 'font-family.min.css') {
                            fileUri = that.rootUrl + '/user-interface/fonts?family=' + fontFamilyValue;
                        }
                        else {
                            fileUri = that.embedOptions.enableDomainMasking ? this.maskedCdnUrl + this.embedSDKWrapperVersion + "/css/" + file : that.cdnLink + '/css/designer/' + file;
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
                        const appLocaleName = !this._isEmptyOrSpaces(this.embedOptions?.localeSettings?.appLocale) ? this.embedOptions.localeSettings.appLocale : !this._isEmptyOrSpaces(this.embedOptions?.settings?.locale?.appLocale) ? this.embedOptions.settings.locale.appLocale : 'en-US';
                        if (file == 'bootstrap.min.js') {
                            fileUri = that.rootUrl + '/cdn/scripts/' + file;
                        }
                        else if (file == 'designerlocalization.js') {
                            fileUri = that.embedOptions.enableDomainMasking ? this.maskedCdnUrl + this.embedSDKWrapperVersion + "/script/" + file : that.rootUrl + '/designer/localization/' + file + '?c=' + appLocaleName;
                        }
                        else if (file == 'signalr.min.js') {
                            fileUri = that.embedOptions.enableDomainMasking ? this.maskedCdnUrl + this.embedSDKWrapperVersion + "/script/" + file : that.rootUrl + '/cdn/scripts/signalr/' + file;

                        }
                        else if (file == 'bbi-unifiedaiagent.min.js') {
                            fileUri = that.rootUrl + '/cdn/scripts/designer/' + file
                        }
                        else if (file == 'dashboard-designer-dependency.min.js') {
                            fileUri = that.rootUrl + '/cdn/scripts/designer/' + file
                        }
                        else {
                            fileUri = that.embedOptions.enableDomainMasking ? this.maskedCdnUrl + this.embedSDKWrapperVersion + "/script/" + file : that.rootUrl + '/cdn/scripts/designer/' + file;
                        }
                    }
                    else {
                        if (file == 'bootstrap.min.js') {
                            fileUri = that.cdnLink + '/scripts/' + file;
                        }
                        else if (file == 'designerlocalization.js') {
                            fileUri = that.embedOptions.enableDomainMasking ? this.maskedCdnUrl + this.embedSDKWrapperVersion + "/script/" + file : that.designerRootUrl + '/localization/' + file;
                        }
                        else if (file == 'signalr.min.js') {
                            fileUri = that.embedOptions.enableDomainMasking ? this.maskedCdnUrl + this.embedSDKWrapperVersion + "/script/" + file : that.cdnLink + '/scripts/signalr/' + file;
                        }
                        else {
                            fileUri = that.embedOptions.enableDomainMasking ? this.maskedCdnUrl + this.embedSDKWrapperVersion + "/script/" + file : that.cdnLink + '/scripts/designer/' + file;
                        }
                    }

                    const scriptTag: any = document.createElement('script');
                    scriptTag.type = 'text/javascript';
                    scriptTag.src = fileUri;
                    if (this.embedOptions.nonce) {
                        scriptTag.nonce = this.embedOptions.nonce;
                    }
                    if (bbEmbed('script[src= "' + fileUri + '"]').length < 1) {
                        document.head.appendChild(scriptTag);
                    }
                    scriptTag.onerror = (arg: any) => this._handleEnvironmentError(arg);
                }
            }
        }.bind(that));
    }

    _checkDepedentFileExists(file: string, isCSS: boolean): any {
        let isFileExists: any = false;
        const selectItem: any = isCSS ? 'link' : 'script';
        const tagList: any = document.head.querySelectorAll(selectItem);
        tagList.forEach(function (tag: { href?: any, src?: any }): any {
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

    getDashboardData(): any {
        const designerInstance: any = this._getDashboardInstance();
        const data: any = designerInstance.getDashboardData();
        return data;
    }

    _renderDashboard: any = this.Invoke(function (responseInfo: { Status?: boolean, Message?: string, Data?: any, errorMessage: any }): any {
        const that: BoldBI = this;
        const parameter: any = '';
        if(responseInfo == null) {
            throw new Error(errorMessages['NullResponse']);
        }
        const responseMessage: any = responseInfo.Data;
        if (!responseInfo.Status && !this.embedOptions.enableDomainMasking) {
            if (responseInfo.errorMessage == errorMessages['PageUnavailable']) {
                responseInfo.Status = false;
                responseInfo.Message = responseInfo.errorMessage;
            }
            if (responseInfo.Message === errorMessages['ObjectRefNotSet']) {
                if (this.embedOptions.mode === 'view' || this.embedOptions.mode === 'design') {
                    if (!this._isEmptyOrSpaces(this.embedOptions.dashboardId) || !this._isEmptyOrSpaces(this.embedOptions.dashboardPath)) {
                        responseInfo.Message = errorMessages['InvalidDbrdDetails'];
                    }
                    if (!this._isEmptyOrSpaces(this.embedOptions.pinboardName)) {
                        responseInfo.Message = errorMessages['InvalidPinboardName'];
                    }
                }
            }
            if (responseInfo.Message == undefined) {
                throw new Error(errorMessages['InvalidResponse']);
            } else {
                throw new Error(responseInfo.Message);
            }
        } else {
            if (Array.isArray(responseInfo.Data) && this._isEmptyOrSpaces(this.embedOptions.dashboardId) && this._isEmptyOrSpaces(this.embedOptions.dashboardPath)) {
                for (const item of responseInfo.Data) {
                    if ('ErrorMessage' in item) {
                        const errorMsg: any = `BoldBI Embedded: ${item.ErrorMessage}`;
                        if (!this._isNullOrUndefined(this.embedOptions.events.onError) && this.embedOptions.events.onError !== '') {
                            const errormessage: any = new Error(errorMsg);
                            this.onErrorClient(errormessage);
                        } else {
                            console.error(errorMsg);
                        }
                        responseInfo.Data = responseInfo.Data.filter((dataItem: any) => dataItem !== item);
                    }
                }
                const accessDeniedCount: number = responseMessage.filter((itemValue: { ErrorMessage: string }) => 'ErrorMessage' in itemValue && itemValue.ErrorMessage.includes('Access denied for the item')).length;
                if (accessDeniedCount === responseMessage.length) {
                    throw new Error(errorMessages['AccessDeniedItem']);
                }
                if (!responseInfo.Data.length) {
                    throw new Error(errorMessages['InvalidDbrdDetails']);
                }
            }
            const embedResponse: any = responseInfo.Data;
            if (this.embedOptions.pinboardName != '' && this.pinboardIds.length == 0) {
                if (embedResponse.ColumnInfo) {
                    this._renderPinboard(embedResponse);
                }
                else {
                    throw new Error(errorMessages['InvalidPinboardName']);
                }
            } else if (!this._isNullOrUndefined(embedResponse) && embedResponse.length) {
                if (this.isWidgetMode) {
                    const ele: any = document.getElementById(this.embedOptions.embedContainerId);
                    if (BoldBI._hasinstance(ele, 'embeddedBoldBI')) {
                        BoldBI._removeinstance(ele, 'embeddedBoldBI');
                    }
                    throw new Error(errorMessages['MultitabDbrdWidgetRender']);
                } else if (this.embedOptions.mode != BoldBI.Mode.View) {
                    const ele: any = document.getElementById(this.embedOptions.embedContainerId);
                    if (BoldBI._hasinstance(ele, 'embeddedBoldBI')) {
                        BoldBI._removeinstance(ele, 'embeddedBoldBI');
                    }
                    throw new Error(errorMessages['NotRenderMultitabDashboard']);
                }
                this._renderMultiTabDashboard(embedResponse);
            }
            else {
                let embedContainerId: any;
                if (!this.embedOptions.enableDomainMasking) {
                    embedResponse.ItemDetail = this.embedOptions.mode !== BoldBI.Mode.Connection ? (!this.embedOptions.token && !this.embedOptions.embedToken && typeof responseInfo.Data.ItemDetail === 'string' ? JSON.parse(responseInfo.Data.ItemDetail) : responseInfo.Data.ItemDetail) : null;
                }
                if (!this.embedOptions.token && !this.embedOptions.enableDomainMasking && !this.embedOptions.isPublicDashboard && !this.embedOptions.embedToken) {
                    if (this.embedOptions.mode == BoldBI.Mode.View || (embedResponse.ItemDetail && embedResponse.ItemDetail.IsEnableDefaultView)) {
                        this.isDefaultView = embedResponse.ItemDetail.IsEnableDefaultView;
                        this.embedOptions.dashboardSettings = this.embedOptions.dashboardSettings || {};
                        this.embedOptions.dashboardSettings.filterOverviewSettings = this.embedOptions.dashboardSettings.filterOverviewSettings || {};
                        this.embedOptions.settings = this.embedOptions.settings || {};
                        this.embedOptions.settings.viewer = this.embedOptions.settings.viewer || {};
                        this.embedOptions.settings.viewer.filterOverview = this.embedOptions.settings.viewer.filterOverview || {};
                        if (embedResponse.ItemDetail.ItemViews) {
                            this.embedOptions.dashboardSettings.filterOverviewSettings.viewId = this.embedOptions.settings.viewer.filterOverview.viewId = embedResponse.ItemDetail.ItemViews[0].ViewId;
                            this.embedOptions.dashboardSettings.filterOverviewSettings.viewName = this.embedOptions.settings.viewer.filterOverview.ViewName = embedResponse.ItemDetail.ItemViews[0].ViewName;
                            this.embedOptions.filterParameters = embedResponse.ItemDetail.ItemViews[0].QueryString;
                        }
                    }
                    if (this.embedOptions.mode == BoldBI.Mode.View) {
                        this.dashboardUrl = '/dashboard/' + embedResponse.ItemDetail.Id + '/' + embedResponse.ItemDetail.CategoryName + '/' + embedResponse.ItemDetail.Name + '?';
                    }
                    if (this.embedOptions.mode == BoldBI.Mode.View && this.embedOptions.viewId) {
                        this.embedOptions.dashboardId = embedResponse.ItemDetail.Id;
                    }
                }

                this.accessToken = that.embedOptions.enableDomainMasking ? null : that.embedOptions.token ? that.embedOptions.token : this.embedOptions.embedToken ? this.embedOptions.embedToken : embedResponse.access_token;
                let dashboardName: any = '';
                let childDashboardId: any;
                if (this.pinboardIds.length > 0) {
                    const id: any =  this.authToken ? embedResponse.Id : embedResponse.WidgetId;
                    bbEmbed.map(this.pinboardIds, function (value: object): any {
                        if (value['widgetId'] == id) {
                            const instance: any = that._getDashboardInstance(value['pinboardContainerId'] + '_embeddedbi');
                            if (that._isNullOrUndefined(instance)) {
                                embedContainerId = value['pinboardContainerId'];
                            }
                        }
                    });
                    childDashboardId =  this.authToken ? embedResponse.ItemId : '';
                }
                else if (this.isMultiTab) {
                    const Id: any = this.embedOptions.token || this.embedOptions.embedToken ? embedResponse.DashboardId.toString().replaceAll('-', '') : embedResponse.ItemDetail.Id.toString().replaceAll('-', '');
                    embedContainerId = 'multi_' + Id;
                    const dashboardNames: any = !that._isNullOrUndefined(that.embedOptions.dashboardSettings?.dashboardName) && typeof that.embedOptions.dashboardSettings.dashboardName !== 'string' ? that.embedOptions.dashboardSettings.dashboardName : that.embedOptions.settings.viewer?.dashboardName;
                    if (!that._isNullOrUndefined(dashboardNames) && Array.isArray(dashboardNames)) {
                        bbEmbed.map(dashboardNames, function (val: { dashboardId: string, displayName: string }): any {
                            if (embedResponse.ItemDetail.Id === val.dashboardId) {
                                dashboardName = val.displayName;
                            }
                        });
                    }
                    childDashboardId = that.embedOptions.token || this.embedOptions.embedToken ? embedResponse.DashboardId : '';
                } else {
                    embedContainerId = this.embedOptions.embedContainerId;
                    const dashboardNames: any = !that._isNullOrUndefined(that.embedOptions.dashboardSettings?.dashboardName) && typeof that.embedOptions.dashboardSettings.dashboardName == 'string' ? that.embedOptions.dashboardSettings.dashboardName : that.embedOptions.settings?.viewer?.dashboardName;
                    if (!that._isNullOrUndefined(dashboardNames) && typeof dashboardNames == 'string') {
                        dashboardName = dashboardNames;
                    }
                }
                const height: any = this.pinboardIds.length > 0 ? bbEmbed('#' + embedContainerId).height() : this.isMultiTab ? (this.embedOptions.height.indexOf('%') > 0 ? (this.embedOptions.height.includes('calc') ? 'calc(100% - 36px)' : 'calc(' + this.embedOptions.height + ' - 36px)') : (parseInt(this.embedOptions.height, 10) - 36 + 'px')) : this.embedOptions.height;
                if ((!this.embedOptions.enableDomainMasking && !this.embedOptions.isPublicDashboard && !this.embedOptions.embedToken && (typeof (responseInfo.Data.UserDetail) != 'undefined'))) {
                    embedResponse.UserDetail = typeof responseInfo.Data.UserDetail === 'string' ? JSON.parse(responseInfo.Data.UserDetail) : responseInfo.Data.UserDetail;
                }
                if (this.embedOptions.mode == BoldBI.Mode.Connection) {
                    bbEmbed('<style type="text/css"> .e-dashboarddesigner .bbi-dbrd-connection-mode-dlg .bbi-dbrd-connection-mode-header .bbi-dbrd-icon-container .bbi-dbrd-close-icon{ display: none !important} </style>').appendTo('head');
                }

                this._onBoldBIAuthorizionComplete(embedResponse);
                if (this.embedOptions.widgetList == '') {
                    const container = document.getElementById(embedContainerId);
                    if (container) {
                        document.getElementById(embedContainerId).style.height = height;
                        document.getElementById(embedContainerId).style.width = (this.embedOptions.pinboardName != '' ? document.getElementById(embedContainerId).style.width : (!this.isMultiTab ? this.embedOptions.width : '100%'));
                    }
                }
                const isViewMode: any = this.embedOptions.mode === BoldBI.Mode.View;
                const isDesignMode: any = this.embedOptions.mode === BoldBI.Mode.Design;
                const hasNoAuth: any = !this.embedOptions.authorizationServer?.url && !this.embedOptions.authorizationServer?.data && !this.embedOptions.token && !this.embedOptions.embedToken;

                // Handle View Mode
                if (isViewMode && hasNoAuth) {
                    if (!this._isNullOrUndefined(this.embedOptions.dashboardSettings?.filterOverviewSettings)) {
                        this.embedOptions.dashboardSettings.filterOverviewSettings.showSaveIcon = false;
                        this.embedOptions.dashboardSettings.filterOverviewSettings.showSaveAsIcon = false;
                    }

                    if (!this._isNullOrUndefined(this.embedOptions.settings?.viewer?.filterOverview)) {
                        this.embedOptions.settings.viewer.filterOverview.save = false;
                        this.embedOptions.settings.viewer.filterOverview.saveAs = false;
                    }
                }

                let dashboardOptions: any;
                const fontFamilyValue = !this._isEmptyOrSpaces(this.embedOptions.dashboardSettings?.fontFamily) ? this.embedOptions.dashboardSettings.fontFamily : !this._isEmptyOrSpaces(this.embedOptions?.settings?.theme?.fontFamily) ? this.embedOptions.settings.theme.fontFamily : '';
                const fontFamilyUrl: any = this.embedOptions.environment === BoldBI.Environment.Enterprise ? this.rootUrl.replace(/\/bi(?!.*\/bi)/, '/ums/user-interface/fonts') + '?family=' + fontFamilyValue : `${this.rootUrl + '/user-interface/fonts?family=' + fontFamilyValue}`;
                // eslint-disable-next-line
                dashboardOptions = {
                    siteUrl: this.baseUrl,
                    serviceUrl: this.designerRootUrl,
                    dataServiceUrl: this.designerRootUrl,
                    serverUrl: this.dashboardServerApiUrl,
                    hasAPIKey: that.embedOptions.enableDomainMasking || this.embedOptions.isPublicDashboard ? false : !(this._isJwtFormat(this.accessToken)),
                    viewerSettings: {
                        serviceUrl: this.designerRootUrl + '/v1.0/design'
                    },
                    nonce: this.embedOptions.nonce,
                    localeSettings: {
                        culture: !this._isEmptyOrSpaces(this.embedOptions?.localeSettings?.culture) ? this.embedOptions.localeSettings.culture : !this._isEmptyOrSpaces(this.embedOptions?.settings?.locale?.culture) ? this.embedOptions.settings.locale.culture : 'en-US',
                        dateFormat: !this._isEmptyOrSpaces(this.embedOptions?.localeSettings?.dateFormat) ? this.embedOptions.localeSettings.dateFormat : !this._isEmptyOrSpaces(this.embedOptions?.settings?.locale?.dateFormat) ? this.embedOptions.settings.locale.dateFormat : 'M/d/yyyy',
                        timeFormat: !this._isEmptyOrSpaces(this.embedOptions?.localeSettings?.timeFormat) ? this.embedOptions.localeSettings.timeFormat : !this._isEmptyOrSpaces(this.embedOptions?.settings?.locale?.timeFormat) ? this.embedOptions.settings.locale.timeFormat : 'h:mm:ss tt'
                    },
                    mode: this.embedOptions.mode,
                    localData: {
                        loadFromData: this.embedOptions.localData.loadFromData,
                        layoutData: this.embedOptions.localData.layoutData,
                        widgetData: this.embedOptions.localData.widgetData
                    },
                    environment: this.embedOptions.environment,
                    IsEmbed: true,
                    _isPublic: this.embedOptions.mode != BoldBI.Mode.Connection ? this.embedOptions.enableDomainMasking || !(this._isNullOrUndefined(this.embedOptions.embedToken) || this._isEmptyOrSpaces(this.embedOptions.embedToken)) ? '' : (this._isNullOrUndefined(embedResponse.ItemDetail)) ? '' : embedResponse.ItemDetail.IsPublic : '',
                    itemId: this.embedOptions.mode != BoldBI.Mode.Connection ? this.embedOptions.enableDomainMasking ? this.embedOptions.dashboardId : (this._isNullOrUndefined( this.authToken) || this._isEmptyOrSpaces( this.authToken)) ? embedResponse.ItemDetail.Id : that.embedOptions.isdesignerdraft ? embedResponse.draftItemID : childDashboardId ? childDashboardId : this.embedOptions.dashboardId : '',
                    dashboardPath: (this.embedOptions.mode == BoldBI.Mode.DataSource || this.embedOptions.mode == BoldBI.Mode.Connection) ? '' : this.embedOptions.enableDomainMasking ? this.embedOptions.dashboardId + '/0' : (this._isNullOrUndefined( this.authToken) || this._isEmptyOrSpaces( this.authToken)) ? embedResponse.ItemDetail.ItemLocation : childDashboardId ? childDashboardId + '/0' : this.embedOptions.dashboardId + '/' + embedResponse.dashboardVersion,
                    serviceAuthorizationToken: this.accessToken,
                    dashboardName: (this.embedOptions.mode == BoldBI.Mode.DataSource || this.embedOptions.mode == BoldBI.Mode.Connection) ? '' : this.embedOptions.enableDomainMasking ? '' : (this._isNullOrUndefined(embedResponse.ItemDetail)) ? '' : this._isEmptyOrSpaces(dashboardName) ? embedResponse.ItemDetail.Name : dashboardName,
                    dashboardDescription: (this.embedOptions.mode == BoldBI.Mode.DataSource || this.embedOptions.mode == BoldBI.Mode.Connection) ? '' : this.embedOptions.enableDomainMasking ? '' : (this._isNullOrUndefined(embedResponse.ItemDetail)) ? '' : embedResponse.ItemDetail.Description,
                    IsProxy: this.embedOptions.enableDomainMasking ? true : false,
                    theme: this._isEmptyOrSpaces(this.multiTabTheme) ? this.embedOptions.theme : this.multiTabTheme,
                    enableTheme: false,
                    enableFilterOverview: typeof this.embedOptions.dashboardSettings.enableFilterOverview === 'boolean' ? this.embedOptions.dashboardSettings.enableFilterOverview : this.embedOptions.settings?.viewer?.filterOverview?.enabled ?? true,
                    isPinWidget: this.pinboardIds.length > 0,
                    layoutSetting: this.embedOptions.layoutSettings,
                    export: {
                        Image: this.dashboardWidgetExports.export.image,
                        Excel: this.dashboardWidgetExports.export.excel,
                        Pdf: this.dashboardWidgetExports.export.pdf,
                        CustomFontFamilyUrl: fontFamilyValue ? fontFamilyUrl : '',
                        IsDefaultFont: false
                    },
                    dashboardExportMenuSettings: {
                        showCSV: this.dashboardWidgetExports.export.csv,
                        showExcel: this.dashboardWidgetExports.export.excel,
                        showImage: this.dashboardWidgetExports.export.image,
                        showPDF: this.dashboardWidgetExports.export.pdf
                    },
                    widgetExportMenuSettings: {
                        showCSV: this.dashboardWidgetExports.export.csv,
                        showExcel: this.dashboardWidgetExports.export.excel,
                        showImage: this.dashboardWidgetExports.export.image,
                        showPDF: this.dashboardWidgetExports.export.pdf
                    },
                    filterParameters: parameter + (this._isEmptyOrSpaces(this.embedOptions.filterParameters) ? '' : '&') + ((this.isMultiTab && window['multiTabFilterParameter']) ? window['multiTabFilterParameter'] : this.embedOptions.filterParameters),
                    designCanvasSettings: {
                        margin: !this._isNullOrUndefined(this.embedOptions?.designCanvasSettings?.margin) ? this.embedOptions.designCanvasSettings.margin : !this._isNullOrUndefined(this.embedOptions?.settings?.designCanvas?.margin) ? this.embedOptions.settings?.designCanvas?.margin : null
                    },
                    widgetContainerSettings: {
                        margin: !this._isNullOrUndefined(this.embedOptions?.widgetContainerSettings?.margin) ? this.embedOptions.widgetContainerSettings.margin : !this._isNullOrUndefined(this.embedOptions?.settings?.viewer?.widgetContainer?.margin) ? this.embedOptions.settings.viewer?.widgetContainer?.margin : null,
                        boxShadow: !this._isEmptyOrSpaces(this.embedOptions?.widgetContainerSettings?.boxShadow) ? this.embedOptions.widgetContainerSettings.boxShadow : !this._isEmptyOrSpaces(this.embedOptions?.settings?.viewer?.widgetContainer?.boxShadow) ? this.embedOptions.settings.viewer?.widgetContainer?.boxShadow : null
                    },
                    viewDataSettings: {
                        checkShowAllColumns: typeof this.embedOptions.dashboardSettings?.viewDataSettings?.showAllColumns === 'boolean' ? this.embedOptions.dashboardSettings.viewDataSettings.showAllColumns : this.embedOptions.settings?.viewData?.allColumns ?? false
                    },
                    viewDataActions: {
                        allowExporting: typeof this.embedOptions.dashboardSettings?.viewDataSettings?.enableExporting === 'boolean' ? this.embedOptions.dashboardSettings.viewDataSettings.enableExporting : this.embedOptions.settings?.viewData?.exporting ?? true,
                        allowColumnSelection: typeof this.embedOptions.dashboardSettings?.viewDataSettings?.enableColumnSelection === 'boolean' ? this.embedOptions.dashboardSettings.viewDataSettings.enableColumnSelection : this.embedOptions.settings?.viewData?.columnSelection ?? true
                    },
                    dashboardThemeSettings: {
                        appearance: !this._isEmptyOrSpaces(this.embedOptions?.dashboardSettings?.themeSettings?.appearance) ? this.embedOptions.dashboardSettings.themeSettings.appearance : !this._isEmptyOrSpaces(this.embedOptions?.settings?.theme?.appearance) ? this.embedOptions.settings.theme.appearance : 'light',
                        applicationTheme: !this._isEmptyOrSpaces(this.embedOptions?.dashboardSettings?.themeSettings?.application) ? this.embedOptions.dashboardSettings.themeSettings.application : !this._isEmptyOrSpaces(this.embedOptions?.settings?.theme?.application) ? this.embedOptions.settings.theme.application : null,
                        dashboardTheme:
                            this.embedOptions.dashboardSettings?.themeSettings?.dashboard?.trim()
                            ?? (this.embedOptions.dashboardSettings?.themeSettings?.isLocalTheme ? 'boldBITheme' : null)
                            ?? this.embedOptions.settings?.theme?.dashboard?.trim()
                            ?? (this.embedOptions.settings?.theme?.localTheme ? 'boldBITheme' : null)
                            ?? null
                    },
                    hideMetrics: typeof this.embedOptions.dashboardSettings?.showMetrics === 'boolean' ? !this.embedOptions.dashboardSettings.showMetrics : typeof this.embedOptions.settings?.viewer?.metrics === 'boolean' ? !this.embedOptions.settings.viewer.metrics : false,
                    widgets: this._getWidgetFilterInfo(),
                    showConfirmPublishPopup: true,
                    actionComplete: function (arg: { eventType: string, data?: any, source?: any, schema?: any }): any {
                        that._onBoldBIDashboardInstaceActionComplete(arg);
                    },
                    reportOpened: function (arg) {
                        that._onBoldBIDashboardInstaceReportOpen(arg);
                    },
                    performNavigateToDashboard: function (arg) {
                        that._onBoldBIDashboardInstanceNavigateToDashboard(arg);
                    },
                    beforeBannerIconRender: function (arg: object): any {
                        that._onBoldBIDashboardBeforeBannerIconRender(arg, embedResponse);
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
                    onBannerIconClick: function (arg: { name: string, selectedTheme: string }): any {
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
                    beforeNavigateUrlLinking: function (arg: object): any {
                        that._onBoldBIBeforeNavigateUrlLinking(arg);
                    },
                    beforeViewdataIconRender: function (arg: object): any {
                        that._onBoldBIBeforeViewdataIconRender(arg);
                    },
                    beforeControlMenuOpen: function (arg: { menuItems: Array<object> }): any {
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
                    },
                    beforeWidgetLayoutRender: function (args: any): any {
                        that._onBoldBIbeforeWidgetLayoutRender(args);
                    }
                };

                if(isViewMode || this.embedOptions.mode == BoldBI.Mode.AIAssistant) {
                    dashboardOptions.filterOverviewSettings = {
                        showSaveIcon: typeof this.embedOptions.dashboardSettings?.filterOverviewSettings?.showSaveIcon === 'boolean' ? this.embedOptions.dashboardSettings?.filterOverviewSettings?.showSaveAsIcon : this.embedOptions.settings?.viewer?.filterOverview?.save ?? false,
                        showSaveAsIcon: typeof this.embedOptions.dashboardSettings?.filterOverviewSettings?.showSaveAsIcon === 'boolean' ? this.embedOptions.dashboardSettings?.filterOverviewSettings?.showSaveAsIcon : this.embedOptions.settings?.viewer?.filterOverview?.saveAs ?? false,
                        showViewSavedFilterIcon: typeof this.embedOptions.dashboardSettings?.filterOverviewSettings?.showViewSavedFilterIcon === 'boolean' ? this.embedOptions.dashboardSettings?.filterOverviewSettings?.showViewSavedFilterIcon : this.embedOptions.settings?.viewer?.filterOverview?.viewSavedFilter ?? false,
                        viewId: !this._isNullOrUndefined(this.embedOptions.dashboardSettings?.filterOverviewSettings) && !this._isEmptyOrSpaces(this.embedOptions.dashboardSettings.filterOverviewSettings.viewId) ? this.embedOptions.dashboardSettings.filterOverviewSettings.viewId : !this._isNullOrUndefined(this.embedOptions.settings?.viewer?.filterOverview) && !this._isEmptyOrSpaces(this.embedOptions.settings.viewer.filterOverview.viewId) ? this.embedOptions.settings.viewer.filterOverview.viewId : null,
                        viewName: !this._isNullOrUndefined(this.embedOptions.dashboardSettings?.filterOverviewSettings) && !this._isEmptyOrSpaces(this.embedOptions.dashboardSettings.filterOverviewSettings.viewName) ? this.embedOptions.dashboardSettings.filterOverviewSettings.viewName : !this._isNullOrUndefined(this.embedOptions.settings?.viewer?.filterOverview) && !this._isEmptyOrSpaces(this.embedOptions.settings.viewer.filterOverview.viewName) ? this.embedOptions.settings.viewer.filterOverview.viewName : null
                    }
                }

                if (this.loadMultipleWidget) {
                    var widgetList: any = this.embedOptions.widgetList;
                    widgetList.forEach((widget: any) => {
                        const childDiv = document.createElement("div");
                        childDiv.id = `${widget.containerId}_embeddedbi`;
                        childDiv.style.width = "100%";
                        childDiv.style.height = "100%";
                        var isWidgetContainerExist = document.getElementById(widget.containerId);
                        if (isWidgetContainerExist) {
                            isWidgetContainerExist.append(childDiv);
                        }
                    });
                    const parsedWidgetMap = typeof responseInfo.Data.WidgetList === 'string' ? JSON.parse(responseInfo.Data.WidgetList) : responseInfo.Data.WidgetList;
                    const widgetMap: { [key: string]: string } = {};
                    Object.keys(parsedWidgetMap).forEach((key) => {
                        widgetMap[key.toLowerCase()] = parsedWidgetMap[key];
                    });
                    const updatedWidgetList = widgetList.map(widget => {
                        const widgetKey = widget.widgetName.toLowerCase();
                        const widgetId = widgetMap[widgetKey] || '';
                        return {
                            widgetId,
                            container: `${widget.containerId}_embeddedbi`
                        };
                    });
                    dashboardOptions.loadMultipleWidget = this.loadMultipleWidget;
                    dashboardOptions.multipleWidgetsCollection = updatedWidgetList;
                }

                if (this.embedOptions.widgetList == '') {
                    dashboardOptions.actionBegin = function (arg: any): any {
                        that._onBoldBIDashboardInstaceActionBegin(arg, embedContainerId);
                    };
                }
                if ((this.embedOptions.mode == BoldBI.Mode.View && !this.isWidgetMode && !this.isMultipleWidgetMode && !this.isPinboardRendering) || this.embedOptions.mode == BoldBI.Mode.Design || this.embedOptions.mode == BoldBI.Mode.AIAssistant) {
                    dashboardOptions.languageSettings = {
                        hideLanguageDropdown: typeof this.embedOptions.languageSettings?.hideLanguageDropdown === 'boolean' ? this.embedOptions.languageSettings.hideLanguageDropdown : this.embedOptions.settings?.language?.hideDropdown ?? false,
                        languageCode: !this._isEmptyOrSpaces(this.embedOptions?.languageSettings?.languageCode) ? this.embedOptions.languageSettings.languageCode : !this._isEmptyOrSpaces(this.embedOptions?.settings?.language?.code) ? this.embedOptions.settings.language.code : ''
                    };
                    dashboardOptions.customBrandSettings = {
                        hideHelpLink: typeof this.embedOptions.customBrandSettings?.hideHelpLink === 'boolean' ? this.embedOptions.customBrandSettings.hideHelpLink : this.embedOptions.settings?.brand?.hideHelpLink ?? false,
                        customBrandName: !this._isEmptyOrSpaces(this.embedOptions?.customBrandSettings?.customBrandName) ? this.embedOptions.customBrandSettings.customBrandName : !this._isEmptyOrSpaces(this.embedOptions?.settings?.brand?.name) ? this.embedOptions.settings.brand.name : '',
                        customDomain: !this._isEmptyOrSpaces(this.embedOptions?.customBrandSettings?.customDomain) ? this.embedOptions.customBrandSettings.customDomain : !this._isEmptyOrSpaces(this.embedOptions?.settings?.brand?.domain) ? this.embedOptions.settings.brand.domain : ''
                    };
                }
                if (!this.embedOptions.enableDomainMasking) {
                    if ((this.embedOptions.mode == BoldBI.Mode.View && !this.isPinboardRendering) || this.embedOptions.mode == BoldBI.Mode.Design) {
                        dashboardOptions.enableMobileView = this.restrictMobileView;
                        if (!this.embedOptions.isPublicDashboard && !this.embedOptions.embedToken && embedResponse.IsAnonymousUser) {
                            dashboardOptions.anonymousUserEmail = embedResponse.email;
                        }
                    }
                }
                if (this.embedOptions.mode == BoldBI.Mode.Design) {
                    if ((this.authToken && !this.embedOptions.dashboardId) || (!this.authToken && !this.embedOptions.enableDomainMasking && !this._isNullOrUndefined(embedResponse) && embedResponse.ItemDetail.IsDraft)) {
                        dashboardOptions.dashboardPath = '';
                    }
                    const datasourceId = !this._isNullOrUndefined(embedResponse) && !this.embedOptions.enableDomainMasking && !this._isEmptyOrSpaces(embedResponse.DatasourceId) ? embedResponse.DatasourceId : '';
                    if (!this._isEmptyOrSpaces(datasourceId)) {
                        dashboardOptions.datasource = datasourceId;
                    }

                    const datasourcesValue = Array.isArray(this.embedOptions?.datasources) && this.embedOptions.datasources.length > 0
                        ? this.embedOptions.datasources
                        : Array.isArray(this.embedOptions?.settings?.datasources) && this.embedOptions.settings.datasources.length > 0
                            ? this.embedOptions.settings.datasources
                            : [];
                    dashboardOptions.datasources = datasourcesValue;

                    dashboardOptions.disableAutoRecover = this.disableAutoRecover;

                    dashboardOptions.schedule = {
                        endPoint: this.scheduleEndpointUrl,
                        summaryText: ''
                    };
                    dashboardOptions.serverSettings = {
                        isAdmin: !this.embedOptions.enableDomainMasking ? typeof (embedResponse.IsAdmin) == 'undefined' ? false : embedResponse.IsAdmin : false
                    };
                    dashboardOptions.intermediateDbStatus = this.embedOptions.enableDomainMasking ? undefined : embedResponse.IntermediateDbStatus; //true
                    dashboardOptions.connectionList = this.embedOptions.enableDomainMasking ? undefined : embedResponse.ConnectionList; //""
                    dashboardOptions.isAllowUserToCreateDatasource = this.embedOptions.enableDomainMasking ? undefined : embedResponse.CanCreateDatasource; //true
                    dashboardOptions.enablePublicDashboardSetting = false;
                    dashboardOptions.beforeNavigateToDashboard = function (arg: object): any {
                        that._onBoldBIBeforeNavigateToDashboard(arg);
                    };
                    dashboardOptions.toolbarSettings = {
                        showToolbar: typeof this.embedOptions.toolbarSettings?.showToolbar === 'boolean' ? this.embedOptions.toolbarSettings.showToolbar : this.embedOptions.settings?.designer?.toolbar?.enabled ?? true
                    };
                    dashboardOptions.predefinedWidgets = {
                        categoryName: !this._isEmptyOrSpaces(this.embedOptions?.preConfiguredWidgets?.categoryName) ? this.embedOptions.preConfiguredWidgets.categoryName : !this._isEmptyOrSpaces(this.embedOptions?.settings?.designer?.preConfiguredWidgets?.categoryName) ? this.embedOptions.settings.designer.preConfiguredWidgets.categoryName : '',
                        dashboardId: !this._isEmptyOrSpaces(this.embedOptions?.preConfiguredWidgets?.dashboardId) ? this.embedOptions.preConfiguredWidgets.dashboardId : !this._isEmptyOrSpaces(this.embedOptions?.settings?.designer?.preConfiguredWidgets?.dashboardId) ? this.embedOptions.settings.designer.preConfiguredWidgets.dashboardId : ''
                    };
                    if (this.embedOptions.environment == BoldBI.Environment.Enterprise) {
                        dashboardOptions.configuration = this.embedOptions.enableDomainMasking ? ' ' : this.rootUrl + '/webdesignerservice/scripts/settings/' + embedResponse.Branding + '/settings.min.js';
                    } else {
                        dashboardOptions.configuration = this.cdnLink + '/scripts/settings/' + embedResponse.Branding + '/settings.min.js';
                    }
                    dashboardOptions.designerSettings = {
                        widgetsPanel: {
                            hideExistingWidgets: typeof this.embedOptions.dashboardSettings?.widgetsPanel?.hideExistingWidgets === 'boolean' ? this.embedOptions.dashboardSettings.widgetsPanel.hideExistingWidgets : this.embedOptions.settings?.designer?.widgetsPanel?.hideExistingWidgets ?? false,
                            hideDefaultWidgets: typeof this.embedOptions.dashboardSettings?.widgetsPanel?.hideDefaultWidgets === 'boolean' ? this.embedOptions.dashboardSettings.widgetsPanel.hideDefaultWidgets : this.embedOptions.settings?.designer?.widgetsPanel?.hideDefaultWidgets ?? false,
                            defaultPanelDisplayText: this.embedOptions.settings?.designer?.widgetsPanel ? this.embedOptions.settings?.designer?.widgetsPanel.defaultPanelDisplayText : '',
                            existingPanelDisplayText: this.embedOptions.settings?.designer?.widgetsPanel ? this.embedOptions.settings?.designer?.widgetsPanel.existingPanelDisplayText : '',
                            defaultPanelSearchPlaceholder: this.embedOptions.settings?.designer?.widgetsPanel ? this.embedOptions.settings?.designer?.widgetsPanel.defaultPanelSearchPlaceholder : '',
                            existingPanelSearchPlaceholder: this.embedOptions.settings?.designer?.widgetsPanel ? this.embedOptions.settings?.designer?.widgetsPanel.existingPanelSearchPlaceholder : '',
                            existingDashboards: Array.isArray(this.embedOptions.dashboardSettings?.widgetsPanel?.existingDashboards) && this.embedOptions.dashboardSettings.widgetsPanel.existingDashboards.length > 0 ? this.embedOptions.dashboardSettings.widgetsPanel.existingDashboards : Array.isArray(this.embedOptions.settings?.designer?.widgetsPanel?.existingDashboards) && this.embedOptions.settings.designer.widgetsPanel.existingDashboards.length > 0 ? this.embedOptions.settings.designer.widgetsPanel.existingDashboards : [],
                            dragAndDropSettings: {
                                rowSpan: this.embedOptions.settings?.designer?.widgetsPanel?.dragAndDropSettings?.rowSpan ?? null,
                                columnSpan: this.embedOptions.settings?.designer?.widgetsPanel?.dragAndDropSettings?.columnSpan ?? null,
                                isWidgetMode: this.embedOptions.settings?.designer?.widgetsPanel?.dragAndDropSettings?.isWidgetMode ?? false
                            }
                        },
                        dataSourceConfig: {
                            hideDataSourceConfig: typeof this.embedOptions.dashboardSettings?.dataSourceConfig?.hideDataSourceConfig === 'boolean' ? this.embedOptions.dashboardSettings.dataSourceConfig.hideDataSourceConfig : this.embedOptions.settings?.designer?.dataSourceConfig?.hideDataSourceConfig ?? false,
                            hideSampleDataSources: typeof this.embedOptions.dashboardSettings?.dataSourceConfig?.hideSampleDataSources === 'boolean' ? this.embedOptions.dashboardSettings.dataSourceConfig.hideSampleDataSources : this.embedOptions.settings?.designer?.dataSourceConfig?.hideSampleDataSources ?? false,
                            hideDataSourceList: typeof this.embedOptions.dashboardSettings?.dataSourceConfig?.hideDataSourceList === 'boolean' ? this.embedOptions.dashboardSettings.dataSourceConfig.hideDataSourceList : this.embedOptions.settings?.designer?.dataSourceConfig?.hideDataSourceList ?? false,
                            hideExpression: typeof this.embedOptions.dashboardSettings?.dataSourceConfig?.hideExpression === 'boolean' ? this.embedOptions.dashboardSettings.dataSourceConfig.hideExpression : this.embedOptions.settings?.designer?.dataSourceConfig?.hideExpression ?? false
                        },
                        hidePropertySettingIcon: this.embedOptions.settings?.designer?.hideSettings
                    };
                    dashboardOptions.userSettings = {
                        hidePreviewAs: typeof this.embedOptions.dashboardSettings?.showPreviewAs === 'boolean' ? !this.embedOptions.dashboardSettings.showPreviewAs : !(this.embedOptions.settings?.designer?.previewAs ?? true)
                    };
                }

                if (this.embedOptions.mode == BoldBI.Mode.Connection) {
                    dashboardOptions.connectionList = embedResponse.ConnectionList;
                }
                if (this.embedOptions.mode == BoldBI.Mode.DataSource) {
                    dashboardOptions.itemId = (this._isNullOrUndefined( this.authToken) || this._isEmptyOrSpaces( this.authToken)) ? embedResponse.ItemDetail.Id : this.embedOptions.datasourceId;
                    dashboardOptions.datasourceName = (this._isNullOrUndefined( this.authToken) || this._isEmptyOrSpaces( this.authToken)) ? embedResponse.ItemDetail.Name : this.embedOptions.datasourceName;
                    dashboardOptions.datasource = (this._isNullOrUndefined( this.authToken) || this._isEmptyOrSpaces( this.authToken)) ? embedResponse.ItemDetail.Id : this.embedOptions.datasourceId;
                }
                this.isMultipleWidgetMode = (this.embedOptions.widgetList == '') ? false : this.isMultipleWidgetMode;
                if (this.isWidgetMode) {
                    dashboardOptions.isPinWidget = this.isWidgetMode;
                    dashboardOptions.widgetId = (this._isNullOrUndefined( this.authToken) || this._isEmptyOrSpaces( this.authToken)) ? embedResponse.WidgetId : this.widgetName;
                }
                const dashboardHeader: any = typeof this.embedOptions.dashboardSettings?.showHeader === 'boolean' ? this.embedOptions.dashboardSettings.showHeader : this.embedOptions.settings?.viewer?.header ?? true;
                if (dashboardHeader == false) {
                    dashboardOptions.isHideHeader = true;
                } else {
                    dashboardOptions.isHideHeader = false;
                }

                if (this.isMultiTab) {
                    dashboardOptions.dashboardSettings = {
                        parentId: this.parentDbrdId,
                        isMultiTab: this.parentDbrdId == null || this.parentDbrdId === '' ? false : true
                    };
                }

                const dynamicConnectionEnabled = typeof this.embedOptions.dynamicConnection?.isEnabled === 'boolean' ? this.embedOptions.dynamicConnection.isEnabled : this.embedOptions.settings?.dynamicConnection?.enabled ?? false;
                if (dynamicConnectionEnabled) {
                    dashboardOptions.customIdentity = !this._isEmptyOrSpaces(this.embedOptions?.dynamicConnection?.identity) ? this.embedOptions.dynamicConnection.identity : !this._isEmptyOrSpaces(this.embedOptions?.settings?.dynamicConnection?.identity) ? this.embedOptions.settings.dynamicConnection.identity : '';
                }
                const refreshSettingsEnbaled: any = typeof this.embedOptions.autoRefreshSettings?.enabled === 'boolean' ? this.embedOptions.autoRefreshSettings?.enabled : this.embedOptions.settings?.viewer?.autoRefresh?.enabled ?? false;
                if (refreshSettingsEnbaled) {
                    dashboardOptions.enableAutoRefresh = true;
                    dashboardOptions.autoRefreshSettings = {
                        intervalSettings: {
                            mode: 'Hourly',
                            hourlySchedule: {
                                hours: typeof this.embedOptions.autoRefreshSettings.hourlySchedule?.hours === 'number' ? this.embedOptions.autoRefreshSettings.hourlySchedule?.hours : this.embedOptions.settings.viewer?.autoRefresh?.hourlySchedule?.hours,
                                minutes: typeof this.embedOptions.autoRefreshSettings.hourlySchedule?.minutes === 'number' ? this.embedOptions.autoRefreshSettings.hourlySchedule?.minutes : this.embedOptions.settings.viewer?.autoRefresh?.hourlySchedule?.minutes,
                                seconds: typeof this.embedOptions.autoRefreshSettings.hourlySchedule?.seconds === 'number' ? this.embedOptions.autoRefreshSettings.hourlySchedule?.seconds : this.embedOptions.settings.viewer?.autoRefresh?.hourlySchedule?.seconds
                            }
                        }
                    };
                }
               
                if(this.embedOptions.mode == BoldBI.Mode.AIAssistant) {
                    dashboardOptions.isUnifiedAI = true;
                    dashboardOptions.dataSourceId = this.embedOptions.dataSourceId;
                    dashboardOptions.dashboardApiUrl = this.dashboardServerApiUrl;                    
                }

                if (!this.loadMultipleWidget && ((this.embedOptions.embedAiAssistant?.enabled || this.embedOptions.settings?.aiAssistant?.enabled)) || this.embedOptions.mode == BoldBI.Mode.AIAssistant){
                    dashboardOptions.embedAiAssistant = {
                        enableAiAssistant: true,
                        aiAssistantPosition: !this._isEmptyOrSpaces(this.embedOptions?.embedAiAssistant?.position) ? this.embedOptions.embedAiAssistant.position : !this._isEmptyOrSpaces(this.embedOptions?.settings?.aiAssistant?.position) ? this.embedOptions.settings.aiAssistant.position : 'bottom',
                        hideAIDataUsage: typeof this.embedOptions.embedAiAssistant?.hideAiDataUsage === 'boolean' ?  this.embedOptions.embedAiAssistant?.hideAiDataUsage : typeof this.embedOptions.settings?.aiAssistant?.hideUsageAnalytics === 'boolean' ? this.embedOptions.settings?.aiAssistant?.hideUsageAnalytics : this.embedOptions.settings?.aiAssistant?.hideIcons?.usageAnalytics ?? false,
                        hideAIChatHelp: typeof this.embedOptions.embedAiAssistant?.hideIcons?.helpLink === 'boolean' ? this.embedOptions.embedAiAssistant?.hideIcons?.helpLink : this.embedOptions.settings?.aiAssistant?.hideChatHelp ?? false,
                        enableChatHistory: typeof this.embedOptions.settings?.aiAssistant?.hideIcons?.history === 'boolean' ? !(this.embedOptions.settings.aiAssistant.hideIcons.history) : true,
                        enableNewSession: typeof this.embedOptions.settings?.aiAssistant?.hideIcons?.newSession === 'boolean' ? !(this.embedOptions.settings.aiAssistant.hideIcons.newSession) : true,
                        showBetaTag: typeof this.embedOptions.settings?.aiAssistant?.hideBetaTag === 'boolean' ? !(this.embedOptions.settings.aiAssistant.hideBetaTag) : true,
                        headerTextColorHex: !this._isEmptyOrSpaces(this.embedOptions.settings?.aiAssistant?.headerTextColor) ? this.embedOptions.settings.aiAssistant.headerTextColor :  '',
                        showChatLogo: typeof this.embedOptions.settings?.aiAssistant?.hideLogo === 'boolean' ? !(this.embedOptions.settings.aiAssistant.hideLogo) : true,
                        showWelcomeMessage: typeof this.embedOptions.settings?.aiAssistant?.hideWelcomeNote === 'boolean' ? !(this.embedOptions.settings.aiAssistant.hideWelcomeNote) : true,
                        showDashboardCategory: typeof this.embedOptions.settings?.aiAssistant?.hideDashboardTag === 'boolean' ? !(this.embedOptions.settings.aiAssistant.hideDashboardTag) : true,
                        showDatasourceCategory: typeof this.embedOptions.settings?.aiAssistant?.hideDatasourceTag === 'boolean' ? !(this.embedOptions.settings.aiAssistant.hideDatasourceTag) : true,
                        dashboardId: Array.isArray(this.embedOptions.settings?.aiAssistant?.dashboards) && this.embedOptions.settings?.aiAssistant?.dashboards.length > 0 ? this.embedOptions.settings.aiAssistant.dashboards : [],
                        datasourceId: Array.isArray(this.embedOptions.settings?.aiAssistant?.dataSources) && this.embedOptions.settings?.aiAssistant?.dataSources.length > 0 ? this.embedOptions.settings.aiAssistant.dataSources : [],
                        suggestionCount: typeof this.embedOptions.settings?.aiAssistant?.queryDisplayLimit === 'number' ? this.embedOptions.settings.aiAssistant.queryDisplayLimit : 6,
                        customizedAITitle: !this._isEmptyOrSpaces(this.embedOptions.embedAiAssistant.name) ? this.embedOptions.embedAiAssistant.name : this.embedOptions.settings?.aiAssistant?.name ?? '',
                        customizedUserName: this.embedOptions.settings?.aiAssistant?.userName ?? '',
                    };
                    if(this.embedOptions.mode == BoldBI.Mode.AIAssistant){
                        dashboardOptions.customBrandSettings ={
                            ...dashboardOptions.customBrandSettings,
                            hideHelpLink: typeof this.embedOptions.settings?.aiAssistant?.hideIcons?.helpLink === 'boolean' ? this.embedOptions.settings?.aiAssistant.hideIcons?.helpLink : false,
                        }
                    }
                    
                }
                dashboardOptions.isAiSummariesEnabledGlobally = typeof this.embedOptions.embedAiAssistant?.summary?.enabled === 'boolean' ? this.embedOptions.embedAiAssistant?.summary?.enabled : this.embedOptions.settings?.aiAssistant?.summary?.enabled ?? false;
                if (dashboardOptions.isAiSummariesEnabledGlobally) {
                    dashboardOptions.embedAiAssistant = dashboardOptions.embedAiAssistant || {};
                    dashboardOptions.embedAiAssistant.summarization = dashboardOptions.embedAiAssistant.summarization || {};
                    dashboardOptions.embedAiAssistant.summarization.enableWidgetSummary = typeof this.embedOptions.embedAiAssistant?.summary?.includeWidgetSummary === 'boolean' ? this.embedOptions.embedAiAssistant?.summary?.includeWidgetSummary : this.embedOptions.settings.aiAssistant?.summary?.widget ?? false;
                    dashboardOptions.embedAiAssistant.summarization.enableDashboardSummary = typeof this.embedOptions.embedAiAssistant?.summary?.includeDashboardSummary === 'boolean' ? this.embedOptions.embedAiAssistant?.summary?.includeDashboardSummary : this.embedOptions.settings?.aiAssistant?.summary?.dashboard ?? false;
                }

                if (that.embedOptions.mode == BoldBI.Mode.AIAssistant) {

                    if (typeof window.BoldBIAI !== 'undefined' && window.BoldBIAI.UnifiedAIAgent) {
                        try {

                            let embedContainer: any = window.bbEmbed.call(that, '#' + embedContainerId);
                            const aiAgentInstance = new window.BoldBIAI.UnifiedAIAgent(embedContainer, dashboardOptions);
                            console.log("AI Assitant initialized successfully.");
                        } catch (error) {
                            console.error("Error initializing AI Assitant Agent:", error);
                            // Handle AI agent initialization error if necessary
                        }
                    } else {
                        throw new Error(errorMessages['AIAgentInitializationFailed']);
                    }
                }

                if (that.embedOptions.mode != BoldBI.Mode.AIAssistant && window.bbEmbed instanceof Function) {
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
                        this._throwError(errorMessages['ErrorInBoldBIDesigner']);
                    }
                    if (this.isMultipleWidgetMode == true) {
                        const widgetList = typeof embedResponse.WidgetList === 'string' ? JSON.parse(embedResponse.WidgetList) : embedResponse.WidgetList;
                        let index = -1;
                        Object.keys(widgetList).forEach((key) => {
                            index++;
                            if (widgetList[String(key)] == '') {
                                const error = errorMessages['InvalidWidgetName'];
                                delete widgetList[String(key)];
                                const containerId = this.embedOptions.widgetList[Number(index)].containerId;
                                this.errorOnContainer(error, containerId);
                                this.embedOptions.widgetList.splice(index, 1);
                                index--;
                            }
                        });
                        if (this.embedOptions.widgetList.length == 0) {
                            if (!this._isNullOrUndefined(this.embedOptions.events.onError) && this.embedOptions.events.onError != '') {
                                const errormessage = new Error(errorMessages['InvalidAllWidgetNames']);
                                this.onErrorClient(errormessage);
                            }
                            else {
                                throw new Error(errorMessages['InvalidAllWidgetNames']);
                            }
                        }
                        embedResponse.WidgetList = JSON.stringify(widgetList);
                    }
                } else if(this.embedOptions.mode != BoldBI.Mode.AIAssistant) {
                    throw new Error(errorMessages['bbEmbedNotDefined']);
                }
                if (this.embedOptions.widgetList == '') {
                    this._removeElementsClass(embedContainerId, '.preloader-wrap', 'viewer-blue-loader');
                }
                if (this.isMultiTab && !this.embedOptions.token && !this.embedOptions.isPublicDashboard && !this.embedOptions.embedToken && embedResponse.ItemDetail.ItemViews) {
                    const dashboardFilterSettings = this.embedOptions.dashboardSettings?.filterOverviewSettings;
                    const viewerFilterOverview = this.embedOptions.settings?.viewer?.filterOverview;

                    if (dashboardFilterSettings) {
                        dashboardFilterSettings.viewId = null;
                        dashboardFilterSettings.viewName = null;
                    }

                    if (viewerFilterOverview) {
                        viewerFilterOverview.viewId = null;
                        viewerFilterOverview.viewName = null;
                    }

                    this.embedOptions.filterParameters = null;

                }
            }
        }
    });

    _renderPinboard(itemDetail: object): any {
        const header: any = typeof this.embedOptions.pinboardSettings?.enablePinboardHeader === 'boolean' ? this.embedOptions.pinboardSettings?.enablePinboardHeader : this.embedOptions.settings.pinboard?.header ?? true;
        const widgetContainer: any = bbEmbed('<div id="server-app-container" style="background: #f9f9f9; overflow: hidden !important;min-height: 600px; width:' + this.embedOptions.width + ';"><div id="content-area" class="clearfix col-12 e-waitingpopup e-js" style="padding: 0;padding-bottom: 30px"><div id="homepage-page-container"><div id="homepage-header" style="display:' + (header ? 'block' : 'none') + ';font-family:var(--font-family)"><div id="element-container"><div id="homepage-menu" style="margin-top: 5px"><span id="homepage-list-container" style="font-size: 15px;width: 165px;line-height: 18px;padding: 25px;">' + this.embedOptions.pinboardName + '</span></div><div id="options-container"><div id="pinboard-fullscreen" class="server-banner-icon e-dashboard-banner-icon bbi-dbrd-designer-hoverable su su-maximize-1 e-icon-dbrd-theme" data-tooltip="Fullscreen" data-name="fullscreen" data-event="true" style="font-size: 14px;display: block;float: left;margin: 8px 15px 0 7px; cursor: pointer"></div><div id="divider"></div><div id="layout-container"><div id="layout" class="dropdown-toggle" data-bs-toggle="dropdown">Edit Layout</div><div class="dropdown-menu" id="layout-items" role="menu"><span class="su su-single-column" id="1"></span><span class="su su-two-column" id="11"></span><span class="su su-small-big-column" id="12"></span><span class="su su-big-small-column" id="21"></span><span class="su su-three-column" id="111"></span></div></div></div></div></div><div id="widget-container" data-homepage-id="" data-current-layout="" data-virtual-homepage="" style="margin-bottom: 30px"></div></div></div></div>');
        bbEmbed('#' + this.embedOptions.embedContainerId).append(widgetContainer);
        this._createPinboardDom(itemDetail);
        this._renderItem(itemDetail);
        this._removeElementsClass(this.embedOptions.embedContainerId, '.preloader-wrap', 'viewer-blue-loader');
        const that: BoldBI = this;
        bbEmbed(document).on('click', '.unpin-widget', function (e: { preventDefault?: any, target?: any }): any {
            e.preventDefault();
            const unpinWidgetInstance: any = bbEmbed('#' + bbEmbed(e.target).parents('li').find('.pinWidget').attr('id') + '_embeddedbi').data('BoldBIDashboardDesigner');
            const clientFnc: any = window[that.embedOptions.events?.pinboard?.onUnpin];
            if (clientFnc instanceof Function) {
                clientFnc.call(this, unpinWidgetInstance);
            }
            if (that.embedOptions.events?.pinboard?.onUnpin instanceof Function) {
                that.embedOptions.events?.pinboard?.onUnpin.call(that, unpinWidgetInstance);
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
            const clientFnc: any = window[that.embedOptions.events?.pinboard?.onLayoutChange];
            if (clientFnc instanceof Function) {
                clientFnc.call(this, bbEmbed('#widget-container'));
            }
            if (that.embedOptions.events?.pinboard?.onLayoutChange instanceof Function) {
                that.embedOptions.events?.pinboard?.onLayoutChange.call(that, bbEmbed('#widget-container'));
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
            that.widgetName =  that.authToken ? value.Id : value.WidgetId;
            that.isDashboardViewMode = false;
            that.dashboardViewName = '';
            const response: any = {
                Apistatus: true,
                Data:  that.authToken ? value : JSON.parse(value),
                Status: true
            };
            that._renderDashboard(response);
        });
    }

    _widgetNamesEmpty(): any {
        const error: any = errorMessages['EmptyWidgetName'];
        for (let index: any = 0; index < this.embedOptions.widgetList.length; index++) {
            const currentWidget: any = this.embedOptions.widgetList[Number(index)];
            if (this._isEmptyOrSpaces(currentWidget.widgetName)) {
                this.errorOnContainer(error, currentWidget.containerId);
                this.embedOptions.widgetList.splice(index, 1);
                index--;
            }
        }
        return this.embedOptions.widgetList.length > 0;
    }

    errorOnContainer(error: string, containerId: string): void {
        const errorMessage: any = '<div id="embedded-bi-error" style="display:table;height:100%;width:100%;"><div style="display: table-cell;vertical-align: middle;text-align: center;"><div style="display: inline-block;"><img src=' + this.errorImage + ' style="float: left"/><div style="float: left;margin-left: 10px;line-height: 20px;">BoldBI Embedded: ' + error + '</div></div>';
        document.getElementById(containerId).innerHTML = errorMessage;
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
        const embedQueryString: any = 'embed_nonce=' + this._uuidv4Generator() +
            '&homepageId=' + that.homepageItemId +
            '&layout=' + layout +
            '&embed_mode=' + this.embedOptions.mode +
            '&embed_timestamp=' + Math.round((new Date()).getTime() / 1000) +
            '&embed_expirationtime=' + this.embedOptions.expirationTime;
        if (!that.authToken && !that._isEmptyOrSpaces(that.embedOptions.authorizationServer.url)) {
            data = {
                embedQuerString: encodeURI(embedQueryString),
                embedQueryString: encodeURI(embedQueryString),
                dashboardServerApiUrl: this.dashboardServerApiUrl
            };
            this._xhrRequestHelper('POST', this.embedOptions.authorizationServer.url, data, this.embedOptions.authorizationServer.headers, this._changeLayoutSuccess);
        }
        else {
            const token: any = this._validatetoken(that.authToken);
            data = {
                'homepageId': that.homepageItemId,
                'layout': layout
            };
            bbEmbed.ajax({
                async: false,
                type: 'POST',
                url: that.dashboardServerApiUrl + this.embedGetDetailsEndPoint,
                headers: {
                    'Authorization': token
                },
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: bbEmbed.proxy(that._changeLayoutSuccess, that)
            });
        }
    }

    _changeLayoutSuccess: any = this.Invoke(function (result: { Status: boolean, Message: string }): any {
        if (result.Status && this.homepageItemId != '' && this.isVirtualHomepage) {
            this.afterVirtualHomepageSave(this.homepageItemId);
        }
        else if (!result.Status) {
            throw new Error(errorMessages['LayoutFailure'] + result.Message);
        }
    });

    _createPinboardDom: any = this.Invoke(function (itemDetail: { ColumnInfo?: any, ItemType?: any, Id?: any, IsVirtualHomepage?: any }): any {
        const that: BoldBI = this;
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
                            const unpinWidget: any = typeof that.embedOptions.pinboardSettings?.enableUnpinWidget === 'boolean' ? that.embedOptions.pinboardSettings?.enableUnpinWidget : that.embedOptions.settings?.pinboard?.unpinWidget ?? true;
                            const deleteIconDiv: any = unpinWidget ? '<div id="widget-icons"><i class="items unpin-widget su su-delete" data-bs-toggle="tooltip" data-original-title="Unpin Widget"  style="color: black;" /></div>' : '';
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
            bbEmbed('#widget-container').append('<ul id="column-1" class="dashboard-column col-lg-12 col-md-12 col-sm-12 col-12" data-column-id="1"><li class="dashboard-list"><div class="dashboard" id="dashboard_1_1" style="height:100%;width:100%"></div></li></ul>');
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
                bbEmbed('#column-1').removeClass().addClass('col-lg-12 col-md-12 col-sm-12 col-12');
                break;
            case 11:
                bbEmbed('#column-1,#column-2').removeClass().addClass('col-lg-6 col-md-6 col-sm-6 col-6');
                break;
            case 12:
                bbEmbed('#column-1').removeClass().addClass('col-lg-4 col-md-4 col-sm-4 col-4');
                bbEmbed('#column-2').removeClass().addClass('col-lg-8 col-md-8 col-sm-8 col-8');
                break;
            case 21:
                bbEmbed('#column-1').removeClass().addClass('col-lg-8 col-md-8 col-sm-8 col-8');
                bbEmbed('#column-2').removeClass().addClass('col-lg-4 col-md-4 col-sm-4 col-4');
                break;
            case 111:
                bbEmbed('#column-1,#column-2,#column-3').removeClass().addClass('col-lg-4 col-md-4 col-sm-4 col-4');
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
                const clientFnc: any = window[that.embedOptions.events.onResize];
                if (clientFnc instanceof Function) {
                    clientFnc.call(that, dbrdInstance);
                }
                if (that.embedOptions.events.onResize instanceof Function) {
                    that.embedOptions.events.onResize.call(that, dbrdInstance);
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
        if (typeof window.bbEmbed.uniqueSort !== 'function') {
            window.bbEmbed.uniqueSort = window.bbEmbed.unique;
        }
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
            update: function (event: { target?: any }, ui: { item?: any }): any {
                that.toColumn = bbEmbed(event.target).data('column-id');
                that.toPosition = ui.item.index() + 1;
            },
            start: function (event: { target?: any }, ui: { item?: any }): any {
                bbEmbed('li.placeholder').append('<div class="placeholder-text" style="color: dimgray; font-size: 20px;padding-top: 10px;text-align: center;font-family:var(--font-family)">Drag your widgets here to customize layout</div>');
                bbEmbed('li.placeholder').css({ 'height': ui.item.height().toString() + 'px', 'background-color': '#eeeeee', 'border': 'dashed lightgray' });
                bbEmbed('#widget-container ul li.empty').remove();
                that.fromColumn = bbEmbed(event.target).data('column-id');
                that.fromPosition = ui.item.index() + 1;
                that.toColumn = bbEmbed(event.target).data('column-id');
                that.toPosition = ui.item.index() + 1;
                const dragPinWidgetInstance: any = bbEmbed('#' + ui.item.find('.pinWidget').attr('id') + '_embeddedbi').data('BoldBIDashboardDesigner');
                const clientFnc: any = window[that.embedOptions.events?.pinboard?.onDrag];
                if (clientFnc instanceof Function) {
                    clientFnc.call(this, dragPinWidgetInstance);
                }
                if (that.embedOptions.events?.pinboard?.onDrag instanceof Function) {
                    that.embedOptions.events?.pinboard?.onDrag.call(that, dragPinWidgetInstance);
                }
            },
            stop: function (event: { target?: any }, ui: { item?: any }): any {
                that.showEmptyList();
                const clientFnc: any = window[that.embedOptions.events?.pinboard?.onDrop];
                const dropPinWidgetInstance: any = bbEmbed('#' + ui.item.find('.pinWidget').attr('id') + '_embeddedbi').data('BoldBIDashboardDesigner');
                if (clientFnc instanceof Function) {
                    clientFnc.call(this, dropPinWidgetInstance);
                }
                if (that.embedOptions.events?.pinboard?.onDrop instanceof Function) {
                    that.embedOptions.events?.pinboard?.onDrop.call(that, dropPinWidgetInstance);
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
        const embedQueryString: any = 'embed_nonce=' + this._uuidv4Generator() +
            '&homepageId=' + homepageItemId +
            '&moveFrom=' + JSON.stringify(from) +
            '&moveTo=' + JSON.stringify(to) +
            '&embed_mode=' + this.embedOptions.mode +
            '&embed_timestamp=' + Math.round((new Date()).getTime() / 1000) +
            '&embed_expirationtime=' + this.embedOptions.expirationTime;

        if (!that.authToken && !that._isEmptyOrSpaces(that.embedOptions.authorizationServer.url)) {
            data = {
                embedQuerString: encodeURI(embedQueryString),
                embedQueryString: encodeURI(embedQueryString),
                dashboardServerApiUrl: this.dashboardServerApiUrl
            };
            this._xhrRequestHelper('POST', this.embedOptions.authorizationServer.url, data, this.embedOptions.authorizationServer.headers, this._dragAndDropSuccess);
        }
        else {
            var token = this._validatetoken(that.authToken)
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
                    'Authorization': token
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
        const embedQueryString: any = 'embed_nonce=' + this._uuidv4Generator() +
            '&homepageId=' + homepageItemId +
            '&unpinPosition=' + JSON.stringify(unpinPosition) +
            '&isUnpin=' + true +
            '&embed_mode=' + this.embedOptions.mode +
            '&embed_timestamp=' + Math.round((new Date()).getTime() / 1000) +
            '&embed_expirationtime=' + this.embedOptions.expirationTime;

        if (!that.authToken && !that._isEmptyOrSpaces(that.embedOptions.authorizationServer.url)) {
            data = {
                embedQuerString: encodeURI(embedQueryString),
                embedQueryString: encodeURI(embedQueryString),
                dashboardServerApiUrl: this.dashboardServerApiUrl
            };
            this._xhrRequestHelper('POST', this.embedOptions.authorizationServer.url, data, this.embedOptions.authorizationServer.headers, this._unPinSuccess);
        }
        else {
            let token : any = this._validatetoken(that.authToken);
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
                    'Authorization': token
                },
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: bbEmbed.proxy(that._unPinSuccess, that)
            });
        }
    }

    _unPinSuccess(result: { Status: boolean }): any {
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

    _dragAndDropSuccess: any = this.Invoke(function (result: { Status: boolean, Message: string }): any {
        if (!result.Status) {
            throw new Error(errorMessages['DragAndDropError'] + result.Message);
        }
    });

    _renderItem(itemDetail: { ItemType?: any, ColumnInfo?: any }): any {
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
                                actionBegin: function (args: { eventType: string }): any {
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
                                afterWidgetRender: bbEmbed.proxy(function (args: number, param: { data?: any }): any {
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
                                beforeWidgetIconRendered: bbEmbed.proxy(function (args: number, event: { widgetInformation?: any, iconsinformation?: any }): any {
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
                                onMenuIconClick: function (information: { name?: any, target?: any, event?: any }): any {
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
                            bbEmbed('#widget_' + (i + 1) + '_' + (j + 1)).append('<div class="pinWidget" style="height:calc(100% - 5px);width:calc(100% - 25px);overflow: hidden !important;" id="' + pinboardIdName + '"><div id="' + pinboardIdName + '_embeddedbi" class="pinBoardDbrd"></div ></div>');
                            that.pinBoardRendered = false;
                            that.pinboardIds.push({ 'widgetId': column[`${i}`].Item[`${j}`].Id, 'pinboardContainerId': pinboardIdName });
                            that.pinboardDetails[that.pinboardDetails.length] = that.authToken ? column[`${i}`].Item[`${j}`] : column[`${i}`].Item[`${j}`].WidgetDetails;

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
                    beforeControlMenuOpen: function (e: { menuData?: any }): any {
                        e.menuData.splice(1, 1);
                    },
                    onTabSelectionFailure: 'OnFailtoLoadChildDashboard',
                    beforeContextMenuOpen: function (e: { menuData: any }): any {
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


    _addWidgetInPinboard(itemDetails: { ColumnInfo?: any }): any {
        const ulElement: any = bbEmbed('#widget-container').find('ul:first');
        if (bbEmbed('#widget-container').find('ul:first li').length == 1 && bbEmbed('#widget-container').find('ul:first li').hasClass('empty')) {
            bbEmbed('#widget-container').find('ul:first li').remove();
        }
        const ulElementListLength: any = bbEmbed('#widget-container').find('ul:first li').length;
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
        const deleteIconDiv: any = this.embedOptions.pinboardSettings.enableUnpinWidget || this.embedOptions.pinboardSettings.enableUnpinWidget === undefined ? '<div id="widget-icons"><i class="items unpin-widget su su-delete" data-bs-toggle="tooltip" data-original-title="Unpin Widget"  style="color: black;" /></div>' : '';
        bbEmbed(ulElement).prepend('<li class="list-item"><div class="widget" id=widget_' + 1 + '_' + (ulElementListLength + 1) + ' data-dashboardurl="' + href + '" style="height: ' + height + 'px;width:100%;background:#fff;"><div class="widget-sortable" style="width:100%;float:left;display:block;height:0px"><div style="height:100%;width:100%;cursor:move;"><div id="item-name">' + itemName + '</div>' + deleteIconDiv + '</div></div></div></li>');
        const pinboardIdName: any = this.embedOptions.embedContainerId + '_pinBoard_1' + '_' + (ulElementListLength + 1);
        bbEmbed('#widget_1' + '_' + (ulElementListLength + 1)).append('<div class="pinWidget" style="height:calc(100% - 5px);width:calc(100% - 25px);overflow: hidden !important;" id="' + pinboardIdName + '"><div id="' + pinboardIdName + '_embeddedbi" class="pinBoardDbrd"></div ></div>');
        this.pinBoardRendered = false;
        this.pinboardIds.push({ 'widgetId': column.Item[0].Id, 'pinboardContainerId': pinboardIdName });
        this.loadWidget(column.Item[0].Id, column.Item[0].ItemId);
        this.enableSorting();
        this.setListMinimumHeight();
        this._removeElementsClass(this.embedOptions.embedContainerId, '.preloader-wrap', 'viewer-blue-loader');
    }

    _renderMultiTabDashboard: any = this.Invoke(function (embedResponse: object): any {
        this.isMultiTab = true;
        const that: BoldBI = this;
        const embedContainer: any = bbEmbed('#' + that.embedOptions.embedContainerId);
        embedContainer.html('');
        if (typeof ejdashboard !== 'undefined' && ejdashboard.base && typeof ejdashboard.base.registerLicense === 'function') {
            ejdashboard.base.registerLicense('Ngo9BigBOggjGyl/Vkd+XU9FfV5AQmBIYVp/TGpJfl96cVxMZVVBJAtUQF1hTH9Td0BiXH9ecnVWTmFfWkd3');
        }
        const parentContainerName: any = that.embedOptions.embedContainerId + '_parent_multi_tab_dashboard';
        const multitabParentContainer: any = bbEmbed('<div id="' + parentContainerName + '" class="bi-dashboard parent-multitab-dbrd" style="height: 100% !important"></div>');
        embedContainer.append(multitabParentContainer);
        const containerName: any = that.embedOptions.embedContainerId + '_multi_tab_dashboard';
        const multiTabContainer: any = bbEmbed('<div id="' + containerName + '" class="multitab-dbrd" style="height: 100% !important"></div>');
        multitabParentContainer.append(multiTabContainer);
        const tabHeader: any = bbEmbed('<div class="e-tab-header"></div>');
        const tabContent: any = bbEmbed('<div class="e-content"></div>');
        bbEmbed.map(embedResponse, function (value: { ItemDetail?: any, parentId?: any, DashboardId?: any, DashboardName?: any, TabName?: any }): any {
            let dashboardItemDetail: any = {};
            if (that.embedOptions.token || that.embedOptions.embedToken) {
                dashboardItemDetail.Id = value.DashboardId;
                dashboardItemDetail.Name = value.DashboardName;
                dashboardItemDetail.TabName = value.TabName || value.DashboardName;
            } else {
                dashboardItemDetail = JSON.parse(value.ItemDetail);
                dashboardItemDetail.TabName = value.TabName || dashboardItemDetail.Name;
            }
            that.parentDbrdId = that.authToken ? that.embedOptions.dashboardId : value.parentId;
            const dashboardId: any = dashboardItemDetail.Id.replaceAll('-', '');
            that.dashboardDetails[`${dashboardId}`] = value;
            if (!that._isNullOrUndefined(that.embedOptions.dashboardSettings.dashboardName) && typeof that.embedOptions.dashboardSettings.dashboardName != 'string') {
                bbEmbed.map(that.embedOptions.dashboardSettings.dashboardName, function (val: { dashboardId: string, displayName: string }): any {
                    dashboardItemDetail.Name = (dashboardId == val.dashboardId.replaceAll('-', '')) ? that._isEmptyOrSpaces(val.displayName) ? dashboardItemDetail.Name : val.displayName : dashboardItemDetail.Name;
                });
            }
            tabHeader.append(bbEmbed('<div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">' + dashboardItemDetail.TabName + '</div>'));
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
    });

    _tabSelected(): any {
        if (typeof ejdashboard !== 'undefined' && ejdashboard.base && typeof ejdashboard.base.registerLicense === 'function') {
            const containerName: any = window.bbEmbed('.parent-multitab-dbrd').children().attr('id');
            for (let i: any = 0; i < window.bbEmbed('#' + containerName + ' .e-toolbar-item').length; i++) {
                window.bbEmbed('.e-content').find('#e-content-' + containerName + '_' + i).attr('style', 'display:block !important');
                if (window.bbEmbed('#' + containerName + ' .e-toolbar-item.e-active').children().attr('aria-controls') == 'e-content-' + containerName + '_' + i) {
                    this._handleTabSelected(containerName, i);
                }
                else {
                    window.bbEmbed(window.bbEmbed('.e-content').find('#e-content-' + containerName + '_' + i).children()).css({ 'display': 'block', 'position': 'absolute', 'left': window.bbEmbed('.e-content.e-lib.e-touch').width() * (i + 1) });
                }
            }
        }
        else {
            const containerName: any = window.bbEmbed('.multitab-dbrd').attr('id');
            for (let i: any = 0; i < window.bbEmbed('#' + containerName + ' .e-toolbar-item').length; i++) {
                window.bbEmbed('.e-content').find('#e-content-' + containerName + '_' + i).attr('style', 'display:block !important');
                if (window.bbEmbed('#' + containerName + ' .e-toolbar-item.e-active').attr('aria-controls') == 'e-content-' + containerName + '_' + i) {
                    this._handleTabSelected(containerName, i);
                }
                else {
                    window.bbEmbed(window.bbEmbed('.e-content').find('#e-content-' + containerName + '_' + i).children()).css({ 'display': 'block', 'position': 'absolute', 'left': window.bbEmbed('.e-content.e-lib.e-touch').width() * (i + 1) });
                }
            }
        }
    }
    _handleTabSelected(containerName: any, i: any): any {
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
    }

    _isAIDepdencyLoaded(that: BoldBI): any {
        if (that.embedOptions.mode == BoldBI.Mode.AIAssistant && window.bbEmbed instanceof Function && typeof window.BoldBIAI !== 'undefined' && window.BoldBIAI.UnifiedAIAgent) {
            if (that.embedOptions.token || that.embedOptions.embedToken) {
                that.tokenResponse = {
                    ItemDetail: {
                        IsPublic: false,
                        Name: "AIAssitant"
                    }
                };
                that._renderDashboard({ Apistatus: true, Data: that.tokenResponse, Status: true });
            }
            else {
                that._getAuthorizationToken();
            }
        }
        else {
            setTimeout(that._isAIDepdencyLoaded, 500, that);
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

            if (that.embedOptions.token || that.embedOptions.embedToken) {
                that.authToken = that.embedOptions.token ? that.embedOptions.token : that.embedOptions.embedToken;
                if (that.embedOptions.token && that.embedOptions.isPublicDashboard || (that.embedOptions.embedToken && that.embedOptions.mode != BoldBI.Mode.Design && that.embedOptions.mode != BoldBI.Mode.Connection && that.embedOptions.mode != BoldBI.Mode.DataSource && !that.embedOptions.isMultiTabDashboard && !that.widgetName && !that.embedOptions.viewId && !that.embedOptions.pinboardName && !that.editIgnore)) {
                    that.tokenResponse = {
                        dashboardVersion: that.embedOptions.customDashboardVersion,
                        ItemDetail: {
                            IsPublic: true,
                            Description: '',
                            Name: ''
                        }
                    };
                    that._renderDashboard({ Apistatus: true, Data: that.tokenResponse, Status: true });
                }
                else {
                    var token = that._validatetoken(that.authToken);
                    if (that.embedOptions.dashboardPath && !that.embedOptions.dashboardId) {
                        that._throwError(errorMessages['DbrdPathTokenAPIError']);
                    }
                    else if (that.embedOptions.datasourceName && !that.embedOptions.datasourceId) {
                        that._throwError(errorMessages['DataSourceTokenAPIError']);
                    }
                    else if (that.embedOptions.viewName && !that.embedOptions.viewId) {
                        that._throwError(errorMessages['ViewNameTokenAPIError']);
                    }
                    else if ((that.isDashboardRendering && that.embedOptions.dashboardId) || (that.isPinboardRendering && that.embedOptions.pinboardName)) {
                        const apiUrl: any = that.isDashboardRendering ? that.dashboardServerApiUrl + '/v5.0/dashboards/' + that.embedOptions.dashboardId + '?canIgnorePublishDetails=true' : that.dashboardServerApiUrl + '/pinboard/' + that.embedOptions.pinboardName;
                        bbEmbed.ajax({
                            async: false,
                            type: 'GET',
                            url: apiUrl,
                            headers: {
                                'Authorization': token
                            },
                            contentType: 'application/json',
                            success: function (result: { IsMultiDashboard?: any, TabDetail?: any, Status?: any, Data?: any, Version?: any, CanWrite: any }): any {
                                if (result) {
                                    that.tokenResponse.dashboardVersion = result.Version;
                                    that.tokenResponse.CanWrite = result?.CanWrite ?? false;
                                    const resultData: any = (that.isDashboardRendering && result.IsMultiDashboard && that.embedOptions.mode == BoldBI.Mode.Design) ? 'Designer embedding' : (that.isDashboardRendering && result.IsMultiDashboard) ? result.TabDetail : (that.isPinboardRendering && result.Status) ? result.Data : that.tokenResponse;
                                    that._authorizeResponse = { Apistatus: true, Data: resultData, Status: true };
                                    if (resultData != 'Designer embedding' && that.embedOptions.mode != BoldBI.Mode.Design) {
                                        that._renderDashboard({ Apistatus: true, Data: resultData, Status: true });
                                    }
                                    else if (resultData != 'Designer embedding' && that.embedOptions.mode == BoldBI.Mode.Design) {
                                        if (result.CanWrite) {
                                            that._renderDashboard({ Apistatus: true, Data: resultData, Status: true });
                                        }
                                        else {
                                            that._throwError(errorMessages['InvalidEditAccess']);
                                        }
                                    }
                                    else {
                                        that._throwError(errorMessages['NotRenderMultitabDashboard']);
                                    }
                                }
                                else {
                                    if (that.embedOptions.isMultiTabDashboard && that.embedOptions.embedToken && that.embedOptions.mode == BoldBI.Mode.Design) {

                                        that._throwError(errorMessages['NotRenderMultitabDashboardForAnonymousUser']);
                                    }
                                    else if (that.embedOptions.embedToken && that.embedOptions.mode == BoldBI.Mode.Design) {
                                        that._throwError(errorMessages['NotRenderDesignerForAnonymousUser']);
                                    }
                                    else {
                                        that._throwError(errorMessages['DashboardNotAvailable']);
                                    }
                                }
                            },
                            error: function (jqXHR: { status: number, responseText: string }): any {
                                if (jqXHR.status == 0) {
                                    that._throwError(errorMessages['PageUnavailable']);
                                }
                                if (jqXHR.status == 401) {
                                    const isJwtToken = that._isJwtFormat(that.authToken);
                                    that._throwError(isJwtToken ? errorMessages['InvalidAccessToken'] : errorMessages['InvalidApiKey']);
                                }
                                else if (jqXHR.status == 404 && that.isDashboardRendering) {
                                    that._throwError(errorMessages['InvalidDashboardID']);
                                }
                                else {
                                    that._throwError(errorMessages['InvalidPinboardName']);
                                }
                            }
                        });

                    }
                    else if (that.isDashboardRendering && that.embedOptions.mode == BoldBI.Mode.Design && (that._isEmptyOrSpaces(that.embedOptions.dashboardId)) && (that._isEmptyOrSpaces(that.embedOptions.dashboardPath))) {
                        bbEmbed.ajax({
                            async: false,
                            type: 'POST',
                            url: that.dashboardServerApiUrl + '/v5.0/dashboards/drafts',
                            headers: {
                                'Authorization': token
                            },
                            contentType: 'application/json',
                            success: function (result: { Id?: any, Name?: any }): any {
                                that.embedOptions.isdesignerdraft = true;
                                that.tokenResponse.draftItemID = result.Id;
                                that.tokenResponse.ItemDetail.Name = result.Name;
                                that.tokenResponse.CanWrite = true;
                                that._authorizeResponse = { Apistatus: true, Data: that.tokenResponse, Status: true };
                                that._renderDashboard({ Apistatus: true, Data: that.tokenResponse, Status: true });
                            },
                            error: function (jqXHR: { status: number, responseText: string }): any {
                                if (jqXHR.status == 401) {
                                    const isJwtToken = that._isJwtFormat(that.authToken);
                                    that._throwError(isJwtToken ? errorMessages['InvalidAccessToken'] : errorMessages['InvalidApiKey']);
                                }
                                else if (jqXHR.status == 403) {
                                    that._throwError(errorMessages['ProvideCreatePermission']);
                                }
                            }
                        });
                    }
                    else if (that.embedOptions.viewId && that.isDashboardViewRendering) {
                        bbEmbed.ajax({
                            async: false,
                            type: 'GET',
                            url: that.dashboardServerApiUrl + '/v5.0/dashboards/views/' + that.embedOptions.viewId,
                            headers: {
                                'Authorization': token
                            },
                            contentType: 'application/json',
                            success: function (result: { ItemId?: any, QueryString?: any, ViewName?: any }): any {
                                that.embedOptions.dashboardSettings = that.embedOptions.dashboardSettings || {};
                                that.embedOptions.dashboardSettings.filterOverviewSettings = that.embedOptions.dashboardSettings.filterOverviewSettings || {};
                                that.embedOptions.settings = that.embedOptions.settings || {};
                                that.embedOptions.settings.viewer = that.embedOptions.settings.viewer || {};
                                that.embedOptions.settings.viewer.filterOverview = that.embedOptions.settings.viewer.filterOverview || {};
                                that.embedOptions.dashboardId = result.ItemId;
                                that.embedOptions.dashboardSettings.filterOverviewSettings.viewId = that.embedOptions.settings.viewer.filterOverview.viewId = that.embedOptions.viewId;
                                that.embedOptions.dashboardSettings.filterOverviewSettings.viewName = that.embedOptions.settings.viewer.filterOverview.ViewName = result.ViewName;
                                that.embedOptions.filterParameters = result.QueryString;
                                that._renderDashboard({ Apistatus: true, Data: that.tokenResponse, Status: true });
                            },
                            error: function (jqXHR: { status: number, responseText: string }): any {
                                if (jqXHR.status == 401) {
                                    const isJwtToken = that._isJwtFormat(that.authToken);
                                    that._throwError(isJwtToken ? errorMessages['InvalidAccessToken'] : errorMessages['InvalidApiKey']);
                                }
                                else if (jqXHR.status == 400) {
                                    that._throwError(errorMessages['InvalidViewID']);
                                }
                                else if (jqXHR.status == 404) {
                                    that._throwError(errorMessages['ViewDetailsNotFound']);
                                }
                            }
                        });
                    }
                    else if (that.widgetName) {
                        const regex: any = /^(?:\{{0,1}(?:[0-9a-fA-F]){8}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){4}-(?:[0-9a-fA-F]){12}\}{0,1})$/;
                        const isGuidDbrd: boolean = regex.exec(that.widgetName);

                        if (/[a-zA-Z]/.test(that.widgetName) && /\d/.test(that.widgetName) && that.widgetName.includes("-") && !isGuidDbrd) {
                            that._throwError(errorMessages['InvalidWidgetID']);
                        }
                        else if (!isGuidDbrd) {
                            that._throwError(errorMessages['WidgetNameTokenAPIError']);
                        }
                        else {
                            that._renderDashboard({ Apistatus: true, Data: that.tokenResponse, Status: true });
                        }
                    }
                    else {
                        that._renderDashboard({ Apistatus: true, Data: that.tokenResponse, Status: true });
                    }
                }
            }
            else {
                that._getAuthorizationToken(dashboardId);
            }
        } else {
            setTimeout(that._isDependencyLoaded, 500, that);
        }
    }

    checkCompatibility(): any {
        this.deprecated = false;
        this.validateServerAndWrapperVersion();
        
    }

    validateServerAndWrapperVersion(): any {
        this.deprecationMessage('validateServerAndWrapperVersion');
        const that: BoldBI = this;
        if (that.embedOptions.environment == BoldBI.Environment.Enterprise) {
            bbEmbed.ajax({
                async: true,
                type: 'POST',
                url: that.dashboardServerApiUrl + '/server-version/get',
                contentType: 'application/json',
                success: function (result: any): any {
                    console.log(that.embedSDKWrapperVersion === result.Data.split('.').slice(0, 2).join('.') ? successMessages['MatchVersion'] : errorMessages['NotMatchVersion']);
                }
            });
        }
        else {
            console.log(errorMessages['EnsureServerOrSDKVersion']);
        }
    }

    _getDashboardInstance(embedChildId?: string): any {
        const ele: any = window.bbEmbed.call(this, '#' + (embedChildId ? embedChildId : this.childContainer.id))[0];
        if (ele) {
            return window.bbEmbed.data.call(this, ele, 'BoldBIDashboardDesigner');
        }
    }

    _checkWidgetList(): any {
        if (this.embedOptions.widgetList.length > 0 && !this.embedOptions.embedContainerId) {
            const error: any = errorMessages['ErrorLoadMultipleWidget'];
            this.embedOptions.widgetList.forEach((widget: any) => {
                const containerId: any = widget.containerId;
                const errorMessage: any = '<div id="embedded-bi-error" style="display:table;height:100%;width:100%;"><div style="display: table-cell;vertical-align: middle;text-align: center;"><div style="display: inline-block;"><img src=' + this.errorImage + ' style="float: left"/><div style="float: left;margin-left: 10px;line-height: 20px;">BoldBI Embedded: ' + error + '</div></div>';
                document.getElementById(containerId).innerHTML = errorMessage;
            });
            return true;
        }
        else {
            this.embedOptions.widgetList = '';
            return false;
        }
    }
    _onBoldBIDashboardInstaceActionBegin(arg: { eventType: string }, embedContainerId: string): any {
        if (this.isMultiTab && parseInt(bbEmbed('.e-content .e-active')?.attr('id')?.split('_')?.pop() ?? '', 10) === 0) {
            const dashboardInstance: any = bbEmbed('.e-content .e-active').find('.bbembed-multitab-dbrd').data('BoldBIDashboardDesigner');
            this.setDefaultTheme(dashboardInstance.modules.themeHelper.getBannerBackground(), dashboardInstance.modules.themeHelper.getBannerTextColor(), dashboardInstance.modules.themeHelper.getBannerIconColor());
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

        // Hiding the Refresh Setting button in connection embedding.
        if (this.embedOptions.mode == BoldBI.Mode.Connection || this.embedOptions.mode == BoldBI.Mode.Design) {
            // Check if the style element already exists in the head
            const existingRefreshSettingsStyle: HTMLElement | null = document.querySelector('style[data-id="hideRefreshSettingsButton"]');
            if (!existingRefreshSettingsStyle) {
                // If the style element doesn't exist, create a new one
                const style: any = document.createElement('style');
                style.type = 'text/css';
                style.setAttribute('data-id', 'hideRefreshSettingsButton');
                // Define the CSS rule to hide the refresh settings button
                const cssCode: any = '.bbi-dbrd-datasource-schedule { display: none !important }';
                style.appendChild(document.createTextNode(cssCode));
                document.head.appendChild(style);
            }
        }

        const serverFnc: any = window[this.actionBeginFn];
        if (serverFnc instanceof Function) {
            serverFnc.call(this, arg);
        }

        const clientFnc: any = window[this.embedOptions.events.onActionStart];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.events.onActionStart instanceof Function) {
            this.embedOptions.events.onActionStart.call(this, arg);
        }

        if (arg.eventType == 'dataSourceSaveAction') {
            this._onBoldBIBeforeDatasourceSaveAction(arg);
        }

        if (arg.eventType == 'filterInteraction') {
            const clientFnc: any = window[this.embedOptions.events?.filters?.beforeApply];
            if (clientFnc instanceof Function) {
                clientFnc.call(this, arg);
            }
            if (this.embedOptions.events?.filters?.beforeApply instanceof Function) {
                this.embedOptions.events?.filters?.beforeApply.call(this, arg);
            }
        }

        if (arg.eventType == 'publishAsAction') {
            const clientFnc: any = window[this.embedOptions.events?.designer?.beforePublishDialogOpen];
            if (clientFnc instanceof Function) {
                clientFnc.call(this, arg);
            }
            if (this.embedOptions.events?.designer?.beforePublishDialogOpen instanceof Function) {
                this.embedOptions.events?.designer?.beforePublishDialogOpen.call(this, arg);
            }
        }

    }

    _onBoldBIDashboardInstaceActionComplete(arg: { eventType: string, data?: any, source?: any, schema?: any }): any {
        const that: BoldBI = this;
        let data: any;
        const serverFnc: any = window[this.actionCompleteFn];
        if (!this._isNullOrUndefined(arg.data)) {
            if (arg.data.event == 'createConnection') {
                this.embedOptions.datasourceId = arg.data.source.data;
                this.embedOptions.mode = BoldBI.Mode.DataSource;
                this.isNewConnection = true;
                if (that.authToken) {
                    that._renderDashboard({ Apistatus: true, Data: this.tokenResponse, Status: true });
                }
                else if (!that._isEmptyOrSpaces(that.embedOptions.authorizationServer.url)) {
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
                if (that.authToken) {
                    that._renderDashboard({ Apistatus: true, Data: this.tokenResponse, Status: true });
                }
                else if (!that._isEmptyOrSpaces(that.embedOptions.authorizationServer.url)) {
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
        const editEnabled: any = typeof this.embedOptions.dashboardSettings?.edit === 'boolean' ? this.embedOptions.dashboardSettings?.edit : this.embedOptions.settings?.viewer?.edit ?? false;
        if (arg.eventType == 'dashboardRendered' && editEnabled) {
            const editIcon: any = document.querySelector('[data-name="editdashboard"]');
            if (editIcon) {
                editIcon.removeAttribute('disabled');
                editIcon.classList.remove('disabled');
                editIcon.style.pointerEvents = 'auto';
                editIcon.style.opacity = '1';
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
            const clientFnc: any = window[this.embedOptions.events?.filters?.onInteraction];
            if (clientFnc instanceof Function) {
                clientFnc.call(this, data);
            }
            if (this.embedOptions.events?.filters?.onInteraction instanceof Function) {
                this.embedOptions.events?.filters?.onInteraction.call(this, arg);
            }

        } else {

            if (serverFnc instanceof Function) {
                serverFnc.call(this, arg);
            }

            const clientFnc: any = window[this.embedOptions.events.onActionComplete];
            if (clientFnc instanceof Function) {
                clientFnc.call(this, arg);
            }
            if (this.embedOptions.events.onActionComplete instanceof Function) {
                this.embedOptions.events.onActionComplete.call(this, arg);
            }
        }

        if (arg.eventType == 'filterInteraction') {
            const clientFnc: any = window[this.embedOptions.events?.filters?.afterApply];
            if (clientFnc instanceof Function) {
                clientFnc.call(this, arg);
            }
            if (this.embedOptions.events?.filters?.afterApply instanceof Function) {
                this.embedOptions.events?.filters?.afterApply.call(this, arg);
            }
        }

        if (arg.eventType == 'dataSourceSaveAction' && JSON.parse(arg.schema.schema).length > 0) {
            this._onBoldBIAfterDatasourceSaveAction(arg);
        }

        if (arg.eventType == 'Save') {
            this._authorizeResponse.Data.ItemDetail.Name = arg.data.dashboardName;
            const itemLocation = this._authorizeResponse.Data.ItemDetail.ItemLocation;
            if (!this.authToken) {
                this._authorizeResponse.Data.ItemDetail.ItemLocation = itemLocation.replace(/\/\d+$/, '/' + arg.data.version);
            }
            else {
                this._authorizeResponse.Data.dashboardVersion = arg.data.version;
            }
        }

        if (arg.eventType == 'SaveAs') {
            this._authorizeResponse.Data.ItemDetail.Id = arg.data.dashboardId;
            this._authorizeResponse.Data.ItemDetail.Name = arg.data.dashboardName;
            if (!this.authToken) {
                this._authorizeResponse.Data.ItemDetail.ItemLocation = arg.data.dashboardId + '/' + arg.data.version;
            }
            else {
                this._authorizeResponse.Data.dashboardVersion = arg.data.version;
            }
            this.embedOptions.dashboardId = arg.data.dashboardId;
        }
    }

    _onBoldBIDashboardInstaceReportOpen(arg) {
        const serverFnc = window[this.reportOpenedFn];
        if (serverFnc instanceof Function) {
            serverFnc.call(this, arg);
        }
        const clientFnc = window[this.embedOptions.reportOpened];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.reportOpened instanceof Function) {
            this.embedOptions.reportOpened.call(this, arg);
        }
    }

    _onBoldBIDashboardInstanceNavigateToDashboard(arg) {
        this._initializeDashboardContainer();
        this.embedOptions.mode = BoldBI.Mode.View;
        this.embedOptions.dashboardSettings.edit = this.editIgnore;
        if (this.embedOptions.settings?.viewer?.edit) {
            this.embedOptions.settings.viewer.edit = this.editIgnore;
        }
        
        this._authorizeResponse.Data.ItemDetail.Name = arg.PublishName;
        if (this.embedOptions.isdesignerdraft && this.authToken) {
            this._authorizeResponse.Data.ItemDetail.Id = arg.PublishId;
            this._authorizeResponse.Data.dashboardVersion != "0" ? this._authorizeResponse.Data.dashboardVersion : 1;
            this.embedOptions.dashboardId = arg.PublishId;
        }

        this._renderDashboard(this._authorizeResponse);

        const serverFnc = window[this.performNavigateDashboardFn];
        if (serverFnc instanceof Function) {
            serverFnc.call(this, arg);
        }
        const clientFnc = window[this.embedOptions.performNavigateToDashboard];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.performNavigateToDashboard instanceof Function) {
            this.embedOptions.performNavigateToDashboard.call(this, arg);
        }
    }

    _onBoldBIBeforeDatasourceSaveAction(arg: object): any {
        const clientFnc: any = window[this.embedOptions.events?.datasource?.beforeSave];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.events?.datasource?.beforeSave instanceof Function) {
            this.embedOptions.events?.datasource?.beforeSave.call(this, arg);
        }
    }

    _onBoldBIAfterDatasourceSaveAction(arg: object): any {
        const clientFnc: any = window[this.embedOptions.events?.datasource?.afterSave];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.events?.datasource?.afterSave instanceof Function) {
            this.embedOptions.events?.datasource?.afterSave.call(this, arg);
        }
    }

    _onBoldBIDashboardBeforeBannerIconRender(arg: { iconsinformation?: any; }, itemDetails?: any): any {
        var isDynamicTranslatorAdded = false;
        var isSummarizationAdded = false;
        this.isEditGroupSeparatorEnabled = false;
        if (arg.iconsinformation.find((group) => group.groupId === 'Summarize')) {
            var summarizeGroup = arg.iconsinformation.shift();
            isSummarizationAdded = true;
        }
        const themeGroup: any = arg.iconsinformation.shift();
        if (arg.iconsinformation.find((group) => group.groupId === 'translatorgroup')) {
            var translatorGroup = arg.iconsinformation.shift();
            isDynamicTranslatorAdded = true;
        }
        const filterOverviewOption: any = arg.iconsinformation.shift();
        const refreshGroup: any = arg.iconsinformation.shift();

        if (!this.dashboardWidgetExports.dashboard.showMoreOption || !this.dashboardWidgetExports.dashboard.showExport && !this.dashboardWidgetExports.dashboard.showMetrics || (!this.dashboardWidgetExports.export.excel && !this.dashboardWidgetExports.export.image && !this.dashboardWidgetExports.export.pdf && !this.dashboardWidgetExports.export.csv && !this.dashboardWidgetExports.dashboard.showMetrics)) {
            arg.iconsinformation = this._arraySlice(arg.iconsinformation, 'groupName', 'Option');
        }

        const dashboardParameter: any = typeof this.embedOptions.dashboardSettings?.showDashboardParameter === 'boolean' ? this.embedOptions.dashboardSettings.showDashboardParameter : this.embedOptions.settings?.viewer?.dashboardParameter ?? true;
        if (dashboardParameter == false) {
            for (let i: number = filterOverviewOption.items.length - 1; i >= 0; i--) {
                if (!this._isNullOrUndefined(filterOverviewOption.items[`${i}`]) && filterOverviewOption.items[`${i}`][0].dataset['name'] == 'dashboardparameters') {
                    filterOverviewOption.items.splice(i, 1);
                }
            }
        }
        const refreshEnabled: any = typeof this.embedOptions.dashboardSettings?.showRefresh === 'boolean' ? this.embedOptions.dashboardSettings?.showRefresh : this.embedOptions.settings?.viewer?.refresh ?? true;

        if (!refreshEnabled) {
            refreshGroup.items.splice(0, 1);
        }
        const serverFnc: any = window[this.beforeBannerIconRenderFn];
        const fullScreenEnabled: any = typeof this.embedOptions.dashboardSettings?.enableFullScreen === 'boolean' ? this.embedOptions.dashboardSettings?.enableFullScreen : this.embedOptions.settings?.viewer?.fullScreen ?? false;
        if (fullScreenEnabled) {
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

        const editEnabled: any = typeof this.embedOptions.dashboardSettings?.edit === 'boolean' ? this.embedOptions.dashboardSettings?.edit : this.embedOptions.settings?.viewer?.edit ?? false;
        if (editEnabled && (itemDetails?.ItemDetail?.CanWrite || itemDetails?.CanWrite)) {
            this.isEditGroupSeparatorEnabled = true;
            const editIcon: any = this._createBannerIcon(
                '<a/>',
                'dashboard-edit',
                'su su-edit',
                'Edit',
                'editdashboard',
                true,
                false,
                { 'font-size': '13px', 'padding-left': '7px' },
                ''
            );

            const editAndShare: any = {
                groupId: 'edit-share',
                groupName: 'Edit & Share',
                items: [
                    editIcon
                ]
            };
            editAndShare.enableGroupSeperator = !fullScreenEnabled;
            arg.iconsinformation.unshift(editAndShare);

            editIcon.attr('disabled', 'true');
            editIcon.addClass('disabled');
            editIcon.css('pointer-events', 'none');
            editIcon.css('opacity', '0.5');
        }
        else if (this.isDashboardRendering && editEnabled && !(itemDetails?.ItemDetail?.CanWrite || itemDetails?.CanWrite)) {
            console.warn('Edit is set to true, but you’re not authorized to make changes to this dashboard.');
        }

        if (refreshGroup.items.length > 0) {
            arg.iconsinformation.unshift(refreshGroup);
            arg.iconsinformation[0].enableGroupSeperator = (fullScreenEnabled || this.isEditGroupSeparatorEnabled) ? false : true;
        }

        if (filterOverviewOption.items.length > 0) {
            arg.iconsinformation.unshift(filterOverviewOption);
        }

        if (isDynamicTranslatorAdded) {
            arg.iconsinformation.unshift(translatorGroup);
        }

        if (themeGroup.items.length > 0) {
            arg.iconsinformation.unshift(themeGroup);
        }

        if (isSummarizationAdded) {
            arg.iconsinformation.unshift(summarizeGroup);
        }

        if (serverFnc instanceof Function) {
            serverFnc.call(this, arg);
        }
        const clientFnc: any = window[this.embedOptions.events?.viewer?.beforeToolBarItemsRender];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.events?.viewer?.beforeToolBarItemsRender instanceof Function) {
            this.embedOptions.events?.viewer?.beforeToolBarItemsRender.call(this, arg);
        }

        if (![...document.head.querySelectorAll('style')].some(style => style.innerHTML.includes('#dashboard-refresh { display: none !important'))) {
            bbEmbed('<style type="text/css"> #dashboard-refresh { display: none !important} </style>').appendTo('head');
        }

        const cultureScript = "cultures/boldbi.cultures.min.js";
        const scripts = document.querySelectorAll("script") as NodeListOf<HTMLScriptElement>;
        const cultureMatchingScripts = Array.from(scripts).filter(script => script.src.includes(cultureScript));

        if (cultureMatchingScripts.length > 1) {
            cultureMatchingScripts.slice(1).forEach(script => {
                script.parentElement?.removeChild(script);
            });
        }
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

    _onBoldBIDashboardBeforeOtherOptionContextMenuRender(arg: { iconsinformation?: any }): any {
        if (this.dashboardWidgetExports.dashboard.showExport == false) {
            arg.iconsinformation = this._arraySlice(arg.iconsinformation, 'groupName', 'export');
        }

        const serverFnc: any = window[this.beforeOtherRenderFn];
        if (serverFnc instanceof Function) {
            serverFnc.call(this, arg);
        }

        const clientFnc: any = window[this.embedOptions.events?.viewer?.beforeContextMenuRender];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.events?.viewer?.beforeContextMenuRender instanceof Function) {
            this.embedOptions.events?.viewer?.beforeContextMenuRender.call(this, arg);
        }
    }

    _onBoldBIDashboardSaveFilter(arg: any): any {
        const that: BoldBI = this;
        const SaveEvent: any = that.embedOptions.events?.filters?.beforeSaveViewDialogOpen || that.embedOptions.dashboardSettings.saveFilterClick;
        const serverFnc: any = window[that.beforeSaveViewDialogOpenFn];
        if (serverFnc instanceof Function) {
            serverFnc.call(that, arg);
        }
        const clientFnc: any = window[`${SaveEvent}`];
        if (clientFnc instanceof Function) {
            clientFnc.call(that, arg);
        }
        if (SaveEvent instanceof Function) {
            SaveEvent.call(that, arg);
        }
        if (arg.cancel === false) {
            if (that.embedOptions.dashboardId == '' && that.embedOptions.dashboardIds == '') {
                console.error(errorMessages['EmptyDbrdCreate']);
            }
            else {
                // If arg.viewId is defined, it will update the existing View; if undefined or null, it will create a new View.
                bbEmbed('body').find('#save_view_dialog_wrapper').remove();
                let dashboardId: string;
                if (that.embedOptions.dashboardIds && that.embedOptions.dashboardIds.length > 0) {
                    dashboardId = that.embedOptions.dashboardId = that.getActiveChildDashboardId();
                }
                else {
                    dashboardId = that.isMultiTab ? that.getActiveChildDashboardId() : that.embedOptions.dashboardId;
                }
                if (arg.viewId) {
                    const viewParameters: any = {
                        ViewId: arg.viewId,
                        DashboardId: dashboardId,
                        QueryString: arg.data.encryptedData
                    };
                    that.updateFilterView(viewParameters, function (view: any, message: string): any {
                        console.log(message + successMessages['UpdateFilterViewMsg'] + view.ViewId);
                    });
                }
                else {
                    that._createSaveViewDialog(arg);
                }
            }
        }
    }

    _addSaveViewDialogStyles(): any {
        bbEmbed('<style type="text/css"> \
                    #save_view_dialog_header .su-view { float: left; padding-top: 5px; padding-right: 5px; font-size: 14px; color: var(--primary-text-normal-color); } \
                    #save_view_dialog_content { font-size: 12px; line-height: 1.4; } \
                    #save_view_dialog_header #save_view_dialog_header_title { color: var(--primary-text-normal-color);font-family: var(--font-family); font-size: 14px; padding-top: 5px; line-height: 15px; } \
                    #view_name_left_col { width: 25%; font-family: var(--font-family); font-size: 13px; float: left; text-align: right; margin: 5px 0px; } \
                    #view_name_right_col { width: 61%; float: left; margin-left: 50px; } \
                    #view_name_division {height: 50px} \
                    #default_view_division {height: 50px} \
                    #default_view_left {width: 25%; font-size: 13px; font-family: var(--font-family); float: left; text-align: right; margin: 5px 0px;} \
                    #default_view_right { width: 61%; float: left; margin-left: 50px; margin-top:5px; margin-bottom:5px} \
                    #view_name_textbox { width: 100%; border: 1px solid var(--secondary-border-color); padding: 6px 12px; color: var(--primary-text-normal-color); background: var(--primary-background-color); font-size: 12px; } \
                    #view_name_textbox:focus { border-color: var(--primary-branding-border-color)!important; } \
                    #cancel_button:hover { background: var(--secondary-btn-bg-hover-color); border: 1px solid var(--secondary-btn-border-normal-color); color: var(--secondary-btn-text-hover-color); } \
                    #save_button:hover { background: var(--primary-btn-bg-hover-color); border: 1px solid var(--primary-btn-border-normal-color); color: var(--primary-btn-text-hover-color) !important; } \
                    #save_view_dialog_footer { padding: 10px 15px; border-top: 1px solid var(--secondary-border-color); background: var(--secondary-background-color); } \
                    #save_view_dialog .e-dlg-closeicon-btn { margin-right: 5px; padding: 5px 0px; width: 15px; height: 20px; } \
                    #save_view_dialog .e-dlg-closeicon-btn .e-icon-dlg-close { font-size: 10px; color: var(--hyper-link-hover-color); } \
                    #save_view_dialog .e-dlg-closeicon-btn:hover, #save_view_dialog .e-dlg-closeicon-btn { background: var(--primary-background-color); } \
                    #save_view_dialog .e-dlg-content { background: var(--primary-background-color); color: var(--primary-text-normal-color); padding-bottom: 25px; } \
                    #view_name_err_msg { display: none; color: #ff3b30; font-size: 12px; } \
                    #cancel_button { background: var(--secondary-btn-bg-normal-color); border: 1px solid var(--secondary-btn-border-normal-color); color: var(--secondary-text-normal-color); font-family: var(--font-family); } \
                    #save_button { margin-right: 15px; background: var(--primary-btn-bg-normal-color); border: 1px solid var(--primary-btn-border-normal-color); color: var(--primary-btn-text-normal-color); font-family: var(--font-family); } \
                    #save_view_dialog .e-dlg-header-content { padding: 10px 15px; height: 40px; background: var(--primary-background-color); color: var(--primary-text-normal-color); } \
                    #save_view_dialog { background: var(--primary-background-color); } \
                    .footer-button-class { border-radius: 4px; display: inline-block; cursor: pointer; font-size: 12px; float: right; font-weight: 600; height: 32px; line-height: 18px; min-width: 90px; outline: 0; text-align: center; padding: 6px 20px; } \
                    .e-dlg-overlay { position: fixed; } \
                    .viewname-textbox-error { border: 1px solid #ff3b30 !important; } \
                    .default_view_switch {position: relative;display: inline-block;width: 28px; /* Width of the switch */height: 16px; /* Height of the switch margin-top: */}\
                    .default_view_switch input {  display: none;}\
                    .default_view_slider {position: absolute;cursor: pointer;top: 0;left: 0;right: 0;bottom: 0;background-color: var(--material-switch-background-bg-normal-color); border: 1px solid var(--secondary-btn-border-normal-color); -webkit-transition: .4s;transition: .4s;border-radius: 16px; /* Half of the height for a round shape */}\
                    .default_view_slider:before { position: absolute; content: ""; height: 9px; /* Height minus border width */width: 9px; /* Height minus border width */top: 3px; /* (Width - Height) / 2 to center it horizontally */ bottom: 3px; /* (Height - Height) / 2 to center it vertically  */left:2px; background-color: var(--material-switch-foreground-bg-normal-color); -webkit-transition: .4s; transition: .4s; border-radius: 50%; }\
                    .default_view_slider:hover {border: 1px solid var(--hover-icon-color);}\
                    input:checked + .default_view_slider { background-color: var(--primary-branding-color); border-color:var(--primary-branding-border-color);}\
                    input:focus + .default_view_slider {  box-shadow: 0 0 0.5px #2196F3;}\
                    input:checked + .default_view_slider:before {-webkit-transform: translateX(17.5px); /* Half of the width minus half of the height */-ms-transform: translateX(17.5px);transform: translateX(13.5px);background-color: white;}\
                    #info-icon {padding-left: 15px; cursor: pointer; font-size: 12px;} \
                    .su-info:before {content: \u24D8;}\
                    .default_view_slider_disable:before { position: absolute; content: ""; height: 9px; /* Height minus border width */width: 9px; /* Height minus border width */top: 3px; /* (Width - Height) / 2 to center it horizontally */ bottom: 3px; /* (Height - Height) / 2 to center it vertically */left:2px;background: var(--material-switch-foreground-bg-disable-color); -webkit-transition: .4s; transition: .4s; border-radius: 50%; }\
                    .tooltip {position: relative;display: inline-block;}\
                    .tooltip .tooltiptext {visibility: hidden;font-size: 11.8px;width: 320px;background: var(--primary-background-color);font-family: var(--font-family);color: var(--primary-text-normal-color);text-align: left;border-radius: 6px;padding: 5px;position: absolute;z-index: 1;top:130%;left:270%;margin-left:-60px; opacity: 0;transition: opacity 0.3s; border: 1px solid var(--secondary-border-color); box-shadow: 0 6px 12px rgba(0,0,0,.175)}\
                    .tooltip:hover .tooltiptext {visibility: visible;opacity: 1;}\
                    </style > ').appendTo('head');
    }
    _createSaveViewDialog(args: any): any {
        const that: BoldBI = this;
        that._addSaveViewDialogStyles();
        const saveViewDialogWrapper: HTMLDivElement = bbEmbed('<div>')
            .attr({
                'id': 'save_view_dialog_wrapper',
                'class': 'bi-dashboard'
            })
            .appendTo('body');
        const saveViewDialog: HTMLDivElement = bbEmbed('<div>')
            .attr('id', 'save_view_dialog')
            .appendTo(saveViewDialogWrapper);
        const saveViewHeader: any = '<div id="save_view_dialog_header">' +
            '<span class="su su-view"></span>' +
            '<div id="save_view_dialog_header_title">Save View</div>' +
            '</div>';
        const saveViewContent: any = `
            <div id='save_view_dialog_content'>
                <div id = "view_name_division">
                    <label id='view_name_left_col'>Name*</label>
                    <div id='view_name_right_col'>
                        <input type='text' id='view_name_textbox' data-query='${args.data.encryptedData}' data-id='${args.viewId}'>
                        <span id='view_name_err_msg'></span>
                    </div>
                </div>
                <div id="default_view_division">
                <label class="text-label" id="default_view_left">Mark as Default</label>
                    <div id='default_view_right'>
                        <label class="default_view_switch">
                            <input type="checkbox" id="default_view_checkbox">
                            <span class="default_view_slider" id="default_slider"></span>
                        </label>
                        <div class="tooltip">
                            <div class="su su-info bbi-dbrd-designer-hoverable" id="info-icon" data-tooltip></div>
                            <div class="tooltiptext" id="tooltip-text"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        const saveViewFooter: HTMLDivElement = bbEmbed('<div>')
            .attr('id', 'save_view_dialog_footer');
        const saveButton: HTMLButtonElement = bbEmbed('<button>')
            .attr('id', 'save_button')
            .addClass('footer-button-class')
            .text('Save').on('click', () => that._saveFilterView(that));
        const cancelButton: HTMLButtonElement = bbEmbed('<button>')
            .attr('id', 'cancel_button')
            .addClass('footer-button-class')
            .text('Cancel')
            .on('click', function (): any {
                bbEmbed('body').find('#save_view_dialog_wrapper, #success_save_view_dialog_wrapper').remove();
            });
        saveViewFooter.append(cancelButton);
        saveViewFooter.append(saveButton);
        saveViewDialog.append(saveViewFooter);
        const saveViewDialogObj: any = new window.ejdashboard.popups.Dialog({
            header: saveViewHeader,
            width: '600px',
            isModal: true,
            showCloseIcon: true,
            target: saveViewDialogWrapper[0],
            content: saveViewContent
        });
        saveViewDialogObj.appendTo('#save_view_dialog');
        document.getElementById('view_name_textbox').addEventListener('input', function (): any {
            that._viewNameValidation();
        });
        const tooltipIcon: any = document.getElementById('info-icon');
        const tooltipText: any = document.getElementById('tooltip-text');
        let infoMessage: string;

        tooltipIcon.addEventListener('mouseover', function (): any {
            tooltipText.textContent = infoMessage;
        });
        tooltipIcon.addEventListener('mouseout', function (): any {
            tooltipText.textContent = ''; // Clear the tooltip when mouse leaves
        });

        if (!this.isDefaultView) {
            bbEmbed('.default_view_slider').css({ 'background': 'var(--material-switch-background-bg-disable-color)', 'border': '1px solid var(--material-switch-background-border-disable-color)' });
            const defaultViewSlider = document.getElementById('default_slider');
            defaultViewSlider.classList.add('default_view_slider_disable');
            document.getElementById('default_view_checkbox').checked = false;
            document.getElementById('default_view_checkbox').disabled = true;
            infoMessage = successMessages['DefaultViewInfoMsg'];
        }
        else {
            document.getElementById('default_view_checkbox').checked = true;
            infoMessage = successMessages['NonDefaultViewInfoMsg'];
        }
    }
    _saveFilterView(dbrdInstance: BoldBI): any {
        const that: BoldBI = dbrdInstance;
        const inputElement: any = bbEmbed('#view_name_textbox')[0];
        if (that._viewNameValidation()) {
            let activeChildDashboardId: string;
            if (!(this.embedOptions.dashboardIds.length > 0)) {
                activeChildDashboardId = that.isMultiTab ? that.getActiveChildDashboardId() : '';
            }
            const viewName: string = inputElement.value;
            const queryString: string = inputElement.getAttribute('data-query');
            const viewId: string = inputElement.getAttribute('data-id');
            const viewParameters: any = {
                ViewName: viewName,
                ItemId: that.embedOptions.dashboardId,
                QueryString: queryString,
                ChildItemId: activeChildDashboardId,
                IsDefault: document.getElementById('default_view_checkbox').checked ? true : false
            };
            const saveFilterViewCallback: any = (responseViewInfo: any): any => {
                if (responseViewInfo) {
                    bbEmbed('body').find('#save_view_dialog_wrapper').remove();
                }
                else {
                    that._viewNameValidation(true);
                }
            };
            if (viewId === 'null') {
                that.saveFilterView(viewParameters, saveFilterViewCallback);
            }
            else {
                that.saveAsFilterView(viewParameters, saveFilterViewCallback);
            }
        }
    }
    _updateInFilterOverviewUI(viewName: string, viewId: string): any {
        let dashboardInstance: any = {};
        if (this.isMultiTab) {
            dashboardInstance = window.bbEmbed('.e-content .e-active').find('.bbembed-multitab-dbrd').data('BoldBIDashboardDesigner');
        }
        else {
            dashboardInstance = this._getDashboardInstance();
        }
        if (dashboardInstance) {
            dashboardInstance._updateFilterOverview(viewName, viewId);
        }
    }
    _viewNameValidation(isExistingView?: boolean): any {
        const textBox: any = bbEmbed('#view_name_textbox');
        const errorMessage: any = bbEmbed('#view_name_err_msg');
        const specialCharsRegex: any = /^[a-zA-Z0-9!@$^ ()_=\-}{.`~]*$/;
        const containsSpecialChars: any = !(specialCharsRegex.test(textBox.val()));
        const isEmptyString: boolean = this._isEmptyOrSpaces(textBox[0].value);

        if (isExistingView || containsSpecialChars || isEmptyString) {
            errorMessage.css({ 'display': 'block', 'font-family': 'var(--font-family)' })
                .text(isExistingView ? errorMessages['ExistedViewName'] :
                    containsSpecialChars ? errorMessages['AvoidSplChar'] :
                        isEmptyString ? errorMessages['EmptyViewName'] : '');
            textBox.addClass('viewname-textbox-error');
            return false;
        } else {
            errorMessage.css('display', 'none').text();
            textBox.removeClass('viewname-textbox-error');
            return true;
        }
    }
    getActiveChildDashboardId(): any {
        const regex: any = /^([\da-f]{8})([\da-f]{4})([\da-f]{4})([\da-f]{4})([\da-f]{12})$/;
        const activeChildDashboardId: string = window.bbEmbed('.e-content .e-active').find('.bbembed-multitab-dbrd').data('BoldBIDashboardDesigner')._id.split('_')[1].replace(regex, '$1-$2-$3-$4-$5');
        return activeChildDashboardId;
    }
    _getParametersFromQueryString(queryString: string): any {
        const filterQuery: any = JSON.parse(decodeURIComponent(queryString).split('filterQuery=')[1]);
        return filterQuery.map((query: any) => {
            const columnName: string = query.dimfi && !query.dimfi.c.toLowerCase().includes('include') ? `${query.cn} (${query.dimfi.c})` : query.cn;
            const columnValues: any = query.dimfi ? query.dimfi.t : query.idf.dfl;
            return {
                name: columnName,
                values: columnValues
            };
        });
    }
    _onBoldBIDashboardSaveAsFilter(arg: any): any {
        const that: BoldBI = this;
        const saveAsEvent: any = this.embedOptions.events?.filters?.beforeSaveAsViewDialogOpen || this.embedOptions.dashboardSettings.saveAsFilterClick;
        const serverFnc: any = window[this.beforeSaveAsViewDialogOpenFn];
        if (serverFnc instanceof Function) {
            serverFnc.call(this, arg);
        }
        const clientFnc: any = window[`${saveAsEvent}`];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (saveAsEvent instanceof Function) {
            saveAsEvent.call(this, arg);
        }
        if (arg.cancel === false) {
            if (that.embedOptions.dashboardId == '') {
                console.error(errorMessages['EmptyDbrdCreate']);
            }
            else {
                bbEmbed('body').find('#save_view_dialog_wrapper').remove();
                that._createSaveViewDialog(arg);
            }
        }
    }
    _onBoldBIDashboardOpenViewSection(arg: any): any {
        const that: BoldBI = this;
        const viewSavedEvent: any = that.embedOptions.events?.filters?.onSavedFilterClick || that.embedOptions.dashboardSettings.viewSavedFiltersClick;
        const serverFnc: any = window[that.onViewSavedFiltersClickFn];
        const itemId: any = this.isMultiTab ? this.getActiveChildDashboardId() : this.embedOptions.dashboardId;
        this.deprecated = false;
        this.getViewsByDashboardId(itemId, function (viewInfos: any): any {
            arg.viewInfos = viewInfos;
        });
        if (serverFnc instanceof Function) {
            serverFnc.call(that, arg);
        }
        const clientFnc: any = window[`${viewSavedEvent}`];
        if (clientFnc instanceof Function) {
            clientFnc.call(that, arg);
        }
        if (viewSavedEvent instanceof Function) {
            viewSavedEvent.call(that, arg);
        }
    }

    _onBoldBIDashboardBannerIconClick(arg: { name: string, selectedTheme: string }): any {
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
        if (arg.name.toLowerCase() == 'editdashboard') {
            this._initializeDashboardContainer();
            this.embedOptions.mode = BoldBI.Mode.Design;
            this._renderDashboard(this._authorizeResponse);
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

        const clientFnc: any = window[this.embedOptions.events?.viewer?.onToolbarItemClick];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.events?.viewer?.onToolbarItemClick instanceof Function) {
            this.embedOptions.events?.viewer?.onToolbarItemClick.call(this, arg);
        }

        if (typeof (arg.name) != 'undefined' && arg.name.toLowerCase() == 'theming') {
            let embedId: any;
            if (this.isMultiTab) {
                this.multiTabTheme = arg.selectedTheme;
                const dashboardInstance: any = window.bbEmbed('.e-content .e-active').find('.bbembed-multitab-dbrd').data('BoldBIDashboardDesigner');
                dashboardInstance.applyDashboardTheme(arg.selectedTheme);
                this.setDefaultTheme(dashboardInstance.modules.themeHelper.getBannerBackground(), dashboardInstance.modules.themeHelper.getBannerTextColor(), dashboardInstance.modules.themeHelper.getBannerIconColor());
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

    getComments(commentType: string, args: { dashboardId: string, widgetId?: string, multitabDashboardId?: string }, callBackFn: Function): any {
        this.deprecationMessage('getComments');
        const that: BoldBI = this;
        const data: any = {
            'ItemId': commentType == 'dashboard' ? args.dashboardId : args.widgetId,
            'DashboardItemId': commentType == 'dashboard' ? ((this.isMultiTab ? args.multitabDashboardId : args.dashboardId)) : (args.dashboardId),
            'ItemType': commentType,
            'ParentItemId': this.isMultiTab ? args.multitabDashboardId : null,
            'CommentAction': 3, //To get dashboard comment or widget comment from server.
            'OrderBy': 1 //To get the comment in decending order (newly added first).
        };
        var token = this._validatetoken(this.accessToken);
        bbEmbed.ajax({
            async: false,
            type: 'POST',
            url: this.dashboardServerApiUrl + '/comments/operation',
            headers: {
                'Authorization': token
            },
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function (result: { Status: boolean, Comments: string, ActiveCommentsCount: number, ItemId: string }): any {
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
                        const widgetContainerWidth: any = bbEmbed('#' + widgetId).width();
                        const positionX: any = widgetContainer.offset().left + widgetContainerWidth;
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
            error: function (jqXHR: { status: number, responseText: string }): any { that.ajaxErrorFnc(jqXHR); }

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
    addDashboardComment(arg: { content: string, dashboardId: string, multitabDashboardId?: string, parentCommentId?: string }, callBackFn: Function): any {
        this.deprecationMessage('addDashboardComment');
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
            var token = this._validatetoken(this.accessToken)
            bbEmbed.ajax({
                async: false,
                type: 'POST',
                url: this.dashboardServerApiUrl + '/comments/operation',
                headers: {
                    'Authorization': token
                },
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (result: { Status: boolean }): any {
                    if (result.Status) {
                        that.deprecated = false;
                        that.getComments('dashboard', arg, callBackFn);
                    }
                },
                error: function (jqXHR: { status: number, responseText: string }): any { that.ajaxErrorFnc(jqXHR); }
            });
        }
        else {
            if (!isGuidDbrd || !isGuidMultiDbrd) {
                console.error(errorMessages['InvalidDashboardID']);
            }
            else if (!isReplyCmtId) {
                console.error(errorMessages['InvalidReplyCommentID']);
            }
            else if (this._isEmptyOrSpaces(arg.content)) {
                console.error(errorMessages['InvalidCommentText']);
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
    addWidgetComment(arg: { content: string, widgetId?: string, dashboardId: string, multitabDashboardId?: string, parentCommentId?: string }, callBackFn: Function): any {
        this.deprecationMessage('addWidgetComment');
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
            var token = this._validatetoken(this.accessToken)
            bbEmbed.ajax({
                async: false,
                type: 'POST',
                url: this.dashboardServerApiUrl + '/comments/operation',
                headers: {
                    'Authorization': token
                },
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (result: { Status: boolean }): any {
                    if (result.Status) {
                        that.deprecated = false;
                        that.getComments('widget', arg, callBackFn);
                    }
                },
                error: function (jqXHR: { status: number, responseText: string }): any { that.ajaxErrorFnc(jqXHR); }
            });
        }
        else {
            if (!isGuidDbrd || !isGuidMultiDbrd || !isGuidWidget) {
                console.error(errorMessages['InvalidDbrdAndWidgetID']);
            }
            else if (!isReplyCmtId) {
                console.error(errorMessages['InvalidReplyCommentID']);
            }
            else if (this._isEmptyOrSpaces(arg.content)) {
                console.error(errorMessages['InvalidCommentText']);
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
    deleteDashboardComment(arg: { dashboardId: string, multitabDashboardId?: string, commentId?: string }, callBackFn: Function): any {
        this.deprecationMessage('deleteDashboardComment');
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
            var token = this._validatetoken(this.accessToken)
            bbEmbed.ajax({
                async: false,
                type: 'POST',
                url: this.dashboardServerApiUrl + '/comments/operation',
                headers: {
                    'Authorization': token
                },
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (result: { Status: boolean }): any {
                    if (result.Status) {
                        that.deprecated = false;
                        that.getComments('dashboard', arg, callBackFn);
                    }
                },
                error: function (jqXHR: { status: number, responseText: string }): any { that.ajaxErrorFnc(jqXHR); }
            });
        }
        else {
            if (!isGuidDbrd || !isGuidMultiDbrd) {
                console.error(errorMessages['InvalidDashboardID']);
            }
            else if (this._isEmptyOrSpaces(arg.commentId)) {
                console.error(errorMessages['InvalidCommentID']);
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
    deleteWidgetComment(arg: { widgetId?: string, dashboardId: string, multitabDashboardId?: string, commentId?: string }, callBackFn: Function): any {
        this.deprecationMessage('deleteWidgetComment');
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
            var token = this._validatetoken(this.accessToken)
            bbEmbed.ajax({
                async: false,
                type: 'POST',
                url: this.dashboardServerApiUrl + '/comments/operation',
                headers: {
                    'Authorization': token
                },
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (result: { Status: boolean }): any {
                    if (result.Status) {
                        that.deprecated = false;
                        that.getComments('widget', arg, callBackFn);
                    }
                },
                error: function (jqXHR: { status: number, responseText: string }): any { that.ajaxErrorFnc(jqXHR); }
            });
        }
        else {
            if (!isGuidDbrd || !isGuidMultiDbrd || !isGuidWidget) {
                console.error(errorMessages['InvalidDbrdAndWidgetID']);
            }
            else if (this._isEmptyOrSpaces(arg.commentId)) {
                console.error(errorMessages['InvalidCommentID']);
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
    editDashboardComment(arg: { content: string, dashboardId: string, multitabDashboardId?: string, commentId?: string }, callBackFn: Function): any {
        this.deprecationMessage('editDashboardComment');
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
            var token = this._validatetoken(this.accessToken)
            bbEmbed.ajax({
                async: false,
                type: 'POST',
                url: this.dashboardServerApiUrl + '/comments/operation',
                headers: {
                    'Authorization': token
                },
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (result: { Status: boolean }): any {
                    if (result.Status) {
                        that.deprecated = false;
                        that.getComments('dashboard', arg, callBackFn);
                    }
                },
                error: function (jqXHR: { status: number, responseText: string }): any { that.ajaxErrorFnc(jqXHR); }
            });
        }
        else {
            if (!isGuidDbrd || !isGuidMultiDbrd) {
                console.error(errorMessages['InvalidDashboardID']);
            }
            else if (this._isEmptyOrSpaces(arg.commentId)) {
                console.error(errorMessages['InvalidCommentID']);
            }
            else if (this._isEmptyOrSpaces(arg.content)) {
                console.error(errorMessages['InvalidCommentText']);
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
    editWidgetComment(arg: { content: string, widgetId?: string, dashboardId: string, multitabDashboardId?: string, commentId?: string }, callBackFn: Function): any {
        this.deprecationMessage('editWidgetComment');
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
            var token = this._validatetoken(this.accessToken)
            bbEmbed.ajax({
                async: false,
                type: 'POST',
                url: this.dashboardServerApiUrl + '/comments/operation',
                headers: {
                    'Authorization': token
                },
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function (result: { Status: boolean, StatusMessage: string }): any {
                    if (result.Status) {
                        that.commentsArgs['StatusMessage'] = result.StatusMessage;
                        that.deprecated = false;
                        that.getComments('widget', arg, callBackFn);
                    }
                },
                error: function (jqXHR: { status: number, responseText: string }): any { that.ajaxErrorFnc(jqXHR); }
            });
        }
        else {
            if (!isGuidDbrd || !isGuidMultiDbrd || !isGuidWidget) {
                console.error(errorMessages['InvalidDbrdAndWidgetID']);
            }
            else if (this._isEmptyOrSpaces(arg.commentId)) {
                console.error(errorMessages['InvalidCommentID']);
            }
            else if (this._isEmptyOrSpaces(arg.content)) {
                console.error(errorMessages['InvalidCommentText']);
            }
        }
    }

    ajaxErrorFnc(jqXHR: { status: number, responseText: string, statusText?: string }): any {
        let msg: any = '';
        if (jqXHR.status == 0) {
            msg = errorMessages['NetworkIssue'];
        } else if (jqXHR.status == 404) {
            if (jqXHR.statusText == 'Not Found') {
                msg = errorMessages['ViewIDNotFound'];
            } else {
                msg = errorMessages['PageNotFound'];
            }
        } else if (jqXHR.status == 500) {
            msg = errorMessages['InternalServerError'];
        } else {
            msg = errorMessages['UncaughtError'] + jqXHR.responseText;
        }
        if (!this._isNullOrUndefined(this.embedOptions.events.onError) && this.embedOptions.events.onError != '') {
            this.onErrorClient(msg);
        }
        else {
            console.error(msg);
        }
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

    _fullscreenExitHandler(boldBIObj: { isMultiTab?: boolean, embedOptions?: any }): any {
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
            const viewSavedFilter = typeof this.embedOptions.dashboardSettings?.filterOverviewSettings?.showViewSavedFilterIcon === 'boolean' ? this.embedOptions.dashboardSettings?.filterOverviewSettings?.showViewSavedFilterIcon : this.embedOptions.settings?.viewer?.filterOverview?.viewSavedFilter ?? false;
            if (viewSavedFilter) {
                document.getElementById('remove-view-saved').innerHTML = '.bbi-dbrd-view-saved { display: block; }';
            }
        } else {
            const element: any = document.getElementById('remove-view-saved');
            const viewSavedFilter = typeof this.embedOptions.dashboardSettings?.filterOverviewSettings?.showViewSavedFilterIcon === 'boolean' ? this.embedOptions.dashboardSettings?.filterOverviewSettings?.showViewSavedFilterIcon : this.embedOptions.settings?.viewer?.filterOverview?.viewSavedFilter ?? false;
            if (viewSavedFilter) {
                if (!element) {
                    const style: any = document.createElement('style');
                    style.type = 'text/css';
                    style.id = 'remove-view-saved';
                    const attr: any = '.bbi-dbrd-view-saved{display:none}';
                    style.appendChild(document.createTextNode(attr));
                    document.head.appendChild(style);
                }
                else {
                    document.getElementById('remove-view-saved').innerHTML = '.bbi-dbrd-view-saved { display: none; }';
                }
            }
            this.isFullscreen = true;
            const refreshEnabled: any = typeof this.embedOptions.dashboardSettings?.showRefresh === 'boolean' ? this.embedOptions.dashboardSettings?.showRefresh : this.embedOptions.settings?.viewer?.refresh ?? true;
            const displayVal: any = (refreshEnabled) ? 'block !important' : 'none !important';
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

    _onBoldBIDashboardBeforeWidgetIconRendered(arg: { iconsinformation: any, widgetInformation: any }): any {

        const showMaximize = typeof this.embedOptions.widgetSettings?.showMaximize === 'boolean'
            ? this.embedOptions.widgetSettings.showMaximize
            : this.embedOptions.settings?.widget?.maximize ?? true;

        const showFilter = typeof this.embedOptions.widgetSettings?.showFilter === 'boolean'
            ? this.embedOptions.widgetSettings.showFilter
            : this.embedOptions.settings?.widget?.filter ?? true;

        if (!showMaximize) {
            arg.iconsinformation = this._arraySlice(arg.iconsinformation, 'name', 'maximize');
        }
        if (!showFilter) {
            arg.iconsinformation = this._arraySlice(arg.iconsinformation, 'name', 'filter');
        }

        if (this.dashboardWidgetExports.widget.showExport === false || (!this.dashboardWidgetExports.export.excel && !this.dashboardWidgetExports.export.image && !this.dashboardWidgetExports.export.pdf && !this.dashboardWidgetExports.export.csv)) {
            arg.iconsinformation = this._arraySlice(arg.iconsinformation, 'name', 'export');
            if (!this._isNullOrUndefined(arg.widgetInformation) &&
                !this._isNullOrUndefined(arg.widgetInformation.widgetJson) &&
                !this._isNullOrUndefined(arg.widgetInformation.widgetJson.ContainerSettings) &&
                (!arg.widgetInformation.widgetJson.ContainerSettings.ViewData || arg.widgetInformation.widgetJson.ContainerSettings.ViewActionData == 1)) {
                arg.iconsinformation = this._arraySlice(arg.iconsinformation, 'name', 'menu');
            }
        }

        if (this.dashboardWidgetExports.widget.showMoreOption == false) {
            arg.iconsinformation = this._arraySlice(arg.iconsinformation, 'name', 'menu');
        }
        const serverFnc: any = window[this.beforeWidgetIconRenderedFn];
        if (serverFnc instanceof Function) {
            serverFnc.call(this, arg);
        }

        const clientFnc: any = window[this.embedOptions.events?.widget?.beforeToolBarItemsRender];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.events?.widget?.beforeToolBarItemsRender instanceof Function) {
            this.embedOptions.events?.widget?.beforeToolBarItemsRender.call(this, arg);
        }
    }

    _onBoldBIBeforeControlMenuOpen(arg: { menuItems: Array<object> }): any {
        if (this.dashboardWidgetExports.widget.showExport === false || (!this.dashboardWidgetExports.export.excel && !this.dashboardWidgetExports.export.image && !this.dashboardWidgetExports.export.pdf && !this.dashboardWidgetExports.export.csv)) {
            arg.menuItems = this._arraySlice(arg.menuItems, 'id', 'export');
        }
        const clientFnc: any = window[this.embedOptions.events?.widget?.beforeContextMenuRender];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.events?.widget?.beforeContextMenuRender instanceof Function) {
            this.embedOptions.events?.widget?.beforeContextMenuRender.call(this, arg);
        }
    }

    _onBoldBIBeforeDashboardMobileMenuOpen(arg: { menuItems: any }): any {
        const refreshEnabled: any = typeof this.embedOptions.dashboardSettings?.showRefresh === 'boolean' ? this.embedOptions.dashboardSettings?.showRefresh : this.embedOptions.settings?.viewer?.refresh ?? true;
        const dashboardParameter: any = typeof this.embedOptions.dashboardSettings?.showDashboardParameter === 'boolean' ? this.embedOptions.dashboardSettings.showDashboardParameter : this.embedOptions.settings?.viewer?.dashboardParameter ?? true;
        if (dashboardParameter == false || !refreshEnabled || this.dashboardWidgetExports.dashboard.showExport == false) {
            for (let i: number = arg.menuItems.length - 1; i >= 0; i--) {
                if ((dashboardParameter == false && arg.menuItems[`${i}`].id == 'dashboardparameters') || (!refreshEnabled && arg.menuItems[`${i}`].id == 'refreshDashboard') || (this.dashboardWidgetExports.dashboard.showExport == false && arg.menuItems[`${i}`].id == 'export')) {
                    arg.menuItems.splice(i, 1);
                }
            }
        }
        const clientFnc: any = window[this.embedOptions.events?.viewer?.beforeMobileMenuOpen];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.events?.viewer?.beforeMobileMenuOpen instanceof Function) {
            this.embedOptions.events?.viewer?.beforeMobileMenuOpen.call(this, arg);
        }
    }

    _onBoldBIAjaxBeforeLoad(arg: object): any {
        const clientFnc: any = window[this.embedOptions.events.onAjaxStart];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.events.onAjaxStart instanceof Function) {
            this.embedOptions.events.onAjaxStart.call(this, arg);
        }
    }

    _onBoldBIbeforeDesignerToolbarButtonsRendered(arg: object): any {
        const clientFnc: any = window[this.embedOptions.events?.designer?.beforeToolbarButtonsRender];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.events?.designer?.beforeToolbarButtonsRender instanceof Function) {
            this.embedOptions.events?.designer?.beforeToolbarButtonsRender.call(this, arg);
        }
    }

    _onBoldBIbeforeDatasourceToolbarButtonsRendered(arg: { toolbarButtons: any }): any {
        for (let i: number = arg.toolbarButtons.length - 1; i >= 0; i--) {
            if (arg.toolbarButtons[`${i}`].elementId == this.embedOptions.embedContainerId + '_embeddedbi_continue_dashboard_button' || arg.toolbarButtons[`${i}`].elementId == this.embedOptions.embedContainerId + '_embeddedbi_editScheduleButton') {
                arg.toolbarButtons.splice(i, 1);
            }
            // For Datasource edit Mode.
            if (!this.isNewConnection && this.embedOptions.mode != BoldBI.Mode.Design) {
                if (arg.toolbarButtons[`${i}`].elementId == this.embedOptions.embedContainerId + '_embeddedbi_cancelButton') {
                    arg.toolbarButtons.splice(i, 1);
                }
            }
        }
        this.isNewConnection = false;
        const clientFnc: any = window[this.embedOptions.events?.datasource?.beforeToolbarButtonsRender];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.events?.datasource?.beforeToolbarButtonsRender instanceof Function) {
            this.embedOptions.events?.datasource?.beforeToolbarButtonsRender.call(this, arg);
        }
    }

    _onBoldBIbeforeDatasourceToolbarIconsRendered(arg: object): any {
        const clientFnc: any = window[this.embedOptions.events?.datasource?.beforeToolbarIconsRender];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.events?.datasource?.beforeToolbarIconsRender instanceof Function) {
            this.embedOptions.events?.datasource?.beforeToolbarIconsRender.call(this, arg);
        }
    }

    _onBoldBIbeforeDesignerToolbarIconsRendered(arg: object): any {
        const clientFnc: any = window[this.embedOptions.events?.designer?.beforeToolbarIconsRender];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.events?.designer?.beforeToolbarIconsRender instanceof Function) {
            this.embedOptions.events?.designer?.beforeToolbarIconsRender.call(this, arg);
        }
    }

    _onBoldBItoolbarClick(arg: object): any {
        const mode = this.embedOptions?.mode;
        const context = mode === 'design' ? 'designer' : mode === 'datasource' ? 'datasource' : null;

        if (!context) return;

        const handler = this.embedOptions.events?.[context]?.onToolbarItemClick;
        if (typeof handler === 'string') {
            const clientFnc: any = window[handler];
            if (typeof clientFnc === 'function') {
                clientFnc.call(this, arg);
            }
        }
        if (typeof handler === 'function') {
            handler.call(this, arg);
        }
    }
    _onBoldBIbeforeWidgetItemsListed(arg: object): any {
        const clientFnc: any = window[this.embedOptions.events?.designer?.beforeWidgetsListed];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.events?.designer?.beforeWidgetsListed instanceof Function) {
            this.embedOptions.events?.designer?.beforeWidgetsListed.call(this, arg);
        }
    }
    _onBoldBIbeforeWidgetLayoutRender(arg: object): any {
        const clientFnc: any = window[this.embedOptions.events?.widget?.beforeLayoutRender];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.events?.widget?.beforeLayoutRender instanceof Function) {
            this.embedOptions.events?.widget?.beforeLayoutRender.call(this, arg);
        }
    }

    _onBoldBIDashboardWidgetIconClick(arg: object): any {
        const serverFnc: any = window[this.onWidgetIconClickFn];
        if (serverFnc instanceof Function) {
            serverFnc.call(this, arg);
        }

        const clientFnc: any = window[this.embedOptions.events?.widget?.onToolbarItemClick];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.events?.widget?.onToolbarItemClick instanceof Function) {
            this.embedOptions.events?.widget?.onToolbarItemClick.call(this, arg);
        }
    }

    _onBoldBIonControlMenuClick(arg: object): any {
        const clientFnc: any = window[this.embedOptions.events?.widget?.onToolbarItemClick];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.events?.widget?.onToolbarItemClick instanceof Function) {
            this.embedOptions.events?.widget?.onToolbarItemClick.call(this, arg);
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


    _onBoldBIBeforeNavigateUrlLinking(arg: object): any {
        const clientFnc: any = window[this.embedOptions.events?.viewer?.beforeUrlNavigation];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.events?.viewer?.beforeUrlNavigation instanceof Function) {
            this.embedOptions.events?.viewer?.beforeUrlNavigation.call(this, arg);
        }
    }

    _onBoldBIBeforeViewdataIconRender(arg: object): any {
        const clientFnc: any = window[this.embedOptions.events?.viewer?.beforeViewDataRender];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, arg);
        }
        if (this.embedOptions.events?.viewer?.beforeViewDataRender instanceof Function) {
            this.embedOptions.events?.viewer?.beforeViewDataRender.call(this, arg);
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

    _showLoader(container?: any): any {
        if (this.isMultipleWidgetMode) {
            this.embedOptions.embedContainerId = container;
        }

        const embedId = this.embedOptions.embedContainerId;
        const styleContent = `
        #${embedId} .viewer-blue-loader { display: block !important; }
        #${embedId} .loader-icon { display: block; left: 0 !important; position: relative; margin: 0 auto; width: 54px; height: 54px; }
        #${embedId} .loader-icon .circular { animation: rotate 2s linear infinite; height: 54px; width: 54px; position: relative; }
        #${embedId} .loader-icon .path { stroke-dasharray: 1,200; stroke-dashoffset: 0; animation: dash 1.5s ease-in-out infinite; stroke: #5592FB; stroke-linecap: square; }
        @keyframes rotate { 100% { transform: rotate(360deg); } }
        @keyframes dash {
            0% { stroke-dasharray: 1,200; stroke-dashoffset: 0; }
            50% { stroke-dasharray: 89,200; stroke-dashoffset: -35; }
            100% { stroke-dasharray: 89,200; stroke-dashoffset: -124; }
        }
        `;

        // Check if the style already exists
        if (![...document.head.querySelectorAll('style')].some(style => style.innerHTML.includes(`#${embedId} .viewer-blue-loader`))) {
            const loaderStyle = document.createElement('style');
            loaderStyle.innerHTML = styleContent;
            document.head.appendChild(loaderStyle);
        }

        const loader: any = '<div class="preloader-wrap viewer-blue-loader" style="display: none; width: ' + this.embedOptions.width + ';height: ' + this.embedOptions.height + '; top: 0; bottom: 0; z-index : 2;"> <div id="loader_image" align="center" style="position:relative;top:45%;"> <div class="loader-blue loader-icon" id="loader-icon"> <svg class="circular"> <circle class="path" cx="27" cy="27" r="20" fill="none" stroke-width="4" stroke-miterlimit="10"></circle> </svg> </div> </div> </div>';
        this._removeElement('embedded-bi-error');
        document.getElementById(this.embedOptions.embedContainerId).insertAdjacentHTML('afterbegin', loader);
    }

    _getAuthorizationToken: any = this.Invoke(function (dashboardId?: string): any {
        const that: BoldBI = this;
        const embedDbrdId: any = dashboardId ? dashboardId : this.embedOptions.dashboardId;
        const embedDbrdIds: any = this.embedOptions.dashboardIds.join(',');
        const embedDbrbPaths: any = this.embedOptions.dashboardPaths.join(',');
        let embedQueryString: any = 'embed_nonce=' + this._uuidv4Generator() +
            '&embed_dashboard_id=' + embedDbrdId +
            '&embed_dashboard_ids=' + embedDbrdIds +
            '&embed_dashboard_path=' + this.embedOptions.dashboardPath +
            '&embed_dashboard_paths=' + embedDbrbPaths +
            '&pinboard_name=' + (this.pinBoardRendered ? this.embedOptions.pinboardName : '') +
            '&embed_mode=' + this.embedOptions.mode +
            '&embed_timestamp=' + Math.round((new Date()).getTime() / 1000) +
            '&embed_expirationtime=' + this.embedOptions.expirationTime;

        if (this.embedOptions.anonymousToken.isEnabled) {
            const { groupName, userEmail } = this.embedOptions.anonymousToken;
            embedQueryString += `&embed_user_email=${userEmail}&embed_anonymous_token=true&embed_authorize_group=${groupName}`;
        }

        if (this.embedOptions.viewId) {
            embedQueryString = embedQueryString +
                '&embed_dashboardview_id=' + this.embedOptions.viewId;
        }
        else if (this.embedOptions.viewName) {
            embedQueryString = embedQueryString + '&embed_dashboardview_name=' + this.embedOptions.viewName;
        }

        if (this.isWidgetMode) {
            if (this.isMultipleWidgetMode == false) {
                embedQueryString = embedQueryString +
                    '&embed_widget_isenabled=' + this.isWidgetMode +
                    '&embed_widget_name=' + this.widgetName;
            }
            else {
                const multipleWidgetList: any = [];
                this.embedOptions.widgetList.forEach(function (widgetDetails: any): any {
                    multipleWidgetList.push(widgetDetails.widgetName.toLowerCase());
                });

                embedQueryString = embedQueryString +
                    '&embed_widget_isenabled=' + this.isWidgetMode +
                    '&embed_widget_list=' + multipleWidgetList;
            }
        }

        if (this.isMultiTab) {
            embedQueryString = embedQueryString +
                '&isMultiTab=' + this.isMultiTab;
        }

        if (!this._isEmptyOrSpaces(this.embedOptions.datasourceId)) {
            embedQueryString = embedQueryString +
                '&embed_datasource_id=' + this.embedOptions.datasourceId;
        }
        else if (!this._isEmptyOrSpaces(this.embedOptions.datasourceName)) {
            embedQueryString = embedQueryString +
                '&embed_datasource_name=' + this.embedOptions.datasourceName;
        }

        const data: any = {
            embedQuerString: encodeURI(embedQueryString),
            embedQueryString: encodeURI(embedQueryString),
            dashboardServerApiUrl: this.dashboardServerApiUrl
        };

        if (this.embedOptions.authorizationServer.url != '') {
            this._xhrRequestHelper('POST', this.embedOptions.authorizationServer.url, data, this.embedOptions.authorizationServer.headers, this._renderDashboard);
        } else if (!(this._isNullOrUndefined(this.embedOptions.authorizationServer.data)) && this.embedOptions.authorizationServer.data != '' && this.embedOptions.authorizationServer.url == '') {
            this._renderDashboard(this.embedOptions.authorizationServer.data);
        } else if (this.embedOptions.enableDomainMasking) {
            this._renderDashboard(this.embedOptions.authorizationServer.data);
        } else if ((this.embedOptions.authorizationServer.url == '' || this.embedOptions.authorizationServer.data == '') && this.embedOptions.mode == BoldBI.Mode.View && this._isEmptyOrSpaces(this.embedOptions.pinboardName) && (this.embedOptions.dashboardId || this.embedOptions.dashboardPath || this.embedOptions.dashboardIds || this.embedOptions.dashboardPaths)) {
            bbEmbed.ajax({
                async: true,
                type: 'POST',
                url: this.dashboardServerApiUrl + this.embedAuthorizeEndPoint,
                data: JSON.stringify(embedQueryString),
                contentType: 'application/json',
                success: bbEmbed.proxy(that._renderDashboard, that)
            });
        }
        else {
            throw new Error(errorMessages['AuthorizationServerMissing']);
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

        http.onreadystatechange = function (): any {
            if (http.readyState == 4 && http.status == 200) {
                const response = typeof http.response === 'object' ? http.response : JSON.parse(http.response);
                that._authorizeResponse = response;
                callBackFn.call(that, response);
            }
            else if (http.readyState == 4 && http.status == 404) {
                that._throwError(errorMessages['ServerNotFound']);
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

    _uuidv4Generator(): string {
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

    _validateOptions: any = this.Invoke(function (options: {
        embedContainerId?: string, viewId?: string, viewName?: string, serverUrl?: string, pinboardName?: string, mode?: any, dashboardIds?: string[], dashboardId?: string, dashboardPath?: string, dashboardPaths?: string[], environment?: any,
        datasourceId?: string, datasourceName?: string, onError?: any, widgetList?: any, enableDomainMasking?: boolean, hideErrorMessage?: boolean, token?: string, embedToken?: string
    }): any {
        const initialOptions : any = options as any;

        this.embedOptions = {
            ...this.embedOptions,
            embedContainer: options.embedContainerId,
            hideErrorMessage: options.hideErrorMessage,
            widgetSettings: { ...initialOptions.widgetSettings },
            exportSettings: { ...initialOptions.exportSettings },
            pinboardSettings: { ...initialOptions.pinboardtSettings },
            autoRefreshSettings: { ...initialOptions.autoRefreshSettings },
            designCanvasSettings: { ...initialOptions.designCanvasSettings },
            dashboardSettings: { ...initialOptions.dashboardSettings },
            embedAiAssistant: { ...initialOptions.embedAiAssistant },
            customBrandSettings: { ...initialOptions.customBrandSettings },
            toolbarSettings: {...initialOptions.toolbarSettings},
            languageSettings: {...initialOptions.languageSettings},
            localeSettings: {...initialOptions.localeSettings},
            dynamicConnection: {...initialOptions.dynamicConnection},
            settings: { ...initialOptions.settings }
        };

        const viewerSettings : any = initialOptions.settings?.viewer;
        this.editIgnore = initialOptions.dashboardSettings?.edit ?? viewerSettings?.edit ?? options?.mode === BoldBI.Mode.Design;

        this.bingMapRequired = typeof initialOptions.isBingMapRequired === 'boolean' ? initialOptions.isBingMapRequired : initialOptions.settings?.bingMapRequired ?? false;
        this.restrictMobileView = typeof initialOptions.restrictMobileView === 'boolean' ? initialOptions.restrictMobileView : initialOptions.settings?.restrictMobileView ?? false;
        this.disableAutoRecover = typeof initialOptions.disableAutoRecover === 'boolean' ? initialOptions.disableAutoRecover : initialOptions.settings?.disableAutoRecover ?? false;

        const dashboardSettings : any = this.embedOptions.dashboardSettings;
        const widgetSettings : any = this.embedOptions.widgetSettings;
        const exportSettings : any = this.embedOptions.exportSettings;
        const settings : any = this.embedOptions.settings;

        this.dashboardWidgetExports.dashboard = {
            showExport: typeof dashboardSettings?.showExport === 'boolean' ? dashboardSettings.showExport : settings?.viewer?.export ?? true,
            showMoreOption: typeof dashboardSettings?.showMoreOption === 'boolean' ? dashboardSettings.showMoreOption : settings?.viewer?.moreOption ?? true,
            showMetrics: typeof dashboardSettings?.showMetrics === 'boolean' ? dashboardSettings.showMetrics : settings?.viewer?.metrics ?? true
        };

        this.dashboardWidgetExports.widget = {
            showExport: typeof widgetSettings?.showExport === 'boolean' ? widgetSettings.showExport : settings?.widget?.export ?? true,
            showMoreOption: typeof widgetSettings?.showMoreOption === 'boolean' ? widgetSettings.showMoreOption : settings?.widget?.moreOption ?? true
        };

        this.dashboardWidgetExports.export = {
            excel: typeof exportSettings?.showExcel === 'boolean' ? exportSettings.showExcel : settings?.export?.excel ?? true,
            pdf: typeof exportSettings?.showPDF === 'boolean' ? exportSettings.showPDF : settings?.export?.pdf ?? true,
            image: typeof exportSettings?.showImage === 'boolean' ? exportSettings.showImage : settings?.export?.image ?? true,
            csv: typeof exportSettings?.showCSV === 'boolean' ? exportSettings.showCSV : settings?.export?.csv ?? true
        }
        if (options.enableDomainMasking) {
            return true;
        }
        if (!this._isNullOrUndefined(options.onError)) {
            this.embedOptions.events.onError = options.onError;
        }
        if (this._isEmptyOrSpaces(options.embedContainerId) && this._isNullOrUndefined(options.widgetList)) {
            this.invalidDetail = true;
            throw new Error(errorMessages['InvalidEmbedContainerID']);
        }
        if (this._isEmptyOrSpaces(options.serverUrl)) {
            this.invalidDetail = true;
            throw new Error(errorMessages['EmptyServerURL']);
        }
        if (options.mode == BoldBI.Mode.AIAssistant)
        {
            return true;
        }
        if (!this._isUrl(options.serverUrl)) {
            this.invalidDetail = true;
            throw new Error(errorMessages['InvalidServerURL']);
        }
        if (!this._isEmptyOrSpaces(options.pinboardName)) {
            return true;
        }
        if (options.mode == BoldBI.Mode.Connection) {
            return true;
        }
        if (options.dashboardPath || (options.dashboardPaths && options.mode !== BoldBI.Mode.DataSource)) {
            const pathsToValidate: any = options.dashboardPath ? [options.dashboardPath] : options.dashboardPaths;
            pathsToValidate.forEach((path: any, index: number) => {
                pathsToValidate[Number(index)] = `${path.startsWith('/') ? '' : '/'}${path}`.replace(/\/+$/, '');
                const splitedPath: string[] = pathsToValidate[Number(index)].split('/');
                if (splitedPath.length !== 3 || splitedPath[0] !== '' || splitedPath[1] === '' || splitedPath[2] === '') {
                    throw new Error(errorMessages['InvalidDashboardPath'] + path);
                }
            });
            if (options.dashboardPath) {
                options.dashboardPath = pathsToValidate[0];
            } else {
                options.dashboardPaths = pathsToValidate;
            }
        }
        if (this._isEmptyOrSpaces(options.dashboardId) && (!options.dashboardIds || !options.dashboardIds.length) && (!options.dashboardPaths || !options.dashboardPaths.length) && this._isEmptyOrSpaces(options.dashboardPath) && options.mode !== BoldBI.Mode.Design && this._isEmptyOrSpaces(options.datasourceId) && this._isEmptyOrSpaces(options.datasourceName)) {
            if (options.mode != BoldBI.Mode.DataSource) {
                if (this._isEmptyOrSpaces(options.pinboardName) && !this._isNullOrUndefined(options.pinboardName)) {
                    this.invalidDetail = true;
                    throw new Error(errorMessages['PinboardNameEmpty']);
                }
                else if (this._isEmptyOrSpaces(options.viewId)) {
                    this.invalidDetail = true;
                    if (!this._isNullOrUndefined(options.token) || !this._isNullOrUndefined(options.embedToken)) {
                        throw new Error(errorMessages['EmptyDbrdOrViewIDForToken']);
                    }
                    else {
                        throw new Error(errorMessages['EmptyDbrdOrViewID']);
                    }
                }
            } else {
                this.invalidDetail = true;
                throw new Error(errorMessages['EmptyDatasourceDetails']);
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


    _throwError(errorMsg: any, embedContainerId?: string): any {
        embedContainerId = this._isEmptyOrSpaces(embedContainerId) ? this.embedOptions.embedContainerId : embedContainerId;
        const hideErrorMessageValue = typeof this.embedOptions.hideErrorMessage === 'boolean' ? this.embedOptions.hideErrorMessage : this.embedOptions.settings?.hideErrorMessage ?? false;
        const showErrorMessage = !hideErrorMessageValue;
        if (embedContainerId) {
            if (errorMsg && typeof errorMsg === 'string') {
                errorMsg = errorMsg.replace(/^BoldBI Embedded:\s*/, '');
            }
            else if (errorMsg && typeof errorMsg.message === 'string') {
                errorMsg = errorMsg.message.replace(/^BoldBI Embedded:\s*/, '');
            }
            const customBrand = this.embedOptions?.settings?.brand?.name ? this.embedOptions.settings.brand.name : 'BoldBI Embedded';
            this._removeElementsClass(embedContainerId, '.preloader-wrap', 'viewer-blue-loader');
            if (showErrorMessage) {
                const errorMessage: string = '<div id="embedded-bi-error" style="display:table;height:100%;width:100%;"><div style="display: table-cell;vertical-align: middle;text-align: center;"><div style="display: inline-block;"><img src=' + this.errorImage + ' style="float: left"/><div style="float: left;margin-left: 10px;line-height: 20px;">' + customBrand + ':' + errorMsg + '</div></div>';
                const container = document.getElementById(embedContainerId)
                if (container) {
                    container.innerHTML = errorMessage;
                }
            }
        } else {
            if (showErrorMessage) {
                alert(errorMsg);
            }
        }
        if (!this._isNullOrUndefined(this.embedOptions.events.onError) && this.embedOptions.events.onError != '') {
            const errormessage: any = this.embedOptions?.settings?.brand?.name ? new Error(this.embedOptions.settings.brand.name +':'+ errorMsg) : new Error(errorMessages['BoldBIEmbedded'] + errorMsg);
            this.onErrorClient(errormessage);
        }
        else {
            throw new Error(errorMessages['BoldBIEmbedded'] + errorMsg);
        }
    }

    //The method uses to passes the client side error.
    onErrorClient(errorMessage: any): any {
        const errorDetail: any = {
            errorStatus: true,
            StatusMessage: errorMessage,
            StatusCode: 500
        };
        const clientFnc: any = window[this.embedOptions.events.onError];
        if (clientFnc instanceof Function) {
            clientFnc.call(this, errorDetail);
        }
        if (this.embedOptions.events.onError instanceof Function) {
            this.embedOptions.events.onError.call(this, errorDetail);
        }
    }

    _removeElementsClass(id: string, childElement: string, targeClass: string): any {
        let nodeList: any = [];
        if (this._isEmptyOrSpaces(id)) {
            nodeList = document.querySelector(childElement);
        } else if (this._isEmptyOrSpaces(childElement)) {
            nodeList.push(document.getElementById(id));
        } else {
            const parentElement = document.getElementById(id);
            nodeList = parentElement ? parentElement.querySelectorAll(childElement) : [];
        }
        nodeList.forEach(function (element: string): any {
            this._removeClass(element, targeClass);
        }.bind(this));
    }

    _hasClass(el: { classList?: any, className?: any }, className: string): any {
        if (el.classList) {
            return el.classList.contains(className);
        }
        const regex: any = RegExp;
        return !!el.className.match(new regex('(\\s|^)' + className + '(\\s|$)'));
    }

    _addClass(el: { classList?: any, className?: any }, className: string): any {
        if (el.classList) {
            el.classList.add(className);
        }
        else if (!this._hasClass(el, className)) {
            el.className += ' ' + className;
        }
    }

    _removeClass(el: { classList?: any, className?: any }, className: string): any {
        if (el.classList) {
            el.classList.remove(className);
        }
        else if (this._hasClass(el, className)) {
            const regex: any = RegExp;
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
        const processData: any = { masterData: [] };
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

            masterdata.forEach(function (filter: { ColumnName?: any, InitialDateFilter?: any, InitialMeasureFilter?: any, InitialDimensionFilter?: any, IsRange?: any }): any {
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

    _multipleWidgets(methodName: string, ...args: any) {
        const existingDashboardInstance = this._getDashboardInstance();
        if (!this._isNullOrUndefined(existingDashboardInstance)) {
            var multipleWidgetInstance = existingDashboardInstance.loadMultipleWidget.multipleWidgetInstanceCollection;
            for (let i = 0; i < multipleWidgetInstance.length; i++) {
                const currentInstance = multipleWidgetInstance[i].currentInstance;
                if (methodName == "widgets") {
                    if (multipleWidgetInstance[i].widgetId == args[0][0].id) {
                        currentInstance.model[methodName] = [];
                        currentInstance.option(methodName, ...args);
                    }
                }
                else if (methodName != "exportWidgetAsCsv" && methodName != "exportWidgetAsImage" && methodName != "exportWidgetAsExcel" && methodName != "exportWidgetAsPdf") {
                    if (typeof currentInstance[methodName] === 'function') {
                        currentInstance[methodName](...args);
                    }
                    else {
                        currentInstance.model[methodName] = "";
                        currentInstance.option(methodName, ...args);
                    }
                }
                else {
                    if (multipleWidgetInstance[i].widgetId == args[0] && typeof currentInstance[methodName] === 'function') {
                        const filteredArgs = args.slice(1);
                        currentInstance[methodName](...filteredArgs);
                    }
                }
            }
        }
    }

    applyStyles(): any {
        this.deprecated = false;
        this.addStyles();   
    }

    addStyles(): any {
        this.deprecationMessage('addStyles');
        const that: BoldBI = this;
        that._loadDepedentFiles();
    }

    removeStyles(): any {
        this.deprecated = false;
        this.destroyStyles();
        
    }

    destroyStyles(): any {
        this.deprecationMessage('destroyStyles');
        const that: BoldBI = this;
        document.querySelectorAll('link').forEach(function (node: any): any {
            that.cssFiles.forEach(function (file: string): any {
                if (node.href.toLowerCase().indexOf(file.toLowerCase()) != -1) {
                    node.parentNode.removeChild(node);
                }
            });
        });
    }

    _validatetoken(token: string): any {
        const tokenToValidate = token || this.authToken;
        const isJWTToken = this._isJwtFormat(tokenToValidate);
        return isJWTToken ? `bearer ${tokenToValidate}` : `basic ${tokenToValidate}`;
    }

    _isJwtFormat(token) {
        const jwtRegex = /^[A-Za-z0-9-_=]+?\.[A-Za-z0-9-_=]+?\.[A-Za-z0-9-_.+/=]*$/;
        return jwtRegex.test(token);
    }

    removeWidgetInstance(widgetId: string): any {
        this.deprecationMessage('removeWidgetInstance');
        const ele: string = document.getElementById(this.embedOptions.embedContainerId);
        BoldBI._removewidgetinstance(ele, "embeddedBoldBIWidget_" + widgetId);
        this._widgetsCollection = this._widgetsCollection.filter(
            Id => Id !== widgetId
        );
    }

    static _putinstance(element: string, key: string, obj: object): any {
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
    static _removewidgetinstance(element: string, key: string): any {
        if (BoldBI._storage.has(element)) {
            const ret: any = BoldBI._storage.get(element).delete(key);
            return ret;
        }
    }

}

export class widgetBI {
    public containerID: string;
    public widgetCollection: Array<string>;
    public deprecated: boolean;
    constructor() {
        this.containerID = '';
        this.widgetCollection = [];
        this.deprecated = true;
    }
    setFilterParameters(filters: any): any {
        if (this.deprecated){
            deprecatedMethod('setFilterParameters');
            this.deprecated = true;
        }
        const widgetId: Array<string> = this.widgetCollection;
        if (Array.isArray(widgetId) == true) {
            if (BoldBI._hasinstance(document.getElementById(this.containerID), 'embeddedBoldBIWidget_' + widgetId[widgetId.length - 1])) {
                BoldBI._putinstance(document.getElementById(this.containerID), 'embeddedBoldBIWidget_' + widgetId[widgetId.length - 1], filters);
            }
        }
    }
    setFilters(filters: any): any {
        this.deprecated = false;
        this.setFilterParameters(filters);
    }
}
