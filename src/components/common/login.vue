<template>
    <div class="login">
        <div class="wrap">
          <div class="title">后台管理</div>
          <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-form">
              <el-form-item prop="username">
                <el-input type="text" v-model="ruleForm.username" placeholder="username"></el-input>
              </el-form-item>
             <el-form-item>
               <el-input type="password" v-model="ruleForm.password" placeholder="password"></el-input>
             </el-form-item>
             <div class="login-btn">
               <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
             </div>
            </el-form>
          </div>

        </div>
    </div>

</template>

<script>
  import {mapActions} from 'vuex'
    export default {

      data: function(){
        return {
          ruleForm: {
            username: '',
            password: ''
          },
          rules: {
            username: [
              { required: true, message: '请输入用户名', trigger: 'blur' }
            ],
            password: [
              { required: true, message: '请输入密码', trigger: 'blur' }
            ]
          }
        }
      },
      methods: {
        submitForm(formName) {
          const self = this;
          self.$refs[formName].validate((valid) => {
            if (valid) {
              console.log(this.ruleForm);
              this.saveInfo(this.ruleForm)
              self.$router.push('/home');
            } else {
              console.log('error submit!!');
          return false;
        }
        });
        },
        ...mapActions([
          'saveInfo'
       ])
      }

    }
</script>
<style>
.login{
  position: relative;
  width:100%;
  height:100%;
  background: rgba(7,17,27,0.8);
}
.wrap{
  position: absolute;
  top:50%;
  left:50%;
  width: 320px;
  heigth:250px;
  padding: 10px 40px 40px 40px;
  margin: -160px 0 0 -125px;
  border-radius: 5px;
  background: #ffffff;

}
.title{
  height:44px;
  line-height: 44px;
  text-align: center;

}
  .login-btn,.login-btn button{
    width:100%;
    heigth:36px;
    text-align: center;
  }
</style>
