<template>
  <div class="hello">
    <el-button type="primary">主要按钮</el-button>
    <div class="flex">
      <div class="flex-1">
        <div class="chart left-chart1" ref="leftChart1"></div>
        <div class="t-center">大气指标统计图</div>
        <div class="chart left-chart2" ref="leftChart2"></div>
        <div class="t-center">网格员绩效考核</div>
        <div class="chart left-chart3" ref="leftChart3"></div>
      </div>
      <div class="flex-1d5 marginlr-20">
        <div class="chart center-map" id="centerMap"></div>
        <div class="chart mtop-20 center-chart" ref="centerChart"></div>
      </div>
      <div class="flex-1">
        <div class="chart right-map"></div>
        <div class="chart right-chart mtop-20" ref="rightChart"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import AMap  from 'AMap';
export default {
  name: 'HelloWorld',
  data(){
    return{
      leftCharts1Options:{
        tooltip: {
          formatter: "{a} <br/>{c} {b}"
        },
        toolbox: {
          show: true,
          feature: {
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        series : [
          {
            name: 'PM2.5',
            type: 'gauge',
            z: 3,
            min: 0,
            max: 220,
            splitNumber: 11,
            radius: '50%',
            axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                width: 10
              }
            },
            axisTick: {            // 坐标轴小标记
              length: 15,        // 属性length控制线长
              lineStyle: {       // 属性lineStyle控制线条样式
                color: 'auto'
              }
            },
            splitLine: {           // 分隔线
              length: 20,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
              }
            },
            axisLabel: {
              backgroundColor: 'auto',
              borderRadius: 2,
              color: '#eee',
              padding: 3,
              textShadowBlur: 2,
              textShadowOffsetX: 1,
              textShadowOffsetY: 1,
              textShadowColor: '#222'
            },
            title: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder',
              fontSize: 20,
              fontStyle: 'italic'
            },
            detail: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              formatter: function (value) {
                value = (value + '').split('.');
                value.length < 2 && (value.push('00'));
                return ('00' + value[0]).slice(-2)
                        + '.' + (value[1] + '00').slice(0, 2);
              },
              fontWeight: 'bolder',
              borderRadius: 3,
              backgroundColor: '#444',
              borderColor: '#aaa',
              shadowBlur: 5,
              shadowColor: '#333',
              shadowOffsetX: 0,
              shadowOffsetY: 3,
              borderWidth: 2,
              textBorderColor: '#000',
              textBorderWidth: 2,
              textShadowBlur: 2,
              textShadowColor: '#fff',
              textShadowOffsetX: 0,
              textShadowOffsetY: 0,
              fontFamily: 'Arial',
              width: 100,
              color: '#eee',
              rich: {}
            },
            data: [{value: 40, name: 'PM2.5'}]
          },
          {
            name: 'PM10',
            type: 'gauge',
            center: ['20%', '55%'],    // 默认全局居中
            radius: '35%',
            min: 0,
            max: 7,
            endAngle: 45,
            splitNumber: 7,
            axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                width: 8
              }
            },
            axisTick: {            // 坐标轴小标记
              length: 12,        // 属性length控制线长
              lineStyle: {       // 属性lineStyle控制线条样式
                color: 'auto'
              }
            },
            splitLine: {           // 分隔线
              length: 20,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
              }
            },
            pointer: {
              width: 5
            },
            title: {
              offsetCenter: [0, '-30%'],       // x, y，单位px
            },
            detail: {
              // 其余属性默认使用全局文本样式，详见TEXTSTYLE
              fontWeight: 'bolder'
            },
            data: [{value: 1.5, name: 'PM10'}]
          },
          {
            name: 'PM10',
            type: 'gauge',
            center: ['77%', '50%'],    // 默认全局居中
            radius: '25%',
            min: 0,
            max: 2,
            startAngle: 135,
            endAngle: 45,
            splitNumber: 2,
            axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                width: 8
              }
            },
            axisTick: {            // 坐标轴小标记
              splitNumber: 5,
              length: 10,        // 属性length控制线长
              lineStyle: {        // 属性lineStyle控制线条样式
                color: 'auto'
              }
            },
            axisLabel: {
              formatter: function (v){
                switch (v + '') {
                  case '1' : return 'CLA';
                  case '2' : return 'SO2';
                }
              }
            },
            splitLine: {           // 分隔线
              length: 15,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
              }
            },
            pointer: {
              width: 2
            },
            title: {
              show: false
            },
            detail: {
              show: false
            },
            data: [{value: 0.5, name: 'gas'}]
          },
          {
            name: 'NOx',
            type: 'gauge',
            center: ['77%', '50%'],    // 默认全局居中
            radius: '25%',
            min: 0,
            max: 2,
            startAngle: 315,
            endAngle: 225,
            splitNumber: 2,
            axisLine: {            // 坐标轴线
              lineStyle: {       // 属性lineStyle控制线条样式
                width: 8
              }
            },
            axisTick: {            // 坐标轴小标记
              show: false
            },
            axisLabel: {
              formatter: function(v){
                switch (v + '') {
                  case '0' : return 'NO';
                  case '1' : return 'No2';
                  case '2' : return 'NO';
                }
              }
            },
            splitLine: {           // 分隔线
              length: 15,         // 属性length控制线长
              lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                color: 'auto'
              }
            },
            pointer: {
              width:2
            },
            title: {
              show: false
            },
            detail: {
              show: false
            },
            data: [{value: 0.5, name: 'NO2'}]
          }
        ]
      },
      leftCharts2Options:{
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['2015/10/01','2015/10/08', '2015/10/15', '2015/10/22', '2015/10/29', '2015/11/05', '2015/11/12']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'PM2.5',
            type: 'bar',
            stack: '1',
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'PM10',
            type: 'bar',
            stack: '1',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'SO2',
            type: 'bar',
            stack: '1',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'CO',
            type: 'bar',
            stack: '1',
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: 'NO2',
            type: 'bar',
            stack: '1',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
          },
          {
            name: 'O3',
            type: 'bar',
            stack: '1',
            data: [620, 732, 701, 734, 1090, 1130, 1120]
          },
        ]
      },
      leftCharts3Options:{
        xAxis: {
          type: 'category',
          data: ['2020-02-05', '2020-03-05', '2020-03-12', '2020-03-19', '2020-03-26', '2020-04-02', '2020-04-09']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      },
      centerChartsOptions:{
        dataset: {
          source: null
        },
        title: {
          text: 'Data Amount: '
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          }
        },
        toolbox: {
          feature: {
            dataZoom: {
              yAxisIndex: false
            },
          }
        },
        grid: [
          {
            left: '10%',
            right: '10%',
            bottom: 200
          },
          {
            left: '10%',
            right: '10%',
            height: 80,
            bottom: 80
          }
        ],
        xAxis: [
          {
            type: 'category',
            scale: true,
            boundaryGap: false,
            // inverse: true,
            axisLine: {onZero: false},
            splitLine: {show: false},
            splitNumber: 20,
            min: 'dataMin',
            max: 'dataMax'
          },
          {
            type: 'category',
            gridIndex: 1,
            scale: true,
            boundaryGap: false,
            axisLine: {onZero: false},
            axisTick: {show: false},
            splitLine: {show: false},
            axisLabel: {show: false},
            splitNumber: 20,
            min: 'dataMin',
            max: 'dataMax'
          }
        ],
        yAxis: [
          {
            scale: true,
            splitArea: {
              show: true
            }
          },
          {
            scale: true,
            gridIndex: 1,
            splitNumber: 2,
            axisLabel: {show: false},
            axisLine: {show: false},
            axisTick: {show: false},
            splitLine: {show: false}
          }
        ],
        dataZoom: [
          {
            type: 'inside',
            xAxisIndex: [0, 1],
            start: 10,
            end: 100
          },
          {
            show: true,
            xAxisIndex: [0, 1],
            type: 'slider',
            bottom: 10,
            start: 10,
            end: 100,
            handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '105%'
          }
        ],
        visualMap: {
          show: false,
          seriesIndex: 1,
          dimension: 6,
          pieces: [{
            value: 1,
            color: '#ec0000'
          }, {
            value: -1,
            color: '#00da3c'
          }]
        },
        series: [
          {
            type: 'candlestick',
            itemStyle: {
              color: '#ec0000',
              color0: '#00da3c',
              borderColor: '#8A0000',
              borderColor0: '#8A0000'
            },
            encode: {
              x: 0,
              y: [1, 4, 3, 2]
            }
          },
          {
            name: 'Volumn',
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            itemStyle: {
              color: '#7fbe9e'
            },
            large: true,
            encode: {
              x: 0,
              y: 5
            }
          }
        ]
      },
      rightChartsOptions:{
        title: {
          text: 'Beijing AQI'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          data: ['2000-06-05','2000-06-05','2000-06-05','2000-06-05','2000-06-05','2000-06-05','2000-06-05']
        },
        yAxis: {
          splitLine: {
            show: false
          }
        },
        toolbox: {
          left: 'center',
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
          }
        },
        dataZoom: [{
          startValue: '2014-06-01'
        }, {
          type: 'inside'
        }],
        visualMap: {
          top: 10,
          right: 10,
          pieces: [{
            gt: 0,
            lte: 50,
            color: '#096'
          }, {
            gt: 50,
            lte: 100,
            color: '#ffde33'
          }, {
            gt: 100,
            lte: 150,
            color: '#ff9933'
          }, {
            gt: 150,
            lte: 200,
            color: '#cc0033'
          }, {
            gt: 200,
            lte: 300,
            color: '#660099'
          }, {
            gt: 300,
            color: '#7e0023'
          }],
          outOfRange: {
            color: '#999'
          }
        },
        series: {
          name: 'Beijing AQI',
          type: 'line',
          data:[50,60,80,70,90,451,45,0,1,8,158,60],
          markLine: {
            silent: true,

          }
        }
      },
      centerMapHeatData:[{
        "lng": 120.15812,
        "lat": 30.281522341,
        "count": 10
      }, {
        "lng": 120.159344812,
        "lat": 30.28184891,
        "count": 11
      }, {
        "lng": 120.1594446912,
        "lat": 30.28191818,
        "count": 12
      }, {
        "lng": 120.156158112,
        "lat": 30.28181,
        "count": 13
      }, {
        "lng": 120.1511112,
        "lat": 30.28181,
        "count": 14
      }, {
        "lng": 120.15312444,
        "lat": 30.28177771,
        "count": 15
      }, {
        "lng": 120.15812,
        "lat": 30.28181,
        "count": 16
      }, {
        "lng": 120.156122244,
        "lat": 30.281498411,
        "count": 17
      }, {
        "lng": 120.157241,
        "lat": 30.28181,
        "count": 18
      }, {
        "lng": 120.1581563,
        "lat": 30.281789181,
        "count": 19
      }, {
        "lng": 120.1581234,
        "lat": 30.281618981,
        "count": 20
      }, {
        "lng": 120.2581234,
        "lat": 30.381618981,
        "count": 20
      }, {
        "lng": 120.2581234,
        "lat": 30.211618981,
        "count": 20
      }, {
        "lng": 120.1581234,
        "lat": 30.221618981,
        "count": 20
      }, {
        "lng": 120.1581234,
        "lat": 30.251618981,
        "count": 20
      }, {
        "lng": 120.1581234,
        "lat": 30.281618981,
        "count": 20
      }, {
        "lng": 120.1581234,
        "lat": 30.221658941,
        "count": 52
      }, {
        "lng": 120.1581234,
        "lat": 30.211618981,
        "count": 14
      }]
    }
  },
  props: {
    msg: String
  },
  components:{
  },
  mounted(){
    this.loadChart();
    this.GaodeMap();
  },
  methods:{
    loadChart(){
      const leftChart1 = this.$echarts.init(this.$refs.leftChart1);
      leftChart1.setOption(this.leftCharts1Options);
      const leftChart2 = this.$echarts.init(this.$refs.leftChart2);
      leftChart2.setOption(this.leftCharts2Options);
      const leftChart3 = this.$echarts.init(this.$refs.leftChart3);
      leftChart3.setOption(this.leftCharts3Options);
      const centerChart = this.$echarts.init(this.$refs.centerChart);
      this.centerChartsOptions.dataset.source = this.generateOHLC(2e5);
      centerChart.setOption(this.centerChartsOptions);
      const rightChart = this.$echarts.init(this.$refs.rightChart);
      let base = +new Date(1968, 9, 3);
      let oneDay = 24 * 3600 * 1000;
      let date = [];

      let data = [Math.random() * 300];

      for (let i = 1; i < 20000; i++) {
        let now = new Date(base += oneDay);
        date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
        data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
      }
      this.rightChartsOptions.xAxis.date = date;
      this.rightChartsOptions.series.data = data;
      rightChart.setOption(this.rightChartsOptions);
    },
    generateOHLC(count){
      let data = [];
      let xValue = +new Date(2011, 0, 1);
      let minute = 60 * 1000;
      let baseValue = Math.random() * 12000;
      let boxVals = new Array(4);
      let dayRange = 12;

      for (let i = 0; i < count; i++) {
        baseValue = baseValue + Math.random() * 20 - 10;

        for (let j = 0; j < 4; j++) {
          boxVals[j] = (Math.random() - 0.5) * dayRange + baseValue;
        }
        boxVals.sort();

        let openIdx = Math.round(Math.random() * 3);
        let closeIdx = Math.round(Math.random() * 2);
        if (closeIdx === openIdx) {
          closeIdx++;
        }
        let volumn = boxVals[3] * (1000 + Math.random() * 500);

        // ['open', 'close', 'lowest', 'highest', 'volumn']
        // [1, 4, 3, 2]
        data[i] = [
          this.$echarts.format.formatTime('yyyy-MM-dd hh:mm:ss', xValue += minute),
          +boxVals[openIdx].toFixed(2), // open
          +boxVals[3].toFixed(2), // highest
          +boxVals[0].toFixed(2), // lowest
          +boxVals[closeIdx].toFixed(2),  // close
          volumn.toFixed(0),
          getSign(data, i, +boxVals[openIdx], +boxVals[closeIdx], 4) // sign
        ];
      }

      return data;

      function getSign(data, dataIndex, openVal, closeVal, closeDimIdx) {
        let sign;
        if (openVal > closeVal) {
          sign = -1;
        }
        else if (openVal < closeVal) {
          sign = 1;
        }
        else {
          sign = dataIndex > 0
                  // If close === open, compare with close of last record
                  ? (data[dataIndex - 1][closeDimIdx] <= closeVal ? 1 : -1)
                  // No record of previous, set to be positive
                  : 1;
        }
        return sign;
      }
    },
    GaodeMap(){
      let map = new AMap.Map('centerMap', {
        center: [120.15, 30.28], // [纬度，经度]
        resizeEnable: true,
        zoom: 10
      });
      AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
        map.addControl(new AMap.ToolBar())
        map.addControl(new AMap.Scale())
      })
      let heatmap;
      let heatmapData = this.centerMapHeatData;
      map.plugin(["AMap.Heatmap"], function() {
        //初始化heatmap对象
        // eslint-disable-next-line no-undef
        heatmap = new AMap.Heatmap(map, {
          radius: 25, //给定半径
          opacity: [0, 0.8],
          gradient: {
            0.5: "blue",
            0.65: "rgb(117,211,248)",
            0.7: "rgb(0, 255, 0)",
            0.9: "#ffea00",
            1.0: "red"
          }
        });
        //设置数据集
        heatmap.setDataSet({
          data: heatmapData,
          max: 5
        });
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .t-center{
    text-align: center;
  }
  .chart{
    border: 1px solid #000;
  }
  .flex{
    display: flex;
    .flex-1{
      flex: 1;
    }
    .flex-1d5{
      flex: 1.5;
    }
  }
  .left-chart1{
    height: 600px;
    width: 100%;
  }
  .left-chart2{
    height: 300px;
  }
  .left-chart3{
    height: 200px;
  }
  .center-map{
    height: 924px;
  }
  .marginlr-20{
    margin: 0 20px;
  }
  .mtop-20{
    margin-top: 20px;
  }
  .center-chart{
    height: 200px;
  }
  .right-map{
    height: 800px;
  }
  .right-chart{
    height: 200px;
  }
</style>
