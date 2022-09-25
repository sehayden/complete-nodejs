const fsPromises = require('fs').promises
const path = require('path')

// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
//     if (err) throw err
//     console.log(data)
// })

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'i should get rid of feelings', (err, data) => {
//     if (err) throw err
//     console.log(data)
// })

const fileOps = async () => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8')
        console.log(data)
        await fsPromises.writeFile(path.join(__dirname, 'files', 'starter.txt'), data)
        await fsPromises.appendFile(path.join(__dirname, 'files', 'starter.txt'), "lets fall in love")
    }
    catch (err) {
        console.log(err)
    }
}

fileOps()

//exit on uncaught errors
process.on('uncaughtException', err => {
    console.error('Error ', err)
    process.exit(1)
})