require("dotenv").config();
const express = require("express");
const dbConnection = require("./db/db");
const app = express();
app.use(express.json()); // required to read JSON body

const noteSchema = require("./model/tasks");

app.get("/api/notes", async (req, res) => {
  const getData = await noteSchema.find({});
  res.json({ message: "Date Fetch success", getData });
});

app.post("/api/notes", async (req, res) => {
  try {
    await noteSchema.create(req.body);
    res.send({ message: "New Note Created" });
  } catch (error) {
    console.log(error);
  }
});

const PORT = 8082;
function start() {
  try {
    app.listen(PORT, () => {
      console.log(`Server is running on port Number ${PORT}...!`);
    });
    dbConnection(process.env.MONGO_URL);
  } catch (error) {
    console.log(error);
  }
}

start();
