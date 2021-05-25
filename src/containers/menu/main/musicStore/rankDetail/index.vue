<template>
    <div id="rankDetail">
      <!-- 排行榜头部 -->
        <div class="box1">
            <span class="el-icon-arrow-left" @click="goBack()"></span>
            <span class="el-icon-more"></span>
            <img style="width: .5rem;height: .5rem;" src="@/assets/images/share.png"/>
        </div>
        <!-- 排行榜图片区 -->
        <div class="box2">
           <img class="bg-pic" :src="coverPic"/>
           <span class="title">{{playlist.name}}</span>
           <span class="time">{{new Date(playlist.updateTime)}}更新<span class="el-icon-warning-outline"></span></span>
        </div>
        <!-- 列表头 -->
        <div class="box3">
            <span class="el-icon-video-play" style="font-size:.5rem;margin-left:2.5%;margin-right:1%;"></span>
            <span>全部播放（{{songs.length}}首）</span>
            <span class="el-icon-download" style="margin-left:40%;margin-right:2.5%;font-size:.5rem"></span>
            <span class="el-icon-s-fold" style="font-size:.5rem" @click="openBox()"></span>
        </div>
        <!-- 歌曲列表 -->
        <div class="box4">
            <ul>
                <li v-for="(item, index) in songs" :key="index" @click="songChange(item)">
                    <div class="box4-1">
                    <span>{{index+1}}</span>
                    </div>
                    <div class="box4-2">
                        <span class="name">{{item.name}}</span>
                        <div class="box4-2-1">
                            <!-- <img/>3个-->
                            <span style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">{{item.ar[0].name}}-{{item.name}}</span>
                        </div>
                    </div>
                    <img class="box4-3" src="@/assets/images/video1.png"/>
                    <span class="el-icon-more"></span>
                </li>
            </ul>
        </div>
        <!-- 下载页面 -->
        <transition name="el-zoom-in-bottom">
        <div class="box5" v-if="isBatch">
            <div class="box5-1">
                <span class="box5-1-1" @click="chkAll">{{paneName}}</span>
                <span class="box5-1-2">{{titlewords}}</span>
                <span class="box5-1-3" @click="closeBox()">完成</span>
            </div>
            <ul class="box5-2">
                <li v-for="(item, index) in songs" :key="index">
                    <div class="box4-1">
                    <input type="checkbox" name="song" :value="item.id" v-model="checkList" @click="chkItem(item)">
                    </div>
                    <div class="box4-2">
                        <span class="name">{{item.name}}</span>
                        <div class="box4-2-1">
                            <!-- <img/>3个-->
                            <span style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">{{item.ar[0].name}}-{{item.name}}</span>
                        </div>
                    </div>
                    <img class="box4-3" src="@/assets/images/video1.png"/>
                    <span class="el-icon-more"></span>
                </li>
            </ul>
            <div class="box5-3">
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
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'rankDetail',
  data () {
    return {
      rankId: null,
      songs: [],
      coverPic: null,
      playlist: [],
      titlewords: '批量处理',
      paneName: '全选',
      chkAllStatus: false,
      checkList: [],
      isBatch: false
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    async getData () {
      var url = `http://localhost:3000/playlist/detail?id=${this.rankId}`
      const res = await axios({
        url: url,
        withCredentials: true
      })
      this.songs = res.data.playlist.tracks
      this.playlist = res.data.playlist
      this.coverPic = res.data.playlist.tracks[0].al.picUrl
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
    }
  },
  mounted () {
    this.rankId = this.$route.query.id
    this.getData()
  }
}
</script>
<style scoped>
/** 标题部分 */
@import './index.css';
</style>
