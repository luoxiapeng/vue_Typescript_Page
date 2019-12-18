<template>
  <div>
    <van-tree-select
      height="700px"
      style="padding-bottom:30px"
      :items="items"
      :main-active-index.sync="activeIndex"
    >
      <template slot="content">
        <div v-if="activeIndex === 0">1111</div>
        <van-image v-if="activeIndex === 1" src="https://img.yzcdn.cn/vant/apple-2.jpg" />
      </template>
    </van-tree-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      items: [
        { text: "分组 1" },
        { text: "分组 2" },
        { text: "分组 1" },
        { text: "分组 2" },
        { text: "分组 1" },
        { text: "分组 2" },
        { text: "分组 1" },
        { text: "分组 2" },
        { text: "分组 1" },
        { text: "分组 2" },
        { text: "分组 1" },
        { text: "分组 2" },
        { text: "分组 1" },
        { text: "分组 2" },
        { text: "分组 1" },
        { text: "分组 2" },
        { text: "分组 1" },
        { text: "分组 2" },
        { text: "分组 1" },
        { text: "分组 2" },
        { text: "分组 1" },
        { text: "分组 2" },
        { text: "分组 1" },
        { text: "" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>