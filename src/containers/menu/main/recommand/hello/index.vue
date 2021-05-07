<template>
    <div id="hello">
        <div class="box1">
            <span>Hi</span>
            <span>{{nickname}}</span>
            <span>今日为你打造</span>
        </div>
        <div class="box2">
            <div class="cdm">
            <img style="width:3rem;height:3rem;position:absolute;z-index:3;margin-top:.5rem;margin-left:.8rem;" src="@/assets/images/cd.png"/>
            </div>
            <ul class="list1" >
                <li style="position:relative;">
                  <img class="pic" :src="currentSong.songpic"/>
                </li>
                <li style="position:relative;" @click="playSong(secondSong)">
                 <img class="pic0" :src="secondSong.songpic"/>
                </li>
                <li style="position:relative;" @click="playSong(thirdSong)">
                 <img class="pic1" :src="thirdSong.songpic"/>
                </li>
            </ul>
            <ul class="list2">
                <li style="position:relative;" @click="playItem(recommend)">
                    <div class="box3">
                    <div class="tag0"></div>
                    <span class="tipe0" >Daily</span>
                    <span class="tipe0-1">30</span>
                    <img class="pic2" :src="recommendPic"/>
                    <span class="name">每日30首</span>
                    </div>
                </li>
                <li style="position:relative;" @click='playItem (newSong)'>
                    <div class="box3">
                    <div class="tag1"></div>
                    <span class="tipe1" >New</span>
                    <img class="pic2" :src="newPic"/>
                    <span class="name">新歌推荐</span>
                    </div>
                </li>
                <li @click="playItem (ktv)">
                    <div class="box3">
                    <div class="tag2"></div>
                    <span class="tipe2" >Sing</span>
                    <img class="pic2" :src="ktvPic"/>
                <span class="name">K歌不停</span>
                    </div>
                </li>
                <li @click="playItem (friends)">
                    <div class="box3">
                    <div class="tag3"></div>
                    <span class="tipe3" >Friends</span>
                    <img class="pic2" :src="friendsPic"/>
                    <span class="name">好友热播</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      nickname: this.$store.state.userData ? this.$store.state.userData.profile.nickname : null,
      recommend: null,
      recommendPic: null,
      newSong: null,
      newPic: null,
      ktv: null,
      ktvPic: null,
      friends: null,
      friendsPic: null,
      songList: this.$store.state.songList ? this.$store.state.songList : null,
      currentSong: this.$store.state.currentSong ? this.$store.state.currentSong : {songpic: null},
      secondSong: {songpic: null},
      thirdSong: {songpic: null}
    }
  },
  methods: {
    /** 获取推荐单目 */
    async getRecommendDaily () {
      const res = await axios({
        url: `http://localhost:3000/recommend/resource`,
        withCredentials: true
      })
      this.recommend = res.data.recommend[0]
      this.recommendPic = res.data.recommend[0].picUrl
      this.ktv = res.data.recommend[1]
      this.ktvPic = res.data.recommend[1].picUrl
      this.newSong = res.data.recommend[2]
      this.newPic = res.data.recommend[2].picUrl
      this.friends = res.data.recommend[3]
      this.friendsPic = res.data.recommend[3].picUrl
    },
    /** 当前歌曲下一首 */
    getSecondSong () {
      if (this.currentSong) {
        const flag = this.songList.indexOf(this.currentSong)
        if (flag === -1) return
        if (flag < this.songList.length - 2) {
          this.secondSong = this.songList[flag + 1]
          this.secondSong.songpic = this.songList[flag + 1].al.picUrl
          this.thirdSong = this.songList[flag + 2]
          this.thirdSong.songpic = this.songList[flag + 2].al.picUrl
        }
      }
    },
    /** 获取详细歌单内容 */
    async getData (id) {
      var url = `http://localhost:3000/playlist/detail?id=${id}`
      const res = await axios({
        url: url,
        withCredentials: true
      })
      var tags = res.data.playlist.tags
      tags.map((item) => { this.$store.commit('updateTags', item) })
      const songs = res.data.playlist.tracks
      this.$store.commit('updateSongList', songs)
      this.$store.commit('updateNearSongList', res.data.playlist)
      this.$store.commit('updateCurrentSongData', songs[0])
    },
    /** 跳转播放歌单 */
    playItem (data) {
      this.getData(data.id)
    },
    /** 跳转播放歌曲 */
    playSong (data) {
      this.$store.commit('updateCurrentSongData', data)
    }
  },
  mounted () {
    this.getRecommendDaily()
    this.getSecondSong()
  },
  computed: {
    userData () {
      return this.$store.state.userData
    },
    songListData () {
      return this.$store.state.songList
    },
    computedCurrentSong () {
      return this.$store.state.currentSong
    }
  },
  watch: {
    userData (newVal, oldVal) {
      this.nickname = newVal.profile.nickname
    },
    songListData (newVal, oldVal) {
      this.songList = newVal
    },
    computedCurrentSong (newVal, oldVal) {
      this.currentSong = newVal
      this.getSecondSong()
    }
  }
}
</script>
<style scoped>
@import './index.css';
</style>
