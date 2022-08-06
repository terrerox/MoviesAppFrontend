import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

export const Card = ({ movie }) => {
  const goToMovie = () => {
    console.log('klok')
  }

  return (
        <div className='col-3'>
          <div className='card' onClick={goToMovie}>
          <div className='card-body'>
          <img src={movie.image} className="img-fluid img-top"></img>
        <h4 className='card-title'><b>{ movie.title }</b></h4>
        <p className='card-text'>{ movie.launchedDate }</p>
        <p>{ movie.description }</p>
          </div>
        </div>
        </div>
  )
}
