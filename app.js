const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast') 

// const url = "http://api.openweathermap.org/data/2.5/weather?lat=9.0820&lon=8.6753&appid=da4546be2a05ba06d06308acee31e16a";

// request({url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.message) {
//         console.log('Unable to find location');
//     }else {
//         console.log('Day summary: ' + response.body.weather[0].description + '. It is currently ' + response.body.main.temp + ' degree out.');
//     } 
// }) 

// api.openweathermap.org/data/2.5/weather?lat=9.0820&lon=8.6753&appid=da4546be2a05ba06d06308acee31e16a
// api.openweathermap.org/data/2.5/weather?q=lagos,Nigeria&units=metric&appid=da4546be2a05ba06d06308acee31e16a


// geocode("Boston", (error, data) => {
//     console.log('Error', error);
//     console.log(('Data', data));  
// })


//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(6.5244, 3.3792, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  }) 