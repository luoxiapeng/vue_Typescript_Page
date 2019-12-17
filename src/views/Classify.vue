<template>
  <div class="Classify-containt">
   <van-tree-select
     height="55vw"
    :items="items"
    :main-active-index.sync="activeIndex"
  >
  <template slot="content">
    <!-- <van-image v-if="activeIndex === 0" src="https://img.yzcdn.cn/vant/apple-1.jpg" /> -->
    <div v-if="activeIndex === 0">11111</div>
    <van-image v-if="activeIndex === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
  </template>
</van-tree-select>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {

  }
})
export default class Classify extends Vue{
   data() {
    return {
      activeIndex: 0,
      items: [
        { text: '分组 1' }, 
        { text: '分组 2' },
        { text: '分组 2' },
        { text: '分组 2' },
        { text: '分组 2' },
        { text: '分组 2' },
        { text: '分组 1' }, 
        { text: '分组 2' },
        { text: '分组 2' },
        { text: '分组 2' },
        { text: '分组 2' },
        { text: '分组 2' },
        { text: '分组 1' }, 
        { text: '分组 2' },
        { text: '分组 2' },
        { text: '分组 2' },
        { text: '分组 2' },
        { text: '分组 2' },
      ]
    };
  }
  
}
</script>

<style lang="scss" scoped>
.Classify-containt{
  height:100%;
  width:100%;
}

</style>

