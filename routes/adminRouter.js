const express = require("express");
const router = express.Router();

const authWithJWT = require("../middleware/authentication-MW");

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
  .delete(authWithJWT, validateEmailPassword, deleteAdmin);

module.exports = router;
