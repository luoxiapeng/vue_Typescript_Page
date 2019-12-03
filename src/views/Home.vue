<template>
  <div class="home">
   
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class Home extends Vue {
  private haha: string = "1111";
  created() {
    // alert(this.haha);
  }
  private fn() {
    return;
  }
}
</script>
