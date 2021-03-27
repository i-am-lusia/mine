<template>
    <div id='fourth'>
        <el-tabs  class="tab">
          <el-tab-pane>
            <span slot="label">
              <span class="pane1">我的</span>
            </span>
            <mine></mine>
          </el-tab-pane>
        </el-tabs>
        <span class="el-icon-message" @click="toMessage"></span>
        <span class="el-icon-more" @click="toMore"></span>
        <transition name="move">
        <div class="themorebox" v-if="isMore">
            <more v-if="isMore"  @closeMore="closeMore"></more>
        </div>
        <div class="themessagebox" v-if="isMessage" >
           <messages v-if="isMessage" @closeMessage="closeMessage"></messages>
        </div>
        </transition>
    </div>
</template>
<script>
import mine from '@/components/pages/fourth/mine/mine'
import more from '@/components/pages/fourth/more/more.vue'
import messages from '@/components/pages/fourth/messages/messages.vue'
export default {
  name: 'fourth',
  components: {
    mine,
    more,
    messages
  },
  data () {
    return {
      isMore: false,
      isMessage: false
    }
  },
  methods: {
    toMore () {
      this.isMore = true
    },
    toMessage () {
      this.isMessage = true
    },
    closeMore () {
      this.isMore = false
    },
    closeMessage () {
      this.isMessage = false
    }
  }
}
</script>
<style scoped>
#third{
  width: 100%;
  height: 100%;
}
.tab{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  flex-direction: column;
  padding: 0;
  font-size: 20px;
  margin-top: .5rem;
}
.pane1,.pane2,.pane3{
  font-size: .5rem;
  font-family: Helvetica;
  border: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
}
.el-icon-message,.el-icon-more{
  font-size: .6rem;
}
.pane1{
  margin-right: 7rem;
}
.tab>>>.el-tabs__header{
  width: 100%;
  height: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 5;
  top: 0;
  background-color: white;
}
.tab>>>.el-tabs__content{
  width: 100%;
  height: 100%;
  margin-top: 1rem;
}
.tab>>>.el-tabs__active-bar{
  background: transparent;
}
.tab>>>.el-tabs__item{
  background: transparent;
}
.tab>>>.el-tabs__nav-wrap{
  width: 100%;
}
.tab>>>.el-tabs__nav{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tab>>>.el-tabs__nav-wrap::after {
      position: static !important;
  }
.tab>>>.el-tab-pane{
  width: 100%;
  height: 100%;
}
.themorebox{
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  top:0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
}
.themessagebox{
  width: 100%;
  height: 100%;
  background-color: whitesmoke;
  position: fixed;
  z-index: 10;
  top:0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
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
.el-icon-message{
  position:fixed;
  top:.4rem;
  right: 1.4rem;
  z-index: 10;
  color:black
}
.el-icon-more{
  position: fixed;
  top:.4rem;
  right: .4rem;
  z-index: 10;
  color:black
}
</style>
