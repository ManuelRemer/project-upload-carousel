// node express mongoose
const path = require("path");
const fs = require("fs");
// npm packages
const cloudinary = require("cloudinary").v2;
const { StatusCodes } = require("http-status-codes");
// custom stuff
const Image = require("../models/Image");
const { BadRequestError } = require("../errors");

const createImage = async (req, res) => {
  const newImage = await Image.create(req.body);
  res.status(StatusCodes.CREATED).json({ newImage });
};

const getImages = async (req, res) => {
  const images = await Image.find({});
  res.status(StatusCodes.OK).json({ images });
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

const deleteImage = async (req, res, next) => {
  const test = await Image.findByIdAndDelete(req.body.id);
  if (!test) {
    throw new BadRequestError(`No image with id: ${req.body.id}`);
  }
  next();
};

const deleteImageFromCloud = async (req, res) => {
  const { id, cloudId } = req.body;
  console.log(req.body.cloudId);
  const justDeleted = await cloudinary.uploader.destroy(
    `upload-carousel-project/${cloudId}`
  );

  if (justDeleted.result === "not found") {
    throw new BadRequestError(`No image with cloudId: ${cloudId}`);
  }
  console.log(justDeleted);

  res.status(StatusCodes.OK).json(justDeleted);
};

module.exports = {
  createImage,
  getImages,
  uploadImageToCloud,
  deleteImageFromCloud,
  deleteImage,
};
