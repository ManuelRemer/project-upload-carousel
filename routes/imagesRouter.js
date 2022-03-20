const express = require("express");
const router = express.Router();

// controllers
const { postImage, getImages } = require("../controllers/images-controller");

router.route("/image-upload").post(postImage);
router.route("/").get(getImages);

module.exports = router;
