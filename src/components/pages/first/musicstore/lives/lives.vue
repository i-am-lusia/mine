<template>
    <div id="lives">
        <div class="box1">
            <span>直播</span>
            <span>更多></span>
        </div>
        <div class="box2">
            <ul>
                <li v-for="(item,index) in list" :key="index">
                     <div class="box3">
                        <img class="pic1" :src="item.blurCoverUrl"/>
                            <div class="tags">
                                <div class="tag1">
                                    <img class="logo1" src="@/assets/images/live1.png"/>
                                    LIVE
                                    </div>
                                <div class="tag2">
                                    <img class="pic2" :src="item.dj.avatarUrl"/>
                                    <div class="num">
                                        <div class="el-icon-user">{{item.listenerCount}}</div>
                                    </div>
                                </div>
                            </div>
                        <span class="name">{{item.name}}</span>
                        <span class="message">{{item.description}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'lives',
  data () {
    return {
      list: []
    }
  },
  mounted: function () {
    var that = this
    axios({
      method: 'get',
      url: `http://localhost:3000/program/recommend`,
      withCredentials: true
    }).then(function (res) {
      that.list = res.data.programs
    })
  }
}
</script>
<style scoped>
#lives{
    width: 90%;
    height: 100%;
}
.box1{
    width: 100%;
    height: .8rem;
}
.box1 span:nth-child(1){
    font-size: .5rem;
    margin-right: 70%;
}
.box1 span:nth-child(2){
    font-size: .3rem;
}
.box2{
    width:100%;
    display:flex;
    justify-content:flex-start;
    align-items:flex-start;
    overflow: scroll;
}
.box2::-webkit-scrollbar{
    display: none;
}
.box3{
    display:flex;
    flex-direction: column;
}
ul{
    padding:0;
    margin: 0;
    width:100%;
    display: flex;
    flex-direction: row;
    list-style-type: none;
}
li{
    width:3rem;
    height:100%;
    position:relative;
    margin-right: .2rem;
}
.pic1{
    width:3rem;
    height:4rem;
    border-radius:.3rem;
}
.pic2{
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
    margin-right: 1rem;
}
.num{
    width: 1.5rem;
    height: .6rem;
    color: white;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .3rem;
}
.tags{
    position:absolute;
    width:3rem;
    height:4rem;
}
.tag1{
    width:1.5rem;
    height:.8rem;
    background-color:black;
    border-radius: .3rem 0 .3rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
    font-size: .4rem;
}
.tag2{
    width:3rem;
    height:.8rem;
    margin-top: 2.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}
.logo1{
    width:.4rem;
    height: .4rem;
    margin-right: .1rem;
}
.name{
    font-size: .42rem;
    color: black;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.message{
    margin-top: .1rem;
    font-size: .3rem;
    color: gray;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>
