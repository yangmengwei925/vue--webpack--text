import mainList from './mainList'
import store from '../store'


export function getAsData(){
    let mainL=store.getters.proRoutes.filter(item=>item.title)
    let bigType=[];
    let type=[]
    mainL.forEach(item=>{
        type.push(item.type)
    })
    let types=Array.from(new Set(type))
    for(let i=0;i<types.length;i++){
        bigType.push({type:types[i],children:[]})
    }
    bigType.forEach(item=>{
            mainL.forEach(ite=>{
                if(ite.type===item.type){
                    item.children.push(ite)
                }
            })
    })
    return bigType
}

const routes=[{
    path:'/',
    redirect:'/login'
    },
    {
        path:'/login',
        name:'login',
        component: () =>import ( /* webpackChunkName: "classify" */ '../views/login/index.vue'),
    },
    {
        path:'/mains',
        name:'mains',
        component: () =>import ( /* webpackChunkName: "classify" */ '../views/mains/index.vue'),
        children:mainList
    },   
    {
        path:'/404',
        name:'404',
        component: () =>import ( /* webpackChunkName: "classify" */ '../views/Page404/index.vue'),
    },
    {
        path:'*',
        redirect:'/404'
    },
]


export default routes