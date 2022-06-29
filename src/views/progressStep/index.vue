<script setup lang="ts">
import { computed, ref } from 'vue'

const stepIndex = ref(1)

const count = ref(4)

function handleNextClick() {
  stepIndex.value = stepIndex.value + 1
  if (stepIndex.value > count.value)
    stepIndex.value = count.value
}

function handlePrevClick() {
  stepIndex.value = stepIndex.value - 1
  if (stepIndex.value < 1)
    stepIndex.value = 1
}

const lineWidth = computed(() => {
  return `${(stepIndex.value - 1) / (count.value - 1) * 100}%`
})
</script>

<template>
  <div class="container">
    <div class="progress-container">
      <div id="progress" class="progress" :style="{ width: lineWidth }" />
      <div v-for="(item, index) in count" :key="index" class="circle" :class="{ active: stepIndex > index }">
        {{ item }}
      </div>
    </div>
    <button class="btn" :disabled="stepIndex === 1" @click="handlePrevClick">
      Prev
    </button>
    <button class="btn" :disabled="stepIndex === count" @click="handleNextClick">
      Next
    </button>
  </div>
</template>

<style scoped lang="scss">
$border-empty: #e0e0e0;
$border-fill: #3498db;

@mixin line {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: -1;
  height: 4px;
  width: 100%;
  transition: 0.4s ease;
}

.container {
  text-align: center;

  .progress-container {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    max-width: 100%;
    width: 350px;

    &::before {
      content: '';
      @include line;
      background-color: $border-empty;
    }

    .progress {
      @include line;
      width: 0%;
      background-color: $border-fill;
    }

    .circle {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      border: 3px solid $border-empty;
      background-color: #fff;
      color: #999;
      border-radius: 50%;
    }

    .circle.active {
      border-color: $border-fill;
    }
  }

  .btn {
    background-color: $border-fill;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    padding: 8px 30px;
    margin: 5px;
    font-size: 14px;
    font-family: inherit;

    &:active {
      transform: scale(0.98);
    }

    &:focus {
      outline: 0;
    }

    &:disabled {
      background-color: $border-empty;
      cursor: not-allowed;
    }
  }
}
</style>
