<template>
  <h1>Hello</h1>
</template>

<script>
export default {
  name: "WeatherCard",
  props: {
    msg: String
  },
  methods: {
    getReq() {
      const url =
        "http://localhost:5000/api/data";

      const http = require("http");
      let values = [];

      http
        .get(url, resp => {
          let data = "";

          resp.on("data", chunk => {
            data += chunk;
            console.log(data)
          });

          resp.on("end", () => {
            data = JSON.parse(data);

            data.forEach(el => {
              values[el] = el;
              console.log(values)
            });
          });
        })
        .on("error", err => {
          console.log("Error: " + err.message);
        });
    }
  },
  created() {
    this.getReq();
  }
};
</script>

<style></style>
