import React from 'react'

export const Card = ({ movie }) => {
  const goToMovie = () => {
    console.log('klok')
  }

  return (
    <div className="card" onClick={goToMovie}>
      <div className="container">
        <h4><b>{ movie.title }</b></h4>
        <p>{ movie.release_date }</p>
        <p>{ movie.about }</p>
      </div>
    </div>
  )
}
