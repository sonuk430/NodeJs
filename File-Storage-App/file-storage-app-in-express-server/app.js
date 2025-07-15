import express from "express";

const app = express();

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  res.json(["Test.txt", "hello.png"]);
  console.log(req);
});

// Server Start
app.listen(4000, () => {
  console.log(`Server Started`);
});
