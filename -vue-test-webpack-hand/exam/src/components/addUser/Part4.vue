<template>
    <div class="part4">
        <el-form>
            <el-button class="btn">添加视图接口权限</el-button>
            <el-form-item class="ipt">
                <el-select  placeholder="请选择已有视图" v-model="viewForm.view">
                    <el-option v-for="(item,index) in viewValue" :key="index" :label="item.view_authority_text" :value='item.view_id'></el-option>
                </el-select>
            </el-form-item>
            <el-form-item class="btn">
                <el-button type="primary" @click="addV">确定</el-button>
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
            viewForm: {
                view: ''
            },
            viewValue:''
        }
    },
    methods:{
        addV(){
            let {view} =this.viewForm
            // console.log(this.viewValue)
            this.viewValue.map(item=>{
                // console.log(item.view_authority_id,'id')
                // console.log(view,'view')
                if(item.view_id===view){
                    console.log(item.view_id,view)//这个的打印结果是一样的，都是view_id，值也一样
                    console.log(item.view_authority_text)
                     Api.addView({view_authority_text:item.view_authority_text,view_id:view}).then(res=>{
                        console.log(res)
                        // alert(res)
                    })
                }
            })
        },
        resetForm(){
            this.viewForm.view=''
        }
    },
    created(){
        Api.getView().then(res=>{
            // console.log(res)
            this.viewValue=res.data
        })
        
    }
}
</script>

<style>
.part4{
    width: 33%;
    height: 45%;
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