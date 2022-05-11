const service = require("../services/service");

const getAll = async (req, res) => {
  try {
    const all = await service.getAll();
    res.send({ status: "OK", data: all });;
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllAcc = async (req, res) => {
  try {
    const all = await service.getAll('-qa');
    res.send({ status: "OK", data: all });;
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOne = (req, res) => {
  const {
    params: { kid },
  } = req;
  if (!kid) {
    res
      .status(400)
      .send({
        status: "FAILED",
        data: { error: "Parameter ':kid' can not be empty" },
      });
  }
  try {
    const one = service.getOne(kid);
    res.send({ status: "OK", data: one });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }


};

module.exports = {
  getAll,
  getAllAcc,
  getOne,
};