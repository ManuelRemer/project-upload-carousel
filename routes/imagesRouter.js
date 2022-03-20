const express = require("express");
const router = express.Router();

// controllers
const {
  createImage,
  getImages,
  uploadImage,
  deleteImage,
} = require("../controllers/images-controller");

router.route("/").post(createImage).get(getImages).delete(deleteImage);
router.route("/upload").post(uploadImage);

module.exports = router;
