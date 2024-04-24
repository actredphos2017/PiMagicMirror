<script setup lang="ts">
import MainPanel from "./layouts/MainPanel.vue";
import AssistantPanel from "./layouts/AssistantPanel.vue";

</script>

<template>
  <MainPanel class="panel-container"/>
  <AssistantPanel class="panel-container"/>
</template>

<style scoped>

.panel-container {
  width: 100%;
  height: 100vh;
}

</style>
