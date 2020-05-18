import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './components/index.js'
import ElementUI from 'element-ui';
import store from './store'
import './routerFilter'



Vue.use(ElementUI)
new Vue({
    el:'#app',
    store,
    router,
    template:'<App/>',
    components:{App}
})