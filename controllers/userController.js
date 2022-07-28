const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @DESCRIPTION Register User
// @ROUTE POST /API/USER
// @ACCESS Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all Field");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }
  const hashed = await bcrypt.hash(password, 10);
  const user = await User.create({
    name,
    email,
    password: hashed,
  });
  if (!user) {
    res.status(400);
    throw new Error("Invalid Credential");
  } else {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  }
});
// @DESCRIPTION Authenticate User
// @ROUTE POST /API/USER/LOGIN
// @ACCESS Public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please add all Field");
  }
  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("invalid credential");
  }
  // res.json({ message: "Login User" });
});
// @DESCRIPTION Get User Data
// @ROUTE POST /API/USER/ME
// @ACCESS Private

const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = req.user;
  res.status(200).json({
    _id,
    name,
    email,
  });
});

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = { registerUser, loginUser, getMe };
