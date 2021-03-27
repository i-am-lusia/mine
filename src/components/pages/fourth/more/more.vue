<template>
    <div id="more">
        <div class="box1">
            <span class="el-icon-arrow-left" @click="close"></span>
            <span>更多</span>
            <span class="el-icon-full-screen"></span>
        </div>
        <div class="box2">
            <div class="theradio">
                <img style="width:1rem;height:1rem;margin-right:.2rem" src="@/assets/images/run.png"/>
                <div class="title">
                    <span style="font-size:.4rem">跑步电台</span>
                    <span style="font-size:.35rem;margin-top:.1rem;color:gray">智能匹配步频</span>
                </div>
            </div>
            <div class="babymode">
                <img style="width:1rem;height:1rem;margin-right:.1rem" src="@/assets/images/baby.png"/>
                <div class="title">
                    <span style="font-size:.4rem">亲子模式</span>
                    <span style="font-size:.35rem;margin-top:.1rem;0color:gray">宝宝定制音乐包</span>
                </div>
            </div>
        </div>
        <div class="box3">
            <span style="margin-right:80%">设置</span>
            <span class="el-icon-arrow-right"></span>
        </div>
        <div class="box4">
            <ul>
                <li>
                    <span style="margin-right:31%;">个性化装扮中心</span>
                    <span style="font-size:.35rem;color:gray;">换超炫头像挂件</span>
                    <span class="el-icon-arrow-right"></span>
                </li>
                <li>
                    <span style="margin-right:71.5%;">开放平台</span>
                    <span class="el-icon-arrow-right"></span>
                </li>
                <li>
                    <span style="margin-right:67%;">免流量服务</span>
                    <span class="el-icon-arrow-right"></span>
                </li>
                <li>
                    <span style="margin-right:80%;">票务</span>
                    <span class="el-icon-arrow-right"></span>
                </li>
                <li >
                    <span style="margin-right:43%;">百变彩铃</span>
                    <span style="font-size:.35rem;color:gray;">百万铃声随心选</span>
                    <span class="el-icon-arrow-right"></span>
                </li>
            </ul>
        </div>
        <div class="box5">
            <ul>
                <li>
                    <span style="margin-right:65%">定时关闭</span>
                    <el-switch
                        v-model="settime"
                        active-color="#13ce66"
                        inactive-color="#808080">
                    </el-switch>
                </li>
                <li>
                    <span style="margin-right:28%">听歌识曲</span>
                    <span style="font-size:.35rem;color:gray;">可以边刷视频边刷识曲了</span>
                    <span class="el-icon-arrow-right"></span>
                </li>
                <li>
                    <span style="margin-right:62%">导入外部歌单</span>
                    <span class="el-icon-arrow-right"></span>
                </li>
                <li>
                    <span style="margin-right:62%">微云音乐网盘</span>
                    <span class="el-icon-arrow-right"></span>
                </li>
                <li>
                    <span style="margin-right:62%">清理占用空间</span>
                    <span class="el-icon-arrow-right"></span>
                </li>
                <li>
                    <span style="margin-right:70%">安全中心</span>
                    <span class="el-icon-arrow-right"></span>
                </li>
                <li>
                    <span style="margin-right:54%">青少年模式</span>
                    <span style="font-size:.35rem;color:gray;">未开启</span>
                    <span class="el-icon-arrow-right"></span>
                </li>
                <li>
                    <span style="margin-right:66%">帮助与反馈</span>
                    <span class="el-icon-arrow-right"></span>
                </li>
            </ul>
        </div>
        <div class="box6">
            <el-button round>退出登录</el-button>
        </div>
        <div class="box7">
            <songbox></songbox>
        </div>
    </div>
</template>
<script>
import songbox from '../../../../containers/playbox/songbox/songbox.vue'
export default {
  components: { songbox },
  name: 'more',
  data () {
    return {
      settime: true,
      isMore: false
    }
  },
  methods: {
    close () {
      this.$emit('closeMore', this.isMore)
    }
  }
}
</script>
<style scoped>
#more{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: scroll;
    background-color: whitesmoke;
}
.box1{
    width: 100%;
    height: 1rem;
    background-color: white;
    font-size: .5rem;
    position: fixed;
    top:0;
    z-index: 2;
}
.box1 span{
    margin-top: .3rem;
}
.el-icon-arrow-left{
    margin-left: 3%;
    margin-right: 32%;
}
.el-icon-full-screen{
    margin-left: 35%;
}
.box2{
    width: 100%;
    height: 2.5rem;
    margin-top: 1.2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.theradio{
    width: 40%;
    height: 2rem;
    background-color: white;
    margin-right: .3rem;
    border-radius: .3rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.babymode{
    width: 40%;
    height: 2rem;
    background-color: white;
    border-radius: .3rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.title{
    display: flex;
    flex-direction: column;
}
.box3{
    width: 90%;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .4rem;
    border-bottom: gray solid .01rem;
}
.box3 span{
    margin-top: .3rem;
    margin-bottom: .3rem;
}
.box4{
    width: 90%;
    height: 5.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .4rem;
    border-bottom: gray solid .01rem;
}
.box4 ul{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    list-style-type: none;
}
.box4 ul li{
    width: 100%;
    margin: 0;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.el-icon-arrow-right{
    color:gray;
}
.box5{
    width: 90%;
    height: 8.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .4rem;
    border-bottom: gray solid .01rem;
}
.box5 ul{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    list-style-type: none;
}
.box5 ul li{
    width: 100%;
    margin: 0;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box6{
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.el-button{
    width: 3rem;
    height: 1rem;
    margin-top: .5rem;
    margin-bottom: 2rem;
    border-radius: 3rem;
    color: red;
    border-color: red;
}
.box7{
    width: 100%;
    height: 2rem;
    position: fixed;
    z-index: 3;
    bottom: 0;
}
</style>
<style>
.el-switch__core::after{
    width: .5rem;
    height: .5rem;
    left: .06rem;
    top: .02rem;
}
.el-switch__core{
    width: 1rem !important;
    height: .6rem;
    border-radius: .4rem;
}
.el-switch.is-checked .el-switch__core::after{
    margin-left: -.5rem;
}
</style>
