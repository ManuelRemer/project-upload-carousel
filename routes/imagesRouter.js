const express = require("express");
const router = express.Router();

// controllers
const {
  createImage,
  getImages,
  deleteImage,
  uploadImageToCloud,
  deleteImageFromCloud,
} = require("../controllers/images-controller");

router
  .route("/")
  .post(createImage)
  .get(getImages)
  .delete(deleteImage, deleteImageFromCloud);
router.route("/upload").post(uploadImageToCloud);

module.exports = router;
