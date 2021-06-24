var mongoose = require("mongoose");

var productSchema = mongoose.Schema({
  name: String,
  price: Number,
  discription: String,
  rating: Number,
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
