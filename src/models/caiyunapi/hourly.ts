/**
 * 小时级天气预报接口的响应数据结构
 */
export interface Hourly {
    /** 接口请求状态 */
    status: 'ok' | 'failed';
    /** API 版本号 */
    api_version: string;
    /** API 状态 */
    api_status: string;
    /** 数据语言 */
    lang: string;
    /** 单位 */
    unit: string;
    /** 时区偏移量 */
    tzshift: number;
    /** 时区 */
    timezone: string;
    /** 服务器时间戳 */
    server_time: number;
    /** 位置坐标 */
    location: number[];
    /** 查询结果 */
    result: HourlyResult;
}

/**
 * 小时级天气预报的查询结果
 */
export interface HourlyResult {
    /** 小时级天气数据 */
    hourly: HourlyData;
    /** 主要天气现象 */
    primary: number;
    /** 预报关键信息 */
    forecast_keypoint: string;
}

/**
 * 小时级天气数据
 */
export interface HourlyData {
    /** 数据状态 */
    status: string;
    /** 天气描述 */
    description: string;
    /** 降水数据 */
    precipitation: HourlyPrecipitation[];
    /** 地表 2 米气温 */
    temperature: HourlyTemperature[];
    /** 体感温度 */
    apparent_temperature: HourlyTemperature[];
    /** 地表 10 米风 */
    wind: HourlyWindStrength[];
    /** 地表 2 米相对湿度 */
    humidity: HourlyTemperature[];
    /** 云量 */
    cloudrate: HourlyTemperature[];
    /** 天气现象 */
    skycon: HourlySkycon[];
    /** 地面气压 */
    pressure: HourlyTemperature[];
    /** 地表水平能见度 */
    visibility: HourlyTemperature[];
    /** 向下短波辐射通量 */
    dswrf: HourlyTemperature[];
    /** 空气质量 */
    air_quality: HourlyAirQuality;
}

/**
 * 空气质量数据
 */
export interface HourlyAirQuality {
    /** AQI 数据 */
    aqi: HourlyAqi[];
    /** PM2.5 浓度 */
    pm25: HourlyTemperature[];
}

/**
 * AQI 数据
 */
export interface HourlyAqi {
    /** 日期时间 */
    datetime: string;
    /** AQI 值 */
    value: HourlyAqiValue;
}

/**
 * AQI 值
 */
export interface HourlyAqiValue {
    /** 中国标准 AQI */
    chn: number;
    /** 美国标准 AQI */
    usa: number;
}

/**
 * 天气现象数据
 */
export interface HourlySkycon {
    /** 日期时间 */
    datetime: string;
    /** 天气现象值 */
    value: string;
}

/**
 * 风力数据
 */
export interface HourlyWindStrength {
    /** 日期时间 */
    datetime: string;
    /** 风速 */
    speed: number;
    /** 风向 */
    direction: number;
}

/**
 * 温度数据
 */
export interface HourlyTemperature {
    /** 日期时间 */
    datetime: string;
    /** 温度值 */
    value: number;
}

/**
 * 降水数据
 */
export interface HourlyPrecipitation {
    /** 日期时间 */
    datetime: string;
    /** 降水量 */
    value: number;
    /** 降水概率 */
    probability: number;
}
