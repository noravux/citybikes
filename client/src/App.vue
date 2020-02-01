<template>
  <div id="app">
    <NavBar />
    <b-container>
      <WeatherCard msg="Welcome to Your Vue.js App" />
      <ChartCard />
    </b-container>
  </div>
</template>

<script>
import WeatherCard from './components/WeatherCard.vue';
import ChartCard from './components/ChartCard.vue';
import NavBar from './components/base/NavBar.vue';

export default {
  name: 'app',
  components: {
    WeatherCard,
    ChartCard,
    NavBar
  }
};
</script>

<style></style>
