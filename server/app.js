const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const handleErrorMiddleware = require("./middlewares/error-handler");
app.use(express.json());

// mongodb database
mongoose.connect("mongodb://127.0.0.1:27017/notes_app");

// router
const notesRoutes = require("./api/routes/notes");

app.use("/api", notesRoutes);

app.use(handleErrorMiddleware);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
