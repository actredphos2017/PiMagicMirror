
import {defineStore} from "pinia"
import {routeExternalEvent} from "../utils/event_router.ts";
import {ExternalEvent} from "../models/event.ts";

export const useControlStatusStore = defineStore({
    id: "controlStatus",
    state: () => ({
        panelDisplay: false
    })
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