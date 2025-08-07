export interface IDatasourcesEvents{
    beforeToolbarButtonsRender?: (_event: Event) => void;
    beforeToolbarIconsRender?: (_event: Event) => void;
    onToolbarItemClick?: (_event: Event) => void;
    beforeSave?: (_event: Event) => void;
    afterSave?: (_event: Event) => void;
}