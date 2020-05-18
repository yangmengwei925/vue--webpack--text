const urls={
    login:'/user/login',
    getUserInfo:'/user/userInfo',
    getTestType:'/exam/getQuestionsType',
    addTest:'/exam/questions',
    addExams:'/exam/examType',
    getSubject:'/exam/subject',
    getAllTest:'/exam/questions/new',
    SelectTest:'/exam/questions/condition',

    examList:'/exam/exam',// //考试管理-试卷列表
    addExam:'/exam/exam',//考试管理-添加试题-创建试卷
    // examDetail:(`/exam/exam/${id}`),//考试管理-试卷列表-试卷详情
    // newTextList:(`/exam/exam/${ids}`),//考试管理-添加试题-更新试卷
    examType:('/exam/examType'),///试题管理-获取所有的考试类型
    subject:('/exam/subject'),//试题管理-获取所有课程
    deletetest:('/exam/exam/w5tcy-g2dts'),//删除试卷


    addUser:'/user',//添加用户
    updateUser:'/user/user',//更新用户
    addId:'/user/identity/edit',//添加身份
    addPort:'/user/authorityApi/edit',//添加api接口
    addView:'/user/authorityView/edit',//添加视图权限
    addApi:'/user/setIdentityApi',//给身份添加api接口权限
    addView2:'/user/setIdentityView',//给身份设定视图权限
    getUser:'/user/user',//获取用户--展示
    getIdentity:'/user/identity',//获取身份id--展示
    getView:'/user/view_authority',//获取视图权限--展示
    getApi:'/user/api_authority',//获取api接口权限--展示,
    getId:'/user/identity',//获取身份数据
    getIdapi:'/user/identity_api_authority_relation',//身份和api接口关系
    getIdView:'/user/identity_view_authority_relation',//身份和视图接口关系


    getGrade:'/manger/grade',//获取已经分配教室的班级
    getRoom:'/manger/room',//获取全部教室
    getStudentNew:'/manger/student/new',//获取所有没有分班的学生接口
    getGradeNew:'/manger/grade/new', //获取没有分配教室的班级
    getStudent:'/manger/student',//获取所有已经分班的学生的接口
    getGradeDel:'/manger/grade/delete',//删除班级接口
    getGradeUp:'/manger/grade/update',//更新班级信息
    getGradeAdd:'/manger/grade',//添加班级接口 post
    getRoomDel:'/manger/room/delete',//删除教室接口
    getRoomUp:'/manger/room/update',//更新班级接口
    getRoomPost:'/manger/room',//添加教室接口
    getGradePost:'/manger/grade',//添加班级接口
    getStudentDel:`/manger/student`, //删除学生接口
}

export default urls