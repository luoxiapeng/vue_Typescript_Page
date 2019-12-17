<template>
  <div :class="navBarFixed == true ? 'navBarWrap' :'search-bar'">
      <van-row>
        <van-col span="3">
          <img :src="locationIcon" class="location-icon"  />
        </van-col>
        <van-col span="21">
          <img :src="searchIcon" alt="" class="search-Icon">
          <input type="text" class="search-input" />
        </van-col>
      </van-row>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
  export default   {
    
    data(){
      return{
        locationIcon:require("@/assets/image/location.png"),
        searchIcon:require('@/assets/image/search.png'),
        navBarFixed:false
      }
      
    },
    mounted() {
      window.addEventListener("scroll", this.hidemenu); //监听滚动事件
    },
    methods: {
      hidemenu() {
        let scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop;
        //当滚动超过50时，实现吸顶效果（导航高度为50）
        if (scrollTop > 49) {
          this.navBarFixed = true
          this.searchIcon=require('@/assets/image/search_a.png')
          this.locationIcon=require("@/assets/image/location_a.png")
        }else{
          this.navBarFixed = false
          this.searchIcon=require('@/assets/image/search.png')
          this.locationIcon=require("@/assets/image/location.png")
        }
      },

    },

    
  }
</script>

<style lang="scss" scoped>

.search-bar,.navBarWrap {
  height: 100px;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  line-height: 100px;
  padding: 10px;
  z-index: 1;
  .location-icon {
    height: 50px;
    width: 50px;
    padding-top: 25px;
    padding-left: 20px;
  }
  .search-input {
    height: 60px;
    width: 85%;
    border-radius: 10px;
    padding-left:60px;
    border:none;
  }
  .search-Icon{
      position:absolute;
      left:16%;
      top:50%;
      margin-top:-19px;
      height:38px;
      width:38px;
    }
  .searchIcon-icon{
    height:50px;
    width:50px;
  }
}
.navBarWrap {
    position: fixed;
    top: 0;
    z-index: 999;
    width:100%;
    background-color: #fff;
    .search-input{
      background-color:#f4f4f4;
    }
}

</style>