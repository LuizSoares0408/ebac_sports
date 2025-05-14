// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit'
import produtosReducer from '../reducers/produtos.Reducer'
import carrinhoReducer from '../reducers/carrinhoReducer'
import favoritosReducer from '../reducers/favoritosReducer'
import { api } from '../services/api'

const store = configureStore({
  reducer: {
    produtos: produtosReducer,
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer, // <--- ADICIONE AQUI
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
