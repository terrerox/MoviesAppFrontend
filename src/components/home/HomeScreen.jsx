import { useState } from 'react'
import { Card } from './Card'
import { useGetAll } from '../../hooks/useGetAll'
import { useSearch } from '../../hooks/useSearch'

export const HomeScreen = () => {
  const [inputValue, setInputValue] = useState("")
  const { response } = useGetAll()

  const movies = useSearch(response, inputValue)

  return (
    <main className="App">
      <section className="search">
        <input type="search" placeholder="Find by title" onChange={e => setInputValue(e.target.value)}/>
      </section>
      <section className="cards">
      {
          !response && <p className="loading">Loading...</p>
        }
       {
           response && (
            movies.length === 0 && <p className="notFoundMsg">Movie not found</p>
           )
       } 
       
        <div className='row'>
           {response && (
            movies.map(movie => (
              <Card 
                key={movie.id} 
                movie={movie}
              />
            ))
          )}
          </div>
      </section>
    </main>
  )
}
