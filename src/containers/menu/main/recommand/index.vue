<template>
    <div id="music">
        <!--  <router-view :class="{full: this.$store.state.fullScreen}"></router-view>
        -->
        <comment></comment>
    </div>
</template>
<script>
import comment from './../../../../components/comment/index.vue'
export default {
  name: 'music',
  components: {
    comment
  }
}
</script>>
<style scoped>
.full{
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left: 0;
    z-index: 10;
}
</style>
