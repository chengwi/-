<template>
    <div class="home">
      <v-head></v-head>
      <slider></slider>
      <div class="content">
        <transition name="move"><router-view></router-view></transition>
      </div>

    </div>

</template>

<script>
  import vHead from '@/components/common/header'
  import slider from '@/components/common/slider'
  export default {
    components:{
      vHead,slider
    }
  }
</script>
<style>


</style>
