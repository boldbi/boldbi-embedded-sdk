import { EarlyFeedbackProjection } from './early_feedback_projection';
/**
 * Upper bound for masking the designer's centred loaders while the layout
 * projection and shared visual assets are still pending. After it elapses the
 * ordinary loading experience resumes; a late projection may still mount.
 */
export declare const EARLY_FEEDBACK_PENDING_MASK_TIMEOUT_MS = 3000;
/** Display an authorized receipt without waiting for or starting native/data initialization. */
export declare function beginEarlyFeedbackDisplay(owner: HTMLElement, host: HTMLElement, receipt: EarlyFeedbackProjection, assets: Promise<boolean>, options: {
    showToolbar: boolean;
    darkTheme?: boolean;
    isCurrent(): boolean;
    onPendingEnd?(): void;
}): () => void;
