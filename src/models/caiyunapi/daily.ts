/**
 * 天气预报接口的根对象
 */
export interface Daily {
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
    result: DailyResult;
}

/**
 * 天气预报的每日结果
 */
export interface DailyResult {
    /** 每日详细数据 */
    daily: DailyData;
    /** 主要天气信息的索引 */
    primary: number;
}

/**
 * 每日天气数据
 */
export interface DailyData {
    /** 数据状态 */
    status: string;
    /** 天文信息 */
    astro: DailyAstro[];
    /** 08:00-20:00 降水数据 */
    precipitation_08h_20h: DailyPrecipitation08h20h[];
    /** 20:00-32:00 降水数据 */
    precipitation_20h_32h: DailyPrecipitation08h20h[];
    /** 全天降水数据 */
    precipitation: DailyPrecipitation08h20h[];
    /** 温度数据 */
    temperature: DailyTemperature[];
    /** 08:00-20:00 温度数据 */
    temperature_08h_20h: DailyTemperature[];
    /** 20:00-32:00 温度数据 */
    temperature_20h_32h: DailyTemperature[];
    /** 风力数据 */
    wind: DailyWind[];
    /** 08:00-20:00 风力数据 */
    wind_08h_20h: DailyWind[];
    /** 20:00-32:00 风力数据 */
    wind_20h_32h: DailyWind[];
    /** 湿度数据 */
    humidity: DailyTemperature[];
    /** 云量数据 */
    cloudrate: DailyTemperature[];
    /** 气压数据 */
    pressure: DailyTemperature[];
    /** 能见度数据 */
    visibility: DailyTemperature[];
    /** 短波辐射数据 */
    dswrf: DailyTemperature[];
    /** 空气质量数据 */
    air_quality: DailyAirQuality;
    /** 天气现象数据 */
    skycon: DailySkycon[];
    /** 08:00-20:00 天气现象数据 */
    skycon_08h_20h: DailySkycon[];
    /** 20:00-32:00 天气现象数据 */
    skycon_20h_32h: DailySkycon[];
    /** 生活指数数据 */
    life_index: DailyLifeIndex;
}

/**
 * 天文信息
 */
export interface DailyAstro {
    /** 日期 */
    date: string;
    /** 日出时间 */
    sunrise: DailyTimeValue;
    /** 日落时间 */
    sunset: DailyTimeValue;
}

/**
 * 时间值
 */
export interface DailyTimeValue {
    /** 时间 */
    time: string;
}

/**
 * 08:00-20:00 或 20:00-32:00 降水数据
 */
export interface DailyPrecipitation08h20h {
    /** 日期 */
    date: string;
    /** 最大降水量 */
    max: number;
    /** 最小降水量 */
    min: number;
    /** 平均降水量 */
    avg: number;
    /** 降水概率 */
    probability: number;
}

/**
 * 温度数据
 */
export interface DailyTemperature {
    /** 日期 */
    date: string;
    /** 最高温度 */
    max: number;
    /** 最低温度 */
    min: number;
    /** 平均温度 */
    avg: number;
}

/**
 * 风力数据
 */
export interface DailyWind {
    /** 日期 */
    date: string;
    /** 最大风力 */
    max: DailyWindValue;
    /** 最小风力 */
    min: DailyWindValue;
    /** 平均风力 */
    avg: DailyWindValue;
}

/**
 * 风力值
 */
export interface DailyWindValue {
    /** 风速 */
    speed: number;
    /** 风向 */
    direction: number;
}

/**
 * 空气质量数据
 */
export interface DailyAirQuality {
    /** AQI 数据 */
    aqi: DailyAqi[];
    /** PM2.5 数据 */
    pm25: DailyTemperature[];
}

/**
 * AQI 数据
 */
export interface DailyAqi {
    /** 日期 */
    date: string;
    /** 最大 AQI */
    max: DailyAqiValue;
    /** 平均 AQI */
    avg: DailyAqiValue;
    /** 最小 AQI */
    min: DailyAqiValue;
}

/**
 * AQI 值
 */
export interface DailyAqiValue {
    /** 中国标准 AQI */
    chn: number;
    /** 美国标准 AQI */
    usa: number;
}

/**
 * 天气现象数据
 */
export interface DailySkycon {
    /** 日期 */
    date: string;
    /** 天气现象 */
    value: string;
}

/**
 * 生活指数数据
 */
export interface DailyLifeIndex {
    /** 紫外线指数 */
    ultraviolet: DailyUltraviolet[];
    /** 洗车指数 */
    carWashing: DailyUltraviolet[];
    /** 穿衣指数 */
    dressing: DailyUltraviolet[];
    /** 舒适度指数 */
    comfort: DailyUltraviolet[];
    /** 感冒指数 */
    coldRisk: DailyUltraviolet[];
}

/**
 * 生活指数的具体值
 */
export interface DailyUltraviolet {
    /** 日期 */
    date: string;
    /** 指数值 */
    index: string;
    /** 描述 */
    desc: string;
}
