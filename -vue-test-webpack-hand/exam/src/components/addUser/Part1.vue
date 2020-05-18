<template>
    <div class="part1">
        <el-button v-for="(item,index) in btnValue" :key="index" @click="user(item)" class="btn">{{item}}</el-button>
        <el-form v-if="isShow==='添加用户'?true:false" :model="ruleForm"> 
            <el-form-item class="ipt" prop="name">
                <el-input placeholder="请输入用户名" v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item class="ipt" prop="pass">
                <el-input placeholder="请输入密码" v-model="ruleForm.pass"></el-input>
            </el-form-item>
            <el-form-item class="ipt" prop="id">
                <el-select  placeholder="请选择身份id" v-model="ruleForm.identity_id">
                    <el-option v-for="(item,index) in identity" :key="index" :label="item.identity_text" :value='item.identity_id'></el-option>
                </el-select>
            </el-form-item>
            <el-form-item class="btn">
                <el-button type="primary" @click="submitForm()">提交</el-button>
                <el-button @click="resetForm()">重置</el-button>
            </el-form-item>
        </el-form>
        <el-form v-if="isShow==='更新用户'?true:false">
            <el-form-item class="ipt" prop="ruleForm">
                <el-select  placeholder="请选择身份id" v-model="ruleForm.user_id">
                    <el-option v-for="(item,index) in userId" :key="index" :label="item.user_name" :value='item.user_id'></el-option>
                </el-select>
            </el-form-item>
            <el-form-item class="ipt" prop="name">
                <el-input placeholder="请输入用户名" v-model=" ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item class="ipt" prop="pass">
                <el-input placeholder="请输入密码" v-model="ruleForm.pass"></el-input>
            </el-form-item>
            <el-form-item class="ipt" prop="id">
                <el-select  placeholder="请选择身份id" v-model="ruleForm.identity_id">
                    <el-option v-for="(item,index) in identity" :key="index" :label="item.identity_text" :value='item.identity_id'></el-option>
                </el-select>
            </el-form-item>
            <el-form-item class="btn">
                <el-button type="primary" @click="update('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import Api from '../../api'
import store from '../../store'
export default {
    data(){
        return {
            ruleForm: {
                name: 'wBingYu1707b',
                pass: 'My1707b11!',
                identity_id:'',
                user_id:''
            },
            btnValue:['添加用户','更新用户'],
            isShow:'添加用户',
            userId:'',
            identity:'',
        }
    },
    methods:{
        user(item){
            this.isShow=item
        },
        submitForm() {
            let {name,pass,id}=this.ruleForm
            Api.addUser({user_name:name,user_pwd:pass,identity_id:id}).then(res=>{
                // console.log(res)
            })
        },
        update() {
            let {name,pass,identity_id,user_id}=this.ruleForm
            this.userId.map(item=>{
                if(item.user_name===name){
                    Api.updateUser({user_id:user_id,user_name:name,user_pwd:item.user_name,identity_id:identity_id}).then(res=>{
                        // console.log(res)
                        this.$message({
                            message: res.msg,
                            type: 'success'
                        });
                    })
                }
            })
      },
      resetForm(){
          this.ruleForm.name='',
          this.ruleForm.pass='',
          this.ruleForm.identity_id='',
          this.ruleForm.user_id=''
      }
    },
    created(){
        Api.getUser().then(res=>{
            // console.log(res)
            this.userId=res.data
        }),
        Api.getIdentity().then(res=>{
            // console.log(res)
            this.identity=res.data
        })
        
    }
}
</script>

<style>
.part1{
    width: 33%;
    height: 55%;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.ipt{
    width: 90%;
    height: 30px;
    margin: 20px auto;

}
.btn{
    margin-left: 20px;
}
</style>