import { IHourlySchedule } from './hourly-schedule';
export interface IAutoRefreshSettings {
    enabled?: boolean;
    hourlySchedule?: IHourlySchedule;
}
