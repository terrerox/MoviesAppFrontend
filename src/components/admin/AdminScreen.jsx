import React from 'react'
import { MoviesTable } from './movies/MoviesTable'
import { useNavigate } from 'react-router-dom';



export const AdminScreen = () => {
  const navigate = useNavigate()

  const goToAddMovie = () => {
    const locationData = {
      state: { movie: false }
  }
    navigate("/admin/movie", locationData)
  }
  return (
    <main className='container'>
      <section>
        <div className='row'>
          <h3 className='col-md-6'>
            Movies
          </h3>
          <div className="col-md-6">
            <button onClick={goToAddMovie}>
              New movie
            </button>
          </div>
        </div>
        <MoviesTable />
      </section>
      <section>

      </section>
    </main>
  )
}
