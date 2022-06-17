const mongoose=require("mongoose")

// Defining Schema
const userSchema = new mongoose.Schema({
  name:     { type: String, required: true, trim: true },
  email:    { type: String, required: true, trim: true },
  phone:    { type: Number, required: true, trime:true },
  password: { type: String, required: true, trim: true }
})

// Model
const UserModel = mongoose.model("user", userSchema)

module.exports=UserModel