const Product = require("../db/models/product");

const getAllProducts = async() => {
  try {
  return await Product.find({})
   } catch(e) { 
    console.log(e) 
  }
}

const createNewProduct = (newProduct) => {
    const producToInsert = new Product({
      ...newProduct,
      createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    });
    producToInsert.save()     
    .then(() => console.log("Product added"), 
        (err) => console.log(err)
    );
    return producToInsert;
}

module.exports = {getAllProducts, createNewProduct};