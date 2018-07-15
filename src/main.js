// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css'
import '../static/css/reset.css'
import '../node_modules/axios'
import echarts from 'echarts'
// import ElementUI from 'element-ui';
Vue.use(Mint);
Vue.prototype.$echarts = echarts
// Vue.use(ElementUI)
Vue.config.productionTip = false
console.log(8888)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
