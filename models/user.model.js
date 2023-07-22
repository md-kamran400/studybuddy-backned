const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const UsersModel = mongoose.model("users", UserSchema);
module.exports = UsersModel;



