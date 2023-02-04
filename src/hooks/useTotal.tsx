import { useContext } from 'react'
import { DeliveryContext } from '../context/DeliveryContext'

export function useTotal() {
  const { productsCarts } = useContext(DeliveryContext)

  const total = productsCarts.reduce(
    (acc, product) => {
      acc.total += product.valor
      return acc
    },
    {
      total: 0,
    },
  )

  return total
}
