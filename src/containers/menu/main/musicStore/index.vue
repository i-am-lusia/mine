<template>
    <div id="music">
        <router-view :class="{full: isFull}"></router-view>
    </div>
</template>
<script>
export default {
  name: 'music',
  data () {
    return {
      isFull: false
    }
  },
  watch: {
    $route (to, from) {
      if (to.path === '/musicstore') {
        this.isFull = false
      } else this.isFull = true
    }
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
