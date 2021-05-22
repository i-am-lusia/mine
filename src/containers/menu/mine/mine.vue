<template>
  <div id="mine">
    <el-tabs class="tab">
      <el-tab-pane>
        <span slot="label">
          <span class="pane1">我的</span>
        </span>
        <div id="own">
          <!-- 个人信息表 -->
          <div
            class="ownBlock"
            style="width: 90%; height: 3rem; margin-top: 1rem"
          >
            <div id="personal">
              <img class="headPic" :src="headPic" />
              <div class="box">
                <div class="personalButtons" style="margin-left: 2rem">
                  <div class="font-size: .6rem;margin-left: .6rem">
                    {{ userName }}
                  </div>
                  <!--
                  <img
                    style="width: 0.5rem; height: 0.5rem; margin-left: 0.1rem"
                    src="@/assets/images/vip1.png"
                  />
                  <img
                    style="width: 0.5rem; height: 0.5rem; margin-left: 0.1rem"
                    src="@/assets/images/vip1.png"
                  />
                  <img
                    style="width: 0.5rem; height: 0.5rem; margin-left: 0.1rem"
                    src="@/assets/images/vip1.png"
                  /> -->
                </div>
                <div
                  class="personalButtons"
                  style="justify-content: flex-start"
                >
                  <div style="border-right: gainsboro solid 2px">
                    <span style="color: black">关注</span>
                    <span
                      style="
                        color: gainsboro;
                        margin-left: 0.2rem;
                        margin-right: 0.3rem;
                      "
                      >{{ followed.length }}</span
                    >
                  </div>
                  <div style="border-right: gainsboro solid 2px">
                    <span style="color: black">粉丝</span>
                    <span
                      style="
                        color: gainsboro;
                        margin-left: 0.2rem;
                        margin-right: 0.3rem;
                      "
                      >{{ fans.length }}</span
                    >
                  </div>
                  <div style="border-right: gainsboro solid 2px">
                    <span style="color: black">新歌提醒</span>
                    <span
                      style="
                        color: gainsboro;
                        margin-left: 0.2rem;
                        margin-right: 0.3rem;
                      "
                      >{{ event.length }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 活动中心 -->
          <div class="ownBlock" style="width: 90%; height: 2rem">
            <div id="activity">
              <div style="display: flex; justify-content: center">
                <img
                  style="width: 1rem; height: 1rem"
                  src="@/assets/images/act1.png"
                />
                <div style="margin-left: 0.2rem">
                  <div style="font-size: 0.5rem">活动中心</div>
                  <div style="color: grey; font-size: 0.35rem">
                    签到七天赢绿砖
                  </div>
                </div>
              </div>
              <div
                style="
                  display: flex;
                  justify-content: center;
                  margin-left: 0.5rem;
                "
              >
                <img
                  style="width: 1rem; height: 1rem"
                  src="@/assets/images/act2.png"
                />
                <div style="margin-left: 0.2rem">
                  <div style="font-size: 0.5rem">会员中心</div>
                  <div style="color: grey; font-size: 0.35rem">
                    VIP热门新碟🎵
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 按键 -->
          <div class="ownBlock" style="width: 90%; height: 3rem">
            <div
              style="
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 0.5rem;
              "
            >
              <img style="width: 1rem" src="@/assets/images/heart1.png" />
              <span style="font-size: 0.4rem; margin-top: 0.15rem">喜欢</span>
              <span style="font-size: 0.2rem; color: gray">{{
                this.likeSong.length
              }}</span>
            </div>
            <div
              style="
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 0.5rem;
              "
            >
              <img style="width: 1rem" src="@/assets/images/download1.png" />
              <span style="font-size: 0.4rem; margin-top: 0.15rem">本地</span>
              <span style="font-size: 0.2rem; color: gray">0</span>
            </div>
            <div
              style="
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 0.5rem;
              "
            >
              <img style="width: 1rem" src="@/assets/images/songlist2.png" />
              <span style="font-size: 0.4rem; margin-top: 0.15rem">歌单</span>
              <span style="font-size: 0.2rem; color: gray">{{
                playlist.length
              }}</span>
            </div>
            <div
              style="
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 0.5rem;
              "
            >
              <img style="width: 1rem" src="@/assets/images/yigou.png" />
              <span style="font-size: 0.4rem; margin-top: 0.15rem">已购</span>
              <span style="font-size: 0.2rem; color: gray">{{
                digitalAlbum.length
              }}</span>
            </div>
          </div>
          <!-- 最近播放 -->
          <div class="ownBlock" style="background: white">
            <songlist :songListData="nearSongData"></songlist>
          </div>
          <!-- 自建歌单 -->
          <div class="ownBlock" style="background: white">
            <songlist :songListData="ownSongData"></songlist>
          </div>
          <!-- 推荐歌单 -->
          <div class="ownBlock" style="background: white; height: 8rem">
            <songlist :songListData="recommendSongData"></songlist>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <span class="el-icon-message" @click="toMessage"></span>
    <span class="el-icon-more" @click="toMore"></span>
    <!-- 用户分析报告 -->
    <el-dialog
      title="用户数据分析报告"
      :fullscreen="true"
      :visible.sync="dialogVisible"
      :modal="false"
      :modal-append-to-body="false"
    >
      <div style="height: 15rem; overflow: scroll">
        <analysisTags></analysisTags>
        <analysisSinger></analysisSinger>
        <analysisLyric></analysisLyric>
      </div>
    </el-dialog>
    <!-- 曲目 -->
    <transition>
      <div class="songListBox">
        <div class="boxTitle">
          <span class="el-icon-arrow-left"  @click="isBatch=false"></span>
          <span>{{this.title}}</span>
        </div>
        <ul>
          <li></li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
import more from '@/components/pages/fourth/more/more.vue'
import messages from '@/components/pages/fourth/messages/messages.vue'
import Songlist from '../../../components/songlist/songlist.vue'
import analysisLyric from '../../../components/analysis/analysisLyric.vue'
import analysisTags from '../../../components/analysis/analysisTags.vue'
import analysisSinger from '../../../components/analysis/analysisSinger.vue'
import axios from 'axios'
export default {
  name: 'mine',
  components: {
    more,
    analysisLyric,
    analysisTags,
    messages,
    Songlist,
    analysisSinger
  },
  data () {
    return {
      isMore: false,
      isMessage: false,
      dialogVisible: false,
      headPic: this.$store.state.userData
        ? this.$store.state.userData.profile.avatarUrl
        : null,
      userData: this.$store.state.userData ? this.$store.state.userData : null,
      userName: this.$store.state.userData
        ? this.$store.state.userData.profile.nickname
        : null,
      nearSongData: {
        listName: '最近播放',
        listData: this.$store.state.nearlist ? this.$store.state.nearlist : []
      },
      ownSongData: {
        listName: '自建歌单',
        listData: []
      },
      recommendSongData: {
        listName: '推荐歌单',
        listData: []
      },
      likeSong: [],
      followed: [],
      fans: [],
      event: [],
      digitalAlbum: [],
      playlist: [],
      isBatch: true,
      title: '喜欢'
    }
  },
  methods: {
    toMore () {
      this.isMore = true
    },
    toMessage () {
      this.dialogVisible = true
    },
    closeMore () {
      this.isMore = false
    },
    closeMessage () {
      this.isMessage = false
    },
    /** 收藏歌单 */
    async getColletSongData () {
      const res = await axios({
        url: `http://localhost:3000/album/sublist`,
        withCredentials: true
      })
      this.ownSongData.listData = res.data.data
    },
    /** 推荐歌单 */
    async getRecommandSongData () {
      const res = await axios({
        url: `http://localhost:3000/personalized?limit=3`,
        withCredentials: true
      })
      this.recommendSongData.listData = res.data.result
    },
    /** 获取喜好歌单列表 */
    async getLikeSong () {
      const res = await axios({
        url: `http://localhost:3000/likelist?uid=${this.userData.profile.userId}`,
        withCredentials: true
      })
      this.likeSong = res.data.ids
    },
    /** 获取关注列表 */
    async getfollowedList () {
      const res = await axios({
        url: `http://localhost:3000/user/follows?uid=${this.userData.profile.userId}`,
        withCredentials: true
      })
      this.followed = res.data.follow
    },
    /** 获取粉丝列表 */
    async getfansList () {
      const res = await axios({
        url: `http://localhost:3000/user/followeds?uid=${this.userData.profile.userId}`,
        withCredentials: true
      })
      this.fans = res.data.followeds
    },
    /** 获取用户动态 */
    async getEventList () {
      const res = await axios({
        url: `http://localhost:3000/user/event?uid=${this.userData.profile.userId}`,
        withCredentials: true
      })
      this.event = res.data.events
    },
    /** 我的数据专辑 */
    async getdigitalAlbumList () {
      const res = await axios({
        url: `http://localhost:3000/digitalAlbum/purchased`,
        withCredentials: true
      })
      this.digitalAlbum = res.data.paidAlbums
    },
    /** 获取用户信息等数据 */
    async getSubcount () {
      const res = await axios({
        url: `http://localhost:3000/user/playlist?uid=${this.userData.profile.userId}`,
        withCredentials: true
      })
      this.playlist = res.data.playlist
      this.ownSongData.listData.push(...res.data.playlist)
    }
  },
  mounted () {
    this.getColletSongData()
    this.getRecommandSongData()
    this.getLikeSong()
    this.getfollowedList()
    this.getfansList()
    this.getEventList()
    this.getdigitalAlbumList()
    this.getSubcount()
  },
  computed: {
    getUserData () {
      return this.$store.state.userData
    },
    getNearSongData () {
      return this.$store.state.nearlist
    }
  },
  watch: {
    getUserData (newVal, oldVal) {
      console.log(newVal)
      this.userName = this.$store.state.userData.profile.nickname
      this.headPic = this.$store.state.userData.profile.avatarUrl
      this.userData = this.$store.state.userData
      this.getLikeSong()
    },
    getNearSongData (newVal, oldVal) {
      this.nearSongData.listData = newVal
    }
  }
}
</script>
<style scoped>
@import "./index.css";
#mine {
  height: 14rem;
  overflow: scroll;
}
#mine >>> .el-dialog__body {
  padding: 0;
  margin-top: 0.5rem;
}
#mine::-webkit-scrollbar {
  display: none;
}
#own {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: whitesmoke;
}
.ownBlock {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.songListBox{
    width: 100%;
    height: 100%;
    position: fixed;
    background-color:aqua;
    z-index: 10;
    top: 0;
    overflow:scroll
}
.boxTitle{
    font-size: .5rem;
    background-color: pink;
}
.box7-1{
    width: 100%;
    height: 5%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 1;
}
.box7-1-1{
    font-size: .4rem;
}
.box7-1-2{
    margin-left: 25%;
    font-size: .4rem;
    margin-right: 25%;
    font-weight: 600;
}
.box7-1-3{
    font-size: .4rem;
}
.box7-2{
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    margin-top: 10%;
    width: 100%;
    height: 87%;
    overflow: scroll;
    background: rgb(252, 252, 252);
}
.box7-3{
    width: 100%;
    height: 7%;
    margin-top: .52%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.box7-3 div{
    width: 33.3%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.box7-3 div span:nth-child(1){
    font-size: .5rem;
}
.box7 ul li{
    width: 100%;
    height: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: .1rem;
    margin-bottom: .1rem;
}
input[type="checkbox"]{
    width:.3rem;
    height:.3rem;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: .3rem;
    position: relative;
    border-radius: 50%;
}
input[type="checkbox"]::before{
    content: "";
    position: absolute;
    background: #fff;
    top: -.06rem;
    left: -.05rem;
    width: .36rem;
    height: .36rem;
    border: 1px solid #d9d9d9;
    border-radius: 50%;
}
input[type="checkbox"]:checked::before{
    content: "\2713";
    background-color: rgb(26, 238, 238);
    position: absolute;
    top: -.06rem;
    left: -.04rem;
    width: .36rem;
    height: .36rem;
    border: 1px solid rgb(26, 238, 238);
    color:#fff;
    font-size: 20px;
    font-weight: bold;
    border-radius: 50%;
}
</style>
