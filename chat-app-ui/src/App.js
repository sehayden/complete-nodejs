import Chat from './components/Chat';
const express = require('express')
const http = require('http')
const path = require('node:path');
const socketio = require('socket.io')

const app = express();
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

function App() {

  app.use(express.static(publicDirectoryPath))
  io.on('connection', (socket) => {
    console.log('New web socket connection')
  
    socket.emit('welcome')
  
    socket.on('clientTxt', (clientTxt, callback) => {
      if (clientTxt === 'fuck' || clientTxt === 'shit'){
       return callback('Watch ur profanity')       
      }
      io.emit('newText', clientTxt)
    })
    server.listen(port, () => {
      console.log(`server is up on port ${port}`)
    })
  })


  return (
    <div className="App">
      <Chat></Chat>
    </div>
  );
}

export default App;
