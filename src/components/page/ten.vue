<template>
  <div class="pad">
        <div class="note">数据分析结论</div>
     <ul>
       <li v-if="list.length" v-for="item in list">
         <p>{{item.title}}</p>
         <p>{{item.detail}}</p>
       </li>
     </ul>
    </div>

</template>

<script>
  import {mapActions,mapState} from 'vuex'
    export default {
          computed:{
            ...mapState({
              list:"nates"
            })
          }

    }
</script>
<style>
.note{
  height:44px;
  line-height: 44px;
  color:#000000;
  font-size: 18px;
  text-align: center;

}

</style>
