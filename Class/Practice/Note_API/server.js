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
    res.send(error.message);
    // console.log(error);
  }
});

app.patch("/api/notes/:id", async (req, res) => {
  try {
    const findNote = await noteSchema.findById(req.params.id);
    res.send({ message: "Note Find Successfully", findNote });
  } catch (error) {
    res.send("Id not found");
  }
});

app.delete("/api/notes/:id", async (req, res) => {
  try {
    const noteDelete = await noteSchema.findByIdAndDelete(req.params.id);

    if (!noteDelete) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.json({
      message: "Note deleted successfully",
      note: noteDelete,
    });
  } catch (error) {
    res.status(400).json({
      message: "Invalid ID format",
      error: error.message,
    });
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
