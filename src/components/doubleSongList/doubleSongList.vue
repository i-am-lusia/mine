<template>
    <div id="doubleSongList">
        <div class="box1">
            <span>{{songListData.listName}}</span>
        </div>
        <div class="box2">
            <ul>
                <li v-for="(item,index) in songListData.listOneData" :key="index" @click="goTo(item)">
                    <div class="box">
                        <img :src="item.coverImgUrl"/>
                        <div class="tag">
                            <div class="el-icon-caret-right">{{item.playCount}}</div>
                        </div>
                        <span>{{item.name}}</span>
                    </div>
                </li>
            </ul>
            <ul>
                <li v-for="(item,index) in songListData.listTwoData" :key="index" @click="goTo(item)">
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
  name: 'doubleSongList',
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
