import Vue from 'vue'
import App from './App.vue'
import './Styles/reset.css'
import '@/assets/iconfont/iconfont.css'
import router from "./router"
 import './plugins/elementUI'
 import store from './store'
//  日期格式化格式
 
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this
  }
}).$mount('#app')
