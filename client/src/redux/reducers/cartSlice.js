import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
    value: 0,
    selectedProducts: [],
    },

    reducers: {
        increment: state => {
            state.value += 1
          },
          decrement: state => {
            state.value -= 1
          },
          addProduct: (state, action) => {
            console.log(action.payload)
            state.selectedProducts.push(action.payload)
          }
    }
})
export const selectCount = state => state.cart.value
export const selectProducts = state => state.cart.selectedProducts
export const { increment, decrement, addProduct } = cartSlice.actions
export default cartSlice.reducer