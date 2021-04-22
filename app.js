const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
// api.openweathermap.org/data/2.5/weather?lat=9.0820&lon=8.6753&appid=da4546be2a05ba06d06308acee31e16a
// api.openweathermap.org/data/2.5/weather?q=lagos,Nigeria&units=metric&appid=da4546be2a05ba06d06308acee31e16a

const address = process.argv[2];

if (!address) {
  console.log("please provide an address");
} else {
  geocode(address, (error, {longitude, latitude, location }) => {
    if (error) {
      return console.log(error); 
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(location);
      console.log(forecastData);
    });
  });
}

console.log(process.argv);
