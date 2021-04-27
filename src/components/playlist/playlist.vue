<template>
    <div id="playlist">
        <div class="box1">
            <span style="margin-left:5%;font-size:.35rem;margin-right:10%">{{songList.length}}首VIP歌曲可试听，开会员听完整版</span>
            <span class="el-icon-arrow-down" style="margin-left: 90%;margin-top: .1rem" @click="close"></span>
        </div>
        <div class="box1">
            <div class="box2-1">
                <img class="logo" src="@/assets/images/onecircle.png" v-if="isOnly" @click="handlecircle"/>
                <span v-if="isOnly" @click="handlecircle">单曲循环</span>
                <img class="logo" src="@/assets/images/listcircle.png" v-if="isList" @click="handlecircle"/>
                <span v-if="isList" @click="handlecircle">顺序播放（{{songList.length}}首歌）</span>
                <img class="logo" src="@/assets/images/random.png" v-if="isRandom" @click="handlecircle"/>
                <span v-if="isRandom" @click="handlecircle">随机播放（{{songList.length}}首歌）</span>
            </div>
            <div class="el-icon-download"></div>
            <div class="el-icon-circle-plus-outline"></div>
            <div class="el-icon-delete"></div>
        </div>
        <div class="box3">
            <ul>
                <li v-for="(item,index) in songList" :key="index">
                    <div class="name-box">
                        <span style="font-size:.4rem;color:black;margin-right:.1rem;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">{{item.name}}</span>
                        <span style="font-size:.35rem;color:gray;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;">- {{item.ar[0].name}}</span>
                    </div>
                    <div class="el-icon-close" style="font-size:.4rem"></div>
                </li>
            </ul>
        </div>
        <div class="box4">
        </div>
    </div>
</template>
<script>
export default {
  name: 'playslist',
  props: ['songList', 'songMessage'],
  data () {
    return {
      isOnly: true,
      isList: false,
      isRandom: false
    }
  },
  methods: {
    close () {
      this.$emit('close', 'list')
    },
    handlecircle () {
      if (this.isOnly) {
        this.isOnly = false
        this.isList = true
      } else if (this.isList) {
        this.isList = false
        this.isRandom = true
      } else if (this.isRandom) {
        this.isRandom = false
        this.isOnly = true
      }
    }
  },
  mounted () {
    console.log(this.songList)
  }
}
</script>
<style scoped>
#playlist{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.box1{
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-bottom: gainsboro solid .001rem;
}
.box3{
    width: 100%;
    height: 77%;
}
.box4{
    width: 100%;
    height: 3%;
    background-color: white;
    border-bottom: gainsboro solid .01rem;
}
.logo{
    width: .5rem;
    height: .5rem;
}
.box2-1{
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-left: 5%;
    margin-right: 20%;
}
.box2-1 span{
    font-size: .4rem;
    margin-left: .4rem;
}
.el-icon-download{
    font-size: .6rem;
    margin-right: 2.5%;
}
.el-icon-circle-plus-outline{
    font-size: .6rem;
    margin-right: 2.5%;
}
.el-icon-delete{
    font-size: .6rem;
}
ul {
    padding: 0;
    margin: 0;
    height:6rem;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    overflow: scroll;
}
li{
    width: 100%;
    height: 1rem;
    border-bottom: gainsboro solid .01rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.name-box{
    width: 80%;
    height: 1rem;
    margin-left: 2.5%;
    margin-right: 10%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
</style>
