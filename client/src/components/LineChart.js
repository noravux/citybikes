import { Line, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;

export default {
  extends: Line,
  mixins: [reactiveProp],
  props: ['options'],
  options: {
    responsive: true,
    title: {
      // optional: your title here
    },
    scales: {
      xAxes: [
        {
          type: 'linear', // MANDATORY TO SHOW YOUR POINTS! (THIS IS THE IMPORTANT BIT)
          display: true, // mandatory
          scaleLabel: {
            display: true, // mandatory
            labelString: 'Your label' // optional
          }
        }
      ],
      yAxes: [
        {
          // and your y axis customization as you see fit...
          display: true,
          scaleLabel: {
            display: true,
            labelString: 'Count'
          }
        }
      ]
    }
  },
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData, this.options);
  }
};
