import { useState } from 'react'

export const useForm = ( initialState = {} ) => {
    const [values, setValues] = useState(initialState)

    const handleInputChange = ({ target }) => {
        let value = target.value

        if(target.name === 'actorIds'){
            value = [target.value]
        }

        if(target.name === 'directorIds'){
            value = [target.value]
        }
        
        setValues({
            ...values,
            [ target.name ]: value
        })
    }

    return [ values, handleInputChange, setValues ]
}