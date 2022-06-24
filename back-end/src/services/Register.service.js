const md5 = require('md5');
const { Users } = require('../database/models');

const registerUserService = async (email, password, name, role = 'customer') => {
   const encdodedPass = md5(password);
   
   const ifUserexists = await Users.findOne({ where: { email, name } });

   if (ifUserexists) return null;
   const result = await Users.create({ email, password: encdodedPass, name, role });
   return result;
};

module.exports = { registerUserService };
