<template>
  <div>
    <div class="swiper-area">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in bannerPicArray" :key="index">
          <img v-lazy="item.imageUrl" width="100%"/>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
export default{
  data(){
    return{
      bannerPicArray:[
        {imageUrl:'https://img.yzcdn.cn/vant/apple-1.jpg'},
        {imageUrl:'https://img.yzcdn.cn/vant/apple-2.jpg'},
        {imageUrl:'https://img.yzcdn.cn/vant/apple-3.jpg'},
      ]
    }
  }

  }
</script>

<style lang="scss" scoped>
 .swiper-area{
    width: 100%;
    clear:both;
    img{
      height: 400px;
    }
  }

</style>