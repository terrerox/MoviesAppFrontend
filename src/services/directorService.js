import { httpClient } from '../helpers'
const directorService = {}

directorService.getAll = () => {
  return httpClient.get('Director/Get')
    .then(response => response.data)
}

export default directorService
