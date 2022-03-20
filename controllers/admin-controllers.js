const Admin = require("../models/Admin");

const createAdmin = async (req, res) => {
  const admin = await Admin.create(req.body);
  res.send({ admin });
};

const loginAdmin = async (req, res) => {
  const admin = await Admin.findOne(req.body.name);
  res.send({ admin });
};

const deleteAdmin = async (req, res) => {
  const admin = await Admin.findOne(req.body.name);
  res.send({ admin });
};

module.exports = { createAdmin, loginAdmin, deleteAdmin };
