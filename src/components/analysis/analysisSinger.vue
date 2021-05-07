<template>
  <div id="analysisSinger">
      <div id="singerRank"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts'
import 'echarts-wordcloud/dist/echarts-wordcloud.js'
export default {
  name: 'analysisSinger',
  data () {
    return {
      singerList: (this.$store.state.singerList && this.$store.state.singerList.map((item) => item.name)) || [],
      singerName: [],
      singerData: [],
      singerStartData: []
    }
  },
  methods: {
    /** 柱形图 */
    initBarCharts () {
      this.chart = echarts.init(document.getElementById('singerRank'))
      var startIndex = Math.max(...this.singerData)
      var length = this.singerName.length
      const option = {
        title: {
          text: '用户最常听歌手排行榜',
          x: 'center'
        },
        tooltip: {
          formatter: '{b}历史播放量{c}首'
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
          max: this.singerName.length,
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
          data: this.singerName,
          animationDuration: 2,
          animationDurationUpdate: 1
        },
        series: [{
          realtimeSort: true,
          seriesLayoutBy: 'column',
          type: 'bar',
          data: this.singerStartData,
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
          if (this.singerStartData[j] < this.singerData[j]) {
            this.singerStartData[j]++
            this.chart.setOption(option)
          }
        }
      }
    },
    /** 数据处理 */
    getAnysis () {
      const singers = this.singerList.sort()
      const length = singers.length
      for (var i = 0; i < length; i++) {
        var count = 0
        for (var j = i; j < length; j++) {
          if (singers[i] === singers[j]) {
            count++
          }
        }
        this.singerName.push(singers[i])
        this.singerData.push(count)
        this.singerStartData.push(0)
        i += count
      }
      this.singerData && this.initBarCharts()
    }
  },
  mounted () {
    this.singerList && this.getAnysis()
  },
  computed: {
    getSingerList () {
      return this.$store.state.singerList
    }
  },
  watch: {
    getSingerList (newVal, oldVal) {
      this.singerList = newVal.map((item) => item.name)
    }
  }
}
</script>
<style scoped>
#analysisSinger {
  width: 100%;
  height: 10rem;
}
#singerRank {
  width: 100%;
  height: 10rem;
  margin-bottom: 0.5rem;
}
</style>
