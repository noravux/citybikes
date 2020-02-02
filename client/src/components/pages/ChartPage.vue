<template>
  <b-container>
    <ChartComponent />
        <div class="text-center">
        <h2>Sää</h2>
    </div>
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
