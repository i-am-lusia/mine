<template>
    <div id="tags">
      <div class="box">
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <span class="name">{{ isTags ? '#' : ''}}{{isTags ? item.content : item.showKeyword}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: 'tags',
  props: ['isTags', 'list']
}
</script>
<style scoped>
#tags{
  width: 90%;
  height: 100%;
}
.box{
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: .1rem;
    overflow: scroll;
}
.box::-webkit-scrollbar{
    display: none;
}
ul{
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
}
li{
    display: flex;
    flex-direction: column;
    margin-right: .2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: whitesmoke;
    border-radius: .5rem;
}
.name{
    color: gray;
    font-size: .4rem;
    margin-left: .2rem;
    margin-right: .2rem;
    margin-top: 0;
    white-space: nowrap;
}
</style>
