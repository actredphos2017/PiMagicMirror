<script setup lang="ts">
import {computed} from "vue";
import {useCurrentProfileStore} from "../plugins/store.ts";

const currentProfile = useCurrentProfileStore();
const assistantPanelDisplayOpacity = computed(() => currentProfile.assistant.active)

</script>

<template>
  <div class="assistant-panel-container">
    Hello!
  </div>
</template>

<style scoped>

.assistant-panel-container {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 64px 0;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.5s;
  opacity: v-bind(assistantPanelDisplayOpacity);
}

</style>