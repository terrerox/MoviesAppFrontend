import { useEffect, useState } from 'react'


export const useSearch = (movies, inputValue) => {
    const [state, setState] = useState([])

    useEffect(() => {
        if(!movies) return 

        const filterByTitle = () => {

            const value = inputValue.trim().toLowerCase()
            setState(
                movies.filter(movie => {
                    const title = movie.title.toLowerCase()
                    return title.includes(value)
                })
            )
        }
        filterByTitle()

    }, [inputValue, movies])

    return state
}