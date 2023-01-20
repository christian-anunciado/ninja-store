import { createSlice, current } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: []
    },
    reducers: {
        addToCart: (state, action) => {
            const item = state.products.find(item => item.id === action.payload.id)

            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.products = [...state.products, action.payload]
            }
        },
        removeToCart: (state, action) => {
            state.products = state.products.filter(item => item.id !== action.payload.id)
        },
        resetCart: (state, action) => {
            state.products = []
        },
        updateQuantity: (state, action) => {
            const item = state.products.find(item => item.id === action.payload.id)

            if (item) {
                item.quantity = action.payload.quantity;
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeToCart, resetCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer
