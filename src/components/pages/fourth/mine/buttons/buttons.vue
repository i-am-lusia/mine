<template>
    <div id="buttons">
            <div class="box">
                <img src="@/assets/images/heart1.png">
                <span class="title">喜欢</span>
                <span class="num">1234</span>
            </div>
            <div class="box">
                <img src="@/assets/images/download1.png">
                <span class="title">喜欢</span>
                <span class="num">1234</span>
            </div>
            <div class="box">
                <img src="@/assets/images/songlist2.png">
                <span class="title">喜欢</span>
                <span class="num">1234</span>
            </div>
            <div class="box">
                <img src="@/assets/images/yigou.png">
                <span class="title">喜欢</span>
                <span class="num">1234</span>
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
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}
.box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: .5rem;
}
.box img{
    width: 1rem;
}
.title{
    font-family: Arial, Helvetica, sans-serif;
    font-size: .4rem;
    margin-top: .15rem;
}
.num{
    font-family: Arial, Helvetica, sans-serif;
    font-size: .2rem;
    color: gray;
}
</style>
