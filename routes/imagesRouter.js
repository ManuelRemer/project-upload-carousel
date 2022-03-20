const express = require("express");
const router = express.Router();
const { postImage, getImages } = require("../controllers/images-controller");

router.route("/image-upload").post(postImage).get(getImages);

module.exports = router;
