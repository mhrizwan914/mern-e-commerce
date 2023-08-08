// Require Express
const express = require("express");
// Require User Controllers
const { createUser, loginUSer } = require("../controllers/user");
// Create Express Rouer
const router = express.Router();
// 
router.route("/create").post(createUser);
// 
router.route("/login").post(loginUSer);
// Export
module.exports = router;