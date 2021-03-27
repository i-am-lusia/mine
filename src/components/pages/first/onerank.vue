<template>
    <div id="onerank">
        <div class="box1">
            <span class="el-icon-arrow-left"></span>
            <span class="el-icon-more"></span>
            <img class="logo" src="@/assets/images/share.png"/>
        </div>
        <div class="box2">
           <img class="bg-pic" :src="songs[0].al.picUrl"/>
           <span class="title">{{playlist.name}}</span>
           <span class="time">{{playlist.updateTime}}更新<span class="el-icon-warning-outline"></span></span>
        </div>
        <div class="box3">
            <span class="el-icon-video-play" style="font-size:.5rem;margin-left:2.5%;margin-right:1%;"></span>
            <span>全部播放（{{songs.length}}首）</span>
            <span class="el-icon-download" style="margin-left:40%;margin-right:2.5%;font-size:.5rem"></span>
            <span class="el-icon-s-fold" style="font-size:.5rem" @click="openBox()"></span>
        </div>
        <div class="box4">
            <ul>
                <li v-for="(item, index) in songs" :key="index">
                    <div class="box4-1">
                    <span>{{index+1}}</span>
                    <span class="el-icon-top"> {{item.num}}</span>
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
  name: 'onerank',
  data () {
    return {
      songs: [],
      playlist: [],
      titlewords: '批量处理',
      paneName: '全选',
      chkAllStatus: false,
      checkList: [],
      isBatch: false
    }
  },
  methods: {
    getData () {
      var that = this
      var url = `http://localhost:3000/playlist/detail?id=19723756`
      axios({
        method: 'get',
        url: url,
        withCredentials: true
      }).then(function (res) {
        that.songs = res.data.playlist.tracks
        that.playlist = res.data.playlist
        console.log(that.songs[0])
      })
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
        console.log('选择', that.checkList)
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
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
<style scoped>
#onerank{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.box1{
    width: 100%;
    height: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: .5rem;
    position: fixed;
    top: 0;
    z-index: 5;
    color: white;
}
.el-icon-arrow-left{
    margin-left: 2.5%;
}
.box1 span:nth-child(2){
    margin-left: 75%;
    margin-right: 2.5%;
}
.logo{
    width: .5rem;
    height: .5rem;
}
.box2{
    width: 100%;
    height: 6rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: rgba(170, 165, 165, 0.397);
}
.bg-pic{
    position: absolute;
    opacity: .5;
    width: 100%;
    height: 6rem;
    z-index: -1;
}
.title{
    color: white;
    font-size: 1.3rem;
    margin-top: 2rem;
    white-space: nowrap;
}
.time{
    color: gray;
    font-size: .3rem;
    margin-top: 1.5rem;
}
.el-icon-warning-outline{
    color: white;
    margin-left: .1rem
}
.box3{
    width: 100%;
    height: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: .4rem;
}
.box4{
    width: 100%;
    height: auto;
}
.box4 ul{
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
}
.box4 ul li{
    width: 100%;
    height: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: .1rem;
    margin-bottom: .1rem;
}
.box4-1{
    width: 14%;
    height: 100%;
    margin-left: 2.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.box4-1 span:nth-child(1)
{
    color: gray;
    font-size: .4rem;
}
.box4-1 span:nth-child(2){
    color: black;
    font-size: .3rem;
}
.box4-2{
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 1%;
}
.name{
    width: 100%;
    font-size: .45rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.box4-2-1{
    width: 100%;
    color: gray;
    font-size: .3rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.box4-3{
    width: .5rem;
    height: .5rem;
    margin-left: 1%;
    margin-right: 4%;
}
.box5{
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #fff;
    z-index: 5;
    top: 0;
    overflow:scroll
}
.box5-1{
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
.box5-1-1{
    font-size: .4rem;
}
.box5-1-2{
    margin-left: 25%;
    font-size: .4rem;
    margin-right: 25%;
    font-weight: 600;
}
.box5-1-3{
    font-size: .4rem;
}
.box5-2{
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
.box5-3{
    width: 100%;
    height: 7%;
    margin-top: .52%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.box5-3 div{
    width: 33.3%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.box5-3 div span:nth-child(1){
    font-size: .5rem;
}
.box5 ul li{
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
