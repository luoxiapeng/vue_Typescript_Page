<template>
  <div class="home">

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as ServiceApi from '@/api/modules/system'
import * as mutationsType from '@/store/mutationsType'
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
  get computed () :any{
    let a=mapGetters({
    // ...
    "list":"list"
    })
    return  a
  }
  
  private fn() {
    return;
  }
}
</script>
