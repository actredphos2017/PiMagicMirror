<script setup lang="ts">

import {VCalendarAttributes} from "../models/module_helper.ts";
import {ref} from "vue";

const attrs = ref<VCalendarAttributes>([
  {
    key: "today",
    content: "blue",
    dates: new Date()
  }
])

</script>

<template>
  <div style="width: 100%; height: 100%; display: flex;">
    <v-calendar
        is-dark
        expanded
        transparent
        borderless
        title-position="left"
        :attributes="attrs"
    />
  </div>
</template>

<style>

.vc-arrow, .vc-nav-item, .vc-title, .vc-nav-title, .vc-nav-arrow {
  background: transparent !important;
}

.vc-nav-item {
  color: white !important;
}

</style>