import { IEmbedAiSummary } from "./embed-ai-summary";
export interface IEmbedAiAssistant {
    enabled?: boolean;
    name?: string;
    position?: string;
    hideAiDataUsage?: boolean;
    summary?: IEmbedAiSummary;
}
