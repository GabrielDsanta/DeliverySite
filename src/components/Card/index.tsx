import { Star } from 'phosphor-react'
import { Restaurant } from '../../models/restaurant'
import { ContainerCard, RestaurantInformation } from './styles'

export function Card({ avaliacao, categoria, nome, sobre, url }: Restaurant) {
  return (
    <ContainerCard>
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
