<template>
  <div>
    发现
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
export default class Find extends Vue{
  
}
</script>

<style lang="scss" scoped>

</style>
