import {ExternalEvent} from "../models/event.ts";
import {useAsyncConnectionStore, useCurrentProfileStore, useWeatherStore} from "../plugins/store.ts";
import {UserProfile} from "../models/custom.ts";
import {Comprehensive} from "../models/caiyunapi/comprehensive.ts";
import {AnswerContent, AskContent} from "../models/assistant.ts";

type EventRouter = { [eventName: string]: ((data: any) => void) }

interface WeatherUpdateResult {
    available: boolean,
    result: number | Comprehensive
}

const eventRouter: EventRouter = {
    ENVIRONMENT_ACTIVE() {
        useCurrentProfileStore().updateEnvironment(true)
    },
    ENVIRONMENT_SILENT() {
        useCurrentProfileStore().updateEnvironment(false)
    },
    FACE_ENTER(data: UserProfile) {
        useCurrentProfileStore().updateProfile(data)
    },
    FACE_LEAVE() {
        useCurrentProfileStore().updateProfile(undefined)
    },
    ASSISTANT_BEGIN() {
        useCurrentProfileStore().assistant.active = true
        useCurrentProfileStore().assistant.expression = "normal"
    },
    ASSISTANT_ASK(data: AskContent) {
        useCurrentProfileStore().assistant.active = true
        useCurrentProfileStore().putAsk(data)
        if (data.end)
            useCurrentProfileStore().assistant.expression = "thinking"
    },
    ASSISTANT_ANSWER(data: AnswerContent) {
        useCurrentProfileStore().assistant.active = true
        useCurrentProfileStore().putAnswer(data)
        useCurrentProfileStore().assistant.expression = "talking"
    },
    ASSISTANT_WAITING() {
        useCurrentProfileStore().assistant.expression = "waiting"
    },
    ASSISTANT_CLOSE() {
        useCurrentProfileStore().assistant.active = false
        useCurrentProfileStore().clearQA()
    },
    WEATHER_UPDATE(data: WeatherUpdateResult) {
        if (data.available) {
            console.log("Weather Update!", data)
            useWeatherStore().update(data.result as Comprehensive)
        } else {
            console.error(`Weather Update Failed With Status Code: ${data.result}`)
        }
    },
}

export function routeExternalEvent(event: ExternalEvent) {
    console.log("Receive Event:", event.event)
    const fun = eventRouter[event.event];
    if (!fun) return;
    fun(event.data);
}

let eventQueue: ExternalEvent[] = [];

let pollingInterval: NodeJS.Timeout | undefined = undefined

export function sendExternalEvent(event?: ExternalEvent) {
    const asyncConnection = useAsyncConnectionStore();
    if (asyncConnection.websocket?.readyState === 1) {
        while (eventQueue.length > 0) {
            console.log("Send Event(From Queue):", eventQueue[0].event)
            asyncConnection.websocket.send(JSON.stringify(eventQueue[0]))
            eventQueue = eventQueue.slice(1)
        }
        if (event) {
            console.log("Send Event:", event.event)
            asyncConnection.websocket.send(JSON.stringify(event))
        }
    } else {
        if (event) eventQueue.push(event)
        if (!pollingInterval) {
            pollingInterval = setInterval(() => sendExternalEvent(), 5000);
        }
    }
}
