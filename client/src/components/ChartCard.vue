<template>
  <div id="chart-card">
    <div class="small">
      <line-chart :chart-data="datacollection"></line-chart>
      <button @click="fillData()">Randomize</button>
    </div>
  </div>
</template>

<script>
import LineChart from "./LineChart.js";

export default {
  components: {
    LineChart
  },
  data() {
    return {
      datacollection: null
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    getWeather() {
      let table;
      let url =
        "https://api.openweathermap.org/data/2.5/forecast?id=650225&units=metric&appid=b448f0bf7189a64a46433a7b955951b3&cnt=13";

      this.$http.get(url).then(res => {
        table.push(res.data.list);
      });
      return table;
    },
    fillData() {
      data = this.getWeather()
      console.log(data)
      var lapel = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      this.datacollection = {
        labels: lapel,
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: data
          },
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: data
          }
        ]
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    }
  }
};
</script>

<style></style>
