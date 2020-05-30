<template>
  <div class="hello">
    <div class="flex">
      <div class="flex-1">
        <div class="t-center margintb-20">空气质量指标预警</div>
        <leftChart1></leftChart1>
        <div class="t-center margintb-20">大气指标统计图</div>
        <leftChart2></leftChart2>
        <div class="t-center margintb-20">网格员绩效考核</div>
        <leftChart3></leftChart3>
      </div>
      <div class="flex-1d5 marginlr-20">
        <el-tabs class="tabs" v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="大气" name="1"></el-tab-pane>
          <el-tab-pane label="废气" name="2"></el-tab-pane>
          <el-tab-pane label="杨尘" name="3"></el-tab-pane>
        </el-tabs>
        <centerMap></centerMap>
        <div style="text-align: left;">
          <el-button v-for="(item,index) in buttons" :class="['color'+item]" :key="index" type="primary">{{item}}月</el-button>
        </div>
        <centerChart class="mtop-20"></centerChart>
      </div>
      <div class="flex-1">
        <rightMap></rightMap>
        <div class="margintb-20 t-center">2020-01-10 杭州污染报警  严重等级：二级</div>
        <rightChart></rightChart>
      </div>
    </div>
  </div>
</template>

<script>
  import AMap  from 'AMap';
  import leftChart1 from './leftChart1';
  import leftChart2 from './leftChart2';
  import leftChart3 from './leftChart3';
  import centerChart from './centerChart';
  import centerMap from './centerMap';
  import rightChart from './rightChart';
  import rightMap from './rightMap';
export default {
  name: 'HelloWorld',
  data(){
    return{
      activeName:"",
      buttons:[1,2,3,4,5,6,7,8,9]
    }
  },
  props: {
    msg: String
  },
  components:{
    leftChart1,
    leftChart2,
    leftChart3,
    centerChart,
    centerMap,
    rightMap,
    rightChart
  },
  mounted(){

  },
  methods:{
    handleClick(e){
      console.log(e);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .el-button+.el-button{
    margin-left: 2px;
  }
  .tabs{
    position: relative;
    top: 20px;
    z-index: 999;
  }
  .t-center{
    text-align: center;
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
  .left-chart2{
    height: 300px;
  }
  .left-chart3{
    height: 200px;
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
  .right-chart{
    height: 200px;
  }
  .margintb-20{
    margin: 20px 0;
  }
  .color1{
    background: #2ec7c9;
    border-color: #2ec7c9;
  }
  .color2{
    background: #b6a2de;
    border-color: #b6a2de;
  }
  .color3{
    background: #5ab1ef;
    border-color: #5ab1ef;
  }
  .color4{
      background: #ffb980;
      border-color: #ffb980;
   }
  .color5{
    background: #d87a80;
    border-color: #d87a80;
  }
  .color6{
    background: #8d98b3;
    border-color: #8d98b3;
  }
  .color7{
    background: #e5cf0d;
    border-color: #e5cf0d;
  }
  .color8{
    background: #97b552;
    border-color: #97b552;
  }
  .color9{
    background: #95706d;
    border-color: #95706d;
  }
  .color10{
    background: #dc69aa;
    border-color: #dc69aa;
  }
  .color11{
    background: #07a2a4;
    border-color: #07a2a4;
  }
  .color12{
    background: #9a7fd1;
    border-color: #9a7fd1;
  }
  .color13{
    background: #588dd5;
    border-color: #588dd5;
  }
  .color14{
    background: #f5994e;
    border-color: #f5994e;
  }
  .color15{
    background: #c05050;
    border-color: #c05050;
  }
  .color16{
    background: #59678c;
    border-color: #59678c;
  }
  .color17{
    background: #c9ab00;
    border-color: #c9ab00;
  }
  .color18{
    background: #7eb00a;
    border-color: #7eb00a;
  }
  .color19{
    background: #6f5553;
    border-color: #6f5553;
  }
  .color20{
    background: #c14089;
    border-color: #c14089;
  }
</style>
