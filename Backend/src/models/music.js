const mongoose = require('mongoose')

const musicSchema = new mongoose.Schema({
  info:{
    name:{
      type: String,
      required: true
    },
    author:{
      type: String,
      required: true,
      default:'Unknown'
    },
    category:{
      type: String,
      required: false,
      default:'All'
    },
    reference:{
      type: URL,
      required: false
    }
  },
  dynamics:{
    popularity:{
      type: Int16Array,
      required: true,
      default:0
    }
  }
})

module.exports = mongoose.model('Music', musicSchema)
