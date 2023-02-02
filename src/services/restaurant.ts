import { Restaurant } from '../models/food'
import { apiRestaurants } from './api'

export async function fetchData() {
  const { data } = await apiRestaurants.get<Restaurant[]>('/restaurantes')

  return data
}
