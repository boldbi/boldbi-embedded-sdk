import { IEmbedAiSummary } from './embed-ai-summary';
export interface IEmbedAiAssistant {
    enabled?: boolean;
    name?: string;
    position?: string;
    hideUsageAnalytics?: boolean;
    hideChatHelp?: boolean;
    hideAiDataUsage?: boolean;
    hideAiChatHelp?: boolean;
    summary?: IEmbedAiSummary;
}
