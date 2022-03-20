const mongoose = require("mongoose");
const ImageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  src: {
    type: String,
    required: [true, "A path must be provided"],
  },
});

module.exports = mongoose.model("Image", ImageSchema);
