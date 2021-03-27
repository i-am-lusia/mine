<template>
    <div id="post">
        <el-carousel >
            <el-carousel-item v-for="item in piclist" :key="item.name">
                <img class="picsize" :src="item.pic"/>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
export default {
  name: 'post',
  data () {
    return {
      piclist: [
        {
          name: '1',
          pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605027697438&di=f9f3ac6e82afa35ff848d2b7845104a1&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F06fea97406026525a4420da65901376d87b0d27aff64-iiBq3q_fw658'
        },
        {
          name: '2',
          pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605027697437&di=94cc39538e5e37d2b62f3f9d50551a82&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fc10f3af525c7a00ccc7e4ae9531245ca9718b8a6159b3-B8jbHE_fw658'
        }
      ]
    }
  }
}
</script>
<style scoped>
#post{
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
</style>
