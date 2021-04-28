<template>
    <div id="lyric">
      <div  class="song-title">
        <div class="title">{{title}}
        </div>
        <div  class="author">{{songAuthor}}
        </div>
      </div>
      <!-- 歌曲滚动暂未实现 -->
      <div class="song-lyric">
        <el-row type="flex" justify="center" >
          <el-col :span="23" class="song-lyric" >
          <!-- 这里用内联样式来实现当前歌词的高亮显示 -->
            <el-row
              v-for="(item,index) in lyric"
              :key="index"
              :style="{'font-size': (index ? '.4rem':'.5rem')}"
              class="lyric-row"
            >{{item.text}}</el-row>
          </el-col>
        </el-row>
      </div>
      <!--
      <div class="song-button">
        <img src="@/assets/images/tan.png"/>
        <img src="@/assets/images/yi.png" v-if="!isYi"/>
        <img src="@/assets/images/yi1.png" v-if="isYi"/>
        <img src="@/assets/images/ci.png"/>
        <img src="@/assets/images/play.png"/>
      </div>
      -->
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'lyric',
  props: ['songMessage'],
  data () {
    return {
      title: 'fasaf',
      songAuthor: 'fagfsdaffa',
      isYi: true,
      lyric: []
    }
  },
  methods: {
    async getLyrics (id) {
      const res = await axios({
        url: `http://localhost:3000/lyric?id=${id}`,
        withCredentials: true
      })
      this.formatLyric(res.data.lrc.lyric)
    },
    sortRulers (a, b) {
      return a.time - b.time
    },
    formatLyric (text) {
      let arr = text.split('\n')
      let row = arr.length
      let lyric = []
      for (let i = 0; i < row; i++) {
        let tempRow = arr[i]
        let tempArr = tempRow.split(']')
        let text = tempArr.pop()

        tempArr.forEach(element => {
          let obj = {}
          let timeArr = element.substr(1, element.length - 1).split(':')
          let s = parseInt(timeArr[0] * 60 + Math.ceil(timeArr[1]))
          obj.time = s
          obj.text = text
          lyric.push(obj)
        })
      }
      lyric.sort(this.sortRulers)
      this.lyric = lyric
    }
  },
  mounted () {
    this.getLyrics(this.songMessage.id)
  },
  watch: {
    lyricCurrent () {
      this.lyric.forEach((element, index) => {
        if (this.lyricCurrent === element.time) {
          this.lyricMove.top = -index * 2.5 + 6 + 'rem'
          this.currentRow = index // 通过比较我们歌词属性里的时间与当前播放时间，来定位到该歌词
        }
      })
    }
  }
}
</script>
<style scoped>
#lyric{
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.song-title{
  width: 75%;
  display: flex;
  justify-content: center;
  align-items:flex-start;
  flex-direction: column;
}
.song-title .title{
  font-family: Arial, Helvetica, sans-serif;
  font-size: .65rem;
  margin-left: 1rem;
  color: whitesmoke;
  margin-bottom: .3rem;
}
.song-title .author{
  font-family: Arial, Helvetica, sans-serif;
  font-size: .4rem;
  margin-left: 1rem;
  margin-bottom: .3rem;
  color: whitesmoke;
}
.song-lyric{
  width: 80%;
  height: 7rem;
}
.song-button{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: .3rem;
}
.song-button img{
  width: .8rem;
}
.song-button img:nth-child(1){
  margin-right: .5rem;
}
.song-button img:nth-child(2){
  margin-right: .5rem;
}
.song-button img:nth-child(3){
  margin-right: 30%;
}
</style>
