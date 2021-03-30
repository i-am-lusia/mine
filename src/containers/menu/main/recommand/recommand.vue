<template>
    <div id="recommand">
        <div class="thehellobox">
          <hello></hello>
        </div>
        <!-- 你的歌单补给站 -->
        <div class="song-list-block" style="height:8.4rem">
          <doubleSongList :songListData="newListData"></doubleSongList>
        </div>
        <!-- 根据“***”推荐 -->
        <div class="song-list-recommand-block">
          <recommandSongList :songListData="recommandSongListData"></recommandSongList>
        </div>
        <!-- 你最近的悦耳旋律 -->
        <div class="song-list-block">
          <songlist :songListData="nearListData"></songlist>
        </div>
        <!-- DJ,Drop the beat! -->
        <div class="song-list-block">
          <songlist :songListData="djListData"></songlist>
        </div>
        <!-- 最热门的电台节目，一键获得 -->
        <div class="song-list-block">
          <songlist :songListData="radioListData"></songlist>
        </div>
        <!-- 等你来听的宝藏声音 -->
        <div class="song-list-block" style="height:5.8rem">
          <live :liveData="liveData"></live>
        </div>
        <!-- 根据“***”推荐 -->
        <div class="song-list-recommand-block">
          <recommandSongList :songListData="recommandSongListData"></recommandSongList>
        </div>
        <!-- 和"hjfdgjhksdf"一样好听 -->
        <div class="song-list-block">
          <songlist :songListData="recommandSingerListData"></songlist>
        </div>
        <!-- 宝藏歌手集合 -->
        <div class="song-list-block">
            <songlist :songListData="singerListData"></songlist>
        </div>
        <div class="bottom">
        </div>
    </div>
</template>
<script>
import hello from '@/components/pages/first/recommand/listbox/hello'
import axios from 'axios'
import Songlist from '../../../../components/songlist/songlist.vue'
import doubleSongList from '../../../../components/doubleSongList/doubleSongList.vue'
import recommandSongList from '../../../../components/recommandSongList/recommandSongList.vue'
import Live from '../../../../components/lives/live.vue'
export default {
  name: 'recommand',
  components: {
    hello,
    Songlist,
    doubleSongList,
    recommandSongList,
    Live
  },
  data () {
    return {
      songlists: [],
      newListData: {
        listName: '你的歌单补给站',
        listOneData: [],
        listTwoData: []
      },
      nearListData: {
        listName: '你最近的悦耳旋律',
        listData: []
      },
      djListData: {
        listName: 'DJ,Drop the beat!',
        listData: []
      },
      radioListData: {
        listName: '最热门的电台节目，一键获得',
        listData: []
      },
      recommandSingerListData: {
        listName: '和"hjfdgjhksdf"一样好听',
        listData: []
      },
      singerListData: {
        listName: '宝藏歌手集合',
        listData: []
      },
      recommandSongListData: {
        singerName: '',
        listData: []
      },
      liveData: {
        title: '等你来听的宝藏声音',
        listData: []
      }
    }
  },
  methods: {
    async getSongList () {
      let songlists = []
      const res = await axios({
        url: `http://localhost:3000/top/playlist?limit=60`,
        withCredentials: true
      })
      console.log(songlists)
      console.log(res)
      for (let i = 0; i < 60;) {
        songlists.push(res.data.playlists.slice(i, i += 10))
      }
      this.newListData.listOneData = songlists[0]
      this.newListData.listTwoData = songlists[1]
      this.nearListData.listData = songlists[2]
      this.djListData.listData = songlists[3]
      this.radioListData.listData = songlists[4]
      this.recommandSingerListData = songlists[5]
    }
  },
  mounted () {
    this.getSongList()
  }
  /* mounted: function () {
    var that = this
    // var songlists = []
    /* axios({
      method: 'get',
      url: `http://localhost:3000/personalized?limit=60`,
      withCredentials: true
    }).then(function (res) {
      console.log(res)
      for (let i = 0; i < res.data.result.length;) {
        songlists.push(res.data.result.slice(i, i += 10))
      }
      console.log(songlists)
      that.newListData.listOneData = songlists[0]
      that.newListData.listTwoData = songlists[0]
      that.nearListData.listData = songlists[0]
      that.djListData.listData = songlists[1]
      that.radioListData.listData = songlists[2]
      that.songlistfive = songlists[3]
      that.recommandSingerListData.listData = songlists[4]
      that.singerListData.listData = songlists[5]
      that.nearListData.listData = songlists[0]
    }) */
  /* axios({
      method: 'get',
      url: `http://localhost:3000/artist/album?id=6454&limit=9`,
      withCredentials: true
    }).then(function (res) {
      that.recommandSongListData.singerName = res.data.artist.name
      for (let i = 0; i < res.data.hotAlbums.length;) {
        that.recommandSongListData.listData.push(res.data.hotAlbums.slice(i, i += 3))
      }
    }) */
  /* axios({
      method: 'get',
      url: `http://localhost:3000/dj/hot?limit=10`,
      withCredentials: true
    }).then(function (res) {
      that.liveData.listData = res.data.djRadios
    })
  } */
}
</script>
<style>
@import './index.css';
.thehellobox{
  width: 100%;
  height: 4.5rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
