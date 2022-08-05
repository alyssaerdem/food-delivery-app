const Product = require("../db/models/product");

const getAllProducts = () => {
  Product.find({})
  .then((data, err) => {
          if (!err) {
              console.log(data + "data")
              return data;
          } else {
            return null;
              throw err;
          }
  }).catch(err => console.log(err));
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