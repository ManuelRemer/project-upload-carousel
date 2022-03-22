//node express mongoose
const path = require("path");
const fs = require("fs");
//npm packages
const cloudinary = require("cloudinary").v2;
const { StatusCodes } = require("http-status-codes");
//custom stuff
const Image = require("../models/Image");

const createImage = async (req, res) => {
  const newImage = await Image.create(req.body);
  res.status(StatusCodes.CREATED).json({ newImage });
};

const getImages = async (req, res) => {
  res.send("get images");
};

const uploadImageToCloud = async (req, res) => {
  const {
    files: {
      imageToCloud: { tempFilePath: path },
    },
  } = req;
  const result = await cloudinary.uploader.upload(path, {
    use_filename: true,
    folder: "upload-carousel-project",
  });
  fs.unlinkSync(path);
  res.status(StatusCodes.OK).json({ image: result.secure_url });
};

const deleteImage = async (req, res) => {
  const ImageToDelete = await Image.findOne(req.body.name);
  res.send({ ImageToDelete });
};

module.exports = { createImage, getImages, uploadImageToCloud, deleteImage };
