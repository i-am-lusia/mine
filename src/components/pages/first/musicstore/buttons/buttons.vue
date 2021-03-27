<template>
    <div id="buttons">
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
            <router-view></router-view>
    </div>
</template>
<script>
export default {
  name: 'buttons',
  data () {
    return {
      isSinger: true
    }
  },
  methods: {
    openSinger () {
      this.$emit('openSinger', this.isSinger)
    },
    openRanks () {
      this.$emit('openRanks', this.isSinger)
    },
    openItemize () {
      this.$emit('openItemize', this.isSinger)
    }
  }
}
</script>
<style scoped>
#buttons{
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}
.box{
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.box img{
    width: .8rem;
}
.title{
    font-family: Helvetica;
    font-size: .4rem;
    margin-top: .15rem;
    color: black;
}
</style>
