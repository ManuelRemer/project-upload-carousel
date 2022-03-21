// npm packages
const { StatusCodes } = require("http-status-codes");
// custom stuff
const Admin = require("../models/Admin");

const checkIfAdmin = async (req, res, next) => {
  const admin = await Admin.find({});
  if (admin.length === 0) {
    next();
  } else {
    res.status(StatusCodes.BAD_REQUEST).json({ msg: "no more admins" });
  }
};

const createAdmin = async (req, res) => {
  const admin = await Admin.create(req.body);
  const token = admin.createJWT();
  res.status(StatusCodes.CREATED).json({ name: admin.name, token });
};

const deleteAdmin = async (req, res) => {
  const admin = await Admin.findOne(req.body.name);
  const { email, password } = req.body;
  const passwordIsCorrect = await admin.comparePassword(password);
  console.log(passwordIsCorrect);
  if (passwordIsCorrect) {
    const admin = await Admin.findOneAndDelete({ email });
    res.send({ admin });
  } else res.send("Wrong password");
};

const loginAdmin = async (req, res) => {
  const admin = await Admin.findOne(req.body.name);
  const token = admin.createJWT();
  res.status(StatusCodes.OK).json({ name: admin.name, token });
};

module.exports = { checkIfAdmin, createAdmin, deleteAdmin, loginAdmin };
