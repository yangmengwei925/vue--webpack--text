import mainList from '../../router/mainList'
function filterRoutes(roles){
    let res=[];
    mainList.filter(item=>{
        let flag=true;
        if(item.meta &&item.meta.roles){
           flag= roles.some(role=>item.meta.roles.includes(role))
           if(flag) res.push(item)
        }
    })
}

const state={
    routes:[]
};
const mutations={
    setState(state,params){
        state[params.key]=params.value
    }
};
const actions={
    handleRouter({commit},params){
        return new Promise(resolve=>{
            let routes;
            if(params.includes('管理员')){
                routes=mainList
            }else{
                routes=filterRoutes(params)
            }
            commit({type:'setState',key:'routes',value:routes})
            resolve(routes)
        })
    }
};





export default {
    namespaced:true,
    state,
    mutations,
    actions
}