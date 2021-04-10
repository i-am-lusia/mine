import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    songList: [],
    userData: null
  },
  mutations: {
    updateUserData (state, userData) {
      state.userData = userData
    },
    updateSongList (state, songListData) {
      state.songList = songListData
    }
  }
})

export default store
