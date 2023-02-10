import { createContext, ReactNode, useEffect, useState } from 'react'
import { Food } from '../models/food'
import { Restaurant } from '../models/restaurant'
import { apiRestaurants } from '.././services/api'
import { Order } from '../models/order'

const localStorageRequests =
  localStorage.getItem('Requests') !== null
    ? JSON.parse(localStorage.getItem('Requests')!)
    : []

interface DeliveryContextType {
  restaurants: Restaurant[] | null
  foods: Food[] | null
  order: Order | null
  cart: Order[]
  filterCategory: string
  rate: string
  searchFilter: string
  requests: Order[]
  CallSetFoods: (data: Food[]) => void
  CallSetRestaurants: (data: Restaurant[]) => void
  CreateNewRestaurants: (data: Restaurant) => void
  CallRemoveProductCart: (data: string) => void
  HandleAddCart: (data: Order) => void
  CallSetFilter: (data: string) => void
  CallSetRate: (data: string) => void
  CallSetDefaultValueOrder: () => void
  CallSetSearchFilter: (data: string) => void
}

interface DeliveryProviderProps {
  children: ReactNode
}

export const DeliveryContext = createContext<DeliveryContextType>(
  {} as DeliveryContextType,
)

export function DeliveryProvider({ children }: DeliveryProviderProps) {
  const [foods, setFoods] = useState<Food[]>([])
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [order, setOrder] = useState<Order | null>(null)
  const [cart, setCart] = useState<Order[]>([])
  const [filterCategory, setFilterCategory] = useState('')
  const [rate, setRate] = useState('')
  const [searchFilter, setSearchFilter] = useState('')
  const [requests, setRequests] = useState<Order[]>(localStorageRequests)

  function CallSetRestaurants(data: Restaurant[]) {
    setRestaurants(data)
  }
  function CallSetFoods(data: Food[]) {
    setFoods(data)
  }
  function CallRemoveProductCart(data: string) {
    setCart(cart.filter((item) => item.id !== data))
  }
  function HandleAddCart(data: Order) {
    setOrder(data)
    setCart((state) => [...state!, data])
  }

  function CallSetFilter(data: string) {
    setFilterCategory(data)
  }

  function CallSetRate(data: string) {
    setRate(data)
  }

  function CallSetSearchFilter(data: string) {
    setSearchFilter(data)
  }

  function CallSetDefaultValueOrder() {
    setRequests((state) => [...state, ...cart])
    setCart([])
  }

  async function CreateNewRestaurants(data: Restaurant) {
    const { url, categoria, id, nome, sobre, avaliacao } = data
    const response = await apiRestaurants.post('/restaurantes', {
      url,
      nome,
      categoria,
      avaliacao,
      sobre,
      id,
    })

    setRestaurants((state) => [...state, response.data])
  }

  useEffect(() => {
    window.localStorage.setItem('Requests', JSON.stringify(requests))
  }, [requests])

  return (
    <DeliveryContext.Provider
      value={{
        foods,
        restaurants,
        order,
        cart,
        rate,
        requests,
        filterCategory,
        CallSetFoods,
        CallSetRestaurants,
        CreateNewRestaurants,
        CallRemoveProductCart,
        HandleAddCart,
        CallSetFilter,
        CallSetRate,
        searchFilter,
        CallSetDefaultValueOrder,
        CallSetSearchFilter,
      }}
    >
      {children}
    </DeliveryContext.Provider>
  )
}
