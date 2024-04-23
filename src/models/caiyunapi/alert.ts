/**
 * 警报结果接口
 */
export interface AlertResult {
    /** 接口请求状态 */
    status: string;
    /** 警报内容 */
    content: AlertContent[];
    /** 地区编码 */
    adcodes: AlertAdcode[];
}

/**
 * 警报地区编码
 */
export interface AlertAdcode {
    /** 地区编码 */
    adcode: number;
    /** 地区名称 */
    name: string;
}

/**
 * 警报内容
 */
export interface AlertContent {
    /** 省份 */
    province: string;
    /** 状态 */
    status: string;
    /** 代码 */
    code: string;
    /** 描述 */
    description: string;
    /** 区域 ID */
    regionId: string;
    /** 县 */
    county: string;
    /** 发布时间戳 */
    pubtimestamp: number;
    /** 纬度经度 */
    latlon: number[];
    /** 城市 */
    city: string;
    /** 警报 ID */
    alertId: string;
    /** 标题 */
    title: string;
    /** 地区编码 */
    adcode: string;
    /** 来源 */
    source: string;
    /** 位置 */
    location: string;
    /** 请求状态 */
    request_status: string;
}
