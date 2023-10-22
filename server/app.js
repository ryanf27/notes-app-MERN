const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();
const port = process.env.PORT || 3000;
const MONGO_URI = process.env.URL_MONGGODB_DEV;
const mongoose = require("mongoose");

const handleErrorMiddleware = require("./middlewares/error-handler");
app.use(cookieParser());
app.use(express.json());
app.use(cors());

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
const registrationRoutes = require("./api/routes/registration");
const loginRoutes = require("./api/routes/login");

app.use("/api", registrationRoutes);
app.use("/api", notesRoutes);
app.use("/api", loginRoutes);

// Register middleware
app.use(handleErrorMiddleware);

// Start the server
startServer();
