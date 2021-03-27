<template>
    <div id='first'>
      <div class="tab">
              <router-link to="/recommand">
                <span class="pane1" >推荐</span>
              </router-link>
              <router-link to="/musicstore">
              <span class="pane2">音乐馆</span>
              </router-link>
             <!-- <router-link to="/listonbook"> -->
              <span class="pane3">听书</span>
             <!-- </router-link> -->
       </div>
           <router-view style="margin-top:2.2rem;"></router-view>
      <span class="el-icon-mic"></span>
    </div>
</template>
<script>
// import axios from 'axios'
export default {
  name: 'first',
  data () {
    return {
      playlist: []
    }
  },
  methods: {
  }
}
</script>
<style scoped>
#first{
  width: 100%;
  height: 100%;
}
.router-link-active{
  text-decoration: none;
  font-weight: 700;
}
a{
  text-decoration: none;
}
.tab{
  width: 100%;
  height: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  flex-direction: row;
  padding: 0;
  font-size: 20px;
  background-color: white;
  position: fixed;
  z-index: 5;
  top: 0;
  margin: 0;
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
  margin-left: 1rem;
}
.pane3{
  margin-right: 3.5rem;
}
.el-icon-mic{
  font-size: .6rem;
  position: fixed;
  top:.4rem;
  right: .4rem;
  z-index: 10;
  color:black
}
.tab >>> .el-tabs__header{
  width: 100%;
  height: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  position: fixed;
  z-index: 5;
  top: 0;
}
#musicstore >>> .el-tabs__header{
  position: relative;
  height: .5rem;
  top: 0;
  z-index: 0;
}

.tab >>> .el-tabs__content{
  width: 100%;
  height: 100%;
}
.tab >>> .el-tabs__active-bar{
  background: transparent;
}
.tab >>> .el-tabs__item{
  background: transparent;
}
.tab >>> .el-tabs__nav-wrap{
  width: 100%;
}
.tab >>> .el-tabs__nav{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tab >>> .el-tabs__nav-wrap::after {
      position: static !important;
  }
.tab >>> .el-tab-pane{
  width: 100%;
  height: 100%;
}

</style>
