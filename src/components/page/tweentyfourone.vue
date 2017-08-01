<template>
    <div>
        <div class="tab">
          <span>选择类型</span>
          <el-radio-group v-model="radio2" @change="change">
            <el-radio :label="3">文字</el-radio>
            <el-radio :label="9">图片</el-radio>
          </el-radio-group>
           <div class="modifytext" v-if="isshow1">
            <span>编辑文字</span> <textarea name="" id="edit" cols="30" rows="10" v-model="text"></textarea>
             <div class="sub">
               <el-button type="primary" @click="submittext">提交文本</el-button>
             </div>
          </div>
          <div class="modifyimage" v-if="isshow2">
            <span>上传图片</span>
            <div class="upload">
              <i class="el-icon-upload2"></i>
              <input type="file" ref="fileupload" class="uploadimg" @change="uploadimg($event)" multiple="true">
            </div>
             <div class="upload" v-for="item in image">
               <img :src="item" alt="">
             </div>
            <div class="sub">
              <el-button type="primary" @click="submit">上传照片</el-button>
            </div>
          </div>
        </div>
    </div>

</template>

<script>
    export default {
      data(){
        return {
          radio2:3,
          isshow1:true,
          isshow2:false,
          image:[],
          text:''
        }
      },
      methods:{
        change(){
         if(this.radio2==3){
           this.isshow1=true
           this.isshow2=false
         }else if(this.radio2==9){
           this.isshow2=true
           this.isshow1=false
         }

        },
        uploadimg(e){
         let file=e.target.files || e.dataTransfer.files
            this.createImage(file)
        },
        createImage(file){
          if(typeof FileReader==='undefined'){
            this.$message({
              showClose: true,
              message: '你的浏览器不支持图片上传，请升级你的浏览器',
              type: 'warning'
            });
            return false;
          }
          let image = new Image()
          let _that = this
          let leng =file.length
          for (let i = 0;i<leng;i++){
            let reader =new FileReader()
            reader.readAsDataURL(file[i])
            reader.onload = function(e){
             _that.image.push(e.target.result)
            }
          }

        },
       submit(){
         if(this.image.length>0){
           this.$message({
             showClose: true,
             message: '照片上传成功哦',
             type: 'success'
           });
           console.log(this.image)
         }else{
           this.$message({
             showClose: true,
             message: '请上传照片哦',
             type: 'warning'
           });
           return
         }
      },
       submittext(){
        if(this.text!=''){
          console.log(this.text)
        }else{
          this.$message({
            showClose: true,
            message: '输入不能为空哦',
            type: 'warning'
          });
          return;
        }
      }
    }
    }
</script>
<style scoped>
.tab{
  margin-top: 20px;
  line-height: 32px;
}
.tab span{
    padding-right: 35px ;
  }
.modifytext{
  padding-top: 20px;
}
.modifytext span{
    vertical-align:top;
  }
.modifytext #edit{
  width: 500px;
  height: 300px;
  resize:none;
  font-size: 16px;
  line-height: 24px;

}
.modifyimage span{
  vertical-align: top;
}
 .modifyimage{
   padding-top: 20px;
 }
  .upload{
    display: inline-block;
    position: relative;
    width: 220px;
    height: 250px;
    line-height: 250px;
    text-align: center;
    font-size: 30px;
    color:#d3d4d6;
    border:1px solid #eaeaea;
    vertical-align: top;
  }
.upload img{
  width:100%;
  height:100%;
}
.uploadimg{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    opacity: 0;
    cursor: pointer;
  }
.sub{
  padding: 10px  60px;
   }
</style>
