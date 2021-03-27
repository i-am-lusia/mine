<template>
    <div id="musician">
        <div class="box1">
            <span>乐人</span>
            <span>更多></span>
        </div>
        <div class="box2">
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <div class="box3">
                        <div class="picbox">
                            <img class="pic1" :src="item.img1v1Url"/>
                        </div>
                        <div class="tag">
                            <div>
                            <div class="el-icon-caret-right"></div>
                            </div>
                        </div>
                        <div class="message">
                            <img class="pic2" :src="item.picUrl"/>
                            <div>
                                <span>{{item.name}}</span>
                                <span>{{item.alias[0]}}</span>
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
  name: 'musician',
  data () {
    return {
      list: []
    }
  },
  mounted: function () {
    var that = this
    axios({
      method: 'get',
      url: `http://localhost:3000/top/artists?offset=0&limit=10`,
      withCredentials: true
    }).then(function (res) {
      that.list = res.data.artists
    })
  }
}
</script>
<style scoped>
#musician{
    width: 90%;
    height: 100%;
}
.box1{
    width: 100%;
    height: .8rem;
}
.box1 span:nth-child(1){
    font-size: .5rem;
    margin-right: 72%;
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
    width: 5rem;
    height: 6rem;
    display:flex;
    flex-direction: column;
}
.picbox{
    width: 100%;
    height: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(93, 93,93, .2);
    border-radius: .3rem;
}
.pic1{
    width: 3rem;
    height: 3rem;
    border-radius: .3rem;
}
.pic2{
    width: 1.2rem;
    height: 1.2rem;
    margin-right: .2rem;
    border-radius: 50%;
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
    width:100%;
    height:100%;
    position:relative;
    margin-right: .2rem;
}
.tag{
    margin-left: 1rem;
    margin-top: 2.8rem;
    width: 1rem;
    height: .5rem;
    position: absolute;
    color: white;
    font-size: .3rem;
    background-color: silver;
    border-radius: .3rem;
}
.tag div{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .4rem;
}

.message{
    width: 100%;
    height: 1.5rem;
    margin-top: .1rem;
    display: flex;
    flex-direction: row;
}
.message div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.message div span{
    font-size: .4rem;
}
.message div span:nth-child(2){
    color:gray
}
</style>
