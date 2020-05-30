<template>
    <div>
        <div class="chart" ref="chart"></div>
    </div>
</template>

<script>
    // import macarons from 'echarts/theme/macarons'
    export default {
        name: "leftChart1",
        data(){
            return{
                options:{
                    tooltip: {
                        formatter: "{a} <br/>{c} {b}"
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
    height: 500px;
}
</style>
