<template>
  <div class="row">
    <h1>{{}}</h1>
  </div>
</template>

<script>
export default {
  name: 'WeatherCard',
  props: {},

  data() {
    return {
      weatherData: undefined,
      tempData: [],
      hcTemperatures: [29,15,9,17,34],
      hcRentals: []
    };
  },

  methods: {
    calculateRentals(temps, rentals) {
      temps.forEach((el,i) => {
        rentals = el * 2
        console.log(rentals)
      });
    }
  },
  created() {
    this.calculateRentals(this.hcTemperatures, this.hcRentals);
    console.log("created")
  }
};
</script>
