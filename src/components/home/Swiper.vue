<template>
  <div>
    <div class="swiper-area">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in bannerPicArray" :key="index">
          <img v-lazy="item.image" width="100%" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
export default {
  data() {
    return {
      bannerPicArray: this.$store.state.home.Homelist.data.slides
    };
  }
};
</script>

<style lang="scss" type="text/scss" scoped>
.swiper-area {
  // width: 100%;

  clear: both;
  img {
    height: 400px;
    // width: 100%;
    overflow: hidden;
  }
}
</style>