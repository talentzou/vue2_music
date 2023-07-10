
import Vue from 'vue'
import Vuex from 'vuex'
import playAudio from './modules/playAudio'
import personData from './modules/personData'
Vue.use(Vuex)
export default new Vuex.Store({
    //准备state——用于存储数据
    // state: {
    //     songid:''
    // },
    // getters: {
    // },
    // actions: {
    // },
    // mutations: {
    //     reflection(state,value){
    //         state.songid=value
          
    //     }

    // },
   
  
modules:{
    playAudio,
    personData,
}
})