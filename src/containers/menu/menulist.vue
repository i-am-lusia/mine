<template>
    <div id="menulist" >
      <el-row >
        <el-menu class="el-menu-vertical-demo" default-active="1"  >
            <el-col :span="6">
              <el-menu-item index="1" @click="toPath">
                <img class="logo-music" src="@/assets/images/music1.png"/>
                <div >首页</div>
              </el-menu-item>
            </el-col>
            <el-col :span="6">
              <el-menu-item index="2" @click="toPath">
                <img  class="logo-video" src="@/assets/images/video1.png"/>
                <div>视频</div>
              </el-menu-item>
            </el-col>
            <el-col :span="6">
              <el-menu-item index="3" @click="toPath">
                <img class="logo-putong" src="@/assets/images/putong1.png"/>
                <div>扑通</div>
              </el-menu-item>
            </el-col>
            <el-col :span="6" >
            <el-menu-item index="4" @click="toPath">
                <img class="logo-wode" src="@/assets/images/wode1.png"/>
                <div>我的</div>
            </el-menu-item>
            </el-col>
        </el-menu>
      </el-row>
    </div>
</template>
<script>
export default {
  name: 'menulist',
  data () {
    return {
    }
  },
  methods: {
    toPath (tab) {
      this.$emit('menuto', tab.index)
    }
  }
}
</script>
<style scoped>
#menu{
    width: 100%;
    height: 100%;
}
.el-menu{
  height: 100%;
}
.el-menu-item{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.el-menu-item.is-active {
background-color: rgb(255, 255, 255) !important;
}
.el-menu-item div{
  font-family: Arial, Helvetica, sans-serif;
}
.el-row{
  height: 100%;
}
.el-col {
    height: 100%;
}
.logo-music,.logo-video,.logo-putong,.logo-wode{
  width: .5rem;
  height: .5rem;
  margin-top: .1rem;
}
</style>
