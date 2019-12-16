<template>
  <div class="Nav-contain">
     <div class="Nav-item" v-for="(item,index) in dataSourceList" :key="index">
       <img :src="item.image" alt="">
       <div>{{item.mallCategoryName}}</div>
     </div>
     
  </div>
</template>

<script lang="ts">
import { Component,Prop, Vue } from "vue-property-decorator";

export default class Nav extends Vue{
  dataSourceList:[]=this.$store.state.home.Homelist.data.category
}
</script>


<style lang="scss" scoped>
 .Nav-contain{
    padding: 10px;
    display: flex;
    .Nav-item{
      flex: 1;
      text-align: center;
      img{
        height: 100px;
        width: 100px;
        display: inline-block;
        vertical-align: middle;

      }
      
    }
    
  }

</style>