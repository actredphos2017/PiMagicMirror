/**
 * 分钟级降水预报接口的响应数据结构
 */
export interface Minutely {
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
    result: MinutelyResult;
}

/**
 * 分钟级降水预报的查询结果
 */
export interface MinutelyResult {
    /** 分钟级降水数据 */
    minutely: MinutelyData;
    /** 主要降水强度 */
    primary: number;
    /** 预报关键信息 */
    forecast_keypoint: string;
}

/**
 * 分钟级降水数据
 */
export interface MinutelyData {
    /** 数据状态 */
    status: string;
    /** 数据来源 */
    datasource: string;
    /** 未来2小时每分钟的雷达降水强度，单位：mm/h */
    precipitation_2h: number[];
    /** 未来1小时每分钟的雷达降水强度，单位：mm/h */
    precipitation: number[];
    /** 未来两小时每半小时的降水概率 */
    probability: number[];
    /** 降水描述 */
    description: string;
}