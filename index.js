const express = require("express");
const cors = require("cors");
const moongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

//Mongo DB Connection
moongoose.connect(
  "mongodb+srv://arif3337179:nodelearn@nodelearn.jdtlq1f.mongodb.net/dummy"
);

//Schema
const userSchema = new moongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

//Model
const User = moongoose.model("users", userSchema);

//Routes
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.get("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

app.put("/update/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  user.name = req.body.name;
  user.email = req.body.email;
  user.age = req.body.age;
  await user.save();
  res.json(user);
});

app.post("/create", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json(user);
});

app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User Deleted" });
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use((req, res) => {
  res.status(404).json({ message: "Page Not Found" });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
