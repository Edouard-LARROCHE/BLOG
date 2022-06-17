const UserModel = require('../models/user');
const jwt = require('jsonwebtoken');
const { signUpErrors, signInErrors } = require('../utils/errors');

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWTPRIVATEKEY, {
    expiresIn: 1,
  });
};

const signUp = async (req, res) => {
  const { pseudo, email, password } = req.body;

  try {
    const user = await UserModel.create({ pseudo, email, password });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = signUpErrors(err);
    res.status(200).json({ errors });
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, sameSite: 'Lax', secure: true });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = signInErrors(err);
    res.status(200).json({ errors });
  }
};

const logout = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
};

module.exports = { signUp, signIn, logout };
