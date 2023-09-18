const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 3000;
const MONGO_URI = process.env.URL_MONGGODB_DEV;
const mongoose = require("mongoose");

const handleErrorMiddleware = require("./middlewares/error-handler");
app.use(express.json());

// connect to MongoDB
const connectMongo = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection successful");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};

// Start the server
const startServer = async () => {
  await connectMongo();

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
};
// Define API Routes
const notesRoutes = require("./api/routes/notes");

app.use("/api", notesRoutes);

// Register middleware
app.use(handleErrorMiddleware);

// Start the server
startServer();
