const { Users } = require('../database/models');

const getUsers = async () => {
  const result = await Users.findAll();

  if (!result) return null;

  return result;
};

const getUserById = async (id) => {
  const result = await Users.findOne({ where: { id } });

  if (!result) return null;

  return result;
};

module.exports = {
  getUsers,
  getUserById,
};