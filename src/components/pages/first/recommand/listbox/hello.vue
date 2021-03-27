<template>
    <div id="hello">
        <div class="box1">
            <span>Hi</span>
            <span>{{username}}</span>
            <span>今日为你打造</span>
        </div>
        <div class="box2">
            <div class="cdm">
            <img style="width:1rem;height:1rem;position:absolute;z-index:4;margin-top:2rem;" src="@/assets/images/play2.png"/>
            <img style="width:3rem;height:3rem;position:absolute;z-index:3;margin-top:.5rem;" src="@/assets/images/cd.png"/>
            </div>
            <ul class="list1" >
                <li style="position:relative;">
                    <img class="pic" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605445726027&di=5eeff97fcc87ca454a7943babe5a6c24&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F14%2F20161014030919_2sMPL.jpeg"/>
                </li>
                <li style="position:relative;">
                    <img class="pic0" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605445726027&di=5eeff97fcc87ca454a7943babe5a6c24&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F14%2F20161014030919_2sMPL.jpeg"/>
                </li>
                <li style="position:relative;">
                    <img class="pic1" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605445726027&di=5eeff97fcc87ca454a7943babe5a6c24&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201610%2F14%2F20161014030919_2sMPL.jpeg"/>
                </li>
            </ul>
            <ul class="list2">
                <li style="position:relative;">
                    <div class="box3">
                    <div class="tag0"></div>
                    <span class="tipe0" >Daily</span>
                    <span class="tipe0-1">30</span>
                    <img class="pic2" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605445726028&di=3f30e5149d27f897e4710a6b63ecec67&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201301%2F11%2F20130111130922_i8TvF.jpeg"/>
                    <span class="name1">每日30首</span>
                    </div>
                </li>
                <li style="position:relative;">
                    <div class="box3">
                    <div class="tag1"></div>
                    <span class="tipe1" >New</span>
                    <img class="pic2" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605445726028&di=3f30e5149d27f897e4710a6b63ecec67&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201301%2F11%2F20130111130922_i8TvF.jpeg"/>
                    <span class="name1">新歌推荐</span>
                    </div>
                </li>
                <li>
                    <div class="box3">
                    <div class="tag2"></div>
                    <span class="tipe2" >Sing</span>
                    <img class="pic2" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605445726028&di=3f30e5149d27f897e4710a6b63ecec67&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201301%2F11%2F20130111130922_i8TvF.jpeg"/>
                    <span class="name1">K歌不停</span>
                    </div>
                </li>
                <li>
                    <div class="box3">
                    <div class="tag3"></div>
                    <span class="tipe3" >Friends</span>
                    <img class="pic2" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605445726028&di=3f30e5149d27f897e4710a6b63ecec67&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201301%2F11%2F20130111130922_i8TvF.jpeg"/>
                    <span class="name1">好友热播</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
// import axios from 'axios'
export default {
  name: 'hello',
  data () {
    return {
      username: '123456'
    }
  }
  /* mounted: function () {
    var that = this
    axios({
      method: 'get',
      //    url: `http://localhost:3000/history/recommend/songs/detail`,
      withCredentials: true
    }).then(function (res) {
      console.log(res.data)
    })
  } */
}
</script>
<style scoped>
#hello{
    width: 90%;
    height: 100%;
}
.box1{
    width: 100%;
    height: .8rem;
    font-size: .5rem;
    color: black;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
}
.box1 span{
    margin-right: .2rem;
    font-weight: 700;
}
.box2{
    width: 100%;
    height: 4rem;
    overflow: scroll;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
}
.box2::-webkit-scrollbar{
    display: none;
}
ul{
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    margin-right: .3rem;
}
.pic2{
    width: 3rem;
    height: 3rem;
    border-radius: .3rem;
}
.box3{
    width: 3rem;
    height: 4rem;
    display: flex;
    flex-direction: column;
    position: relative;
}
.tag0{
    width: 1rem;
    height: 1rem;
    position: absolute;
    background-color: blue;
    z-index: 1;
    border-radius: .3rem 0 2rem 0;
}
.tipe0{
    position:absolute;
    font-size:.4rem;
    z-index:2;
    color:white;
    font-family:Arial, Helvetica, sans-serif;
    margin-top: .2rem;
    font-weight: 900;
    margin-left: .3rem;
}
.tipe0-1{
    position:absolute;
    font-size:.4rem;
    z-index:2;
    color:white;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: 900;
    margin-left: .3rem;
    margin-top: .6rem;
}
.tag1{
    width: 1rem;
    height: 1rem;
    position: absolute;
    background-color: greenyellow;
    z-index: 1;
    margin-left: 2rem;
    border-radius: 0 .3rem 0 2rem;
}

.tipe1{
    position:absolute;
    font-size:.4rem;
    z-index:2;
    color:white;
    font-family:Arial, Helvetica, sans-serif;
    margin-top: .2rem;
    font-weight: 900;
    margin-left: 1.8rem;
}
.tag2{
    width: 1rem;
    height: 1rem;
    position: absolute;
    background-color: pink;
    z-index: 1;
    margin-top: 2rem;
    margin-left: 2rem;
    border-radius: 2rem 0 .3rem 0;
}
.tipe2{
    position:absolute;
    font-size:.4rem;
    z-index:2;
    color:white;
    font-family:Arial, Helvetica, sans-serif;
    margin-top: 2.4rem;
    font-weight: 900;
    margin-left: 1.8rem;
}
.tag3{
    width: 1rem;
    height: 1rem;
    position: absolute;
    background-color: purple;
    z-index: 1;
    margin-top: 2rem;
    border-radius: 0 2rem 0 .3rem;
}
.tipe3{
    position:absolute;
    font-size:.4rem;
    z-index:2;
    color:white;
    font-family:Arial, Helvetica, sans-serif;
    margin-top: 2.4rem;
    font-weight: 900;
    margin-left: .5rem;
}

.name1{
    font-size: .35rem;
    margin-top: .1rem;
}
.list1{
    margin-top: 1rem;
    width: 6rem;
    margin-left: .5rem;
}
.pic0{
    width: 2rem;
    height: 2rem;
    border-radius: .3rem;
    position: absolute;
    z-index: 1;
    margin-left: 1rem;
}
.pic1{
    width: 2rem;
    height: 2rem;
    border-radius: .3rem;
    margin-left: 2rem;
}
.pic{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    position: absolute;
    z-index: 4;
    margin-left: .5rem;
    margin-top: .5rem;
}
.list2 li{
    margin-right: .2rem;
}
</style>
