<script setup lang="ts">

import {onMounted} from "vue";
import {useWeatherStore} from "../plugins/store.ts";

onMounted(() => {
  useWeatherStore().hintUpdate()
})

</script>

<template>
  <div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center">
    <div style="display: flex; gap: 12px; align-items: center">
      <div>

      </div>
    </div>
  </div>
</template>

<style scoped>

</style>