import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../../utils/formatters'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'

const Header = () => {
  const itensNoCarrinho = useSelector((state: RootState) => state.carrinho)
  const favoritos = useSelector((state: RootState) => state.favoritos)

  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="Cesta de Compras" />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
