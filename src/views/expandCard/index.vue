<script setup lang="ts">
import { ref } from 'vue'

const imgList = [
  {
    url: require('../../assets/expandCard/1.png'),
    title: 'Explore the World',
  },
  {
    url: require('../../assets/expandCard/2.png'),
    title: 'Wild Forest',
  },
  {
    url: require('../../assets/expandCard/3.png'),
    title: 'Sunny Beach',
  },
  {
    url: require('../../assets/expandCard/4.png'),
    title: 'City on Winter',
  },
  {
    url: require('../../assets/expandCard/5.png'),
    title: 'Mountains-Cloud',
  },
]

const selecteIndex = ref(0)

function handleClick(index) {
  selecteIndex.value = index
}
</script>

<template>
  <div class="container">
    <div v-for="(item, index) in imgList" :key="item.title" class="pannel" :class="{ active: selecteIndex === index }"
      :style="{ backgroundImage: `url(${item.url})` }" @click="handleClick(index)">
      <h3>{{ item.title }}</h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media (max-width: 480px) {
  .container {
    width: 100vw;
  }

  .pannel:nth-of-type(4),
  .pannel:nth-of-type(5) {
    display: none;
  }
}

.container {
  display: flex;
  width: 90vw;

  .pannel {
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    // background-image: url('../../assets/expandCard/1.png');
    height: 80vh;
    color: #fff;
    border-radius: 50px;
    margin: 10px;
    flex: 0.5;
    transition: all 700ms ease-in;

    h3 {
      position: absolute;
      bottom: 20px;
      left: 20px;
      font-size: 24px;
      margin: 0;
      opacity: 0;
    }
  }

  .active {
    flex: 5;
  }
}

.pannel.active h3 {
  opacity: 1;
  transition: opacity 0.3s ease-in 0.4s;
}
</style>
