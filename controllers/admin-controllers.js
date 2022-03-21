// npm packages
const { StatusCodes } = require("http-status-codes");

// custom stuff
const Admin = require("../models/Admin");
const { BadRequestError } = require("../errors");

// checking mw
const checkIfAdmin = async (req, res, next) => {
  const admin = await Admin.find({});
  if (admin.length === 0) {
    next();
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({ msg: "no more admins" });
  }
};

const validateEmailPassword = async (req, res, next) => {
  const { email, password } = req.body;
  if (!password || !email) {
    throw new BadRequestError("Provide email and password");
  }
  const admin = await Admin.findOne(req.body.name);
  if (!admin) {
    throw new BadRequestError("Invalid Credentials");
  }
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
  checkIfAdmin,
  createAdmin,
  deleteAdmin,
  loginAdmin,
  validateEmailPassword,
};
