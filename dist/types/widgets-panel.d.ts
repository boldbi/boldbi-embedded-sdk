import { IDragAndDropSettings } from './drag-drop-settings';
import { WidgetPanelDisplayMode } from './enum';
export interface IWidgetsPanel {
    defaultPanelDisplayText?: string;
    existingPanelDisplayText?: string;
    defaultPanelSearchPlaceholder?: string;
    existingPanelSearchPlaceholder?: string;
    existingDashboards?: string[];
    hideDefaultWidgets?: boolean;
    hideExistingWidgets?: boolean;
    dragAndDropSettings?: IDragAndDropSettings;
    enableModernLayout?: boolean;
    displayMode?: WidgetPanelDisplayMode;
}
