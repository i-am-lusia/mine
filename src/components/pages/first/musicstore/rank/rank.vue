<template>
    <div id="rank">
        <div class="box1">
            <span>排行榜</span>
            <span>更多></span>
        </div>
        <div class="box2">
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <img :src="item.coverImgUrl"/>
                    <div class="box">
                        <div class="message">
                        <div>
                            <span class="name">{{item.name}}</span>
                            <div>01<span>{{item.tracks[0].first}}-{{item.tracks[0].second}}</span></div>
                            <div>02<span>{{item.tracks[1].first}}-{{item.tracks[1].second}}</span></div>
                            <div>03<span>{{item.tracks[2].first}}-{{item.tracks[2].second}}</span></div>
                        </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'rank',
  data () {
    return {
      list: [{
        coverImgUrl: undefined,
        tracks: [
          {
            first: undefined,
            second: undefined
          },
          {
            first: undefined,
            second: undefined
          },
          {
            first: undefined,
            second: undefined
          }
        ]
      }]
    }
  },
  mounted: function () {
    var that = this
    axios({
      method: 'get',
      url: `http://localhost:3000/toplist/detail`,
      withCredentials: true
    }).then(function (res) {
      that.list.pop()
      that.list.push(res.data.list[0])
      that.list.push(res.data.list[1])
    })
  }
}
</script>
<style scoped>
#rank{
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.box1{
    width: 100%;
    height: .8rem;
}
.box1 span:nth-child(1){
    font-size: .5rem;
    margin-right: 65%;
}
.box2{
    width: 100%;
    height: 4rem;
    display: flex;
    flex-direction: row;
    overflow: scroll;
}
.box2::-webkit-scrollbar{
    display: none;
}
.box{
    width: 100%;
    position: relative;
}
.message{
    margin-top: .25rem;
    width: 100%;
    height: 3rem;
    border-radius: .3rem;
}
.message div{
    margin-left: 4rem;
    display: flex;
    flex-direction: column;
}
.message div div{
    margin: 0;
    display: flex;
    flex-direction: row;
    margin-top: .1rem;
    font-size: .4rem;
    color: black;
}
.message div div span{
    color: grey;
    margin-left: .3rem;
    text-overflow:ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-right: .1rem;
}
.name{
    font-size: .5rem;
    font-family: Arial, Helvetica, sans-serif;
    margin-top: .1rem;
}
img{
    width: 3.5rem;
    height: 3.5rem;
    border-radius: .3rem;
    position: absolute;
    z-index: 1;
}
ul{
    width: 100%;
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    flex-direction: row;
}
li{
    padding: 0;
    margin: 0;
    width: 100%;
    position: relative;
    margin-right: .3rem;
}
</style>
