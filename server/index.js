const express = require('express');
//const router = express.Router();
const PORT = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const productRouter = require("./routes/productRoutes");
const app = express();
const DB = require("./db/index");

app.use(bodyParser.json());
app.use("/api/products", productRouter);
DB.connectDB();

/* app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  }); */

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});