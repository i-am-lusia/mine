<template>
    <div id="post">
        <el-carousel >
            <el-carousel-item v-for="item in piclist" :key="item.name">
                <img class="picsize" :src="item.imageUrl"/>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'post',
  data () {
    return {
      piclist: []
    }
  },
  mounted: function () {
    var that = this
    axios({
      method: 'get',
      url: `http://localhost:3000/banner`,
      withCredentials: true
    }).then(function (res) {
      that.piclist = res.data.banners
    })
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
#post >>> .el-carousel__indicators{
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
