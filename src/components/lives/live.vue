<template>
    <div id="live">
        <div class="box1">
            <span>{{liveData.title}}</span>
        </div>
        <div class="box2">
            <ul>
                <li v-for="(item,index) in liveData.listData" :key="index">
                     <div class="box3">
                        <img class="pic1" :src="item.picUrl"/>
                            <div class="tags">
                                <div class="tag1">
                                    <img class="logo1" src="@/assets/images/live1.png"/>
                                    LIVE
                                    </div>
                                <div class="tag2">
                                    <img class="pic2" :src="item.dj.avatarUrl"/>
                                    <div class="num">
                                        <div class="el-icon-user">{{item.playCount}}</div>
                                    </div>
                                </div>
                            </div>
                        <span class="name">{{item.name}}</span>
                        <span class="message">{{item.rcmdtext}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'live',
  props: ['liveData'],
  data () {
    return {
      list: []
    }
  },
  mounted: function () {
    var that = this
    axios({
      method: 'get',
      url: `http://localhost:3000/dj/hot?limit=10`,
      withCredentials: true
    }).then(function (res) {
      that.list = res.data.djRadios
    })
  }
}
</script>
<style scoped>
#live{
    width: 90%;
    height: 100%;
}
.box1{
    width: 100%;
    height: .8rem;
}
.box1 span:nth-child(1){
    font-size: .5rem;
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
    width:3.5rem;
    height:100%;
    position:relative;
    margin-right: .2rem;
}
.pic1{
    width:3.5rem;
    height:4rem;
    border-radius:.3rem;
}
.pic2{
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
    margin-right: .5rem;
}
.num{
    width: 2rem;
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
    width:3.5rem;
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
    width:3.5rem;
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
    font-size: .35rem;
    color: black;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.message{
    font-size: .35rem;
    color: gray;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>
