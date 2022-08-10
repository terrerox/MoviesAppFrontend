import { httpClient } from '../helpers'
const movieService = {}

movieService.getAll = () => {
  return httpClient.get('Movie/Get')
    .then(response => response)
}

movieService.getById = (id) => {
  return httpClient.get(`Movie/GetByIdInfo/${id}`)
    .then(response => response)
}


movieService.update = (movie) => {
  return httpClient.put('movies', movie)
    .then(response => response.data.data)
}

movieService.add = (movie) => {
  return httpClient.post('movies', movie)
    .then(response => response.data.data)
}

movieService.delete = (id) => {
  return httpClient.delete(`movies/${id}`)
    .then(response => response.data.data)
}

export default movieService