<template>
  <div>
    <div v-bind:key="city.id" v-for="(city, index) in weatherData">
      <h1>{{ weatherData[index].main.temp }}</h1>
      <img src="" alt="" />
    </div>
  </div>
</template>

<script>
import WeatherValues from '../../../server/weathervalues';

export default {
  name: 'WeatherCard',
  props: {},

  data() {
    return {
      weatherData: undefined
    };
  },
  methods: {
    getWeather() {
      let url =
        'https://api.openweathermap.org/data/2.5/forecast?id=650225&units=metric&appid=b448f0bf7189a64a46433a7b955951b3&cnt=13';

      this.$http.get(url).then(res => {
        this.setWeatherData(res.data.list);
        console.log(this.weatherData);
      });
    },

    setWeatherData(data) {
      this.weatherData = data;
    }
  },
  created() {
    this.getWeather();
  }
};
</script>
