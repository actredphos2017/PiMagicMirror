import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'


import * as path from "path";
import electron from "vite-plugin-electron";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        electron({
          entry: 'electron/main.ts',
        }),
    ],
})
