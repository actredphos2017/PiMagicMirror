<script setup lang="ts">

import DynamicComponent from "./layouts/DynamicComponent.vue";
import {useCurrentProfileStore} from "./plugins/store.ts";
import {computed} from "vue";

const currentProfile = useCurrentProfileStore();

const composeStructure = computed(() => currentProfile.profile.setting.compose_structure)

const displayOpacity = computed(() => currentProfile.panelDisplay ? "100%" : "0")

</script>

<template>
  <div class="main-container">
    <div class="compose-area-container">
      <dynamic-component :structure="composeStructure.left"/>
      <dynamic-component :structure="composeStructure.right"/>
    </div>
    <div class="notify-area-container">
      Hello World
    </div>
  </div>
</template>

<style scoped>

.main-container {
  width: 100%;
  height: 100vh;
  display: flex;
  padding: 64px 0;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.5s;
  opacity: v-bind(displayOpacity);
}

.compose-area-container {
  width: calc(100% - 128px);
  margin: 0 64px;
  display: flex;
  justify-content: space-between;
}

.notify-area-container {
  width: calc(100% - 128px);
  margin: 0 64px;
}

</style>
