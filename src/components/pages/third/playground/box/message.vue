<template>
    <div id="message">
        <ul>
            <li v-for="item in messages" :key="item" style="border-top: grey solid .05rem;">
                <div class="box1">
                    <img class="pic1" :src="item.hpic"/>
                    <span class="name">{{item.name}}</span>
                    <span class="tag">{{item.team}}</span>
                </div>
                <div class="box2">
                    {{item.words}}
                </div>
                <div class="box3">
                    <ul>
                        <li>
                            <img :src="item.padd"/>
                        </li>
                    </ul>
                </div>
                <div class="box4">
                    <video class="mv"></video>
                </div>
                <div class="box5">
                    <img class="pic2" :src="item.songpic"/>
                    <div style="width:6rem">
                        <span>{{item.songname}}</span>
                        <span>{{item.singger}}</span>
                    </div>
                    <img class="pic3" src="@/assets/images/like1.png" />
                    <img class="pic3" src="@/assets/images/like2.png"/>
                </div>
                <div class="box6">
                    <span>{{item.commentuser}} : </span><span>{{item.comment}}</span>
                </div>
                <div class="box7">
                    <div class="el-icon-chat-dot-square">{{item.commentnum}}</div>
                    <img class="pic4" src="@/assets/images/like3.png"/>
                    <span style="margin-right: .3rem;">{{item.like}}</span>
                    <div class="el-icon-more"></div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'message',
  data () {
    return {
      messages: [
        {
          name: 'name',
          hpic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605362518373&di=f69bb86ac93485855dfee2f962503562&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20170307%2FImg482602891.jpg',
          padd: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605364499818&di=715819da4914c6009222257f30f5b493&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201506%2F12%2F20150612174230_aBhfP.jpeg',
          vadd: '',
          words: 'hjvgsfdgikhgfdsghjksagfdkhjsdfkjhsdfgjkgsd\nnkfasdjfsdk',
          team: 'team',
          songname: 'bjkhgvsfadjkhsdga',
          songpic: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1785893120,3521366897&fm=26&gp=0.jpg',
          singger: 'jihgfjio',
          like: 456,
          comment: '!fjakf',
          commentuser: 'fahfi',
          commentnum: 123
        },
        {
          name: 'name',
          hpic: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605362518373&di=f69bb86ac93485855dfee2f962503562&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20170307%2FImg482602891.jpg',
          padd: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605364499818&di=715819da4914c6009222257f30f5b493&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201506%2F12%2F20150612174230_aBhfP.jpeg',
          vadd: '',
          words: 'hjvgsfdgikhgfdsghjksagfdkhjsdfkjhsdfgjkgsd\nnkfasdjfsdk',
          team: 'team',
          songname: 'bjkhgvsfadjkhsdga',
          songpic: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1785893120,3521366897&fm=26&gp=0.jpg',
          singger: 'jihgfjio',
          like: 456,
          comment: '!fjakf',
          commentuser: 'fahfi',
          commentnum: 123
        }
      ]
    }
  }
}
</script>
<style scoped>
#message{
    width: 90%;
    height: 100%;
    background-color: white;
}
ul{
    padding: 0;
    margin: 0;
    list-style-type: none;
}
li{
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fff;
}
.box1{
    width: 100%;
    height: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.box2{
    width: 100%;
    height: auto;
    font-size: .4rem;
}
.bo3{
    width: 100%;;
    height: auto;
}
.box4{
    width: 100%;
    height: auto;
}
.box5{
    width: 100%;
    height: 1.5rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.box5 div{
    height: 4rem;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    font-size: .4rem;
    margin-left: .3rem;
}
.box5 div span:nth-child(2){
    color: grey;
}
.box6{
    width: 100%;
    height: .8rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: .35rem;
}
.box6 span:nth-child(2){
    color: grey;
}
.box7{
    width: 100%;
    height: .8rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: .4rem;
    color: gray;
}
.box3 img{
    width: 5rem;
    height: 6rem;
    border-radius: .3rem;
    margin-left: .2rem;
}
.pic1{
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 50%;
    margin-left: 2.5%;
}
.pic2{
    width: 1.5rem;
    height: 1.5rem;
    border-radius: .3rem 0 0 .3rem;
}
.pic3{
    width: 1rem;
    height: 1rem;
}
.pic4{
    width: .4rem;
    height: .4rem;
    margin-left: .3rem;
}
.name{
    font-size: .4rem;
    color: black;
    margin-left: 2.5%;
}
.tag{
    font-size: .4rem;
    color: greenyellow;
    margin-left: 2.5%;
}
.mv{
    width: 100%;
    background-color: indigo;
    border-radius: .3rem;
}
</style>
