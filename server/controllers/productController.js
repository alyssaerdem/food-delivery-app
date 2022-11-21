const productService = require("../services/productService");

const getAllProducts = async (req, res) => {
  const allProducts = await productService.getAllProducts();
  console.log("here");
  console.log(allProducts);
  res.send({ status: "OK", data: allProducts });
};

const createNewProduct = (req, res) => {
  const { body } = req;
  if (!body.name || !body.description || !body.sizes || !body.image) {
    return;
  }

  const newProduct = {
    name: body.name,
    image: body.image,
    description: body.description,
    sizes: body.sizes,
  };

  console.log(newProduct);

  const createdProduct = productService.createNewProduct(newProduct);
  res.status(201).send({ status: "OK", data: createdProduct });
};

const deleteProduct = async (req, res) => {
  const productID = req.body.id;
  const deletedProduct = await productService.deleteProduct(productID);
  console.log(deletedProduct);
  res.status(201).send({ status: "OK", data: deletedProduct });
};

module.exports = { getAllProducts, createNewProduct, deleteProduct };
