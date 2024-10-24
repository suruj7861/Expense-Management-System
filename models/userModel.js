const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')
//schema design
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required and should be unique"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
  },
  { timestamps: true }
);
//prehook
 userSchema.pre('save',async function (){
   const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
 })
//compare password
// userSchema.methods.comparePassword = async function(password){
//   const isMatch = await bcrypt.compare(password, this.password)
//   return isMatch
// }
//export
const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
