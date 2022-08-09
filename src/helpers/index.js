import axios from 'axios'

export const httpClient = axios.create({
  baseURL: 'https://localhost:5001/api/v1/'
})

export const httpAccount = axios.create({
  baseURL: 'https://localhost:5001/api/Account/'
})