<template>
  <div class="foodTable">
     <van-tabs v-model="active">
      <van-tab title="精选">
        <Choice :food1="foodData.floor1"/>
      </van-tab>
      <van-tab title="必买">
        <Buy :food2="foodData.floor2"/>
      </van-tab>
      <van-tab title="新品">
        <New :food3="foodData.floor3"/>
      </van-tab>
      <van-tab title="省钱">
        <Money/>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>
import Buy from '@/components/home/FoodTable/Buy.vue'
import Choice from '@/components/home/FoodTable/Choice.vue'
import Money from '@/components/home/FoodTable/Money.vue'
import New from '@/components/home/FoodTable/New.vue'
  export default {
    data() {
      return {
        active: 0,
        foodData:{}
      };
    },
    created() {
      this.foodData=this.$store.state.home.Homelist.data
    },
    components:{
      Buy,
      Choice,
      Money,
      New
    }
    
  }
</script>

<style lang="scss" scoped>
.foodTable{
  width: 100%;
  
}

</style>