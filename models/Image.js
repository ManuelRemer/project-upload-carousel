const mongoose = require("mongoose");
const ImageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
    minLength: 3,
    maxLength: 20,
  },
  src: {
    type: String,
    required: [true, "A path must be provided"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Image", ImageSchema);
