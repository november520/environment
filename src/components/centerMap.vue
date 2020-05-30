<template>
    <div>
        <div class="chart center-map" id="centerMap">
        </div>
    </div>
</template>

<script>
    import AMap  from 'AMap';
    export default {
        name: "centerMap",
        data(){
            return{
                heatData:[
                    {
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
        mounted(){
            this.loadMap();
        },
        methods:{
            loadMap(){
                let map = new AMap.Map('centerMap', {
                    center: [120.15, 30.28], // [纬度，经度]
                    resizeEnable: true,
                    zoom: 10
                });
                // AMap.plugin(['AMap.ToolBar', 'AMap.Scale'], function () {
                //     map.addControl(new AMap.ToolBar())
                //     map.addControl(new AMap.Scale())
                // })
                let heatmap;
                let heatmapData = this.heatData;
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
                // 点标记显示内容，HTML要素字符串
                var markerContent =`<div class="flex"><div class="map-btn">滨江公园空气站</div><div class='map-radius-btn'>217</div></div>`;
                var position = new AMap.LngLat(120.1581234, 30.211618981);
                var marker = new AMap.Marker({
                    position: position,
                    // 将 html 传给 content
                    content: markerContent,
                    // 以 icon 的 [center bottom] 为原点
                    offset: new AMap.Pixel(-13, -30)
                });

                // 将 markers 添加到地图
                map.add(marker);
            }
        }
    }
</script>

<style lang="less">
    .map-btn{
        display: inline-block;
        padding: 8px;
        height: 20px;
        background: #fff;
        min-width: 100px;
        font-size: 14px;
        border-radius:4px;
    }
    .map-radius-btn{
        display: inline-block;
        ont-size: 14px;
        padding: 10px 20px;
        border-radius:0 70% 70% 0;
        color: #fff;
        background: #58227B;
    }
    .center-map{
        position: relative;
        top: -60px;
        height: 724px;
    }
    .el-tabs--card>.el-tabs__header{
        border: none;
    }
    .el-tabs__item{
        background: #fff;
    }
</style>
