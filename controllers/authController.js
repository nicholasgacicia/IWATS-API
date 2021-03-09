const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models');


async function login(req, res) {
  const { email, password } = req.body;

  // ~Make sure an email and password is supplied
  if (!email || !password) {
    return res.status(400).json({ status: 400, error: 'Email and password are both required' });
  }

  try {
    // ~Find user by email
    const user = await db.User.findOne({ email });
    // console.log(user);

    // ~If user's email is not found
    if (!user) {
      // console.log('Email was not found');
      res.status(400).json({ status: 400, error: 'Invalid email or password. Please try again' });
    }

    // ~Make sure password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      // console.log('Login passwords do not match');
      return res.status(400).json({ status: 400, error: 'Invalid email or password. Please try again' })
    }

    // ~Create a jwt for the userId
    const payload = { userId: user._id };
    const secret = process.env.JWT_SECRET;
    // console.log(secret);
    const expiration = { expiresIn: '30d' };

    // ~Sign the jwt
    const token = await jwt.sign(payload, secret, expiration);

    res.json({ status: 200, token });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ status: 500, error: 'Something went wrong. Please try again' });
  }
}


async function verify(req, res) {
  res.json({ status: 200, userId: req.currentUserId });
  // const { token } = req.body;

  // console.log('Coded Token = ', token);

  // // ~Check if token is present
  // if (!token) {
  //   return res.status(400).json({status: 400, error: 'You are not authenticated. Please login and try again'});
  // }

  // // ~Decode token to verify User is logged in
  // try {
  //   const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
  //   console.log('Decoded Token = ', decodedToken);
  //   res.json({status: 200, token: decodedToken});
  // } catch (err) {
  //   console.log(err);
  //   return res.satus(500).json({status: 500, error: 'Something went wrong. Please try again'});
  // }
}


module.exports = {
  login,
  verify,
};
