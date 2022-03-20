const Image = require("../models/Image");

const createImage = async (req, res) => {
  const newImage = await Image.create(req.body);
  res.send({ newImage });
};

const getImages = async (req, res) => {
  res.send("get images");
};

const uploadImage = async (req, res) => {
  res.send("uploadImage");
};

module.exports = { createImage, getImages, uploadImage };
