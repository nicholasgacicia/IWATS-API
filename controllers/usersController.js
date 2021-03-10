const bcrypt = require('bcryptjs');
const db = require('../models');


//! Create New User
async function create(req, res) {
  const { name, email, password } = req.body;

  // ~Validate create user form inputs
  if (!name || !email || !password) {
    return res.status(400).json({ status: 400, message: 'Failed, all fields are required.' });
  }

  // ~Verify user does not exist
  try {
    const foundUser = await db.User.findOne({ email });
    if (foundUser) {
      console.log('User account already exists: ', foundUser);
      return res.status(400).json({ status: 400, error: 'User already exists. Please login' });
    }

    const salt = await bcrypt.genSalt(10);  // ~Create Salt for password hash
    const hash = await bcrypt.hash(password, salt);  // ~Hash user's plain text Password
    const newUser = await db.User.create({ name, email, password: hash }); // ~Create the new user with hashed password

    // const newUser = await db.User.create({ name, email, password });  // ~Create the new user without bcrypt (comment out salt, hash and newUser above)

    res.json(newUser);
  } catch (err) {
    return res.status(500).json({ status: 500, error: 'Something went wrong. Please try again' });
  }
}


//! Add Show to attendedShows
async function addAttendedShow(req, res) {
  try {
    const showId = req.params.showId;
    console.log('Add showId = ', showId);

    // ~Find User
    const user = await db.User.findById(req.currentUserId);

    // ~Check if show has already been added
    if (user.showsAttended.indexOf(showId) !== -1) {
      console.log('User has already added this show');
      return res.status(400).json({ status: 400, message: 'FAILED: Show is already on your attended shows list.' });
    }

    // ~Add show to User's showsAttended array
    await user.showsAttended.push(showId);
    await user.save();
    console.log(user);

    // ~Respond to client
    res.json({ status: 200, message: `SUCCESS: Show added to attended shows list.` });

  } catch (err) {
    console.log(err);
    return res.status(500).json({ status: 500, error: 'ERROR: Something went wrong. Please try again' });
  }
}


//! Get Attended Shows
async function getMyShows(req, res) {
  try {
    // ~Find User by ID
    const user = await db.User.findById(req.currentUserId);
    return res.json({ status: 200, profile: user });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ status: 500, error: 'Something went wrong. Please try again' });
  }
}

module.exports = {
  create,
  getMyShows,
  addAttendedShow,
};
