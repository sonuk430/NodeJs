require("dotenv").config();
const express = require("express");
const dbConnected = require("./db/db");
const User = require("./models/user");

const app = express();

app.use(express.json());

app.post("/register", async (req, res) => {
  try {
    const mandatoryField = ["firstName", "emailId", "age"];

    const isAllowed = mandatoryField.every((keys) =>
      Object.keys(req.body).includes(keys)
    );

    if (!isAllowed) throw new Error("Field Missing");

    await User.create(req.body);
    res.send("User Registered Successfully");
  } catch (error) {
    res.send(error.message);
    // console.log(error);
  }
});

app.get("/info", async (req, res) => {
  try {
    const result = await User.find();
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/user/:id", async (req, res) => {
  try {
    const result = await User.findById(req.params.id);
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
});

app.delete("/user/:id", async (req, res) => {
  try {
    const result = await User.findByIdAndDelete(req.params.id);
    res.send(result);
  } catch (error) {
    res.send(error.message);
  }
});

app.patch("/user", async (req, res) => {
  try {
    const { _id, ...update } = req.body;
    await User.findByIdAndUpdate(_id, update, { runValidators: true });
    res.send({ message: "User update successfully" });
  } catch (error) {
    res.send(error.message);
  }
});

const PORT = 8082;
function start() {
  try {
    dbConnected(process.env.MONGO_URI);
    console.log("Successfully DB Connected...!");
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}...!!!`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
