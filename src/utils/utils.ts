import {DailyData} from "../models/caiyunapi/daily.ts";

export function getTimeRoundToMinuteString(date: Date) {
    let h = date.getHours().toString();
    while (h.length < 2) {
        h = '0' + h;
    }
    let m = date.getMinutes().toString();
    while (m.length < 2) {
        m = '0' + m;
    }
    return `${h}:${m}`
}

export function formatDate(secondTimeMill: number | Date) {
    let date: Date;
    if (typeof secondTimeMill == "number") {
        date = new Date(secondTimeMill * 1000);
    } else {
        date = new Date(secondTimeMill);
    }
    const nowDate = new Date();

    if (
        date.getFullYear() == nowDate.getFullYear() &&
        date.getMonth() == nowDate.getMonth() &&
        date.getDate() == nowDate.getDate()
    ) {
        return `${date.getHours()}:${date.getMinutes()}`;
    }

    nowDate.setDate(nowDate.getDate() - 1);

    if (
        date.getFullYear() == nowDate.getFullYear() &&
        date.getMonth() == nowDate.getMonth() &&
        date.getDate() == nowDate.getDate()
    ) {
        return `昨天 ${getTimeRoundToMinuteString(date)}`;
    }

    return `${date.getMonth()}月${date.getDate()}日 ${getTimeRoundToMinuteString(date)}`;
}

export const delay = async (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const dayMapper = [
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六'
]

export function getFriendlyDateString(dateValue: string | Date | number) {
    const nowDate = new Date();
    const date = new Date(dateValue);

    if (
        date.getFullYear() == nowDate.getFullYear() &&
        date.getMonth() == nowDate.getMonth() &&
        date.getDate() == nowDate.getDate()
    ) {
        return '今天';
    }

    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);

    if (
        date.getFullYear() == yesterdayDate.getFullYear() &&
        date.getMonth() == yesterdayDate.getMonth() &&
        date.getDate() == yesterdayDate.getDate()
    ) {
        return '昨天';
    }

    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);

    if (
        date.getFullYear() == tomorrowDate.getFullYear() &&
        date.getMonth() == tomorrowDate.getMonth() &&
        date.getDate() == tomorrowDate.getDate()
    ) {
        return '明天';
    }

    return dayMapper[date.getDay()];
}

export interface DailyInstance {
    date: Date,
    aqi?: {
        max: {
            chn: number,
            usa: number
        },
        avg: {
            chn: number,
            usa: number
        },
        min: {
            chn: number,
            usa: number
        },
    },
    pm25?: {
        max: number,
        avg: number,
        min: number
    },
    astro?: {
        sunrise: {
            time: string
        },
        sunset: {
            time: string
        },
    },
    cloudrate?: {
        max: number,
        avg: number,
        min: number
    },
    dswrf?: {
        max: number,
        avg: number,
        min: number
    },
    humidity?: {
        max: number,
        avg: number,
        min: number
    },
    life_index?: {
        carWashing?: {
            index: string,
            desc: string,
        },
        coldRisk?: {
            index: string,
            desc: string,
        },
        comfort?: {
            index: string,
            desc: string,
        },
        dressing?: {
            index: string,
            desc: string,
        },
        ultraviolet?: {
            index: string,
            desc: string,
        },
    },
    precipitation?: {
        max: number,
        min: number,
        avg: number,
        probability: number
    },
    precipitation_08h_20h?: {
        max: number,
        min: number,
        avg: number,
        probability: number
    },
    precipitation_20h_32h?: {
        max: number,
        min: number,
        avg: number,
        probability: number
    },
    pressure?: {
        max: number,
        min: number,
        avg: number
    },
    skycon?: string,
    skycon_08h_20h?: string,
    skycon_20h_32h?: string,
    temperature?: {
        max: number,
        min: number,
        avg: number
    },
    temperature_08h_20h?: {
        max: number,
        min: number,
        avg: number
    },
    temperature_20h_32h?: {
        max: number,
        min: number,
        avg: number
    },
    visibility?: {
        max: number,
        min: number,
        avg: number
    },
    wind?: {
        max: {
            speed: number,
            direction: number,
        },
        min: {
            speed: number,
            direction: number,
        },
        avg: {
            speed: number,
            direction: number,
        }
    },
    wind_08h_20h?: {
        max: {
            speed: number,
            direction: number,
        },
        min: {
            speed: number,
            direction: number,
        },
        avg: {
            speed: number,
            direction: number,
        }
    },
    wind_20h_32h?: {
        max: {
            speed: number,
            direction: number,
        },
        min: {
            speed: number,
            direction: number,
        },
        avg: {
            speed: number,
            direction: number,
        }
    },
}

export function getDailyInstance(dailyData: DailyData): DailyInstance[] {
    const tempRes = {} as { [key: string]: DailyInstance };
    dailyData.skycon.forEach(e => {
        tempRes[e.date] = {
            date: new Date(e.date),
            skycon: e.value
        }
    });

    dailyData.astro.forEach(e => {
        if (tempRes[e.date]) {
            tempRes[e.date].astro = e;
        }

    });

    dailyData.precipitation_08h_20h.forEach(e => {
        if (tempRes[e.date]) {
            tempRes[e.date].precipitation_08h_20h = e;
        }

    });

    dailyData.precipitation_20h_32h.forEach(e => {
        if (tempRes[e.date]) {
            tempRes[e.date].precipitation_20h_32h = e;
        }

    });

    dailyData.precipitation.forEach(e => {
        if (tempRes[e.date]) {
            tempRes[e.date].precipitation = e;
        }

    });

    dailyData.temperature.forEach(e => {
        if (tempRes[e.date]) {
            tempRes[e.date].temperature = e;
        }
    });

    dailyData.temperature_08h_20h.forEach(e => {
        if (tempRes[e.date]) {
            tempRes[e.date].temperature_08h_20h = e;
        }
    });

    dailyData.temperature_20h_32h.forEach(e => {
        if (tempRes[e.date]) {
            tempRes[e.date].temperature_20h_32h = e;
        }
    });

    dailyData.wind.forEach(e => {
        if (tempRes[e.date]) {
            tempRes[e.date].wind = e;
        }
    });

    dailyData.wind_08h_20h.forEach(e => {
        if (tempRes[e.date]) {
            tempRes[e.date].wind_08h_20h = e;
        }
    });

    dailyData.wind_20h_32h.forEach(e => {
        if (tempRes[e.date]) {
            tempRes[e.date].wind_20h_32h = e;
        }
    });

    dailyData.humidity.forEach(e => {
        if (tempRes[e.date]) {
            tempRes[e.date].humidity = e;
        }
    });

    dailyData.cloudrate.forEach(e => {
        if (tempRes[e.date]) {
            tempRes[e.date].cloudrate = e;
        }
    });

    dailyData.pressure.forEach(e => {
        if (tempRes[e.date]) {
            tempRes[e.date].pressure = e;
        }
    });

    dailyData.visibility.forEach(e => {
        if (tempRes[e.date]) {
            tempRes[e.date].visibility = e;
        }
    });

    dailyData.dswrf.forEach(e => {
        if (tempRes[e.date]) {
            tempRes[e.date].dswrf = e;
        }
    });

    dailyData.air_quality.aqi.forEach(e => {
        if (tempRes[e.date]) {
            tempRes[e.date].aqi = e
        }
    });

    dailyData.air_quality.pm25.forEach(e => {
        if (tempRes[e.date]) {
            tempRes[e.date].pm25 = e
        }
    });

    dailyData.skycon_08h_20h.forEach(e => {
        if (tempRes[e.date]) {
            tempRes[e.date].skycon_08h_20h = e.value
        }
    });

    dailyData.skycon_20h_32h.forEach(e => {
        if (tempRes[e.date]) {
            tempRes[e.date].skycon_20h_32h = e.value
        }
    });

    dailyData.life_index.ultraviolet.forEach(e => {
        tempRes[e.date].life_index = {};
        if (tempRes[e.date].life_index) {
            tempRes[e.date].life_index!.ultraviolet = e;
        }
    });

    dailyData.life_index.carWashing.forEach(e => {
        tempRes[e.date].life_index = {};
        if (tempRes[e.date].life_index) {
            tempRes[e.date].life_index!.carWashing = e;
        }
    });

    dailyData.life_index.dressing.forEach(e => {
        tempRes[e.date].life_index = {};
        if (tempRes[e.date].life_index) {
            tempRes[e.date].life_index!.dressing = e;
        }
    });

    dailyData.life_index.comfort.forEach(e => {
        tempRes[e.date].life_index = {};
        if (tempRes[e.date].life_index) {
            tempRes[e.date].life_index!.comfort = e;
        }
    });

    dailyData.life_index.coldRisk.forEach(e => {
        tempRes[e.date].life_index = {};
        if (tempRes[e.date].life_index) {
            tempRes[e.date].life_index!.coldRisk = e;
        }
    });

    return Object.entries(tempRes).map(e => e[1]);
}