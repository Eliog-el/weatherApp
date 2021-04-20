const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast') 
// api.openweathermap.org/data/2.5/weather?lat=9.0820&lon=8.6753&appid=da4546be2a05ba06d06308acee31e16a
// api.openweathermap.org/data/2.5/weather?q=lagos,Nigeria&units=metric&appid=da4546be2a05ba06d06308acee31e16a

geocode("Boston", (error, data) => {
    console.log('Error', error);
    console.log(('Data', data));  
})

forecast(-75.088, 44.1545, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})