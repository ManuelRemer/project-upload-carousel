const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: [3, "Name must have at least 3 characters"],
    maxLength: [10, "Name mustn't have more then 10 characters"],
    required: [true, "Please provide a name"],
  },
  password: {
    type: String,
    minLength: [6, "Password must have at least 6 characters"],
    required: [true, "Please provide a password"],
  },
});

module.exports = mongoose.model("Admin", AdminSchema);
