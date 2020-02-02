<template>
  <b-container>
    <ChartComponent />
    <WeatherCard />
  </b-container>
</template>

<script>
import ChartComponent from '../Charttipaska';
import WeatherCard from '../WeatherCard';
export default {
  name: 'ChartPage',
  components: {
    ChartComponent,
    WeatherCard
  }
};
</script>

<style></style>
