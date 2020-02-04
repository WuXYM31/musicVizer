const express = require('express')
const router = express.Router()

const User = require('../models/user')

// Get all users
router.get('/', async(req,res) => {
  try{
    const users = await User.find()
    res.send(users)
  }catch(err){
    res.status(500).json({ message: err.message })
  }
})

// Middleware function for getting user object by ID
async function getUser(req,res, next){
  try{
    user = new User.findById(req.params,id)
    if(user == null){
      return res.status(404).json({ message: 'cannot find user'})
    }
  }catch(err){
    return res.status(500).json({ message: err.message })
  }
  res.user = user
  next()
}

// Get one user
router.get('/:id', getUser, async(req, res) => {
  res.json(res.user)
})

module.exports = router