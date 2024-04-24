import {Component} from "vue";

import unknownComponent from "../components/Unknown.vue";

import clock from "../components/Clock.vue";
import schedule from "../components/Schedule.vue";
import note from "../components/Note.vue";
import weather from "../components/Weather.vue";
import calendar from "../components/Calendar.vue";

export const registeredCompose: ComposeRegister = {
    clock, schedule, note, weather, calendar
};

export interface Compose {
    id: string,
    params?: { [key: string]: any }
}

export type ComposeRegister = { [key: string]: Component }

export interface ComposeComponent {
    id: string,
    component: Component,
    params: { [key: string]: any }
}

export const toComposeComponent = (compose: Compose) => ({
    id: compose.id,
    component: registeredCompose[compose.id] ?? unknownComponent,
    params: compose.params ?? {}
} as ComposeComponent);

export const toComposeComponents = (composes: Compose[]) => composes.map(toComposeComponent);

export const defaultLeft: Compose[] = [
    {
        id: "clock"
    },
    {
        id: "calendar"
    }
]
export const defaultRight: Compose[] = [
    {
        id: "weather"
    }
]