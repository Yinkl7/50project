<script setup lang="ts">
import { ref } from 'vue'

const isClose = ref(false)

function handleClose() {
  isClose.value = !isClose.value
}
</script>

<template>
  <div class="rotate-navigation">
    <div class="container" :class="{ 'show-nav': isClose }">
      <div class="circle-container">
        <div class="circle">
          <button class="close" @click="handleClose">
            <i class="iconfont">&#xe748;</i>
          </button>
          <button class="open" @click="handleClose">
            <i class="iconfont">&#xe747;</i>
          </button>
        </div>
      </div>

      <div class="content">
        <h1>Amazing Article</h1>
      </div>
    </div>

    <nav>
      <ul>
        <li><a href="#"> Home</a></li>
        <li><a href="#"> About</a></li>
        <li><a href="#"> Contact</a></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.rotate-navigation {
  background-color: #333;
}

.container {
  background-color: #fff;
  transform-origin: top left;
  transition: transform 0.5s linear;
  width: 100vw;
  min-height: 100vh;
  padding: 50px;

  .circle-container {
    position: fixed;
    left: -100px;
    top: -100px;
    // left: 0;
    // top: 0;

    .circle {
      background-color: #ff7979;
      height: 200px;
      width: 200px;
      border-radius: 50%;
      position: relative;
      transition: transform 0.5s linear;
    }
  }
}

.container.show-nav {
  transform: rotate(-20deg);
}

.container.show-nav .circle {
  transform: rotate(-70deg);
}

.circle button {
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100px;
  background: transparent;
  border: 0;
  font-size: 26px;
  color: #fff;
}

.circle button i {
  font-size: 26px;
}

.circle button:focus {
  outline: none;
}

.circle button.open {
  left: 60%;
}

.circle button.close {
  top: 60%;
  transform: rotate(90deg);
  transform-origin: top left;
}

.container.show-nav+nav li {
  transform: translateX(0);
  transition-delay: 0.3s;
}

nav {
  position: fixed;
  bottom: 40px;
  left: 0;
  z-index: 100;

  ul {
    list-style-type: none;
    padding-left: 30px;

    li {
      text-transform: uppercase;
      color: #fff;
      margin: 40px 0;
      transform: translateX(-100%);
      transition: transform 0.4s ease-in;
    }
  }

  a {
    color: #fafafa;
    text-decoration: none;
    transition: all 0.5s;

    &:hover {
      color: #FF7979;
      font-weight: bold;
    }
  }
}

nav ul li+li {
  margin-left: 15px;
  transform: translateX(-150%);
}

nav ul li+li+li {
  margin-left: 30px;
  transform: translateX(-200%);
}
</style>
