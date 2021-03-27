<template>
    <div id="onesinger">
        <div class="box1">
            <span class="el-icon-arrow-left"></span>
            <span class="title" >{{singerMessage.name}}</span>
            <img class="logo" src="@/assets/images/share.png"/>
            <span class="el-icon-more"></span>
        </div>
        <div class="box2">
            <img class="pic1" :src="singerMessage.cover"/>
            <span class="box2-1">{{singerMessage.name}}</span>
            <span class="box2-2">1234粉丝</span>
            <div class="box2-3">
                <div class="team">
                    <img class="logo" src="@/assets/images/putong1.png"/>
                    <span>扑通小组</span>
                </div>
                <div class="follow">
                    <span>+关注</span>
                </div>
            </div>
        </div>
        <div class="box3" v-if="isDigital">
            <div class="box3-1">
                <div class="box3-1-1">
                    <img class="logo1" src="@/assets/images/album.png"/>
                    <span>jdasnjmdkafii</span>
                </div>
                <span class="box3-1-2">已售1234567张</span>
            </div>
            <div class="box3-2">
                ¥3.00
            </div>
            <div class="box3-3">
                <span class="el-icon-goods"></span>
                <span>购买</span>
            </div>
        </div>
        <el-tabs class="box4">
            <el-tab-pane>
                <span class="pane" slot="label">歌曲</span>
                <div class="box-song">
                    <div class="bs-1">
                        <span class="el-icon-video-play" style="font-size:.5rem;margin-left:5%;margin-right:1%;"></span>
                        <span>全部播放（{{songs.length}}首）</span>
                        <span class="el-icon-download" style="margin-left:40%;margin-right:2.5%;font-size:.5rem"></span>
                        <span class="el-icon-s-fold" style="font-size:.5rem" @click="openBox()"></span>
                    </div>
                    <div class="bs-2">
                        <ul>
                            <li v-for="(item, index) in songs" :key="index">
                                <div class="bs-2-1">
                                    <span>{{index+1}}</span>
                                </div>
                                <div class="bs-2-2">
                                    <span class="name">{{item.name}}</span>
                                    <div class="bs-2-2-1">
                                    <!-- <img/>3个-->
                                        <span style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">{{item.ar[0].name}}-{{item.name}}</span>
                                    </div>
                                </div>
                                <img class="bs-2-3" src="@/assets/images/video1.png"/>
                                <span class="el-icon-more"></span>
                            </li>
                        </ul>
                    </div>
                    <transition name="el-zoom-in-bottom">
                        <div class="bs-3" v-if="isBatch">
                            <div class="bs-3-1">
                                <span class="bs-3-1-1" @click="chkAll">{{paneName}}</span>
                                <span class="bs-3-1-2">{{titlewords}}</span>
                                <span class="bs-3-1-3" @click="closeBox()">完成</span>
                            </div>
                            <ul class="bs-3-2">
                                <li v-for="(item, index) in songs" :key="index">
                                    <div class="bs-3-2-1">
                                        <input type="checkbox" name="song" :value="item.id" v-model="checkList" @click="chkItem(item)">
                                    </div>
                                    <div class="bs-3-2-2">
                                        <span class="name">{{item.name}}</span>
                                        <div class="bs-3-2-2-1">
                                            <!-- <img/>3个-->
                                            <span style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">{{item.ar[0].name}}-{{item.name}}</span>
                                        </div>
                                    </div>
                                    <img class="bs-3-2-3" src="@/assets/images/video1.png"/>
                                    <span class="el-icon-more"></span>
                                </li>
                            </ul>
                            <div class="bs-3-3">
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
            </el-tab-pane>
            <el-tab-pane>
                <span class="pane" slot="label">专辑</span>
                <div class="box-album">
                    <ul>
                        <li v-for="(item, index) in albums" :key="index">
                            <img class="pic3" :src="item.blurPicUrl"/>
                            <div class="ba-1">
                                <span >{{item.name}}</span>
                                <span>{{item.publishTime}} {{item.size}}首</span>
                            </div>
                            <div class="ba-2">
                                <span class="el-icon-arrow-right"></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </el-tab-pane>
            <el-tab-pane>
                <span class="pane" slot="label">视频</span>
                <div class="box-video">
                    <div class="bv-1">
                        <el-cascader
                            v-model="version"
                            :options="versions"
                            placeholder="筛选">
                        </el-cascader>
                        <span style="width:50%"></span>
                        <el-cascader
                            v-model="sort"
                            :options="sorts"
                            placeholder="筛选">
                        </el-cascader>
                    </div>
                    <div class="bv-2">
                        <ul class="bv-2-1">
                            <li v-for="(item, index) in mv1" :key="index">
                                <div class="bv-2-2">
                                    <div class="tag">
                                        <span style="font-size:.3rem;color:white;">{{item.playCount}}</span>
                                        <span style="font-size:.3rem;color:white;margin-left:50%;">{{item.duration}}</span>
                                    </div>
                                    <img class="pic2" :src="item.imgurl"/>
                                    <div class="name-box">
                                        <span style="margin-left: 2.5%;font-size:.35rem;color:black;">{{item.name}}</span>
                                    </div>
                                </div>
                            </li>

                        </ul>
                        <ul  class="bv-2-1">
                            <li v-for="(item, index) in mv2" :key="index">
                                <div class="bv-2-2">
                                    <div class="tag">
                                        <span style="font-size:.3rem;color:white;">{{item.playCount}}</span>
                                        <span style="font-size:.3rem;color:white;margin-left:50%;">{{item.duration}}</span>
                                    </div>
                                <img class="pic2" :src="item.imgurl"/>
                                <div class="name-box">
                                    <span style="margin-left: 2.5%;font-size:.35rem;color:black;">{{item.name}}</span>
                                </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </el-tab-pane>
            <el-tab-pane>
                <span class="pane" slot="label">关于TA</span>
                <div class="box-ta">
                    <div class="bt-1">
                        <span>歌手资料</span>
                        <span @click="isDec=true">更多></span>
                    </div>
                    <div class="bt-2">
                        <span>
                            {{singerMessage.briefDesc}}
                        </span>
                    </div>
                <!--    <div class="bt-3">
                        <span>相关文章</span>
                        <span>更多></span>
                    </div>
                    <div class="bt-4">
                        <ul>
                            <li>
                                <img class="pic3" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607958652972&di=6815d9badf9c3dc442aeb208f8c18f9d&imgtype=0&src=http%3A%2F%2Ffile.digitaling.com%2FeImg%2Fuimages%2F20180930%2F1538303931413950.jpg"/>
                                <div class="ba-1">
                                        <span>mojito</span>
                                        <span>2010-02-31 1首</span>
                                </div>
                            </li>
                            <li>
                                <img class="pic3" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607958652972&di=6815d9badf9c3dc442aeb208f8c18f9d&imgtype=0&src=http%3A%2F%2Ffile.digitaling.com%2FeImg%2Fuimages%2F20180930%2F1538303931413950.jpg"/>
                                <div class="ba-1">
                                        <span>mojito</span>
                                        <span>2010-02-31 1首</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    -->
                    <div class="bt-5">
                        <span>相似歌手</span>
                    </div>
                    <ul class="bt-6">
                        <li v-for="(item,index) in simi" :key="index">
                            <img class="h-pic" :src="item.picUrl"/>
                            <span style="white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">{{item.name}}</span>
                        </li>
                    </ul>
                    <transition name="el-zoom-in-bottom">
                        <div class="bt-7" v-if="isDec">
                            <div class="bt-7-1">
                                <span class="el-icon-arrow-left" @click="isDec=false"></span>
                            </div>
                            <div class="bt-7-2">
                                <ul>
                                    <li v-for="(item,index) in passage" :key="index">
                                        <h1>{{item.ti}}</h1>
                                        <p>{{item.txt}}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </transition>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'onesinger',
  data () {
    return {
      isScroll: false,
      singerMessage: {},
      songs: [],
      top: [],
      isBatch: false,
      playlist: [],
      titlewords: '批量处理',
      paneName: '全选',
      chkAllStatus: false,
      checkList: [],
      albums: [],
      version: '0',
      versions: [{
        value: '0',
        label: '全部'
      },
      {
        value: '1',
        label: '官方版'
      },
      {
        value: '2',
        label: '现场版'
      },
      {
        value: '3',
        label: '演唱会'
      },
      {
        value: '4',
        label: '花絮版'
      },
      {
        value: '5',
        label: '饭拍版'
      },
      {
        value: '6',
        label: '综艺'
      },
      {
        value: '7',
        label: '其他'
      }
      ],
      sort: '0',
      sorts: [
        {
          value: '0',
          label: '最新'
        },
        {
          value: '1',
          label: '热门'
        }],
      mv1: [],
      mv2: [],
      simi: [],
      passage: [],
      isDigital: false,
      isDec: false
    }
  },
  methods: {
    openBox () {
      this.isBatch = true
    },
    closeBox () {
      this.isBatch = false
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
    getSingerData () {
      var that = this
      var url = `http://localhost:3000/artist/detail?id=11972054`
      axios({
        method: 'get',
        url: url,
        withCredentials: true
      }).then(function (res) {
        that.singerMessage = res.data.data.artist
        console.log(res.data)
      })
    },
    getSongData () {
      var that = this
      var url = `http://localhost:3000/artists?id=11972054`
      axios({
        method: 'get',
        url: url,
        withCredentials: true
      }).then(function (res) {
        that.songs = res.data.hotSongs
      })
    },
    getDigitalAblum () {
      var that = this
      var url = `http://localhost:3000/album/detail?id=98241643`
      axios({
        method: 'get',
        url: url,
        withCredentials: true
      }).then(function (res) {
        console.log(res.data)
      }).catch((e) => {
        that.isDigital = false
      })
    },
    getAblum () {
      var that = this
      var url = `http://localhost:3000/artist/album?id=11972054`
      axios({
        method: 'get',
        url: url,
        withCredentials: true
      }).then(function (res) {
        that.albums = res.data.hotAlbums
        that.top = res.data.hotAlbums[0]
      })
    },
    getMv () {
      var that = this
      var url = `http://localhost:3000/artist/mv?id=11972054`
      axios({
        method: 'get',
        url: url,
        withCredentials: true
      }).then(function (res) {
        let len = res.data.mvs.length
        that.mv1 = res.data.mvs.slice(0, Math.floor(len / 2))
        that.mv2 = res.data.mvs.slice(Math.floor(len / 2), len)
      })
    },
    getSimi () {
      var that = this
      var url = `http://localhost:3000/simi/artist?id=11972054`
      axios({
        method: 'get',
        url: url,
        withCredentials: true
      }).then(function (res) {
        that.simi = res.data.artists
      })
    },
    getSingerDec () {
      var that = this
      var url = `http://localhost:3000/artist/desc?id=11972054`
      axios({
        method: 'get',
        url: url,
        withCredentials: true
      }).then(function (res) {
        that.passage = res.data.introduction
      })
    }
  },
  mounted () {
    this.getSingerData()
    this.getSongData()
    this.getAblum()
    this.getDigitalAblum()
    this.getMv()
    this.getSimi()
    this.getSingerDec()
  }
}
</script>
<style scoped>
#onesinger{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.box1{
    width: 100%;
    height: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: .5rem;
    color:white;
    position: fixed;
    top: 0;
}
.el-icon-arrow-left{
    margin-left: 5%;
}
.title{
    width: 40%;
    margin-left: 25%;
    margin-right: 5%;
}
.logo{
    width: .5rem;
    height: .5rem;
    margin-right: 5%;
}
.box2{
    width: 100%;
    height: 7rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    border-radius: 0 0 .5rem .5rem;
}
.pic-1{
    width: 100%;
    height: 7rem;
    position: absolute;
    z-index: -2;
    opacity: .5;
}
.pic1{
    width: 100%;
    height: 7rem;
    position: absolute;
    z-index: -1;
    border-radius: 0 0 .5rem .5rem;
}
.box2-1{
    margin-left: 6%;
    font-size: .5rem;
    margin-bottom: .2rem;
    color: white;
    font-weight: 900;
}
.box2-2{
    margin-left: 6%;
    font-size: .35rem;
    margin-bottom: .2rem;
    color: whitesmoke;
}
.box2-3{
    width: 100%;
    height: 1rem;
    display: flex;
    flex-direction: row;
}
.team{
    width: 2.5rem;
    height: .8rem;
    background: rgb(189, 189, 202, .5);
    font-size: .4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .4rem;
    color: white;
    margin-left: 5%;
}
.follow{
    width: 2rem;
    height: .8rem;
    font-size: .4rem;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .4rem;
    margin-left: 40%;
}
.box3{
    width: 90%;
    height: 1rem;
    background: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: .2rem;
    margin-bottom: .2rem;
    border-radius: .3rem;
}
.box3-1{
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.box3-1-1{
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.logo1{
    width: 1rem;
    height: 1rem;
}
.box3-1-1 span {
    color: #000;
    font-weight: 800;
    font-size: .35rem;
}
.box3-1-2{
    font-size: .28rem;
    color: gray;
}
.box3-2{
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .35rem;
    font-weight: 800;
}
.box3-3{
    width: 1.2rem;
    height: auto;
    background: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: .3rem;
    border-radius: .4rem;
}
.box4{
    width: 100%;
}
.box4 >>> .el-tabs__header{
    width: 100%;
    height: .8rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box4 >>> .el-tabs__nav-wrap{
    width: 100%;
    height: .8rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box4 >>> .el-tabs__nav-wrap::after{
    background-color: transparent;
}
.box4 >>> .el-tabs__active-bar{
  background: black;
  height: .1rem;
  border-radius: 30%;
}
.box4 >>> .el-tabs__item{
    color: gray;
}
.box4 >>> .is-active{
    font-weight: 800;
    color: #000;
}
.box4 >>> .el-tabs__nav {
    width: 100%;
    background: transparent;
    height: .8rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.pane{
    font-size: .4rem;
}
.box4 >>> .el-tabs__content{
    width: 100%;
    height: auto;
}
.box-song{
    width: 100%;
}
.bs-1{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: .4rem;
    background: white;
}
.bs-2{
    width: 100%;
    height: auto;
    background: white;
}
.bs-2 ul{
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
}
.bs-2 ul li{
    width: 100%;
    height: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: .1rem;
    margin-bottom: .2rem;
}
.bs-2-1{
    width: 14%;
    height: 100%;
    margin-left: 2.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.bs-2-1 span:nth-child(1)
{
    color: gray;
    font-size: .4rem;
}
.bs-2-1 span:nth-child(2){
    color: black;
    font-size: .3rem;
}
.bs-2-2{
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
.bs-2-2-1{
    width: 100%;
    color: gray;
    font-size: .3rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.bs-2-3{
    width: .5rem;
    height: .5rem;
    margin-left: 1%;
    margin-right: 4%;
}
.bs-3{
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #fff;
    z-index: 5;
    top: 0;
    overflow:scroll
}
.bs-3-1{
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
.bs-3-1-1{
    font-size: .4rem;
}
.bs-3-1-2{
    margin-left: 25%;
    font-size: .4rem;
    margin-right: 25%;
    font-weight: 600;
}
.bs-3-1-3{
    font-size: .4rem;
}
.bs-3-2-1{
    width: 14%;
    height: 100%;
    margin-left: 2.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.bs-3-2{
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
.bs-3-3{
    width: 100%;
    height: 7%;
    margin-top: .52%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.bs-3-2-2{
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 1%;
}
.bs-3-2-2-1{
    width: 100%;
    color: gray;
    font-size: .3rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.bs-3-2-3{
    width: .5rem;
    height: .5rem;
    margin-left: 1%;
    margin-right: 4%;
}
.bs-3-3 div{
    width: 33.3%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.bs-3-3 div span:nth-child(1){
    font-size: .5rem;
}
.bs-3 ul li{
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
.box-album{
    width: 100%;
    height: auto;
}
.box-album ul{
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
}
.box-album ul li{
    width: 100%;
    height: 1.8rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.pic3{
    width: 1.6rem;
    height: 1.6rem;
    border-radius: .3rem;
}
.ba-1{
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 2.5%;
}
.ba-1 span:nth-child(1){
    width: 100%;
    font-size: .4rem;
    color: black;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.ba-1 span:nth-child(2){
    font-size: .3rem;
    color: gray;
    margin-top: .1rem;

}
.ba-2{
    width: 5%;
    font-size: .4rem;
}
.bv-1{
    width: 100%;
    height: .8rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.bv-1 >>> .el-icon-check::before{
    display: none;
}
.bv-1 >>> .el-input__inner{
    width: 1.5rem;
    border: none;
}
.bv-2{
    width: 100% ;
    height: auto;
    margin-top: .2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
}
.bv-2-1{
  width: 49%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  margin-left: 1%;
  margin-right: 1%;
  list-style-type: none;
}
.bv-2-1 li{
    margin-bottom: .2rem;
}
.name-box{
    width: 100%;
    height: 1rem;
    word-break: break-all;
    white-space: pre-wrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.pic2{
  width: 100%;
  height: 3rem;
  border-radius: .3rem;
}
.tag{
  position: absolute;
  width: 100%;
  height: .5rem;
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bt-1{
    width: 100%;
    margin-top: .1rem;
    margin-bottom: .1rem;
}
.bt-1 span:nth-child(1){
    width: 10%;
    font-size: .4rem;
    margin-left: 5%;
}
.bt-1 span:nth-child(2){
    font-size: .3rem;
    margin-left: 60%;
}
.bt-2{
    width: 80%;
    height: 1.5rem;
    margin-left: 6%;
}
.bt-2 span{
    font-size: .35rem;
    color: gray;
    padding: 0;
    margin: 0;
    text-overflow:ellipsis;
    overflow:hidden;
}
.bt-3{
    width: 100%;
}
.bt-3 span:nth-child(1){
    width: 10%;
    font-size: .4rem;
    margin-left: 5%;
}
.bt-3 span:nth-child(2){
    font-size: .3rem;
    margin-left: 60%;
}
.bt-4{
    width: 80%;
    height: 3.6rem;
    margin-left: 6%;
}
.bt-4 ul{
    width: 100%;
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
}
.bt-4 ul li{
    width: 100%;
    height: 1.7rem;
    display: flex;
    flex-direction: row;
    margin-top: .1rem;
}
.bt-5{
    font-size: .4rem;
    margin-left: 5%;
}
.bt-6{
    width: 90%;
    height: 2.5rem;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    margin: 0;
    margin-left: 6%;
    margin-top: .2rem;
    overflow: scroll;
}
.bt-6::-webkit-scrollbar{
    display: none;
}
.bt-6 li{
    display: flex;
    flex-direction: column;
    font-size: .4rem;
    justify-content: center;
    align-items: center;
    margin-right: .2rem;
}
.h-pic{
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
}
.bt-7{
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: whitesmoke;
    z-index: 5;
    top: 0;
    overflow:scroll;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
}
.bt-7-1{
    width: 100%;
    height: 5%;
    font-size: .5rem;
    color: #000;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: white;
}
.bt-7-2{
    width: 80%;
    height: 90%;
    background:whitesmoke;
    overflow: scroll;
}
.bt-7-2 ul{
    padding: 0;
    list-style-type: none;
}
.bt-7-2::-webkit-scrollbar{
    display: none;
}
</style>
<style>
.el-popper{
    width: 1.6rem;
}
.el-icon-check{
    display: none;
}
.el-cascader-node.is-active{
    color: #000;
}
</style>
