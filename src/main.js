import Vue from 'vue'
import App from './App.vue'
import './Styles/reset.css'
import '@/assets/iconfont/iconfont.css'
import router from "./router"
// import './plugins/elementUI'
Vue.config.productionTip = false

import{
Button, Container,Main,Footer,Aside,Header,Icon,Menu,
Carousel,CarouselItem,MenuItem,Row,Col,Image,Popover,
Input,Table,TableColumn }  from 'element-ui'
Vue.use(Button)
Vue.use(Container)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Icon)
Vue.use(Menu)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(MenuItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Image)
Vue.use(Popover )
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)

new Vue({
  router,
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus=this
  }
}).$mount('#app')
