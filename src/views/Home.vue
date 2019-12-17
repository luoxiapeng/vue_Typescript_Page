<template>
  <div class="HomeClass">
    <Search/>
    <Swiper/>
    <Division/>
    <Nav/>
    <Advertisement/>
    <Recommendation/>
     <Division/>
    <FoodTable/>
  </div>
</template>

<script lang="ts">
import Search from '@/components/common/Search.vue'
import Division from '@/components/common/Division.vue'
import Swiper from '@/components/home/Swiper.vue'
import Nav from '@/components/home/Nav.vue'
import Advertisement from '@/components/home/Advertisement.vue'
import Recommendation from '@/components/home/Recommendation.vue'
import FoodTable from '@/components/common/FoodTable.vue'


import { Component, Vue } from "vue-property-decorator";
import * as ServiceApi from "@/api/modules/system";
import { mapGetters} from "vuex";


@Component({
  components: {
    Search,
    Swiper,
    Division,
    Nav,
    Advertisement,
    Recommendation,
    FoodTable
  }
})
export default class Home extends Vue {
  public HomeListData={}
  created() {
    this.HomeListData= this.$store.state.home.Homelist
  }
  mounted() {
    // this.HomeListData= this.$store.state.home.Homelist

    console.log(this.HomeListData)
  }
  // get computed(){
  //   this.HomeListData = mapState({
  //     // ...
  //     Homelist: "Homelist"
  //   });
  //   return 
  // }
  
}
</script>
<style lang="scss" scope>
  .HomeClass {
    width: 100%;
    margin-bottom: 1.33rem;
    position: relative;
  }
</style>