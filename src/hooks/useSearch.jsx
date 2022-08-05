import { useEffect, useState } from 'react'


export const useSearch = (response, inputValue) => {
    const [state, setState] = useState([])

    useEffect(() => {
        if(!response) return

        const filterByTitle = () => {
            const { data } = response
            const value = inputValue.trim().toLowerCase()
            setState(
                data.filter(movie => {
                    const title = movie.title.toLowerCase()
                    return title.includes(value)
                })
            )
        }
        filterByTitle()

    }, [inputValue, response])

    return state
}