const md5 = require('md5');
const { Users } = require('../database/models');
const { JWTGenerator } = require('./helper/jwtGenerator');

const loginUser = async (emailUser, passwordUser) => {
  const validPassword = md5(passwordUser);

  const result = await Users.findOne({ where: { email: emailUser, password: validPassword } });

  if (!result) return null;

  const { email, name, role } = result;

  const jwt = JWTGenerator({ emailUser, validPassword });

  return {
    userEmail: email,
    userName: name,
    userRole: role,
    token: jwt,
  };
};

module.exports = {
  loginUser,
};
