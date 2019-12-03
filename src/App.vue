<template>
  <div id="app">
    <div class="font-class fr">哈哈哈</div>
   
    <router-view/>
  </div>
</template>
<script lang='ts'>
export default {
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
  @include red;
   .font-class{
     font-size: 16px;
     color:#fff
   }
 }
  
</style>
