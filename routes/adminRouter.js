const express = require("express");
const router = express.Router();
const {
  createAdmin,
  loginAdmin,
  deleteAdmin,
} = require("../controllers/admin-controllers");

router.route("/create").post(createAdmin);
router.route("/").post(loginAdmin).delete(deleteAdmin);

module.exports = router;
