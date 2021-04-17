import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    songList: [],
    userData: null,
    currentSong: null
  },
  mutations: {
    updateUserData (state, userData) {
      state.userData = userData
    },
    updateSongList (state, songListData) {
      state.songList = songListData
    },
    updateCurrentSongData (state, currentSong) {
      state.currentSong = currentSong
    }
  }
})

export default store
