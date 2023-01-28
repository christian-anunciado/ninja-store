import { configureStore } from '@reduxjs/toolkit'
import cartRedux from './cartRedux'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import favoritesRedux from './favoritesRedux'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const cartReducer = persistReducer(persistConfig, cartRedux)
const favoritesReducer = persistReducer(persistConfig, favoritesRedux)

export const store = configureStore({
    reducer: { cart: cartReducer, favorites: favoritesReducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export let persistor = persistStore(store)
