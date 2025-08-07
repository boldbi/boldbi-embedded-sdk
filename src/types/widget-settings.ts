// File: src/types/widget-settings.ts

export interface IWidgetSettings {
    showExport?: boolean;
    showMaximize?: boolean;
    showMoreOption?: boolean;
    showFilter?: boolean;
    export?: boolean;
    maximize?: boolean;
    moreOption?: boolean;
    filter?: boolean;
    comment?: boolean;
    beforeIconRender?: (_event: Event) => void;
    onIconClick?: (_event: Event) => void;
    beforeWidgetControlMenuOpen?: (_event: Event) => void;
    onWidgetControlMenuClick?: (_event: Event) => void;
    beforeWidgetItemsListed?: (_event: Event) => void;
    beforeWidgetLayoutRender ?: (_event: Event) => void;
}
