const Quiz = require('../models/quiz')
const Question = require('../models/question')

async function index(req, res) {
  const quizzes = await Quiz.find({})
  res.render('quizzes/index', { title: 'Quizzes', quizzes })
}

async function show(req, res) {
  const quiz = await Quiz.findById(req.params.id)
  res.render('quizzes/show', { title: 'Quiz', quiz })
}

module.exports = {
  index,
  show
}
