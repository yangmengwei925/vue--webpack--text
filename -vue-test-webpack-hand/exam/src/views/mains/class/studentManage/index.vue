<template>
    <div class="studentManage">
        <p class="P">学生管理</p>
        <div class="cen">
            <p class="Cenp">
                <el-input
                    placeholder="输入学生姓名"
                    size="mini"
                    suffix-icon="el-icon-date"
                    v-model="StudentName">
                </el-input>
               <el-select v-model="classroom" size="mini" filterable placeholder="请选择教室号">
                    <el-option
                    v-for="(item,index) in allclassRoom"
                    :key="index"
                    :label="item.room_text"
                    :value="item.value">
                    </el-option>
                </el-select>
                
                <el-select v-model="className" size="mini" filterable placeholder="班级名">
                    <el-option
                    v-for="item in allClassName"
                    :key="item.value"
                    :label="item.grade_name"
                    :value="item.value">
                    </el-option>
                </el-select>
                <button @click="Search()" >搜索</button><button @click="Reset()">重置</button>
            </p>
            <el-table
                :data="this.getStudents.slice((this.currentPage-1)*this.currentSize,this.currentPage*this.currentSize)"
                height="200"
                :header-cell-style="{background:'#F4F7F9',color:'#000',fontSize:'13px'}"
                style="width: 100%;">
                <el-table-column
                prop="student_name"
                label="姓名"
                width="80">
                </el-table-column>
                <el-table-column
                prop="student_id"
                label="学号"
                width="180">
                </el-table-column>
                <el-table-column
                prop="class"
                label="班级">
                </el-table-column>
                <el-table-column
                prop="classRoom"
                label="教室">
                </el-table-column>
                <el-table-column
                prop="student_pwd"
                label="密码"
                width="180">
                </el-table-column>
                <el-table-column label="操作">
                <template slot-scope="scope">
                    <span
                    style="color: #ccc;"
                    @click="handleDelete(scope.$index, scope.row)">删除</span>
                </template>
                </el-table-column>
            </el-table>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="pageSizes"
              :page-size="5"
              layout="total, sizes, prev, pager, next, jumper"
              :total="getStudents.length">
            </el-pagination>
        </div>
    </div>
</template>

<script>
import Api from "../../../../api/index"

export default {
    name:'studentManage',
     data() {
      return {
        pageSizes: [5,10,20,50,100],
        StudentName: '',//学生姓名
        classroom: '',//教室号
        className:'',//班级名
        allClassName: [],//获取所有班级号
        allclassRoom: [],//获取到所有的教室号
        getStudents:[],//获取到所有的学生
        TablePageList:[],//根据生成的几条数据然后渲染
        currentSize:0,//每页几条
        currentPage:1,//当前页
      }
    },
    methods: {
      getStudent(){
        Api.getStudentNew().then(res=>{ //获取到所有没有分班的学生
            this.getStudents=res.data
        })
      },
      handleDelete(index, row) { //删除学生
        Api.getStudentDel({id:row.student_id}).then(res=>{
            console.log(res)
          this.getStudent()
        })
      },
      Search(){ //搜索
        if(this.StudentName !== ""){
            this.getStudents = this.getStudents.filter(item=>{
                return item.student_name.includes(this.StudentName)
            })
            console.log(this.getStudents,'getStudents')
        }
      },
      Reset(){  //重置
        this.getStudent() //所有学生
        this.StudentName=''//学生姓名
        this.classroom=''//教室号
        this.className=''//班级名
      },
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
        this.TablePageList=this.getStudents.slice((this.currentPage-1)*this.currentSize,this.currentPage*this.currentSize);
        console.log(this.TablePageList,'fen')
     },
    },
    created(){
      this.getStudent()
      console.log(this.getStudents,'shs')
      Api.getRoom().then(res=>{ //获取到所有的教室号
        this.allclassRoom=res.data
      }),
      Api.getGrade().then(res=>{ //获取班级号
        this.allClassName=res.data
      })
      this.currentSize=this.pageSizes[0];// 默认每页条数
      console.log(this.currentSize,'size')

    }
}
</script>

<style lang="scss" scoped>
.studentManage{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .P{
        height: 30px;
        line-height: 30px;
        padding-left:10px; 
        margin: 10px 0;
    }
    .cen{
       flex: 1;
       border-radius: 5px;
       background: #fff;
       margin-left: 10px;
       display: flex;
       flex-direction: column;
       overflow: auto;
       overflow: hidden;
       .Cenp{
           margin: 10px 0 ;
            .el-input{
                width:140px!important;
                margin-left: 10px;
                height:32px;
            }
            .el-input__inner{
                width:140px!important;
                margin-left: 4px;
                height:32px;
            }
            .el-input--suffix .el-input__inner{
                width:140px!important;
                margin-left: 10px;
                height:32px;
            }
            .el-input__icon{
                height:116%;
            }
           button{
               width: 100px;
               height: 30px;
               line-height: 30px;
               margin-left: 10px;
               background: #446DFF;
               border: 1px solid #446DFF;
               border-radius: 5px;
               padding: 0px 8px;
               font-size: 12px;
               color: #fff;
               span{
                   font-size: 18px;
                   padding: 0px 5px;
               }
           }
       }
       .el-table{
            flex: 1;
            margin: 10px 0 10px 10px;
            overflow: auto;
       }
    }
}

</style>