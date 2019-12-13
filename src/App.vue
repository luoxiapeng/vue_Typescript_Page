<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script lang='ts'>
export default {
   
 created() {
   //静态数据模拟，获取首页数据
   this.$store.dispatch({
      type: 'getHomeJsonData'
    });
   
 },
}
</script>
<style lang="scss" scope>


</style>
