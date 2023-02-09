import { useContext } from 'react'
import { Header } from '../../components/Header'
import { DeliveryContext } from '../../context/DeliveryContext'
import { Cards } from './components/Cards'
import { ContainerMyShopping, Products } from './styles'

export function Shopping() {
  const { cart } = useContext(DeliveryContext)

  return (
    <ContainerMyShopping>
      <Header icons="Shopping" />
      <Products>
        {cart.map((item) => {
          return <Cards key={item.id} id={item.product.idRestaurante!} />
        })}
      </Products>
    </ContainerMyShopping>
  )
}
