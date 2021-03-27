<template>
    <div id="newsongs">
      <div class="words">
                    <span style="font-size:.2rem;margin-right:1.8rem;" v-if="isSong">更多新歌></span>
                    <span style="font-size:.2rem;margin-right:1.8rem;" v-if="isCD">更多新碟></span>
                    <span style="font-size:.2rem;margin-right:1.8rem;" v-if="isNumcd">更多数专></span>
        </div>
        <el-tabs>
            <el-tab-pane >
                <span slot="label" >
                    <span @click="toSong">新歌</span>
                </span>
                <song></song>
            </el-tab-pane >
            <el-tab-pane>
                <span slot="label">
                    <span @click="toCd">新碟</span>
                </span>
                <cd></cd>
            </el-tab-pane>
            <el-tab-pane >
                <span slot="label">
                    <span @click="toNumcd">数字专辑</span>
                </span>
                <numcd></numcd>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import song from '@/components/pages/first/musicstore/newsongs/song/song'
import cd from '@/components/pages/first/musicstore/newsongs/cd/cd'
import numcd from '@/components/pages/first/musicstore/newsongs/numcd/numcd'
export default {
  name: 'newsongs',
  data () {
    return {
      isSong: true,
      isCD: false,
      isNumcd: false
    }
  },
  components: {
    song,
    cd,
    numcd
  },
  methods: {
    toSong () {
      this.isSong = true
      this.isCD = false
      this.isNumcd = false
    },
    toCd () {
      this.isCD = true
      this.isSong = false
      this.isNumcd = false
    },
    toNumcd () {
      this.isNumcd = true
      this.isSong = false
      this.isCD = false
    }
  }
}
</script>
<style scoped>
#newsongs{
    width: 90%;
    height: 100%;
}
span{
    font-size: .5rem;
}
#newsongs >>> .el-tabs__item.is-active{
  color: #000;
}
.el-tabs__content{
    width: 100%;
    height: 100%;
}
.el-tabs{
    width: 100%;
    height: 100%;
}
#newsongs >>> .el-tabs__header{
  width: 70%;
  margin: 0;
}
#newsongs >>> .el-tabs__active-bar{
  background: transparent;
}
#newsongs >>> .el-tabs__nav-wrap::after {
      position: static !important;
}
.words{
  position: absolute;
  margin-left: 60%;
  margin-top: .1rem;
}
</style>
