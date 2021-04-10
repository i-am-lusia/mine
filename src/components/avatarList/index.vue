<template>
  <div id="avatarList">
    <ul>
      <li v-for="(item, index) in simi" :key="index" @click="goTo(item)">
        <img class="h-pic" :src="item.picUrl" />
        <span
          style="white-space: nowrap; text-overflow: ellipsis; overflow: hidden"
          >{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'avatarList',
  props: ['simi'],
  methods: {
    goTo (data) {
      this.$router.push({path: '/singerDetail', query: {id: data.id}})
    }
  }
}
</script>
<style scoped>
#avatarList{
  width:100%;
}
ul{
    width: 90%;
    height: 2.5rem;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    margin: 0;
    margin-left: 6%;
    margin-top: .2rem;
    overflow: scroll;
}
ul::-webkit-scrollbar{
    display: none;
}
ul li{
    display: flex;
    flex-direction: column;
    font-size: .4rem;
    justify-content: center;
    align-items: center;
    margin-right: .2rem;
}
.h-pic{
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
}
</style>
