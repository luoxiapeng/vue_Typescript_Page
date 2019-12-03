<template>
  <div id="app">
    <div class="font-class">哈哈哈</div>
   
    <router-view/>
  </div>
</template>

<style lang="scss" scope>
 #app{
   height: 200px;
   width: 750px;
   padding: 0;
   margin: 0;
   background-color:red;
   .font-class{
     font-size: 16px;
     color:#fff
   }
 }
  
</style>
