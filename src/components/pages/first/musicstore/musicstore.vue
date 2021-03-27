<template>
    <div id="musicstore">
        <div class="thepost">
          <post></post>
        </div>
        <div class="thebuttons">
          <buttons
          @openSinger="openSinger"
          @openRanks="openRanks"
          @openItemize="openItemize"></buttons>
        </div>
        <div class="thespecial">
          <special></special>
        </div>
        <div class="thetags">
          <tags></tags>
        </div>
        <div class="thenewsongs">
          <newsongs></newsongs>
        </div>
        <div class="therank">
          <rank></rank>
        </div>
        <div class="thelives">
          <lives></lives>
        </div>
        <div class="theclassify">
          <classify></classify>
        </div>
        <div class="thesole">
          <sole></sole>
        </div>
        <div class="themusician">
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
import post from '@/components/pages/first/musicstore/post/post'
import buttons from '@/components/pages/first/musicstore/buttons/buttons'
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
import itemize from '@/components/pages/first/itemize.vue'
export default {
  name: 'musicstore',
  components: {
    post,
    buttons,
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
    itemize
  },
  data () {
    return {
      isSinger: false,
      isRanks: false,
      isItemize: false
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
  }
}
</script>
<style scoped>
#musicstore{
  width: 100%;
  height: 100%;
}
.thepost{
  width: 100%;
  height: 4rem;
  margin-top: 1.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.thebuttons{
  width: 100%;
  height: 2rem;
  margin-top: .2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.thespecial{
  width: 100%;
  height: 4.5rem;
  margin-top: .2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.thetags{
  width: 100%;
  height: .8rem;
  margin-top: .2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.thenewsongs{
  width: 100%;
  height: 5.6rem;
  margin-top: .4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.therank{
  width: 100%;
  height: 4.5rem;
  margin-top: .3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.thelives{
  width: 100%;
  height: 6rem;
  margin-top: .2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.theclassify{
  width: 100%;
  height: 5.5rem;
  margin-top: .2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.thesole{
  width: 100%;
  height: 5.4rem;
  margin-top: .2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.themusician{
  width: 100%;
  height: 6rem;
  margin-top: .2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bottom{
  width: 100%;
  height: 5rem;
}
.allrank,.singer,.itemizes{
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 20;
  background-color: whitesmoke;
  top:0;
}
</style>
