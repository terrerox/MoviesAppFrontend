import axios from 'axios'
import { authHeader } from './authHeader'

export const httpClient = axios.create({
  baseURL: 'https://localhost:5001/api/v1/'
})

httpClient.interceptors.request.use(config => {
  config.headers = authHeader()
  return config
})

export const httpAccount = axios.create({
  baseURL: 'https://localhost:5001/api/Account/'
})