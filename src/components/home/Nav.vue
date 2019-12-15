<template>
  <div class="Nav-contain">
     <div class="Nav-item" v-for="(item,index) in dataSourceList" :key="index">
       {{item.mallCategoryName}}
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
    .Nav-item{

    }
    
  }

</style>