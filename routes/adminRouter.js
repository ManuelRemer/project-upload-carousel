const express = require("express");

const router = express.Router();
const {
  checkIfAdmin,
  createAdmin,
  deleteAdmin,
  loginAdmin,
  validateEmailPassword,
} = require("../controllers/admin-controllers");

router.route("/create").post(checkIfAdmin, createAdmin);
router
  .route("/")
  .post(validateEmailPassword, loginAdmin)
  .delete(validateEmailPassword, deleteAdmin);

module.exports = router;
