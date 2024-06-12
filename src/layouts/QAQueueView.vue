<script setup lang="ts">

import {computed, ref} from "vue";
import ThinkingPoints from "./ThinkingPoints.vue";
import {useCurrentProfileStore} from "../plugins/store.ts";

const currentProfile = useCurrentProfileStore();

const contentWrapper = ref<HTMLDivElement>();

const assistantQAQueue = computed(() => currentProfile.assistant.qaQueue);

</script>

<template>
  <div class="qa-queue-container">
    <div class="overflow-shade" />
    <div class="qa-queue-overflow">
      <div class="qa-queue-content-wrapper" ref="contentWrapper">
        <template v-for="qa in assistantQAQueue">
          <div class="ask-container">
            <ThinkingPoints v-if="!qa.ask.end"/>
            <template v-else>
              {{ qa.ask.content }}
            </template>
          </div>
          <div class="answer-container" v-if="qa.answer">
            {{ qa.answer.content }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>

.qa-queue-container {
  width: calc(100% - 200px);
  position: relative;
}

.overflow-shade {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 64px;
  background: linear-gradient(to bottom, #000000 0, rgba(0, 0, 0, 0) 100%);
}

.qa-queue-overflow {
  width: 100%;
  height: calc(100vh - 500px);
  overflow-y: hidden;
  display: flex;
  align-items: end;
}

.qa-queue-content-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  bottom: 0;
}

.ask-container {
  padding: 20px;
  align-self: end;
  background: rgba(0, 75, 136, 0.72);
  border-radius: 24px 24px 0 24px;
  font-size: xx-large;
}

.answer-container {
  padding: 20px;
  max-width: 400px;
  align-self: start;
  background: rgba(197, 71, 0, 0.3);
  border-radius: 24px 24px 24px 0;
}

</style>