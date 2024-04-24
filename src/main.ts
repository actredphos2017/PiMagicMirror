import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

import {createPinia} from "pinia"
import {useAsyncConnectionStore} from "./plugins/store.ts";
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';

const pinia = createPinia()

const app = createApp(App)
    .use(pinia)
    .use(VCalendar, {})

useAsyncConnectionStore().connect()

app.mount('#app')
