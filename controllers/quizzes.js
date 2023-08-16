const Quiz = require('../models/quiz')
const Question = require('../models/question')
const User = require('../models/user')

async function index(req, res) {
  const quizzes = await Quiz.find({})
  res.render('quizzes/index', { title: 'Quizzes', quizzes })
}

async function show(req, res) {
  const quiz = await Quiz.findById(req.params.id)
  const questions = []
  for (q of quiz.questions) {
    let objId = String(q)
    let question = await Question.find({ _id: objId })
    questions.push(question[0])
  }
  res.render('quizzes/show', { title: 'Quiz', quiz, questions })
}

async function gradeQuiz(req, res) {
  const user = await User.findById(req.user)
  const quiz = await Quiz.findById(req.params.id)
  const questions = []
  for (q of quiz.questions) {
    let objId = String(q)
    let question = await Question.find({ _id: objId })
    questions.push(question[0])
  }

  if (quiz.name === 'What Decade of Music Are You?') {
    let nbby = 0
    let abby = 0
    let twbby = 0
    x = async () => {
      for (i = 1; i <= quiz.questions.length; i++) {
        if (
          questions[i - 1].answer === req.body[i] &&
          questions[i - 1].decade === 'nbby'
        ) {
          nbby += 10
        } else if (
          questions[i - 1].answer === req.body[i] &&
          questions[i - 1].decade === 'abby'
        ) {
          abby += 10
        } else if (
          questions[i - 1].answer === req.body[i] &&
          questions[i - 1].decade === 'twbby'
        ) {
          twbby += 10
        }
      }
    }
    y = async () => {
      if (nbby > abby && nbby > twbby) {
        user.results.push({
          quizId: quiz._id,
          name: quiz.name,
          result: '90s Baby',
          writeup: `You were likely born in the late 80s and started 
      consuming music in the early to mid 90s when 
      you were a young child.`
        })
      } else if (abby > nbby && abby > twbby) {
        user.results.push({
          quizId: quiz._id,
          name: quiz.name,
          result: '80s Baby',
          writeup: `You were likely born in the late 70s and started 
      consuming music in the early to mid 80s when 
      you were a young child.`
        })
      } else if (twbby > abby && twbby > nbby) {
        user.results.push({
          quizId: quiz._id,
          name: quiz.name,
          result: '2000s Baby',
          writeup: `You were likely born in the late 90s and started 
      consuming music in the early to mid 2000s when 
      you were a young child.`
        })
      } else {
        user.results.push({
          quizId: quiz._id,
          name: quiz.name,
          result: 'Inconclusive',
          writeup: `You have a wide range of musical tastes that don't quite fit into one decade of music.`
        })
      }
      await x()
      await y()
    }
    try {
      // Save any changes
      await user.save()
    } catch (err) {
      console.log(err)
    }
  }

  let result = user.results.length
  result = user.results[result - 1]

  res.render('quizzes/show/result', { title: 'Result', result, quiz })
}

// Include the next parameter - used for error handling in the catch
async function retakeQuiz(req, res) {
  const user = await User.findById(req.user)
  let result = null
  let quiz = null
  try {
    user.results.find((r) => {
      if (r._id.toString() == req.params.id) {
        result = r._id
        quiz = r.quizId
      }
      return
    })
    user.results.remove(result)
    user.save()
    res.redirect(`/quizzes/${quiz}`)
  } catch (err) {
    console.log(err)
    if (!user) return res.redirect('/quizzes')
  }
}

module.exports = {
  index,
  show,
  gradeQuiz,
  retakeQuiz
}
