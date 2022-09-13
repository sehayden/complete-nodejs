const express = require('express')
const http = require('http')
const path = require('node:path');
const socketio = require('socket.io')

const app = express();
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

// let count = 0

io.on('connection', (socket) => {
  console.log('New web socket connection')

  socket.emit('welcome')

  socket.on('clientTxt', (clientTxt, callback) => {
    if (clientTxt === 'fuck' || clientTxt === 'shit'){
     return callback('Watch ur profanity')       
    }
    io.emit('newText', clientTxt)
  })

  // socket.emit('countUpdated', count)

  // socket.on('increment', () => {
  //   count++
  //   // socket.emit('countUpdated', count) --> for 1 person
  //   io.emit('countUpdated', count) //for everyone
  //})



})

server.listen(port, () => {
  console.log(`server is up on port ${port}`)
})
