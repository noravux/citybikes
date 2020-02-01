const axios = require('axios');

var bikeData = [];
var bikeRentalData = [];

let url =
    'http://localhost:5000/api/data';


axios.get(url).then(res => {
    res.data.data.forEach(el => {
        bikeRentalData[el] = el.Rental;
    });
    addData('chart', bikeRentalData);
});

function addData(chart, data) {
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

console.log(bikeRentalData + "dasdaasdasd")


export const planetChartData = {
    type: 'line',
    data: {
        labels: ['asd'],
        datasets: [
            { // one line graph
                label: 'Number of Moons',
                data: [1],
                backgroundColor: 'rgba(54,73,93,.5)',
                borderColor: '#36495d',
                borderWidth: 3
            }
        ]
    },
    options: {
        responsive: true,
        lineTension: 1,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    padding: 25,
                }
            }]
        }
    }
}


export default planetChartData;
