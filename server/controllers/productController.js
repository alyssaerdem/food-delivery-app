const productService = require("../services/productService");

const getAllProducts = async (req, res) => {
  const allProducts = await productService.getAllProducts();
  console.log("here");
  console.log(allProducts);
  res.send({ status: "OK", data: allProducts });
};

const createNewProduct = (req, res) => {
  console.log(req.file);
  console.log(req.body);

  const body = req.body;
  if (!body.name || !body.description || !body.sizes || !req.file) {
    return;
  }

  const newProduct = {
    name: body.name,
    image: req.file.path,
    description: body.description,
    sizes: JSON.parse(req.body.sizes),
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
