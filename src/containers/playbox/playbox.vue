<template>
  <div id="playBox">
    <transition name="el-zoom-in-bottom">
      <div class="thesongbox">
        <songbox
          v-show="!isPlayList"
          @toPlaysong="toPlaysong"
          :songMessage="songMessage"
          @toPlay="toPlay"
          @toPlayList="toPlayList"
          :isPlay="isPlay"
        ></songbox>
      </div>
    </transition>
    <transition name="el-zoom-in-bottom">
      <div class="theplaysong" v-if="isPlaysong">
        <div id="playsong">
          <div class="el-icon-arrow-down" @click="close"></div>
          <img class="share" src="@/assets/images/share.png" />
          <el-tabs class="tab" v-model="choose" @tab-click="handleClick">
            <el-tab-pane name="recommand" :key="'recommand'">
              <span slot="label">
                <span class="pane1">推荐</span>
              </span>
              <recommand
                v-if="isRecommand"
                :songMessage="songMessage"
              ></recommand>
            </el-tab-pane>
            <el-tab-pane name="song" :key="'song'">
              <span slot="label">
                <span class="pane2">歌曲</span>
              </span>
              <song
                v-if="isSong"
                :songMessage="songMessage"
                :songCurrent="songCurrent"
                @clickProgress="clickProgress"
              ></song>
            </el-tab-pane>
            <el-tab-pane label="歌词" name="lyric" :key="'lyric'">
              <span slot="label">
                <span class="pane3">歌词</span>
              </span>
              <lyric v-if="isLyric"
                :songMessage="songMessage"
                :songCurrent="songCurrent"
              ></lyric>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </transition>
    <transition name="el-zoom-in-bottom">
      <div
        class="thesongbox"
        style="height: 8rem; background: rgba(255, 255, 255, 0.8)"
        v-if="isPlayList"
      >
        <playlist
          @close="close"
          :songList="songList"
          :songMessage="songMessage"
        ></playlist>
      </div>
    </transition>
    <audio
      autoplay
      :src="musicUrl"
      @timeupdate="updateTime"
      @canplay="getDuration"
      ref="audio"
    ></audio>
  </div>
</template>
<script>
import Playlist from '../../components/playlist/playlist.vue'
import Lyric from './lyric/lyric.vue'
import Recommand from './recommand/recommand.vue'
import Song from './song/song.vue'
import Songbox from './songbox/songbox.vue'
import axios from 'axios'
export default {
  name: 'playBox',
  components: {
    Songbox,
    Recommand,
    Song,
    Lyric,
    Playlist
  },
  data () {
    return {
      isPlaysong: false,
      isPlay: false,
      isPlayList: false,
      choose: 'song',
      isRecommand: false,
      isSong: true,
      isLyric: false,
      isShare: false,
      id: undefined,
      songMessage: {
        songName: 'RUNNIN` BACK',
        songpic:
          'http://p4.music.126.net/xx9ifMtSOmssz1Z5cHVNig==/109951163499493230.jpg',
        songAuthor: 'Leebada',
        id: '1304301317',
        lyric: []
      },
      songCurrent: {
        maxTime: '00:00',
        currentTime: '00:00',
        precent: 0,
        currentNum: 0
      },
      songList: [],
      currentSong: null,
      musicUrl: ''
    }
  },
  methods: {
    /** 获取音频总时长 */
    getDuration () {
      let maxTime = this.formatTime(this.$refs.audio.duration)
      this.songCurrent.maxTime = maxTime
    },
    /** 当前播放时间 */
    updateTime (e) {
      const { currentTime } = e.target
      let curTime =
        this.formatTime(currentTime) === 'undefined'
          ? '00:00'
          : this.formatTime(currentTime)
      this.songCurrent.currentTime = curTime
      this.songCurrent.currentNum = currentTime
      this.updateProgress(currentTime, this.$refs.audio.duration)
    },
    /** 音乐进度条 */
    updateProgress (currentTime, duration) {
      const precent = parseFloat(((currentTime / duration) * 100).toFixed(5))
      this.songCurrent.precent = precent
    },
    /** 转化歌曲格式 */
    formatTime (time) {
      if (time === 0) {
        this.curTime = '00:00'
        return
      }
      const mins =
        Math.floor(time / 60) < 10
          ? `0${Math.floor(time / 60)}`
          : Math.floor(time / 60)
      const sec =
        Math.floor(time % 60) < 10
          ? `0${Math.floor(time % 60)}`
          : Math.floor(time % 60)
      return `${mins}:${sec}`
    },
    /** 调整进度条 */
    clickProgress (precent) {
      this.$refs.audio.currentTime = (precent / 100) * (this.$refs.audio.duration)
      this.updateProgress(this.$refs.audio.currentTime, this.$refs.audio.duration)
    },
    /** 控制当前音乐盒子显隐 */
    toPlaysong (data) {
      this.isPlaysong = data
    },
    /** 控制播放 */
    toPlay (data) {
      this.isPlay = !this.isPlay
      if (data) {
        this.$refs.audio.play()
      } else {
        this.$refs.audio.pause()
      }
    },
    /** 控制打开歌单列表 */
    toPlayList (data) {
      this.isPlayList = data
    },
    /** 控制音乐盒显示具体功能界面 */
    handleClick (tab) {
      if (tab.name === 'song') {
        this.isSong = true
        this.isRecommand = false
        this.isLyric = false
      } else if (tab.name === 'recommand') {
        this.isRecommand = true
        this.isSong = false
        this.isLyric = false
      } else if (tab.name === 'lyric') {
        this.isLyric = true
        this.isSong = false
        this.isRecommand = false
      }
    },
    /** 关闭分享 */
    closeShare (data) {
      this.isShare = false
    },
    /** 关闭音乐盒具体功能界面 */
    close (data) {
      this.isPlaysong = false
      if (data === 'list') this.isPlayList = false
    },
    /** 获取当前歌曲播放url */
    async getMusicUrl (id) {
      const res = await axios({
        url: `http://localhost:3000/song/url?id=${id}`,
        withCredentials: true
      })
      this.musicUrl = res.data.data[0].url
    },
    /** 获取当前歌曲歌词 */
    async getLyrics (id) {
      const res = await axios({
        url: `http://localhost:3000/lyric?id=${id}`,
        withCredentials: true
      })
      const olyrics = res.data.lrc.lyric
      this.songMessage.lyric = this.lyricArr(olyrics)
      console.log(this.songMessage.lyric)
    },
    /** 转化歌词格式 */
    lyricArr (lyric) {
      const regNewLine = /\n/
      const regTime = /\[\d{2}:\d{2}.\d{2,3}\]/
      const lineArr = lyric.split(regNewLine) // 每行歌词的数组
      const lyricsArr = [] // 歌词对象数组 [{time: '', lyric: ''}]
      lineArr.forEach(item => {
        if (item === '') return
        const obj = {}
        const time = item.match(regTime)
        obj.lyric = item.split(']')[1].trim() === '' ? '' : item.split(']')[1].trim()
        obj.time = time ? this.formatLyricTime(time[0].slice(1, time[0].length - 1)) : 0
        obj.uid = Math.random().toString().slice(-6)
        if (obj.lyric === '') {
          console.log('这一行没有歌词')
        } else {
          lyricsArr.push(obj)
        }
      })
      return lyricsArr
    },
    /** 格式化歌词的时间 */
    formatLyricTime (time) {
      const regMin = /.*:/
      const regSec = /:.*\./
      const regMs = /\./
      const min = parseInt(time.match(regMin)[0].slice(0, 2))
      let sec = parseInt(time.match(regSec)[0].slice(1, 3))
      const ms = time.slice(time.match(regMs).index + 1, time.match(regMs).index + 3)
      if (min !== 0) {
        sec += min * 60
      }
      return Number(sec + '.' + ms)
    }
  },
  mounted () {
    this.getMusicUrl(this.songMessage.id)
    this.getLyrics(this.songMessage.id)
    this.isPlay = false
  },
  computed: {
    getSongList () {
      return this.$store.state.songList
    },
    getCurrentSong () {
      return this.$store.state.currentSong
    }
  },
  watch: {
    getSongList (newVal, oldVal) {
      this.songList = newVal
    },
    getCurrentSong (newVal, oldVal) {
      this.songMessage = newVal
      this.songMessage.songName = newVal.name
      this.songMessage.songpic = newVal.al.picUrl
      this.songMessage.songAuthor = newVal.ar[0].name
      this.getMusicUrl(newVal.id)
      this.getLyrics(newVal.id)
      this.isPlay = true
    }
  }
}
</script>
<style>
@import "./index.css";
.thehellobox {
  background: rgba(255, 255, 255, 0.6);
}
</style>
