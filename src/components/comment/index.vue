<template>
  <div id="comment">
    <div id="commentsSentiment"></div>
    <div id="commentsTime"></div>
    <div id="commentsClound"></div>
    <ul style="padding-right: .2rem;padding-left: .2rem">
      <span style="color: black;font-weight: 600;font-size:.5rem;">热门评论</span>
      <li v-for="(item, index) in this.hotComments" :key="index">
        <span>{{index + 1 }}、{{item.content}}</span>
      </li>
    </ul>
    <div id="hotCommentsClound"></div>
    <div id="topCommentsClound"></div>
  </div>
</template>
<script>
import sentiment from 'sentiment-zh_cn_web'
import * as echarts from 'echarts'
import 'echarts-wordcloud/dist/echarts-wordcloud.js'

export default {
  name: 'comment',
  data () {
    return {
      isTop: false,
      isHot: false,
      isComments: false,
      currentData: this.$store.state.comments,
      comments: this.$store.state.comments && this.$store.state.comments.comments,
      hotComments: this.$store.state.comments && this.$store.state.comments.hotComments,
      topComments: this.$store.state.comments && this.$store.state.comments.topComments,
      commentsWordData: [],
      hotWordData: [],
      topWordData: [],
      commentsTimeData: [],
      commentsSentimentData: []
    }
  },
  methods: {
    initCommentsCloundsChart () {
      this.chart = echarts.init(document.getElementById('commentsClound'))
      const option = {
        title: {
          text: '评论关键字',
          x: 'center',
          y: 'bottom'
        },
        series: [
          {
            type: 'wordCloud',
            gridSize: 8,
            sizeRange: [12, 60],
            rotationRange: [-90, 90],
            rotationStep: 45,
            layoutAnimation: true,
            drawOutOfBound: false,
            left: 'center',
            top: null,
            width: '90%',
            height: '80%',
            right: null,
            bottom: null,
            data: this.commentsWordData
          }
        ]
      }
      this.chart.setOption(option)
    },
    initHotCommentsCloudsChart () {
      this.chart = echarts.init(document.getElementById('hotCommentsClound'))
      const option = {
        title: {
          text: '热门评论关键字',
          x: 'center',
          y: 'bottom'
        },
        series: [
          {
            type: 'wordCloud',
            gridSize: 8,
            sizeRange: [12, 60],
            rotationRange: [-75, 2, 55, 0],
            rotationStep: 45,
            layoutAnimation: true,
            drawOutOfBound: false,
            left: 'center',
            top: null,
            width: '90%',
            height: '80%',
            right: null,
            bottom: null,
            data: this.hotWordData
          }
        ]
      }
      this.chart.setOption(option)
    },
    inieTopCommentsCloundsChart () {
      this.chart = echarts.init(document.getElementById('topCommentsClound'))
      const option = {
        title: {
          text: '榜首评论关键字',
          x: 'center',
          y: 'top'
        },
        series: [
          {
            type: 'wordCloud',
            gridSize: 8,
            sizeRange: [12, 55],
            rotationRange: [-45, 0, 135, 90],
            rotationStep: 45,
            layoutAnimation: true,
            drawOutOfBound: false,
            left: 'center',
            top: null,
            width: '90%',
            height: '80%',
            right: null,
            bottom: null,
            data: this.topWordData
          }
        ]
      }
      this.chart.setOption(option)
    },
    initTimeSentimentChart () {
      this.chart = echarts.init(document.getElementById('commentsTime'))
      const option = {
        title: {
          text: '用户情绪随时间变化分析',
          x: 'center'
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'time',
          boundaryGap: false
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '1%']
        },
        dataZoom: [{
          type: 'inside',
          start: 0,
          end: 20
        }, {
          start: 0,
          end: 20
        }],
        series: [
          {
            name: '情绪得分',
            type: 'line',
            smooth: true,
            symbol: 'none',
            areaStyle: {},
            data: this.commentsTimeData
          }
        ],
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: 'red'
            }, {
              offset: 1, color: 'blue'
            }]
          }},
        left: 'center',
        top: null,
        right: null,
        bottom: null
      }
      this.chart.setOption(option)
    },
    initCommentsSentimentChart () {
      this.chart = echarts.init(document.getElementById('commentsSentiment'))
      const option = {
        title: {
          text: '情感分析饼图',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {d}%'
        },
        legend: {
          x: 'center',
          y: 'bottom',
          data: ['negative', 'positive']
        },
        toolbox: {
          show: true,
          feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        visualMap: {
          show: false,
          min: 0,
          max: 0.5,
          inRange: {
            colorLightness: [0, 0.5]
          }
        },
        series: [
          {
            name: '情感类型',
            type: 'pie',
            radius: [0, 80],
            roseType: 'radius',
            label: {
              show: true
            },
            emphasis: {
              label: {
                show: true
              }
            },
            itemStyle: {
              color: '#c23501',
              shadowBlur: 5,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            data: this.commentsSentimentData
          }
        ]
      }
      this.chart.setOption(option)
    },
    getSentiment () {
      var negativeNum = 0
      var positiveNum = 0
      this.comments = this.comments.map((item, index) => {
        var result = sentiment(item.content)
        var time = new Date(item.time)
        if (result.comparative > 0) positiveNum++
        else if (result.comparative < 0) negativeNum++
        /** 情绪随时间变化数据 */
        this.commentsTimeData.push([
          [time.getFullYear(), time.getMonth() + 1, time.getDate()].join('/'), result.score]
        )
        /** 获取热词 */
        if (result.score !== 0) {
          result.words.map((item, key) => {
            this.commentsWordData.push({
              name: item.toString(),
              value: index + key,
              textStyle: {
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                color: 'rgb(' + [
                  Math.round(Math.random() * 256),
                  Math.round(Math.random() * 256),
                  Math.round(Math.random() * 256)
                ].join(',') + ')'
              },
              emphasis: {
                focus: 'self',
                textStyle: {
                  shadowBlur: 10,
                  shadowColor: '#333'
                }
              }
            })
          })
        }
        return {
          ...item,
          sentiment: result
        }
      })
      this.commentsSentimentData = [
        {name: 'negative', value: negativeNum / (negativeNum + positiveNum)},
        {name: 'positive', value: positiveNum / (positiveNum + negativeNum)}
      ]
      this.hotComments = this.hotComments.map((item, index) => {
        var result = sentiment(item.content)
        if (result.score !== 0) {
          result.words.map((item, key) => {
            this.hotWordData.push({
              name: item.toString(),
              value: index + key,
              textStyle: {
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                color: 'rgb(' + [
                  Math.round(Math.random() * 250),
                  Math.round(Math.random() * 250),
                  Math.round(Math.random() * 250)
                ].join(',') + ')'
              },
              emphasis: {
                focus: 'self',
                textStyle: {
                  shadowBlur: 10,
                  shadowColor: '#333'
                }
              }
            })
          })
        }
        return {
          ...item,
          sentiment: result
        }
      })
      this.topComments = this.topComments.map((item, index) => {
        var result = sentiment(item.content)
        if (result.score !== 0) {
          result.words.map((item, key) => {
            this.topWordData.push({
              name: item.toString(),
              value: index + key,
              textStyle: {
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                color: 'rgb(' + [
                  Math.round(Math.random() * 236),
                  Math.round(Math.random() * 246),
                  Math.round(Math.random() * 216)
                ].join(',') + ')'
              },
              emphasis: {
                focus: 'self',
                textStyle: {
                  shadowBlur: 10,
                  shadowColor: '#333'
                }
              }
            })
          })
        }
        return {
          ...item,
          sentiment: result
        }
      })
      this.commentsWordData.length && this.initCommentsCloundsChart()
      this.hotWordData.length && this.initHotCommentsCloudsChart()
      this.topWordData.length && this.inieTopCommentsCloundsChart()
      this.commentsTimeData && this.initTimeSentimentChart()
      this.commentsSentimentData && this.initCommentsSentimentChart()
    }
  },
  mounted () {
    this.currentData && this.getSentiment()
  },
  computed: {
    getCommentsData () {
      return this.$store.state.comments
    }
  },
  watch: {
    getCommentsData (newVal, oldVal) {
      this.currentData = newVal
    },
    commentsWordData (newVal, oldVal) {
      if (newVal.length) this.isComments = true
      else this.isComments = false
    }
  }
}
</script>
<style scoped>
#comment {
  width: 10rem;
  height: 15rem;
  overflow: scroll;
}
#comment::-webkit-scrollbar{
  display: none;
}
#commentsClound,
#hotCommentsClound,
#topCommentsClound {
  width: 100%;
  height: 4rem;
  margin-bottom: 0.5rem;
}
#commentsTime {
  width: 100%;
  height: 8rem;
  margin-bottom: 0.5rem;
}
#commentsSentiment {
  width: 100%;
  height: 6rem;
  margin-bottom: 0.5rem;
}
</style>
