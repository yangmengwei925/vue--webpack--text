<template>
    <div class="lookTest">
        <p>查看试题</p>
        <div class="look-title">
            <div class="lootype">
                <span>课程类型：</span>
                <div @click="handleAll" :class="all.flag?'active':''">{{all.all}}</div>
                <div v-for="(item,index) in subject" :key="item.subject_id" :class="item.flag?'active':''" @click="handleItem(index)">{{item.subject_text}}</div>
            </div>
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="考试类型：">
                    <el-select v-model="formInline.exam_id" placeholder="">
                    <el-option :label="item.exam_name" :value="item.exam_id" v-for="(item,index) in addExam" :key="index" ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="题目类型：">
                    <el-select v-model="formInline.questions_type_id" placeholder="">
                    <el-option :label="item.questions_type_text" :value="item.questions_type_id" v-for="(item,index) in testType" :key="index"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">查询</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div class="look-main">
                <div class="main-list"  v-for="item in list" :key="item.questions_id">
                    <div class="list-left">
                        <div>{{item.title}}</div>
                        <div class="list-center"><el-tag>{{item.questions_type_text}}</el-tag><el-tag type="warning">{{item.subject_text}}</el-tag><el-tag type="danger">{{item.exam_name}}</el-tag></div>
                        <div>{{item.user_name}}发布</div>
                    </div>
                    <div class="list-right" @click="edit(item)">
                        编辑
                    </div>
                </div>
            
        </div>
    </div>
</template>

<script>
 import Api from '../../../../api'
export default {
    name:'lookTest',
    data() {
      return {
        list:[],//获取查询到的试题
        testType:[],//获取试题类型
        addExam:[],
        subject:[],
        index:0,
        formInline: {
          questions_type_id: '',
          exam_id:"",
          subject_id:''
        },
        ind:0,
        all:{
            all:"all",
            flag:false,
        }
      }
    },
    mounted(){
        Api.getAllTest().then(res=>{
            this.list=res.data
        })
        Api.getTestType().then(res=>{
            this.testType=res.data
        })
        Api.addExams().then(res=>{
            this.addExam=res.data
        })
        Api.getSubject().then(res=>{
            let data=JSON.parse(JSON.stringify(res.data))
            data.forEach(item=>{
                item.flag=false
            })
            this.subject=data
        })
    },
    methods: {
      edit(item){
          this.$router.push({path:'/mains/edit',query:{item}})
      },
      onSubmit() {
          let obj={}
          for(let key in this.formInline){
              if(this.formInline[key]!=="") obj[key]=this.formInline[key]
          }
        Api.SelectTest(obj).then(res=>{
            this.list=res.data
        })
      },
      handleAll(){
          this.all.flag=!this.all.flag
          this.subject.forEach(item=>{
              item.flag=this.all.flag
          })
      },
      handleItem(index){
          this.all.flag=false;
          this.subject.forEach(item=>{
              item.flag=false
          })
          this.subject[index].flag=true
          this.formInline.subject_id=this.subject[index].subject_id
      }
    }
}
</script>

<style scoped lang="scss">
    .el-form-item{
        margin-right: 100px;
    }
    .lookTest{
        padding: 0 20px;
        p{
            font-size: 30px;
            font-weight: 200;
            color:#f90;
        }
        .look-title{
            background: #fff;
            border-radius: 10px;
            padding: 30px 30px;
            .lootype{
                display: flex;
                margin-bottom: 30px;
                font-size: 10px;
                span{
                    font-size: 14px;
                }
                div{
                    margin: 0 10px;
                    padding: 2px 4px;
                    border-radius: 2px;
                    &.active{
                        background: blue;
                        color:#fff;
                    }
                }
            }
        }
        .look-main{
            background: #fff;
            border-radius: 10px;
            margin-top: 50px;
            padding: 30px 30px;
            .main-list{
                border-bottom: 1px solid #ccc;
                display: flex;
                 vertical-align: middle;
                justify-content: space-between;
                 div{
                        margin-bottom: 15px;
                    }
                .list-center{
                    .el-tag{
                        margin-right: 20px;
                    }
                }
                .list-right{
                  margin-top: 45px;
                  color:blue;
                }
            }
        }
    }
</style>