import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../services/api'

const initialState: Produto[] = []

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const produtoExistente = state.find((p) => p.id === action.payload.id)
      if (!produtoExistente) {
        state.push(action.payload)
      } else {
        alert('Item já adicionado')
      }
    },
    removerDoCarrinho: (state, action: PayloadAction<number>) => {
      return state.filter(
        (produto: { id: number }) => produto.id !== action.payload
      )
    }
    // Outras ações relacionadas ao carrinho, se necessário
  }
})

export const { adicionarAoCarrinho, removerDoCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
