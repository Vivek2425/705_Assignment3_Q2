const mongoose  = require("../config/db.config");
const productSchema = mongoose.Schema({
    name : String,
    price :Number,
    image : String,
    description : String,
    category : String,
    available : String
})

const ProductModel = mongoose.model("productTB",productSchema)
module.exports = ProductModel;
