<template>
    <div id="follow">
        <div class="themessage">
        <message></message>
        </div>
    </div>
</template>
<script>
import message from '@/components/pages/third/follow/message.vue'
export default {
  components: { message },
  name: 'follow',
  data () {

  }
}
</script>
<style scoped>
#follow{
    width: 100%;
    height: 100%;
}
.themessage{
    width: 100%;
    height: auto;
    margin-top: 1.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
