const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=1b33f54e6f20becf8f988a075fcb4712&query=41.2659,26.6854";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.current);
});
