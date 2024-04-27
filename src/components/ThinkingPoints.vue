<script setup lang="ts">

import {computed, StyleValue} from "vue";
import {useCurrentProfileStore} from "../plugins/store.ts";


const currentProfile = useCurrentProfileStore();

function volumeFloatToScale(volumeFloat: number): StyleValue {
  return {
    height: `${volumeFloat}px`
  }
}

const volumeStyles = computed(() => currentProfile.assistant.volume.map(volumeFloatToScale));

</script>

<template>
  <div style="display: flex; gap: 20px; align-items: center">
    <div
        v-for="volumeStyle in volumeStyles"
        class="point"
        :style="volumeStyle"
    />
  </div>
</template>

<style scoped>

.point {
  width: 10px;
  border-radius: 5px;
  background: white;
  transition: all 0.2s;
  box-shadow: white 0 0 64px;
}

</style>