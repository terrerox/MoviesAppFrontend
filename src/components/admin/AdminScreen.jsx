import React from 'react'
import { MoviesTable } from './movies/MoviesTable'
import { Link } from 'react-router-dom';



export const AdminScreen = () => {
  return (
    <main className='container'>
      <section>
        <div className='row'>
          <h3 className='col-md-6'>
            Movies
          </h3>
          <div className="col-md-6">
            <Link to="/admin/movie">
              New movie
            </Link>
          </div>
        </div>
        <MoviesTable />
      </section>
      <section>

      </section>
    </main>
  )
}
