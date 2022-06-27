<script setup lang="ts">
const imgList = [
  {
    url: '../../assets/expandCard/1.png',
    title: 'Explore the World',
  },
]
</script>

<template>
  <div class="container">
    <div v-for="item in imgList" :key="item.title" class="pannel" :style="{ backgroundImage: `url(${item.url})` }">
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
  width: 90vh;

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
