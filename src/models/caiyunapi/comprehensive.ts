import {RealtimeData} from "./realtime.ts";
import {MinutelyData} from "./minutely.ts";
import {HourlyData} from "./hourly.ts";
import {DailyData} from "./daily.ts";
import {AlertResult} from "./alert.ts";

export interface Comprehensive {
    status: 'ok' | 'failed';
    api_version: string;
    api_status: string;
    lang: string;
    unit: string;
    tzshift: number;
    timezone: string;
    server_time: number;
    location: number[];
    result: ComprehensiveResult;
    error?: string | 'token is invalid' | "'latitude out of bounds!'"
}

export interface ComprehensiveResult {
    alert: AlertResult,
    realtime: RealtimeData,
    minutely: MinutelyData,
    hourly: HourlyData,
    daily: DailyData,
    primary: number;
    forecast_keypoint: string;
}