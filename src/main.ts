import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import {createPinia} from "pinia"
import {useAsyncConnectionStore} from "./plugins/store.ts";

const pinia = createPinia()

const app = createApp(App)

app.use(pinia)

useAsyncConnectionStore().connect()

app.mount('#app')
