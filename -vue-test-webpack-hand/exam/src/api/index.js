import urls from './urls.js'
import axios from 'axios'
import {Message}  from 'element-ui'
import {getCookie,setCookie} from '../utils/auth'

const service=axios.create({
    baseURL:process.env.NODE_ENV==="production"?'/':'/api',
    timeout:5000,
})

// axios.defaults.baseURL="http://localhost:4080"

service.interceptors.request.use((config)=>{
    // console.log(config);
    return {
        ...config,
        headers:{
            ...config.headers,
            token:getCookie(),
            authorization:getCookie()
        }
    }
},(error)=>{
    Message({
        message:'请检查网络链接',
        type:'error',
        duration:2000,
    })
    return Promise.reject(error)
})

service.interceptors.response.use(response=>{
    let res=response.data
    if(res.code===1){//请求失败
        return res
    }else if(res.code===0){
        Message({
            message: res.msg,
            type: 'error',
            duration: 2000
        })
        return res
    }else{
        Message({
            message: '用户名或者密码不对',
            type: 'error',
            duration: 2000
        })
        return res
    }
},error=>{
    Message({
        message: '请求失败',//404  405 500
        type: 'error',
        duration: 2000
      });
      console.log('error',error);
    return Promise.reject(error)
})
const common=async(config)=>{
   let res= await service(config)
   return res
}

const Api={
    login:(data)=>common({url:urls.login,data,method:'post'}),
    getUserInfo:()=>common({url:urls.getUserInfo}),
    getTestType:()=>common({url:urls.getTestType}),//获取试题类型
    getSubject:()=>common({url:urls.getSubject}),//获取所有课程
    addTest:(data)=>common({url:urls.addTest,data,method:'post'}),//添加试题
    getAllTest:()=>common({url:urls.getAllTest}),//获取所有试题
    addExams:()=>common({url:urls.addExams}),//获取所有考试类型
    SelectTest:(data)=>common({url:urls.SelectTest,params:data,method:'get'}),//按条件查询

   
  
    examList:()=>common({url:urls.examList}), //考试管理-试卷列表
        // url 代表连接后台的路径    data代表要给后台传的数据   method:代表传递方式
    addExam:(data)=>common({url:urls.addExam,data,method:'post'}),//考试管理-添加试题-创建试卷 
    examDetail:(id)=>common({url:urls.examDetail,data,method:get}),//考试管理-试卷列表-试卷详情
    newTextList:(ids)=>common({url:urls.newTextList,ids,method:put}),//考试管理-添加试题-更新试卷
    examType:()=>common({url:urls.examType}),//试题管理-获取所有的考试类型
    subject:()=>common({url:urls.subject}),//试题管理-获取所有课程
    deletetest:()=>common({url:urls.deletetest,data,methid:'delete'}),//删除试卷



    addUser:(data)=>common({url:urls.addUser,data,method:'post'}), //添加用户
    updateUser:(data)=>common({url:urls.updateUser,data,method:'put'}), //更新用户
    addId:(data)=>common({url:urls.addId,params:data}), //添加身份
    addPort:(data)=>common({url:urls.addPort,params:data}), //添加api接口
    addView:(data)=>common({url:urls.addView,params:data}),//添加视图权限
    addApi:(data)=>common({url:urls.addApi,data,method:'post'}),//给身份添加api接口权限
    addView2:(data)=>common({url:urls.addView2,data,method:'post'}),//给身份设定视图权限
    getUser:()=>common({url:urls.getUser}), //获取用户--展示
    getIdentity:()=>common({url:urls.getIdentity}), //获取身份--展示
    getView:()=>common({url:urls.getView}),//获取视图权限--展示
    getApi:()=>common({url:urls.getApi}),//获取api接口权限--展示，
    getId:()=>common({url:urls.getId}),//获取身份数据
    getIdapi:()=>common({url:urls.getIdapi}),//身份和api接口关系
    getIdView:()=>common({url:urls.getIdView}),//身份和视图接口关系



    getGrade:()=>common({url:urls.getGrade}),//获取已经分配教室的班级的接口
    getRoom:()=>common({url:urls.getRoom}),//获取全部教室号
    getStudent:()=>common({url:urls.getStudent}),//获取所有已经分班的学生的接口 []
    getGradeNew:()=>common({url:urls.getGradeNew}),//获取没有分配教室的班级  []
    getStudentNew:()=>common({url:urls.getStudentNew}),//获取所有没有分班的学生接口 所有的学生
    getGradeDel:(data)=>common({url:urls.getGradeDel,data,method:'delete'}), //删除班级接口getGradeDel
    getGradeUp:(data)=>common({url:urls.getGradeUp,data,method:'put'}), //更新班级信息 //获取不到 不对
    getGradePost:(data)=>common({url:urls.getGradePost,data,method:'post'}), //添加班级接口
    getRoomDel:(data)=>common({url:urls.getRoomDel,data,method:'delete'}), //删除教室
    getRoomPost:(data)=>common({url:urls.getRoomPost,data,method:'post'}), //添加教室
    getStudentDel:(data)=>common({url:`${urls.getStudentDel}/${data.id}`,data,method:'delete'}), //删除学生接口
}

export default Api
// //考试管理-试卷列表
// export function examList(){
//     return axios.get("/exam/exam")
// }
//考试管理-试卷列表-试卷详情
// export function examDetail(id){
//     return axios.get(`/exam/exam/${id}`)
// }
// //考试管理-添加试题-创建试卷
// export function addExam(query){
//     return axios.post('/exam/exam',query)
// }
//考试管理-添加试题-更新试卷
// export function newTextList(ids){
//     return axios.put(`/exam/exam/${ids}`)
// }
// //试题管理-获取所有的考试类型
// export function examType(){
//     return axios.get('/exam/examType')
// }
//试题管理-获取所有课程
// export function subject(){
//     return axios.get('/exam/subject')
// }

//删除试卷
// export function deletetest() {
//     return axios.delete('/exam/exam/w5tcy-g2dts')
// }