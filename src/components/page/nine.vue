<template>
  <div class="pad">
      <div class="content-title">折线图</div>
      <schart canvasId="line" width="500" height="400" :data="data1" type="line" ></schart>

    </div>

</template>

<script>
  import schart from 'vue-schart'
    export default {
      data(){
        return{
          data1:[
            {name:'2012',value:1141},
            {name:'2013',value:1499},
            {name:'2014',value:2260},
            {name:'2015',value:1170},
            {name:'2016',value:970},
            {name:'2017',value:1450}
          ]
        }
      },
      components:{
        schart
      }
    }
</script>
<style>


</style>
