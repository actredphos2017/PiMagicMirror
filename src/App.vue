<script setup lang="ts">

import DynamicComponent from "./layouts/DynamicComponent.vue";
import {Compose} from "./models/compose.ts";

const testStructure: Compose[] = [
  {id: 'clock'},
  {id: 'calendar'}
]

</script>

<template>
  <dynamic-component :structure="testStructure"/>
</template>

<style scoped>

</style>
