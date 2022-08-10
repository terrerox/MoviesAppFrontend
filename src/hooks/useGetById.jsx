import {useEffect, useRef, useState} from 'react'
import movieService from '../services/movieService'


export const useGetById = (id) => {
  const isMounted = useRef(true)
  const [state, setState] = useState({
    error: false,
    errorMensage: '',
    response: {}
  })
  
  useEffect(() => {
    isMounted.current = true

    const fetchData = () => {
      return movieService.getById(id)
      .then(response => {
        if (isMounted.current) {
          setState({
              error: false,
              response
          })
        }
      })
      .catch(err => {
        setState({
          error: true,
          errorMensage: err.message
        })
      })
    }

    fetchData()
    
    return () => {
      isMounted.current = false
    }
  }, [])

  return state
}