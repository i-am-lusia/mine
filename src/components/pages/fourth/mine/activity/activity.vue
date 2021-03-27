<template>
    <div id="activity">
        <div class="act1">
            <img class="actpic" src="@/assets/images/act1.png"/>
            <div class="actword">
                <div class="title">活动中心</div>
                <div class="content">签到七天赢绿砖</div>
            </div>
        </div>
        <div class="act2">
            <img class="actpic" src="@/assets/images/act2.png"/>
            <div class="actword">
                <div class="title">会员中心</div>
                <div class="content">VIP热门新碟🎵</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'activity'
}
</script>
<style scoped>
#activity{
    width: 80%;
    height: 90%;
    border-radius: .3rem;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
}
.act1,.act2{
    display: flex;
    justify-content: center;
    align-items: center;
}
.act1{
    margin-right: 5%;
}
.actpic{
    width: 1rem;
    height: 1rem;
}
.actword{
    margin-left: .2rem;
}
.title{
    font-family: Arial, Helvetica, sans-serif;
    font-size: .5rem;
}
.content{
    font-family: Arial, Helvetica, sans-serif;
    color:grey;
}
</style>
