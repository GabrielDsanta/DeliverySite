import { createContext, ReactNode, useState } from 'react'
import { Restaurant } from '../models/restaurant'

interface DeliveryContextType { 
  restaurants: Restaurant[] | null
  CallSetRestaurants: (data: Restaurant[]) => void
}

interface DeliveryProviderProps {
  children: ReactNode
}

export const DeliveryContext = createContext<DeliveryContextType>({} as DeliveryContextType)

export function DeliveryProvider({ children }: DeliveryProviderProps) {
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null)

  function CallSetRestaurants(data: Restaurant[]){
    setRestaurants(data)
  }

  return (
    <DeliveryContext.Provider value={{
      restaurants,
      CallSetRestaurants
    }}
    >
      {children}
    </DeliveryContext.Provider>
  )
}
