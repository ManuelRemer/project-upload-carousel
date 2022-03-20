const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: [3, "Name must have at least 3 characters"],
    maxLength: [10, "Name mustn't have more then 10 characters"],
    required: [true, "Please provide a name"],
  },

  email: {
    type: String,
    unique: [true, "an account with this email already exists"],
    required: [true, "Please provide an email address"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide valid email",
    ],
  },

  password: {
    type: String,
    minLength: [6, "Password must have at least 6 characters"],
    required: [true, "Please provide a password"],
  },
});

AdminSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = bcrypt.hash(this.password, salt);
});

AdminSchema.methods.createJWT = function () {
  const token = jwt.sign(
    { adminId: this.id, adminName: this.name },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_LIFETIME }
  );
  return token;
};

AdminSchema.methods.comparePassword = function (incoming) {
  const isMatch = bcrypt.compare(incoming, this.password);
  return isMatch;
};

module.exports = mongoose.model("Admin", AdminSchema);
