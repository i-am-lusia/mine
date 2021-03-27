<template>
  <div id="search" :class="{ issearch: isFocusing, isnotsearch: !isFocusing }">
    <div :class="{ tosearch: !isFocusing, istosearch: isFocusing }">
      <div class="el-icon-search"></div>
      <label
        :data-before="before"
        :data-after="after"
        :class="{ animate: shouldAnimate }"
        @animationend="animationEnded"
      >
        <input
          @focus="isFocusing = true"
          :placeholder="placeholder"
          @keydown="dosearch"
        />
      </label>
    </div>
    <span @click="isFocusing = false" class="tocancel" v-if="isFocusing"
      >取消</span
    >
    <!-- 搜索历史 -->
    <div class="searchHistory" v-if="isFocusing">
      <span class="historyTitle">搜索历史</span>
      <tags style="margin-left: 1rem" :list="history"></tags>
    </div>
    <!-- 热门搜索 -->
    <div class="hotSearch" v-if="isFocusing">
      <span class="historyTitle">热门搜索</span>
      <div id="doubleRank">
        <ul>
          <li v-for="(item, index) in hotList" :key="index">
            <div>
              <span class="index">{{ index + 1 }}</span>
              <div style="width: 3.5rem">
                <div class="searchWord">{{ item.searchWord }}</div>
                <div class="name">{{ item.content }}</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import tags from '../tags/index.vue'
export default {
  name: 'search',
  components: {
    tags
  },
  data: function () {
    return {
      keywords: [],
      isFocusing: true,
      currentIndex: 0,
      animationTriggerFlag: true,
      history: [],
      hotList: []
    }
  },
  computed: {
    before () {
      let keyword = this.keywords[this.currentIndex]
      return this.isFocusing ? '' : keyword
    },
    after () {
      let keyword =
        typeof this.keywords[this.currentIndex + 1] === 'undefined'
          ? this.keywords[0]
          : this.keywords[this.currentIndex + 1]
      return this.isFocusing ? '' : keyword
    },
    placeholder () {
      let keyword = this.keywords[this.currentIndex]
      return !this.isFocusing ? '' : keyword
    },
    shouldAnimate () {
      return !this.isFocusing && this.animationTriggerFlag
    }
  },
  mounted () {
    this.getHot()
    this.getHistory()
    this.getHotDetail()
  },
  methods: {
    animationEnded (e) {
      if (e.pseudoElement === '::after') {
        this.animationTriggerFlag = false

        let newIndex =
          typeof this.keywords[this.currentIndex + 1] === 'undefined'
            ? 0
            : this.currentIndex + 1
        this.currentIndex = newIndex

        setTimeout(() => {
          this.animationTriggerFlag = true
        }, 3000)
      }
    },
    dosearch (e) {
      if (e.keyCode === 13) {
        console.log(this.keywords[this.currentIndex])
      }
    },
    async getHistory () {
      const res = await axios({
        method: 'get',
        url: `http://localhost:3000/search/default`,
        withCredentials: true
      })
      this.history.push(res.data.data)
    },
    async getHot () {
      var that = this
      var hots = []
      const res = await axios({
        method: 'get',
        url: `http://localhost:3000/search/hot`,
        withCredentials: true
      })
      hots = res.data.result.hots
      for (var i in hots) {
        that.keywords.push(hots[i].first)
      }
    },
    async  getHotDetail () {
      const res = await axios({
        method: 'get',
        url: `http://localhost:3000/search/hot/detail`,
        withCredentials: true
      })
      for (var i in res.data.data) {
        this.hotList.push(res.data.data[i])
      }
    }
  }
}
</script>
<style scoped>
@import "./index.css";
</style>
