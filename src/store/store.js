import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    songList: [],
    nearlist: [],
    userData: null,
    currentSong: null,
    fullScreen: false
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
    },
    updateNearSongList (state, songListData) {
      state.nearlist.unshift(songListData)
    },
    updateFullScreen (state, flag) {
      console.log(flag)
      state.fullScreen = flag
    }
  }
})

export default store
