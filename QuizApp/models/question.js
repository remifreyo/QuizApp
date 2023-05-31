const mongoose = require('mongoose')
const Schema = mongoose.Schema

const questionSchema = new Schema(
  {
    question: String,
    possibleAnswers: [],
    answer: String,
    category: String
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Question', questionSchema)
