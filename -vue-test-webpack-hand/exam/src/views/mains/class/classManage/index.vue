<template>
    <div class="classManage">
        <p class="P">班级管理</p>
        <div class="cen">
            <p class="Cenp"><el-button type="text" @click="addClass()"><span>+</span>添加班级</el-button></p>            
            <el-dialog
              title="添加班级"
              :visible.sync="dialogVisible"
              width="30%"
              :before-close="handleClose">
              <div>
                  <p class="P-style-block"><span class="star-red">*</span>班级名:</p>
                  <el-input v-model="paramet.grade_name" placeholder="班级名"></el-input>
                  <p class="P-style-block"><span class="star-red">*</span>教室号:</p>
                  <el-select v-model="paramet.room_id" placeholder="请输入教室号">
                      <el-option
                      v-for="(item,index) in classRoom"
                      :key="index"
                      :label="item.room_text"
                      :value="item.room_id">
                      </el-option>
                  </el-select>
                  <p class="P-style-block"><span class="star-red">*</span>课程名:</p>
                  <el-select v-model="paramet.subject_id" placeholder="课程名">
                      <el-option
                      v-for="(item,index) in allgetsubject"
                      :key="index"
                      :label="item.subject_text"
                      :value="item.subject_id">
                      </el-option>
                  </el-select>
              </div>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary"  @click="dialsubmit">提交</el-button>
              </span>
            </el-dialog>
            <el-table
                :data="getGrades"
                height="200"
                :header-cell-style="{background:'#F4F7F9',color:'#000',fontWeight:'500',fontSize:'13px'}"
                style="width: 100%;">
                <el-table-column
                prop="grade_name"
                label="用户"
                width="180">
                </el-table-column>
                <el-table-column
                prop="subject_text"
                label="密码"
                width="180">
                </el-table-column>
                <el-table-column
                prop="room_text"
                label="身份">
                </el-table-column>
                <el-table-column label="操作">
                <template slot-scope="scope">
                    <span
                    style="color: #446DFF;"
                    @click="handleEdit(scope.$index, scope.row)">编辑</span> <span style="color:#f00;">|</span>
                    <span
                    style="color: #446DFF;"
                    @click="handleDelete(scope.$index, scope.row)">删除</span>
                </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import Api from "../../../../api/index"
export default {
    name:'classManage',
     data() {
      return {
        allgetsubject:[],//获取所有的课程
        getGrades:[], //获取添加课表里面的数据
        getnewGrades:[],//新的课表数据
        dialogVisible: false, //弹窗
        grade_id:'',//id
        classRoom:[],
        addRoom:[],
        paramet:{
            grade_name:'',//班级名
            room_id:'',//教室id
            subject_id:'',//课程id
        },
        flag:false,//是否添加
      }
    },
    created(){
      this.getAllclassRoom() //获取分配好的班级
      this.getAllRoom()//获取全部教室号
      Api.getSubject().then(res=>{ //获取所有的课程
        this.allgetsubject=res.data
      })
    },
    methods: {
      addClass(){
        this.paramet.grade_name='',//班级名
        this.paramet.room_id='',//教室id
        this.paramet.subject_id='',//课程id
        this.dialogVisible=true
        this.flag=false
      },
      handleEdit(index, row) {//编辑
        this.dialogVisible=true
        this.flag=true
        this.grade_id=row.grade_id;
        this.paramet.grade_name=row.grade_name,
        this.paramet.room_id=row.room_text,
        this.paramet.subject_id=row.subject_text

      },
      handleDelete(index, row) {//删除 
        Api.getGradeDel({grade_id:row.grade_id}).then(res=>{
          this.getAllclassRoom()
        })
      },
      handleClose(done) { //点击X号关闭
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      dialsubmit(){ //上传数据
        if(this.paramet.grade_name  && this.paramet.room_id && this.paramet.subject_id){
            this.dialogVisible=false
            if(this.flag){ //更新
            console.log('更新')
            // console.log(this.grade_id,this.paramet.grade_name,this.paramet.subject_id,this.paramet.room_id)
                Api.getGradeUp({
                    grade_id:this.grade_id,
                    grade_name:this.paramet.grade_name,
                    subject_id:this.paramet.subject_id,
                    room_id:this.paramet.room_id
                }).then(res=>{
                    console.log(res)
                    if(res.code===1){
                        this.$message({
                            message: '更新成功',
                            type: 'success'
                        });
                        this.getAllclassRoom()
                    }
                })
            }else{ //添加
            console.log('班级名'+this.paramet.grade_name,'课程名'+this.paramet.subject_id,'教室名'+this.paramet.room_id)
                Api.getGradePost({
                    grade_name:this.paramet.grade_name,
                    room_id:this.paramet.room_id,
                    subject_id:this.paramet.subject_id
                }).then(res=>{
                    console.log(res,'157')
                    if(res.code===1){
                        console.log(111)
                        this.$message({
                            message: '添加成功',
                            type: 'success'
                        });
                     this.getAllclassRoom()
                    }
                })
            }
            
        }else{
          this.$message({
              message: '不能为空',
              type: 'error'
          });
        }
     },
      getAllclassRoom(){
        Api.getGrade().then(res=>{ //获取已经分配好的班级
        console.log(res,'gengxin')
          this.getGrades=res.data
        })
      },
      getAllRoom(){
        Api.getRoom().then(res=>{ //获取全部的教室号
        console.log(res,'所有教室')
            this.classRoom=res.data
        })
      },
    }
}
</script>

<style lang="scss" scoped>
.classManage{
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
           margin: 10px 0;
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
    .P-style-block{
        line-height: 30px;
    }
    .star-red{
        color: red;
        margin-right: 5px;
        vertical-align:middle;
    }
    table{
        button{
            color: rgb(9, 86, 252);
            background: none;
            cursor: pointer;
        }
    }
}

</style>