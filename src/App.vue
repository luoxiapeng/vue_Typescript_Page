<template>
  <div class="main-box">
    <div class="main-div">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <van-tabbar v-model="active">
      <van-tabbar-item v-for="(item,index) in tabbars" :key="index" :to="(item.name)">
        <span>{{item.title}}</span>
        <img
          class="TableBar-item-icon"
          style="height：20px;width:20px"
          slot="icon"
          slot-scope="props"
          :src="props.active ? item.active : item.normal"
        />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script lang='ts'>
export default {
  data() {
    return {
      active: 0,
      tabbars: [
        {
          name: "/",
          title: "首页",
          normal: require("@/assets/image/Home.png"),
          active: require("@/assets/image/Home_a.png")
        },
        {
          name: "classify",
          title: "分类",
          normal: require("@/assets/image/ClassOption.png"),
          active: require("@/assets/image/ClassOption_a.png")
        },
        {
          name: "shopCar",
          title: "购物车",
          normal: require("@/assets/image/shopCar.png"),
          active: require("@/assets/image/shopCar_a.png")
        },
        {
          name: "me",
          title: "我的",
          normal: require("@/assets/image/Me.png"),
          active: require("@/assets/image/Me_a.png")
        }
      ]
    };
  },
  created() {
    if (this.$route.name == "index") {
      this.active = 0;
    } else if (this.$route.name == "classify") {
      this.active = 1;
    } else if (this.$route.name == "shopCar") {
      this.active = 2;
    } else if (this.$route.name == "me") {
      this.active = 3;
    }
    //静态数据模拟，获取首页数据
    this.$store.dispatch({
      type: "getHomeJsonData"
    });
  }
};
</script>
<style lang="scss" scope>
.main-box {
  height: 100%;
  width: 100%;
  .main-div {
    height: 100%;
    width: 100%;
  }
}
</style>
