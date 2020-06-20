import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueResource from 'vue-resource';
import router from './router'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueResource);

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
