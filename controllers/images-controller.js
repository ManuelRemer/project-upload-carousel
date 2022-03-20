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

const deleteImage = async (req, res) => {
  const ImageToDelete = await Image.findOne(req.body.name);
  res.send({ ImageToDelete });
};

module.exports = { createImage, getImages, uploadImage, deleteImage };
