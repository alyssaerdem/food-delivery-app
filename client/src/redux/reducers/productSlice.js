import {createSlice} from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'products',
    initialState: {
    products: []
    },

    reducers: {
          setProducts: (state, action) => {
            console.log(action.payload)
            state.products = action.payload
          },
    }
})
export const selectProducts = state => state.product.products
export const { setProducts, addProduct, removeProduct } = productSlice.actions
export default productSlice.reducer