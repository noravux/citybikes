<template>
  <div id="app">
    <NavBar />
    <b-container fluid="lg" mx-auto>
      <WeatherCard msg="Welcome to Your Vue.js App" />
      <Charttipaska />
    </b-container>

    <Heattia />
  </div>
</template>

<script>
import WeatherCard from './components/WeatherCard.vue';
import NavBar from './components/base/NavBar.vue';
import Charttipaska from './components/Charttipaska.vue';
import HeatMap from './components/HeatMap.vue';
import Heattia from './components/Heattia';

export default {
  name: 'app',
  components: {
    WeatherCard,
    NavBar,
    Charttipaska,
    HeatMap,
    Heattia
  }
};
</script>

<style></style>
