<template>
    <div class="part3">
        <el-form>
            <el-button class="btn">添加api接口权限</el-button>
            <el-form-item class="ipt">
                <el-input placeholder="请输入api接口权限名称" v-model="name"></el-input>
            </el-form-item>
            <el-form-item class="ipt">
                <el-input placeholder="请输入api接口权限url" v-model="url"></el-input>
            </el-form-item>
            <el-form-item class="ipt">
                <el-input placeholder="请输入api接口权限方法" v-model="method"></el-input>
            </el-form-item>
            <el-form-item class="btn">
                <el-button type="primary" @click="addApi()">确定</el-button>
                <el-button @click="resetForm()">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import Api from '../../api'
export default {
    data(){
        return {
            name:'',
            url:'',
            method:''
        }
    },
    methods:{
        addApi(){
            let {name,url,method}=this
            Api.addPort({api_authority_text:name,api_authority_url:url,api_authority_method:method}).then(res=>{
                this.$message({
                    message: res.msg,
                    type: 'success'
                });
            })
        },
        resetForm(){
            this.name='',
            this.url='',
            this.method=''
        }
    }
}
</script>

<style>
.part3{
    width: 33%;
    height: 55%;
    border: 1px solid #ccc;
    border-left: none;
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