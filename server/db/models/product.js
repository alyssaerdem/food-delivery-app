const mongoose = require("mongoose");

// create a schema for product
const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    sizes: [String]
  });
  
// create a model with productSchema
module.exports = mongoose.model('Product', ProductSchema);


