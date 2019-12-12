<template>
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
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
  export default   {
    
    data(){
      return{
        locationIcon:require("@/assets/image/location.png"),
        searchIcon:require('@/assets/image/search.png')
      }
      
    }
    
  }
</script>

<style lang="scss" scoped>
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

</style>