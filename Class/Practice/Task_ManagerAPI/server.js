const express = require("express");

const app = express();
const PORT = 8082;

// Middleware to parse JSON body
app.use(express.json());

const tasks = [
  {
    id: "1",
    title: "Complete project report",
    description: "Finalize the quarterly report for the management team.",
    status: "Pending",
  },
  {
    id: "2",
    title: "Team meeting",
    description: "Discuss upcoming sprint and assign new tasks.",
    status: "Completed",
  },
  {
    id: "3",
    title: "Update client",
    description: "Send project update email to the client.",
    status: "In Progress",
  },
  {
    id: "4",
    title: "Bug fixing",
    description: "Resolve issues reported by QA team.",
    status: "In Progress",
  },
  {
    id: "5",
    title: "Design review",
    description: "Review the new UI design with the product team.",
    status: "Pending",
  },
  {
    id: "6",
    title: "Code cleanup",
    description: "Remove unused code and organize project structure.",
    status: "Completed",
  },
  {
    id: "7",
    title: "Database backup",
    description: "Schedule and verify database backups.",
    status: "Pending",
  },
  {
    id: "8",
    title: "Write documentation",
    description: "Prepare developer documentation for new APIs.",
    status: "In Progress",
  },
  {
    id: "9",
    title: "Deploy update",
    description: "Deploy the latest build to the staging server.",
    status: "Pending",
  },
  {
    id: "10",
    title: "Client feedback review",
    description: "Analyze feedback and plan next steps.",
    status: "Completed",
  },
];

//! Seen All Tasks
app.get("/tasks", (req, res) => {
  //   res.json({ name: "hello" });
  res.json(tasks);
});

//! Creating a new tasks
app.post("/tasks", (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.json({ message: "Task Created successfully" });
});

//! task Updating
app.patch("/task/:id", (req, res) => {
  const taskId = req.params.id;

  const foundTask = tasks.find((el) => {
    return el.id === taskId;
  });

  if (foundTask) {
    if (req.body.id) {
      foundTask.id = req.body.id;
    }
    if (req.body.title) {
      foundTask.title = req.body.title;
    }
    if (req.body.description) {
      foundTask.description = req.body.description;
    }
    if (req.body.status) {
      foundTask.status = req.body.status;
    }
  }

  res.json({ message: "Task Updated" });
});

//! one specify task Delete

app.delete("/task/:id", (req, res) => {
  const taskId = req.params.id;

  const findTask = tasks.findIndex((el) => el.id === taskId);

  if (findTask != -1) {
    tasks.splice(findTask, 1);
  } else {
    res.json({ message: "Task is not present" });
  }

  res.json({ message: "Task Deleted" });
  console.log(findTask);
});

//! Server Starting
app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}...`);
});
