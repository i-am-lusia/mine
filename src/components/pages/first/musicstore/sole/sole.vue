<template>
    <div id="sole">
        <div class="box1">
            <span>独家内容</span>
            <span>更多></span>
        </div>
        <div class="box2">
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <div class="box3">
                        <img class="pic1" :src="item.sPicUrl"/>
                        <span class="message">{{item.name}} | {{item.message}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'sole',
  data () {
    return {
      list: []
    }
  },
  mounted: function () {
    var that = this
    axios({
      method: 'get',
      url: `http://localhost:3000/personalized/privatecontent`,
      withCredentials: true
    }).then(function (res) {
      that.list = res.data.result
    })
  }
}
</script>
<style scoped>
#sole{
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
    width: 6rem;
    height: 4rem;
    border-radius: .3rem;
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
    width:6rem;
    height:100%;
    position:relative;
    margin-right: .2rem;
}
.message{
    font-size: .4rem;
    color: black;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>
