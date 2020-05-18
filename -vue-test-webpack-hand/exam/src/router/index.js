import VueRouter from  'vue-router'
import Vue from 'vue'
import routes from './routerConfig'

Vue.use(VueRouter)

let router=new VueRouter({
    routes,
    mode:'history'
})

export default router
