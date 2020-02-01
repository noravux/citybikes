
const url = "https://api.openweathermap.org/data/2.5/forecast?id=650225&units=metric&appid=b448f0bf7189a64a46433a7b955951b3"

const https = require('https');

https.get(url, (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
        data += chunk;
    });

    resp.on('end', () => {
        data = JSON.parse(data);

        list = data.list;

        list.forEach(element => {
            console.log(element)
            // tässä pusketaan "element" kantaan joka kolmas tunti
        });
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});