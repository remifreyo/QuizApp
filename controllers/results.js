const Quiz = require('../models/quiz')
const User = require('../models/user')

async function index(req, res) {
  const user = await User.findById(req.user)
  const quizzes = await Quiz.find({})
  res.render('results', { title: 'Results', quizzes, user })
}

module.exports = {
  index
}
