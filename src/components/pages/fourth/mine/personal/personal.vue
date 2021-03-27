<template>
    <div id="personal">
      <img class="ppic" :src="mypic" />
      <div class="box">
        <div class="name">
          <div class="name1">名字</div>
          <img src="@/assets/images/vip1.png"/>
          <img src="@/assets/images/vip1.png"/>
          <img src="@/assets/images/vip1.png"/>
        </div>
        <div class="buttons">
          <div class="follows">
            <span class="title">关注</span>
            <span class="content">12</span>
          </div>
          <div class="followers">
            <span class="title">粉丝</span>
            <span class="content">12</span>
          </div>
          <div class="newsong">
            <span class="title">新歌提醒</span>
            <span class="content">12</span>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'personal',
  data () {
    return {
      mypic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604480726335&di=91dbc3aa477aa32ded0fa035be9b0713&imgtype=0&src=http%3A%2F%2Fpic4.zhimg.com%2F50%2Fv2-80eb0ba133165968229769261f2d0e12_hd.jpg'
    }
  }
}
</script>
<style scoped>
#personal{
    width: 80%;
    height: 100%;
    display: flex;
}
.box{
   width: 100%;
   height: 80%;
   background-color: white;
   margin-top:.4rem;
   border-radius: .3rem;
   display: flex;
   flex-direction: column;
}
.name{
  width:100%;
  height:50%;
  margin-left: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.name1{
  font-size: .6rem;
  margin-left: .6rem;
}
.name img{
  width: .5rem;
  height: .5rem;
  margin-left: .1rem;
}
.ppic{
    position: absolute;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 1rem;
    margin-left: .1rem;
}
.buttons{
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: .4rem;
}
.buttons div{
  margin-left: .3rem;
}
.follows,.followers{
  border-right: gainsboro solid 2px;
}
.title{
  color: black;
}
.content{
  color: gainsboro;
  margin-left: .2rem;
  margin-right: .3rem;
}
</style>
