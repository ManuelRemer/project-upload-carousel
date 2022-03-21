// npm packages
const { StatusCodes } = require("http-status-codes");
// custom stuff
const Admin = require("../models/Admin");

const alreadyAdmin = async () => {
  let result = await Admin.find({});
  return result;
};

console.log(alreadyAdmin());

const createAdmin = async (req, res) => {
  const admin = await Admin.create(req.body);
  const token = admin.createJWT();
  res.status(StatusCodes.CREATED).json({ name: admin.name, token });
};

const loginAdmin = async (req, res) => {
  const admin = await Admin.findOne(req.body.name);
  res.status(StatusCodes.OK).json({ name: admin.name, token });
};

const deleteAdmin = async (req, res) => {
  const admin = await Admin.findOne(req.body.name);
  res.send({ admin });
};

module.exports = { createAdmin, loginAdmin, deleteAdmin };
