const Image = require("../models/Image");

const postImage = async (req, res) => {
  const newImage = await Image.create(req.body);
  res.send({ newImage });
};

const getImages = async (req, res) => {
  res.send("get images");
};

module.exports = { postImage, getImages };
