<template>
    <div id="songList">
        <div class="box1">
            <span>{{songListData.listName}}</span>
        </div>
        <div class="box2">
            <ul>
                <li v-for="(item,index) in songListData.listData" :key="index">
                    <div class="box">
                        <img :src="item.coverImgUrl"/>
                        <div class="tag">
                            <div class="el-icon-caret-right">{{item.playCount}}</div>
                        </div>
                        <span>{{item.name}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: 'songList',
  props: ['songListData']
}
</script>
<style scoped>
@import './index.css';
</style>
