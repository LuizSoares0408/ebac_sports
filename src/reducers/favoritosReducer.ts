import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../services/api'

const initialState: Produto[] = []

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produtoExistente = state.find((p) => p.id === action.payload.id)
      if (!produtoExistente) {
        state.push(action.payload)
      }
    },
    desfavoritar: (state, action: PayloadAction<number>) => {
      return state.filter((produto) => produto.id !== action.payload)
    }
  }
})

export const { favoritar, desfavoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
