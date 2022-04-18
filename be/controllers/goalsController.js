const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')

// @desc    Get goal
// @route   /api/goals
// @access  private
const getGoals = asyncHandler(async (req, res) => {
  const allGoals = await Goal.find()

  res.status(200).json(allGoals)
})

// @desc    Post goal
// @route   /api/goals
// @access  private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('error mate')
  }

  const postGoal = await Goal.create({
    text: req.body.text
  })

  res.status(200).json(postGoal)
})

// @desc    Update goal
// @route   /api/goals/:id
// @access  private
const updateGoal = asyncHandler(async (req, res) => {
  const findGoal = await Goal.findById(req.params.id)

  if (!findGoal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  const updateGoal = await Goal.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true
    }
  )

  res.status(200).json(updateGoal)
})

// @desc    Delete goal
// @route   /api/goals/:id
// @access  private
const deleteGoal = asyncHandler(async (req, res) => {
  const findGoal = await Goal.findById(req.params.id)

  if (!findGoal) {
    res.status(400)
    throw new Error('Goal not found')
  }

  // removes the goal we found by id
  await findGoal.remove()

  res.status(200).json({id: req.params.id})
})

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal
}