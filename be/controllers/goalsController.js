const asyncHandler =  require('express-async-handler')

// @desc    Get goal
// @route   /api/goals
// @access  private
const getGoals = asyncHandler (async (req, res) => {
  res.status(200).json({ message: 'Hello controll' })
})

// @desc    Post goal
// @route   /api/goals
// @access  private
const setGoals = asyncHandler (async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('error mate')
  }

  res.status(200).json({ message: 'Hello set controll' })
})

// @desc    Update goal
// @route   /api/goals/:id
// @access  private
const updateGoal = asyncHandler (async (req, res) => {
  res.status(200).json({ message: `Goal update ${req.params.id}` })
}) 

// @desc    Delete goal
// @route   /api/goals/:id
// @access  private
const deleteGoal = asyncHandler (async (req, res) => {
  res.status(200).json({ message: `Goal delete ${req.params.id}` })
})

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal
}