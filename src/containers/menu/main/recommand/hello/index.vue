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
                <li style="position:relative;">
                 <img class="pic0" :src="secondSong.songpic"/>
                </li>
                <li style="position:relative;">
                 <img class="pic1" :src="thirdSong.songpic"/>
                </li>
            </ul>
            <ul class="list2">
                <li style="position:relative;">
                    <div class="box3">
                    <div class="tag0"></div>
                    <span class="tipe0" >Daily</span>
                    <span class="tipe0-1">30</span>
                    <img class="pic2" :src="recommendPic"/>
                    <span class="name">每日30首</span>
                    </div>
                </li>
                <li style="position:relative;">
                    <div class="box3">
                    <div class="tag1"></div>
                    <span class="tipe1" >New</span>
                    <img class="pic2" :src="newPic"/>
                    <span class="name">新歌推荐</span>
                    </div>
                </li>
                <li>
                    <div class="box3">
                    <div class="tag2"></div>
                    <span class="tipe2" >Sing</span>
                    <img class="pic2" :src="ktvPic"/>
                <span class="name">K歌不停</span>
                    </div>
                </li>
                <li>
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
    async getRecommendDaily () {
      const res = await axios({
        url: `http://localhost:3000/recommend/resource`,
        withCredentials: true
      })
      this.recommend = res.data
      this.recommendPic = res.data.recommend[0].picUrl
    },
    async getNewSong () {
      const res = await axios({
        url: `http://localhost:3000/personalized/newsong`,
        withCredentials: true
      })
      this.newSong = res.data
      this.newPic = res.data.result[0].picUrl
    },
    async getKTV () {
      const res = await axios({
        url: `http://localhost:3000/dj/today/perfered`,
        withCredentials: true
      })
      this.ktv = res.data.data
      this.ktvPic = res.data.data[0].picUrl
    },
    async getFriend () {
      const res = await axios({
        url: `http://localhost:3000/recommend/songs`,
        withCredentials: true
      })
      this.friends = res.data.data.dailySongs
      this.friendsPic = res.data.data.dailySongs[0].al.picUrl
      this.songList = this.friends
      // this.$store.commit('updateSongList', this.friends)
    },
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
    }
  },
  mounted () {
    this.getRecommendDaily()
    this.getNewSong()
    this.getKTV()
    this.getFriend()
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
