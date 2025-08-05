const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("");

  //code likhna shuru kar do

  const userSchema = new Schema({
    name: String,
    age: Number,
    city: String,
    gender: String,
  });

  // Model ko Create === Collection create krna(Table ko create karna)
  // class Create kari hai
  const User = mongoose.model("user", userSchema);

  // Document ko create kiya hai or Object ko create kiya hai
  const user1 = new User({
    name: "Sonu",
    age: 20,
    city: "Delhi",
    gender: "Male",
  });
  await user1.save();

  // next Method to creating Document or object
  await User.create({ name: "Ram", age: 21, city: "Delhi", gender: "Male" });

  await User.insertMany([
    {
      name: "sita",
      age: 210,
      city: "Delhi",
      gender: "F",
    },
    { name: "Rohit", age: 12, city: "Delhi", gender: "Male" },
  ]);

  const findAllUsers = await User.find({});
  console.log(findAllUsers);
}


main()
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("Error...", err));
