import { useContext } from 'react'
import { Header } from '../../components/Header'
import { DeliveryContext } from '../../context/DeliveryContext'
import { Cards } from './components/Cards'
import { ContainerMyShopping, Products } from './styles'

export function Shopping() {
  const { requests } = useContext(DeliveryContext)

  return (
    <ContainerMyShopping>
      <Header icons="Shopping" />
      <Products>
        {requests.map((item) => {
          return <Cards key={item.id} id={item.product.idRestaurante!} />
        })}
      </Products>
    </ContainerMyShopping>
  )
}
