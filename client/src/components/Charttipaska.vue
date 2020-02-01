<template>
  <div>
    <apexchart
      width="500"
      type="line"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      chartOptions: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      weatherData: undefined,
      tempData: [],
      series: []
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
      });

      this.series = [
        {
          name: 'series-1',
          data: this.tempData
        },
        {
          name: 'series-2',
          data: [5, 6, 7, 2, 6, 1, 5, 1, 23]
        }
      ];
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
