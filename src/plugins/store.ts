import {defineStore} from "pinia"
import {routeExternalEvent, sendExternalEvent} from "../utils/eventbus.ts";
import {ExternalEvent} from "../models/event.ts";
import {UserProfile} from "../models/custom.ts";
import {Comprehensive} from "../models/caiyunapi/comprehensive.ts";

export const useCurrentProfileStore = defineStore({
    id: "currentProfile",
    state: () => ({
        panelDisplay: false,
        profile: {
            create_date: "",
            faceid: "",
            nickname: "",
            setting: {
                compose_structure: {
                    left: [],
                    right: []
                }
            }
        } as UserProfile
    }),
    actions: {
        updateProfile(profile: UserProfile) {
            this.profile = profile
        },
        updateDisplayable(displayable: boolean) {
            this.panelDisplay = displayable
        }
    }
})


export const useAsyncConnectionStore = defineStore({
    id: "websocket",
    state: () => ({
        websocket: undefined as undefined | WebSocket
    }),
    actions: {
        connect() {
            this.websocket = new WebSocket("ws://localhost:8083")
            this.websocket.onopen = () => {
                console.log('Websocket Connected')
            }
            this.websocket.onmessage = (e) => {
                routeExternalEvent(JSON.parse(e.data) as ExternalEvent)
            }
            this.websocket.onclose = () => {
                console.log("Websocket Closed! Try Again After 1s")
                setTimeout(() => {
                    this.connect()
                }, 1000)
            }
        }
    }
})


export const useWeatherStore = defineStore({
    id: "weather",
    state: () => ({
        currentWeather: undefined as undefined | Comprehensive
    }),
    actions: {
        hintUpdate() {
            if (this.currentWeather && Date.now() < this.currentWeather.server_time * 1000 + 900000) {
                return;
            } else {
                sendExternalEvent({event: "VIEW_UPDATE_WEATHER"})
            }
        },
        update(comprehensive: Comprehensive) {
            this.currentWeather = comprehensive
        }
    }
})