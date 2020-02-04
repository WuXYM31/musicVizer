const express = require('express')
const router = express.Router()

// define /allmusic route
router.get('/', function(req, res){
  res.send('all music')
})

module.exports = router