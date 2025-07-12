const express = require("express");
const app = express();

const tasks = require("./routes/tasks");
const PORT = 8082;

// middleware
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

// Server Start
app.listen(PORT, () => {
  console.log(`Server is Running on Port${PORT}...`);
});
