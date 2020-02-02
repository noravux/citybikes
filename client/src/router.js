import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ChartPage from './components/pages/ChartPage.vue';
import HeatMap from './components/Heattia.vue';

const routes = [
  { path: '/heatmap', component: ChartPage },
  { path: '/', component: HeatMap }
];

const router = new VueRouter({
  routes
});

export default router;
