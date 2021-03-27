<template>
    <div id="special">
      <div class="box1">编辑甄选</div>
      <div class="box2">
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <div class="box" >
                      <img :src="item.coverImgUrl"/>
                    </div>
                    <div class="tag">
                      <span >{{item.tags[0]}}</span>
                      </div>
                    <div style="width:3rem;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;">
                      <span class="name">{{item.name}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'special',
  data () {
    return {
      list: []
    }
  },
  mounted: function () {
    var that = this
    axios({
      method: 'get',
      url: `http://localhost:3000/top/playlist?limit=10&order=hot`,
      withCredentials: true
    }).then(function (res) {
      that.list = res.data.playlists
    })
  }
}
</script>
<style scoped>
#special{
  width: 90%;
  height: 100%;
}
.box1{
  width: 100%;
  font-size: .5rem;
  color: black;
}
.box2{
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: .1rem;
    overflow: scroll;
}
.box2::-webkit-scrollbar{
    display: none;
}
ul{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
}
li{
    display: flex;
    flex-direction: column;
    margin-right: .2rem;
    position: relative;
}
.box{
    width: 100%;
    height: 3rem;
    background-color: white;
    border-radius: .3rem;
}
.box img{
    width: auto;
    height: 100%;
    border-radius: .3rem;
}
.name{
    margin-top: .2rem;
    color: black;
    font-size: .4rem;
}
.tag{
  width:1rem;
  height: .5rem;
  background-color: gainsboro;
  border-radius: .2rem;
  font-family: Arial, Helvetica, sans-serif;
  font-size: .2rem;
  color: white;
  text-align: center;
  position: absolute;
  top:2.5rem;
}
</style>
