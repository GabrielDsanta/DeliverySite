import { useContext } from 'react'
import { CardProductCart } from '../../components/CardProductCart'
import { DeliveryContext } from '../../context/DeliveryContext'
import { ContainerMyShopping, Products } from './styles'

export function Shopping() {
  const { cart } = useContext(DeliveryContext)
  return (
    <ContainerMyShopping>
      <Products>
        {cart?.length! > 0 &&
          cart!.map((item) => {
            return (
              <CardProductCart
                key={item.id}
                amount={item.amount}
                id={item.id}
                product={item.product}
              />
            )
          })}
      </Products>
    </ContainerMyShopping>
  )
}
