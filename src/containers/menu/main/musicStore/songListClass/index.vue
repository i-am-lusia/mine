<template>
    <div id="allSongList">
        <div class="title">
            <span class="el-icon-arrow-left" @click="goBack ()" style="margin-left:2.5%"></span>
            <span style="margin-left:28%">分类歌单</span>
            <span style="font-size:.4rem;margin-left:26%;margin-right:2.5%">投稿</span>
            <span class="el-icon-search"></span>
        </div>
        <div style="width: 90%;height: 4rem;margin-top: 1rem;">
            <el-carousel type="card" indicator-position="none">
              <el-carousel-item v-for="item in bannerData" :key="item.name">
                  <img style="width: 4rem;height: 4rem;border-radius: .3rem;" :src="item.coverImgUrl"/>
              </el-carousel-item>
            </el-carousel>
        </div>
        <div id="box">
            <ul>
                <li v-for="(item,index) in songListData" :key="index">
                  <img style="width: 2.8rem;height: 2.8rem;border-radius: .3rem;" :src="item.coverImgUrl"/>
                  <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'allSongList',
  data () {
    return {
      bannerData: [],
      songListData: []
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    async getBannerSongList () {
      const res = await axios({
        url: `http://localhost:3000/top/playlist?limit=10&order=new`,
        withCredentials: true
      })
      this.bannerData = res.data.playlists
      console.log(res.data.playlists)
    },
    async getSongList () {
      const res = await axios({
        url: `http://localhost:3000/top/playlist/highquality`,
        withCredentials: true
      })
      this.songListData = res.data.playlists
      console.log(res.data)
    }
  },
  mounted () {
    this.getBannerSongList()
    this.getSongList()
  }
}
</script>
<style scoped>
#allSongList{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: scroll;
    background: white;
}
.title{
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
#allSongList >>> .el-carousel-item{
  height: 4rem;
  display: flex;
  flex-direction:column
}
#box ul {
    overflow: hidden;
    width: 90%;
    background: none;
    padding: 0;
    margin-left: 5%;
  }
  #box li {
    list-style: none;
    float: left;
    width: 3rem; /*可以用百分比*/
    height: 4rem; /*可以用百分比*/
    margin-top: .1rem;
  }
  #doubleRank li > div {
    margin: 0 10px;
    border-radius: 8px;
    height: 1rem;
    display: flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
  }
</style>
<style>

.el-carousel{
  height: 5rem;
}
.el-carousel__item .el-carousel__item--card{
  height: 4rem;
  display: flex;
  flex-direction:column;
}
.el-carousel__arrow{
  display:none;
}
.el-carousel__container{
  height: 4rem
}
</style>
