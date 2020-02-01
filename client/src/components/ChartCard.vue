<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
    <button @click="fillData()">Randomize</button>
  </div>
</template>

<script>
import LineChart from './LineChart';

export default {
  components: {
    LineChart
  },
  data() {
    return {
      weatherData: undefined,
      tempData: [],
      datacollection: null
    };
  },

  methods: {
    getWeather() {
      //let tempData = [];
      let url =
        'https://api.openweathermap.org/data/2.5/forecast?id=650225&units=metric&appid=b448f0bf7189a64a46433a7b955951b3&cnt=13';

      this.$http.get(url).then(res => {
        this.setWeatherData(res.data.list);

        for (let i = 0; i < this.weatherData.length; i++) {
          console.log(this.weatherData[i].main.temp);
          this.tempData.push(this.weatherData[i].main.temp);
        }

        console.log('Tempdata: ' + this.tempData);
      });
    },
    setWeatherData(data) {
      this.weatherData = data;
    },
    fillData() {
      //this.getWeather();
      this.datacollection = {
        labels: [],
        datasets: [
          {
            label: 'Temperature',
            data: [1, 2, 3, 4, 5],
            fill: false
          }
        ]
      };
    }
  },
  created() {
    this.getWeather();
  }
};
</script>

<style></style>
