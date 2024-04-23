/**
 * 实时天气数据接口的根对象
 */
export interface Realtime {
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
    result: RealtimeResult;
}

/**
 * 实时天气查询结果
 */
export interface RealtimeResult {
    /** 实时天气数据 */
    realtime: RealtimeData;
    /** 主要天气信息的索引 */
    primary: number;
}

/**
 * 实时天气数据
 */
export interface RealtimeData {
    /** 数据状态 */
    status: string;
    /** 温度 */
    temperature: number;
    /** 相对湿度 */
    humidity: number;
    /** 云量 */
    cloudrate: number;
    /** 天气现象 */
    skycon: string;
    /** 能见度 */
    visibility: number;
    /** 短波辐射 */
    dswrf: number;
    /** 风力数据 */
    wind: RealtimeWind;
    /** 气压 */
    pressure: number;
    /** 体感温度 */
    apparent_temperature: number;
    /** 降水数据 */
    precipitation: RealtimePrecipitation;
    /** 空气质量数据 */
    air_quality: RealtimeAirQuality;
    /** 生活指数数据 */
    life_index: RealtimeLifeIndex;
}

/**
 * 实时风力数据
 */
export interface RealtimeWind {
    /** 风速 */
    speed: number;
    /** 风向 */
    direction: number;
}

/**
 * 实时降水数据
 */
export interface RealtimePrecipitation {
    /** 本地降水数据 */
    local: RealtimeLocal;
}

/**
 * 本地降水数据
 */
export interface RealtimeLocal {
    /** 数据状态 */
    status: string;
    /** 数据来源 */
    datasource: string;
    /** 降水强度 */
    intensity: number;
}

/**
 * 实时空气质量数据
 */
export interface RealtimeAirQuality {
    /** PM2.5 */
    pm25: number;
    /** PM10 */
    pm10: number;
    /** 臭氧 */
    o3: number;
    /** 二氧化硫 */
    so2: number;
    /** 二氧化氮 */
    no2: number;
    /** 一氧化碳 */
    co: number;
    /** AQI 数据 */
    aqi: RealtimeAqi;
    /** 描述 */
    description: RealtimeDescription;
}

/**
 * AQI 数据
 */
export interface RealtimeAqi {
    /** 中国标准 AQI */
    chn: number;
    /** 美国标准 AQI */
    usa: number;
}

/**
 * 描述数据
 */
export interface RealtimeDescription {
    /** 美国描述 */
    usa: string;
    /** 中国描述 */
    chn: string;
}

/**
 * 实时生活指数数据
 */
export interface RealtimeLifeIndex {
    /** 紫外线指数 */
    ultraviolet: RealtimeUltraviolet;
    /** 舒适度指数 */
    comfort: RealtimeUltraviolet;
}

/**
 * 实时生活指数的具体值
 */
export interface RealtimeUltraviolet {
    /** 指数值 */
    index: number;
    /** 描述 */
    desc: string;
}
