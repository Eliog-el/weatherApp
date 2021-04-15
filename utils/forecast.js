const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=da4546be2a05ba06d06308acee31e16a'
}

Request ({url: url, json: true}, (error, response) => {
    if (error) {
        callback('Unable to connect to location services!')
    } else {
        callback(undefined, )
        
    }
})





module.exports = forecast;