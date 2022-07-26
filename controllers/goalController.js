const asyncHandler = require("express-async-handler");

// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get Goals" });
};

// @desc Set goals
// @route POST /api/goals
// @access Private
const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text Field");
  }
  res.status(200).json({ message: "Set Goals" });
};

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Set goals ${req.params.id}` });
};

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goals ${req.params.id}` });
};

module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
