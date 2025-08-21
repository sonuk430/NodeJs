const jwt = require("jsonwebtoken");
// const CustomAPIError = require("../errors/custom-error");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ message: "Please provide email and password," });
  }

  // Just for demo, normally provided bt DB!!!
  const id = new Date().getDate();

  // try to keep payload small,better experience for user
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ message: "user Created", token });
};

const dashboard = async (req, res) => {
  const luckNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: "Hello Sonu",
    secret: `Here is your authorized data, your lucky number is ${luckNumber}`,
  });
};

module.exports = { login, dashboard };
