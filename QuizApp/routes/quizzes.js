const express = require('express')
const router = express.Router()
const quizzesCtrl = require('../controllers/quizzes')
const ensureLoggedIn = require('../config/ensureLoggedIn')

// GET /quizzes
router.get('/index', quizzesCtrl.index)
// GET /quizzes/:id
router.get('/:id', ensureLoggedIn, quizzesCtrl.show)
// POST /quizzes/:id/result
router.post('/:id/result', ensureLoggedIn, quizzesCtrl.gradeQuiz)
// DELETE /results
router.delete('/:id/result/:id', quizzesCtrl.retakeQuiz)

module.exports = router
