import router from './router'
import store from './store'
import {getCookie} from './utils/auth'


router.beforeEach(async(to,from,next)=>{
        if(getCookie()){
            if(to.path==="/login"){
                next('/mains')
            }else{
                let roles=store.getters.roles &&store.getters.roles.length
                if(roles){
                    next()
                }else{
                    let res=await store.dispatch('users/userInfo')
                    await store.dispatch('routerConfig/handleRouter',res.data.identity_text)
                    next()
                }
            }
        }else{
            next()
        }
})