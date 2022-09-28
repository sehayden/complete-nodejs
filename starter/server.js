const path = require('path')
const express = require('express')
const app = express();
const cors = require('cors') //Cross origin resource sharing
const logEvents = require('./middleware/logEvents')

const PORT = process.env.PORT || 3000

//custome middeware logger
app.use((req, res, next) => {
    logEvents(`${req.url} ${req.headers.origin}`)
    console.log(`${req.method} ${req.path}`)
    next()
})

//Filter page that can access resource
const whiteList = ['http://127.0.0.1:5000', 'http://localhost:3000']
const corsOption = {
    origin: (origin, callback) => {
        if (whiteList.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200
}
app.use(cors(corsOption))

//build in middleware to handle url encoded data/form data, and json
app.use(express.urlencoded({extended: false}))
app.use(express.json())


//serve static files (images, css, ...)
app.use('/', express.static(path.join(__dirname, '/public'))) //for going to public file before anything else
app.use('/subdir', express.static(path.join(__dirname, '/public')))


//routes
app.use('/', require('./routes/root'))
app.use('/subdir', require('./routes/subdir'));
app.use('/employees', require('./routes/api/employees'))


app.all('*', (req, res) => {
    if (req.accepts('html')){
        res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
    }
    else if (req.accepts('json')){
        res.json({error: "404 Not found"})
    } else {
        res.type('txt').send("404 Not found")
    }
})  //.all(*) : applied for all files

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
   
})