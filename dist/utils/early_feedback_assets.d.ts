/** Best effort only: callers must not await this before normal authorization/rendering. */
export declare function beginEarlyFeedbackAssets(serverRoot: string, nonce?: string): Promise<boolean>;
