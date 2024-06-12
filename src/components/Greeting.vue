<script setup lang="ts">

import QRCode from 'qrcode';
import {computed, ref, watch} from "vue";
import {useCurrentProfileStore} from "../plugins/store.ts";

const info_qrcode = ref<HTMLCanvasElement>();

function greet(nickname?: string): string {
  const now = new Date();
  const hour = now.getHours();

  if (nickname) {
    if (hour >= 5 && hour < 12) {
      return `早上好，${nickname}！`;
    } else if (hour >= 12 && hour < 18) {
      return `下午好，${nickname}！`;
    } else if (hour >= 18 && hour < 24) {
      return `晚上好，${nickname}！`;
    } else {
      return `夜深了，${nickname}，注意休息哦！`;
    }
  } else {
    if (hour >= 5 && hour < 12) {
      return "早上好！";
    } else if (hour >= 12 && hour < 18) {
      return "下午好！";
    } else if (hour >= 18 && hour < 24) {
      return "晚上好！";
    } else {
      return "夜深了，注意休息哦！";
    }
  }
}

const bluetoothAdvertiseInfo = computed(() => useCurrentProfileStore().device.bluetooth.advertiseInfo);

const greetString = computed(() => {
  return greet(useCurrentProfileStore().environment.profile?.nickname)
})

watch([info_qrcode, bluetoothAdvertiseInfo], () => {
  console.log(bluetoothAdvertiseInfo.value)
  if (info_qrcode.value && bluetoothAdvertiseInfo.value) {
    QRCode.toCanvas(info_qrcode.value, JSON.stringify(bluetoothAdvertiseInfo.value), {
      color: {
        dark: "#fff",
        light: "#000",
      },
      width: 160
    })
  }
}, {immediate: true});

</script>

<template>
<div style="display: flex; width: 100%; height: 100%; flex-direction: column; align-items: center; justify-content: space-around">
  <div style="font-weight: bold; font-size: larger">
    {{ greetString }}
  </div>
  <canvas ref="info_qrcode"/>
  <div>
    使用 PiMagicMirror APP
  </div>
  <div>
    扫码连接到此魔镜
  </div>
</div>
</template>

<style scoped>

</style>