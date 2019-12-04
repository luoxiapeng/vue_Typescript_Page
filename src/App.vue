<template>
  <div id="app">
    <div class="font-class">广州</div>
    <van-button type="primary" size="mini">主要按钮</van-button>
    <router-view/>
  </div>
</template>
<script lang='ts'>
export default {
 created() {
   
 },
}
</script>
<style lang="scss" scope>
@import '@/assets/scss/mixin.scss';
 #app{
   height: 200px;
   width: 750px;
   padding: 0;
   margin: 0;
  //  background-color: red;
  // @include red;
   .font-class{
     font-size: 32px;
     color:red
   }
 }
  
</style>
