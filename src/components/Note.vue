<script setup lang="ts">

import {useCurrentProfileStore} from "../plugins/store.ts";
import {computed} from "vue";
import {Notes} from "../models/custom.ts";


const latest_5_notes = computed<Notes>(() => {
  const current_note = useCurrentProfileStore().environment.profile?.setting.note ?? {
    notes: [
      {
        create_time: Date.now(),
        content: "创建你的记事"
      }
    ]
  };
  return current_note.notes.length > 5 ? {notes: current_note.notes.slice(0, 5)} : current_note;
});

</script>

<template>
  <div
      style="display: flex; height: 100%; gap: 8px; flex-direction: column; justify-content: space-between; align-items: center">
    <div style="font-size: x-large; align-self: start">
      我的记事
    </div>
    <div style="display: flex; width: 100%; flex-direction: column; gap: 8px; align-items: center">
      <div
          v-for="note in latest_5_notes.notes"
          style="display: flex; width: 100%; justify-content: space-between"
      >
        <div>
          {{ note.content }}
        </div>
        <div style="align-self: end">
          {{ new Date(note.create_time).toDateString() }}
        </div>
      </div>
    </div>
    <div/>
  </div>
</template>

<style scoped>

</style>