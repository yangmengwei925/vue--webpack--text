<template>
    <div class="roomManage">
        <p class="P">教室管理</p>
        <div class="cen">
            <p class="Cenp"><el-button type="text" @click="dialogVisible=true"><span>+</span>添加教室</el-button></p>
            <el-dialog
              title="添加教室"
              :visible.sync="dialogVisible"
              width="30%">
              <div>
                <p class="P-style-block"><span class="star-red">*</span>教室号:</p>
                <el-input v-model="room_text" placeholder="教室名"></el-input>
              </div>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary"  @click="confirm">确定</el-button>
                
              </span>
            </el-dialog>
            <el-table
                :data="classRoom"
                height="200"
                :header-cell-style="{background:'#F4F7F9',color:'#000',fontWeight:'500',fontSize:'13px'}"
                style="width: 100%;">
                <el-table-column
                prop="room_text"
                label="教室号">
                </el-table-column>
                <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button style="color: #ccc;" type="text" @click="open(scope.$index, scope.row)">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import Api from "../../../../api/index"

export default {
    name:'roomManage',
     data() {
      return {
        classRoom: [],//获取到教室号
        dialogVisible: false, //弹窗
        room_text:"",//教室号
      }
    },
    created(){
      this.getAllRoom()
    },
    methods: {
      roomDelete(id) { //删除
        Api.getRoomDel({
            room_id:id
        }).then(res=>{
            this.getAllRoom()
        })
      },
      confirm(){ //确定
        this.dialogVisible=false;
        if(this.room_text){
            Api.getRoomPost({
                room_text:this.room_text
            }).then(res=>{
                this.getAllRoom()
            })
            console.log(this.room_text)
            this.room_text=""
        }else{
            this.$message({
                type: 'error',
                message: '参数不能为空'
            });
            this.room_text=""
        }

      },
      getAllRoom(){
        Api.getRoom().then(res=>{ //获取全部的教室号
            this.classRoom=res.data
            console.log(this.classRoom)
        })
      },
      open(index, row) {//点击删除打开弹框
        this.$confirm('此操作将永久删除该文件, 是否继续?', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'info',
          center:true,
        }).then(() => {
          this.roomDelete(row.room_id);
        }).catch(() => {
          this.room_text=""
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    },
    
}
</script>

<style lang="scss" scoped>
.roomManage{
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