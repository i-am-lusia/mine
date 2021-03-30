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
    height: 100%;
}
.picsize{
    width: 100%;
    width: 100%;
    border-radius: .3rem;
}
#banner >>> .el-carousel__container{
  height: 3rem;
}
#banner >>> .el-carousel__indicators{
  width: .5rem;
  display: flex;
  justify-content: center;
}
#banner >>> .el-carousel__button{
    width: .5rem;
}
#banner >>> .el-carousel__arrow {
    display: none;
}
#banner >>> .el-carousel__item{
    height: 3.5rem;
}
</style>
