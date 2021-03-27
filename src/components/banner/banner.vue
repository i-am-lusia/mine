<template>
    <div id="banner">
        <el-carousel >
            <el-carousel-item v-for="item in bannerData.listData" :key="item.name">
                <img class="picsize" :src="item.imageUrl"/>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
export default {
  name: 'banner',
  props: ['bannerData']
}
</script>
<style scoped>
#banner{
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.el-carousel{
    width: 100%;
}
.picsize{
    width: 100%;
    height: 100%;
    border-radius: .3rem;
}
#post >>> .el-carousel__indicators{
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
