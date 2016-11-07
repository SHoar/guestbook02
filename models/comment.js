var mongoose = require('mongoose')
var Schema = mongoose.Schema

var commentSchema = new Schema ({
  name: String,
  comment: String,
  default: {
    createdAt: Date
  }
})

var Comment = module.exports = mongoose.model("Comment", commentSchema)