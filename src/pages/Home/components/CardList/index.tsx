import { Card } from '../Card'
import { Container } from './styles'
import { Restaurant } from '../../../.././models/restaurant'

interface CardListProps {
  restaurants: Restaurant[] | null
}

export function CardList({ restaurants }: CardListProps) {
  return (
    <Container>
      {restaurants?.length! > 0 &&
        restaurants!.map((item) => {
          return (
            <Card
              avaliacao={item.avaliacao}
              categoria={item.categoria}
              id={item.id}
              nome={item.nome}
              sobre={item.nome}
              url={item.url}
              key={item.id}
            />
          )
        })}
    </Container>
  )
}
