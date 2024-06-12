<script setup lang="ts">

import {computed} from "vue";
import {useCurrentProfileStore} from "../plugins/store.ts";

const expression = computed(() => useCurrentProfileStore().assistant.expression)

</script>

<template>
  <div class="face-container">
    <div class="face-portion-wrapper">
      <div class="eyes" :class="`${expression}-eyes`"/>
    </div>
    <div class="face-portion-wrapper">
      <div class="mouth" :class="`${expression}-mouth`"/>
    </div>
    <div class="face-portion-wrapper-popper">
      <div class="popper" :class="`${expression}-popper`"/>
    </div>
  </div>
</template>

<style>

.face-container {
  width: 400px;
  height: 200px;
  position: relative;
  text-shadow: white 0 0 64px;
  color: white;
  animation: sway 8s infinite alternate ease-in-out;
  transform-origin: center;
}

@keyframes sway {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  10% {
    transform: translate(5px, -3px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 5px) rotate(1deg);
  }
  30% {
    transform: translate(-8px, 3px) rotate(-2deg);
  }
  40% {
    transform: translate(5px, -8px) rotate(2deg);
  }
  50% {
    transform: translate(0, 0) rotate(0deg);
  }
  60% {
    transform: translate(3px, -5px) rotate(1deg);
  }
  70% {
    transform: translate(-5px, 3px) rotate(-1deg);
  }
  80% {
    transform: translate(8px, 5px) rotate(2deg);
  }
  90% {
    transform: translate(-3px, -3px) rotate(0deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}

.face-portion-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center
}

.face-portion-wrapper-popper {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
}


.eyes::after {
  font-size: 200px;
  font-weight: bold;
  content: "● ●";
}

.mouth::after {
  font-size: 200px;
  font-weight: bold;
  content: " ";
}

.normal-eyes::after {
  animation: normal-eyes-animation 5s infinite forwards;
}

.thinking-eyes::after {
  content: "= ="
}

.talking-mouth {
  transform: translateY(20px) scale(0.8);
}

.talking-mouth::after {
  animation: talking-mouth-animation 3s infinite forwards;
}

.thinking-mouth {
  transform: translateY(60px) scale(0.6);
}

.thinking-mouth::after {
  content: "⋏"
}

.waiting-mouth {
  transform: translateY(60px) scale(0.6);
}

.waiting-mouth::after {
  content: "ω"
}

.waiting-eyes::after {
  content: "= =";
}

.popper {
  transform-origin: left;
  transform: translate(380px, -80px) scale(0.6);
}

.popper::after {
  font-size: 200px;
  font-weight: bold;
  content: " ";
}

.thinking-popper::after {
  animation: thinking-popper-animation 3s infinite forwards;
}

@keyframes thinking-popper-animation {
  0% {
    content: " ";
  }
  25% {
    content: ".";
  }
  50% {
    content: "..";
  }
  75% {
    content: "...";
  }
  100% {
    content: " ";
  }
}

@keyframes normal-eyes-animation {
  0% {
    content: "● ●"
  }
  49% {
    content: "● ●"
  }
  50% {
    content: "> <"
  }
  51% {
    content: "> <"
  }
  52% {
    content: "● ●"
  }
  73% {
    content: "● ●"
  }
  92% {
    content: "● ●"
  }
  93% {
    content: "> <"
  }
  94% {
    content: "> <"
  }
  95% {
    content: "● ●"
  }
  97% {
    content: "● ●"
  }
  98% {
    content: "> <"
  }
  99% {
    content: "> <"
  }
  100% {
    content: "● ●"
  }
}

@keyframes talking-mouth-animation {
  0% {
    content: "‿"
  }
  25% {
    content: "ꇴ"
  }
  50% {
    content: "‿"
  }
  75% {
    content: "ꇴ"
  }
  100% {
    content: "‿"
  }
}

</style>