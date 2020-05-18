<template>
    <div class="testType">
        <p>试题分类</p>
        <Modal  :showFlag="showFlag" @close="showFlag=false">
          <h3 slot="modal-top">创建新类型</h3>
          <input type="text" placeholder="请输入类型名称" slot="modal-main">
        </Modal>
        <div class="testType-text">
            <el-button type="primary" class="btn" @click="addTestType">+ 添加类型</el-button>
            <el-table
            :data="AllTestType"
            style="width: 100%">
            <el-table-column
            label="类型ID"
            width="520"
            align="center"
           >
            <template slot-scope="scope" >
                <!-- <i class="el-icon-time"></i> -->
                <span style="margin-left: 10px">{{ scope.row.questions_type_id }}</span>
            </template>
            </el-table-column>
            <el-table-column
            label="类型名称"
            width="520"
            align="center">
            <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                <p>类型: {{ scope.row.questions_type_text }}</p>
                <!-- <p>住址: {{ scope.row.address }}</p> -->
                <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.questions_type_text }}</el-tag>
                </div>
                </el-popover>
            </template>
            </el-table-column>
            <el-table-column label="操作" width="520" align="center">
            <template slot-scope="scope">
                <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
        </div>
        
    </div>
</template>

<script>
import Api from '../../../../api'
export default {
    name:'testType',
    data() {
      return {
        AllTestType:[],
        showFlag:false
      }
    },
    methods: {
      addTestType(){
          this.showFlag=true
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }},
      mounted(){
        Api.getTestType().then(res=>{
            console.log(res)
          this.AllTestType=res.data
        })
      }
}
</script>

<style scoped lang="scss">
    p{
        margin-left: 20px;
        font-size: 30px;
        font-weight: 200;
        color:#f90;
    }
    input{
      width: 80%;
      height: 50px;
      margin-left: 50px;
      padding: 0 20px;
    }
    .testType-text{
      
        .btn{
            margin: 20px;
        }
        background: #fff;
        border-radius: 10px;
        padding: 10px 20px;
        margin: 20px;
    }
</style>