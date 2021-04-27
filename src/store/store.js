import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    songList: [],
    nearlist: [],
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
      console.log(currentSong)
    },
    updateNearSongList (state, songListData) {
      state.nearlist.unshift(songListData)
    }
  }
})

export default store
