const fetch = require("node-fetch");
const jwt_decode = require('jwt-decode');
const DB = require("./db.json");

const getAll = async (env = '') => {
  const response = await fetch(`https://dgcg${env}.covidbevis.se/tp/trust-list`);
  const body = await response.text();
  const decoded = jwt_decode(body);
  const obj = decoded.dsc_trust_list
  const mapped = Object.keys(obj).map((key) => {
    const r = obj[key]
    r.country = key;
    obj[key].keys.map(k => {
      k.country = r.country
      return k;
    })
    return r
  });
  return {raw: decoded, mapped: mapped};
};

const getOne = (kid) => {
  const one = DB.payload.dsc_trust_list.DE.keys.find((key) => key.kid === kid);
  if (!one) {
    return;
  }
  return one;
};

module.exports = { getAll, getOne };