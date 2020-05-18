const mainList=[
    {
        path:'addTest',
        name:'addTest',
        title:"添加试题",
        type:'试题管理',
        component: () =>import ( /* webpackChunkName: "classify" */ '../views/mains/test/addTest/index.vue'),
        meta:{
            roles:['出题者','浏览者']
        }
    },
    {
        path:'edit',
        name:'edit',
        component: () =>import ( /* webpackChunkName: "classify" */ '../views/mains/test/edit/index.vue'),
    },
    {
        path:'lookTest',
        name:'lookTest',
        title:"查看试题",
        type:'试题管理',
        component: () =>import ( /* webpackChunkName: "classify" */ '../views/mains/test/lookTest/index.vue'),
        meta:{
            roles:['出题者']
        }
    },
    {
        path:'testType',
        name:'testType',
        title:"试题类型",
        type:'试题管理',
        component: () =>import ( /* webpackChunkName: "classify" */ '../views/mains/test/testType/index.vue')
    },
    {
        path:'addUser',
        name:'addUser',
        title:"添加用户",
        type:'用户管理',
        component: () =>import ( /* webpackChunkName: "classify" */ '../views/mains/user/addUser/index.vue')
    },
    {
        path:'userInformation',
        name:'userInformation',
        title:"用户展示",
        type:'用户管理',
        component: () =>import ( /* webpackChunkName: "classify" */ '../views/mains/user/userInformation/index.vue')
    },
    {
        path:'addExam',
        name:'addExam',
        title:"添加试卷",
        type:'考试管理',
        component: () =>import ( /* webpackChunkName: "classify" */ '../views/mains/examination/addExam/index.vue')
    },{
        path:'createText',
        name:'createText',
        component:() =>import('../views/mains/examination/createText')
    },
    {
        path:'examList',
        name:'examList',
        title:"试卷列表",
        type:'考试管理',
        component: () =>import ( /* webpackChunkName: "classify" */ '../views/mains/examination/examList/index.vue')
    },{
        path:'detail',
        name:'detail',
        component:() =>import('../views/mains/examination/detail')
    },
    {
        path:'classManage',
        name:'classManage',
        title:"班级管理",
        type:'班级管理',
        component: () =>import ( /* webpackChunkName: "classify" */ '../views/mains/class/classManage/index.vue'),
        meta:{
            roles:['出题者']
        }
    },
    {
        path:'roomManage',
        name:'roomManage',
        title:"教室管理",
        type:'班级管理',
        component: () =>import ( /* webpackChunkName: "classify" */ '../views/mains/class/roomManage/index.vue'),
        meta:{
            roles:['出题者']
        }
    },
    {
        path:'studentManage',
        name:'studentManage',
        title:"学生管理",
        type:'班级管理',
        component: () =>import ( /* webpackChunkName: "classify" */ '../views/mains/class/studentManage/index.vue'),
        meta:{
            roles:['出题者']
        }
    }
]


export default mainList