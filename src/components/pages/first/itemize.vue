<template>
    <div id="itemize">
        <div class="box1">
            <span class="el-icon-arrow-left" @click="close" style="margin-left:2.5%"></span>
            <span style="margin-left:28%">分类歌单</span>
            <span style="font-size:.4rem;margin-left:26%;margin-right:2.5%">投稿</span>
            <span class="el-icon-search"></span>
        </div>
        <div class="box2">
            <el-carousel type="card" indicator-position="none">
            <el-carousel-item v-for="item in piclist" :key="item.name">
                <img class="picsize" :src="item.pic"/>
            </el-carousel-item>
        </el-carousel>
        </div>
        <div class="box3">
            <ul class="thecol">
                <li class="thecolli" v-for="(item,index) in collist" :key="index">
                    <ul class="therow">
                        <li v-for="(ritem,rindex) in item.rowlist" :key="rindex">
                         <img class="pic" :src="ritem.pic"/>
                         <span>{{ritem.name}}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: 'itemize',
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
      ],
      collist: [
        {
          rowlist: [{

            name: 'djfkhasdjkgsjhhugdfigfdshifdsji',
            num: 'fhjudfk',
            pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605272752665&di=f894d42912938e05c11040b7fb13574b&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1fd9e0fb297bbe83d58274d702965123a28123bc1bff3-5U2jgW_fw658'
          },
          {
            name: 'djfkhasdjkgsjhhugdfigfdshifdsji',
            num: 'fhjudfk',
            pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605272752665&di=f894d42912938e05c11040b7fb13574b&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1fd9e0fb297bbe83d58274d702965123a28123bc1bff3-5U2jgW_fw658'
          },
          {
            name: 'djfkhasdjkgsjhhugdfigfdshifdsji',
            num: 'fhjudfk',
            pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605272752665&di=f894d42912938e05c11040b7fb13574b&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1fd9e0fb297bbe83d58274d702965123a28123bc1bff3-5U2jgW_fw658'
          }]
        },
        {
          rowlist: [{

            name: 'djfkhasdjkgsjhhugdfigfdshifdsji',
            num: 'fhjudfk',
            pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605272752665&di=f894d42912938e05c11040b7fb13574b&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1fd9e0fb297bbe83d58274d702965123a28123bc1bff3-5U2jgW_fw658'
          },
          {
            name: 'djfkhasdjkgsjhhugdfigfdshifdsji',
            num: 'fhjudfk',
            pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605272752665&di=f894d42912938e05c11040b7fb13574b&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1fd9e0fb297bbe83d58274d702965123a28123bc1bff3-5U2jgW_fw658'
          },
          {
            name: 'djfkhasdjkgsjhhugdfigfdshifdsji',
            num: 'fhjudfk',
            pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605272752665&di=f894d42912938e05c11040b7fb13574b&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1fd9e0fb297bbe83d58274d702965123a28123bc1bff3-5U2jgW_fw658'
          }]
        },
        {
          rowlist: [{

            name: 'djfkhasdjkgsjhhugdfigfdshifdsji',
            num: 'fhjudfk',
            pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605272752665&di=f894d42912938e05c11040b7fb13574b&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1fd9e0fb297bbe83d58274d702965123a28123bc1bff3-5U2jgW_fw658'
          },
          {
            name: 'djfkhasdjkgsjhhugdfigfdshifdsji',
            num: 'fhjudfk',
            pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605272752665&di=f894d42912938e05c11040b7fb13574b&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1fd9e0fb297bbe83d58274d702965123a28123bc1bff3-5U2jgW_fw658'
          },
          {
            name: 'djfkhasdjkgsjhhugdfigfdshifdsji',
            num: 'fhjudfk',
            pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605272752665&di=f894d42912938e05c11040b7fb13574b&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1fd9e0fb297bbe83d58274d702965123a28123bc1bff3-5U2jgW_fw658'
          }]
        },
        {
          rowlist: [
            {
              name: 'djfkhasdjkgsjhhugdfigfdshifdsji',
              num: 'fhjudfk',
              pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605272752665&di=f894d42912938e05c11040b7fb13574b&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1fd9e0fb297bbe83d58274d702965123a28123bc1bff3-5U2jgW_fw658'
            },
            {
              name: 'djfkhasdjkgsjhhugdfigfdshifdsji',
              num: 'fhjudfk',
              pic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605272752665&di=f894d42912938e05c11040b7fb13574b&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1fd9e0fb297bbe83d58274d702965123a28123bc1bff3-5U2jgW_fw658'
            }]
        }
      ]
    }
  },
  methods: {
    close () {
      this.$emit('closeItemize', this.isRanks)
    }
  }
}
</script>
<style scoped>
#itemize{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    overflow: scroll;
}
.box1{
    width: 100%;
    height: 1rem;
    background: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: .5rem;
    position: fixed;
    top: 0;
    z-index: 5;
}
.box2{
    width: 90%;
    height: 4rem;
    margin-top: 1.2rem;
}
.picsize{
    width: 100%;
    height: 100%;
    border-radius: .3rem;
}
.box3{
    width: 90%;
    height: auto;
    background: olivedrab;
    margin-top: .3rem;
}
.box3 ul{
    list-style-type: none;
    padding: 0;
    margin: 0;
}
.thecol{
    width: 100%;
    height: 10rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
.thecolli{
    width: 100%;
    height: 4rem;
}
.therow{
    width: 100%;
    height: 4rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
}
.therow li{
    margin-left: .1rem;
    margin-right: .1rem;
}
.box3 span{
    width:2.5rem;
    height: 1rem;
    margin-top: .1rem;
    font-size: .35rem;
    display: block;
    word-break:normal;
    white-space:pre-wrap;
    word-wrap : break-word ;
    overflow: hidden ;
}
.pic{
    width: 2.8rem;
    height: 2.8rem;
    border-radius: .3rem;
}
</style>
