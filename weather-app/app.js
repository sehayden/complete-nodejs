const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=7422c93e4f47786167a93f66b7099bca&query=Ho%20Chi%20Minh'

// request({url: url, json: true}, (error, response) => {
//   console.log(response.body.current)
//   console.log('its currently ', response.body.current.observation_time)
// })

const callbackFunc = (a, callback) => {
  console.log(a)
  setTimeout(() => {
    const data = 'ugh this function thing'
    callback(data)
  }, 2000)
}
callbackFunc('sad', (data) => {
  console.log(data)
})