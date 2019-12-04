<template>
  <div class="home">
    <div class="search-bar">
      <van-row>
        <van-col span="3">
          <img :src="locationIcon" class="location-icon" />
        </van-col>
        <van-col span="18">
          <input type="text" class="search-input" />
        </van-col>
        <!-- <van-col span="5">
          <img :src="searchIcon" class="searchIcon-icon" />
        </van-col> -->
      </van-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as ServiceApi from "@/api/modules/system";
import * as mutationsType from "@/store/mutationsType";
import { mapGetters } from "vuex";

@Component({
  components: {}
})
export default class Home extends Vue {
  private haha: string = "1111";

  data() {
    return {
      locationIcon: require("@/assets/image/location.png"),
      searchIcon:require('@/assets/image/search.png')
    };
  }

  created() {
    // alert(this.haha);
    let data = {
      a: 1,
      b: 2
    };
    this.$store.dispatch({
      type: "getList",
      data: data
    });
    console.log(this.$store.getters);
  }
  get computed(): any {
    let a = mapGetters({
      // ...
      list: "list"
    });
    return a;
  }

  private fn() {
    return;
  }
}
</script>
<style lang="scss" type="text/scss" scope>
.home {
  width: 100%;
  .search-bar {
    height: 100px;
    background-color: #e5017d;
    line-height: 100px;
    padding: 10px;
    .location-icon {
      height: 50px;
      width: 50px;
      padding-top: 25px;
      padding-left: 20px;
    }
    .search-input {
      height: 60px;
      width: 100%;
      border-radius: 10px;
      padding-left:50px;
    }
    .searchIcon-icon{
      height:50px;
      width:50px;
    }
  }
}
</style>