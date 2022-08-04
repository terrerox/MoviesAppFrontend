import { useState } from 'react'
import { Card } from './Card'
import { useGetAll } from '../../hooks/useGetAll'
import { useSearch } from '../../hooks/useSearch'

import './Home.css'

export const HomeScreen = () => {
  const [inputValue, setInputValue] = useState("")
  const { data } = useGetAll()
  const movies = useSearch(data, inputValue)

  return (
    <main className="App">
      <section className="search">
        <input type="search" placeholder="Find by title" onChange={e => setInputValue(e.target.value)}/>
      </section>
      <section className="cards">
      {
          !data && <p className="loading">Loading...</p>
        }
       {
           data && (
            movies.length === 0 && <p className="notFoundMsg">Movie not found</p>
           )
       } 
       {
           data && (
            movies.map(movie => (
              <Card 
                key={movie.id} 
                movie={movie}
              />
            ))
          )
       }
      </section>
    </main>
  )
}
