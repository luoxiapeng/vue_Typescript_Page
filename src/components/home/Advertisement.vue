<template>
  <div class="Advertisement-contain"> 
    <img :src="AdvertisementImage.PICTURE_ADDRESS" alt=""> 
  </div>
</template>

<script lang="ts">
import { Component,Prop, Vue } from "vue-property-decorator";

export default{
  data(){
    return{
      AdvertisementImage:this.$store.state.home.Homelist.data.advertesPicture
    }
  },
  created() {
  },
  
}
</script>


<style lang="scss" scoped>
 .Advertisement-contain{
   width: 100%;
   padding: 10px 0;
   text-align: center;
   background-color: #f4f4f4;
   img{
     vertical-align: middle;
     height: 80px;
     width: 600px;
   }
   
 }

</style>