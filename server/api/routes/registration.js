const express = require("express");
const router = express.Router();
const create = require("../controllers/registration");

router.post("/registration", create);

module.exports = router;
