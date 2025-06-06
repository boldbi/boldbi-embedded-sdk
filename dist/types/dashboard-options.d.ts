import { IAnonymousToken } from './anonymous-token';
import { IDatasources } from './datasource';
import { IWidgetList } from './widget-list';
import { ILocalData } from './local-data';
import { ILayoutSettings } from './layout-settings';
import { IDashboardSettings } from './dashboard-settings';
import { IWidgetSettings } from './widget-settings';
import { IDynamicConnection } from './dynamic-connection';
import { IExportSettings } from './export-settings';
import { IAuthorizationServer } from './authorization-server';
import { IAutoRefreshSettings } from './auto-refresh-settings';
import { ILocaleSettings } from './locale-settings';
import { ILanguageSettings } from './language-settings';
import { ICustomBrandSettings } from './custom-brand-settings';
import { IToolbarSettings } from './toolbar-settings';
import { IPinboardSettings } from './pinboard-settings';
import { IDesignCanvasSettings } from './design-canvas-settings';
import { IWidgetContainerSettings } from './widget-container-settings';
import { IPreConfiguredWidgets } from './preconfigured-widgets';
import { IEmbedAiAssistant } from './embed-ai-assistant';
import { Mode, EmbedType, Environment, Theme } from './enum';
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
    embedToken?: string;
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
    embedType?: EmbedType;
    environment?: Environment;
    mode?: Mode;
    theme?: Theme;
    isMultiTabDashboard?: boolean;
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
    beforeViewdataIconRender?: (_event: Event) => void;
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
    hideErrorMessage?: boolean;
}
