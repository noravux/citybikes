<template>
  <div class="text-center">
    <h1>Sää ja lainausmäärä</h1>
    <apexchart width="100%" type="line" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
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
      ],
      chartOptions: {
        chart: {
          id: "vuechart-example"
        },
        xaxis: {
          type: "category",
          categories: [
            "2019-05-01",
            "2019-05-02",
            "2019-05-03",
            "2019-05-04",
            "2019-05-05",
            "2019-05-06",
            "2019-05-07",
            "2019-05-08",
            "2019-05-09",
            "2019-05-10",
            "2019-05-11",
            "2019-05-12",
            "2019-05-13",
            "2019-05-14",
            "2019-05-15",
            "2019-05-16",
            "2019-05-17",
            "2019-05-18",
            "2019-05-19",
            "2019-05-20",
            "2019-05-21",
            "2019-05-22",
            "2019-05-23",
            "2019-05-24",
            "2019-05-25",
            "2019-05-26",
            "2019-05-27",
            "2019-05-28",
            "2019-05-29",
            "2019-05-30",
            "2019-05-31",
            "2019-06-01",
            "2019-06-02",
            "2019-06-03",
            "2019-06-04",
            "2019-06-05",
            "2019-06-06",
            "2019-06-07",
            "2019-06-08",
            "2019-06-09",
            "2019-06-10",
            "2019-06-11",
            "2019-06-12",
            "2019-06-13",
            "2019-06-14",
            "2019-06-15",
            "2019-06-16",
            "2019-06-17",
            "2019-06-18",
            "2019-06-19",
            "2019-06-20",
            "2019-06-21",
            "2019-06-22",
            "2019-06-23",
            "2019-06-24",
            "2019-06-25",
            "2019-06-26",
            "2019-06-27",
            "2019-06-28",
            "2019-06-29",
            "2019-06-30",
            "2019-07-01",
            "2019-07-02",
            "2019-07-03",
            "2019-07-04",
            "2019-07-05",
            "2019-07-06",
            "2019-07-07",
            "2019-07-08",
            "2019-07-09",
            "2019-07-10",
            "2019-07-11",
            "2019-07-12",
            "2019-07-13",
            "2019-07-14",
            "2019-07-15",
            "2019-07-16",
            "2019-07-17",
            "2019-07-18",
            "2019-07-19",
            "2019-07-20",
            "2019-07-21",
            "2019-07-22",
            "2019-07-23",
            "2019-07-24",
            "2019-07-25",
            "2019-07-26",
            "2019-07-27",
            "2019-07-28",
            "2019-07-29",
            "2019-07-30",
            "2019-07-31",
            "2019-08-01",
            "2019-08-02",
            "2019-08-03",
            "2019-08-04",
            "2019-08-05",
            "2019-08-06",
            "2019-08-07",
            "2019-08-08",
            "2019-08-09",
            "2019-08-10",
            "2019-08-11",
            "2019-08-12",
            "2019-08-13",
            "2019-08-14",
            "2019-08-15",
            "2019-08-16",
            "2019-08-17",
            "2019-08-18",
            "2019-08-19",
            "2019-08-20",
            "2019-08-21",
            "2019-08-22",
            "2019-08-23",
            "2019-08-24",
            "2019-08-25",
            "2019-08-26",
            "2019-08-27",
            "2019-08-28",
            "2019-08-29",
            "2019-08-30",
            "2019-08-31",
            "2019-09-01",
            "2019-09-02",
            "2019-09-03",
            "2019-09-04",
            "2019-09-05",
            "2019-09-06",
            "2019-09-07",
            "2019-09-08",
            "2019-09-09",
            "2019-09-10",
            "2019-09-11",
            "2019-09-12",
            "2019-09-13",
            "2019-09-14",
            "2019-09-15",
            "2019-09-16",
            "2019-09-17",
            "2019-09-18",
            "2019-09-19",
            "2019-09-20",
            "2019-09-21",
            "2019-09-22",
            "2019-09-23",
            "2019-09-24",
            "2019-09-25",
            "2019-09-26",
            "2019-09-27",
            "2019-09-28",
            "2019-09-29",
            "2019-09-30"
          ]
        },
        yaxis: [
          {
            title: {
              text: "Vuokramäärä"
            }
          },
          {
            opposite: true,
            title: {
              text: "Lämpötila"
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
      let url = "http://localhost:5000/api/data/dates";
      this.$http.get(url).then(res => {
        res.data.data.forEach(element => {
          this.dateData.push(element.Date);
        });
        console.log(this.dateData);
      });
    },

    getRentals() {
      //let tempData = [];
      let url = "http://localhost:5000/api/data/rentals";
      this.$http.get(url).then(res => {
        res.data.data.forEach(element => {
          this.rentalData.push(element.Rental);
        });
      });
    },

    getTemps() {
      //let tempData = [];
      let url = "http://localhost:5000/api/data/temperature";
      this.$http.get(url).then(res => {
        //console.log(res.data.data.length);

        res.data.data.forEach(element => {
          this.tempData.push(element.Temperature);
          //console.log(element.Temperature);
        });
        //console.log(this.dateData);

        this.series = [
          {
            name: "Lämpötila",
            data: this.tempData
          },
          {
            name: "Vuokramäärä",
            data: this.rentalData,
            type: "area"
          },
                    {
            name: "Arvio vuokramäärästä",
            data: this.hcRentals
          },
                              {
            name: "Sääennustus",
            data: this.hcTemperatures,
            type: "area"
          }
        ];
      });
    },
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
    this.getDates();
    this.getTemps();
    this.getRentals();
    this.calculateRentals(
      this.hcTemperatures,
      this.hcRentals,
      this.calculatedTemps
    );
  }
};
</script>
