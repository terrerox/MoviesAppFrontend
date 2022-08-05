import {useEffect, useRef, useState} from 'react'
import movieService from '../services/movieService'


export const useGetAll = () => {
  const isMounted = useRef(true)
  const [state, setState] = useState({
    error: false,
    response: null
  })
  
  useEffect(() => {
    isMounted.current = true

    const fetchData = () => {
      return movieService.getAll()
      .then(response => {
        if (isMounted.current) {
          setState({
              error: false,
              response
          })
        }
      })
    }

    fetchData()
    
    return () => {
      isMounted.current = false
    }
  }, [])

  return state
}