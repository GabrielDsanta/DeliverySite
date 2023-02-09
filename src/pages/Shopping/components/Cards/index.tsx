import { ContainerCards, Information, Products } from './styles'
import { useContext } from 'react'
import { DeliveryContext } from '../../../../context/DeliveryContext'
import { Product } from '../Product'

interface CardsProps {
  id: string
}

export function Cards({ id }: CardsProps) {
  const { restaurants } = useContext(DeliveryContext)
  
  const restaurant = restaurants?.find((item) => item.id === id)

  return (
    <ContainerCards>
      <Information>
        <img src={restaurant?.url} alt="" width={200} height={120} />
        <h3>{restaurant?.nome}</h3>
      </Information>
      <Products>
        <Product id={id} />
      </Products>
    </ContainerCards>
  )
}
