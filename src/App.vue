<script setup lang="ts">
import MainPanel from "./layouts/MainPanel.vue";
import AssistantPanel from "./layouts/AssistantPanel.vue";

// function startAssistant() {
//   sendExternalEvent({event: "VIEW_START_ASSISTANT"})
// }

</script>

<template>
  <div class="panel-container">
    <MainPanel style="position: absolute"/>
    <AssistantPanel style="position: absolute"/>
  </div>
</template>

<style scoped>

.panel-container {
  width: 100%;
  height: 100vh;
  position: relative;
}

</style>
