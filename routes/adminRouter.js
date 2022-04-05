const express = require("express");
const router = express.Router();

const authWithJWT = require("../middleware/authentication-MW");

const {
  checkIfNoAdmin,
  checkIfAdmin,
  createAdmin,
  deleteAdmin,
  loginAdmin,
  validateEmailPassword,
} = require("../controllers/admin-controllers");

router.route("/create").post(checkIfNoAdmin, createAdmin);
router
  .route("/")
  .post(validateEmailPassword, loginAdmin)
  .delete(authWithJWT, validateEmailPassword, deleteAdmin);

router.route("/check").get(checkIfAdmin);

module.exports = router;
