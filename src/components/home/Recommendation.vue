<template>
  <div class="Recommendation-contain">
    <Title :title="title" />
    <div class="recommend-body">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) in recommendGoods " :key="index">
          <div class="recommend-item">
            <img :src="item.image" width="80%" />
            <div>{{item.goodsName}}</div>
            <div>￥{{item.price}}(￥{{item.mallPrice}})</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Component, Prop, Vue } from "vue-property-decorator";
import Title from "@/components/common/Title.vue";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      title: "商品推荐",
      recommendGoods: [],
      swiperOption: {
        slidesPerView: 3
      }
    };
  },
  created() {
    this.recommendGoods = this.$store.state.home.Homelist.data.recommend;
  },
  components: {
    Title,
    swiperSlide,
    swiper
  }
};
</script>


<style lang="scss" scoped>
.Recommendation-contain {
  width: 100%;
  .recommend-body {
    border-bottom: 1px solid #eee;
    .recommend-item {
      width: 99%;
      border-right: 1px solid #eee;
      font-size: 12px;
      text-align: center;
    }
  }
}
</style>