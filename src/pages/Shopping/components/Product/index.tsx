import { useContext } from 'react'
import { DeliveryContext } from '../../../../context/DeliveryContext'
import { v4 } from 'uuid'
import { ContainerProduct } from './styles'

interface ProductProps {
  id: string
}

export function Product({ id }: ProductProps) {
  const { cart } = useContext(DeliveryContext)

  const products = cart.filter((item) => item.product.idRestaurante === id)

  return (
    <ContainerProduct>
      {products.map((item) => {
        return <h1 key={v4()}>{item.product.nome}</h1>
      })}
    </ContainerProduct>
  )
}
