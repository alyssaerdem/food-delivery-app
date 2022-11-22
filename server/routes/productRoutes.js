const express = require("express");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, "./public/uploads/");
  },
  filename: function (request, file, callback) {
    console.log(file);
    callback(null, file.originalname);
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

const productController = require("../controllers/productController");

const router = express.Router();

router.get("/", productController.getAllProducts);
router.post("/", upload.single("image"), productController.createNewProduct);
router.delete("/", productController.deleteProduct);

module.exports = router;
