<!--
 * @Author: otherChannel
 * @Date: 2022-12-20 10:41:35
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-21 08:55:25
-->

<template>
  <div class="register">
    <el-card class="backboard-card">
      <el-card class="form-box">
        <!-- 登录面板 -->
        <div class="sign-in">
            <h1>SIGN IN</h1>  
            <el-form :model="signinForm" status-icon :rules="rules" ref="signinForm" label-width="100px" class="demo-ruleForm">
              <el-form-item prop="username">
                <el-input placeholder="账号" v-model="signinForm.username"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input placeholder="密码" v-model="signinForm.password"  show-password></el-input>
              </el-form-item>
              <el-form-item>
                <el-button @click="submitForm('signinForm')">登 录</el-button>
                <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
              </el-form-item>
            </el-form>
        </div>
        <!-- 注册面板 -->
        <!-- <div class="sign-up">
          <el-card class="sign-up-card">
            <h1>SIGN UP</h1>  
            <el-form :model="signinForm" status-icon :rules="rules" ref="signinForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="账号" prop="username">
                <el-input placeholder="请输入用户账号" v-model="signinForm.username" clearable></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input placeholder="请输入用户密码" v-model="signinForm.password"  show-password></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('signinForm')">登录</el-button>
              </el-form-item>
            </el-form>
          </el-card>
        </div> -->
      </el-card>
    </el-card>
  </div>
</template>

<script>
import { nameRule, passRule} from '@/utils/validate/index.js';
export default {
  name: 'RegisterPage',
  data(){
    return {
      signinForm: { username: '', password: '' },
      rules: {
        username: [
          { validator: nameRule, trigger: 'blur' }
        ],
        password: [
          { validator: passRule, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  .register{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to right top, #E3EEFC, #F5EAEC); /*渐变*/
    background-repeat:no-repeat; /*设置背景不重复*/
    background-attachment:fixed; /*背景图片不会随着页面的滚动而滚动。*/
    
    // 清除elementUI组件的边框
    ::v-deep .el-card, .el-button, .el-input, .el-input__inner{
      border: none;
    }

    .backboard-card{
      background-color: #fff;
      width: 650px;
      height: 415px;
      position: relative;
      overflow: visible;
      .form-box{
        position: absolute; /* 绝对定位 */
        top: -10%;
        left: 5%;
        background-image: linear-gradient(to right top, #F5EAEC, #E3EEFC); /*渐变*/
        width: 320px;
        height: 500px;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 2px 0 10px rgba(0,0,0,0.1);
        border-radius: 7px;
        .sign-in{
          h1{
            font-size: 36px;
            text-align: center;
            margin-bottom: 55px;
            text-transform: uppercase; /* 大写 */
            color: #fff;
            letter-spacing: 5px; /* 字间距 */
          }
          ::v-deep .el-form-item__content{
            margin: 0 !important; 

            input{
              color: #a262ad;
              &::-webkit-input-placeholder { /* WebKit browsers */
                letter-spacing: 10px;
              }
            }

            button{
              width: 100%;
              margin-top: 20px;
              color: #b85798;
              word-spacing: 25px;

              &:hover{
                background-color: #b85798;
                color: #e6e6fa;
                transition: background-color 0.5s ease;
              }
            }
          }
        }
      }
    }
  }


</style>