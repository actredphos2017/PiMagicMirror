import {ExternalEvent} from "../models/event.ts";

type EventRouter = { [eventName: string]: ((data: any) => void) }

const eventRouter: EventRouter = {
    FACE_ENTER(data) {
        console.log(data)
    },
    FACE_LEAVE() {

    },
    ASSISTANT_BEGIN() {

    },
    ASSISTANT_ASK() {

    },
    ASSISTANT_ANSWER() {

    },
    ASSISTANT_CLOSE() {

    },
}

export function routeExternalEvent(event: ExternalEvent) {
    const fun = eventRouter[event.event];
    if (!fun) return;
    fun(event.data);
}