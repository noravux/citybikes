<template>
  <div id="app">
    <WeatherCard msg="Welcome to Your Vue.js App" />
    <ChartCard/>
  </div>
</template>

<script>
import WeatherCard from './components/WeatherCard.vue';
import ChartCard from './components/ChartCard.vue';

export default {
  name: 'app',
  components: {
    WeatherCard,
    ChartCard
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
