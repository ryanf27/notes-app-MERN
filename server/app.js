const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

// mongodb database
mongoose.connect("mongodb://127.0.0.1:27017/notes_app");

app.use(express.json());
// router
const notesRoutes = require("./api/routes/notes");

app.use("/api", notesRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
