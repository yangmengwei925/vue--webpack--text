<template>
    <div class="part5">
        <el-form>
            <el-button class="btn">给身份设置api接口权限</el-button>
            <el-form-item class="ipt">
                <el-select  placeholder="请选择身份id" v-model="apiForm.apiIdentity">
                    <el-option v-for="(item,index) in apiIdenValue" :key="index" :label="item.identity_text" :value='item.identity_id'></el-option>
                </el-select>
            </el-form-item>
            <el-form-item class="ipt">
                <el-select  placeholder="请选择api接口权限" v-model="apiForm.api">
                    <el-option v-for="(item,index) in apiValue" :key="index" :label="item.api_authority_text" :value='item.api_authority_id'></el-option>
                </el-select>
            </el-form-item>
            <el-form-item class="btn">
                <el-button type="primary" @click="addA">确定</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import Api from '../../api'
export default {
    data(){
        return {
            apiForm: {
                api:'',
                apiIdentity:''
            },
            apiValue:'',
            apiIdenValue:''
        }
    },
    methods:{
        addA(){
            let {api,apiIdentity}=this.apiForm
            // console.log(this.apiValue)
            Api.addApi({identity_id:apiIdentity,api_authority_id:api}).then(res=>{
                console.log(res)
                this.$message({
                    message: res.msg,
                    type: 'success'
                });
            })
        },
        resetForm(){
            this.apiForm.api='',
            this.apiForm.apiIdentity=''
        }
    },
    created(){
        Api.getIdentity().then(res=>{
            // console.log(res)
            this.apiIdenValue=res.data
        })
        Api.getApi().then(res=>{
            // console.log(res)
            this.apiValue=res.data
        })
    }
}
</script>

<style>
.part5{
    width: 33%;
    height: 45%;
    border: 1px solid #ccc;
    border-radius: 5px;
    border-left: none;
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