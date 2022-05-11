const database = require("../database/database");

const getAll = (env ='') => {
  const all = database.getAll(env);
  return all;
};

const getOne = (kid) => {
  const one = database.getOne(kid);
  return one;
};

module.exports = {
  getAll,
  getOne,
};