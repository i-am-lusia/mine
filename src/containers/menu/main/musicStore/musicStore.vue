<template>
    <div id="musicstore">
      <!-- 海报 -->
        <div class="song-block" style="width: 100%;top:2.6rem;height: 3.5rem;">
          <banner :bannerData="bannerData"></banner>
        </div>
        <!-- 按钮 -->
        <div class="song-block" style="height: 2rem;">
          <div class="box" @click="goTo(1)">
                <img src="@/assets/images/singger.png">
                <span class="title">歌手</span>
            </div>
          <div class="box" @click="openRanks">
                <img src="@/assets/images/sole.png">
                <span class="title">排行</span>
          </div>
            <div class="box" @click="openItemize">
                <img src="@/assets/images/rank.png">
                <span class="title">分类歌单</span>
            </div>
            <div class="box">
                <img src="@/assets/images/radio.png">
                <span class="title">电台</span>
            </div>
            <div class="box">
                <img src="@/assets/images/live.png">
                <span class="title">直播</span>
            </div>
        </div>
        <!-- 编辑甄选 -->
        <div class="song-block" style="height: 4rem">
          <songlist :songListData="speSongList" ></songlist>
        </div>
        <!-- -->
        <div class="song-block" style="height: .8rem">
          <tags :isTags="true" :list="tag"></tags>
        </div>
        <!-- -->
        <div class="song-block" style="height: 5.6rem;margin-top: .4rem;">
          <newsongs></newsongs>
        </div>
        <!-- -->
        <div class="song-block" style="height: 4.5rem;margin-top: .3rem;">
          <rank></rank>
        </div>
        <!-- -->
        <div class="song-block" style="height: 6rem">
          <lives></lives>
        </div>
        <!-- -->
        <div class="song-block" style="height: 5.5rem">
          <classify></classify>
        </div>
        <!-- -->
        <div class="song-block" style="height: 5.4rem">
          <sole></sole>
        </div>
        <!-- -->
        <div class="song-block" style="height: 6rem">
          <musician></musician>
        </div>
        <!-- -->
      <div class="bottom"></div>
    </div>
</template>
<script>
import special from '@/components/pages/first/musicstore/special/special'
import newsongs from '@/components/pages/first/musicstore/newsongs/newsongs'
import rank from '@/components/pages/first/musicstore/rank/rank'
import lives from '@/components/pages/first/musicstore/lives/lives'
import classify from '@/components/pages/first/musicstore/classify/classify'
import sole from '@/components/pages/first/musicstore/sole/sole'
import musician from '@/components/pages/first/musicstore/musician/musician'
import allranks from '@/components/pages/first/allranks.vue'
import Banner from '../../../../components/banner/banner.vue'
import axios from 'axios'
import Tags from '../../../../components/tags/index.vue'
import songlist from '../../../../components/songlist/songlist.vue'
export default {
  name: 'musicstore',
  components: {
    special,
    newsongs,
    rank,
    lives,
    classify,
    sole,
    musician,
    allranks,
    Banner,
    Tags,
    songlist
  },
  data () {
    return {
      isSinger: false,
      isRanks: false,
      isItemize: false,
      tag: [],
      bannerData: {
        listData: []
      },
      speSongList: {
        listData: [],
        listName: '编辑甄选'
      }
    }
  },
  methods: {
    goTo (data) {
      this.$router.push({path: '/singerList'})
    },
    openSinger () {
      this.isSinger = true
    },
    closeSinger () {
      this.isSinger = false
    },
    openRanks () {
      this.isRanks = true
    },
    closeRanks () {
      this.isRanks = false
    },
    openItemize () {
      this.isItemize = true
    },
    closeItemize () {
      this.isItemize = false
    },
    async getBanner () {
      const res = await axios({
        url: `http://localhost:3000/banner`,
        withCredentials: true
      })
      this.bannerData.listData = res.data.banners
    },
    async getHotTopic () {
      var hots = []
      const res = await axios({
        url: `http://localhost:3000/search/hot`,
        withCredentials: true
      })
      hots = res.data.result.hots
      console.log(hots)
      for (var i in hots) {
        this.tag.push(hots[i].first)
      }
      console.log(this.tag)
    },
    async getRecommendSong () {
      const res = await axios({
        url: `http://localhost:3000/top/playlist?limit=10&order=new`,
        withCredentials: true
      })
      this.speSongList.listData = res.data.playlists
      console.log(res)
    }
  },
  mounted () {
    this.getBanner()
    this.getHotTopic()
    this.getRecommendSong()
  }
}
</script>
<style scoped>
@import './index.css';

</style>
