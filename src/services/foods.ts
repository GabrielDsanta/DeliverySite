import { Food } from '../models/food'
import { apiFoods } from './api'

export async function fetchDataFood() {
  const { data } = await apiFoods.get<Food[]>('/produtos')

  return data
}
