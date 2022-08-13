import { httpClient } from '../helpers'
const movieCategoryService = {}

movieCategoryService.getAll = () => {
  return httpClient.get('MovieCategory/Get')
    .then(response => response.data)
}

export default movieCategoryService
