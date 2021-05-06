<template>
    <div id="songList">
        <div class="box1">
            <span>{{songListData.listName}}</span>
        </div>
        <div class="box2">
            <ul>
                <li v-for="(item,index) in songListData.listData" :key="index" @click="goTo(item)">
                    <div class="box">
                        <img :src="item.coverImgUrl" v-if="item.coverImgUrl" />
                        <img :src="item.picUrl" v-if="item.picUrl" />
                        <div class="tag" v-if="item.playCount">
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
  props: ['songListData'],
  methods: {
    goTo (data) {
      this.$store.commit('updateNearSongList', data)
      this.$router.push({path: '/songListDetail', query: {id: data.id}})
    }
  }
}
</script>
<style scoped>
@import './index.css';
</style>
