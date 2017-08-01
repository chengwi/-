<template>
  <div class="pad">
    <div class="weixin">
        <div class="tab">
          <router-link  class="item" to="/home/weixin/guanzhu">关注回复</router-link>
          <router-link  class="item" to="/home/weixin/guanjian">关键词回复</router-link>
        </div>
       <div class="content-weixin">
         <router-view></router-view>
       </div>
    </div>
  </div>
</template>

<script>
    export default {
      data(){
          return{

          }
      }
    }
</script>
<style scoped>

.tab{
  display:flex;
  height:44px;
  line-height:44px;
  text-align:center;
 }
.item{
     display: inline-block;
     flex:1;
     text-align:center ;
     cursor:pointer;
     color:#000000;
  border-radius:5px;
   }
.router-link-active{
     color:#00d1b2;
     background:#eaeaea;
   }





</style>
