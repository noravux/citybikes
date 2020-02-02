<template>
  <b-container fluid class="text-center">
    <h1>Kesä 2019</h1>
    <vue-google-heatmap
      :lat="62.88598833"
      :lng="27.66641"
      :points="points"
      :height="500"
    />
  </b-container>
</template>

<script>
import json from '../assets/coordinates.json';
export default {
  data() {
    return {
      points: json
    };
  }
};
</script>
