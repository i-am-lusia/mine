<template>
    <div id="allranks">
        <div class="box1">
            <span class="el-icon-arrow-left" @click="close"></span>
            <span>音乐排行榜</span>
        </div>
        <div class="box2">
            <span style="font-size:.4rem">推荐</span>
            <div class="box2-1">
            <ul>
                <li v-for="(item, index) in Recommandlist" :key="index">
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
                <li v-for="(item ,index) in Peaked" :key="index" >
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
                <li class="box4-1" v-for="(item, index) in area" :key="index">
                    <ul class="box4-2">
                        <li v-for="(sitem,sindex) in item" :key="sindex">
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
                <li class="box4-1" v-for="(item, index) in special" :key="index">
                    <ul class="box4-2">
                        <li v-for="(sitem,sindex) in item" :key="sindex">
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
                <li class="box4-1" v-for="(item, index) in gobal" :key="index">
                    <ul class="box4-2">
                        <li v-for="(sitem,sindex) in item" :key="sindex">
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
  name: 'allranks',
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
    close () {
      this.$emit('closeRanks', this.isRanks)
    },
    getData () {
      var that = this
      axios({
        method: 'get',
        url: `http://localhost:3000/toplist`,
        withCredentials: true
      }).then(function (res) {
        that.Recommandlist = res.data.list.slice(0, 5)
        that.Peakedlist = res.data.list.slice(0, 5)
        that.list.push(res.data.list.slice(10, 12).concat(res.data.list.slice(18, 23), res.data.list.slice(26, 28)))
        that.list.push(res.data.list.slice(6, 10).concat(res.data.list.slice(23, 27), res.data.list.slice(28, 32)))
        that.list.push(res.data.list.slice(12, 18))
        that.getTrackids()
      })
    },
    getTrackids () {
      var that = this
      var trackid = []
      for (let i in that.Peakedlist) {
        var url = `http://localhost:3000/playlist/detail?id=` + that.Peakedlist[i].id
        that.Peakedlist[i].list = [{name: undefined}, {name: undefined}, {name: undefined}]
        axios({
          method: 'get',
          url: url,
          withCredentials: true
        }).then(function (res) {
          trackid.push(res.data.playlist.trackIds.slice(0, 3))
          if (trackid.length === that.Peakedlist.length) {
            that.trackid = trackid
            that.getSong()
          }
        })
      }
    },
    getSong () {
      var that = this
      var songs = []
      for (let i in that.trackid) {
        var k = that.trackid[i]
        var song = []
        for (let j in k) {
          var url = `http://localhost:3000/song/detail?ids=` + k[j].id
          axios({
            method: 'get',
            url: url,
            withCredentials: true
          }).then(function (res) {
            song.push(res.data.songs[0])
            if (song.length === 3) {
              songs.push(song.slice(0, 3))
              song.length = 0
            }
            if (songs.length === that.trackid.length) {
              that.song = songs
              that.cleanData()
            }
          })
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
#allranks{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: scroll;
}
.box1{
    width: 100%;
    height: 1rem;
    background: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: .5rem;
    position: fixed;
    top: 0;
    z-index: 5;
}
.el-icon-arrow-left{
    margin-left: 2.5%;
}
.box1 span:nth-child(2){
    margin-left: 30%;
}
.box2{
    width: 90%;
    height: 3.3rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 1.2rem;
}
.box2-1{
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: scroll;
}
.box2-1::-webkit-scrollbar{
    display: none;
}
.box2-1 ul{
    padding: 0;
    margin: 0;
    height: auto;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    overflow: scroll;
}
.box2-1 ul li{
    width:  2.5rem;
    height: 2.5rem;
    border-radius: .3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    margin-right: .2rem;
    background: rgba(0, 0, 0, .3);
}
.tags{
    width: 2.5rem;
    position: absolute;
    z-index: 4;
    margin-top: 2rem;
    color: white;
}
.pic{
    width: 2.5rem;
    position: absolute;
    z-index: -1;
    opacity: .2;
    border-radius: .3rem;
}
.box3{
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: .2rem;
}
.box3 ul{
    padding: 0;
    margin: 0;
    list-style-type: none;
    width: 100%;
    height: auto;
}
.box3 ul li{
    width: 100%;
    height: 3rem;
    background: white;
    border-radius: .3rem;
    display: flex;
    flex-direction: row;
    position: relative;
    margin-top: .2rem;
}
.box3-1{
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
.box3-2{
    width: 3rem;
    height: 3rem;
    margin-left: 67%;
    position: absolute;
    z-index: 5;
    display: flex;
    flex-direction: column;
}
.pic2{
    width: 3rem;
    height: 3rem;
    border-radius: 0 .3rem .3rem 0;
}
.pic3{
    width: 2.8rem;
    height: 2.8rem;
    position: absolute;
    z-index: -1;
    border-radius: .3rem;
}
.box4{
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: .2rem;
}
.box4 ul{
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.box4-1{
    width: 100%;
    height: 3rem;
    margin-top: .2rem;
    display: flex;
    flex-direction: column;
}
.box4-2{
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
}
.box4-3{
    width: 2.8rem;
    height: 2.8rem;
    margin-right: .1rem;
    margin-left: .1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: .35rem;
    border-radius: .3rem;
    white-space: pre-wrap;
    word-break:unset
}
.box5{
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: .2rem;
}

.box5-1{
    width: 100%;
    height: 3rem;
    margin-top: .2rem;
    display: flex;
    flex-direction: row;
}
.box5-2{
    width: 2.8rem;
    height: 2.8rem;
    background: skyblue;
    margin-right: .1rem;
    margin-left: .1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: .4rem;
    border-radius: .3rem;
}
.box6{
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: .2rem;
}
.box6-1{
    width: 100%;
    height: 3rem;
    margin-top: .2rem;
    display: flex;
    flex-direction: row;
}
.box6-2{
    width: 2.8rem;
    height: 2.8rem;
    background: skyblue;
    margin-right: .1rem;
    margin-left: .1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: .4rem;
    border-radius: .3rem;
}
</style>
