<template>
    <div id="recommandSongList">
        <div class="box" v-if="songListData.singerName">
        <span style="font-size:.5rem">根据“{{songListData.singerName}}”推荐</span>
        <div>
        <img class="logo" src="@/assets/images/video1.png"/>
        <span v-if="songListData.singerName">播放</span>
        </div>
        </div>
        <ul class="box1">
            <li v-for="(items,index) in songListData.listData" :key="index">
                <ul class="box2">
            <li v-for="(item,sindex) in items" :key="sindex">
                <img class="pic" v-if="item.blurPicUrl" :src="item.blurPicUrl">
                <img class="pic" v-if="item.picUrl && !item.blurPicUrl" :src="item.picUrl">
                <div class="message">
                    <span v-if="item.artists">{{item.name}}-{{item.artists[0].name}}</span>
                    <span v-if="!item.artists">{{item.name}}-{{item.song.artists[0].name}}</span>
                    <span>{{item.description}}</span>
                </div>
                <div class="el-icon-film"></div>
            </li>
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'recommandSongList',
  props: ['songListData']
}
</script>
<style scoped>
@import './index.css';
</style>
