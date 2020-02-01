<template>
  <div id="app">
    <NavBar />
    <b-container fluid="lg" mx-auto>
      <WeatherCard msg="Welcome to Your Vue.js App" />
      <Charttipaska />
    </b-container>
  </div>
</template>

<script>
import WeatherCard from './components/WeatherCard.vue';
import NavBar from './components/base/NavBar.vue';
import Charttipaska from './components/Charttipaska.vue';

export default {
  name: 'app',
  components: {
    WeatherCard,
    NavBar,
    Charttipaska
  }
};
</script>

<style></style>
