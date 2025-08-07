export interface IFilterEvents{
    afterApply?: (_event: Event) => void;
    beforeApply?: (_event: Event) => void;
    onInteraction?: (_event: Event) => void;
    onSavedFilterClick?: (_event: Event) => void;
    beforeSaveViewDialogOpen?: (_event: Event) => void;
    beforeSaveAsViewDialogOpen?: (_event: Event) => void;
}