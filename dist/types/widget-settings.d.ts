export interface IWidgetSettings {
    showExport?: boolean;
    showMaximize?: boolean;
    showMoreOption?: boolean;
    showFilter?: boolean;
    enableComment?: boolean;
    beforeIconRender?: (_event: Event) => void;
    onIconClick?: (_event: Event) => void;
    beforeWidgetControlMenuOpen?: (_event: Event) => void;
    onWidgetControlMenuClick?: (_event: Event) => void;
    beforeWidgetItemsListed?: (_event: Event) => void;
    beforeWidgetLayoutRender?: (_event: Event) => void;
}
