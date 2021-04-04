<template>
    <div id="singerDetail">
        <!-- 歌手标题 -->
        <div class="box1">
            <span class="el-icon-arrow-left" @click="goBack()"></span>
            <span class="title" >{{singerMessage.name}}</span>
            <img class="share" src="@/assets/images/share.png"/>
            <span class="el-icon-more"></span>
        </div>
        <!-- 歌手背景图及相应区域组件 -->
        <div class="box2">
            <img class="cover" :src="singerMessage.cover"/>
            <span class="coverName">{{singerMessage.name}}</span>
            <span class="coverFans">{{Math.ceil(Math.random()*10000)}}万粉丝</span>
            <div class="coverGroup">
                <div class="team">
                    <img style="width:.5rem;height: .5rem;" src="@/assets/images/putong1.png"/>
                    <span>扑通小组</span>
                </div>
                <div class="follow">
                    <span>+关注</span>
                </div>
            </div>
        </div>
        <el-tabs class="box4">
            <el-tab-pane>
                <span class="pane" slot="label">歌曲</span>
                <div style="width:100%">
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
                            <img class="albumCover" :src="item.blurPicUrl"/>
                            <div class="ba-1">
                                <span >{{item.name}}</span>
                                <span>{{new Date(item.publishTime).getFullYear()}}年{{new Date(item.publishTime).getMonth()+1}}月{{new Date(item.publishTime).getDate()}}日 {{item.size}}首</span>
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
                <div>
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
                                    <img class="videoCover" :src="item.imgurl"/>
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
                                <img class="videoCover" :src="item.imgurl"/>
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
                <div>
                    <div class="bt-1">
                        <span>歌手资料</span>
                        <span @click="isDec=true">更多></span>
                    </div>
                    <div class="bt-2">
                        <span>
                            {{singerMessage.briefDesc}}
                        </span>
                    </div>
                    <div style="font-size: .4rem; margin-top: .5rem; margin-left: 5%;font-weight: 600">
                        <span>相似歌手</span>
                    </div>
                    <avatarList :simi="simi"></avatarList>
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
import avatarList from '../../../../../components/avatarList/index.vue'
import axios from 'axios'
export default {
  name: 'singerDetail',
  components: {avatarList},
  data () {
    return {
      singerId: null,
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
      isDigital: true,
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
    async getSingerData () {
      var url = `http://localhost:3000/artist/detail?id=${this.singerId}`
      const res = await axios({
        url: url,
        withCredentials: true
      })
      this.singerMessage = res.data.data.artist
    },
    async getSongData () {
      var url = `http://localhost:3000/artists?id=${this.singerId}`
      const res = await axios({
        url: url,
        withCredentials: true
      })
      this.songs = res.data.hotSongs
    },
    async getAblum () {
      var url = `http://localhost:3000/artist/album?id=${this.singerId}`
      const res = await axios({
        url: url,
        withCredentials: true
      })
      this.albums = res.data.hotAlbums
      this.top = res.data.hotAlbums[0]
    },
    async getMv () {
      var url = `http://localhost:3000/artist/mv?id=${this.singerId}`
      const res = await axios({
        url: url,
        withCredentials: true
      })
      let len = res.data.mvs.length
      this.mv1 = res.data.mvs.slice(0, Math.floor(len / 2))
      this.mv2 = res.data.mvs.slice(Math.floor(len / 2), len)
    },
    async getSimi () {
      var url = `http://localhost:3000/simi/artist?id=${this.singerId}`
      const res = await axios({
        url: url,
        withCredentials: true
      })
      this.simi = res.data.artists
    },
    async getSingerDec () {
      var url = `http://localhost:3000/artist/desc?id=${this.singerId}`
      const res = await axios({
        url: url,
        withCredentials: true
      })
      this.passage = res.data.introduction
    },
    goBack () {
      this.$router.go(-1)
    }
  },
  mounted () {
    this.singerId = this.$route.query.id
    this.getSingerData()
    this.getSongData()
    this.getAblum()
    this.getMv()
    this.getSimi()
    this.getSingerDec()
  }
}
</script>
<style scoped>
@import './index.css';
</style>
<style>
.el-popper{
    width: 1.6rem;
}
.el-icon-check{
    display: none;
}
.el-cascader-node{
  padding: 0;
  width: 1.6rem;
  margin: 0;
}
.el-cascader-node.is-active{
    color: #000;
}
.el-cascader-node__label{
  font-size: .3rem;
  width: 1rem;
}
</style>
