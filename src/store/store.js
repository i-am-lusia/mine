import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    songList: [],
    nearlist: [],
    userData: null,
    currentSong: null,
    fullScreen: false,
    comments: null
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
      state.fullScreen = flag
    },
    updateCurrentComments (state, data) {
      state.comments = data
    }
  }
})

export default store
