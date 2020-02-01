import Vue from 'vue';
import App from './App';
import axios from 'axios';
// Vue Bootstrap
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import moment from 'moment';

// Leaflet
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.moment = moment;

import VueApexCharts from 'vue-apexcharts';
Vue.use(VueApexCharts);

Vue.component('apexchart', VueApexCharts);

new Vue({
  render: h => h(App)
}).$mount('#app');
