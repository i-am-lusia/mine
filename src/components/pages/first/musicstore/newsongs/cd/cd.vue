<template>
    <div id="cd">
        <ul class="box1">
            <li v-for="(items,index) in songlist" :key="index">
                <ul class="box2">
            <li v-for="(item,sindex) in items" :key="sindex">
                <img class="pic" :src="item.picUrl">
                <div class="message">
                    <span style="font-size: .4rem;columns: black;">{{item.name}}-{{item.artists[0].name}}</span>
                    <div class="alias">
                    <span>{{item.alias[0]}}</span>
                    </div>
                </div>
                <div class="el-icon-film"></div>
            </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'cd',
  data () {
    return {
      songlist: []
    }
  },
  methods: {
  },
  mounted: function () {
    var that = this
    var albums = []
    axios({
      method: 'get',
      url: `http://localhost:3000/album/new?limit=9`,
      withCredentials: true
    }).then(function (res) {
      for (let i = 0; i < res.data.albums.length;) {
        albums.push(res.data.albums.slice(i, i += 3))
      }
      that.songlist = albums
    })
  }
}
</script>
<style scoped>
#cd{
    width:100%;
    height: 100%;
    display: flex;
}
ul{
    padding: 0;
    list-style-type: none;
    overflow: scroll;
}
ul::-webkit-scrollbar{
    display: none;
}
.pic{
    width: 1.5rem;
    height: 1.5rem;
    border-radius: .3rem;
}
.box2 li{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: .1rem;
}
.box1{
    display: flex;
    flex-direction: row;
}
.box1 li{
    width: 100%;
    margin-right: .4rem;
}
.message{
    width:6rem;
    display: flex;
    flex-direction: column;
    margin-left: .4rem;
}
.alias{
    width: 80%;
    font-size: .2rem;
    color: grey;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
}
.el-icon-film{
    font-size: .5rem;
}
</style>
