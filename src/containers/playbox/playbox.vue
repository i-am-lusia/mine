<template>
  <div id="playBox">
    <transition name="el-zoom-in-bottom">
      <div class="thesongbox">
        <songbox v-show="!isPlayList" @toPlaysong="toPlaysong" :songMessage="songMessage" @toPlay="toPlay" @toPlayList="toPlayList" :isPlay="isPlay"></songbox>
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
              <song v-if="isSong" :songMessage="songMessage"></song>
            </el-tab-pane>
            <el-tab-pane label="歌词" name="lyric" :key="'lyric'">
              <span slot="label">
                <span class="pane3">歌词</span>
              </span>
              <lyric v-if="isLyric" :songMessage="songMessage"></lyric>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </transition>
    <transition name="el-zoom-in-bottom">
      <div class="thesongbox" style="height: 8rem;background: rgba(255,255,255,.8);" v-if="isPlayList">
      <playlist @close="close" :songList="songList" :songMessage="songMessage"></playlist>
      </div>
    </transition>
  </div>
</template>
<script>
import Playlist from '../../components/playlist/playlist.vue'
import Lyric from './lyric/lyric.vue'
import Recommand from './recommand/recommand.vue'
import Song from './song/song.vue'
import Songbox from './songbox/songbox.vue'
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
      isPlay: true,
      isPlayList: false,
      choose: 'song',
      isRecommand: false,
      isSong: true,
      isLyric: false,
      isShare: false,
      id: undefined,
      songMessage: {
        songName: 'dfasgrgsgagjiodgsjugioajsiogjaiosgjaiosd',
        songpic:
          'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=739719852,2527507376&fm=26&gp=0.jpg',
        songAuthor: 'Savoir Adore',
        songLyric: 'Will you hold my hands'
      },
      songList: [],
      currentSong: null
    }
  },
  methods: {
    toPlaysong (data) {
      this.isPlaysong = data
    },
    toPlay (data) {
      this.isPlay = data
    },
    toPlayList (data) {
      this.isPlayList = data
    },
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
    closeShare (data) {
      this.isShare = false
    },
    close (data) {
      this.isPlaysong = false
      if (data === 'list') this.isPlayList = false
    }
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
      console.log(this.currentSong)
    }
  }
}
</script>
<style>
@import "./index.css";
.thehellobox{
  background: rgba(255,255,255,.6)
}
</style>
