<template>
    <div id="music">
        <router-view :class="{full: this.$store.state.fullScreen}"></router-view>
    </div>
</template>
<script>
export default {
  name: 'music'
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
