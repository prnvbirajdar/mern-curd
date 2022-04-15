// @desc    Get goal
// @route   /api/goals
// @access  private
const getGoals = (req, res) => {
  res.status(200).json({ message: 'Hello controll' })
}

// @desc    Post goal
// @route   /api/goals
// @access  private
const setGoals = (req, res) => {
  if (!req.body.text) {
    res.status(400).json({ message: 'error bro' })
  }

  console.log(req.body.text);
  res.status(200).json({ message: 'Hello set controll' })
}

// @desc    Update goal
// @route   /api/goals/:id
// @access  private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Goal update ${req.params.id}` })
}

// @desc    Delete goal
// @route   /api/goals/:id
// @access  private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Goal delete ${req.params.id}` })
}

module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal
}