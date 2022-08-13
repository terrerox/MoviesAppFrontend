import React from 'react'
import { MoviesTable } from './movies/MoviesTable'

export const AdminScreen = () => {
  return (
    <main className='container'>
      <section>
        <div className='row'>
          <h3 className='col-md-6'>
            Movies
          </h3>
          <div className="col-md-6">
            <button>
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
