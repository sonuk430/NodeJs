require("dotenv").config();
const express = require("express");

const app = express();

const noteFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

const connectDB = require("./db/db");
const productRouter = require("./routes/products");

// Routes
app.get("/", (req, res) => {
  res.send("<h1>Store API</h1><a href='/api/v1/products'>Product routes<a/>");
});

app.use("/api/v1/products", productRouter);

// Products Routes
app.use(noteFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 8082;

const start = async () => {
  try {
    // Connecting DB
    await connectDB(process.env.MONGO_URI);
    // Server Start
    app.listen(port, () => console.log(`Server is running on ${port}...!!!`));
  } catch (error) {
    console.log(error);
  }
};

start();
