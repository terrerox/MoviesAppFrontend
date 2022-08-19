import { httpClient } from '../helpers'
const actorService = {}

actorService.getAll = () => {
  return httpClient.get('Actor/Get')
    .then(response => response.data)
}

export default actorService