import { useState } from 'react'
import { Card } from './Card'
import { useGetAll } from '../../hooks/useGetAll'
import { useSearch } from '../../hooks/useSearch'
import '../home/HomeScreen.css'
import { HomeHead } from './HomeHead'

export const HomeScreen = () => {
  const [inputValue, setInputValue] = useState("")
  const { response, error, errorMensage } = useGetAll()

  const movies = useSearch(response, inputValue)

  return (
    <main className="App">
      <section className="content">
        <HomeHead/>
        <section className="search">
        <input type="search" placeholder="Find by title" onChange={e => setInputValue(e.target.value)} />
      </section>
        {
          error && <p className="errorMsg">{ errorMensage }</p>
        }
        {
          (!response && !error) && <p className="loading">Loading...</p>
        }
        {
          response && (
            movies.length === 0 && <p className="notFoundMsg">Movie not found</p>
          )
        }

        <div className='row row--grid'>
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
