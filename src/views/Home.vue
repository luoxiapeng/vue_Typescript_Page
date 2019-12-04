<template>
  <div class="home">
   
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as ServiceApi from '@/api/modules/system'
import * as actionType from '@/store/actionType'
import { mapGetters } from 'vuex'
@Component({
  components: {
  }
})
export default class Home extends Vue {
  private haha: string = "1111";
 
  created() {
    // alert(this.haha);
    let data={
      a:1,
      b:2
    }
    this.$store.dispatch({
      type: 'getList',
      data: data
    })
    console.log(this.$store.getters)
  }

  
  private fn() {
    return;
  }
}
</script>
