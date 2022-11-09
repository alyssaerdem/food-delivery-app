import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
    value: 0,
    selectedProducts: {},
    productId: 0
    },

    reducers: {
        increment: state => {
            state.value += 1
          },
          decrement: state => {
            state.value -= 1
          },
          addToCart: (state, action) => {
            console.log(action.payload)
            state.selectedProducts[state.productId]= action.payload
            state.productId++
          },
          removeFromCart: (state, action) => {
            console.log(action.payload)
            delete state.selectedProducts[action.payload]
          }
    }
})
export const selectCount = state => state.cart.value
export const selectProducts = state => state.cart.selectedProducts
export const { increment, decrement, addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer