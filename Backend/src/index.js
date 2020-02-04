const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/musicvizer', { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', ()=> console.log('connected to database'))

// import routers
const usersRouter = require('../src/routes/users')
const musicRouter = require('../src/routes/music')


app.use(express.json())

app.get('/', function(req, res) {
  res.send('welcome to musicvizer')
})
app.use('/users', usersRouter)
app.use('/music', musicRouter)

app.listen(3001, () => { console.log('server started') })