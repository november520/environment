<template>
    <div >
        <div class="flex chart">
            <div class="flex-2" ref="chart"></div>
            <div class="flex-1 chart2" ref="chart2"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "centerChart",
        data(){
            return{
                options:{
                    title: {
                        text: '水质指标变化趋势'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        data: ['2015-10-01','2015-10-08', '2015-10-15', '2015-10-22', '2015-10-29', '2015-11-05', '2015-11-12','2015-10-13','2015-10-14', '2015-10-15', '2015-10-16', '2015-10-17', '2015-11-18', '2015-11-19','2015-10-20','2015-10-21', '2015-10-22', '2015-10-23', '2015-10-24', '2015-11-25', '2015-11-26']

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
                        name: '水质指标',
                        type: 'line',
                        data:  [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,
                            120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210
                        ],

                    }
                },
                options2:  {

                    grid: {

                    },
                    tooltip: {
                        padding: 10,
                        backgroundColor: '#222',
                        borderColor: '#777',
                        borderWidth: 1,
                    },
                    xAxis: {
                        name: '日期',
                        data:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
                    },
                    yAxis: {
                        type: 'value',
                        name: 'AQI指数',
                        nameLocation: 'end',
                        nameGap: 20,
                        nameTextStyle: {
                            fontSize: 16
                        },
                        axisLine: {
                            lineStyle: {

                            }
                        },
                        splitLine: {
                            show: false
                        }
                    },
                    visualMap: [
                        {
                            left: 'right',
                            top: '0%',
                            dimension: 2,
                            min: 0,
                            max: 250,
                            itemWidth: 30,
                            show:false,
                            itemHeight: 120,
                            calculable: true,
                            precision: 0.1,
                            text: ['圆形大小：PM2.5'],
                            textGap: 30,
                            textStyle: {

                            },
                            inRange: {
                                symbolSize: [10, 70]
                            },
                            outOfRange: {
                                symbolSize: [10, 70],
                                color: ['rgba(255,255,255,.2)']
                            },
                            controller: {
                                inRange: {
                                    color: ['#c23531']
                                },
                                outOfRange: {
                                    color: ['#444']
                                }
                            }
                        },
                        {
                            left: 'right',
                            bottom: '5%',
                            dimension: 6,
                            show:false,
                            min: 0,
                            max: 50,
                            itemHeight: 120,

                            precision: 0.1,
                            text: ['明暗：二氧化硫'],
                            textGap: 30,

                            inRange: {
                                colorLightness: [1, 0.5]
                            },
                            outOfRange: {
                                color: ['rgba(255,255,255,.2)']
                            },
                            controller: {
                                inRange: {
                                    color: ['#c23531']
                                },
                                outOfRange: {
                                    color: ['#444']
                                }
                            }
                        }
                    ],
                    series: [
                        {
                            name: 'aqi指数',
                            type: 'scatter',
                            itemStyle: null,
                            data: null
                        },
                    ]
                }
            }
        },
        mounted(){
            this.loadChart();
        },
        methods:{
            loadChart(){
                const chart = this.$echarts.init(this.$refs.chart,'macarons');
                chart.setOption(this.options);
                let  dataBJ = [
                    [1,55,9,56,0.46,18,6,"良"],
                    [2,25,11,21,0.65,34,9,"优"],
                    [3,56,7,63,0.3,14,5,"良"],
                    [4,33,7,29,0.33,16,6,"优"],
                    [5,42,24,44,0.76,40,16,"优"],
                    [6,82,58,90,1.77,68,33,"良"],
                    [7,74,49,77,1.46,48,27,"良"],
                    [8,78,55,80,1.29,59,29,"良"],
                    [9,267,216,280,4.8,108,64,"重度污染"],
                    [10,185,127,216,2.52,61,27,"中度污染"],
                    [11,39,19,38,0.57,31,15,"优"],
                    [12,41,11,40,0.43,21,7,"优"],
                    [13,64,38,74,1.04,46,22,"良"],
                    [14,108,79,120,1.7,75,41,"轻度污染"],
                    [15,108,63,116,1.48,44,26,"轻度污染"],
                    [16,33,6,29,0.34,13,5,"优"],
                    [17,94,66,110,1.54,62,31,"良"],
                    [18,186,142,192,3.88,93,79,"中度污染"],
                    [19,57,31,54,0.96,32,14,"良"],
                    [20,22,8,17,0.48,23,10,"优"],
                    [21,39,15,36,0.61,29,13,"优"],
                    [22,94,69,114,2.08,73,39,"良"],
                    [23,99,73,110,2.43,76,48,"良"],
                    [24,31,12,30,0.5,32,16,"优"],
                    [25,42,27,43,1,53,22,"优"],
                    [26,154,117,157,3.05,92,58,"中度污染"],
                    [27,234,185,230,4.09,123,69,"重度污染"],
                    [28,160,120,186,2.77,91,50,"中度污染"],
                    [29,134,96,165,2.76,83,41,"轻度污染"],
                    [30,52,24,60,1.03,50,21,"良"],
                    [31,46,5,49,0.28,10,6,"优"]
                ]

                let schema = [
                    {name: 'date', index: 0, text: '日'},
                ];
                let itemStyle = {
                    opacity: 0.8,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                };
                const chart2 = this.$echarts.init(this.$refs.chart2,'macarons');
                this.options2.series[0].itemStyle = itemStyle;
                this.options2.series[0].data = dataBJ;
                this.options2.tooltip.formatter =  function (obj) {
                    var value = obj.value;
                    return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'

                        + obj.seriesName + ' ' + value[0] + '日：'
                        + value[7]
                        + '</div>'
                }
                chart2.setOption(this.options2);
            },
        }
    }
</script>

<style lang="less" scoped>
    .chart{
        height: 300px;
    }
    .flex-1{
        flex: 1;
    }
    .flex-2{
        flex: 2;
    }
</style>
