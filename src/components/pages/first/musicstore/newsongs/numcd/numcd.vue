<template>
    <div id="numcd">
        <img class="postpic" :src="products[0].coverUrl"/>
        <div class="box1" >
            <img class="cdpic" src="@/assets/images/cd.png"/>
            <div class="message">
                <span class="name">{{products[0].albumName}}</span>
                <span class="singger">{{products[0].artistName}}</span>
                <el-button round>立即支持</el-button>
                <div class="sell">
                    <span>已售</span><span>{{products[0].saleNum}}</span><span>万张</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'numcd',
  data () {
    return {
      products: [
        {
          coverUrl: undefined
        }
      ]
    }
  },
  mounted: function () {
    var that = this
    axios({
      method: 'get',
      url: `http://localhost:3000/album/list?limit=1`,
      withCredentials: true
    }).then(function (res) {
      that.products = res.data.products
    })
  }
}
</script>
<style scoped>
#numcd{
    width: 100%;
    background-color: white;
    margin-top: .2rem;
}
.box1{
    width: 100%;
    height: 3.5rem;
    display: flex;
    flex-direction: row;
}
.box2{
    width: 100%;
    margin-top: .1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.box2 span{
    font-family: Arial, Helvetica, sans-serif;
    font-size: .45rem;
    margin-left: .5rem;
}
.cdpic{
    width: 3rem;
    height: 3rem;
    margin-top: .3rem;
    margin-left: .5rem;
}
.message{
    width: 5rem;
    height: 4rem;
    margin-top: .2rem;
    margin-left: .4rem;
    height: 3rem;
    display: flex;
    flex-direction: column;
}
.el-button{
    width: 3rem;
    height: .8rem;
    color: white;
    background-color: yellowgreen;
    border: none;
    margin-top: .2rem;
}
.name{
    font-size: .5rem;
    font-family: Helvetica;
    color: black;
    white-space:nowrap;
    text-overflow:ellipsis;
    overflow:hidden;
    margin-top: .1rem;
}
.singger{
    font-size: .4rem;
    font-family: Helvetica;
    color: gray;
    margin-left: .1rem;
    margin-top: .1rem;
}
.sell span:nth-child(1){
    font-size: .4rem;
    color: grey;
}
.sell span:nth-child(2){
    font-size: .6rem;
    margin-left: .1rem;
    margin-right: .1rem;
    color: black;
}
.sell span:nth-child(3){
    font-size: .4rem;
    color: grey;
}
.postpic{
    width: 3rem;
    height: 3rem;
    border-radius: .3rem;
    position: absolute;
    margin-top: .3rem;
}
</style>
