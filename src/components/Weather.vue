<script setup lang="ts">

import {computed, ref, watch} from "vue";
import {useCurrentProfileStore, useWeatherStore} from "../plugins/store.ts";
import {parseWeatherIcon, parseWeatherName} from "../utils/response_parser.ts";
import {delay, formatDate, getDailyInstance, getFriendlyDateString} from "../utils/utils.ts";

let switcher: NodeJS.Timeout | undefined = undefined;

const totalPage = 2;
let currentPage = 0;

const pagesStatus = ref([true, false]);

const page0 = computed(() => pagesStatus.value[0] ? "100%" : "0");
const page1 = computed(() => pagesStatus.value[1] ? "100%" : "0");

async function switchInfoDisplay() {
  currentPage = (currentPage + 1) % totalPage;
  pagesStatus.value = pagesStatus.value.map(() => false);
  await delay(500);
  pagesStatus.value[currentPage] = true;
}

watch(() => useCurrentProfileStore().mainPanelDisplay, v => {
  if (v) {
    useWeatherStore().hintUpdate();
    if (switcher == undefined) switcher = setInterval(switchInfoDisplay, 4000);
  } else {
    clearInterval(switcher);
    switcher = undefined;
  }
}, {immediate: true});

const weatherInfo = computed(() => useWeatherStore().currentWeather);

const weatherIconHref = computed(() => parseWeatherIcon(weatherInfo.value?.result.realtime.skycon))

const weatherName = computed(() => parseWeatherName(weatherInfo.value?.result.realtime.skycon));

const realtimeTemperature = computed(() => {
  if (weatherInfo.value)
    return Math.round(weatherInfo.value!.result.realtime.temperature * 10) / 10
  return undefined
});

const region = computed(() => weatherInfo.value?.result.alert.adcodes.map(e => e.name).join(" "))

</script>

<template>
  <div v-if="weatherInfo" class="weather-card-container">
    <div style="display: flex; flex-direction: column; align-items: center;">
      <div class="small-content-font">
        {{ region }}
      </div>
      <div class="mini-content-font">
        {{ formatDate(weatherInfo.server_time) }} 更新
      </div>
    </div>
    <div style="display: flex; gap: 12px; align-items: center">
      <img :src="weatherIconHref" :alt="weatherName" style="width: 64px"/>
      <div>
        <div class="secondary-content-font">{{ realtimeTemperature }}℃</div>
        <div class="small-content-font">{{ weatherName }}</div>
      </div>
    </div>
    <div style="height: 120px; width: 100%; position: relative;">
      <div class="page page-0" style="display: flex; align-items: center; justify-content: space-around">
        <div
            v-for="dailyWeather in getDailyInstance(weatherInfo.result.daily)"

            style="display: flex; height: 100%; flex-direction: column; justify-content: center; align-items: center; gap: 6px"
        >
          <img
              :src="parseWeatherIcon(dailyWeather.skycon)"
              :alt="parseWeatherName(dailyWeather.skycon)"
              style="width: 32px"
          />
          <div>
            {{ Math.floor(dailyWeather.temperature!.min) }}~{{ Math.floor(dailyWeather.temperature!.max) + 1 }} ℃
          </div>
          <div>
            {{ getFriendlyDateString(dailyWeather.date) }}
          </div>
        </div>
      </div>
      <div class="page page-1" style="display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 4px">
        <div class="small-content-font">
          {{ weatherInfo.result.hourly.description }}
        </div>
        <div class="small-content-font">
          {{ weatherInfo.result.minutely.description }}
        </div>
      </div>
    </div>
  </div>
  <div v-else class="weather-card-container">
    正在获取天气信息……
  </div>
</template>

<style scoped>

.weather-card-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.page {
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all 500ms;
}

.page-0 {
  opacity: v-bind(page0);
}

.page-1 {
  opacity: v-bind(page1);
}

</style>