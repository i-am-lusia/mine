<template>
  <div id="analysisLyric">
    <div id="lyricPie"></div>
    <div id="lyricTime"></div>
    <div id="lyricWord"></div>
  </div>
</template>
<script>
import sentiment from 'sentiment-zh_cn_web'
import * as echarts from 'echarts'
import 'echarts-wordcloud/dist/echarts-wordcloud.js'

export default {
  name: 'analysisLyric',
  data () {
    return {
      lyricList: this.$store.state.lyricList,
      wordData: [],
      pieData: [],
      timeData: []
    }
  },
  methods: {
    /** 初始化饼图 */
    initPieCharts () {
      this.chart = echarts.init(document.getElementById('lyricPie'))
      const option = {
        title: {
          text: '用户歌词喜好分析',
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
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
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
              shadowBlur: 5,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            data: this.pieData
          }
        ]
      }
      this.chart.setOption(option)
    },
    /** 初始化词云图 */
    initWordCharts () {
      this.chart = echarts.init(document.getElementById('lyricWord'))
      const option = {
        title: {
          text: '用户歌词关键字',
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
            data: this.wordData
          }
        ]
      }
      this.chart.setOption(option)
    },
    /** 初始化散点图 */
    initTimeCharts () {
      this.chart = echarts.init(document.getElementById('lyricTime'))
      const option = {
        title: {
          text: '用户在不同时间段下歌曲情感分析',
          x: 'center'
        },
        grid: {
          left: '8%',
          top: '10%'
        },
        xAxis: {
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          },
          data: [
            '00:00',
            '01:00',
            '02:00',
            '03:00',
            '04:00',
            '05:00',
            '06:00',
            '07:00',
            '08:00',
            '09:00',
            '10:00',
            '11:00',
            '12:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00',
            '17:00',
            '18:00',
            '19:00',
            '20:00',
            '21:00',
            '22:00',
            '23:00',
            '24:00'
          ]
        },
        yAxis: {
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          },
          scale: true
        },
        series: [
          {
            symbolSize: function (data) {
              return data[2] * 10
            },
            type: 'scatter',
            emphasis: {
              focus: 'series',
              label: {
                show: true,
                formatter: function (param) {
                  return param.data[3]
                },
                position: 'top'
              }
            },
            itemStyle: {
              shadowBlur: 2,
              shadowColor: 'rgba(25, 100, 150, 0.3)',
              shadowOffsetY: 2,
              color: 'rgb(129, 227, 238, 0.7)'
            },
            data: this.timeData
          }
        ]
      }
      this.chart.setOption(option)
    },
    /** 处理歌词数据 */
    getSentiment () {
      var negativeNum = 0
      var positiveNum = 0
      const timeData = []
      this.lyricList.map((item, index) => {
        var result = sentiment(item.word)
        var date = new Date(item.time)
        /** 饼图 */
        if (result.comparative > 0) positiveNum++
        else if (result.comparative < 0) negativeNum++
        /** 时序图 */
        var time = Number(date.getHours()) + Number(date.getMinutes()) / 100
        timeData.push([time, result.score])
        /** 词云图 */
        if (result.score !== 0) {
          result.words.map((item, key) => {
            this.wordData.push({
              name: item.toString(),
              value: index + key,
              textStyle: {
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                color:
                  'rgb(' +
                  [
                    Math.round(Math.random() * 236),
                    Math.round(Math.random() * 246),
                    Math.round(Math.random() * 216)
                  ].join(',') +
                  ')'
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
      })
      timeData.sort()
      console.log(timeData.length)
      for (var i = 0; i < timeData.length;) {
        var count = 0
        for (var j = i; j < timeData.length; j++) {
          if (timeData[i][0] === timeData[j][0] && timeData[i][1] === timeData[j][1]) {
            count++
          }
        }
        this.timeData.push([...timeData[i], count])
        i += count
      }
      this.pieData = [
        { name: 'negative', value: negativeNum / (negativeNum + positiveNum) },
        { name: 'positive', value: positiveNum / (positiveNum + negativeNum) }
      ]
      this.pieData && this.initPieCharts()
      this.wordData && this.initWordCharts()
      this.timeData && this.initTimeCharts()
    }
  },
  mounted () {
    this.lyricList && this.getSentiment()
  },
  computed: {
    getLyrics () {
      return this.$store.state.lyricList
    }
  },
  watch: {
    getLyrics (newVal, oldVal) {
      this.lyricList = newVal
    }
  }
}
</script>
<style scoped>
#analysisLyric {
  width: 10rem;
  height: 15rem;
  overflow: scroll;
}
#analysisLyric::-webkit-scrollbar {
  display: none;
}
#lyricPie {
  width: 100%;
  height: 6rem;
  margin-bottom: 0.5rem;
}
#lyricTime {
  width: 100%;
  height: 8rem;
}
#lyricWord {
  width: 100%;
  height: 4rem;
  margin-bottom: 0.5rem;
}
</style>
