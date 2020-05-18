<template>
    <div class="part5">
        <el-form>
            <el-button class="btn">给身份设置视图权限</el-button>
            <el-form-item class="ipt">
                <el-select  placeholder="请选择身份id" v-model="viewForm2.viewId">
                    <el-option v-for="(item,index) in viValue" :key="index" :label="item.identity_text" :value='item.identity_id'></el-option>
                </el-select>
            </el-form-item>
            <el-form-item class="ipt">
                <el-select  placeholder="请选择视图权限id" v-model="viewForm2.view2">
                    <el-option v-for="(item,index) in viewValue2" :key="index" :label="item.view_authority_text" :value='item.view_authority_id'></el-option>
                </el-select>
            </el-form-item>
            <el-form-item class="btn">
                <el-button type="primary" @click="addV2()">确定</el-button>
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
            viewForm2: {
                viewId:'',
                view2: '',
            },
            viValue:'',
            viewValue2:''
        }
    },
    methods:{
        addV2(){
            let {viewId,view2}=this.viewForm2
            Api.addView2({identity_id:viewId,view_authority_id:view2}).then(res=>{
                console.log(res)
                this.$message({
                    message: res.msg,
                    type: 'success'
                });
            })
        },
        resetForm(){
            this.viewForm2.viewId='',
            this.viewForm2.view2=''
        }
    },
    created(){
        Api.getIdentity().then(res=>{
            // console.log(res)
            this.viValue=res.data
        })
        Api.getView().then(res=>{
            // console.log(res)
            this.viewValue2=res.data
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