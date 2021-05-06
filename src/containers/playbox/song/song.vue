<template>
  <div id="song">
    <!-- 歌曲封面 -->
    <div class="song-pic">
      <img class="pic" :src="songMessage.songpic" />
    </div>
    <div class="song-box">
      <div class="song-title">
        <div class="static">{{ songMessage.songName }}</div>
      </div>
      <div class="song-author">
        {{ songMessage.songAuthor }}
      </div>
      <div class="like">
        <img
          src="@/assets/images/like1.png"
          v-if="!isLike"
          @click="isLike = !isLike"
        />
        <img
          src="@/assets/images/like2.png"
          v-if="isLike"
          @click="isLike = !isLike"
        />
      </div>
      <div class="song-lyric">
        <div>{{currentLyic}}</div>
      </div>
    </div>
    <!-- 歌曲标题 -->
    <div class="song-tabs">
      <div class="el-icon-microphone"></div>
      <div class="el-icon-s-operation"></div>
      <div class="el-icon-download"></div>
      <div class="el-icon-chat-dot-square" @click="dialogVisible=true"></div>
      <div class="el-icon-more"></div>
    </div>
    <!-- 歌曲进度条 -->
    <div class="song-progrees">
      <el-slider :show-tooltip="false" v-model="precent" :max="max" @change="clickProgress()" ref="progress"></el-slider>
      <div class="song-time">
        <p>{{ currentTime }}</p>
        <p>{{ maxTime }}</p>
      </div>
    </div>
    <!-- 歌曲功能按钮 -->
    <div class="song-button">
      <img
        src="@/assets/images/onecircle.png"
        v-if="isOnly"
        @click="handlecircle"
      />
      <img
        src="@/assets/images/listcircle.png"
        v-if="isList"
        @click="handlecircle"
      />
      <img
        src="@/assets/images/random.png"
        v-if="isRandom"
        @click="handlecircle"
      />
      <!-- 控制音乐开关 -->
      <div class="el-icon-arrow-left" @click="prevSong"></div>
      <div
        class="el-icon-video-pause"
        v-if="isPlay"
        @click="toPlay"
      ></div>
      <div
        class="el-icon-video-play"
        v-if="!isPlay"
        @click="toPlay"
      ></div>
      <div class="el-icon-arrow-right" @click="nextSong"></div>
      <img src="@/assets/images/songlist.png" />
    </div>
    <el-dialog
      title="评论分析结果"
      :fullscreen="true"
      :visible.sync="dialogVisible"
      :modal="false"
      :modal-append-to-body="false"
    >
      <comment></comment>
    </el-dialog>
  </div>
</template>
<script>
import comment from '../../../components/comment/index.vue'
import axios from 'axios'
export default {
  name: 'song',
  props: ['songMessage', 'songCurrent', 'isPlay'],
  components: {
    comment
  },
  data () {
    return {
      isOnly: true,
      isList: false,
      isRandom: false,
      isLike: true,
      dialogVisible: false,
      currentTime: this.songCurrent.currentTime || '00:00',
      max: 100,
      precent: this.songCurrent.precent || 0,
      maxTime: this.songCurrent.maxTime || '00:00',
      lyric: this.songMessage.lyric || [],
      currentLyic: '',
      currentNum: 0
    }
  },
  methods: {
    /** 播放模式 */
    handlecircle () {
      if (this.isOnly) {
        this.isOnly = false
        this.isList = true
      } else if (this.isList) {
        this.isList = false
        this.isRandom = true
      } else if (this.isRandom) {
        this.isRandom = false
        this.isOnly = true
      }
    },
    /** 控制音乐播放 */
    toPlay () {
      const flag = !this.isPlay
      if (!flag) {
        this.$store.commit('updateLyricList', this.currentLyic)
      }
      this.$emit('toPlay', flag)
    },
    /** 获取歌曲评论 */
    async getSongComments () {
      const res = await axios({
        url: `http://localhost:3000/comment/music?id=${this.songMessage.id}&limit=999`,
        withCredentials: true
      })
      this.$store.commit('updateCurrentComments', res.data)
    },
    /** 进度条控制 */
    clickProgress () {
      this.$emit('clickProgress', this.precent)
    },
    /** 匹配当前歌词 */
    getLyrics () {
      const currentTime = this.currentNum
      for (let i = 0; i < this.lyric.length; i++) {
        if (currentTime > (parseInt(this.lyric[i].time))) {
          this.currentLyic = this.lyric[i].lyric
        }
      }
    },
    /** 播放上一首歌曲 */
    prevSong () {
      this.$emit('prevSong', null)
    },
    /** 播放下一首歌曲 */
    nextSong () {
      this.$emit('nextSong', null)
    }
  },
  mounted () {
    this.getSongComments()
  },
  watch: {
    songCurrent: {
      deep: true,
      handler (newVal, oldVal) {
        this.currentTime = newVal.currentTime
        this.precent = newVal.precent
        this.currentNum = newVal.currentNum
        this.getLyrics()
      }
    }
  }
}
</script>
<style scoped>
@import "./index.css";
</style>
<style>
.el-dialog__body{
  padding: 0;
  margin-top: .5rem;
}
.el-slider__bar {
  background: white;
  display: flex;
  flex-direction: column;
}
.el-slider__button {
  border: solid 2px white;
}
</style>
