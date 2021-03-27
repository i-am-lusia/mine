<template>
    <div id="messages">
        <div class="box1">
            <span class="el-icon-arrow-left" style="margin-left:2.5%;" @click="close"></span>
            <span style="margin-left:35%">消息中心</span>
        </div>
        <div class="box2">
            <el-tabs >
                <el-tab-pane label="私信" >
                    <mone ></mone>
                </el-tab-pane>
                <el-tab-pane label="互动通知" >
                    <mtwo @openLike="openLike" @openCollate="openCollate"></mtwo>
                </el-tab-pane>
                <el-tab-pane label="官方通知" >
                    <mthree></mthree>
                </el-tab-pane>
            </el-tabs>
        </div>
        <div class="box3">
            <songbox></songbox>
        </div>
        <transition name="move">
        <div class="box4" v-if="istoLike">
            <div class="box1">
                <span class="el-icon-arrow-left" style="margin-left:2.5%;" @click="closeLike"></span>
                <span style="margin-left:40%">赞</span>
            </div>
            <div class="box1-1">
                <img style="width:2rem;height:2rem;margin-bottom:.2rem;" src="@/assets/images/songlist3.png"/>
                <span>暂无消息</span>
            </div>
        </div>
        </transition>
        <transition name="move">
        <div class="box5" v-if="istoCollate">
            <div class="box1">
                <span class="el-icon-arrow-left" style="margin-left:2.5%;" @click="closeCollate"></span>
                <span style="margin-left:40%">收藏</span>
            </div>
            <div class="box1-1">
                <img style="width:2rem;height:2rem;margin-bottom:.2rem;" src="@/assets/images/songlist3.png"/>
                <span>暂无消息</span>
            </div>
        </div>
        </transition>
    </div>
</template>
<script>
import songbox from '../../../../containers/playbox/songbox/songbox.vue'
import mthree from '@/components/pages/fourth/messages/mthree.vue'
import mtwo from '@/components/pages/fourth/messages/mtwo.vue'
export default {
  name: 'messages',
  components: { songbox, mthree, mtwo },
  data () {
    return {
      isMessage: false,
      istoLike: false,
      istoCollate: false
    }
  },
  methods: {
    close () {
      this.$emit('closeMessage', this.isMessage)
    },
    closeLike () {
      this.istoLike = false
    },
    openLike () {
      this.istoLike = true
    },
    closeCollate () {
      this.istoCollate = false
    },
    openCollate () {
      this.istoCollate = true
    }
  }
}
</script>
<style scoped>
#messages{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
}
.box1{
    width: 100%;
    height: 1.1rem;
    background:white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.box1 span{
    font-size: .4rem;
    color: black;
}
.box2{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
}
.box2 >>> .el-tabs{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.box2 >>> .el-tabs__header{
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
}
.box2 >>> .el-tabs__nav{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box2 >>> .el-tabs__item{
    font-size: .4rem;
    margin: 2%;
}
.box2 >>> .el-tabs__item.is-active{
    color: green;
}
.box2 >>> .el-tabs__nav-wrap{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.box2 >>> .el-tabs__nav-scroll{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box2 >>> .el-tabs__active-bar{
    background-color: transparent !important;
}
.box2 >>> .el-tabs__content{
    width: 100%;
    height: 100%;
    margin: 0;
}
.box2 >>> .el-el-tab-pane{
    width: 100%;
    height: 100%;
}
.box3{
    width: 100%;
    height: 2rem;
    position: fixed;
    z-index: 3;
    bottom: 0;
}
.box4{
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: white;
    z-index: 2;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    transition: all 0.3s;
}
.box5{
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: white;
    z-index: 2;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    transition: all 0.3s;
}
.box1-1{
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.move-enter-active, .move-leave-active{
  transition:  all 30s liner;
  transform: translateX(0);
}
.move-enter,.move-leave{
  transform: translateX(100%);
}
.move-leave-to{
  transform: translateX(100%);
}
</style>
