import{IWidgetsPanel} from './widgets-panel';
import{IDatasourceConfig} from './datasource-config';
import { IToolbarSettings } from './toolbar-settings';
import { IPreConfiguredWidgets } from './preconfigured-widgets';
export interface IDesignerSettings {
    widgetsPanel?: IWidgetsPanel;
    dataSourceConfig?: IDatasourceConfig;
    previewAs?: boolean;
    toolbar?: IToolbarSettings;
    preConfiguredWidgets?: IPreConfiguredWidgets;
}
