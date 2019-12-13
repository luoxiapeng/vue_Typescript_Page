<template>
  <div class="HomeClass">
    <Search/>
    <Swiper/>
    <Nav/>
    <TableBar/>
    
  </div>
</template>

<script lang="ts">
import TableBar from '@/components/common/TableBar.vue'
import Search from '@/components/common/Search.vue'
import Swiper from '@/components/home/Swiper.vue'
import Nav from '@/components/home/Nav.vue'
import { Component, Vue } from "vue-property-decorator";
import * as ServiceApi from "@/api/modules/system";
import { mapGetters} from "vuex";

@Component({
  components: {
    TableBar,
    Search,
    Swiper,
    Nav
  }
})
export default class Home extends Vue {
  public HomeListData={}
  created() {
  }
  mounted() {
    this.HomeListData= this.$store.state.home.Homelist
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
  }
</style>