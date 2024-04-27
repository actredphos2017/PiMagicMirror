<script setup lang="ts">

import {computed, StyleValue} from "vue";
import {useCurrentProfileStore} from "../plugins/store.ts";
import {limitCurve} from "../utils/utils.ts";


const currentProfile = useCurrentProfileStore();

const limitCurveFun = limitCurve(40);

function volumeFloatToScale(volumeFloat: number): StyleValue {
  return {height: `${limitCurveFun(volumeFloat / 2000)}px`}
}

const volumeStyles = computed(() => currentProfile.assistant.volume.map(volumeFloatToScale));

</script>

<template>
  <div style="display: flex; gap: 6px; align-items: center; height: 40px">
    <div
        v-for="volumeStyle in volumeStyles"
        class="point"
        :style="volumeStyle"
    />
  </div>
</template>

<style scoped>

.point {
  width: 6px;
  border-radius: 3px;
  background: white;
  transition: all 0.2s;
  box-shadow: white 0 0 64px;
}

</style>