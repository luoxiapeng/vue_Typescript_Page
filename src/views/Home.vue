<template>
  <div class="HomeClass">
    <div class="search-bar">
      <van-row>
        <van-col span="3">
          <img :src="locationIcon" class="location-icon" />
        </van-col>
        <van-col span="21">
          <img :src="searchIcon" alt="" class="search-Icon">
          <input type="text" class="search-input" />
        </van-col>
      </van-row>
    </div>
    <div class="swiper-area">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item, index) in bannerPicArray" :key="index">
          <img v-lazy="item.imageUrl" width="100%"/>
        </van-swipe-item>
    </van-swipe>
    </div>
    <div>
      {{HomeListData}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as ServiceApi from "@/api/modules/system";
import { mapGetters,mapState} from "vuex";

@Component({
  components: {},
  // computed:{
  //   ...mapState({
  //     HomeListData:'HomeListData'
  //   })
  // }
})
export default class Home extends Vue {
  private haha: string = "1111";
  locationIcon=require("@/assets/image/location.png")
  searchIcon=require('@/assets/image/search.png')
  bannerPicArray=[
        {imageUrl:'https://img.yzcdn.cn/vant/apple-1.jpg'},
        {imageUrl:'https://img.yzcdn.cn/vant/apple-2.jpg'},
        {imageUrl:'https://img.yzcdn.cn/vant/apple-3.jpg'},]
  HomeListData = mapState({
      // ...
      Homelist: 'home.Homelist'
    });
  created() {
    this.$store.dispatch({
      type: 'getHomeList'
    });
    console.log('$$$$'+this.$store.state.home.Homelist)
    
    
  }
  // get computed(){
  //   this.HomeListData = mapState({
  //     // ...
  //     Homelist: "Homelist"
  //   });
  //   return 
  // }
  
}
</script>
<style lang="scss" scope>
  .HomeClass {
    width: 100%;
    .search-bar {
      height: 100px;
      background-color:$bgc;
      line-height: 100px;
      padding: 10px;
      position:relative;
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
    .swiper-area{
      height: 400px;
      width: 100%;
      clear:both;
      img{
        height: 400px;
      }
    }
  }
</style>