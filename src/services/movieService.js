import { httpClient } from '../helpers'
const movieService = {}

movieService.getAll = () => {
  return httpClient.get('movie')
    .then(response => response.data.data)
}

movieService.update = (movie) => {
  return httpClient.put('movie', movie)
    .then(response => response.data.data)
}

movieService.add = (movie) => {
  return httpClient.post('movie', movie)
    .then(response => response.data.data)
}

movieService.delete = (id) => {
  return httpClient.delete(`movie/${id}`)
    .then(response => response.data.data)
}

export default movieService