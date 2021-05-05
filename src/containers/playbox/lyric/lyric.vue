<template>
  <div id="lyric">
    <div  class="song-title">
        <div class="title">{{songMessage.songName }}
        </div>
        <div  class="author">{{songMessage.songAuthor}}
        </div>
      </div>
    <div class="song-lyric">
      <ul ref="lyricUL">
        <li
          v-for="(item, i) in lyric"
          :style="{ color:(lyricIndex === i ? '#fff' : '#9D9D9D'),
                    fontSize:(lyricIndex === i ? '0.45rem' : '0.35rem')
                   }"
          :key="item.uid"
          :data-index="i"
          ref="lyric"
        >
          {{ item.lyric }}
        </li>
      </ul>
    </div>
      <div class="song-button">
        <img src="@/assets/images/tan.png"/>
        <img src="@/assets/images/yi.png" v-if="!isYi"/>
        <img src="@/assets/images/yi1.png" v-if="isYi"/>
        <img src="@/assets/images/ci.png"/>
        <img src="@/assets/images/play.png" v-show="false"/>
      </div>
  </div>
</template>
<script>
export default {
  name: 'lyric',
  props: ['songMessage', 'songCurrent'],
  data () {
    return {
      title: 'fasaf',
      songAuthor: 'fagfsdaffa',
      isYi: true,
      lyric: this.songMessage.lyric,
      currentNum: 0,
      lyricIndex: 0
    }
  },
  methods: {
    /** 匹配当前歌词 */
    getLyrics () {
      const currentTime = this.currentNum
      for (let i = 0; i < this.lyric.length; i++) {
        if (currentTime > (parseInt(this.lyric[i].time))) {
          const index = this.$refs.lyric[i].dataset.index
          if (i === parseInt(index)) {
            this.lyricIndex = i
            this.$refs.lyricUL.style.transform = `translateY(${200 - (30 * (i + 1))}px)`
          }
        }
      }
    }
  },
  mounted () {},
  watch: {
    songCurrent: {
      deep: true,
      handler (newVal, oldVal) {
        this.currentNum = newVal.currentNum
        this.getLyrics()
      }
    }
  }
}
</script>
<style scoped>
#lyric {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.song-title {
  width: 75%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 0.7rem;
}
.song-title .title {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.6rem;
  color: whitesmoke;
  margin-bottom: 0.3rem;
}
.song-title .author {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.4rem;
  color: whitesmoke;
}
.song-lyric {
  width: 80%;
  height: 11rem;
  overflow: scroll;
  margin-bottom: 0.3rem;
}
.song-lyric::-webkit-scrollbar{
  display: none;
}
ul{
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  text-align: center;
  overflow: hidden;
  backdrop-filter: (0.9rem);
}
.song-button {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.3rem;
}
.song-button img {
  width: 0.8rem;
}
.song-button img:nth-child(1) {
  margin-right: 0.5rem;
}
.song-button img:nth-child(2) {
  margin-right: 0.5rem;
}
.song-button img:nth-child(3) {
  margin-right: 30%;
}
</style>
