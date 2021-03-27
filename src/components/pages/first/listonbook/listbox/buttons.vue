<template>
    <div id="buttons">
            <div class="box">
                <img src="@/assets/images/sole.png">
                <span class="title">排行</span>
            </div>
            <div class="box">
                <img src="@/assets/images/rank.png">
                <span class="title" style="font-size:.39rem">分类歌单</span>
            </div>
            <div class="box">
                <img src="@/assets/images/vip2.png">
                <span class="title">会员专享</span>
            </div>
            <div class="box">
                <img src="@/assets/images/book.png">
                <span class="title">有声书</span>
            </div>
    </div>
</template>
<script>
export default {
  name: 'buttons'
}
</script>
<style scoped>
#buttons{
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}
.box{
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.box img{
    width: .8rem;
}
.title{
    font-family: Helvetica;
    font-size: .4rem;
    margin-top: .15rem;
    color: black;
}
</style>
