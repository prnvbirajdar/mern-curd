const mongoose = require('mongoose')

// we're defining a mongo schema here
const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please enter your goal']
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Goal', goalSchema)