<script setup lang="ts">

import {Compose, toComposeComponents} from "../models/compose.ts";
import {computed} from "vue";

interface Props {
  structure: Compose[]
}

const props = defineProps<Props>();
const composes = computed(() => toComposeComponents(props.structure));

</script>

<template>
  <div class="column-container">
    <div
        class="compose-wrapper"
        v-for="compose in composes"
        :key="compose.id"
    >
      <component
          :is="compose.component"
          v-bind="compose.params"
      />
    </div>
  </div>
</template>

<style scoped>

.column-container {
  display: flex;
  flex-direction: column;
  gap: 12px
}

.compose-wrapper {
  width: 400px;
  height: 200px;
  padding: 12px;
  border: #5b5b5b 2px solid;
  border-radius: 12px;
  box-shadow: #4f4f4f 0 0 12px;
}

</style>