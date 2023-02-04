import { createContext, ReactNode, useState } from 'react'
import { Food } from '../models/food'
import { Restaurant } from '../models/restaurant'
import { apiRestaurants } from '.././services/api'

interface DeliveryContextType {
  restaurants: Restaurant[] | null
  foods: Food[] | null
  CallSetFoods: (data: Food[]) => void
  CallSetRestaurants: (data: Restaurant[]) => void
  CreateNewRestaurants: (data: Restaurant) => void
}

interface DeliveryProviderProps {
  children: ReactNode
}

export const DeliveryContext = createContext<DeliveryContextType>(
  {} as DeliveryContextType,
)

export function DeliveryProvider({ children }: DeliveryProviderProps) {
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null)
  const [foods, setFoods] = useState<Food[] | null>(null)

  function CallSetRestaurants(data: Restaurant[]) {
    setRestaurants(data)
  }

  function CallSetFoods(data: Food[]) {
    setFoods(data)
  }

  async function CreateNewRestaurants(data: Restaurant) {
    const { url, nome, categoria, sobre, id } = data

    const response = await apiRestaurants.post('/restaurantes', {
      url,
      nome,
      categoria,
      avaliacao: 5,
      sobre,
      id,
    })

    setRestaurants((state) => [{ ...state }, response.data])
  }

  return (
    <DeliveryContext.Provider
      value={{
        restaurants,
        CallSetRestaurants,
        foods,
        CallSetFoods,
        CreateNewRestaurants,
      }}
    >
      {children}
    </DeliveryContext.Provider>
  )
}
