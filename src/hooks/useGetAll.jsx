import {useEffect, useRef, useState} from 'react'
import movieService from '../services/movieService'


export const useGetAll = () => {
  const isMounted = useRef(true)
  const [state, setState] = useState({
    error: false,
    data: []
  })
  
  useEffect(() => {
    isMounted.current = true

    const fetchData = () => {
      return movieService.getAll()
      .then(data => {
        if (isMounted.current) {
          setState({
              error: false,
              data
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