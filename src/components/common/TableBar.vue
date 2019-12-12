<template>
  <div>
      <van-tabbar v-model="active">
         <van-tabbar-item v-for="(item,index) in tabbars" :key="index" :to="(item.name)">
          <span>{{item.title}}</span>
          <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.normal" />
        </van-tabbar-item>
    </van-tabbar>
    
  </div>
</template>

<script lang="ts">
  
  export default {
    data() {
      return {
        active: 0,
        tabbars: [
          {
            name: "/",
            title: "首页",
            normal:require("@/assets/image/Home.png"),
            active:require("@/assets/image/Home_a.png"),
          },
          {
            name: "find",
            title: "发现",
            normal:require("@/assets/image/Find.png"),
            active:require("@/assets/image/Find_a.png"),
          },
          {
            name: "shopCar",
            title: "购物车",
            normal:require("@/assets/image/shopCar.png"),
            active:require("@/assets/image/shopCar_a.png"),
          },
          {
            name: "me",
            title: "我的",
            normal:require("@/assets/image/Me.png"),
            active:require("@/assets/image/Me_a.png"),
          }
        ]
      };
    },
    created() {
      if (this.$route.name == "index") {
        this.active = 0;
      } else if (this.$route.name == "find") {
        this.active = 1;
      } else if (this.$route.name == "shopCar") {
        this.active = 2;
      }else if(this.$route.name == "me"){
         this.active = 3;
      }
    },
    
  }
</script>

<style lang="scss" scoped>

</style>