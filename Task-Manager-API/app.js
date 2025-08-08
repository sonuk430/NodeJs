const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

// Middleware
app.use(express.static("./public"));
app.use(express.json());

// Routes

app.use("/api/v1/tasks", tasks);

// Server Start
const PORT = 8082;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is Running on Port ${PORT}...`);
    });
  } catch (error) {
    console.log("Error connecting to DB:", error);
  }
};

start();
