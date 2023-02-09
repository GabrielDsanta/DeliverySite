import { Food } from './food'

export interface Order {
  id: string
  product: Food
  amount: number
}
