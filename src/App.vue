<template>
  <div id="app">
    <div  class="thesearch" >
       <searchbox></searchbox>
      </div>
    <div>
      <router-view name="content"></router-view>
    </div>
    <transition  name="el-zoom-in-bottom">
      <div  class="themenu" v-if="!isSongList">
        <menulist @menuto="menuto"></menulist>
        <playbox></playbox>
      </div>
    </transition>
  </div>
</template>
<script>
import menulist from './containers/menu/menulist.vue'
import Playlist from './components/playlist/playlist.vue'
import singer from '@/components/pages/first/singer.vue'
import Allranks from './components/pages/first/allranks.vue'
import Onerank from './components/pages/first/onerank.vue'
import Songlist from './components/pages/first/songlist.vue'
import Onesinger from './components/pages/first/onesinger.vue'
import Fourth from './components/pages/fourth/fourth.vue'
import Playbox from './containers/playbox/playbox.vue'
import Searchbox from './components/searchbox/searchbox.vue'
// import axios from 'axios'
export default {
  name: 'App',
  components: {
    menulist,
    Playlist,
    singer,
    Allranks,
    Onerank,
    Songlist,
    Onesinger,
    Fourth,
    Playbox,
    Searchbox
  },
  data () {
    return {
      isPlaysong: false,
      menuindex: '1',
      isSearch: false,
      musics: [],
      id: undefined,
      isSongList: false
    }
  },
  methods: {
    toPlaysong () {
      this.isPlaysong = true
    },
    closePlaysong (data) {
      this.isPlaysong = data
    },
    menuto (data) {
      this.menuindex = data
      console.log(this.menuindex)
      switch (this.menuindex) {
        case '1':this.$router.push({path: '/first'}); return
        case '2':this.$router.push({path: '/second'}); return
        case '3':this.$router.push({path: '/third'}); return
        default :this.$router.push({path: '/fourth'})
      }
    },
    tolist () {
      this.isSongList = true
    }
  }/*
  mounted: function () {
    var that = this
    axios({
      method: 'get',
      url: `http://localhost:3000/song/url?id=`,
      withCredentials: true
    }).then(function (res) {
      console.log(res.data)
      that.id = res.data.data[0].url
    })
  } */
}
</script>

<style>
body{
  width: 100%;
  height: 100%;
  margin: 0;
}
.themenu{
  position: fixed;
  width: 100%;
  left: 0;
  bottom: 0;
  height: 1.2rem;
  z-index: 6;
}
.thesearch{
  position: fixed;
  width: 100%;
  left: 0;
  top:1.1rem;
  height: 1rem;
  background-color: white;
  z-index: 6;
}
.play1{
    width:.8rem;
    height: .8rem;
    margin-left: 70%;
    margin-top: .5rem;
    position: absolute;
}
.play2{
    width: .7rem;
    height: .7rem;
    margin-left: 85%;
    margin-top: .6rem;
    position: absolute;
}
.theSonglist{
    width: 100%;
    position: fixed;
    z-index: 20;
    height: 100%;
    bottom: 0;
    background-color:rgba(129, 122, 122, 0.7);
}
.thelists{
    width: 100%;
    height: 65%;
    background-color: rgba(255, 255, 255, 0.94);;
    position: fixed;
    bottom: 1.5rem;
    z-index: 30;
}
.close{
  width: 100%;
  height: 1.5rem;
  bottom: 0;
  position: absolute;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: .45rem;
}
</style>
