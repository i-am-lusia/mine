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
    <!-- 二维码登录模块 -->
    <div class='qrCodeBox' v-if="!isLogin">
      <div style="font-size: .3rem;margin-top: 1rem;margin-left:2rem;font-weight: 600">
        <span>请用手机下面二维码以进入音乐播放器：</span>
      </div>
      <img class="qrCode"  id="qrCode" :src="qrCode" @click="login()" />
      <div style="font-size: .3rem;font-weight: 600;margin-top: 4.3rem;display: flex;justify-content: center;align-items: center;">
        <span>注意： 本音乐播放器暂未开放除二维码的登录方式</span>
      </div>
    </div>
  </div>
</template>
<script>
import menulist from '../src/containers/menu/menulist.vue'
import Playbox from './containers/playbox/playbox.vue'
import Searchbox from './components/searchbox/searchbox.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    menulist,
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
      isSongList: false,
      singerId: '11972054',
      qrCode: null,
      unikey: null,
      userData: null,
      isLogin: false
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
    },
    async checkStatus (key) {
      const res = await axios({
        url: `http://localhost:3000/login/qr/check?key=${key}&timerstamp=${Date.now()}`,
        withCredentials: true
      })
      return res.data
    },
    async getLoginStatus () {
      const res = await axios({
        url: `http://localhost:3000/login/status?timerstamp=${Date.now()}`,
        withCredentials: true
      })
      this.userData = res.data.data
      if (res.data.data.account) {
        this.$store.commit('updateUserData', this.userData)
        this.isLogin = true
      }
    },
    async login () {
      var that = this
      this.getLoginStatus()
      const res1 = await axios({
        method: 'get',
        url: `http://localhost:3000/login/qr/key?timerstamp=${Date.now()}`,
        withCredentials: true
      })
      that.unikey = res1.data.data.unikey
      const res2 = await axios({
        url: `http://localhost:3000/login/qr/create?key=${that.unikey}&qrimg=true&timerstamp=${Date.now()}`,
        withCredentials: true
      })
      that.qrCode = res2.data.data.qrimg
      let timer = setInterval(async () => {
        if (this.isLogin) return
        const status = await this.checkStatus(that.unikey)
        if (status.code === 800) {
          console.log('二维码已过期,请重新获取')
          clearInterval(timer)
        }
        if (status.code === 803) {
          clearInterval(timer)
          console.log('登录成功')
          this.getLoginStatus()
          this.isLogin = true
        }
      }, 3000)
    }
  },
  mounted () {
    this.login()
  }
}
</script>
<style>
.qrCodeBox{
  position: absolute;
  z-index: 10;
  left:0;
  right:0;
  top:0;
  bottom:0;
  margin: auto;
  width: 9rem;
  height: 7rem;
  background-color: rgba(245,245,245,.9);
}
.qrCode{
  position: absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  margin: auto;
}
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
