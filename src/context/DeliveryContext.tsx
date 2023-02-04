import { createContext, ReactNode, useState } from 'react'
import { Food } from '../models/food'
import { Restaurant } from '../models/restaurant'
import { apiRestaurants } from '.././services/api'

interface DeliveryContextType {
  restaurants: Restaurant[] | null
  foods: Food[] | null
  productsCarts: Food[]
  CallSetFoods: (data: Food[]) => void
  CallSetProductsCart: (data: Food) => void
  CallSetRestaurants: (data: Restaurant[]) => void
  CreateNewRestaurants: (data: Restaurant) => void
  CallRemoveProductCart: (data: string) => void
}

interface DeliveryProviderProps {
  children: ReactNode
}

export const DeliveryContext = createContext<DeliveryContextType>(
  {} as DeliveryContextType,
)

export function DeliveryProvider({ children }: DeliveryProviderProps) {
  const [foods, setFoods] = useState<Food[]>([])
  const [productsCarts, setProductsCarts] = useState<Food[]>([])
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  function CallSetRestaurants(data: Restaurant[]) {
    setRestaurants(data)
  }

  function CallSetFoods(data: Food[]) {
    setFoods(data)
  }
  function CallSetProductsCart(data: Food) {
    setProductsCarts((state) => [...state, data])
  }
  function CallRemoveProductCart(data: string) {
    setProductsCarts(productsCarts.filter((item) => item.nome !== data))
  }
  async function CreateNewRestaurants(data: Restaurant) {
    const { url, categoria, id, nome, sobre } = data
    const response = await apiRestaurants.post('/restaurantes', {
      url,
      nome,
      categoria,
      avaliacao: 5,
      sobre,
      id,
    })

    setRestaurants((state) => [...state, response.data])
  }

  return (
    <DeliveryContext.Provider
      value={{
        foods,
        restaurants,
        productsCarts,
        CallSetFoods,
        CallSetRestaurants,
        CallSetProductsCart,
        CreateNewRestaurants,
        CallRemoveProductCart,
      }}
    >
      {children}
    </DeliveryContext.Provider>
  )
}
