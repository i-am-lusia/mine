<template>
  <div id="songlist">
    <!-- 标题 -->
    <div class="title">
      <img :src="playlist.coverImgUrl" />
      <span class="el-icon-arrow-left" @click="goBack ()"></span>
      <span style="margin-left: 35%; margin-right: 35%">歌单</span>
      <span class="el-icon-more"></span>
    </div>
    <!-- 歌单上半部分 -->
    <div style="width: 100%; height: 6rem; background: gainsboro; z-index: 0">
      <img class="pic1" :src="playlist.coverImgUrl" />
      <div
        style="width: 100%; height: 5rem; display: flex; flex-direction: row"
      >
        <div
          style="
            width: 40%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
          "
        >
          <img
            style="
              width: 3rem;
              height: 3rem;
              border-radius: 0.3rem;
              z-index: 1;
              margin-top: 1rem;
            "
            :src="playlist.coverImgUrl"
          />
          <div
            style="
              margin-top: 1rem;
              width: 3rem;
              height: 2.5rem;
              position: absolute;
              background-color: #fff;
              z-index: 0;
              margin-left: 0.5rem;
              border-radius: 0.3rem;
              opacity: 0.4;
            "
          ></div>
        </div>
        <div
          style="
            width: 60%;
            height: 100%;
            display: flex;
            flex-direction: column;
            margin-top: 1rem;
          "
        >
          <span
            style="
              margin-top: 10%;
              font-size: 0.5rem;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              color: white;
            "
            >{{ playlist.name }}</span
          >
          <div
            style="
              width: 100%;
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              align-items: center;
              margin-top: 7%;
              margin-bottom: 7%;
            "
          >
            <img
              style="
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
                margin-right: 2%;
              "
              :src="playlist.creator.backgroundUrl"
            />
            <span style="font-size: 0.4rem; color: white">{{
              playlist.creator.nickname
            }}</span>
            <div
              style="
                width: 1.6rem;
                height: 0.6rem;
                border: white 0.01rem;
                border-radius: 0.4rem;
                color: white;
                font-size: 0.4rem;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-left: 5%;
              "
            >
              + 关注
            </div>
          </div>
          <div
            style="
              width: 100%;
              font-size: 0.35rem;
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              align-items: center;
              color: white;
            "
          >
            <span>简介：</span>
            <span
              style="
                width: 70%;
                font-size: 0.35rem;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
              "
            >
              {{ playlist.description }}</span
            >
            <span class="el-icon-arrow-right" @click="isMore = true"></span>
          </div>
        </div>
      </div>
      <div
        style="
          width: 100%;
          height: 1rem;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          font-size: 0.4rem;
          color: white;
        "
      >
        <div class="sign">
          <img
            style="width: 0.5rem; height: 0.5rem"
            src="@/assets/images/like1.png"
          />
          <span style="margin-left: 0.1rem">13245</span>
        </div>
        <div class="sign">
          <span class="el-icon-chat-dot-square"></span>
          <span style="margin-left: 0.1rem">{{commentNum}}</span>
        </div>
        <div class="sign">
          <img
            style="width: 0.5rem; height: 0.5rem"
            src="@/assets/images/share.png"
          />
          <span style="margin-left: 0.1rem">分享</span>
        </div>
      </div>
    </div>
    <!-- 搜索组件 -->
    <div class="search">
      <div>
        <span class="el-icon-search"></span>
        <input placeholder="搜索此歌单歌曲" />
      </div>
    </div>
    <!-- VIP -->
    <div
      style="
        width: 100%;
        height: 1rem;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        font-size: 0.35rem;
        background: white;
      "
    >
      <img
        style="width: 0.8rem; height: 0.8rem; margin-left: 5%"
        src="@/assets/images/vip2.png"
      />
      <div>含3首VIP专享歌曲 可试听歌曲片段</div>
      <div
        style="
          width: 2rem;
          height: 0.6rem;
          border-radius: 0.4rem;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
          border: gainsboro solid 0.01rem;
          margin-left: 1rem;
        "
      >
        开通VIP
      </div>
    </div>
    <!-- 全部播放模块 -->
    <div
      style="
        width: 100%;
        height: 1rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 0.4rem;
        background: white;
      "
    >
      <span
        class="el-icon-video-play"
        style="font-size: 0.5rem; margin-left: 5%; margin-right: 1%"
      ></span>
      <span>全部播放（123首）</span>
      <span
        class="el-icon-download"
        style="margin-left: 40%; margin-right: 2.5%; font-size: 0.5rem"
      ></span>
      <span
        class="el-icon-s-fold"
        style="font-size: 0.5rem"
        @click="openBox()"
      ></span>
    </div>
    <!-- 歌单列表 -->
    <div class="list">
      <ul>
        <li v-for="(item, index) in songs" :key="index" @click="songChange(item)">
          <div class="index">
            <span>{{ index + 1 }}</span>
          </div>
          <div class="nameBox">
            <span class="name">{{ item.name }}</span>
            <div>
              <span
                style="
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  overflow: hidden;
                "
                >{{ item.ar[0].name }}-{{ item.name }}</span
              >
            </div>
          </div>
          <img style="width: .5rem;height: .5rem;margin-left: 1%;margin-right: 4%;" src="@/assets/images/video1.png" />
          <span class="el-icon-more"></span>
        </li>
      </ul>
    </div>
    <transition name="el-zoom-in-bottom">
      <div class="box7" v-if="isBatch">
        <div class="box7-1">
          <span class="box7-1-1" @click="chkAll">{{ paneName }}</span>
          <span class="box7-1-2">{{ titlewords }}</span>
          <span class="box7-1-3" @click="closeBox()">完成</span>
        </div>
        <ul class="box7-2">
          <li v-for="(item, index) in songs" :key="index">
            <div class="box6-1">
              <input
                type="checkbox"
                name="song"
                :value="item.id"
                v-model="checkList"
                @click="chkItem(item)"
              />
            </div>
            <div class="box6-2">
              <span class="name">{{ item.name }}</span>
              <div class="box6-2-1">
                <!-- <img/>3个-->
                <span
                  style="
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                  "
                  >{{ item.ar[0].name }}-{{ item.name }}</span
                >
              </div>
            </div>
            <img class="box6-3" src="@/assets/images/video1.png" />
            <span class="el-icon-more"></span>
          </li>
        </ul>
        <div class="box7-3">
          <div>
            <span class="el-icon-download"></span>
            <span>下载</span>
          </div>
          <div>
            <span class="el-icon-folder-add"></span>
            <span>添加到歌单</span>
          </div>
          <div>
            <span class="el-icon-monitor"></span>
            <span>设置背景</span>
          </div>
        </div>
      </div>
    </transition>
    <transition name="move">
      <div class="box8" v-if="isMore">
        <img class="box8-0" :src="playlist.coverImgUrl" />
        <div class="box8-1">
          <span class="el-icon-arrow-left" @click="isMore = false"></span>
        </div>
        <div class="box8-2">
          <img class="box8-2-1" :src="playlist.coverImgUrl" />
          <span style="font-size: 0.5rem; color: white; margin-top: 0.1rem">{{
            playlist.name
          }}</span>
          <div class="box8-2-2">
            <img class="h-pic" :src="playlist.creator.backgroundUrl" />
            <span style="font-size: 0.4rem; color: white">{{
              playlist.creator.nickname
            }}</span>
          </div>
          <div class="box8-2-3">
            <ul>
              <!-- <li v-for="(item,index) in playlist.tags" :key="index">{{item}}</li> -->
              <li>dasdnjhas</li>
              <li>fakjnf</li>
            </ul>
          </div>
        </div>
        <div class="box8-3">
          <p>{{ playlist.description }}</p>
        </div>
        <div class="box8-4">
          <ul>
            <li v-for="(item, index) in playlist.subscribers" :key="index">
              <img class="h1-pic" :src="item.backgroundUrl" />
            </li>
          </ul>
          <span>{{ playlist.subscribedCount }}收藏></span>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'songlist',
  data () {
    return {
      id: null,
      isSearch: false,
      songs: [],
      playlist: {
        creator: {
          backgroundUrl: undefined
        }
      },
      titlewords: '批量处理',
      paneName: '全选',
      chkAllStatus: false,
      checkList: [],
      isBatch: false,
      isMore: false,
      commentNum: 0
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    async getData () {
      var url = `http://localhost:3000/playlist/detail?id=${this.id}`
      const res = await axios({
        url: url,
        withCredentials: true
      })
      this.songs = res.data.playlist.tracks
      this.playlist = res.data.playlist
    },
    chkAll () {
      var that = this
      that.chkAllStatus = that.chkAllStatus !== true
      if (that.chkAllStatus) {
        that.paneName = '全不选'
        that.checkList = []
        that.songs.map((val, index, arr) => {
          val.isActive = true
          that.checkList.push(val.id)
          return val
        })
      } else {
        that.paneName = '全选'
        that.songs.map((val, index, arr) => {
          val.isActive = false
          if (that.checkList.indexOf(val.id) > -1) {
            that.checkList.splice(that.checkList.indexOf(val.id), 1)
          }
          return val
        })
      }
      if (that.checkList.length === 0) {
        that.titlewords = '批量处理'
      } else {
        that.titlewords = '已选' + that.checkList.length + '首'
      }
    },
    chkItem (item) {
      var that = this
      item.isActive = item.isActive !== true
      if (item.isActive) {
        that.checkList.push(item.id)
        that.chkAllStatus = that.checkList.length === that.songs.length
      } else {
        let index = that.checkList.indexOf(item.id)
        if (index > -1) {
          that.checkList.splice(index, 1)
        }
        that.chkAllStatus = false
      }
      if (that.checkList.length === 0) {
        that.titlewords = '批量处理'
      } else {
        that.titlewords = '已选' + that.checkList.length + '首'
      }
      if (that.chkAllStatus) {
        that.paneName = '全不选'
      } else {
        that.paneName = '全选'
      }
    },
    openBox () {
      this.isBatch = true
    },
    closeBox () {
      this.isBatch = false
    },
    songChange (data) {
      this.$store.commit('updateSongList', this.songs)
      this.$store.commit('updateCurrentSongData', data)
    },
    async getComments () {
      const res = await axios({
        url: `http://localhost:3000/comment/playlist?id=${this.id}`,
        withCredentials: true
      })
      this.commentNum = res.data.comments.length
      /** 待清洗数据 */
      console.log(res)
    }
  },
  mounted () {
    this.id = this.$route.query.id
    this.getData()
    this.getComments()
  }
}
</script>
<style scoped>
@import './index.css';

/** 未调整部分 **/

.box7{
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #fff;
    z-index: 5;
    top: 0;
    overflow:scroll
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
.box8{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    background: white;
    z-index: 2;
}
.box8-1{
    width: 100%;
    font-size: .5rem;
    height: 1rem;
    color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 3;
}
.box8-1 span{
    margin-left: 5%;
}
.box8-2{
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.box8-2-1{
    width: 4rem;
    height: 4rem;
}
.box8-0{
    width: 100%;
    height: 100%;
    position: absolute;
    filter: blur(.3rem);
    z-index: -1;
    opacity: .5;
}
.h1-pic{
    width: .5rem;
    height: .5rem;
    border-radius: 50%;
    margin-right: 2%;
}
.box8 ul{
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
}
.box8 ul li{
    margin-right: .05rem;
}
.box8-2-2{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: .1rem;
    font-size: .4rem;
}
.box8-2-3{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: .1rem;
}
.box8-2-3 ul li{
    width: auto;
    height: .5rem;
    color:whitesmoke;
    border: whitesmoke solid .01rem;
    border-radius: .4rem;
    text-align: center;
    margin-right: .1rem;
}
.box8-3{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: whitesmoke;
}
.box8-4{
    width: 90%;
    height: 1rem;
    display: flex;
    flex-direction: row;
    font-size: .35rem;
    justify-content: flex-start;
    align-items: center;
    margin-left: 5%;
    color: whitesmoke;
}
.move-enter-active, .move-leave-active{
  transition:  all 30s liner;
  transform: translateX(0);
}
.move-enter,.move-leave{
  transform: translateX(100%);
}
.move-leave-to{
  transform: translateX(100%);
}
</style>
