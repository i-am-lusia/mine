<template>
    <div id="recommandSongList">
        <div class="box">
        <span style="font-size:.5rem">根据“{{songListData.singerName}}”推荐</span>
        <div>
        <img class="logo" src="@/assets/images/video1.png"/>
        <span>播放</span>
        </div>
        </div>
        <ul class="box1">
            <li v-for="(items,index) in songListData.listData" :key="index">
                <ul class="box2">
            <li v-for="(item,sindex) in items" :key="sindex">
                <img class="pic" :src="item.blurPicUrl">
                <div class="message">
                    <span>{{item.name}}-{{item.artists[0].name}}</span>
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
