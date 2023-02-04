import axios from 'axios'

export const apiRestaurants = axios.create({
  baseURL: 'https://apigenerator.dronahq.com/api/dstqgR3A',
})

export const apiFoods = axios.create({
  baseURL: 'https://apigenerator.dronahq.com/api/3yNrDssc',
})
