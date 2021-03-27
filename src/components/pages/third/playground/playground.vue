<template>
    <div id="playground">
        <div class="thepost">
            <post></post>
        </div>
        <div class="teams">
            <teams></teams>
        </div>
        <div class="message">
            <message></message>
        </div>
        <div style="height:10rem"/>
    </div>
</template>
<script>
import post from '@/components/pages/third/playground/box/post.vue'
import teams from '@/components/pages/third/playground/box/teams.vue'
import message from '@/components/pages/third/playground/box/message.vue'
export default {
  name: 'playground',
  components: {
    post, teams, message
  }
}
</script>
<style scoped>
#playground{
    width: 100%;
    height: 100%;
}
.thepost{
    width: 100%;
    height: 4rem;
    margin-top: 1.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.teams{
    width: 100%;
    height: 4.6rem;
    margin-top: .1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.message{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
