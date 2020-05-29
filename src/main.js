import Vue from 'vue'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import App from './App.vue'
Vue.config.productionTip = false
Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.prototype.$echarts = echarts;
new Vue({
  render: h => h(App),
}).$mount('#app')
