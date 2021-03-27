<template>
    <div id="songlist">
        <div class="box1" >
            <img class="pic-1" :src="playlist.coverImgUrl"/>
            <span class="el-icon-arrow-left"></span>
            <span class="title">歌单</span>
            <span class="el-icon-more"></span>
        </div>
        <div class="box2">
            <img class="pic1" :src="playlist.coverImgUrl"/>
            <div class="box2-1">
                <div class="box2-1-1">
                    <img class="pic" :src="playlist.coverImgUrl"/>
                    <div class="pic-0"></div>
                </div>
                <div class="box2-1-2">
                    <span style="margin-top:10%;font-size:.5rem;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;color:white;">{{playlist.name}}</span>
                    <div class="box2-1-2-1">
                        <img class="h-pic" :src="playlist.creator.backgroundUrl" />
                        <span style="font-size:.4rem;color:white">{{playlist.creator.nickname}}</span>
                        <div class="follow">+  关注</div>
                    </div>
                    <div class="box2-1-2-2">
                        <span>简介：</span>
                        <span class="words"> {{playlist.description}}</span>
                        <span class="el-icon-arrow-right" @click="isMore=true"></span>
                    </div>
                </div>
            </div>
            <div class="box2-2">
                <div class="box2-2-1">
                <img class="logo" src="@/assets/images/like1.png"/>
                <span style="margin-left:.1rem;">13245</span>
                </div>
                <div class="box2-2-2">
                <span class="el-icon-chat-dot-square"></span>
                <span style="margin-left:.1rem;">32</span>
                </div>
                <div class="box2-2-3">
                <img class="logo" src="@/assets/images/share.png"/>
                <span style="margin-left:.1rem;">分享</span>
                </div>
            </div>
        </div>
        <div class="box3">
            <div class="search">
            <span class="el-icon-search" ></span>
            <input placeholder="搜索此歌单歌曲">
            </div>
        </div>
        <div class="box4">
            <img class="pic2" src="@/assets/images/vip2.png"/>
            <span>含3首VIP专享歌曲 可试听歌曲片段</span>
            <div class="getVip">开通VIP</div>
       </div>
       <div class="box5">
          <span class="el-icon-video-play" style="font-size:.5rem;margin-left:5%;margin-right:1%;"></span>
          <span>全部播放（123首）</span>
           <span class="el-icon-download" style="margin-left:40%;margin-right:2.5%;font-size:.5rem"></span>
            <span class="el-icon-s-fold" style="font-size:.5rem" @click="openBox()"></span>
       </div>
       <div class="box6">
           <ul>
                <li v-for="(item, index) in songs" :key="index">
                    <div class="box6-1">
                    <span>{{index+1}}</span>
                    </div>
                    <div class="box6-2">
                        <span class="name">{{item.name}}</span>
                        <div class="box6-2-1">
                            <!-- <img/>3个-->
                            <span style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">{{item.ar[0].name}}-{{item.name}}</span>
                        </div>
                    </div>
                    <img class="box6-3" src="@/assets/images/video1.png"/>
                    <span class="el-icon-more"></span>
                </li>
            </ul>
       </div>
       <transition name="el-zoom-in-bottom">
        <div class="box7" v-if="isBatch">
            <div class="box7-1">
                <span class="box7-1-1" @click="chkAll">{{paneName}}</span>
                <span class="box7-1-2">{{titlewords}}</span>
                <span class="box7-1-3" @click="closeBox()">完成</span>
            </div>
            <ul class="box7-2">
                <li v-for="(item, index) in songs" :key="index">
                    <div class="box6-1">
                    <input type="checkbox" name="song" :value="item.id" v-model="checkList" @click="chkItem(item)">
                    </div>
                    <div class="box6-2">
                        <span class="name">{{item.name}}</span>
                        <div class="box6-2-1">
                            <!-- <img/>3个-->
                            <span style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">{{item.ar[0].name}}-{{item.name}}</span>
                        </div>
                    </div>
                    <img class="box6-3" src="@/assets/images/video1.png"/>
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
            <img class="box8-0" :src="playlist.coverImgUrl"/>
            <div class="box8-1">
                <span class="el-icon-arrow-left" @click="isMore=false"></span>
            </div>
            <div class="box8-2">
                <img class="box8-2-1"  :src="playlist.coverImgUrl">
                <span style="font-size:.5rem;color:white;margin-top:.1rem;">{{playlist.name}}</span>
                <div class="box8-2-2">
                    <img class="h-pic" :src="playlist.creator.backgroundUrl" />
                    <span style="font-size:.4rem;color:white">{{playlist.creator.nickname}}</span>
                </div>
                <div class="box8-2-3">
                    <ul>
                       <!-- <li v-for="(item,index) in playlist.tags" :key="index">{{item}}</li> -->
                       <li>dasdnjhas</li><li>fakjnf</li>
                    </ul>
                </div>
            </div>
            <div class="box8-3">
                <p>{{playlist.description}}</p>
            </div>
            <div class="box8-4">
                <ul>
                    <li v-for="(item, index) in playlist.subscribers" :key="index"><img class="h1-pic" :src="item.backgroundUrl"/></li>
                </ul>
                <span>{{playlist.subscribedCount}}收藏></span>
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
      isSearch: false,
      songs: [],
      playlist: [],
      titlewords: '批量处理',
      paneName: '全选',
      chkAllStatus: false,
      checkList: [],
      isBatch: false,
      isMore: false
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
        console.log(that.playlist)
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
#songlist{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background: coral;
}
.box1{
    width: 100%;
    height: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: .5rem;
    position: fixed;
    z-index: 1;
    top: 0;
    background: gainsboro;
    overflow: hidden;
    color: white;
}
.title{
    margin-left: 35%;
    margin-right: 35%;
}
.box2{
    width: 100%;
    height: 6rem;
    background: gainsboro;
    z-index: 0;
}
.pic1{
    width: 100%;
    height: 6rem;
    position: absolute;
    opacity: .5;
    filter: blur(.1rem);
    z-index: -1;
}
.pic-1{
    width: 100%;
    height: 6rem;
    position: absolute;
    filter: blur(.1rem);
    z-index: -2;
    opacity: .5;
    margin-top: 50%;
}
.box2-1{
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: row;
}
.box2-1-1{
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.pic{
    width: 3rem;
    height: 3rem;
    border-radius: .3rem;
    z-index: 1;
    margin-top: 1rem;
}
.pic-0{
    margin-top: 1rem;
    width: 3rem;
    height: 2.5rem;
    position: absolute;
    background-color: #fff;
    z-index: 0;
    margin-left: .5rem;
    border-radius: .3rem;
    opacity: .4;
}
.box2-1-2{
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
}
.box2-1-2-1{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: 7%;
    margin-bottom: 7%;
}
.h-pic{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin-right: 2%;
}
.follow{
    width: 1.6rem;
    height: .6rem;
    border: white .01rem;
    border-radius: .4rem;
    color:white;
    font-size: .4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5%;
}
.box2-1-2-2{
    width: 100%;
    font-size: .35rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: white;
}
.words{
    width: 70%;
    font-size: .35rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.box2-2{
    width: 100%;
    height: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: .4rem;
    color: white;
}
.box2-2-1{
    width: 33.3%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.box2-2-2{
    width: 33.3%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.box2-2-3{
    width: 33.3%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.logo{
    width: .5rem;
    height: .5rem;
}
.el-icon-chat-dot-square{
    font-size: .5rem;
    color: gainsboro;
}
.box3{
    width: 100%;
    height: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
}
.search{
    width: 90%;
    height: 60%;
    border-radius: .4rem;
    border:none;
    background: rgb(238, 231, 231);
    display: flex;
    justify-content: center;
    align-items: center;
}
input{
    width: 50%;
    height: 100%;
    border: none;
    background: transparent;
    outline: none;
}
input::-webkit-input-placeholder{
    text-align: center;
}
.el-icon-search{
    font-size: .4rem;
    color: gray;
}
.box4{
    width: 100%;
    height: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: .35rem;
    background: white;
}
.pic2{
    width: .8rem;
    height: .8rem;
    margin-left: 5%;
}
.getVip{
    width: 2rem;
    height: .6rem;
    border-radius: .4rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border:gainsboro solid .01rem;
    margin-left: 10%;
}
.box5{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: .4rem;
    background: white;
}
.box6{
    width: 100%;
    height: auto;
    background: white;
}
.box6 ul{
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
}
.box6 ul li{
    width: 100%;
    height: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: .1rem;
    margin-bottom: .2rem;
}
.box6-1{
    width: 14%;
    height: 100%;
    margin-left: 2.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.box6-1 span:nth-child(1)
{
    color: gray;
    font-size: .4rem;
}
.box6-1 span:nth-child(2){
    color: black;
    font-size: .3rem;
}
.box6-2{
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
.box6-2-1{
    width: 100%;
    color: gray;
    font-size: .3rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.box6-3{
    width: .5rem;
    height: .5rem;
    margin-left: 1%;
    margin-right: 4%;
}
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
