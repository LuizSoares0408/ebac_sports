import React from 'react'
import * as S from './styles'
import { paraReal } from '../../utils/formatters'
import { useDispatch, useSelector } from 'react-redux'
import type { Produto } from '../../services/api'
import { RootState } from '../../store/store' // Importe o RootState

type Props = {
  produto: Produto
  handleFavoritar: (produto: Produto) => void
  handleAdicionarAoCarrinho: (produto: Produto) => void
}

const ProdutoComponent = ({
  produto,
  handleFavoritar,
  handleAdicionarAoCarrinho
}: Props) => {
  const dispatch = useDispatch()
  const favoritos = useSelector((state: RootState) => state.favoritos) // Use RootState
  const estaNosFavoritos = favoritos.some(
    (fav: Produto) => fav.id === produto.id
  )

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => handleFavoritar(produto)} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar
        onClick={() => handleAdicionarAoCarrinho(produto)}
        type="button"
      >
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
