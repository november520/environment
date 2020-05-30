<template>
    <div>
        <div class="chart" ref="chart"></div>
    </div>
</template>

<script>
    export default {
        name: "leftChart2",
        data(){
            return{
                options:{
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend: {
                        data: ['PM2.5', 'PM10', 'SO2', 'CO', 'NO2', 'O3']
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
                            data: ['2015-10-01','2015-10-08', '2015-10-15', '2015-10-22', '2015-10-29', '2015-11-05', '2015-11-12']
                        }
                    ],
                    dataZoom: [{
                        startValue: '2015-10-01',

                    }, {
                        type: 'inside',
                        bottom:'-10%'
                    },

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
        height:300px;
    }
</style>
