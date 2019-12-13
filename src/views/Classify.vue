<template>
  <div>
    分类
     <TableBar/>
  </div>
</template>

<script lang="ts">
import TableBar from '@/components/common/TableBar.vue'
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    TableBar
  }
})
export default class Classify extends Vue{
  
}
</script>

<style lang="scss" scoped>

</style>
