import { Restaurant } from '../models/restaurant'
import { apiRestaurants } from './api'

export async function fetchDataRestaurant() {
  const { data } = await apiRestaurants.get<Restaurant[]>('/restaurantes')

  return data
}
