import { Star } from 'phosphor-react'
import { ContainerProducts, RestaurantInformation, ProductList } from './styles'
import { useLocation } from 'react-router-dom'
import { Restaurant } from '../../models/restaurant'
import { CardListProducts } from './components/CardListProducts'
import { useContext, useEffect } from 'react'
import { DeliveryContext } from '../../context/DeliveryContext'
import { fetchDataFood } from '../../services/foods'
import { Header } from '../../components/Header'

export function Products() {
  const location = useLocation()
  const state = location.state as Restaurant
  const { avaliacao, nome, url, id } = state

  const { CallSetFoods, foods } = useContext(DeliveryContext)

  useEffect(() => {
    ; (async () => {
      const data = await fetchDataFood()
      const filteredList = data.filter((item) => {
        return item.idRestaurante === id
      })

      CallSetFoods(filteredList)
    })()
  }, [CallSetFoods, id])

  return (
    <ContainerProducts>
      <Header icons="Product" />
      <RestaurantInformation>
        <img src={url} alt="" />
        <h1>{nome}</h1>
        <span>
          <Star size={42} color="#D2F200" weight="fill" />
          {avaliacao}
        </span>
      </RestaurantInformation>
      <h1>Produtos</h1>

      <ProductList>
        <CardListProducts foods={foods} />
      </ProductList>
    </ContainerProducts>
  )
}
