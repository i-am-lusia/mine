<template>
    <div id="singer">
        <div class="box1">
            <span class="el-icon-arrow-left" @click="closeSinger"></span>
            <span>歌手</span>
            <span class="el-icon-search"></span>
        </div>
        <div class="box2">
            <span>常见歌手</span>
            <span>关注歌手 ></span>
        </div>
        <div class="box3">
            <ul>
                <li v-for="item in singer1" :key="item.name">
                    <div class="box3-1">
                        <img class="pic1" :src="item.pic"/>
                        <span>{{item.name}}</span>
                        <span style="font-size:.5rem" class="el-icon-video-pause"></span>
                        <span style="font-size:.5rem" class="el-icon-video-play"></span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="box4"
        style="margin-top:.3rem;">
            <el-radio-group  v-model="type1" @change="Toarea">
                <el-radio-button label="全部"></el-radio-button>
                <el-radio-button label="华语"></el-radio-button>
                <el-radio-button label="欧美"></el-radio-button>
                <el-radio-button label="日本"></el-radio-button>
                <el-radio-button label="韩国"></el-radio-button>
                <el-radio-button label="其他"></el-radio-button>
            </el-radio-group>
        </div>
        <div class="box4">
            <el-radio-group
            v-model="type2"
            @change="Totype2">
                <el-radio-button label="全部"></el-radio-button>
                <el-radio-button label="男"></el-radio-button>
                <el-radio-button label="女"></el-radio-button>
                <el-radio-button label="组合"></el-radio-button>
            </el-radio-group>
        </div>
        <div class="box4">
            <el-radio-group
            v-model="type3">
                <el-radio-button label="全部"></el-radio-button>
                <el-radio-button label="流行"></el-radio-button>
                <el-radio-button label="嘻哈"></el-radio-button>
                <el-radio-button label="摇滚"></el-radio-button>
                <el-radio-button label="电子"></el-radio-button>
                <el-radio-button label="民谣"></el-radio-button>
                <el-radio-button label="R&B"></el-radio-button>
                <el-radio-button label="民歌"></el-radio-button>
                <el-radio-button label="轻音乐"></el-radio-button>
                <el-radio-button label="爵士"></el-radio-button>
                <el-radio-button label="古典"></el-radio-button>
                <el-radio-button label="乡村"></el-radio-button>
                <el-radio-button label="蓝调"></el-radio-button>
            </el-radio-group>
        </div>
        <div class="box5">
           <div class="singer-top-tag">{{singerTopTag | filterSingerTag}}</div>
         <ul class="tag-line">
                <li v-for="(item,index) in list" :key="index" class="singer-ul-li">
                    <div style="margin-left:5%;font-size:.5rem;margin-top:.1rem" :id="item.tag">{{item.tag | filterSingerTag}}</div>
                    <ul class="singer-lap">
                        <li
                        class="singer-li"
                         v-for="(fitem,findex) in item.data" :key="findex">
                        <img class="pic2" :src="fitem.img1v1Url"/>
                        <div class="singer-box">
                            <span style="color:black;font-size:.4rem;margin-bottom:.1rem">{{fitem.name}}</span>
                          <!--  <span style="color:gray;font-size:.3rem">粉丝 {{fitem.accountId}}</span> -->
                        </div>
                        <div class="follow-button">+ 关注</div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div class="box6">
            <ul>
                <li
                v-for="(item, index) in sortlist"
                :key="index"
                @click="jumpTag(item)"
                :class="{current:currentSort == item? true: false}"
                >
                {{item == `hot` ? `热`:item}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'singer',
  data () {
    return {
      type1: '全部',
      area: '-1',
      type2: '全部',
      type: '-1',
      type3: '全部',
      sortlist: [
        'A', 'B', 'C', 'D', 'E', 'F', 'G',
        'H', 'I', 'J', 'K', 'L', 'M', 'N',
        'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z'
      ],
      currentSort: 'hot',
      singer1: [],
      isSinger: false,
      list: [],
      singerTopTag: ''
    }
  },
  methods: {
    closeSinger () {
      this.$emit('closeSinger', this.isSinger)
    },
    Toarea () {
      switch (this.type1) {
        case '全部':this.area = '-1'; break
        case '华语':this.area = '7'; break
        case '欧美':this.area = '96'; break
        case '日本':this.area = '8'; break
        case '韩国':this.area = '16'; break
        default:this.area = '0'
      }
    },
    Totype2 () {
      switch (this.type2) {
        case '全部': this.type = '-1'; break
        case '男':this.type = '1'; break
        case '女':this.type = '2'; break
        default:this.type = '3'
      }
    },
    testData () {
      var that = this
      that.list = []
      axios({
        method: 'get',
        url: `http://localhost:3000/artist/list?type` + that.type + `&area= ` + that.area + `&initial=-1`,
        withCredentials: true
      }).then(function (res) {
        let tag = 'hot'
        let list = res.data.artists
        let j = {}
        j.tag = tag
        j.data = list
        that.list.push(j)
      })
      for (let i in that.sortlist) {
        let url = `http://localhost:3000/artist/list?type=` + that.type + `&area= ` + that.area + `&initial=` + that.sortlist[i]
        let tag = that.sortlist[i]
        axios({
          method: 'get',
          url: url,
          withCredentials: true
        }).then(function (res) {
          let list = res.data.artists
          let j = {}
          j.tag = tag
          j.data = list
          that.list.push(j)
        })
      }
    },
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let offsetTop = 0
      this.list.forEach((item, index) => {
        //  获取每个排序标签的位置
        offsetTop = document.querySelectorAll('.singer-ul-li')[index].offsetTop
        //  当前滚动条的位置 和 当前的标签偏移顶部的距离进行对比
        //  每一个歌手的li标签的高度必须要保持一致，我这里的高度是70，可以计算自己项目的内容的具体高度进行修改
        if (scrollTop > offsetTop && scrollTop < (offsetTop + 10 * item.data.length)) {
          this.singerTopTag = item.tag
          this.currentSort = item.tag
        }
        if (scrollTop <= 311) {
          this.singerTopTag = ''
        }
      })
    },
    jumpTag (i) {
      this.singerTopTag = i
      this.currentSort = i
      console.log(i)
      document.querySelector(`#${i}`).scrollIntoView()
    }

  },
  mounted () {
    this.testData()
    window.addEventListener('scroll', this.handleScroll, true)
  },
  filters: {
    filterSingerTag (i) {
      return i === `hot` ? `热门` : i
    }
  },
  destroyed () {
    //  页面摧毁的时候要关闭监听
    window.removeEventListener('scroll', this.handleScroll, true)
  },
  computed: {
    ans () {
      const {type, area} = this
      return {type, area}
    }
  },
  watch: {
    ans (newVal, oldVal) {
      this.testData()
    }
  }
}
</script>
<style scoped>
#singer{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.box1{
    width: 100%;
    height: 1rem;
    background: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: .5rem;
    margin-top: .2rem;
}
.box1 span:nth-child(1){
    margin-left: 2.5%;
    margin-right: 36%;
}
.box1 span:nth-child(2){
    margin-right: 36%;
}
.box2{
    width: 100%;
    height: .8rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: .35rem;
    color: grey;
}
.box2 span:nth-child(1){
    margin-left: 10%;
    margin-right: 50%;
}
.box3{
    width: 90%;
    height: 2.5rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}
.box3::-webkit-scrollbar{
    display: none;
}
.box3 ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}
.box3 ul li{
    margin-right: .2rem;
}
.box3-1{
    width: 2rem;
    height: 2.5rem;
    background-color:white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: .3rem;
}
.pic1{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
}
.box4{
    width: 90%;
    height: .8rem;
    margin-top: .1rem;
    display: flex;
    flex-direction: row;
}
.box4::-webkit-scrollbar{
    display: none;
}
.box4 >>> .el-radio-group{
    width: 100%;
    display: flex;
    flex-direction:row;
    justify-content:flex-start;
}
.box4 >>> .el-radio-button{
    width: 1.2rem;
    margin-right: .2rem;
}
.box4 >>> .el-radio-button__inner{
    width: 1.2rem;
    font-size: .35rem;
    border-radius: .3rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box5{
    width: 100%;
    height: 10rem;
    margin-top: .3rem;
}
.box5 ul{
    height: auto;
    padding: 0;
    margin:0;
    list-style-type: none;
    background: white;
}
.pic2{
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    margin-left: 2.5%;
}
.singer-li{
    margin-left: 5%;
    width: 90%;
    height: 1.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top:.2rem;
}
.singer-box{
    width:60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: black;
    justify-content: center;
    align-items: flex-start;
    margin-left: 1.5%;
}
.follow-button{
    width: 1.5rem;
    height: .5rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    font-size: .3rem;
    text-align: center;
    background: white;
    border: gray solid 0.001rem;
}
.box6{
    position:fixed;
    z-index: 4;
    right: 0;
    top:20%
}
.box6 ul{
    padding: 0;
    margin: 0;
    list-style-type: none;
}
.box6 ul li{
    padding: .1rem;
    line-height: 1;
    font-size: .3rem;
}
.current{
    color: #ffcd32;
}
.singer-top-tag {
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 30px;
  line-height: 30px;
  padding-left: 20px;
  font-size: .2rem;
  color: black;
  background: white;
}

</style>
