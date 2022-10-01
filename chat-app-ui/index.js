const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors({origin: true}))

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

const PORT = process.env.PORT || 3000
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//routes
app.use('/genshin', require('./routes/api/genshin'))

app.get('/', (req, res) => {
    res.send('al haitham falls harder')
})
app.get('/api/cytham', (req, res) => {
    res.json({
        genre: 'from sweethearts to enemies to lovers'
    })
})



app.listen(PORT, () => {
    console.log(`listen on port ${PORT}`)
})