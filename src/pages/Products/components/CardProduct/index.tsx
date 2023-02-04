import { useContext } from 'react'
import { DeliveryContext } from '../../../../context/DeliveryContext'
import { Food } from '../../../../models/food'
import {
  ContainerCardProduct,
  ProductInformation,
  ValueAndQuantity,
} from './styles'

export function CardProduct({
  descricao,
  nome,
  valor,
  valorPromocional,
  url,
}: Food) {
  const { CallSetProductsCart } = useContext(DeliveryContext)

  function handleAddProductCart() {
    const data = {
      descricao,
      nome,
      valor,
      url,
    }
    CallSetProductsCart(data)
  }
  return (
    <ContainerCardProduct>
      <ProductInformation>
        <h3>{nome}</h3>
        <p>{descricao}</p>
        <ValueAndQuantity>
          <p>{valor}</p>
          <button onClick={handleAddProductCart}>Comprar</button>
        </ValueAndQuantity>
      </ProductInformation>
      <img src={url} alt="" />
    </ContainerCardProduct>
  )
}
