// generate a dummy data in this format ina collection called employees ina db called company

// {
//     name:"df",
//     salary: 53,
//     langauge: "python",
//     city: "",
//     isManager: true
// }
// Generate 10 such records when a button called generate data is clicked
// create and express app and mongoose to achieve it

import express from "express";
import path from "path";
import mongoose from "mongoose";
import { dummydata } from "./models/schema.js";
const app = express();
const port = 3000;
mongoose.connect("mongodb://localhost:27017/dummydata");
app.use(express.static("public"));

const names = ["Ram", "Shyam", "Hari", "Sita"];
const language = [
  "Python",
  "Javascript",
  "Java",
  "Kotlin",
  "Golang",
  "Bash",
  "C#",
];
const city = [
  "Sunakothi",
  "thecho",
  "Chapagaun",
  "Satdobato",
  "Hattiban",
  "Gwarko",
];

const generate = () => {
  const data = new dummydata({
    name: names[Math.floor(Math.random() * names.length)],
    salary: Math.floor(Math.random() * (60 - 18 + 1)) + 18,
    language: language[Math.floor(Math.random() * language.length)],
    city: city[Math.floor(Math.random() * city.length)],
    isManager: Math.floor(Math.random() * 2),
  });
  data.save();
};

app.post("/generate", (req, res) => {
  generate();
  res.json({ message: "created" });
});

app.listen(port, () => {
  console.log(`Listening on the ${port}`);
});
