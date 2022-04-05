// npm packages
const { StatusCodes } = require("http-status-codes");

// custom stuff
const Admin = require("../models/Admin");
const { BadRequestError } = require("../errors");

// checking mw
const checkIfAdmin = async (req, res, next) => {
  const admin = await Admin.find({});
  let result;
  if (admin.length === 0) {
    result = false;
  } else {
    result = true;
  }

  res.status(StatusCodes.OK).json(result);
};

const checkIfNoAdmin = async (req, res, next) => {
  const admin = await Admin.find({});
  if (admin.length === 0) {
    next();
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({ msg: "not more admins" });
  }
};

const validateEmailPassword = async (req, res, next) => {
  const { password } = req.body;
  const admin = await Admin.findOne({ name: "anne" });
  console.log(admin[0]);
  const passwordIsCorrect = await admin.comparePassword(password);
  if (!passwordIsCorrect) {
    throw new BadRequestError("Incorrect password");
  }
  req.body.admin = admin;
  next();
};

// controllers
const createAdmin = async (req, res) => {
  const admin = await Admin.create(req.body);
  const token = admin.createJWT();
  res.status(StatusCodes.CREATED).json({ name: admin.name, token });
};

const deleteAdmin = async (req, res) => {
  const { email, admin } = req.body;
  await Admin.findOneAndDelete({ email });
  res.status(StatusCodes.OK).json(`deleted : ${admin}`);
};

const loginAdmin = async (req, res) => {
  const { admin } = req.body;
  const token = admin.createJWT();
  res.status(StatusCodes.OK).json({ name: admin.name, token });
};

module.exports = {
  checkIfNoAdmin,
  checkIfAdmin,
  createAdmin,
  deleteAdmin,
  loginAdmin,
  validateEmailPassword,
};
