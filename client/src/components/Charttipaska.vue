<template>
  <div class="text-center">
    <h1>Sää ja lainausmäärä</h1>
    <apexchart
      width="100%"
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
          type: 'category',
          categories: []
        },
        yaxis: [
          {
            title: {
              text: 'Vuokramäärä'
            }
          },
          {
            opposite: true,
            title: {
              text: 'Lämpötila'
            }
          }
        ]
      },
      tempData: [],
      dateData: [],
      rentalData: [],
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

    getRentals() {
      //let tempData = [];
      let url = 'http://localhost:5000/api/data/rentals';
      this.$http.get(url).then(res => {
        res.data.data.forEach(element => {
          this.rentalData.push(element.Rental);
        });
      });
    },

    getTemps() {
      //let tempData = [];
      let url = 'http://localhost:5000/api/data/temperature';
      this.$http.get(url).then(res => {
        //console.log(res.data.data.length);

        res.data.data.forEach(element => {
          this.tempData.push(element.Temperature);
          //console.log(element.Temperature);
        });
        //console.log(this.dateData);

        this.series = [
          {
            name: 'Lämpötila',
            data: this.tempData
          },
          {
            name: 'Vuokramäärä',
            data: this.rentalData,
            type: 'area'
          }
        ];
        this.calculate();
      });
    },
    calculate() {
      let asd;
      this.rentalData.forEach((el, i) => {
        asd = (this.rentalData[i] + this.tempData[i]) / 2;

        //console.log(asd);
      });
    }
  },

  created() {
    this.getDates();
    this.getTemps();
    this.getRentals();
  }
};
</script>
