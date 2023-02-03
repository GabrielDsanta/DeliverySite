import { Star } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { Restaurant } from '../../../.././models/restaurant'
import { ContainerCard, RestaurantInformation } from './styles'

export function Card({
  avaliacao,
  categoria,
  nome,
  sobre,
  url,
  id,
}: Restaurant) {
  const navigate = useNavigate()

  function HandleLookUpRestaurant() {
    navigate(`/products`, {
      state: {
        id,
        avaliacao,
        categoria,
        nome,
        sobre,
        url,
      },
    })
  }

  return (
    <ContainerCard onClick={HandleLookUpRestaurant}>
      <div>
        <img src={url} alt="" />
      </div>
      <RestaurantInformation>
        <h1>{nome}</h1>
        <div>
          <span>
            <Star size={16} color="#D2F200" weight="fill" />
            <strong>{avaliacao}</strong> - {categoria}
          </span>
        </div>
        <p>{sobre}</p>
      </RestaurantInformation>
    </ContainerCard>
  )
}
