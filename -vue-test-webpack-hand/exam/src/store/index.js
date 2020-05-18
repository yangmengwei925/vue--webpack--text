import Vuex,{Store} from 'vuex'
import rootModule from './rootModule'
import modules from './modules'
import Vue from 'vue'


Vue.use(Vuex)

const store=new Store({
    ...rootModule,
    modules
})

window.store=store

export default store