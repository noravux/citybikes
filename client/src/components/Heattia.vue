<template>
  <vue-google-heatmap
    :lat="62.88598833"
    :lng="27.66641"
    :points="points"
    :width="500"
    :height="350"
  />
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
