<template>
  <div class="pad">
        <div>

          <el-input placeholder="请输入内容" v-model="searchStr"><el-button slot="append" @click="search" icon="search" ></el-button>
          </el-input>
        </div>
    </div>

</template>

<script>
    export default {
      data(){
        return{
          searchStr:''
        }
      },
      methods:{

        search(){
          if(this.searchStr!=''){
            this.$message({
              message: this.searchStr,
              type: 'success'
            });
          }else{
            this.$message({
              message: '输入不能为空啊',
              type: 'warning'
            });
          }


        }
      }
    }
</script>
<style>


</style>
