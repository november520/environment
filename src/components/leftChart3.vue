<template>
    <div>
        <div class="chart" ref="chart"></div>
    </div>
</template>

<script>
    export default {
        name: "leftChart3",
        data(){
            return{
                options: {
                    title: {
                        text: ''
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ['AQI', '绩效']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                    },
                    dataZoom: [{
                        startValue: '2014-05-01'
                    }, {
                        type: 'inside'
                    }],
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data:['2014-05-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01',
                            '2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01',
                            '2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01','2014-06-01',
                            '2014-06-01','2014-06-01',
                        ]
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name: 'AQI',
                            type: 'line',
                            stack: '总量',
                            data: [120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,
                                120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90, 230, 210
                            ]
                        },
                        {
                            name: '绩效',
                            type: 'line',
                            stack: '总量',
                            data: [220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,
                                220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,
                                220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,
                                220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310,220, 182, 191, 234, 290, 330, 310
                            ]
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
            }
        }
    }
</script>

<style lang="less" scoped>
    .chart{
        height: 195px;
    }
</style>
