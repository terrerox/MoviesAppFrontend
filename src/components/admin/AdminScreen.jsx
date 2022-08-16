import React from 'react'
import { MoviesTable } from './movies/MoviesTable'
import { useNavigate } from 'react-router-dom';
import { HomeHead } from '../layout/HomeHead';



export const AdminScreen = () => {
  const navigate = useNavigate()

  const goToAddMovie = () => {
    const locationData = {
      state: { movie: false }
  }
    navigate("/admin/movie", locationData)
  }
  return (
    <div className='container-fluid content text-white vh-100'>
      <HomeHead page="Admin Panel"/>
        <div className='float-end mb-3'>
          <button onClick={goToAddMovie} className="btn btn-primary">
              New movie
            </button>
        </div>
        <MoviesTable />
    </div>
  )
}
