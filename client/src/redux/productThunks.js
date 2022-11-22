import { setProducts } from "./reducers/productSlice";
import axios from "axios";

export function fetchProducts() {
  return async function fetchProductThunk(dispatch, getState) {
    const response = await axios.get("/api/products");
    console.log(response);
    dispatch(setProducts(response.data.data));
  };
}

export function addProduct(data) {
  console.log(data);
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("image", data.image);
  formData.append("description", data.description);
  formData.append("sizes", JSON.stringify(data.sizes));
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  // data = JSON.stringify(data);
  console.log(formData);
  return async function addProductThunk(dispatch, getState) {
    const response = await axios.post("/api/products", formData, config);
    console.log(response);
  };
}

export function deleteProduct(id) {
  console.log(id);
  return async function deleteProductThunk(dispatch, getState) {
    const response = await axios.delete("/api/products", { data: { id: id } });
    console.log(response);
  };
}
