const express = require('express')
const router = express.Router()
const { getGoals, setGoals, updateGoal, deleteGoal } = require('../controllers/goalsController')

// router.get('/', getGoals)
// router.post('/', setGoals)

//Above routes can also be written like shown below
router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(updateGoal).delete(deleteGoal)


module.exports = router