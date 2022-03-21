const express = require("express");

const router = express.Router();
const {
  checkIfAdmin,
  createAdmin,
  deleteAdmin,
  loginAdmin,
} = require("../controllers/admin-controllers");

router.route("/create").post(checkIfAdmin, createAdmin);
router.route("/").post(loginAdmin).delete(deleteAdmin);

module.exports = router;
