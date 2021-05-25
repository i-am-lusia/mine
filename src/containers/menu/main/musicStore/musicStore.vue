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
              <div
                style="
                  width: 5rem;
                  height: 4rem;
                  margin-top: 0.2rem;
                  margin-left: 0.4rem;
                  height: 3rem;
                  display: flex;
                  flex-direction: column;
                "
              >
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
    <!-- 排行榜 -->
    <div
      class="song-block"
      style="
        width: 90%;
        height: 4.5rem;
        margin-left: 5%;
        margin-top: 0.8rem;
        display: flex;
        flex-direction: column;
      "
    >
      <div
        style="width: 100%; height: 0.8rem; display: flex; flex-direction: row"
      >
        <span style="font-size: 0.5rem; margin-right: 65%">排行榜</span>
      </div>
      <div class="rankBox">
        <ul>
          <li v-for="(item, index) in rankList" :key="index" @click="goToDetail(2, item.id)">
            <img :src="item.coverImgUrl" />
            <div class="box">
              <div class="message">
                <div>
                  <span class="name">{{ item.name }}</span>
                  <div>
                    01<span
                      >{{ item.tracks[0].first }}-{{
                        item.tracks[0].second
                      }}</span
                    >
                  </div>
                  <div>
                    02<span
                      >{{ item.tracks[1].first }}-{{
                        item.tracks[1].second
                      }}</span
                    >
                  </div>
                  <div>
                    03<span
                      >{{ item.tracks[2].first }}-{{
                        item.tracks[2].second
                      }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 直播 -->
    <div class="song-block" style="height: 5rem">
      <live :liveData="liveData"></live>
    </div>
    <!-- 分类专区 -->
    <div
      class="song-block"
      style="
        width: 90%;
        height: 5.5rem;
        margin-top: 0.5rem;
        margin-left: 5%;
        flex-direction: column;
      "
    >
      <div style="width: 100%; height: 0.8rem">
        <span style="font-size: 0.5rem">分类专区</span>
      </div>
      <div class="classify">
        <ul>
          <li v-for="(item, index) in classifyData" :key="index">
            <div style="display: flex; flex-direction: column">
              <img
                style="width: 5rem; height: 4rem; border-radius: 0.3rem"
                :src="item.picUrl"
              />
              <div class="tag">
                <div>
                  <span>{{ item.name }}</span>
                </div>
              </div>
              <span
                style="
                  margin-top: 0.1rem;
                  font-size: 0.35rem;
                  color: black;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                "
                >{{ item.rcmdText }}</span
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 独家内容 -->
    <div
      class="song-block"
      style="
        width: 90%;
        height: 5.4rem;
        margin-left: 5%;
        display: flex;
        flex-direction: column;
      "
    >
      <div style="width: 100%; height: 0.8rem">
        <span style="font-size: 0.5rem">独家内容</span>
      </div>
      <div class="classify">
        <ul>
          <li v-for="(item, index) in soleList" :key="index">
            <div style="width: 6rem; display: flex; flex-direction: column">
              <img
                style="width: 6rem; height: 4rem; border-radius: 0.3rem"
                :src="item.sPicUrl"
              />
              <span
                style="
                  font-size: 0.4rem;
                  color: black;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                "
                >{{ item.name }} | {{ item.message }}</span
              >
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 音乐 -->
    <div
      class="song-block"
      style="height: 6.5rem; width: 90%; margin-left: 5%; flex-direction: column"
    >
      <div style="width: 100%; height: 0.8rem">
        <span style="font-size: 0.5rem">乐人</span>
      </div>
      <div class="classify">
        <ul>
          <li v-for="(item, index) in musician" :key="index" @click="goToDetail(1,item.id)">
            <div
              style="
                width: 5rem;
                height: 5rem;
                display: flex;
                flex-direction: column;
              "
            >
              <div
                style="
                  width: 100%;
                  height: 3.5rem;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  background-color: rgba(93, 93, 93, 0.2);
                  border-radius: 0.3rem;
                "
              >
                <img
                  style="width: 3rem; height: 3rem; border-radius: 0.3rem"
                  :src="item.img1v1Url"
                />
              </div>
              <div
                style="
                  margin-left: 1rem;
                  margin-top: 2.8rem;
                  width: 1rem;
                  height: 0.5rem;
                  position: absolute;
                  color: white;
                  font-size: 0.3rem;
                  background-color: silver;
                  border-radius: 0.3rem;
                "
              >
                <div
                  style="
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 0.4rem;
                  "
                >
                  <div class="el-icon-caret-right"></div>
                </div>
              </div>
              <div
                style="
                  width: 100%;
                  height: 1.5rem;
                  margin-top: 0.1rem;
                  display: flex;
                  flex-direction: row;
                "
              >
                <img
                  style="
                    width: 1.2rem;
                    height: 1.2rem;
                    margin-right: 0.2rem;
                    border-radius: 50%;
                  "
                  :src="item.picUrl"
                />
                <div
                  style="
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                  "
                >
                  <span style="font-size: 0.4rem">{{ item.name }}</span>
                  <span style="font-size: 0.4rem; color: gray">{{
                    item.alias[0]
                  }}</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom"></div>
  </div>
</template>
<script>
import Banner from '../../../../components/banner/banner.vue'
import axios from 'axios'
import Tags from '../../../../components/tags/index.vue'
import songlist from '../../../../components/songlist/songlist.vue'
import recommandSongList from '../../../../components/recommandSongList/recommandSongList.vue'
import Live from '../../../../components/lives/live.vue'
export default {
  name: 'musicstore',
  components: {
    Banner,
    Tags,
    songlist,
    recommandSongList,
    Live
  },
  data () {
    return {
      isSinger: false,
      isRanks: false,
      isItemize: false,
      tag: [],
      classifyData: [],
      soleList: [],
      liveData: {
        title: '直播',
        listData: []
      },
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
      },
      rankList: [],
      musician: []
    }
  },
  methods: {
    goTo (data) {
      switch (data) {
        case 1:
          this.$router.push({ path: '/singerList' })
          return
        case 2:
          this.$router.push({ path: '/rankList' })
          return
        case 3:
          this.$router.push({ path: '/songList' })
      }
    },
    goToDetail (index, id) {
      switch (index) {
        case 1:
          this.$router.push({path: '/singerDetail', query: {id: id}})
          return
        case 2:
          this.$router.push({path: '/rankDetail', query: {id: id}})
          return
        case 3:
          this.$router.push({path: '/songListDetail', query: {id: id}})
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
        albums.push(res.data.albums.slice(i, (i += 3)))
      }
      this.newAblum.listData = albums
    },
    async getRankList () {
      const res = await axios({
        url: `http://localhost:3000/toplist/detail`,
        withCredentials: true
      })
      this.rankList.push(res.data.list[0])
      this.rankList.push(res.data.list[1])
    },
    async getLiveList () {
      const res = await axios({
        url: `http://localhost:3000/program/recommend`,
        withCredentials: true
      })
      this.liveData.listData = res.data.programs
    },
    async getClassifyList () {
      const res = await axios({
        url: `http://localhost:3000/dj/today/perfered`,
        withCredentials: true
      })
      this.classifyData = res.data.data
    },
    async getSoleList () {
      const res = await axios({
        url: `http://localhost:3000/personalized/privatecontent`,
        withCredentials: true
      })
      this.soleList = res.data.result
    },
    async getMusican () {
      const res = await axios({
        url: `http://localhost:3000/top/artists?offset=0&limit=10`,
        withCredentials: true
      })
      this.musician = res.data.artists
    }
  },
  mounted () {
    this.getBanner()
    this.getHotTopic()
    this.getRecommendSong()
    this.getNewSong()
    this.getNewNumberAblum()
    this.getNewAblum()
    this.getRankList()
    this.getLiveList()
    this.getClassifyList()
    this.getSoleList()
    this.getMusican()
  }
}
</script>
<style scoped>
@import "./index.css";
#musicstore{
  height: 14rem;
  overflow: scroll;
}
#musicstore::-webkit-scrollbar{
  display: none;
}
</style>
