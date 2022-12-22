/*
 * @Author: otherChannel
 * @Date: 2022-12-20 12:26:51
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-12-21 19:02:20
 */

export default{
  // 账号验证
  nameRule: (rule, value, callback) => {
    let reg = /(^[a-zA-Z0-9]{4,12}$)/;
    if (value === '') {
      callback(new Error('账号不能为空'));
    } else if (!reg.test(value)){
      callback(new Error('账号应是4-12位字符'));
    } else {
      callback();
    }
  },
  // 密码验证
  /** 
   * /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/;
   * 6-12位 必须包含大小写数字及特殊字符
   *  */
  passRule: function(rule, value, callback, self) {
    let pass = /^\S{6,12}$/;
    if (value === '') {
      callback(new Error('密码不能为空'));
    } else if(!pass.test(value)) {
      callback(new Error('密码长度6~12位'))
    } else {
      if(self.signupForm.rePassword !== ''){
        self.$refs.signupForm.validateField('rePassword');
      }
      callback();
    }
  },
  // 确认密码验证
  rePassRule: function(rule, value, callback, self) {
    if(value === '') {
      callback(new Error('确认密码'));
    }else if(value !== self.signupForm.password){
      callback(new Error('两次输入密码不一致!'));
    }else{
      callback();
    }
  },
  // email验证
  /** 邮箱正则
   *  [a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$
   *  202212版
   *  */
  emailRule: (rule, value, callback) => {
    let email = /[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/;
    if(value === '') {
      callback(new Error('邮箱不能为空'));
    }else if(!email.test(value)) {
      callback(new Error('邮箱无法识别'));
    }else {
      callback();
    }
  }
}