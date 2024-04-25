<script setup lang="ts">
import {defaultLeft, defaultRight} from "../models/compose.ts";
import {useCurrentProfileStore} from "../plugins/store.ts";
import {computed, onMounted} from "vue";
import {sendExternalEvent} from "../utils/eventbus.ts";
import DynamicComponent from "./DynamicComponent.vue";

const currentProfile = useCurrentProfileStore();

const composeStructure = computed(() => currentProfile.environment.profile?.setting.compose_structure)

const mainPanelDisplayOpacity = computed(() => currentProfile.mainPanelDisplay ? "100%" : "0");

onMounted(() => {
  sendExternalEvent({event: "VIEW_CHECK_ENVIRONMENT"});
});

</script>

<template>
  <div class="main-panel-container">
    <div class="compose-area-container">
      <dynamic-component :structure="composeStructure?.left ?? defaultLeft"/>
      <dynamic-component :structure="composeStructure?.right ?? defaultRight"/>
    </div>
    <div class="notify-area-container">
      Hello World
    </div>
  </div>
</template>

<style scoped>

.main-panel-container {
  width: 100%;
  height: calc(100% - 128px);
  padding: 64px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: opacity 0.5s;
  opacity: v-bind(mainPanelDisplayOpacity);
}

.compose-area-container {
  width: calc(100% - 128px);
  margin: 0 64px;

  display: flex;
  justify-content: space-between;
}

.notify-area-container {
  width: 100%;
}

</style>