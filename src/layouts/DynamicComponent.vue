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
  <div style="display: flex; flex-direction: column; gap: 12px">
    <component
        v-for="compose in composes"
        :key="compose.id"

        :is="compose.component"
        v-bind="compose.params"
    />
  </div>
</template>

<style scoped>

</style>