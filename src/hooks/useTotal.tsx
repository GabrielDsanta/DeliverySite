import { useContext } from 'react'
import { DeliveryContext } from '../context/DeliveryContext'

export function useTotal() {
  const { cart } = useContext(DeliveryContext)

  if (cart?.length! > 0) {
    const total = cart!.reduce(
      (acc, product) => {
        acc.total += product.product.valor
        return acc
      },
      {
        total: 0,
      },
    )

    return total
  }
}
