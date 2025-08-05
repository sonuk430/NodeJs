const express = require("express");

const app = express();
const PORT = 8082;
app.use(express.json());

const foodsList = [
  {
    id: 1,
    customer: "Rahul",
    item: "Paneer Butter Masala",
    quantity: 2,
    price: 240,
    status: "pending",
    category: "veg",
  },
  {
    id: 2,
    customer: "Anjali",
    item: "Veg Biryani",
    quantity: 1,
    price: 150,
    status: "completed",
    category: "veg",
  },
  {
    id: 3,
    customer: "Mohit",
    item: "Chicken Tikka",
    quantity: 3,
    price: 450,
    status: "preparing",
    category: "non-veg",
  },
  {
    id: 4,
    customer: "Sneha",
    item: "Masala Dosa",
    quantity: 2,
    price: 160,
    status: "delivered",
    category: "veg",
  },
  {
    id: 5,
    customer: "Aman",
    item: "Pasta",
    quantity: 1,
    price: 120,
    status: "cancelled",
    category: "veg",
  },
  {
    id: 6,
    customer: "Neha",
    item: "Cheese Pizza",
    quantity: 2,
    price: 300,
    status: "completed",
    category: "veg",
  },
  {
    id: 7,
    customer: "Raj",
    item: "Chole Bhature",
    quantity: 1,
    price: 90,
    status: "preparing",
    category: "veg",
  },
  {
    id: 8,
    customer: "Kiran",
    item: "Fried Rice",
    quantity: 2,
    price: 180,
    status: "pending",
    category: "veg",
  },
  {
    id: 9,
    customer: "Pooja",
    item: "Spring Roll",
    quantity: 3,
    price: 210,
    status: "delivered",
    category: "veg",
  },
  {
    id: 10,
    customer: "Deepak",
    item: "Burger",
    quantity: 2,
    price: 160,
    status: "completed",
    category: "non-veg",
  },
];

// Get all Food List
app.get("/foods", (req, res) => {
  res.json({
    foodsList,
    message: "You All Food List",
    NumberOfItems: foodsList.length,
  });
});

//! Admin add new food item
app.post("/foods", (req, res) => {
  const newFood = req.body;
  foodsList.push(newFood);
  res.json({ newFood, message: "New food Item Added" });
});

//! Server Starting
app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}...`);
});
