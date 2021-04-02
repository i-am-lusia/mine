<template>
    <div id="hello">
        <div class="box1">
            <span>Hi</span>
            <span>{{username}}</span>
            <span>今日为你打造</span>
        </div>
        <div class="box2">
            <div class="cdm">
            <img style="width:3rem;height:3rem;position:absolute;z-index:3;margin-top:.5rem;margin-left:.8rem;" src="@/assets/images/cd.png"/>
            </div>
            <ul class="list1" >
                <li style="position:relative;">
                    <img class="pic" :src="songList"/>
                </li>
                <li style="position:relative;">
                    <img class="pic0" :src="songList"/>
                </li>
                <li style="position:relative;">
                    <img class="pic1" :src="songList"/>
                </li>
            </ul>
            <ul class="list2">
                <li style="position:relative;">
                    <div class="box3">
                    <div class="tag0"></div>
                    <span class="tipe0" >Daily</span>
                    <span class="tipe0-1">30</span>
                    <img class="pic2" :src="recommand"/>
                    <span class="name">每日30首</span>
                    </div>
                </li>
                <li style="position:relative;">
                    <div class="box3">
                    <div class="tag1"></div>
                    <span class="tipe1" >New</span>
                    <img class="pic2" :src="newSong"/>
                    <span class="name">新歌推荐</span>
                    </div>
                </li>
                <li>
                    <div class="box3">
                    <div class="tag2"></div>
                    <span class="tipe2" >Sing</span>
                    <img class="pic2" :src="KTV"/>
                    <span class="name">K歌不停</span>
                    </div>
                </li>
                <li>
                    <div class="box3">
                    <div class="tag3"></div>
                    <span class="tipe3" >Friends</span>
                    <img class="pic2" src="friends"/>
                    <span class="name">好友热播</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      username: '123456'
    }
  }
}
</script>
<style scoped>
@import './index.css';
</style>
