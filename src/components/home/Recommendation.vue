<template>
  <div class="Recommendation-contain"> 
    <Title :title="title"/> 
  </div>
</template>

<script lang="ts">
import { Component,Prop, Vue } from "vue-property-decorator";
import Title from '@/components/common/Title.vue'

export default{
  components:{
    Title
  },
  data(){
    return{
      title:'商品推荐'
    }
  }
  
}
</script>


<style lang="scss" scoped>
 .Recommendation-contain{
   width: 100%;
   
 }

</style>