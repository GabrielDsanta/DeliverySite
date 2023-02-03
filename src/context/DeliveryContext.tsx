import { createContext, ReactNode, useState } from 'react'
import { Food } from '../models/food'
import { Restaurant } from '../models/restaurant'

interface DeliveryContextType {
  restaurants: Restaurant[] | null
  foods: Food[] | null
  CallSetFoods: (data: Food[]) => void
  CallSetRestaurants: (data: Restaurant[]) => void
}

interface DeliveryProviderProps {
  children: ReactNode
}

export const DeliveryContext = createContext<DeliveryContextType>({} as DeliveryContextType)

export function DeliveryProvider({ children }: DeliveryProviderProps) {
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null)
  const [foods, setFoods] = useState<Food[] | null>(null)

  function CallSetRestaurants(data: Restaurant[]) {
    setRestaurants(data)
  }

  function CallSetFoods(data: Food[]) {
    setFoods(data)
  }

  return (
    <DeliveryContext.Provider value={{
      restaurants,
      CallSetRestaurants,
      foods,
      CallSetFoods
    }}
    >
      {children}
    </DeliveryContext.Provider>
  )
}
