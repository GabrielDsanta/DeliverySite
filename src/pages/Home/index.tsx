import { useContext, useEffect } from 'react'
import { CardList } from './components/CardList'
import { Filter } from './components/Filter'
import { DeliveryContext } from '../../context/DeliveryContext'
import { fetchDataRestaurant } from '../../services/restaurant'
import { ContainerHome, ContainerRestaurants } from './styles'
import { Header } from '../../components/Header'

export function Home() {
  const { CallSetRestaurants, restaurants } = useContext(DeliveryContext)

  useEffect(() => {
    ; (async () => {
      const data = await fetchDataRestaurant()
      CallSetRestaurants(data)
    })()
  }, [CallSetRestaurants])

  return (
    <ContainerHome>
      <Header icons="Home" />
      <Filter />
      <h1>Restaurantes</h1>

      <ContainerRestaurants>
        <CardList restaurants={restaurants!} />
      </ContainerRestaurants>
    </ContainerHome>
  )
}
