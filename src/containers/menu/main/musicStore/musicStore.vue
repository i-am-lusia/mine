<template>
    <div id="musicstore">
        <div class="song-block" style="width: 100%;top:2.5rem;height: 3.5rem;">
          <banner :bannerData="bannerData"></banner>
        </div>
        <div class="song-block" style="height: 2rem;">
          <div class="box" @click="openSinger">
                <img src="@/assets/images/singger.png">
                <span class="title">歌手</span>
            </div>
          <div class="box" @click="openRanks">
                <img src="@/assets/images/sole.png">
                <span class="title">排行</span>
          </div>
            <div class="box" @click="openItemize">
                <img src="@/assets/images/rank.png">
                <span class="title">分类歌单</span>
            </div>
            <div class="box">
                <img src="@/assets/images/radio.png">
                <span class="title">电台</span>
            </div>
            <div class="box">
                <img src="@/assets/images/live.png">
                <span class="title">直播</span>
            </div>
        </div>
        <div class="song-block" style="height: 4.5rem">
          <songlist :songListData="speSongList" ></songlist>
        </div>
        <div class="song-block" style="height: .8rem">
          <tags></tags>
        </div>
        <div class="song-block" style="height: 5.6rem;margin-top: .4rem;">
          <newsongs></newsongs>
        </div>
        <div class="song-block" style="height: 4.5rem;margin-top: .3rem;">
          <rank></rank>
        </div>
        <div class="song-block" style="height: 6rem">
          <lives></lives>
        </div>
        <div class="song-block" style="height: 5.5rem">
          <classify></classify>
        </div>
        <div class="song-block" style="height: 5.4rem">
          <sole></sole>
        </div>
        <div class="song-block" style="height: 6rem">
          <musician></musician>
        </div>
      <div class="bottom"></div>
      <transition>
          <div class="singer" v-if="isSinger">
            <singer v-if="isSinger"  @closeSinger="closeSinger" ></singer>
          </div>
          <div class="allrank" v-if="isRanks">
            <allranks
             v-if="isRanks"
             @closeRanks="closeRanks"></allranks>
          </div>
          <div class="itemizes" v-if="isItemize">
            <itemize
            v-if="isItemize"
            @closeItemize="closeItemize"></itemize>
          </div>
        </transition>
    </div>
</template>
<script>
import special from '@/components/pages/first/musicstore/special/special'
import tags from '@/components/pages/first/musicstore/tags/tags'
import newsongs from '@/components/pages/first/musicstore/newsongs/newsongs'
import rank from '@/components/pages/first/musicstore/rank/rank'
import lives from '@/components/pages/first/musicstore/lives/lives'
import classify from '@/components/pages/first/musicstore/classify/classify'
import sole from '@/components/pages/first/musicstore/sole/sole'
import musician from '@/components/pages/first/musicstore/musician/musician'
import singer from '@/components/pages/first/singer.vue'
import allranks from '@/components/pages/first/allranks.vue'
import Banner from '../../../../components/banner/banner.vue'
import axios from 'axios'
import Songlist from '../../../../components/songlist/songlist.vue'
export default {
  name: 'musicstore',
  components: {
    special,
    tags,
    newsongs,
    rank,
    lives,
    classify,
    sole,
    musician,
    singer,
    allranks,
    Banner,
    Songlist
  },
  data () {
    return {
      isSinger: false,
      isRanks: false,
      isItemize: false,
      bannerData: {
        listData: []
      },
      speSongList: {
        listData: [],
        listName: '编辑甄选'
      }
    }
  },
  methods: {
    openSinger () {
      this.isSinger = true
    },
    closeSinger () {
      this.isSinger = false
    },
    openRanks () {
      this.isRanks = true
    },
    closeRanks () {
      this.isRanks = false
    },
    openItemize () {
      this.isItemize = true
    },
    closeItemize () {
      this.isItemize = false
    }
  },
  mounted: function () {
    var that = this
    axios({
      method: 'get',
      url: `http://localhost:3000/banner`,
      withCredentials: true
    }).then(function (res) {
      that.bannerData.listData = res.data.banners
    })
  }
}
</script>
<style scoped>
@import './index.css';

</style>
