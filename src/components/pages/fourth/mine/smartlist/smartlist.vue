<template>
    <div id="smartlist">
        <div class="box1">
        <span class="title">智能分类 {{songlistnum}}</span>
        <span >更多</span>
        <div class="el-icon-arrow-right"></div>
        </div>
        <div class="box2">
            <ul>
                <li v-for="item in list" :key="item.name">
                    <div class="box">
                    </div>
                    <span class="name">{{item.name}}</span>
                    <span class="num">{{item.num}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: 'smartlflist',
  data () {
    return {
      list: [
        {
          name: '已播歌曲',
          num: '12345'
        },
        {
          name: '已播歌曲',
          num: '12345'
        },
        {
          name: '已播歌曲',
          num: '12345'
        },
        {
          name: '已播歌曲',
          num: '12345'
        }
      ]
    }
  }
}
</script>
<style scoped>
#smartlist{
    width: 90%;
    height: 100%;
}
.box1{
    width: 100%;
}
.title{
    font-size: .6rem;
    font-family: Arial, Helvetica, sans-serif;
    margin-right: 59%;
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
}
.box{
    width: 3rem;
    height: 3rem;
    background-color: white;
    border-radius: .3rem;
}
.name{
    color: black;
    font-size: .4rem;
}
.num{
    color: black;
    font-size: .2rem;
}
</style>
