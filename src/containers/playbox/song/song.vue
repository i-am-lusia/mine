<template>
    <div id="song">
      <div  class="song-pic">
        <img class="pic" :src="songMessage.songpic" />
      </div>
      <div class="song-box">
      <div  class="song-title">
        <div  class="static">{{songMessage.songName}}</div>
      </div>
      <div  class="song-author">
        {{songMessage.songAuthor}}
      </div>
      <div  class="like">
        <img src="@/assets/images/like1.png" v-if="!isLike" @click="isLike=!isLike"/>
        <img src="@/assets/images/like2.png"  v-if="isLike" @click="isLike=!isLike"/>
      </div>
      <div  class="song-lyric">
        {{songMessage.songLyric}}
      </div>
      </div>
      <div class="song-tabs">
        <div class="el-icon-microphone"></div>
        <div  class="el-icon-s-operation"></div>
        <div class="el-icon-download"></div>
        <div class="el-icon-chat-dot-square"></div>
        <div  class="el-icon-more"></div>
      </div>
      <div class="song-progrees">
        <el-slider  :show-tooltip="false" :max="max"></el-slider>
        <div  class="song-time">
        <p >{{currentTime}}</p>
        <p >{{maxTime}}</p>
        </div>
      </div>
      <div class="song-button">

        <img src="@/assets/images/onecircle.png" v-if="isOnly" @click="handlecircle"/>
        <img src="@/assets/images/listcircle.png" v-if="isList" @click="handlecircle"/>
        <img src="@/assets/images/random.png" v-if="isRandom" @click="handlecircle"/>

        <div class="el-icon-arrow-left"></div>
        <div class="el-icon-video-pause" v-if="!isPlay" @click="isPlay=!isPlay"></div>
        <div class="el-icon-video-play"  v-if="isPlay" @click="isPlay=!isPlay"></div>
        <div class="el-icon-arrow-right"></div>
        <img src="@/assets/images/songlist.png"/>
      </div>
    </div>
</template>
<script>
export default {
  name: 'song',
  props: ['songMessage'],
  data () {
    return {
      isPlay: false,
      isOnly: true,
      isList: false,
      isRandom: false,
      isLike: true,
      currentTime: '0:00',
      max: 100,
      maxTime: '0:00'
    }
  },
  methods: {
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
    Play () {
      this.isPlay = false
      this.isPause = true
    }
  }
}
</script>
<style scoped>
@import './index.css';
</style>
<style>
.el-slider__bar{
  background: white;
  display:flex;
  flex-direction: column;
}
.el-slider__button{
   border: solid 2px white;
}
</style>
