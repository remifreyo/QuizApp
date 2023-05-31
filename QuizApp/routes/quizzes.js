const express = require('express')
const router = express.Router()
const quizzesCtrl = require('../controllers/quizzes')

// GET /quizzes
router.get('/index', quizzesCtrl.index)
// GET /quizzes/:id
router.get('/:id', quizzesCtrl.show)
// POST /quizzes/:id/result
router.post('/:id/result', quizzesCtrl.gradeQuiz)

module.exports = router
