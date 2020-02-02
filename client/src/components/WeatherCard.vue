<template>
  <b-container>
    <div class="col">
      <div class="row">
        <b-card
          title="1.5.2020"
          img-top
          tag="article"
          style="max-width: 9rem;"
          class="mb-3 text-center"
        >
          <img src="../assets/sunny.svg" alt="" width="25%" />
          <b-card-text>
            <p>27C</p>
          </b-card-text>
        </b-card>
        <b-card
          title="2.5.2020"
          img-top
          tag="article"
          style="max-width: 9rem;"
          class="mb-3 text-center"
        >
          <img src="../assets/sunny.svg" alt="" width="25%" />
          <b-card-text>
            <p>23C</p>
          </b-card-text>
        </b-card>
        <b-card
          title="3.5.2020"
          img-top
          tag="article"
          style="max-width: 9rem;"
          class="mb-3 text-center"
        >
          <img src="../assets/overcast.svg" alt="" width="25%" />
          <b-card-text>
            <p>19C</p>
          </b-card-text>
        </b-card>
        <b-card
          title="4.5.2020"
          img-top
          tag="article"
          style="max-width: 9rem;"
          class="mb-3 text-center"
        >
          <img src="../assets/rainy.svg" alt="" width="25%" />
          <b-card-text>
            <p>10C</p>
          </b-card-text>
        </b-card>
        <b-card
          title="5.5.2020"
          img-top
          tag="article"
          style="max-width: 9rem;"
          class="mb-3 text-center"
        >
          <img src="../assets/overcast.svg" alt="" width="25%" />
          <b-card-text>
            <p>23C</p>
          </b-card-text>
        </b-card>
        <b-card
          title="6.5.2020"
          img-top
          tag="article"
          style="max-width: 9rem;"
          class="mb-3 text-center"
        >
          <img src="../assets/sunny.svg" alt="" width="25%" />
          <b-card-text>
            <p>27C</p>
          </b-card-text>
        </b-card>
        <b-card
          title="7.5.2020"
          img-top
          tag="article"
          style="max-width: 9rem;"
          class="mb-3 text-center"
        >
          <img src="../assets/rainy.svg" alt="" width="25%" />
          <b-card-text>
            <p>7C</p>
          </b-card-text>
        </b-card>
      </div>
      <!-- <div class="row">
        <p>{{ 'MA - ' + hcRentals[0] + '__' }}</p>
        <p>{{ 'TI - ' + hcRentals[1] + '__' }}</p>
        <p>{{ 'KE - ' + hcRentals[2] + '__' }}</p>
        <p>{{ 'TO - ' + hcRentals[3] + '__' }}</p>
        <p>{{ 'PE - ' + hcRentals[4] + '__' }}</p>
        <p>{{ 'LA - ' + hcRentals[5] + '__' }}</p>
        <p>{{ 'SU - ' + hcRentals[6] + '__' }}</p>
      </div>-->
    </div>
  </b-container>
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
        { temp: [9, 10, 11], use: 536 },
        { temp: [12, 13, 14], use: 620 },
        { temp: [15, 16, 17], use: 766 },
        { temp: [18, 19, 20], use: 832 },
        { temp: [21, 22, 23], use: 878 },
        { temp: [24, 25, 26], use: 1023 },
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
