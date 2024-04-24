function ic(id: string) {
    return new URL(`../assets/weather_icons/${id}.png`, import.meta.url).href
}

export function parseWeatherIcon(weatherCode: string | undefined): string {
    switch (weatherCode) {
        case 'CLEAR_DAY':
            return ic('sunny_icon');
        case 'CLEAR_NIGHT':
            return ic('sunny_night_icon');
        case 'PARTLY_CLOUDY_DAY':
        case 'PARTLY_CLOUDY_NIGHT':
            return ic('cloudy_icon');
        case 'CLOUDY':
            return ic('overcoat_icon');
        case 'LIGHT_HAZE':
        case 'MODERATE_HAZE':
        case 'HEAVY_HAZE':
            return ic('haze_icon');
        case 'LIGHT_RAIN':
            return ic('small_rainy_icon');
        case 'MODERATE_RAIN':
            return ic('middle_rainy_icon');
        case 'HEAVY_RAIN':
            return ic('big_rainy_icon');
        case 'STORM_RAIN':
            return ic('thunder_rainy_icon');
        case 'FOG':
            return ic('foggy_icon');
        case 'LIGHT_SNOW':
            return ic('small_snowy_icon');
        case 'MODERATE_SNOW':
            return ic('middle_snowy_icon');
        case 'HEAVY_SNOW':
        case 'STORM_SNOW':
            return ic('big_snowy_icon');
        case 'DUST':
        case 'SAND':
            return ic('dust_icon');
        case 'WIND':
            return ic('wind_icon');
        default:
            return ic('sunny_icon');
    }
}

export function parseWeatherName(code: string | undefined): string {
    switch (code) {
        case 'CLEAR_DAY':
        case 'CLEAR_NIGHT':
            return '晴';
        case 'PARTLY_CLOUDY_DAY':
        case 'PARTLY_CLOUDY_NIGHT':
            return '多云';
        case 'CLOUDY':
            return '阴';
        case 'LIGHT_HAZE':
            return '轻度雾霾';
        case 'MODERATE_HAZE':
            return '中度雾霾';
        case 'HEAVY_HAZE':
            return '重度雾霾';
        case 'LIGHT_RAIN':
            return '小雨';
        case 'MODERATE_RAIN':
            return '中雨';
        case 'HEAVY_RAIN':
            return '大雨';
        case 'STORM_RAIN':
            return '暴雨';
        case 'FOG':
            return '雾';
        case 'LIGHT_SNOW':
            return '小雪';
        case 'MODERATE_SNOW':
            return '中雪';
        case 'HEAVY_SNOW':
            return '大雪';
        case 'STORM_SNOW':
            return '暴雪';
        case 'DUST':
            return '浮尘';
        case 'SAND':
            return '沙尘';
        case 'WIND':
            return '大风';
        default:
            return '未知天气';
    }
}