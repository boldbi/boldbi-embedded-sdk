export interface IWidgetEvents{
    beforeLayoutRender?: (_event: Event) => void;
    beforeToolBarItemsRender?: (_event: Event) => void;
    beforeContextMenuRender?: (_event: Event) => void;
    onToolbarItemClick?: (_event: Event) => void;
}