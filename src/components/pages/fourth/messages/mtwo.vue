<template>
    <div id="mtwo">
        <div class="box1">
        <div class="like" @click="toLike">
            <img class="logo" src="@/assets/images/like4.png" />
            <div>赞</div>
            <span class="el-icon-arrow-right"></span>
        </div>
        <div class="collate" @click="toCollate">
            <img class="logo" src="@/assets/images/like5.png" />
            <div>收藏</div>
            <span class="el-icon-arrow-right"></span>
        </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'mtwo',
  data () {
    return {
      istoLike: true,
      istoCollate: true
    }
  },
  methods: {
    toLike () {
      this.$emit('openLike', this.istoLike)
    },
    toCollate () {
      this.$emit('openCollate', this.istoCollate)
    }
  }
}
</script>
<style scoped>
#mtwo{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
}
.box1{
    width: 90%;
    height: 4rem;
    display: flex;
    flex-direction: column;
}
.like{
    margin-top: .3rem;
    width: 100%;
    height: 1.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: gainsboro solid .01rem;
}
.like div{
    width:70%;
    font-size: .4rem;
}
.collate{
    width: 100%;
    height: 1.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: gainsboro solid .01rem;
}
.collate div{
    width: 70%;
    font-size: .4rem;
}
.logo{
    width: .7rem;
    height: .7rem;
    margin-right: 5%;
    margin-left: 5%;
}
</style>
