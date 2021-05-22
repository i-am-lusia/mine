<template>
  <div id="analysisSinger">
    <div id="singerRank"></div>
    <div id="songRank"></div>
    <div id="yonghu"></div>
  </div>
</template>
<script>
import * as echarts from 'echarts'
import 'echarts-wordcloud/dist/echarts-wordcloud.js'
export default {
  name: 'analysisSinger',
  data () {
    return {
      singerList:
        (this.$store.state.singerList &&
          this.$store.state.singerList.map((item) => item.name)) ||
        [],
      songList:
        (this.$store.state.singerList &&
          this.$store.state.singerList.map((item) => item.songName)) ||
        [],
      singerName: [],
      singerData: [],
      singerStartData: [],
      songStartData: [],
      songName: [],
      songData: [],
      score: [],
      total: 0
    }
  },
  methods: {
    /** 柱形图 */
    initSongCharts () {
      this.chart = echarts.init(document.getElementById('songRank'))
      var startIndex = Math.max(...this.singerData)
      var length = this.songList.length
      const option = {
        title: {
          text: '用户最常听歌曲排行榜',
          x: 'center'
        },
        tooltip: {
          formatter: '{b}历史播放量{c}首'
        },
        grid: {
          top: 30,
          left: 130
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
          max: this.songName.length,
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
          data: this.songName,
          animationDuration: 2,
          animationDurationUpdate: 1
        },
        series: [
          {
            realtimeSort: true,
            seriesLayoutBy: 'column',
            type: 'bar',
            data: this.songData,
            itemStyle: {
              color: function (param) {
                return (
                  'rgb(' +
                  [
                    Math.round(Math.random() * 236),
                    Math.round(Math.random() * 246),
                    Math.round(Math.random() * 216)
                  ].join(',') +
                  ')'
                )
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
          }
        ],
        animationDuration: 0,
        animationDurationUpdate: 0.5,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear',
        graphic: {
          elements: [
            {
              type: 'text',
              right: 150,
              bottom: 60,
              style: {
                font: 'bolder 80px monospace',
                fill: 'rgba(100, 100, 100, 0.25)'
              },
              z: 100
            }
          ]
        }
      }
      this.chart.setOption(option)
      for (var i = 0; i < startIndex; i++) {
        for (var j = 0; j < length; j++) {
          if (this.songStartData[j] < this.singerData[j]) {
            this.songStartData[j]++
            this.chart.setOption(option)
          }
        }
      }
    },
    /** 歌手排行榜 */
    initSingerCharts () {
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
          left: 130
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
        series: [
          {
            realtimeSort: true,
            seriesLayoutBy: 'column',
            type: 'bar',
            data: this.singerStartData,
            itemStyle: {
              color: function (param) {
                return (
                  'rgb(' +
                  [
                    Math.round(Math.random() * 236),
                    Math.round(Math.random() * 246),
                    Math.round(Math.random() * 216)
                  ].join(',') +
                  ')'
                )
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
          }
        ],
        animationDuration: 0,
        animationDurationUpdate: 0.5,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear',
        graphic: {
          elements: [
            {
              type: 'text',
              right: 150,
              bottom: 60,
              style: {
                font: 'bolder 80px monospace',
                fill: 'rgba(100, 100, 100, 0.25)'
              },
              z: 100
            }
          ]
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
      this.singerData = []
      this.singerName = []
      this.singerStartData = []
      this.songStartData = []
      this.songName.length = 0
      this.songData = []
      const singers = this.singerList.sort()
      const songs = this.songList.sort()
      const length = singers.length
      const len = songs.length
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
      for (var m = 0; m < len; m++) {
        var c = 0
        for (var n = m; n < length; n++) {
          if (songs[m] === songs[n]) {
            c++
          }
        }
        this.songName.push(songs[m])
        this.songData.push(c)
        this.songStartData.push(0)
        m += c
      }
      console.log(this.songName)
      this.singerData && this.initSingerCharts()
      this.songData && this.initSongCharts()
    },
    /** 用户活跃度 */
    initCharts () {
      this.chart = echarts.init(document.getElementById('yonghu'))
      const option = {
        title: {
          text: '用户系统功能使用雷达图',
          x: 'center',
          subtext: `用户活跃度：${this.total}`
        },
        legend: {
          data: ['预算分配（Allocated Budget）']
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: '用户个性化推荐(Recommand)', max: 1 },
            { name: '搜索（Search)', max: 1 },
            { name: '音乐盒子（Playbox）', max: 1 },
            { name: '音乐馆推荐（Musicstore Recommand）', max: 1 },
            { name: '个人中心(Personal Center)', max: 1 },
            { name: '歌手（Singer）', max: 1 },
            { name: '排行榜（Rank）', max: 1 }
          ]
        },
        series: [
          {
            name: '',
            type: 'radar',
            top: 0,
            data: [
              {
                value: this.score,
                name: ''
              }
            ],

            itemStyle: {
              color: '#c23501'
            }
          }
        ]
      }
      this.chart.setOption(option)
    },
    getData (data) {
      let recommand = data.recommand / data.total
      let own = data.own / data.total
      let Musicstore = data.musicStore / data.total
      let playbox = data.playbox / data.total
      let singger = data.singger / data.total
      let rankList = data.rankList / data.total
      let search = data.search / data.total
      this.score.length = 0
      this.score = [recommand, search, playbox, Musicstore, own, rankList, singger]
      this.total = recommand + search + playbox + Musicstore + own + rankList + singger
      this.total = parseFloat(this.total / 0.07).toFixed(2)
      this.score && this.initCharts()
    }
  },
  mounted () {
    this.singerList && this.getAnysis()
    this.getData(this.$store.state.router)
  },
  computed: {
    getSingerList () {
      return this.$store.state.singerList
    },
    getScore () {
      return this.$store.state.router
    }
  },
  watch: {
    getSingerList (newVal, oldVal) {
      this.singerList = newVal.map((item) => item.name)
      this.songList = newVal.map((item) => item.songName)
      this.getAnysis()
    },
    getScore (newVal, oldVal) {
      this.getData(newVal)
    }
  }
}
</script>
<style scoped>
#analysisSinger {
  width: 100%;
  height: 30rem;
}
#singerRank,
#songRank,
#yonghu {
  width: 100%;
  height: 10rem;
  margin-bottom: 0.5rem;
}
</style>
