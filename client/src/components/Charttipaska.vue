<template>
  <apexchart
    width="100%"
    type="line"
    :options="chartOptions"
    :series="series"
  ></apexchart>
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
          type: 'category',
          categories: []
        }
      },
      tempData: [],
      dateData: [],
      series: []
    };
  },

  methods: {
    getDates() {
      //let tempData = [];
      let url = 'http://localhost:5000/api/data/dates';
      this.$http.get(url).then(res => {
        res.data.data.forEach(element => {
          this.dateData.push(element.Date);
        });
      });
    },
    getTemps() {
      //let tempData = [];
      let url = 'http://localhost:5000/api/data/temperature';
      this.$http.get(url).then(res => {
        console.log(res.data.data.length);

        res.data.data.forEach(element => {
          this.tempData.push(element.Temperature);
          console.log(element.Temperature);
        });
        console.log(this.dateData);

        this.series = [
          {
            name: 'Lämpötila',
            data: this.tempData
          }
        ];
      });
    }
  },

  created() {
    this.getDates();
    this.getTemps();
  }
};
</script>
