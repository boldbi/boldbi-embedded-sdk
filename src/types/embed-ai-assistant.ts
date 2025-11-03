import { IEmbedAiIcons } from './embed-ai-icons';
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
    hideBetaTag?: boolean,                         
    headerTextColor?: string, 
    hideLogo?: boolean, 
    hideIcons?: IEmbedAiIcons,
    hideWelcomeNote?: boolean,
    hideDashboardTag?: boolean,
    hideDatasourceTag?: boolean, 
    queryDisplayLimit?: Number, 
    dashboards?:[],
    dataSources?:[],
}