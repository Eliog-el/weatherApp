const request = require("request");

const forecast = (lat, long, callback) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=da4546be2a05ba06d06308acee31e16a`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.message) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, response.body.weather[0].description + ". It is currently " + response.body.main.temp + " degree out");
    }
  });
};

module.exports = forecast;
