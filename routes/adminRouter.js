const express = require("express");
const router = express.Router();
const { createAdmin, loginAdmin } = require("../controllers/admin-controllers");

router.route("/create").post(createAdmin);
router.route("/login").post(loginAdmin);

module.exports = router;
