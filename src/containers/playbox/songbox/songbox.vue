<template>
    <div id="songBox">
        <img class="cd-pic" :src="songMessage.songpic" @click="toPlaysong"/>
        <div  class="box">
          <img class="cd" src="@/assets/images/cd.png" @click="toPlaysong">
          <div class="song-name" @click="toPlaysong">
              <div class="move">{{songMessage.songName}}</div>
          </div>
          <img class="play1" src="@/assets/images/play.png"/>
          <img class="play2" src="@/assets/images/songlist1.png">
        </div>
    </div>
</template>
<script>
export default {
  name: 'songBox',
  components: {
  },
  props: ['songMessage'],
  methods: {
    toPlaysong () {
      this.$emit('toPlaysong', true)
    }
  }
}
</script>
<style scoped>
 @import './index.css';
</style>
