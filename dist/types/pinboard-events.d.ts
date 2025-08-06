export interface IPinboardEvents {
    onDrag?: (_event: Event) => void;
    onDrop?: (_event: Event) => void;
    onLayoutChange?: (_event: Event) => void;
    onUnpin?: (_event: Event) => void;
}
