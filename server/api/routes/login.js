const express = require("express");
const router = express.Router();
const login = require("../controllers/login");
// const verifyToken = require("../../middlewares/verifyToken");
const refreshToken = require("../controllers/refreshToken");

router.post("/login", login);
router.get("/token", refreshToken);

module.exports = router;
