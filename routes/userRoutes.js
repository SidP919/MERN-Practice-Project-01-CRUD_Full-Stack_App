const express = require("express");
const router = express.Router();
const {home, createUser, getUsers, editUser} = require("./../controllers/userController")

router.get("/", home);
router.post("/createUser", createUser);
router.get("/getUsers", getUsers)
router.put("/editUser/:id",editUser)

module.exports = router;