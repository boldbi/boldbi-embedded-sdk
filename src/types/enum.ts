export const Mode = {
    View: "view",
    Design: "design",
    Connection: "connection",
    DataSource: "datasource",
    AIAssistant: "aiassistant"
  } as const;
  export type Mode = typeof Mode[keyof typeof Mode];
  
  export const EmbedType = {
    Component: "component",
    IFrame: "iframe",
  } as const;
  export type EmbedType = typeof EmbedType[keyof typeof EmbedType];
  
  export const Environment = {
    Enterprise: "onpremise",
    Cloud: "cloud",
  } as const;
  export type Environment = typeof Environment[keyof typeof Environment];
  
  export const Theme = {
    Off: "off",
    Light: "light",
    Dark: "dark",
  } as const;
  export type Theme = typeof Theme[keyof typeof Theme];
  