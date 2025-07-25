const express = require("express");
const { Auth } = require("./middleware/auth");

const app = express();

app.use(express.json());

// CRUD: Create Read Update Delete

//DataBase : array

const foodMenu = [
  { id: 1, food: "Chowing", category: "non-veg", price: 500 },
  { id: 2, food: "Butter Naan", category: "non-veg", price: 400 },
  { id: 3, food: "Chicken", category: "non-veg", price: 450 },
  { id: 4, food: "Mutton", category: "non-veg", price: 600 },
  { id: 5, food: "Chai", category: "veg", price: 50 },
  { id: 6, food: "Paneer", category: "veg", price: 100 },
  { id: 7, food: "Egg Curry", category: "non-veg", price: 30 },
  { id: 8, food: "Roti", category: "veg", price: 10 },
  { id: 9, food: "Dal", category: "veg", price: 75 },
  { id: 10, food: "Aalu", category: "veg", price: 55 },
  { id: 11, food: "Chana", category: "veg", price: 35 },
  { id: 12, food: "Chawal", category: "veg", price: 20 },
  { id: 13, food: "Coffee", category: "veg", price: 120 },
  { id: 14, food: "Lemon Tea", category: "veg", price: 125 },
  { id: 15, food: "Salad", category: "veg", price: 15 },
  { id: 16, food: "Curry", category: "veg", price: 45 },
];

// user Add food items
const AddToCart = [];

app.get("/food", (req, res) => {
  res.status(200).send(foodMenu);
});

// Authenticate Admin Here
app.use("/admin", Auth);

// Admin Add Food Item i FoodMenu
app.post("/admin", (req, res) => {
  foodMenu.push(req.body);
  res.status(200).send("Item Added Successfully");
});

// Admin Delete Food Item i FoodMenu
app.delete("/admin/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = foodMenu.findIndex((item) => item.id === id);
  if (index === -1) {
    res.send("Item Does't Exist");
  } else {
    foodMenu.splice(index, 1);
    res.send("Successfully Item Deleted");
  }
});

app.patch("/admin/:id", (req, res) => {
  const id = req.body.id;
  const foodData = foodMenu.find((item) => item.id === id);
  if (foodData) {
    if (req.body.food) {
      foodData.food = req.body.food;
    }
    if (req.body.category) {
      foodData.category = req.body.category;
    }
    if (req.body.price) {
      foodData.price = req.body.price;
    }
    res.send("Successfully Updated");
  } else {
    res.send("Item Not Exist");
  }
});

// user addToKart item

app.post("/user/:id", (req, res) => {
  const id = parseInt(res.params.id);
  const foodItem = foodMenu.find((item) => item.id === id);
  if (foodItem) {
    AddToCart.push(foodItem);
    res.status(200).send("Item added successfully");
  } else {
    res.send("Item Out of stack");
  }
});
// user delete item from addToCart
app.delete("/user/:id", (req, res) => {
  const id = parseInt(res.params.id);
  const index = foodMenu.findIndex((item) => item.id === id);
  if (index != -1) {
    AddToCart.splice(index, 1);
    send("Item Removed successfully");
  } else {
    res.send("Item is not present in Kart");
  }
});

app.get("/user", (req, res) => {
  if (AddToCart.length == 0) {
    res.send("Cart is Empty");
  } else {
    res.send(AddToCart);
  }
});

app.listen(4000, () => {
  console.log("Server running on 4000");
});
