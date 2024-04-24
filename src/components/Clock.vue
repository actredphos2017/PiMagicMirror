<script setup lang="ts">

import {computed, onMounted, onUnmounted, ref} from "vue";

interface Props {
  use24hours: boolean
}

const props = withDefaults(defineProps<Props>(), {
  use24hours: false
});

const use24hours = computed(() => props.use24hours);

const currentTime = ref(new Date());

function fixNumberView(numberView: any, length: number = 2): string {
  numberView = numberView.toString();
  while (numberView.length < length) {
    numberView = "0" + numberView;
  }
  return numberView;
}

const hours = computed(() => {
  if (use24hours.value) {
    return fixNumberView(currentTime.value.getHours());
  } else {
    return fixNumberView(currentTime.value.getHours() % 12);
  }
});

const isPM = computed(() => currentTime.value.getHours() >= 12);

const minutes = computed(() => fixNumberView(currentTime.value.getMinutes()));
const seconds = computed(() => fixNumberView(currentTime.value.getSeconds()));

const dateView = computed(() => {
  return `${currentTime.value.getFullYear()}年${currentTime.value.getMonth()}月${currentTime.value.getDay()}日`
});

const weekdayView = computed(() => {
  switch (currentTime.value.getDay()) {
    case 0: return "星期天"
    case 1: return "星期一"
    case 2: return "星期二"
    case 3: return "星期三"
    case 4: return "星期四"
    case 5: return "星期五"
    case 6: return "星期六"
    default: return "星期天"
  }
})

let updateInternal: NodeJS.Timeout | null = null;

onMounted(() => {
  updateInternal = setInterval(() => {
    currentTime.value = new Date();
  }, 1000);
});

onUnmounted(() => {
  if (updateInternal) clearInterval(updateInternal);
});

</script>

<template>
  <div style="width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <div style="display: flex; gap: 8px; align-items: baseline">
      <div v-show="!use24hours">
        {{ isPM ? "下午" : "上午" }}
      </div>
      <div style="display: flex; gap: 6px; align-items: center">
        <div class="main-content-font">
          {{ hours }}
        </div>
        <div class="small-content-font">:</div>
        <div class="main-content-font">
          {{ minutes }}
        </div>
      </div>
      <div class="small-content-font">
        {{ seconds }}
      </div>
    </div>
    <div style="display: flex; gap: 2px">
      <div class="small-content-font">
        {{ dateView }}
      </div>
      <div class="small-content-font">
        {{ weekdayView }}
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>