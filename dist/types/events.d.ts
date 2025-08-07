import { IViewerEvents } from "./viewer-events";
import { IDesignerEvents } from "./designer-events";
import { IDatasourcesEvents } from "./datasource-events";
import { IPinboardEvents } from "./pinboard-events";
import { IWidgetEvents } from "./widget-events";
import { IFilterEvents } from "./filters-events";
export interface IEvents {
    onActionStart?: (_event: Event) => void;
    onActionComplete?: (_event: Event) => void;
    onAjaxStart?: (_event: Event) => void;
    onResize?: (_event: Event) => void;
    onError?: (_event: Event) => void;
    viewer?: IViewerEvents;
    designer?: IDesignerEvents;
    datasource?: IDatasourcesEvents;
    pinboard?: IPinboardEvents;
    widget?: IWidgetEvents;
    filters?: IFilterEvents;
}
