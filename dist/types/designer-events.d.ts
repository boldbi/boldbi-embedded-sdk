export interface IDesignerEvents {
    beforeWidgetsListed?: (_event: Event) => void;
    beforeToolbarButtonsRender?: (_event: Event) => void;
    beforeToolbarIconsRender?: (_event: Event) => void;
    onToolbarItemClick?: (_event: Event) => void;
    beforePublishDialogOpen?: (_event: Event) => void;
}
