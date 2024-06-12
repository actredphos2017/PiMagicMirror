import {defineStore} from "pinia"
import {routeExternalEvent, sendExternalEvent} from "../utils/eventbus.ts";
import {BluetoothAdvertiseInfo, ExternalEvent} from "../models/event.ts";
import {UserProfile} from "../models/custom.ts";
import {Comprehensive} from "../models/caiyunapi/comprehensive.ts";
import {AnswerContent, AskContent, AssistantExpression, QASession} from "../models/assistant.ts";

export const useCurrentProfileStore = defineStore({
    id: "currentProfile",
    state: () => ({
        environment: {
            active: false,
            profile: undefined as undefined | UserProfile,
        },
        assistant: {
            active: false,
            qaQueue: [] as QASession[],
            expression: "normal" as AssistantExpression,
            volume: [0, 0, 0, 0, 0, 0, 0, 0] as [number, number, number, number, number, number, number, number]
        },
        device: {
            bluetooth: {
                advertiseInfo: undefined as undefined | BluetoothAdvertiseInfo
            }
        }
    }),
    actions: {
        updateProfile(profile: UserProfile | undefined) {
            this.environment.profile = profile
        },
        updateEnvironment(displayable: boolean) {
            this.environment.active = displayable
        },
        updateBluetoothAdvertiseInfo(advertiseInfo: BluetoothAdvertiseInfo) {
            this.device.bluetooth.advertiseInfo = advertiseInfo
        },
        putAsk(ask: AskContent) {
            if (this.assistant.qaQueue.length == 0 || this.assistant.qaQueue[this.assistant.qaQueue.length - 1].ask.end) {
                this.assistant.qaQueue.push({ask});
            } else {
                this.assistant.qaQueue[this.assistant.qaQueue.length - 1].ask = ask;
            }
        },
        putAnswer(answer: AnswerContent) {
            if (this.assistant.qaQueue.length > 0)
                this.assistant.qaQueue[this.assistant.qaQueue.length - 1].answer = answer;
        },
        clearQA() {
            this.assistant.qaQueue = []
        },
        startListen() {
            this.assistant.qaQueue.push({
                ask: {
                    content: "",
                    end: false
                }
            })
        }
    },
    getters: {
        mainPanelDisplay(): boolean {
            return this.environment.active && !this.assistant.active
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