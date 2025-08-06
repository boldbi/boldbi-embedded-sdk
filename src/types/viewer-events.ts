export interface IViewerEvents{
    beforeContextMenuRender?: (_event: Event) => void;
    beforeMobileMenuOpen?: (_event: Event) => void;
    beforeUrlNavigation?: (_event: Event) => void;
    beforeViewDataRender?: (_event: Event) => void;
    beforeToolBarItemsRender?: (_event: Event) => void;
    onToolbarItemClick?: (_event: Event) => void;
}