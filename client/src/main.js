import Vue from 'vue';
import App from './App';
import axios from 'axios';

// Vue Bootstrap
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueGoogleHeatmap from 'vue-google-heatmap';
import router from './router';

import moment from 'moment';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.use(VueGoogleHeatmap, {
  apiKey: 'AIzaSyBGOXlzYR6JmeSTLKkn0iXwoMugtl4OeJQ'
});

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.moment = moment;

import VueApexCharts from 'vue-apexcharts';
Vue.use(VueApexCharts);

Vue.component('apexchart', VueApexCharts);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
