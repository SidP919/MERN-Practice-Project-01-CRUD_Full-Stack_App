const express = require("express");
const router = express.Router();
const {home, createUser, getUsers} = require("./../controllers/userController")

router.get("/", home);
router.post("/createUser", createUser);
router.get("/getUsers", getUsers)

module.exports = router;