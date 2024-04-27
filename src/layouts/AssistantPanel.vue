<script setup lang="ts">
import {computed} from "vue";
import {useCurrentProfileStore} from "../plugins/store.ts";
import AssistantFace from "../components/AssistantFace.vue";
import QAQueueView from "../components/QAQueueView.vue";

const currentProfile = useCurrentProfileStore();
const assistantActive = computed(() => currentProfile.assistant.active)
const assistantPanelDisplayOpacity = computed(() => assistantActive.value ? "100%" : "0")

const rippleAnimationClass = computed(() => assistantActive.value ? ["ripple-with-animation"] : [])

</script>

<template>
  <div class="assistant-panel-container">
    <div class="qa-queue-wrapper">
      <QAQueueView/>
    </div>
    <!--  Animation  -->
    <div class="assistant-face-container">
      <div class="ripple-default" :class="rippleAnimationClass"/>
    </div>
    <div class="assistant-face-container">
      <AssistantFace/>
    </div>
  </div>
</template>

<style scoped>

.qa-queue-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 100px;
}

.assistant-face-container {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  align-items: start;
  padding-top: 240px;
  justify-content: center;
  transform: translateY(-100px);
}

.assistant-panel-container {
  width: 100%;
  height: calc(100% - 128px);
  padding: 64px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  transition: opacity 0.5s;
  opacity: v-bind(assistantPanelDisplayOpacity);
}

.ripple-default {
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

.ripple-with-animation {
  animation: ripple-animation 2s linear;
  animation-iteration-count: 1;

}

@keyframes ripple-animation {
  0% {
    transform: scale(0);
    opacity: 1;
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.5) 80%, rgba(255, 255, 255, 0) 100%);
  }
  100% {
    transform: scale(10);
    opacity: 0;
    background: radial-gradient(circle at center, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0.5) 80%, rgba(255, 255, 255, 0) 100%);
  }
}

</style>