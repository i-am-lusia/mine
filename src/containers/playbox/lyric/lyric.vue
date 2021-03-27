<template>
    <div id="lyric">
      <div  class="song-title">
        <div class="title">{{title}}
        </div>
        <div  class="author">{{songAuthor}}
        </div>
      </div>
      <div class="song-lyric">
      </div>
      <div class="song-button">
        <img src="@/assets/images/tan.png"/>
        <img src="@/assets/images/yi.png" v-if="!isYi"/>
        <img src="@/assets/images/yi1.png" v-if="isYi"/>
        <img src="@/assets/images/ci.png"/>
        <img src="@/assets/images/play.png"/>
      </div>
    </div>
</template>
<script>
export default {
  name: 'lyric',
  data () {
    return {
      title: 'fasaf',
      songAuthor: 'fagfsdaffa',
      isYi: true
    }
  }
}
</script>
<style scoped>
#lyric{
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.song-title{
  width: 75%;
  display: flex;
  justify-content: center;
  align-items:flex-start;
  flex-direction: column;
}
.song-title .title{
  font-family: Arial, Helvetica, sans-serif;
  font-size: .65rem;
  margin-left: 1rem;
  color: whitesmoke;
  margin-bottom: .3rem;
}
.song-title .author{
  font-family: Arial, Helvetica, sans-serif;
  font-size: .4rem;
  margin-left: 1rem;
  margin-bottom: .3rem;
  color: whitesmoke;
}
.song-lyric{
  width: 80%;
  height: 7rem;
}
.song-button{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: .3rem;
}
.song-button img{
  width: .8rem;
}
.song-button img:nth-child(1){
  margin-right: .5rem;
}
.song-button img:nth-child(2){
  margin-right: .5rem;
}
.song-button img:nth-child(3){
  margin-right: 30%;
}
</style>
