import { createContext, ReactNode, useState } from 'react'
import { Food } from '../models/food'
import { Order } from '../models/order'
import { Restaurant } from '../models/restaurant'

interface DeliveryContextType { 
  restaurants: Restaurant[] | null
  foods: Food[] | null
  order: Order | null
  cart: Order[] | null
  CallSetRestaurants: (data: Restaurant[]) => void
  CallSetFoods: (data: Food[]) => void
  HandleAddCart: (data: Order) => void
}

interface DeliveryProviderProps {
  children: ReactNode
}

export const DeliveryContext = createContext<DeliveryContextType>({} as DeliveryContextType)

export function DeliveryProvider({ children }: DeliveryProviderProps) {
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null)
  const [foods, setFoods] = useState<Food[] | null>(null)
  const [order, setOrder] = useState<Order | null>(null)
  const [cart, setCart] = useState<Order[] | null>(null)

  function CallSetRestaurants(data: Restaurant[]){
    setRestaurants(data)
  }

  function CallSetFoods(data: Food[]){
    setFoods(data)
  }

  function HandleAddCart(data: Order){
    setOrder(data)
    setCart((state) => [...state!, data])
  }

  return (
    <DeliveryContext.Provider value={{
      restaurants,
      foods,
      order,
      cart,
      CallSetFoods,
      CallSetRestaurants,
      HandleAddCart,
    }}
    >
      {children}
    </DeliveryContext.Provider>
  )
}
