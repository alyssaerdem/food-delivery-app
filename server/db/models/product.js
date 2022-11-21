const mongoose = require("mongoose");

// create a schema for product
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  sizes: {
    type: Object,
    String: {
      checked: Boolean,
      price: Number,
    },
    required: true,
  },
});

// create a model with productSchema
module.exports = mongoose.model("Product", ProductSchema);
