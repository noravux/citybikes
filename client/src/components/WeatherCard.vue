<template>
  <div class="row">
    <b-card v-bind:key="city.id" v-for="(city, index) in weatherData">
      <b-card-text>
        <h3>{{ moment(weatherData[index].dt_txt).format('HH:mm') }}</h3>
        <h4>{{ weatherData[index].main.temp }}&#176;C</h4>
      </b-card-text>
      <img
        v-bind:src="
          'http://openweathermap.org/img/w/' +
            weatherData[index].weather[0].icon +
            '.png'
        "
      />
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'WeatherCard',
  props: {},

  data() {
    return {
      weatherData: undefined,
      tempData: []
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
    }
  },
  created() {
    this.getWeather();
  }
};
</script>
