<template>
  <div id="musicstore">
    <!-- 海报 -->
    <div class="song-block" style="width: 100%; top: 2.6rem; height: 3.5rem">
      <banner :bannerData="bannerData"></banner>
    </div>
    <!-- 按钮 -->
    <div class="song-block" style="height: 2rem">
      <div class="box" @click="goTo(1)">
        <img src="@/assets/images/singger.png" />
        <span class="title">歌手</span>
      </div>
      <div class="box" @click="goTo(2)">
        <img src="@/assets/images/sole.png" />
        <span class="title">排行</span>
      </div>
      <div class="box" @click="goTo(3)">
        <img src="@/assets/images/rank.png" />
        <span class="title">分类歌单</span>
      </div>
      <div class="box">
        <img src="@/assets/images/radio.png" />
        <span class="title">电台</span>
      </div>
      <div class="box">
        <img src="@/assets/images/live.png" />
        <span class="title">直播</span>
      </div>
    </div>
    <!-- 编辑甄选 -->
    <div class="song-block" style="height: 4rem">
      <songlist :songListData="speSongList"></songlist>
    </div>
    <!-- 热门话题 -->
    <div class="song-block" style="height: 0.8rem">
      <tags :isTags="true" :list="tag"></tags>
    </div>
    <!-- 新歌推荐 -->
    <div class="song-block" style="width: 90%; height: 5.6rem">
      <el-tabs>
        <el-tab-pane>
          <span slot="label">
            <span>新歌</span>
          </span>
          <recommandSongList :songListData="newSong"></recommandSongList>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">
            <span>新碟</span>
          </span>
          <recommandSongList :songListData="newAblum"></recommandSongList>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">
            <span>数字专辑</span>
          </span>
          <div id="numcd">
            <img
              style="
                width: 3rem;
                height: 3rem;
                border-radius: 0.3rem;
                position: absolute;
                margin-top: 0.3rem;
              "
              :src="products.coverUrl"
            />
            <div
              style="
                width: 100%;
                height: 3.5rem;
                display: flex;
                flex-direction: row;
              "
            >
              <img
                style="
                  width: 3rem;
                  height: 3rem;
                  margin-top: 0.3rem;
                  margin-left: 0.5rem;
                "
                src="@/assets/images/cd.png"
              />
              <div style="
                    width: 5rem;
                    height: 4rem;
                    margin-top: .2rem;
                    margin-left: .4rem;
                    height: 3rem;
                    display: flex;
                    flex-direction: column;
              ">
                <span
                  style="
                    font-size: 0.5rem;
                    font-family: Helvetica;
                    color: black;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    margin-top: 0.1rem;
                  "
                  >{{ products.albumName }}</span
                >
                <span class="singger">{{ products.artistName }}</span>
                <el-button round>立即支持</el-button>
                <div class="sell">
                  <span>已售</span><span>{{ products.saleNum }}</span
                  ><span>万张</span>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- -->
        <div class="song-block" style="height: 4.5rem;margin-top: .8rem;">
          <rank></rank>
        </div>
    <!--
        <div class="song-block" style="height: 6rem">
          <lives></lives>
        </div> -->
    <!--
        <div class="song-block" style="height: 5.5rem">
          <classify></classify>
        </div> -->
    <!--
        <div class="song-block" style="height: 5.4rem">
          <sole></sole>
        </div> -->
    <!--
        <div class="song-block" style="height: 6rem">
          <musician></musician>
        </div> -->
    <div class="bottom"></div>
  </div>
</template>
<script>
import special from '@/components/pages/first/musicstore/special/special'
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
import recommandSongList from '../../../../components/recommandSongList/recommandSongList.vue'
export default {
  name: 'musicstore',
  components: {
    special,
    rank,
    lives,
    classify,
    sole,
    musician,
    allranks,
    Banner,
    Tags,
    songlist,
    recommandSongList
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
      newSong: {
        listData: []
      },
      newAblum: {
        listData: []
      },
      products: {
        coverUrl: undefined
      },
      speSongList: {
        listData: [],
        listName: '编辑甄选'
      }
    }
  },
  methods: {
    goTo (data) {
      switch (data) {
        case 1 : this.$router.push({ path: '/singerList' }); return
        case 2 : this.$router.push({ path: '/rankList' }); return
        case 3 : this.$router.push({ path: '/songList' })
      }
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
      for (var i in hots) {
        this.tag.push(hots[i].first)
      }
    },
    async getRecommendSong () {
      const res = await axios({
        url: `http://localhost:3000/top/playlist?limit=10&order=new`,
        withCredentials: true
      })
      this.speSongList.listData = res.data.playlists
    },
    async getNewSong () {
      let albums = []
      const res = await axios({
        url: `http://localhost:3000/personalized/newsong?limit=9`,
        withCredentials: true
      })
      for (let i = 0; i < res.data.result.length;) {
        albums.push(res.data.result.slice(i, (i += 3)))
      }
      this.newSong.listData = albums
    },
    async getNewNumberAblum () {
      const res = await axios({
        url: `http://localhost:3000/album/list?limit=1`,
        withCredentials: true
      })
      this.products = res.data.products[0]
    },
    async getNewAblum () {
      let albums = []
      const res = await axios({
        url: `http://localhost:3000/album/new?limit=9`,
        withCredentials: true
      })
      for (let i = 0; i < res.data.albums.length;) {
        albums.push(res.data.albums.slice(i, i += 3))
      }
      this.newAblum.listData = albums
    }
  },
  mounted () {
    this.getBanner()
    this.getHotTopic()
    this.getRecommendSong()
    this.getNewSong()
    this.getNewNumberAblum()
    this.getNewAblum()
  }
}
</script>
<style scoped>
@import "./index.css";

</style>
