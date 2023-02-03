import { Food } from '../../../../models/food'
import {
  ContainerCardProduct,
  ProductInformation,
  ValueAndQuantity,
} from './styles'


export function CardProduct({ descricao, nome, valor, valorPromocional, url }: Food) {
  return (
    <ContainerCardProduct>
      <ProductInformation>
        <h3>{nome}</h3>
        <p>{descricao}</p>
        <ValueAndQuantity>
          <p>{valor}</p>
          <button>

          </button>
        </ValueAndQuantity>
      </ProductInformation>
      <img src={url} alt="" />
    </ContainerCardProduct>
  )
}
