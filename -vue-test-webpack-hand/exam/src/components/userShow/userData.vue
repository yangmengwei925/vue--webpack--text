<template>
    <div class="show1">
        <h1>用户数据</h1>
        <el-table
                :data="userData.slice((this.currentPage-1)*this.currentSize,this.currentPage*this.currentSize)"
                height="600"
                :header-cell-style="{background:'#F4F7F9',color:'#000',fontWeight:'500',fontSize:'14px'}"
                style="width: 100%;">
                <el-table-column
                prop="user_name"
                label="用户"
                width="250">
                </el-table-column>
                <el-table-column
                prop="user_pwd"
                label="密码"
                width="800">
                </el-table-column>
                <el-table-column
                prop="identity_text"
                label="身份">
                </el-table-column>
            </el-table>
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              
              layout="total,prev, pager, next"
              :total="userData.length">
            </el-pagination>
    </div>
</template>

<script>
import Api from '../../api'
export default {
    data(){
        return {
            userData:[],//获取到的所有数据
            pageList:[],//根据生成的几条数据然后渲染
            currentPage:1,//当前页
            currentSize:10
        }
    },
    methods:{
        handleSizeChange(val) {
          this.currentSize=val
          this.getTablePageList()
        console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage=val;
            this.getTablePageList();
            console.log(`当前页: ${val}`);
        },
        getTablePageList(){//分页列表
        console.log(this.currentSize)
            this.pageList=this.userData.slice((this.currentPage-1)*this.currentSize,this.currentPage*this.currentSize);
            console.log(this.pageList,'fen')
        },
    },
    created(){
        Api.getUser().then(res=>{
            // console.log(res)
            this.userData=res.data
        })
        
    }
}
</script>

<style>
.show{
    background: #fff;
}
h1{
    margin-left: 0;
}
</style>