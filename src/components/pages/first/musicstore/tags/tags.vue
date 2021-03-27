<template>
    <div id="tags">
      <div class="box2">
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <span class="name">#{{item.content}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'tags',
  data () {
    return {
      list: []
    }
  },
  mounted: function () {
    var that = this
    var tag = []
    axios({
      method: 'get',
      url: `http://localhost:3000/search/hot/detail`,
      withCredentials: true
    }).then(function (res) {
      tag = res.data.data
      that.list = tag
    })
  }
}
</script>
<style scoped>
#tags{
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
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    border-radius: .5rem;
}
.name{
    margin-top: .2rem;
    color: gray;
    font-size: .4rem;
    margin-left: .2rem;
    margin-right: .2rem;
    margin-top: .1rem;
    white-space: nowrap;
}
</style>
