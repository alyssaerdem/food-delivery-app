import { setProducts } from "./reducers/productSlice";
import axios from "axios";

export function fetchProducts() {
    return async function fetchProductThunk(dispatch, getState) {
      const response = await axios.get("/api/products")
      console.log(response)
      dispatch(setProducts(response.data.data))
    }
}

export function addProduct(data) {
  console.log(data)
  data = JSON.stringify(data)
  console.log(data)
    return async function addProductThunk(dispatch, getState) {
      const response = await axios.post("/api/products", data);
      console.log(response, response.data)
  }
} 


