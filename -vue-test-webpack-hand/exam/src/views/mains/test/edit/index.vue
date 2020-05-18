<template>
    <div class="addTest">
        <p>编辑试题</p>
        <div class="addTest-main">
            <span>题目信息</span>
            <span>题干</span>
            <el-form ref="form" :model="form" label-width="0px">
            <el-form-item label="">
                <el-input v-model="parameter.title" size="small" ></el-input>
            </el-form-item>
            <span>题目主题</span>
            <EditorBar  :content="parameter.questions_stem" @editorContent="getQuestions_stem"></EditorBar>
            <span>请选择考试类型：</span>
            <el-form-item label="">
                <el-select v-model="parameter.exam_id" placeholder="请选择活动区域">
                <el-option :label="item.exam_name" :value="item.exam_id" v-for="(item,index) in examType" :key="index"></el-option>
                </el-select>
            </el-form-item>
            <span>请选择课程类型：</span>
            <el-form-item label="">
                <el-select v-model="parameter.subject_id" placeholder="请选择活动区域">
                <el-option :label="item.subject_text" :value="item.subject_id" v-for="(item,index) in subject" :key="index"></el-option>  
                </el-select>
            </el-form-item>
            <span>请选择题目类型：</span>
            <el-form-item label="">
                <el-select v-model="parameter.questions_type_id" placeholder="请选择活动区域">
                <el-option :label="item.questions_type_text" :value="item.questions_type_id" v-for="(item,index) in testType" :key="index"></el-option>
                </el-select>
            </el-form-item>
            <div class="answer">答案信息</div>
            <EditorBar :content="parameter.questions_answer" @editorContent="getQuestions_answer_stem"></EditorBar>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            </el-form>
           
        </div>
    </div>
</template>

<script>
import Api from '../../../../api'
import store from '../../../../store'
import {Message}  from 'element-ui'
export default {
    name:'addTest',
    data(){
        return{
            testType:[],
            subject:[],
            examType:[],
             form:{
                name:'',
                desc:'',
                region:'',
                tans:'',
                test:'',
                answer:''
            },
            editor:{
                info:'',
                info2:''
            },
            parameter:{
                    questions_type_id:'',//试题类型id
                    questions_stem:'',//题干
                    subject_id:'',//课程id
                    exam_id:'',//考试类型id
                    user_id:'',//用户id
                    questions_answer:'',//题目答案
                    title:'',//试题的标题
            }
        }
    },
    mounted(){
        Api.getTestType().then(res=>{
            this.testType=res.data
        })
        Api.addExams().then(res=>{
            this.examType=res.data
        })
        Api.getSubject().then(res=>{
            this.subject=res.data
        })
        this.parameter=this.$route.query.item
        // console.log(this.parameter);
    },
    methods:{
        getQuestions_stem(data){//获取题干
                this.parameter.questions_stem=data;     
        },
        getQuestions_answer_stem(data){
                this.parameter.questions_answer=data
        },
      
        onSubmit(){
        this.parameter.user_id=store.getters.userID
        Api.addTest(this.parameter).then(res=>{
            if(res.code===1){
                this.$router.push('/mains/lookTest')
                Message({
                        message: res.msg,//404  405 500
                        type:'success',
                        duration: 2000
                    });
            }
        })
        }
    },
   
}
</script>

<style scoped lang="scss">
    
    .answer{
        margin-top: 150px;
    }
    .addTest{
        overflow: auto;
        .el-input__inner{
            width: 200px;
        }
        padding: 0 20px;
        p{
            font-size: 30px;
            font-weight: 200;
            color:#f90;
        }
        .addTest-main{
            padding: 20px;
            background: #fff;
            border-radius: 10px;
            span{
                display: block;
                margin-top: 10px;
            }
            .el-form-item{
                margin-top: 20px;
                
            }
        }
    }
</style>