const getAllTasks = (req, res) => {
  res.send("Get All Tasks...");
};

const createTask = (req, res) => {
  res.json(req.body);
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {
  res.send("update task...");
};
const deleteTask = (req, res) => {
  res.send("Delete task...");
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
