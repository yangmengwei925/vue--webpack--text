<template>
    <div class="part2">
        <el-form>
            <el-button class="btn">添加身份</el-button>
            <el-form-item class="ipt" prop="userId">
                <el-input placeholder="请输入身份名称" v-model="userId"></el-input>
            </el-form-item>
            <el-form-item class="btn">
                <el-button type="primary" @click="addUserId()">确定</el-button>
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
            userId:''
        }
    },
    methods:{
        addUserId() {
            let {userId}=this
            Api.addId({identity_text:userId}).then(res=>{
                this.$message({
                    message: res.msg,
                    type: 'success'
                });
            })
        },
        resetForm(){
            this.userId=''
        }
    },
    created(){
        // console.log(this.ruleForm.userId)
    }
}
</script>

<style>
.part2{
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