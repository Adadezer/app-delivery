const jwt = require('jsonwebtoken');
const fs = require('fs');

const JWTGenerator = (data) => {
  const jwtconfig = { expiresIn: '90d' };

  return jwt.sign(data, fs.readFileSync('jwt.evaluation.key', 'utf-8'), jwtconfig);
};

module.exports = {
  JWTGenerator,
};