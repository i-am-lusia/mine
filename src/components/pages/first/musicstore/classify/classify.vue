<template>
    <div id="classify">
        <div class="box1">
            <span>分类专区</span>
            <span>更多></span>
        </div>
        <div class="box2">
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <div class="box3">
                        <img class="pic1" :src="item.picUrl"/>
                        <div class="tag">
                            <div>
                            <span>{{item.name}}</span>
                            </div>
                        </div>
                        <span class="message">{{item.rcmdText}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'classify',
  data () {
    return {
      list: []
    }
  },
  mounted: function () {
    var that = this
    axios({
      method: 'get',
      url: `http://localhost:3000/dj/today/perfered`,
      withCredentials: true
    }).then(function (res) {
      that.list = res.data.data
    })
  }
}
</script>
<style scoped>
#classify{
    width: 90%;
    height: 100%;
}
.box1{
    width: 100%;
    height: .8rem;
}
.box1 span:nth-child(1){
    font-size: .5rem;
    margin-right: 60%;
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
.pic1{
    width: 5rem;
    height: 4rem;
    border-radius: .3rem;
}
.pic2{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin-right: .2rem;
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
    width: 5rem;
    margin-left: .3rem;
    margin-top: 3.2rem;
    position: absolute;
    color: whitesmoke;
    font-size: .45rem;
}
.tag div{
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}
.tag div span{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.message{
  margin-top: .1rem;
    font-size: .35rem;
    color: black;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>
