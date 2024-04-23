import {ExternalEvent} from "../models/event.ts";
import {useAsyncConnectionStore, useCurrentProfileStore, useWeatherStore} from "../plugins/store.ts";
import {UserProfile} from "../models/custom.ts";
import {Comprehensive} from "../models/caiyunapi/comprehensive.ts";

type EventRouter = { [eventName: string]: ((data: any) => void) }

interface WeatherUpdateResult {
    available: boolean,
    result: number | Comprehensive
}

const eventRouter: EventRouter = {
    FACE_ENTER(data) {
        console.log(data)
        useCurrentProfileStore().updateProfile(data as UserProfile)
        useCurrentProfileStore().updateDisplayable(true)
    },
    FACE_LEAVE() {
        useCurrentProfileStore().updateDisplayable(false)
    },
    ASSISTANT_BEGIN() {

    },
    ASSISTANT_ASK() {

    },
    ASSISTANT_ANSWER() {

    },
    ASSISTANT_CLOSE() {

    },
    WEATHER_UPDATE(data: WeatherUpdateResult) {
        if (data.available) {
            console.log("Weather Update!", data)
            useWeatherStore().update(data.result as Comprehensive)
        } else {
            console.error(`Weather Update Failed With Status Code: ${data.result}`)
        }
    }
}

export function routeExternalEvent(event: ExternalEvent) {
    const fun = eventRouter[event.event];
    if (!fun) return;
    fun(event.data);
}

export function sendExternalEvent(event: ExternalEvent) {
    useAsyncConnectionStore().websocket?.send(JSON.stringify(event))
}