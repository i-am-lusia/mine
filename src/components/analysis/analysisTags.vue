<template>
  <div id="analysisTags">
      <div id="tagsBar"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts'
import 'echarts-wordcloud/dist/echarts-wordcloud.js'

export default {
  name: 'analysisTags',
  data () {
    return {
      tagList: this.$store.state.tags || [],
      tagsName: [],
      tagsData: [],
      tagStartData: [],
      timeData: []
    }
  },
  methods: {
    /** 柱形图 */
    initBarCharts () {
      this.chart = echarts.init(document.getElementById('tagsBar'))
      var startIndex = Math.max(...this.tagsData)
      var length = this.tagsName.length
      const option = {
        title: {
          text: '用户最近播放歌曲类型分析',
          x: 'center'
        },
        grid: {
          top: 30,
          left: 50
        },
        xAxis: {
          max: 'dataMax',
          label: {
            formatter: function (n) {
              return Math.round(n)
            }
          }
        },
        yAxis: {
          type: 'category',
          inverse: true,
          max: this.tagsName.length,
          axisLabel: {
            show: true,
            textStyle: {
              fontSize: 14
            },
            rich: {
              flag: {
                fontSize: 25,
                padding: 5
              }
            }
          },
          data: this.tagsName,
          animationDuration: 2,
          animationDurationUpdate: 1
        },
        series: [{
          realtimeSort: true,
          seriesLayoutBy: 'column',
          type: 'bar',
          data: this.tagStartData,
          itemStyle: {
            color: function (param) {
              return 'rgb(' +
                  [
                    Math.round(Math.random() * 236),
                    Math.round(Math.random() * 246),
                    Math.round(Math.random() * 216)
                  ].join(',') +
                  ')'
            }
          },
          encode: {
            x: 0,
            y: 3
          },
          label: {
            show: true,
            precision: 1,
            position: 'right',
            valueAnimation: true,
            fontFamily: 'monospace'
          }
        }],
        animationDuration: 0,
        animationDurationUpdate: 0.5,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear',
        graphic: {
          elements: [{
            type: 'text',
            right: 160,
            bottom: 60,
            style: {
              font: 'bolder 80px monospace',
              fill: 'rgba(100, 100, 100, 0.25)'
            },
            z: 100
          }]
        }
      }
      this.chart.setOption(option)
      for (var i = 0; i < startIndex; i++) {
        for (var j = 0; j < length; j++) {
          if (this.tagStartData[j] < this.tagsData[j]) {
            this.tagStartData[j]++
            this.chart.setOption(option)
          }
        }
      }
    },
    /** 数据处理 */
    getAnysis () {
      const tags = this.tagList.reverse()
      const length = tags.length
      for (var i = 0; i < length; i++) {
        var count = 0
        for (var j = i; j < length; j++) {
          if (tags[i] === tags[j]) {
            count++
          }
        }
        this.tagsName.push(tags[i])
        this.tagsData.push(count)
        this.tagStartData.push(0)
        i += count
      }
      this.tagsData && this.initBarCharts()
    }
  },
  mounted () {
    this.tagList && this.getAnysis()
  },
  computed: {
    getTags () {
      return this.$store.state.tags
    }
  },
  watch: {
    getTags (newVal, oldVal) {
      this.tags = newVal
    }
  }
}
</script>
<style scoped>
#analysisTags {
  width: 100%;
  height: 8rem;
}
#analysisTags::-webkit-scrollbar {
  display: none;
}
#tagsBar {
  width: 100%;
  height: 7rem;
  margin-bottom: 0.5rem;
}
</style>
