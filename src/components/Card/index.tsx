import { Star } from 'phosphor-react'
import logo from '../.././assets/img- logo.svg'
import { ContainerCard, RestaurantInformation } from './styles'

export function Card() {
  return (
    <ContainerCard>
      <img src={logo} alt="" />
      <RestaurantInformation>
        <h1>Restaurante 1</h1>
        <div>
          <span>
            <Star size={16} color="#D2F200" weight="fill" />
            <strong>5,0 </strong> - Lanches
          </span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere
          sem eget semper egestas.
        </p>
      </RestaurantInformation>
    </ContainerCard>
  )
}
