<template>
    <div id="recommand">
      <div class="song-message">
        <div class="box">
          <div class="song-name">{{songMessage.songName}}</div>
          <div  class="song-words">
            <div class="song-date">{{year}}年{{month}}月{{day}}日发行</div>
            <div class="song-more">歌曲详情 ></div>
          </div>
          <div  class="song">
            <div  class="singger">
              <img :src="singgerPic"/>
              <span>歌手：</span>
              <span>{{songMessage.songAuthor}}</span>
            </div>
            <div class="cd">
              <img :src="songMessage.songpic"/>
              <span>专辑：</span>
              <span>{{cd}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="related-songs">
        <div  class="box">
          <div class="title">相关歌曲
            <img  src="@/assets/images/play.png"/>
          </div>
          <ul  class="list">
            <li v-for="(item,index) in relatedSongList" :key="index">{{item.name}}-{{item.singger}}</li>
          </ul>
        </div>
      </div>
      <div class="related-song-list">
        <div class="box">
        <div class="title">
          相关歌单
          <div class="el-icon-refresh">换一批</div>
        </div>
        <ul>
          <li class="list-item"  v-for="(item,index) in relatedList" :key="index">
            <img :src="item.pic"/>
            <div class="item-box">
              <div class="item-title">{{item.name}}</div>
              <div  class="item-num">{{item.number}}首</div>
            </div>
            <div class="el-icon-arrow-right"></div>
          </li>
        </ul>
        </div>
      </div>
      <div  class="related-video">
        <div class="box">
          <div class="title">相关视频</div>
          <ul>
            <li v-for="item in relatedVideo" :key="item.name">
             <!-- <iframe :src="item.add"></iframe> -->
              <div>{{item.name}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'recommand',
  props: ['songMessage'],
  data () {
    return {
      songName: 'When the summer ends',
      year: 2018,
      month: 7,
      day: 14,
      singger: 'Emma Bale',
      cd: 'Cut loose',
      singgerPic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604480726335&di=91dbc3aa477aa32ded0fa035be9b0713&imgtype=0&src=http%3A%2F%2Fpic4.zhimg.com%2F50%2Fv2-80eb0ba133165968229769261f2d0e12_hd.jpg',
      cdPic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604480482755&di=679ef9484ee5495b3afda4f8cde69bb1&imgtype=0&src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201908%2F27%2F20190827043959_tydrf.thumb.400_0.jpeg',
      relatedSongList: [
        {name: 'shfdjsaf',
          singger: '12545225'},
        {
          name: 'fassadfg',
          singger: '4fd5s4f5s'
        }
      ],
      relatedList: [
        {
          name: 'fhauisdghaisudgiusdaoj',
          number: '5654',
          pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604497654148&di=0e2a629397febf1179ed24c56e0ef843&imgtype=0&src=http%3A%2F%2Fcdnimg103.lizhi.fm%2Faudio_cover%2F2019%2F08%2F30%2F2757103042509859335_320x320.jpg'
        }
      ],
      relatedVideo: [
        {
          name: 'gfsidkgojs',
          add: 'http://player.youku.com/embed/XMzcwNTY3NTM2MA'
        }
      ]
    }
  }
}
</script>
<style  scoped>
#recommand {
  width: 100%;
  height: 100%;
  background: gainsboro;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.song-message {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.song-message .box {
  width: 90%;
  height: auto;
  background-color: rgba(255,255,255,.3);
  border-radius: .3rem;
}
.related-songs{
  width: 100%;
  height: auto;
  margin-top: .3rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.related-songs .box {
  width: 90%;
  height: auto;
  background-color: rgba(255,255,255,.3);
  border-radius: .3rem;
}
.related-songs .box .title {
  width: 50%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: .45rem;
  color: white;
  margin-top: .1rem;
  margin-left: .2rem;
}
.related-songs .box img {
  position: absolute;
  width: .8rem;
  margin-left: 50%;
}
.related-songs .box ul{
  list-style-type: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: .4rem;
  padding: 0;
  margin-left: .5rem;
  margin-bottom: 0;
}
.related-songs .box ul li{
  margin-bottom: .2rem;
  color: whitesmoke;
}
.related-song-list{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: .5rem;
}
.related-song-list .box{
  width: 90%;
  height: auto;
}
.related-song-list .box .title{
  font-family: Arial, Helvetica, sans-serif;
  font-size: .45rem;
  color: white;
  margin-left: .2rem;
}
.related-song-list .box .title div{
  font-size: .4rem;
  color: whitesmoke;
  margin-left: 55%;
}
.related-song-list .box ul{
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-left: .2rem;
  list-style-type: none;
}
.related-song-list .box ul li{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: .3rem;
}
.related-song-list .box ul li img{
  width: 20%;
  margin-right: .3rem;
}
.item-box{
  height: auto;
  width: 70%;
  color: whitesmoke;
}
.item-title{
  font-family: Arial, Helvetica, sans-serif;
  font-size: .5rem;
  margin-bottom: .4rem;
  overflow: hidden;
}
.related-song-list .box ul li .el-icon-arrow-right{
  width: 10%;
}
.related-video{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.related-video .box{
  width: 90%;
  height: auto;
}
.related-video .box .title{
  font-family: Arial, Helvetica, sans-serif;
  font-size: .45rem;
  color: white;
  margin-left: .2rem;
}
.related-video .box ul{
  padding: 0;
  margin-left: .2rem;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:flex-start;
}
.related-video .box ul li{
  display: flex;
  flex-direction: row;
  margin-bottom: .3rem;
}
.related-video .box ul li iframe{
  width: 3rem;
  height: 2rem;
  margin-right: .2rem;
}
.related-video .box ul li div{
  font-family: Arial, Helvetica, sans-serif;
  font-size: .45rem;
  color: white;
  margin-top: .2rem;
}
.song-name{
  font-family: Arial, Helvetica, sans-serif;
  font-size: .55rem;
  color: white;
  margin: .1rem;
  margin-left: .2rem;
  white-space: nowrap;
}
.song-words{
  font-family: Arial, Helvetica, sans-serif;
  font-size: .35rem;
  color: whitesmoke;
  display: flex;
  flex-direction: row;
  margin-left: .2rem;
  padding-bottom: .2rem;
  border-bottom: whitesmoke solid 3px;
  width: 95%;
}
.song-more{
  margin-left: 1rem;
}
.song{
  margin-top:.2rem;
  margin-left: .2rem;
  display: flex;
  flex-direction: row;
  color: whitesmoke;
  font-size: .35rem;
  white-space: nowrap;
  margin-bottom: .2rem;
}
.cd{
  margin-left: .5rem;
}
.singger {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.singger img{
  width: .8rem;
  height: .8rem;
  border-radius: 50%;
  margin-left: .2rem;
  margin-right: .2rem;
}
.cd {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.cd img{
  width: .8rem;
  height: .8rem;
  margin-right: .2rem;
}
</style>
