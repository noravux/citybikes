<template>
  <div class="row">
    <div class="col">
      <div class="row">
        <h2>Arvioidut pyörävuokraukset</h2>
      </div>
      <div class="row">
        <p>{{ 'MA - ' + hcRentals[0] + '__' }}</p>
        <p>{{ 'TI - ' + hcRentals[1] + '__' }}</p>
        <p>{{ 'KE - ' + hcRentals[2] + '__' }}</p>
        <p>{{ 'TO - ' + hcRentals[3] + '__' }}</p>
        <p>{{ 'PE - ' + hcRentals[4] + '__' }}</p>
        <p>{{ 'LA - ' + hcRentals[5] + '__' }}</p>
        <p>{{ 'SU - ' + hcRentals[6] + '__' }}</p>
      </div>
    </div>
    <b-card> </b-card>
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
      hcTemperatures: [27, 23, 19, 10, 23, 26, 7],
      hcRentals: [],
      calculatedTemps: [
        { temp: [0, 1, 2], use: 93 },
        { temp: [3, 4, 5], use: 460 },
        { temp: [6, 7, 8], use: 607 },
        { temp: [9, 10, 11], use: 1023 },
        { temp: [12, 13, 14], use: 536 },
        { temp: [15, 16, 17], use: 620 },
        { temp: [18, 19, 20], use: 766 },
        { temp: [21, 22, 23], use: 832 },
        { temp: [24, 25, 26], use: 878 },
        { temp: [27, 28, 29], use: 1047 }
      ]
    };
  },

  methods: {
    calculateRentals(temps, rentals, calc) {
      temps.forEach((el, i) => {
        calc.forEach((el, x) => {
          calc[x].temp.forEach((element, y) => {
            if (calc[x].temp[y] == temps[i]) {
              rentals[i] = calc[x].use;
              console.log(rentals[i]);
            }
          });
        });
      });
    }
  },
  created() {
    this.calculateRentals(
      this.hcTemperatures,
      this.hcRentals,
      this.calculatedTemps
    );
  }
};
</script>
