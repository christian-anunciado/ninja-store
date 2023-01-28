import { createSlice, current } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

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
                toast.success('Updated to Cart')
            } else {
                state.products = [...state.products, action.payload]
                toast.success('Added to Cart')
            }
        },
        removeToCart: (state, action) => {
            state.products = state.products.filter(item => item.id !== action.payload.id)
            toast.info('Removed from Cart')
        },
        resetCart: (state, action) => {
            state.products = []
            toast.info('Cart cleared')
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
