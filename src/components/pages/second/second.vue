<template>
    <div id='second'>
    <div style="position:fixed;top: 0;z-index:10;background-color: white;">
      <div class="tab">
       <ul>
         <li style="width:1rem"><span>推荐</span></li>
         <li><span>音乐现场</span></li>
         <li style="width:1rem"><span>MV</span></li>
         <li><span>大牌直播</span></li>
         <li><span>TME live</span></li>
         <li style="width:1rem"><span>翻唱</span></li>
         <li style="width:1.5rem"><span>影视剧</span></li>
         <li style="width:1rem"><span>舞蹈</span></li>
         <li style="width:1.5rem"><span>二次元</span></li>
       </ul>
      </div>
    </div>
    <div class="thevideo">
      <ul>
        <li v-for="(item,index) in recommandlist" :key="index">
          <ul v-for="(zitem,zindex) in item[0]" :key="zindex">
            <div class="box1">
            <span class="title">{{zitem[0].name}}</span>
            <img class="pic1" :src="zitem[0].cover"/>
            </div>
            <div class="box">
            <div class="box2">
            <ul v-for="(oitem,oindex) in item[1]" :key="oindex">
              <ul v-for="(fitem,findex) in oitem" :key="findex">
              <div class="box3">
                  <div class="tag">
                    <img style="width:.3rem;height:.3rem;" :src="fitem.cover"/>
                    <span style="font-size:.3rem;color:white;">{{fitem.playCount}}</span>
                    <span style="font-size:.3rem;color:white;margin-left:50%;">{{fitem.duration}}</span>
                  </div>
                  <img class="pic2" :src="fitem.cover"/>
                  <div class="name-box">
                  <span >{{fitem.name}}</span>
                  </div>
                  <span style="margin-left: 2.5%;font-size:.35rem;color:gray">{{fitem.artistName}}</span>
                </div>
              </ul>
            </ul>
            </div>
            <div class="box2">
            <ul v-for="(oitem,oindex) in item[2]" :key="oindex">
              <ul v-for="(fitem,findex) in oitem" :key="findex">
              <div class="box3">
                  <div class="tag">
                    <img style="width:.3rem;height:.3rem;" :src="fitem.cover"/>
                    <span style="font-size:.3rem;color:white;">{{fitem.playCount}}</span>
                    <span style="font-size:.3rem;color:white;margin-left:50%;">{{fitem.duration}}</span>
                  </div>
                  <img class="pic2" :src="fitem.cover"/>
                  <div class="name-box">
                  <span>{{fitem.name}}</span>
                  </div>
                  <span style="margin-left: 2.5%;font-size:.35rem;color:gray">{{fitem.artistName}}</span>
                </div>
              </ul>
            </ul>
            </div>
            </div>
          </ul>
        </li>
      </ul>
    </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'second',
  data () {
    return {
      recommandlist: []
    }
  },
  mounted: function () {
    var that = this
    axios({
      method: 'get',
      url: `http://localhost:3000/mv/all?limit=35&offset=0`,
      withCredentials: true
    }).then(function (res) {
      var list = []
      var list1 = []
      var list2 = []
      var list3 = []
      for (let i = 0; i < res.data.data.length;) {
        list1.push(res.data.data.slice(i, i += 1))
        list2.push(res.data.data.slice(i, i += 3))
        list3.push(res.data.data.slice(i, i += 3))
        let j = []
        j.push(list1.slice())
        j.push(list2.slice())
        j.push(list3.slice())
        list.push(j)
        list1.length = 0
        list2.length = 0
        list3.length = 0
      }
      that.recommandlist = list
      console.log(list)
    })
  }
}
</script>
<style scoped>
#second{
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
}
.tab{
  max-width: 10rem;
  height: .8rem;
  margin-top: .3rem;
  display: flex;
  overflow: scroll;
  background-color: white;
}
.tab::-webkit-scrollbar{
  display: none;
}
ul{
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    margin-bottom: .2rem;
}
.tab ul li{
    font-size: .4rem;
    width: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: .2rem;
    margin-left: .2rem;
}
.tab ul li:hover{
  font-size: .5rem;
}
.thevideo{
  width: 100%;
  margin-top: 2.5rem;
  height: auto;
  color: #000;
}
.thevideo ul{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.thevideo ul li{
  width: 90%;
  height: auto;
}
.box1{
  width: 100%;
  height: 4rem;
  position: relative;
}
.pic1{
  width: 100%;
  height: 4rem;
  border-radius: .3rem;
}
.box{
  width: 100%;
  display: flex;
  flex-direction: row;
}
.box2{
  width: 49%;
  margin-right: 1%;
  margin-top: .1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}
.box2 ul{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 1%;
}
.box2 ul li{
  width: 100%;
  height: 4rem;
  margin-top: .1rem;
}
.box3{
  width: 100%;
  height: 4.3rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  background-color: white;
  border-radius: .3rem .3rem 0 0;
}
.pic2{
  width: 100%;
  height: 3rem;
  border-radius: .3rem .3rem 0 0;
}
.title{
  position: absolute;
  margin-top: 3.2rem;
  margin-left: .1rem;
  z-index: 5;
  font-size: .4rem;
  color: white;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.name-box{
    width:95%;
    height: .6rem;
    margin-top: .1rem;
    font-size: .4rem;
    display: block;
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 2.5%;
}
.tag{
  position: absolute;
  width: 100%;
  height: .5rem;
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
