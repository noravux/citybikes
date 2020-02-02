import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Heattia from "./components/Heattia.vue";

const routes = [
  { path: "/heatmap", component: Heattia},

];

const router = new VueRouter({
  routes
});

export default router;