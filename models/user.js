const mongoose = require('mongoose')
const Schema = mongoose.Schema

const resultSchema = new Schema(
  {
    quizId: String,
    name: String,
    result: String,
    writeup: String
  },
  {
    timestamps: true
  }
)

const userSchema = new Schema(
  {
    name: String,
    googleId: {
      type: String,
      required: true
    },
    email: String,
    avatar: String,
    results: [resultSchema]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('User', userSchema)
