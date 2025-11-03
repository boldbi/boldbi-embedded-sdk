export declare const deprecatedEventMap: Record<string, {
    newKey: string | string[];
    url: string | string[];
}>;
export declare const deprecatedMemberMap: Record<string, {
    newKey: string;
    url: string;
}>;
export declare function migrateDeprecatedEventKeys(embedOptions: any): any;
export declare function checkDeprecatedEmbedOptions(options: any): void;
export declare function deprecatedMethod(methodName: string): any;
