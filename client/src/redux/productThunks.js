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
  let axiosConfig = {
    headers: {
        'Content-Type' : 'application/json; charset=UTF-8',
    }
  };
  data = JSON.stringify(data)
  console.log(data)
    return async function addProductThunk(dispatch, getState) {
      const response = await axios.post("/api/products", data, axiosConfig);
      console.log(response)
  }
}

export function deleteProduct(id) {
    console.log(id)
      return async function deleteProductThunk(dispatch, getState) {
        const response = await axios.delete("/api/products", {data: {id: id}});
        console.log(response)
    }
} 


