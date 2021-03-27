<template>
    <div id="teams">
        <div class="box1">
            <span>扑通小组</span>
            <span>全部></span>
        </div>
        <div class="box2">
            <ul>
                <li v-for="item in list" :key="item">
                    <div class="box">
                        <img :src="item.pic"/>
                        <div class="tag">
                            <div class="el-icon-caret-right">{{item.num}}</div>
                        </div>
                        <span>{{item.name}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: 'teams',
  data () {
    return {
      list: [
        {
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
        }
      ]
    }
  }
}
</script>
<style scoped>
#teams{
    width: 90%;
    height: 100%;
    background-color: white;
}
.box1{
    width: 100%;
    height: .8rem;
}
.box1 span:nth-child(1){
    font-size: .5rem;
    color:black;
    margin-right: 66%;
}
.box1 span:nth-child(2){
    font-size: .3rem;
    color: gray;
}
.box2{
    width: 100%;
    height: 4rem;
    overflow: scroll;
}
.box2::-webkit-scrollbar{
    display: none;
}
ul{
    padding: 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    margin-bottom: .2rem;
}
ul li{
    width: 2.5rem;
    height: 3.6rem;
    position: relative;
    margin-right: .3rem;
}
.box{
    width: 2.5rem;
    height: 3.6rem;
    display: flex;
    flex-direction: column;
}
.box span{
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
img{
    width: 2.5rem;
    height: 2.5rem;
    border-radius: .3rem;
}
.tag{
    position: absolute;
    color: white;
    margin-top: 2.1rem;
    width: 1.3rem;
    height: .5rem;
    background-color: gainsboro;
    border-radius: .2rem;
    font-size: .3rem;
}
</style>
