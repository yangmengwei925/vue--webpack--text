import Api from '../../api'
import {setCookie} from '../../utils/auth'

const state={
    token:'',
    roles:[],
    userName:'',
    userId:'',
    identityId:''
}

const mutations={
    setState(state,params){
        state[params.key]=params.value
    }
}


const actions={
    login({commit},params){
        return new Promise(resolve=>{
            Api.login(params).then(res=>{
               setCookie(res.token)
               commit({type:'setState',key:'token',value:res.token})
               resolve(res)
            })
        })
    },
    userInfo({commit}){
        return new Promise(resolve=>{
            Api.getUserInfo().then(res=>{
                let {identity_text,user_name,user_id,identity_id}=res.data
                commit({type:'setState',key:'roles',value:identity_text})
                commit({type:'setState',key:'userName',value:user_name})
                commit({type:'setState',key:'userId',value:user_id})
                commit({type:'setState',key:'identityId',value:identity_id})
                resolve(res)
            })
        })

    }
}




export default {
    namespaced:true,
    state,
    mutations,
    actions
}