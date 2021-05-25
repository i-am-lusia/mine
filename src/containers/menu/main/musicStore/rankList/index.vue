<template>
    <div id="rankList">
        <div class="box1">
            <span class="el-icon-arrow-left" @click="goBack ()"></span>
            <span>音乐排行榜</span>
        </div>
        <div class="box2">
            <span style="font-size:.4rem">推荐</span>
            <div class="box2-1">
            <ul>
                <li v-for="(item, index) in Recommandlist" :key="index" @click="goTo(item)">
                    <span style="color:white;font-size:.35rem;font-weight:900;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">{{item.name}}</span>
                   <!-- <span style="color:white;font-size:.35rem;">{{item.name}}</span>-->
                    <div class="tags">
                        <span class="el-icon-service" style="font-size:.3rem;font-weight:800;margin-left:.1rem"></span>
                       <!-- <span style="margin:0;font-size:.1rem">{{item.playCount}}</span> -->
                        <span class="el-icon-video-play" style="font-size:.3rem;font-weight:800;margin-left:.5rem"></span>
                    </div>
                    <img class="pic" :src="item.coverImgUrl"/>
                </li>
            </ul>
            </div>
        </div>
        <div class="box3">
            <span style="font-size:.4rem">巅峰榜</span>
            <ul >
                <li v-for="(item ,index) in Peaked" :key="index" @click="goTo(item)">
                    <div class="box3-1">
                        <span style="font-size:.38rem;margin-left:5%">{{item.name}}</span>
                        <span style="margin-top:.1rem;margin-left:5%">1.<span>{{item.list[0].name}}</span><span style="color:gray">-{{item.list[0].ar[0].name}}</span></span>
                        <span style="margin-top:.1rem;margin-left:5%">2.<span>{{item.list[1].name}}</span><span style="color:gray">-{{item.list[1].ar[0].name}}</span></span>
                        <span style="margin-top:.1rem;margin-left:5%">3.<span>{{item.list[2].name}}</span><span style="color:gray">-{{item.list[2].ar[0].name}}</span></span>
                    </div>
                    <div class="box3-2">
                        <span style="color:white;margin-left:1.4rem;">{{item.updateFrequency}}</span>
                        <span style="color:white;font-size:.3rem;font-weight:800;">
                            <span class="el-icon-service" style="margin-top:2.3rem;"></span>
                            <span>{{item.playCount}}</span>
                            <span class="el-icon-video-play" ></span>
                        </span>
                    </div>
                    <img class="pic2" :src="item.coverImgUrl"/>
                </li>
            </ul>
        </div>
        <div class="box4">
            <span style="font-size:.4rem">地区榜</span>
            <ul>
                <li class="box4-1" v-for="(item, index) in area" :key="index" >
                    <ul class="box4-2">
                        <li v-for="(sitem,sindex) in item" :key="sindex" @click="goTo(sitem)">
                            <div class="box4-3">
                                <img class="pic3" :src="sitem.coverImgUrl"/>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="box4">
            <span style="font-size:.4rem">特色榜</span>
            <ul>
                <li class="box4-1" v-for="(item, index) in special" :key="index" >
                    <ul class="box4-2">
                        <li v-for="(sitem,sindex) in item" :key="sindex" @click="goTo(sitem)">
                            <div class="box4-3">
                                <img class="pic3" :src="sitem.coverImgUrl"/>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="box4">
            <span style="font-size:.4rem">全球榜</span>
            <ul>
                <li class="box4-1" v-for="(item, index) in gobal" :key="index" >
                    <ul class="box4-2">
                        <li v-for="(sitem,sindex) in item" :key="sindex" @click="goTo(sitem)">
                            <div class="box4-3">
                                <img class="pic3" :src="sitem.coverImgUrl"/>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'rankList',
  data () {
    return {
      isRanks: false,
      Recommandlist: [],
      Peakedlist: [],
      Peaked: [],
      trackid: [],
      song: [],
      list: [],
      area: [],
      special: [],
      gobal: []
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    goTo (data) {
      this.$router.push({path: '/rankDetail', query: {id: data.id}})
    },
    async getData () {
      const res = await axios({
        url: `http://localhost:3000/toplist`,
        withCredentials: true
      })
      this.Recommandlist = res.data.list.slice(0, 5)
      this.Peakedlist = res.data.list.slice(0, 5)
      this.list.push(res.data.list.slice(10, 12).concat(res.data.list.slice(18, 23), res.data.list.slice(26, 28)))
      this.list.push(res.data.list.slice(6, 10).concat(res.data.list.slice(23, 27), res.data.list.slice(28, 32)))
      this.list.push(res.data.list.slice(12, 18))
      this.getTrackids()
    },
    async getTrackids () {
      var that = this
      var trackid = []
      for (let i in that.Peakedlist) {
        var url = `http://localhost:3000/playlist/detail?id=` + that.Peakedlist[i].id
        that.Peakedlist[i].list = [{name: undefined}, {name: undefined}, {name: undefined}]
        const res = await axios({
          url: url,
          withCredentials: true
        })
        trackid.push(res.data.playlist.trackIds.slice(0, 3))
        if (trackid.length === that.Peakedlist.length) {
          that.trackid = trackid
          that.getSong()
        }
      }
    },
    async getSong () {
      var that = this
      var songs = []
      for (let i in that.trackid) {
        var k = that.trackid[i]
        var song = []
        for (let j in k) {
          var url = `http://localhost:3000/song/detail?ids=` + k[j].id
          const res = await axios({
            url: url,
            withCredentials: true
          })
          song.push(res.data.songs[0])
          if (song.length === 3) {
            songs.push(song.slice(0, 3))
            song.length = 0
          }
          if (songs.length === that.trackid.length) {
            that.song = songs
            that.cleanData()
          }
        }
      }
    },
    cleanData () {
      var that = this
      for (let i in that.Peakedlist) {
        that.Peakedlist[i].list = that.song[i]
      }
      for (let i = 0; i < that.list[0].length;) {
        that.area.push(that.list[0].slice(i, i += 3))
      }
      for (let i = 0; i < that.list[1].length;) {
        that.special.push(that.list[1].slice(i, i += 3))
      }
      for (let i = 0; i < that.list[2].length;) {
        that.gobal.push(that.list[2].slice(i, i += 3))
      }
      that.Peaked = that.Peakedlist
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
<style scoped>
@import './index.css';
</style>
