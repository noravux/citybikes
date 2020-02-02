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
      hcRentals: [],
      temp0_3 : 93,
      temp3_6 :460,
      temp6_9 : 607,
      temp9_12 : 536,
      temp12_15 : 620,
      temp15_18 : 766,
      temp18_21 : 832,
      temp21_24 : 878,
      temp24_27 : 1023,
      temp27_30 : 1047

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
