import { createSlice } from '@reduxjs/toolkit'
import { Produto } from '../services/api'

const initialState: Produto[] = []

const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {
    setProdutos: (state, action: { payload: Produto[] }) => {
      return action.payload
    }
  }
})

export const { setProdutos } = produtosSlice.actions
export default produtosSlice.reducer
