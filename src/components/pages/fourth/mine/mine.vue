<template>
    <div id="mine">
        <div class="thepersonal" >
            <personal v-if="isLog"></personal>
            <div class="log-box" v-if="!isLog">
                <div class="el-icon-user-solid" @click="tolog=true">立即登录</div>
                <span>立即登录，资产云同步</span>
            </div>
        </div>
        <div class="theactivity">
            <activity></activity>
        </div>
        <div class="thebuttons">
            <buttons></buttons>
        </div>
        <div class="thenearlist" v-if="isLog">
            <nearlist></nearlist>
        </div>
        <div class="theselflist">
            <selflist></selflist>
        </div>
        <div class="thecollatelist" v-if="isLog">
            <collatelist></collatelist>
        </div>
        <div class="thesmartlist" v-if="isLog">
            <smartlist></smartlist>
        </div>
        <div class="bottom">
            <span v-if="isLog">发现更多推荐内容》</span>
            <span v-if="!isLog">发现更多音乐》</span>
        </div>
        <div class="log">
            <div class="log-1">
            <span>用户</span>
            <input type="text" placeholder="请输入手机号或邮箱">
            </div>
            <div class="log-2">
            <span>密码</span>
            <input type="password" placeholder="请输入密码">
            </div>
            <div class="log-3">登录</div>
            <div class="log-4">注册</div>
        </div>
    </div>
</template>
<script>
import personal from '@/components/pages/fourth/mine/personal/personal'
import activity from '@/components/pages/fourth/mine/activity/activity'
import buttons from '@/components/pages/fourth/mine/buttons/buttons'
import nearlist from '@/components/pages/fourth/mine/nearlist/nearlist'
import selflist from '@/components/pages/fourth/mine/selflist/selflist'
import collatelist from '@/components/pages/fourth/mine/collatelist/collatelist'
import smartlist from '@/components/pages/fourth/mine/smartlist/smartlist'
export default {
  name: 'mine',
  components: {
    personal,
    activity,
    buttons,
    nearlist,
    selflist,
    collatelist,
    smartlist
  },
  data () {
    return {
      isLog: false,
      toLog: false
    }
  },
  methods: {
  }
}
</script>
<style scoped>
#mine{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: whitesmoke;
}
.thepersonal{
    width: 100%;
    margin-top: 1rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.theactivity{
    width: 100%;
    height: 2rem;
    margin-top: .2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.thebuttons{
    width: 100%;
    height: 2rem;
    margin-top: .3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.thenearlist{
    width: 100%;
    height: 5rem;
    margin-top: .3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.theselflist{
    width: 100%;
    height: 5rem;
    margin-top: .3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.thecollatelist{
    width: 100%;
    height: 5rem;
    margin-top: .3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.thesmartlist{
    width: 100%;
    height: 5rem;
    margin-top: .3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.bottom{
     width: 100%;
    height: 4rem;
    margin-top: .3rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    color: gainsboro;
}
.log-box{
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    background: white;
    justify-content: center;
    align-items: center;
    border-radius: .3rem;
    font-size: .4rem;
}
.el-icon-user-solid{
    width: 3rem;
    background: green;
    height: .6rem;
    font-size: .5rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .3rem;
}
.log{
    width: 100%;
    height: 50%;
    position: fixed;
    background-color: rgba(255, 255, 255, .9);
    z-index: 50;
    top: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.log-1{
    width: 5.5rem;
    margin-bottom: .2rem;
    font-size: .5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.log-1 span{
    margin-right: .2rem;
}
.log-2 span{
    margin-right: .2rem;
}
.log-2{
    width: 5.5rem;
    margin-bottom: .2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: .5rem;
}
input{
    width: 4rem;
    height: .5rem;
    outline: none;
    font-size: .4rem;
}
.log-3{
    width: 5.5rem;
    height: .8rem;
    margin-bottom: .2rem;
    font-size: .4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(35, 187, 73, 0.753);
    border-radius: .2rem;
    color: white;
}
.log-4{
    width: 5.5rem;
    height: .8rem;
    font-size: .4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(243, 243, 240, 0.801);
    border-radius: .2rem;
    color: black;
}
</style>
