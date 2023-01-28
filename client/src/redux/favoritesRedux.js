import { createSlice, current } from '@reduxjs/toolkit'

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
            }
        },
        removeToFavorites: (state, action) => {
            state.products = state.products.filter(item => item.id !== action.payload.id)
        },
        resetFavorites: (state, action) => {
            state.products = []
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToFavorites, removeToFavorites, resetFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer
