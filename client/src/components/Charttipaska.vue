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
      hcTemperatures: [10,11,11,11,11,11,12,12,12,12,12,12,12,13,13,13,13,14,14,14,14,14,14,15,15,15,15,16,16,16,16,16,16,17,17,17,17,17,18,18,18,18,18,18,19,19,19,19,19,19,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,21,21,21,21,21,21,21,21,21,20,20,20,20,20,20,20,20,20,19,19,19,19,19,19,18,18,18,18,18,18,17,17,17,17,17,16,16,16,16,16,16,15,15,15,15,15,14,14,14,14,14,13,13,13,13,12,12,12,12,12],
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
            "05-01",
            "05-02",
            "05-03",
            "05-04",
            "05-05",
            "05-06",
            "05-07",
            "05-08",
            "05-09",
            "05-10",
            "05-11",
            "05-12",
            "05-13",
            "05-14",
            "05-15",
            "05-16",
            "05-17",
            "05-18",
            "05-19",
            "05-20",
            "05-21",
            "05-22",
            "05-23",
            "05-24",
            "05-25",
            "05-26",
            "05-27",
            "05-28",
            "05-29",
            "05-30",
            "05-31",
            "06-01",
            "06-02",
            "06-03",
            "06-04",
            "06-05",
            "06-06",
            "06-07",
            "06-08",
            "06-09",
            "06-10",
            "06-11",
            "06-12",
            "06-13",
            "06-14",
            "06-15",
            "06-16",
            "06-17",
            "06-18",
            "06-19",
            "06-20",
            "06-21",
            "06-22",
            "06-23",
            "06-24",
            "06-25",
            "06-26",
            "06-27",
            "06-28",
            "06-29",
            "06-30",
            "07-01",
            "07-02",
            "07-03",
            "07-04",
            "07-05",
            "07-06",
            "07-07",
            "07-08",
            "07-09",
            "07-10",
            "07-11",
            "07-12",
            "07-13",
            "07-14",
            "07-15",
            "07-16",
            "07-17",
            "07-18",
            "07-19",
            "07-20",
            "07-21",
            "07-22",
            "07-23",
            "07-24",
            "07-25",
            "07-26",
            "07-27",
            "07-28",
            "07-29",
            "07-30",
            "07-31",
            "08-01",
            "08-02",
            "08-03",
            "08-04",
            "08-05",
            "08-06",
            "08-07",
            "08-08",
            "08-09",
            "08-10",
            "08-11",
            "08-12",
            "08-13",
            "08-14",
            "08-15",
            "08-16",
            "08-17",
            "08-18",
            "08-19",
            "08-20",
            "08-21",
            "08-22",
            "08-23",
            "08-24",
            "08-25",
            "08-26",
            "08-27",
            "08-28",
            "08-29",
            "08-30",
            "08-31",
            "09-01",
            "09-02",
            "09-03",
            "09-04",
            "09-05",
            "09-06",
            "09-07",
            "09-08",
            "09-09",
            "09-10",
            "09-11",
            "09-12",
            "09-13",
            "09-14",
            "09-15",
            "09-16",
            "09-17",
            "09-18",
            "09-19",
            "09-20",
            "09-21",
            "09-22",
            "09-23",
            "09-24",
            "09-25",
            "09-26",
            "09-27",
            "09-28",
            "09-29",
            "09-30"
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
            data: this.hcRentals,
            type: "area"
          },
                              {
            name: "Sääennustus",
            data: this.hcTemperatures,
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
