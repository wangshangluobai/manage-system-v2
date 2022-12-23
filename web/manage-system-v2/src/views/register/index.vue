<!--
 * @Author: otherChannel
 * @Date: 2022-12-20 10:41:35
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-23 13:59:02
-->

<template>
  <!-- 整个背景 渐变在这里处理 -->
  <div class="register">
    <!-- 白板 -->
    <el-card class="backboard-card">
      <!-- 登录注册表单 样式 -->
      <el-card class="form-box"  ref="register">
        <!-- 登录面板 -->
        <div class="sign-in " v-show="isShow">
          <h1>SIGN IN</h1>  
          <el-form :model="signinForm" status-icon :rules="signinRules" ref="signinForm" label-width="100px" class="demo-ruleForm">
            <el-form-item prop="nickname">
              <el-input placeholder="账号" v-model="signinForm.nickname"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input placeholder="密码" v-model="signinForm.password"  show-password></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="submitForm('signinForm')">登 录</el-button>
            </el-form-item>
          </el-form>
        </div>
        <!-- 注册面板 -->
        <div class="sign-up" v-show="!isShow">
          <h1>SIGN UP</h1>  
          <el-form :model="signupForm" status-icon :rules="signupRules" ref="signupForm" class="demo-ruleForm">
            <el-form-item prop="nickname">
              <el-input placeholder="账号" v-model="signupForm.nickname"></el-input>
            </el-form-item>
            <el-form-item prop="email">
              <el-input placeholder="邮箱" v-model="signupForm.email"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input placeholder="密码" v-model="signupForm.password"  show-password></el-input>
            </el-form-item>
            <el-form-item prop="rePassword">
              <el-input placeholder="确认密码" v-model="signupForm.rePassword"  show-password></el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="submitForm('signupForm')">注 册</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
      <!-- 与注册同框 左侧文本 -->
      <div class="con-box left"  v-show="!isShow">
        <h2>事务管理中心<span>系统</span></h2>
        <p><span>注册账号</span>并记录事项</p>
        <img src="@/assets/img/register/louya.jpg" alt="笑出强大">
        <p>已有账号</p>
        <el-button @click="changeIsShow">去登录</el-button>
      </div>
      <!-- 与登录同框 右侧文本 -->
      <div class="con-box right"  v-show="isShow">
        <h2>事务管理中心<span>系统</span></h2>
        <p><span>登录账号</span>查询您上次的记录</p>
        <img src="@/assets/img/register/weixiao.jpg" alt="微微一笑">
        <p>没有账号？</p>
        <el-button @click="changeIsShow">去注册</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import validate from '@/utils/validate/index.js';
import { signUp } from '@/request/register.js';
import { mapMutations, mapActions } from 'vuex';
import { throttle } from '@/utils/tools.js'

export default {
  name: 'RegisterPage',
  data(){
    return {
      // 登录 | 注册 合法性验证 nickname
      signinForm: { nickname: 'ceshi', password: 'ceshi1' },
      signupForm: { nickname: 'ceshi', password: 'ceshi1', email: 'ceshi@123.com', rePassword: 'ceshi1', },
      signinRules: {
        nickname: [
          { validator: validate.nicknameRule, trigger: 'blur' }
        ],
        password: [ /* 简易封装 将验证方法提到外面后 无法正确获取this 只能从外界传过去 */
          { validator: (rule, value, callback) => validate.passRule(rule, value, callback, this), trigger: 'blur' }
        ]
      },
      signupRules: {
        nickname: [
          { validator: validate.nicknameRule, trigger: 'blur' }
        ],
        password: [
          { validator: (rule, value, callback) => validate.passRule(rule, value, callback, this), trigger: 'blur' }
        ],
        email: [
          { validator: validate.emailRule, trigger: 'blur' }
        ],
        rePassword: [
          { validator: (rule, value, callback) => validate.rePassRule(rule, value, callback, this), trigger: 'blur' }
        ]
      },
      // 控制登录 | 注册 面板以及旁侧信息的开关
      isShow: true,
      // 初始化节流函数
      useThrottle: throttle(this.submitReq, 3000),
    }
  },
  methods: {
    // 映射mutions方法
    ...mapMutations({}),
    // 映射action方法 sendSignIn
    ...mapActions({
      sendSignIn: 'aboutUser/sendSignIn'
    }),
    // 表单提交 
    
    submitForm(formName){
      // 传入上下文及参数 注意参数的传递方式
      this.useThrottle(this, [ formName ]);
    },
    // 提交请求 同服务器交互
    submitReq (formName) {
      this.$refs[formName].validate( (valid) => {
        if (valid) {
          // 表单验证通过 执行发送请求 与服务器交互
          if(this.isShow){
            // isShow = true 时 页面提交的是登录请求  派发登录函数
            this.sendSignIn({data: this.signinForm, self: this })
          }else{
            // isShow = false 时 页面提交的是注册请求  整理注册数据
            let { nickname, password, email } = this.signupForm
            // 派发注册请求函数
            this.sendRegister({ nickname, password, email })
          }
        } else {
          this.$message({ message: '信息错误', type: 'error' });
          return false;
        }
      });
    },
    // 登录 | 注册 面板以及旁侧信息切换
    changeIsShow(){
      this.isShow = !this.isShow;
      if(this.isShow){
        this.$refs.register.$el.style.transform = 'translateX(0%)';
      }else{
        this.$refs.register.$el.style.transform = 'translateX(80%)';
      }
    },
    // 发送注册请求
    async sendRegister(params) {
      const res = await signUp(params);
      if(res.status === 200){
        /* 注册成功自动切换至登录表单 而非直接获取用户信息 */
        this.$message({ message: '注册成功', type: 'success' });
        /* 将注册时提供的信息赋予 登录时需要的信息变量上 不过不太确定这种写法是否正规 */
        ({ nickname: this.signinForm.nickname, password: this.signinForm.password } = this.signupForm);
        // 切换表单为登录
        this.changeIsShow();
        // 置空注册表单
        this.signupForm = this.$options.data().signupForm;
      } else {
        /* 提示错误信息 错误信息来源于后端 */
        this.$message({ message: res.message, type: 'error' });
      }
    },
  }
}
</script>

<style lang="scss" scoped>
  .register{ /* 大背景 总容器 */
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
      padding: 0;
    }
    /* 背景板 白板 */
    .backboard-card{
      background-color: #fff;
      width: 650px;
      height: 415px;
      position: relative;
      overflow: visible;
      display: flex;
      flex-direction: row;
      ::v-deep .el-card__body{
        padding: 0;
        width: 650px;
        height: 415px;
      }
      /* 表单容器 */
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
        box-shadow: 2px 0 10px rgba(0,0,0,0.1);/* 覆盖el-card样式 需要更深一些 */
        border-radius: 7px;
        // z-index: 3;
        ::v-deep .el-card__body{
          width: 320px;
          height: 500px;
          .el-form{
            margin: 0 40px;
          }
        }
        /* 登录 | 注册 模块内部样式 */
        .sign-in, .sign-up{
          width: 320px;
          height: 500px;
          h1{
            font-size: 36px;
            text-align: center;
            padding: 50px 0px 50px;
            text-transform: uppercase; /* 大写 */
            color: #fff;
            letter-spacing: 5px; /* 字间距 */
          }
          /* 去除lable后elementUI仍有残留边距 */
          ::v-deep .el-form-item__content{
            margin: 0 !important; 
            /* 输入框 */
            input{
              color: #a262ad;
              &::-webkit-input-placeholder { /* WebKit browsers */
                letter-spacing: 10px;
              }
            }
            /* 按钮 */
            button{
              width: 100%;
              margin-top: 20px;
              color: #b85798;
              word-spacing: 25px;
              padding: 12px 20px;
              /* 按钮 鼠标悬浮 */
              &:hover{
                background-color: #b85798;
                color: #e6e6fa;
                transition: background-color 0.5s ease;
              }
            }
          }
        }
      }
      /* 旁侧文本 */
      .con-box{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        /* 标题 */
        h2{
          color: #8e9aaf;
          font-size: 25px;
          font-weight: bold;
          letter-spacing: 3px;
          text-align: center;
          margin-bottom: 4px;
          // padding-bottom: 280px;
        }
        /* 标题下文本 */
        p{
          font-size: 12px;
          letter-spacing: 2px;
          color: #8e9aaf;
          text-align: center;
          padding: 10px 0px;
        }
        /* 中间图片 */
        img{
          width: 150px;
          height: 150px;
          opacity: 0.9; /* 透明度 更加看不出破绽 */
          margin: 40px 0;
        }
        /* 特定的文字 */
        span{
          color: #d3b7d8;
        }
        /* 切换板块按钮 */
        button{
          border: 1px solid #d3b7d8;
          padding: 7px 15px;
          margin-top: 5px;
          color: #b85798;
          letter-spacing: 3px;
          /* 悬浮样式 */
          &:hover{
            background-color: #b85798;
            color: #e6e6fa;
            transition: background-color 0.5s ease;
          }
        }
      }
      /* 旁侧文本图片信息 左右偏移 */
      .con-box.left{
        left: 0%;
      }
      .con-box.right{
        right: 0%;
      }
    }
  }


</style>