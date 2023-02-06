import { Card } from '../Card'
import { Container } from './styles'
import { Restaurant } from '../../../.././models/restaurant'
import { useContext, useEffect, useState } from 'react'
import { DeliveryContext } from '../../../../context/DeliveryContext'

interface CardListProps {
  restaurants: Restaurant[] | null
}

export function CardList({ restaurants }: CardListProps) {
  const { filterCategory, rate, searchFilter } = useContext(DeliveryContext)
  const [filteredList, setFilteredList] = useState<Restaurant[]>([])

  useEffect(() => {

    if (filterCategory !== '') {
      const filteredList = restaurants!.filter((item) => {
        return item.categoria === filterCategory
      })

      setFilteredList(filteredList)
    }

    if (rate !== '') {
      restaurants!.filter((item) => {

        if (rate === 'Melhor Avalição') {
          const growingList = restaurants!.sort((a, b) => b.avaliacao - a.avaliacao)
          return setFilteredList(growingList)
        }

        else {
          const descendingList = restaurants!.sort((a, b) => a.avaliacao - b.avaliacao)
          return setFilteredList(descendingList)
        }

      })
    }

    if (searchFilter.length > 0) {
      const searchFilterList: Restaurant[] = restaurants!.filter((item) => {
        if (item.nome.includes(searchFilter)) {
          return (
            <Card
              avaliacao={item.avaliacao}
              categoria={item.categoria}
              id={item.id}
              nome={item.nome}
              sobre={item.sobre}
              url={item.url}
              key={item.id}
            />
          )
        }
      })
      return setFilteredList(searchFilterList)
    }

    if(searchFilter.length === 0){
      setFilteredList([])
    }

  }, [filterCategory, rate, searchFilter])

  return (
    <Container>
      {filteredList!.length === 0 ? (
        restaurants?.map((item) => {
          return (
            <Card
              avaliacao={item.avaliacao}
              categoria={item.categoria}
              id={item.id}
              nome={item.nome}
              sobre={item.sobre}
              url={item.url}
              key={item.id}
            />
          )
        })
      ) :
        (
          filteredList!.map((item) => {
            return (
              <Card
                avaliacao={item.avaliacao}
                categoria={item.categoria}
                id={item.id}
                nome={item.nome}
                sobre={item.sobre}
                url={item.url}
                key={item.id}
              />
            )
          })
        )
      }
    </Container>
  )
}
