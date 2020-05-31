<template>
    <div>
        <div class="chart">
            <div class="" ref="chart"></div>
            <div class="" ref="chart2"></div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "rightChart",
        data(){
            return{
                options: {
                    title: {
                        text: '',
                        left: 'center',
                        align: 'right'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            animation: false,
                            label: {
                                backgroundColor: '#505765'
                            }
                        }
                    },
                    legend: {
                        data: ['NO2', 'SO3'],
                        left: 10
                    },
                    grid: {
                        left: '40',
                        right: 10,
                        top: '30',
                        bottom: '30'
                    },
                    xAxis:
                        {
                            type: 'category',
                            boundaryGap: false,
                            axisLine: {onZero: false},
                            data: ["2020-03-24","2020-03-30","2020-03-31","2020-04-01","2020-04-02","2020-04-13","2020-04-14","2020-04-16","2020-04-30","2020-05-06","2020-05-07","2020-05-11","2020-05-12","2020-05-13","2020-05-14","2020-05-15","2020-05-18","2020-05-19","2020-05-20","2020-05-21","2020-05-22","2020-05-25","2020-05-26","2020-05-27","2020-05-28","2020-05-29"]
                        }
                    ,
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: 'NO2',
                            type: 'line',
                            animation: false,
                            data:[4,5,1,5,12,4,12,14,22,4,14,12,18,31,43,10,51,30,10,20,21,65,1,33,54,56]
                        },
                        {
                            name: 'SO3',
                            type: 'line',
                            animation: false,
                            areaStyle: {},
                            data:[2,31,15,22,7,18,24,12,14,24,2,28,11,13,24,21,23,14,24,21,65,1,33,54,56]
                        }
                    ]
                },
                options2: {
                    title: {
                        text: '',
                        left: 'center',
                        align: 'right'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            animation: false,
                            label: {
                                backgroundColor: '#505765'
                            }
                        }
                    },
                    legend: {
                        data: ['K', 'SO2','BC'],
                        left: 10
                    },
                    grid: {
                        left: '40',
                        right: 10,
                        top: '30',
                        bottom: '30'
                    },
                    xAxis:
                        {
                            data: ["2020-03-24","2020-03-30","2020-03-31","2020-04-01","2020-04-02","2020-04-13","2020-04-14","2020-04-16","2020-04-30","2020-05-06","2020-05-07","2020-05-11","2020-05-12","2020-05-13","2020-05-14","2020-05-15","2020-05-18","2020-05-19","2020-05-20","2020-05-21","2020-05-22","2020-05-25","2020-05-26","2020-05-27","2020-05-28","2020-05-29"]
                        }
                    ,
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: 'K',
                            type: 'line',
                            // animation: false,
                            data:[4,5,1,5,12,4,12,14,22,4,14,12,18,31,43,10,51,30,10,20,21,65,1,33,54,56]
                        },
                        {
                            name: 'SO2',
                            type: 'line',
                            // animation: false,
                            data:[34,38,11,18,16,34,29,12,21,40,8,23,31,38,26,37,38,31,38,25,43,13,6,21,33,40]
                        },
                        {
                            name: 'BC',
                            type: 'line',
                            // animation: false,
                            areaStyle: {},
                            data:[2,31,15,22,7,18,24,12,14,24,2,28,11,13,24,21,23,14,24,21,65,1,33,54,56]
                        }
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
                const chart2 = this.$echarts.init(this.$refs.chart2,'macarons');
                chart2.setOption(this.options2);
            },
        }
    }
</script>

<style lang="less" scoped>
    .chart  div{
        margin-top: 10px;
        height: 144px;
    }
</style>
