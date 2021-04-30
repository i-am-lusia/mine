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
                  />
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
                      >1</span
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
                      >2</span
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
                      >3</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 活动中心 -->
          <div class="ownBlock" style="width:90%;height: 2rem">
            <div id="activity">
              <div style="display: flex;justify-content: center;">
                <img style="width:1rem;height:1rem" src="@/assets/images/act1.png" />
                <div style="margin-left:.2rem">
                  <div style="font-size: .5rem;">活动中心</div>
                  <div style="color:grey;font-size: .35rem;">签到七天赢绿砖</div>
                </div>
              </div>
              <div style="display: flex;justify-content: center;margin-left: .5rem">
                <img style="width:1rem;height:1rem" src="@/assets/images/act2.png" />
                <div style="margin-left:.2rem">
                  <div style="font-size: .5rem;">会员中心</div>
                  <div style="color:grey;font-size: .35rem;">VIP热门新碟🎵</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 按键 -->
          <div class="ownBlock" style="width:90%;height: 3rem">
             <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;margin: .5rem;">
                <img style="width: 1rem;" src="@/assets/images/heart1.png">
                <span style="font-size:.4rem;margin-top: .15rem">喜欢</span>
                <span style="font-size:.2rem;color: gray;">{{this.likeSong.length}}</span>
            </div>
            <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;margin: .5rem;">
                <img style="width: 1rem;"  src="@/assets/images/download1.png">
                <span style="font-size:.4rem;margin-top: .15rem">本地</span>
                <span style="font-size:.2rem;color: gray;">1234</span>
            </div>
            <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;margin: .5rem;">
                <img style="width: 1rem;" src="@/assets/images/songlist2.png">
                <span style="font-size:.4rem;margin-top: .15rem">歌单</span>
                <span style="font-size:.2rem;color: gray;">1234</span>
            </div>
            <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;margin: .5rem;">
                <img style="width: 1rem;" src="@/assets/images/yigou.png">
                <span style="font-size:.4rem;margin-top: .15rem">已购</span>
                <span style="font-size:.2rem;color: gray;">1234</span>
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
          <div class="ownBlock" style="background: white;height: 8rem">
            <songlist :songListData="recommendSongData"></songlist>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
    <span class="el-icon-message" @click="toMessage"></span>
    <span class="el-icon-more" @click="toMore"></span>
  </div>
</template>
<script>
import more from '@/components/pages/fourth/more/more.vue'
import messages from '@/components/pages/fourth/messages/messages.vue'
import Songlist from '../../../components/songlist/songlist.vue'
import axios from 'axios'
export default {
  name: 'mine',
  components: {
    more,
    messages,
    Songlist
  },
  data () {
    return {
      isMore: false,
      isMessage: false,
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
      likeSong: []
    }
  },
  methods: {
    toMore () {
      this.isMore = true
    },
    toMessage () {
      this.isMessage = true
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
      console.log(this.likeSong)
    }
  },
  mounted () {
    this.getColletSongData()
    this.getRecommandSongData()
    console.log(this.nearSongData)
    console.log(this.userData)
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
</style>
