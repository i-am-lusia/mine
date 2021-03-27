<template>
    <div id="share">
        <div class="shareto">
            <div  class="title">分享到</div>
            <ul>
                <li v-for="item in shareapp" :key="item.name">
                    <div class="box">
                        <img :src="item.logo"/>
                    </div>
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
        <div class="also">
            <div    class="title">你还可以分享到</div>
            <ul>
                <li v-for="item in alsoshare" :key="item.name">
                    <div class="box">
                    </div>
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
        <div class="cancel" @click="close">
            取消
        </div>
    </div>
</template>
<script>
export default {
  name: 'share',
  data () {
    return {
      isShare: false,
      shareapp: [
        {
          name: 'wechat',
          logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604497654148&di=0e2a629397febf1179ed24c56e0ef843&imgtype=0&src=http%3A%2F%2Fcdnimg103.lizhi.fm%2Faudio_cover%2F2019%2F08%2F30%2F2757103042509859335_320x320.jpg'
        },
        {
          name: 'wechat',
          logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604497654148&di=0e2a629397febf1179ed24c56e0ef843&imgtype=0&src=http%3A%2F%2Fcdnimg103.lizhi.fm%2Faudio_cover%2F2019%2F08%2F30%2F2757103042509859335_320x320.jpg'
        },
        {
          name: 'wechat',
          logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604497654148&di=0e2a629397febf1179ed24c56e0ef843&imgtype=0&src=http%3A%2F%2Fcdnimg103.lizhi.fm%2Faudio_cover%2F2019%2F08%2F30%2F2757103042509859335_320x320.jpg'
        },
        {
          name: 'wechat',
          logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604497654148&di=0e2a629397febf1179ed24c56e0ef843&imgtype=0&src=http%3A%2F%2Fcdnimg103.lizhi.fm%2Faudio_cover%2F2019%2F08%2F30%2F2757103042509859335_320x320.jpg'
        },
        {
          name: 'wechat',
          logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604497654148&di=0e2a629397febf1179ed24c56e0ef843&imgtype=0&src=http%3A%2F%2Fcdnimg103.lizhi.fm%2Faudio_cover%2F2019%2F08%2F30%2F2757103042509859335_320x320.jpg'
        },
        {
          name: 'wechat',
          logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604497654148&di=0e2a629397febf1179ed24c56e0ef843&imgtype=0&src=http%3A%2F%2Fcdnimg103.lizhi.fm%2Faudio_cover%2F2019%2F08%2F30%2F2757103042509859335_320x320.jpg'
        },
        {
          name: 'wechat',
          logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604497654148&di=0e2a629397febf1179ed24c56e0ef843&imgtype=0&src=http%3A%2F%2Fcdnimg103.lizhi.fm%2Faudio_cover%2F2019%2F08%2F30%2F2757103042509859335_320x320.jpg'
        },
        {
          name: 'wechat',
          logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604497654148&di=0e2a629397febf1179ed24c56e0ef843&imgtype=0&src=http%3A%2F%2Fcdnimg103.lizhi.fm%2Faudio_cover%2F2019%2F08%2F30%2F2757103042509859335_320x320.jpg'
        },
        {
          name: 'wechat',
          logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604497654148&di=0e2a629397febf1179ed24c56e0ef843&imgtype=0&src=http%3A%2F%2Fcdnimg103.lizhi.fm%2Faudio_cover%2F2019%2F08%2F30%2F2757103042509859335_320x320.jpg'
        },
        {
          name: 'wechat',
          logo: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1604497654148&di=0e2a629397febf1179ed24c56e0ef843&imgtype=0&src=http%3A%2F%2Fcdnimg103.lizhi.fm%2Faudio_cover%2F2019%2F08%2F30%2F2757103042509859335_320x320.jpg'
        }
      ],
      alsoshare: [
        {
          name: '音乐卡片'
        }
      ]
    }
  },
  methods: {
    close () {
      this.$emit('closeShare', this.isShare)
    }
  }
}
</script>
<style scoped>
#share{
    width: 100%;
    background: rgba(0, 0, 0, .7);
    position: absolute;
}
.shareto{
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
}
.shareto .title{
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: .4rem;
    color: white;
    margin-left: 5%;
    margin-top: .2rem;
}
.shareto ul{
    width: 80%;
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin-left: 5%;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 0;
}
.shareto ul::-webkit-scrollbar {
    display: none;
    }
.shareto ul li{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: .3rem;
}
.shareto ul span{
    color: whitesmoke;
    font-size: .3rem;
}
.shareto ul li .box{
    width: .8rem;
    height: .9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .1rem;
    background: rgba(255,255,255, .3);
}
.shareto ul li .box img{
    width: .4rem;
    height: .4rem;
}
.also{
    width: 100%;
    height: 55%;
}
.also .title{
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: .4rem;
    color: white;
    margin-left: 5%;
}
.also ul{
    width: 80%;
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin-left: 5%;
    overflow-y: hidden;
    overflow-x: scroll;
    padding: 0;
}
.also ul::-webkit-scrollbar{
    display: none;
}
.also ul li{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: .3rem;
}
.also ul li .box{
    width: 2rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .1rem;
    background: rgba(255,255,255, .3);
    margin-bottom: .2rem;
}
.also ul li span{
    color: whitesmoke;
    font-size: .3rem;
}
.cancel{
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .4rem;
    font-family: Arial, Helvetica, sans-serif;
    color: whitesmoke;
    border-top: whitesmoke solid 2px;
    opacity: 0.7;
}
</style>>
