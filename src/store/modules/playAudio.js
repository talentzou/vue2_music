const state={
    songId:'',
    songIds:[]
}
const action={

}
const mutations={
    reflection(state,value){
        state.songId=value
    },
    songsListId(state,value){
       state.songIds=value
    }

}
export default {
    namespaced: true,
    state,
    action,
    mutations,

}