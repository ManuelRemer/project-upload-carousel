const express = require("express");
const router = express.Router();

// controllers
const {
  createImage,
  getImages,
  uploadImage,
} = require("../controllers/images-controller");

router.route("/").post(createImage).get(getImages);
router.route("/upload").post(uploadImage);

module.exports = router;
