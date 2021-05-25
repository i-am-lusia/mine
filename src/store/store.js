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
    comments: null,
    lyricList: [],
    tags: [],
    singerList: [],
    nearSongList: [],
    router: {
      playbox: 0,
      musicStore: 0,
      search: 0,
      recommand: 0,
      own: 0,
      singger: 0,
      rankList: 0,
      total: 0
    }
  },
  mutations: {
    /** 更新当前用户账户信息 */
    updateUserData (state, userData) {
      state.userData = userData
    },
    /** 更新当前歌单信息 */
    updateSongList (state, songListData) {
      state.songList = songListData
    },
    /** 更新当前歌曲信息 */
    updateCurrentSongData (state, currentSong) {
      state.currentSong = currentSong
      state.nearSongList.unshift(currentSong)
      state.singerList.unshift({
        songName: currentSong.name,
        name: currentSong.ar[0].name,
        id: currentSong.ar[0].id
      })
    },
    /** 更新最近播放歌单 */
    updateNearSongList (state, songListData) {
      state.nearlist.unshift(songListData)
    },
    /** 控制全屏 */
    updateFullScreen (state, flag) {
      state.fullScreen = flag
    },
    /** 更新当前获取评论 */
    updateCurrentComments (state, data) {
      state.comments = data
    },
    /** 更新当前获取的卡点歌词 */
    updateLyricList (state, data) {
      state.lyricList.push({
        time: new Date(),
        word: data
      })
    },
    /** 更新歌单类型 */
    updateTags (state, data) {
      state.tags.push(data)
    },
    /** 积分累积 */
    updateScore (state, type) {
      state.router.total++
      switch (type) {
        case 'playbox': state.router.playbox++; break
        case 'musicStore': state.router.musicStore++; break
        case 'recommand': state.router.recommand++; break
        case 'own': state.router.own++; break
        case 'singger': state.router.singger++; break
        case 'rankList': state.router.rankList++; break
        case 'search': state.router.search++; break
      }
      console.log(state.router)
    }
  }
})

export default store
