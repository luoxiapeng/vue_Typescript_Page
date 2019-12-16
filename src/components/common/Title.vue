<template>
  <div class="Title-contain">  
    {{title}}
  </div>
</template>

<script lang="ts">
import { Component,Prop, Vue } from "vue-property-decorator";

export default{
  props:{
    title:{
      type:String
    }
  }
  
}
</script>


<style lang="scss" scoped>
 .Title-contain{
   height: 40px;
   font-size:18px;
   padding: 10px 10px;
   color:$bgc;
   line-height: 40px;
   border-bottom: 1px solid #f4f4f4;
 }

</style>