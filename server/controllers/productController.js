const productService = require("../services/productService");

const getAllProducts = (req, res) => {
    const allProducts = productService.getAllProducts();        // not waiting for promise to resolve?
    console.log("here")
    console.log(allProducts);
    res.send({ status: "OK", data: allProducts});
}

const createNewProduct = (req, res) => {

    const { body } = req;
    if (
        !body.name ||
        !body.description ||
        !body.sizes
    ) {
    return;
    }
 
    const newProduct = {
        name: body.name,
        description: body.description,
        sizes: body.sizes
    };

    const createdProduct = productService.createNewProduct(newProduct);
    res.status(201).send({ status: "OK", data: createdProduct });
}

module.exports = {getAllProducts, createNewProduct}