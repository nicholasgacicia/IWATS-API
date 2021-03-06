const jwt = require('jsonwebtoken');

async function auth(req, res, next) {
  const { token } = req.body;

  // ~Check if token is present
  if (!token) {
    return res.status(401).json({ status: 401, error: 'You are not authenticated. Please login and try again' });
  }

  // ~Decode token to verify User is logged in
  try {
    const decodedToken = await jwt.verify(token, process.env.JWT_SECRET);
    req.currentUserId = decodedToken.userId;
    next();
  } catch (err) {
    console.log(err);
    return res.satus(500).json({ status: 500, error: 'Something went wrong. Please try again' });
  }
}

module.exports = auth;
