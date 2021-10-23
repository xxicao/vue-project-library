<template>
  <div class="loading" v-show="show" :style="{background: bgColor}">
    <img :src="icon" alt="loading">
    <div>{{text}}</div>
  </div>
</template>
<script>
import icon from './loading_icon.png'
export default {
  data(){
    return {
      show: false,
      text: '加载中...',
      bgColor: '#42b983',
      icon
    }
  }
}
</script>
<style lang="less" scoped>
.loading{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  color: #fff;
  font-size: 30px;
  user-select: none;
}
img{
  width: 100px;
  height: 100px;
  animation: 1.5s linear 0s infinite RotateChange;
  user-select: none;
}
@keyframes RotateChange {
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>