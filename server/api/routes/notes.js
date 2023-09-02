const express = require("express");
const router = express.Router();
const { show, create, find, update, remove } = require("../controllers/notes");

router.get("/notes", show);
router.get("/notes/:id", find);
router.post("/notes", create);
router.put("/notes/:id", update);
router.delete("/notes/:id", remove);

module.exports = router;
