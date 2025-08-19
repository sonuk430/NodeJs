require("dotenv").config();
const connectDb = require("./db/db");

const tasks = require("./model/tasks");
const note = require("./task.json");

async function start() {
  try {
    await connectDb(process.env.MONGO_URL);
    await tasks.deleteMany();
    await tasks.create(note);
    console.log("Success...");
  } catch (error) {
    console.log(error);
  }
}

start();
