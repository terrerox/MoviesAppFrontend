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
  return httpClient.put('Movie/Update/' + movie.id, movie)
    .then(response => response)
}

movieService.add = (movie) => {
  return httpClient.post('Movie/Create', movie)
    .then(console.log)
    .catch(console.log)
}

movieService.delete = (id) => {
  return httpClient.delete(`Movie/Delete/${id}`)
    .then(console.log)
}

export default movieService