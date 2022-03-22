const express = require("express");
const router = express.Router();

// controllers
const {
  createImage,
  getImages,
  uploadImageToCloud,
  deleteImage,
} = require("../controllers/images-controller");

router.route("/").post(createImage).get(getImages).delete(deleteImage);
router.route("/upload").post(uploadImageToCloud);

module.exports = router;
