import React from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { adicionarAoCarrinho } from './reducers/carrinhoReducer'
import {
  favoritar as favoritarAction,
  desfavoritar
} from './reducers/favoritosReducer'
import { RootState } from './store/store'
import { useGetProdutosQuery, Produto } from './services/api' // Importe o tipo Produto de onde ele está definido

function App() {
  const { data: produtos, isLoading, isError } = useGetProdutosQuery()
  const favoritos = useSelector((state: RootState) => state.favoritos)
  const dispatch = useDispatch()

  function handleAdicionarAoCarrinho(produto: Produto) {
    dispatch(adicionarAoCarrinho(produto))
  }

  function handleFavoritar(produto: Produto) {
    const jaFavoritado = favoritos.find((p: Produto) => p.id === produto.id)
    if (jaFavoritado) {
      dispatch(desfavoritar(produto.id))
    } else {
      dispatch(favoritarAction(produto))
    }
  }

  if (isLoading) {
    return <div>Carregando produtos...</div>
  }

  if (isError) {
    return <div>Erro ao carregar os produtos.</div>
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos
          produtos={produtos || []}
          handleFavoritar={handleFavoritar} // Passa a função para Produtos
          handleAdicionarAoCarrinho={handleAdicionarAoCarrinho} // Passa a função para Produtos
        />
      </div>
    </>
  )
}

export default App
