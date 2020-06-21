import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueResource from 'vue-resource';
import router from './router'

import axios from 'axios'
import { post } from './request/http'

Vue.config.productionTip = false;

// 将axios添加到原型链上
Vue.prototype.$axios = axios;

// 定义全局变量
Vue.prototype.$post = post;

Vue.use(ElementUI);
Vue.use(VueResource);

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app');
