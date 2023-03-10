import { useContext } from 'react'
import { DeliveryContext } from '../../context/DeliveryContext'
import { Order } from '../../models/order'
import { priceFormatter } from '../../utils/formatter'
import {
  ContainerCardProductCard,
  ValueAndQuantity,
  Description,
} from './styles'

export function CardProductCart({ amount, id, product }: Order) {
  const { CallRemoveProductCart } = useContext(DeliveryContext)

  function handleRemoveProductCart() {
    CallRemoveProductCart(id)
  }

  return (
    <ContainerCardProductCard>
      <ValueAndQuantity>
        <p>1x {product.nome}</p>
        <p>{priceFormatter.format(product.valor)}</p>
      </ValueAndQuantity>
      <Description>{product.descricao}</Description>
      <button onClick={handleRemoveProductCart}>Remover</button>
    </ContainerCardProductCard>
  )
}
