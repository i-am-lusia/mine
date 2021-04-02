<template>
    <div id="songBox">
        <img class="cd-pic" :src="songMessage.songpic" @click="toPlaysong"/>
        <div  class="box">
          <img class="cd" src="@/assets/images/cd.png" @click="toPlaysong">
          <div class="song-name" @click="toPlaysong">
              <div class="move">{{songMessage.songName}}</div>
          </div>
          <div :class="{'el-icon-video-play': isPlay,'el-icon-video-pause': !isPlay,'play1':true}" @click="toPlay"></div>
          <img class="play2" src="@/assets/images/songlist1.png" @click="isPlayList">
        </div>
    </div>
</template>
<script>
export default {
  name: 'songBox',
  components: {
  },
  props: ['songMessage', 'isPlay'],
  methods: {
    toPlaysong () {
      this.$emit('toPlaysong', true)
    },
    toPlay () {
      const flag = !this.isPlay
      this.$emit('toPlay', flag)
    },
    isPlayList () {
      this.$emit('toPlayList', true)
    }
  }
}
</script>
<style scoped>
 @import './index.css';
</style>
