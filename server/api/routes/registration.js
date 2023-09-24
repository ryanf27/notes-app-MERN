const express = require("express");
const router = express.Router();
const register = require("../controllers/registration");

router.post("/registration", register);

module.exports = router;
