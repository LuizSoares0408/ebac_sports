import React from 'react'
import type { Produto } from '../services/api'
import ProdutoComponent from '../components/Produto'
import * as S from './styles'

type Props = {
  produtos: Produto[]
  handleFavoritar: (produto: Produto) => void
  handleAdicionarAoCarrinho: (produto: Produto) => void
}

const Produtos = ({
  produtos,
  handleFavoritar,
  handleAdicionarAoCarrinho
}: Props) => {
  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <ProdutoComponent
            key={produto.id}
            produto={produto}
            handleFavoritar={handleFavoritar}
            handleAdicionarAoCarrinho={handleAdicionarAoCarrinho}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default Produtos
