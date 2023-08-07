// Require Express
const express = require("express");
// Require User Controllers
const { createUser } = require("../controllers/user");
// Create Express Rouer
const router = express.Router();
// 
router.route("/create").post(createUser);
// Export
module.exports = router;