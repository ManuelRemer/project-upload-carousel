require("dotenv").config();
require("express-async-errors");

// node express mongoose
const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

// npm security packages
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");

// npm other packages
const { StatusCodes } = require("http-status-codes");

// custom stuff
const notFound = require("./middleware/not-found-MW");
const errorHandler = require("./middleware/error-handler-MW");

app.get("/api/v1", (req, res) => {
  res.send("Hallo from the backend");
});

if (process.env.NODE_ENV === "production") {
  // Serve any static file
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// error handling middleware
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 4000;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`listening on port ${port} ....`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
