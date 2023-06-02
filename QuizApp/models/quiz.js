const mongoose = require('mongoose')
const Schema = mongoose.Schema

const quizSchema = new Schema(
  {
    name: String,
    image: String,
    category: String,
    questions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Question'
      }
    ]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Quiz', quizSchema)
