// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router/index.router';
import store from './store/index.store';
import Mint, { Toast, Indicator } from 'mint-ui';
import axios from 'axios';
import moment from 'moment';
import VueAwesomeSwiper from 'vue-awesome-swiper';

Vue.use(VueAwesomeSwiper);
Vue.config.productionTip = false;
Vue.use(Mint);
Vue.prototype.$http = axios;
moment.locale('zh-cn');
Vue.prototype.$moment = moment;
Vue.prototype.$Toast = Toast;
Vue.prototype.$Indicator = Indicator;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
import './assets/css/style.scss';
import './assets/css/transition.scss';
import 'swiper/dist/css/swiper.css';
import 'animate.css'
