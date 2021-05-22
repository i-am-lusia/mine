<template>
  <div id="recommandSongList">
    <div class="box" v-if="songListData.singerName">
      <span style="font-size: 0.5rem"
        >根据“{{ songListData.singerName }}”推荐</span
      >
      <div>
      </div>
    </div>
    <ul class="box1">
      <li  v-for="(items, index) in songListData.listData" :key="index">
        <ul class="box2">
          <li v-for="(item, sindex) in items" :key="sindex" @click="play(item)">
            <img class="pic" v-if="item.blurPicUrl" :src="item.blurPicUrl" />
            <img
              class="pic"
              v-if="item.picUrl && !item.blurPicUrl"
              :src="item.picUrl"
            />
            <div class="message">
              <span v-if="item.artists"
                >{{ item.name }}-{{ songListData.singerName }}</span
              >
              <span v-if="!item.artists"
                >{{ item.song.album.name }}-{{ item.name }}</span
              >
              <span>{{ item.description }}</span>
            </div>
            <div class="el-icon-film"></div>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'recommandSongList',
  props: ['songListData'],
  methods: {
    async get (id) {
      const res = await axios({
        url: `http://localhost:3000/album?id=${id}`,
        withCredentials: true
      })
      this.$store.commit('updateCurrentSongData', res.data.songs[0])
      this.$store.commit('updateSongList', res.data.songs)
    },
    play (item) {
      this.get(item.id)
    }
  },
  mounted () {
    console.log(this.songListData)
  }
}
</script>
<style scoped>
@import "./index.css";
</style>
