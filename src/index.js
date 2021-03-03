const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const port = process.env.PORT || 3000

const app = express()
app.use(cors()) 
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://www.abratu.app.br')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next();
})

const server = require('http').Server(app)
// const io = require('socket.io')(server)

require('./config/database')
 



// app.use((req, res, next) => {
//     req.io = io
    
//     return next()
// })

app.use(routes)

server.listen(port, (req , res) => { 
    console.log(`Server starter on port ${port}`)
})