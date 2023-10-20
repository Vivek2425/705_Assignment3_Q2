const mongoose = require("../config/db.config")


const userSchema = mongoose.Schema({
    email:String,
    uname : String,
    password : String,
    phoneNo : Number
})
const userModel = mongoose.model("UserTB",userSchema);
module.exports = userModel;
