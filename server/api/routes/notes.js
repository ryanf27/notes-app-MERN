const express = require("express");
const router = express.Router();
const { index, create, find, update, remove } = require("../controllers/notes");

router.get("/notes", index);
router.get("/notes/:id", find);
router.post("/notes", create);
router.put("/notes/:id", update);
router.delete("/notes/:id", remove);

module.exports = router;
