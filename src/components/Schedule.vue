<script setup lang="ts">

import {computed} from "vue";
import {ScheduleList} from "../models/custom.ts";
import {useCurrentProfileStore} from "../plugins/store.ts";

const latest5FutureSchedules = computed<ScheduleList>(() => {
  const scheduleList = useCurrentProfileStore().environment.profile?.setting.schedule_list ?? {
    schedules: [
      {
        date: Date.now(),
        name: "开会",
        content: "创建你的记事"
      },
    ]
  };
  const futureSchedules: ScheduleList = {
    schedules: scheduleList.schedules.filter(e => e.date >= Date.now())
  }
  return futureSchedules.schedules.length > 5 ? {schedules: futureSchedules.schedules.slice(0, 5)} : futureSchedules;
});

</script>

<template>
  <div
      style="display: flex; height: 100%; gap: 8px; flex-direction: column; justify-content: space-between; align-items: center; overflow: hidden">
    <div style="font-size: x-large; align-self: start">
      未来日程
    </div>
    <div style="display: flex; width: 100%; flex-direction: column; gap: 8px; align-items: center">
      <div
          v-for="schedule in latest5FutureSchedules.schedules.map((item, index) => ({item, index}))"
          style="display: flex; width: 100%; justify-content: space-between"
      >
        <div style="display: flex; align-items: center; height: 100%; gap: 16px">
          <div style="font-size: xx-large; font-style: italic; font-weight: bold">
            {{ schedule.index + 1 }}
          </div>
          <div style="display: flex; flex-direction: column; align-items: start">
            <div style="font-size: large">
              {{ schedule.item.name }}
            </div>
            <div style="font-size: medium">
              {{ schedule.item.content }}
            </div>
          </div>
        </div>
        <div style="align-self: end">
          {{ new Date(schedule.item.date).toDateString() }}
        </div>
      </div>
    </div>
    <div/>
  </div>
</template>

<style scoped>

</style>