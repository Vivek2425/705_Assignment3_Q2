require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.API_URL).then((result)=>{console.log("connection done")}).catch((err)=>{console.log(err)});
module.exports = mongoose;