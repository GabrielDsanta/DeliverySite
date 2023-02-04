import { useContext } from 'react'
import { DeliveryContext } from '../../context/DeliveryContext'
import { Food } from '../../models/food'
import {
  ContainerCardProductCard,
  ValueAndQuantity,
  Description,
} from './styles'

export function CardProductCart({ descricao, nome, valor }: Food) {
  const { CallRemoveProductCart } = useContext(DeliveryContext)

  function handleRemoveProductCart() {
    CallRemoveProductCart(nome)
  }
  return (
    <ContainerCardProductCard>
      <ValueAndQuantity>
        <p>1x {nome}</p>
        <p>{valor}</p>
      </ValueAndQuantity>
      <Description>{descricao}</Description>
      <button onClick={handleRemoveProductCart}>Remover</button>
    </ContainerCardProductCard>
  )
}
