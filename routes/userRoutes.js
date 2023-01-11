const express = require("express");
const router = express.Router();
const {home, createUser} = require("./../controllers/userController")

router.get("/", home);
router.post("/createUser", createUser);

module.exports = router;