import mongoose from "mongoose";
const dummydataSchema = new mongoose.Schema({
  name: String,
  salary: Number,
  language: String,
  city: String,
  isManager: Boolean,
});

export const dummydata = mongoose.model("dummydata", dummydataSchema);
