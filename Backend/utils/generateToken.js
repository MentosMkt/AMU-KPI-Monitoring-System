const jwt = require('jsonwebtoken');

const generateToken = (Id) => {
  return jwt.sign({ Id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE
  });
};

module.exports = generateToken;