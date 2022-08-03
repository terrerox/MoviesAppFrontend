import { useEffect, useState } from 'react'


export const useSearch = (people, inputValue) => {
    const [state, setState] = useState()

    useEffect(() => {
        const filterByName = () => {

            const value = inputValue.trim().toLowerCase()
            setState(
                people.filter(person => {
                    const name = person.name.toLowerCase()
                    return name.includes(value)
                })
            )
        }
        filterByName()

    }, [inputValue, people])

    return state
}