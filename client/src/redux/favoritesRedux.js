import { createSlice, current } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        products: []
    },
    reducers: {
        addToFavorites: (state, action) => {
            const item = state.products.find(item => item.id === action.payload.id)

            if (!item) {
                state.products = [...state.products, action.payload]
                toast.success("Added to Wishlist")
            }
        },
        removeToFavorites: (state, action) => {
            state.products = state.products.filter(item => item.id !== action.payload.id)
            toast.info("Removed from Wishlist")
        },
        resetFavorites: (state, action) => {
            state.products = []
            toast.info("Wishlist cleared")
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToFavorites, removeToFavorites, resetFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer
