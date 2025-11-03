export declare const Mode: {
    readonly View: "view";
    readonly Design: "design";
    readonly Connection: "connection";
    readonly DataSource: "datasource";
    readonly AIAssistant: "aiassistant";
};
export type Mode = typeof Mode[keyof typeof Mode];
export declare const EmbedType: {
    readonly Component: "component";
    readonly IFrame: "iframe";
};
export type EmbedType = typeof EmbedType[keyof typeof EmbedType];
export declare const Environment: {
    readonly Enterprise: "onpremise";
    readonly Cloud: "cloud";
};
export type Environment = typeof Environment[keyof typeof Environment];
export declare const Theme: {
    readonly Off: "off";
    readonly Light: "light";
    readonly Dark: "dark";
};
export type Theme = typeof Theme[keyof typeof Theme];
