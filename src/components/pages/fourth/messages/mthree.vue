<template>
    <div id="mthree">
        <ul>
            <li v-for="item in list" :key="item">
                <div class="box1">
                 <div class="box-title">
                    <div style="font-size:.45rem;width:70%;">{{item.name}}</div>
                    <span style="font-size:.3rem;color:gray;">{{item.time}}</span>
                 </div>
                 <div class="content">
                     <span>{{item.words}}</span>
                 </div>
                 <div class="buttons">
                     <span>{{item.buttons}}</span>
                 </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'mthree',
  data () {
    return {
      list: [
        {
          name: 'hfhsjdghf',
          time: '11-05 12:00',
          words: 'asdfhjdfguisdabf',
          buttons: 'fhjdsf'
        },
        {
          name: 'hfhsjdghf',
          time: '11-05 12:00',
          words: 'asdfhjdfguisdabf',
          buttons: 'fhjdsf'
        }
      ]
    }
  }
}
</script>
<style scoped>
#mthree{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: whitesmoke;
}
.box1{
    width: 90%;
    height: auto;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    border-radius: .3rem;
}
.box-title{
    width: 100%;
    height: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.content{
    width: 90%;
    height: auto ;
    margin-left: 5%;
    font-size: .4rem;
    color: grey;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    border-bottom: gainsboro solid .01rem;
}
.content span{
    word-break:normal;
    white-space:pre-wrap;
    word-wrap : break-word ;
    overflow: hidden ;
}
.buttons{
    width: 100%;
    font-size: .4rem;
    height: auto;
    color: green;
    margin-top: .2rem;
    margin-left: 75%;
    margin-bottom: .2rem;
}
ul{
    padding: 0;
    margin: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style-type: none;
}
ul li{
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: .3rem;
}
</style>
