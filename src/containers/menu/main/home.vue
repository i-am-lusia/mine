<template>
    <div id='home'>
      <div class="tab">
              <router-link :to="{path:'recommand'}">
                <span class="pane1" >推荐</span>
              </router-link>
              <router-link :to="{path:'musicstore'}">
              <span class="pane2" >音乐馆</span>
              </router-link>
       </div>
           <router-view style="margin-top:2.2rem;"></router-view>
      <span class="el-icon-mic"></span>
    </div>
</template>
<script>
// import axios from 'axios'
export default {
  name: 'home',
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
@import './index.css';
</style>
