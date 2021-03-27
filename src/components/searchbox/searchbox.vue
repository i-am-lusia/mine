<template>
    <div id="search">
        <div class="tosearch">
          <div class="el-icon-search"></div>
          <label :data-before="before" :data-after="after" :class="{animate: shouldAnimate}"  @animationend="animationEnded">
            <input  @focus="isFocusing=true" @blur="isFocusing=false" :placeholder="placeholder" @keydown="dosearch">
          </label>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'search',
  data: function () {
    return {
      keywords: [],
      isFocusing: false,
      currentIndex: 0,
      animationTriggerFlag: true
    }
  },
  computed: {
    before () {
      let keyword = this.keywords[this.currentIndex]
      return (this.isFocusing) ? '' : keyword
    },
    after () {
      let keyword = typeof this.keywords[this.currentIndex + 1] === 'undefined' ? this.keywords[0] : this.keywords[this.currentIndex + 1]
      return (this.isFocusing) ? '' : keyword
    },
    placeholder () {
      let keyword = this.keywords[this.currentIndex]
      return (!this.isFocusing) ? '' : keyword
    },
    shouldAnimate () {
      return !this.isFocusing && this.animationTriggerFlag
    }
  },
  mounted: function () {
    var that = this
    var hots = []
    axios({
      method: 'get',
      url: `http://localhost:3000/search/hot`,
      withCredentials: true
    }).then(function (res) {
      hots = res.data.result.hots
      for (var i in hots) {
        that.keywords.push(hots[i].first)
      }
      console.log(that.keywords)
    })
  },
  methods: {
    animationEnded (e) {
      if (e.pseudoElement === '::after') {
        this.animationTriggerFlag = false

        let newIndex = typeof this.keywords[this.currentIndex + 1] === 'undefined' ? 0 : this.currentIndex + 1
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
    }
  }
}
</script>
<style scoped>
#search{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.tosearch{
  width: 90%;
  height: 100%;
  font-family: Helvetica;
  background-color: gainsboro;
  border: none;
  border-radius: .5rem;
  opacity: .5;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: .5rem;
}
label{
  position: relative;
  display: block;
  overflow: hidden;
}
label::before{
  content: attr(data-before);
}
label::after{
  content: attr(data-after);
}
label::before,label::after{
  display: block;
  position: absolute ;
  width: 100%;
  height: 100%;
  font-family: inherit;
  box-sizing: border-box;
}
@keyframes placeholder-before {
  0% {
    transform: translateY(0%);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}

@keyframes placeholder-after {
  0% {
    transform: translateY(0%);
    opacity: 0;
  }
  100% {
    transform: translateY(-100%);
    opacity: 1;
  }
}

.animate::before {
  animation: .25s placeholder-before ease-in-out;
}

.animate::after {
  animation: .25s placeholder-after ease-in-out;
}

.animate::before, .animate::after {
  animation-fill-mode: forwards;
}
.el-icon-search{
  font-size: .7rem;
  opacity: .5;
  margin-left: 5%;
  margin-right: 2%;
}
input{
  width: 100%;
  height: 100%;
  background-color: transparent;
  outline: none;
  border: none;
  font-family: Arial, Helvetica, sans-serif;
  font-size: .5rem;
}
</style>
