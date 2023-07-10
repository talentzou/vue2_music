const state={
   cookie:'',
   token:''
}
const action={

}
const mutations={
  set_cookie(state,value){
    state.cookie=value
  },
  set_token(state,value){
      state.token=value
  }

}
export default {
    namespaced: true,
    state,
    action,
    mutations,

}