<template>
  <div class="home">
   
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as ServiceApi from '@/api/modules/system'
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
    ServiceApi.getHome(data).then((res:any)=>{
      console.log(res)
    })
    ServiceApi.getHome2(data,'/data/aa').then((res:any)=>{
      console.log(res)
    })
  }
  private fn() {
    return;
  }
}
</script>
