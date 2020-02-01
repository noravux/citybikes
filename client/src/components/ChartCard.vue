<template>
  <div id="chart-card">
    <div class="small">
      <line-chart :chart-data="datacollection" chart:update></line-chart>
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
  watch: {
    chartData() {
      this.$data._chart.update();
    }
  },
  data() {
    return {
      weatherData: undefined,
      tempData: []
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    getWeather() {
      //let tempData = [];
      let url =
        "https://api.openweathermap.org/data/2.5/forecast?id=650225&units=metric&appid=b448f0bf7189a64a46433a7b955951b3&cnt=13";

      this.$http.get(url).then(res => {
        this.setWeatherData(res.data.list);

        for (let i = 0; i < this.weatherData.length; i++) {
          console.log(this.weatherData[i].main.temp);
          this.tempData.push(this.weatherData[i].main.temp);
        }

        console.log("Tempdata: " + this.tempData);
      });
    },
    setWeatherData(data) {
      this.weatherData = data;
    },
    fillData() {
      data = this.getWeather();
      console.log(data);
      var lapel = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      this.datacollection = {
        labels: lapel,
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: this.tempData
          },
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: data
          }
        ]
      };
    }
  }
};
</script>

<style></style>
