import {useEffect, useRef, useState} from 'react'

export const useFetch = (url) => {
  const isMounted = useRef(true)
  const [state, setState] = useState({
    error: false,
    data: undefined
  })
  
  useEffect(() => {
    if(!url) return 

    isMounted.current = true

    const fetchData = () => {
      return fetch(url)
      .then(res => res.json())
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
  }, [url])

  return state
}