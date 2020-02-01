<template>
  <div id="chart-card">
    <canvas id="chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import planetChartData from "./chartData.js";

export default {
  name: "ChartCard",
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    },
  },
    data() {
      return {
        planetChartData: planetChartData
      };
    },
  mounted() {
    this.createChart("chart", this.planetChartData);
  }
};
</script>

<style></style>
