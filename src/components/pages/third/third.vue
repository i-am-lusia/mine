<template>
    <div id='third'>
        <el-tabs  class="tab">
          <el-tab-pane>
            <span slot="label">
              <span class="pane1">广场</span>
            </span>
            <playground></playground>
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label">
              <span class="pane2">关注</span>
            </span>
            <follow></follow>
          </el-tab-pane>
        </el-tabs>
        <span class="el-icon-edit"></span>
    </div>
</template>
<script>
import playground from '@/components/pages/third/playground/playground.vue'
import follow from '@/components/pages/third/follow/follow.vue'
export default {
  name: 'third',
  components: {
    playground,
    follow
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
.pane1,.pane2{
  font-size: .5rem;
  font-family: Helvetica;
  border: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
}
.pane2{
  margin-right: 6rem;
}
.el-icon-edit{
  font-size: .6rem;
  position: fixed;
  top:.4rem;
  right: .4rem;
  z-index: 10;
  color:black
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
</style>
