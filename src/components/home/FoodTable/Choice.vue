<template>
  <div class="Choice-Contain">
    <div class="Choice-box">
       <div class="Choice-item">
          <img src="http://images.baixingliangfan.cn/homeFloor/20180407/20180407180109_6316.jpg" alt="">
          <div class="discount">
            折扣价
          </div>
          <span class="money">￥20</span>
       </div>
       <div class="Choice-item">
          <img src="http://images.baixingliangfan.cn/homeFloor/20180407/20180407180109_6316.jpg" alt="">

       </div>
    </div>
     
  </div>
</template>

<script>
  export default {
    props:{
      food1:{
        type:Array,
        default:[]
      }
    },
    components:{
    }
    
  }
</script>

<style lang="scss" scoped>
.Choice-Contain{
  width: 100%;
  padding-bottom: 200px;
  .Choice-box{
    display: flex;
    .Choice-item{
      flex:1;
      margin-right:10px;
      border-right: 1px solid #f4f4f4;
      img{
        height: 400px;
        width: 100%;
      }
      .discount{
        padding: 3px;
        border: 1px solid red;
        border-radius: 2px;
        color:red;
        width: 80px;
        text-align: center;
        margin-left: 30px;
        font-size: 10px;
        overflow: hidden;
        display: block;

      }
      .money{
        margin-left: 30px;
        margin-top: 10px;
        font-size: 23px;
        color: red;
        font-weight: 700;
        display: block;
      }
    }
    .Choice-item:nth-child(2n){
      margin-right:0px;
      border-right: none;
    }
    
  }
}


</style>