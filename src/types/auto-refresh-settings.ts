// File: src/types/auto-refresh-settings.ts
import{IHourlySchedule} from './hourly-schedule';
export interface IAutoRefreshSettings {
    enabled?: boolean;
    hourlySchedule?: IHourlySchedule
}
