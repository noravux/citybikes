import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import ChartPage from './components/pages/ChartPage.vue';

const routes = [{ path: '/heatmap', component: ChartPage }];

const router = new VueRouter({
  routes
});

export default router;
