const Product = require("../db/models/product");

const getAllProducts = async() => {
  try {
  return await Product.find({})
   } catch(e) { 
    console.log(e) 
  }
}

const createNewProduct = (newProduct) => {
    const productToInsert = new Product({
      ...newProduct,
      createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    });
    productToInsert.save()     
    .then(() => console.log("Product added"), 
        (err) => console.log(err)
    );
    return productToInsert;
}

const deleteProduct = async (productID) => {
  console.log(productID)
  try {
    await Product.deleteOne({ _id: productID });
    return "Deleted successfully!";
  } catch (error) {
    return "There was a Server Side Error!";
  }
}

module.exports = {getAllProducts, createNewProduct, deleteProduct};