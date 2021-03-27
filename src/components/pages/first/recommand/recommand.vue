<template>
    <div id="recommand">
        <div class="thehellobox">
          <hello></hello>
        </div>
        <div class="thelist1">
          <listone :songlistone="songlistone" :songlisttwo="songlisttwo" ></listone>
        </div>
        <div class="thelist2">
          <listtwo></listtwo>
        </div>
        <div class="thelist3">
          <listthree></listthree>
        </div>
        <div class="thelist4">
          <listfour :songlistfour="songlistfour"></listfour>
        </div>
        <div class="thelist5">
          <listfive :songlistfive="songlistfive"></listfive>
        </div>
        <div class="thelist6">
          <listsix></listsix>
        </div>
        <div class="thelist7">
          <listseven></listseven>
        </div>
        <div class="thelist8">
          <listeight :songlisteight="songlisteight"></listeight>
        </div>
        <div class="thelist9">
          <listnight :songlistnight="songlistnight"></listnight>
        </div>
        <div class="bottom">
        </div>
    </div>
</template>
<script>
import hello from '@/components/pages/first/recommand/listbox/hello'
import listone from '@/components/pages/first/recommand/listbox/listone'
import listtwo from '@/components/pages/first/recommand/listbox/listtwo'
import listthree from '@/components/pages/first/recommand/listbox/listthree'
import listfour from '@/components/pages/first/recommand/listbox/listfour'
import listfive from '@/components/pages/first/recommand/listbox/listfive'
import listsix from '@/components/pages/first/recommand/listbox/listsix'
import listseven from '@/components/pages/first/recommand/listbox/listseven'
import listeight from '@/components/pages/first/recommand/listbox/listeight'
import listnight from '@/components/pages/first/recommand/listbox/listnight'
import axios from 'axios'
export default {
  name: 'recommand',
  components: {
    hello,
    listone,
    listtwo,
    listthree,
    listfour,
    listfive,
    listsix,
    listseven,
    listeight,
    listnight
  },
  data () {
    return {
      songlists: [],
      songlistone: [],
      songlisttwo: [],
      songlistfour: [],
      songlistfive: [],
      songlisteight: [],
      songlistnight: []
    }
  },
  mounted: function () {
    var that = this
    var songlists = []
    axios({
      method: 'get',
      url: `http://localhost:3000/personalized?limit=60`,
      withCredentials: true
    }).then(function (res) {
      for (let i = 0; i < res.data.result.length;) {
        songlists.push(res.data.result.slice(i, i += 10))
      }
      that.songlistone = songlists[0]
      that.songlisttwo = songlists[1]
      that.songlistfour = songlists[2]
      that.songlistfive = songlists[3]
      that.songlisteight = songlists[4]
      that.songlistnight = songlists[5]
    //  console.log(that.songlistone)
    })
  }
}
</script>
<style>
#recommand{
  width: 100%;
  height: 100%;
}
.thehellobox{
  width: 100%;
  height: 4.5rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.thelist1{
  width: 100%;;
  height: 8.4rem;
  margin-top: .3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.thelist2{
  width: 100%;
  height: 6.1rem;
  margin-top: .3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.thelist3{
  width: 100%;
  height: 4.5rem;
  margin-top: .3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.thelist4{
  width: 100%;
  height: 4.5rem;
  margin-top: .3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.thelist5{
  width: 100%;
  height: 4.5rem;
  margin-top: .3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.thelist6{
  width: 100%;
  height: 5.8rem;
  margin-top: .3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.thelist7{
  width: 100%;
  height: 6.1rem;
  margin-top: .3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.thelist8{
  width:100%;
  height: 4.5rem;
  margin-top: .3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.thelist9{
  width: 100%;
  height: 4.7rem;
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
