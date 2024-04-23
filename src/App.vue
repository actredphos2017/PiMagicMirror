<script setup lang="ts">

import DynamicComponent from "./layouts/DynamicComponent.vue";
import {Compose} from "./models/compose.ts";

const testStructure: Compose[] = [
  {id: 'clock'},
  {id: 'calendar'}
]

</script>

<template>
  <div class="main-container">
    <div class="compose-area-container">
      <dynamic-component :structure="testStructure"/>
      <dynamic-component :structure="testStructure"/>
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
