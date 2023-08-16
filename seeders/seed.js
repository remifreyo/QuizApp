const mongoose = require('mongoose')
const Quiz = require('../models/quiz')
require('dotenv').config()
mongoose.connect(process.env.DATABASE_URL)

// shortcut to mongoose.connection object
const db = mongoose.connection

db.on('connected', function () {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`)
})

const seedQuiz = [
  {
    name: 'What Decade of Music Are You?',
    category: 'music',
    image:
      'https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg',
    questions: [
      '64760f1eca0bfbc9b46d12f8',
      '64768825e239e94637f2d678',
      '6479e36de239e94637f2d679',
      '6479e36de239e94637f2d680',
      '6479e36de239e94637f2d67b',
      '6479e36de239e94637f2d67a',
      '6479e36de239e94637f2d67d',
      '6479e36de239e94637f2d67c',
      '6479e36de239e94637f2d683',
      '6479e36de239e94637f2d681',
      '6479e36de239e94637f2d684',
      '6479e36de239e94637f2d682',
      '6479e36de239e94637f2d67f',
      '6479e36de239e94637f2d67e',
      '6479e36de239e94637f2d685'
    ]
  }
]

const seedDB = async () => {
  await Quiz.insertMany(seedQuiz)
}

seedDB().then(() => {
  db.close()
})
