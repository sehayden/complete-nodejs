const express = require('express')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const data = {}
let dataGenshin
data.genshin = require('../../data/genshin.json')

const dataread = fs.readFileSync(path.join(__dirname, '..', '..', 'data', 'genshin.json'))
console.log('data ', data)
dataGenshin = JSON.parse(dataread)


router.route('/')
    .get((req, res) => {
        res.json(data.genshin)
    })
    .post((req, res) => {
        const reqData = {
            "character": req.body.character,
            "region": req.body.region
        }
        dataGenshin.push(reqData)
        const newDataGenshin = JSON.stringify(dataGenshin)
    
        fs.writeFileSync(path.join(__dirname, '..', '..', 'data', 'genshin.json'), newDataGenshin, (err) => {
            if (err) throw err
            console.log("new data add ", newDataGenshin)
        })

        res.json({
            "character": req.body.character,
            "region": req.body.region
        })
        
    })

module.exports = router