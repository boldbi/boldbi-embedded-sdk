import { IEmbedAiAssistant } from './embed-ai-assistant';
import { ICustomBrandSettings } from './custom-brand-settings';
import { IDatasources } from './datasource';
import { IDesignerSettings } from './designer-settings';
import { IDynamicConnection } from './dynamic-connection';
import { IExportSettings } from './export-settings';
import { ILanguageSettings } from './language-settings';
import { ILocaleSettings } from './locale-settings';
import { IPinboardSettings } from './pinboard-settings';
import { IThemeSettings } from './theme-settings';
import { IViewDataSettings } from './view-data-settings';
import { IViewerSettings } from './viewer-settings';
import { IWidgetSettings } from './widget-settings';
import { IDesignCanvasSettings } from './design-canvas-settings';

export interface ISettings {
    bingMapRequired?: boolean,
    azureMapRequired?: boolean;
    hideErrorMessage?: boolean,
    restrictMobileView?: boolean,
    disableAutoRecover?: boolean,
    datasources?: IDatasources[];
    designCanvas?: IDesignCanvasSettings;
    viewer?: IViewerSettings,
    designer?: IDesignerSettings,
    viewData?: IViewDataSettings,
    widget?: IWidgetSettings,
    export?: IExportSettings,
    pinboard?: IPinboardSettings,
    aiAssistant?: IEmbedAiAssistant,
    theme?: IThemeSettings,
    dynamicConnection?: IDynamicConnection,
    brand?: ICustomBrandSettings,
    language?: ILanguageSettings,
    locale?: ILocaleSettings,
}
