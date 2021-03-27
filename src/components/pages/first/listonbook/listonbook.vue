<template>
    <div id="listonbook">
      <div class="post">
        <post></post>
      </div>
      <div class="buttons">
        <buttons></buttons>
      </div>
      <div class="thelist1">
          <listone></listone>
      </div>
      <div class="thelist2">
          <listtwo></listtwo>
      </div>
      <div class="thelist3">
          <listthree></listthree>
      </div>
      <div class="thelist4">
          <listfour></listfour>
      </div>
      <div class="thelist5">
          <listfive></listfive>
      </div>
      <div class="thelist6">
          <listsix></listsix>
      </div>
      <div class="thelist7">
          <listseven></listseven>
      </div>
      <div class="thelist8">
          <listeight></listeight>
      </div>
      <div class="thelist9">
          <listnight></listnight>
      </div>
      <div class="thelist10">
          <listten></listten>
      </div>
      <div class="thelist11">
          <listeleven></listeleven>
      </div>
      <div class="thelist12">
          <listtl></listtl>
      </div>
      <div class="thelist13">
          <listth></listth>
      </div>
      <div class="bottom">
      </div>
    </div>
</template>
<script>
import post from '@/components/pages/first/listonbook/listbox/post.vue'
import buttons from '@/components/pages/first/listonbook/listbox/buttons.vue'
import listone from '@/components/pages/first/listonbook/listbox/listone'
import listtwo from '@/components/pages/first/listonbook/listbox/listtwo'
import listthree from '@/components/pages/first/listonbook/listbox/listthree'
import listfour from '@/components/pages/first/listonbook/listbox/listfour'
import listfive from '@/components/pages/first/listonbook/listbox/listfive'
import listsix from '@/components/pages/first/listonbook/listbox/listsix'
import listseven from '@/components/pages/first/listonbook/listbox/listseven'
import listeight from '@/components/pages/first/listonbook/listbox/listeight'
import listnight from '@/components/pages/first/listonbook/listbox/listnight'
import listten from '@/components/pages/first/listonbook/listbox/listten'
import listeleven from '@/components/pages/first/listonbook/listbox/listeleven'
import listtl from '@/components/pages/first/listonbook/listbox/listtl'
import listth from '@/components/pages/first/listonbook/listbox/listth'
export default {
  components: { post,
    buttons,
    listone,
    listtwo,
    listthree,
    listfour,
    listfive,
    listsix,
    listseven,
    listeight,
    listnight,
    listten,
    listeleven,
    listtl,
    listth},
  name: 'listonbook'
}
</script>
<style scoped>
#listonbook{
  width:100%;
  height: 100%;
}
.post{
  width: 100%;
  height: 4rem;
  margin-top: 1.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.buttons{
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: .2rem;
}
.thelist1{
  width: 100%;
  height: 4.5rem;
  margin-top: .3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.thelist2{
  width: 100%;
  height: 4.6rem;
  margin-top: .3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.thelist3{
  width: 100%;
  height: 4.6rem;
  margin-top: .3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.thelist4{
 width: 100%;
  height: 4.6rem;
  margin-top: .3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.thelist5{
  width: 100%;
  height: 4.6rem;
  margin-top: .3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.thelist6{
  width: 100%;
  height: 4.6rem;
  margin-top: .3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.thelist7{
  width: 100%;
  height: 4.6rem;
  margin-top: .3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.thelist8{
  width: 100%;
  height: 4.6rem;
  margin-top: .3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.thelist9{
  width: 100%;
  height: 4.6rem;
  margin-top: .3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.thelist10{
  width: 100%;
  height: 4.6rem;
  margin-top: .3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.thelist11{
  width: 100%;
  height: 4.6rem;
  margin-top: .3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.thelist12{
  width: 100%;
  height: 4.6rem;
  margin-top: .3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.thelist13{
  width: 100%;
  height: 4.6rem;
  margin-top: .3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bottom{
  width: 100%;
  height: 5rem;
}
</style>
