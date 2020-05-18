<template>
    <div class="login">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户" prop="user">
          <el-input type="user" v-model="ruleForm.user" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">提交</el-button>
          <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
        </el-form-item>
      </el-form>
    </div>
</template>
<script>
  import Api from '../../api'
  import store from '../../store'
  export default {
    
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          user: 'wBingYu1707b',
          pass: 'My1707b11!'
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          
        }
      };
    },
    methods: {
        submitForm() {
          let {user,pass}=this.ruleForm
          store.dispatch('users/login',{user_name:user,user_pwd:pass}).then(res=>{
            if(res.code===1){
              this.$router.push('/mains')
            }
          })

        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
        //     this.$router.push({name:'mains',params:{ruleForm:this.ruleForm}})
        //   } else {
        //     console.log('error submit!!');
        //     return false;
        //   }
        // });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>
.login{
    width: 300px;
    margin: 0 auto;
    position: relative;
}
</style>

