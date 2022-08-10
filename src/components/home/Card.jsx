import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';

export const Card = ({ movie }) => {
  const goToMovie = () => {
    console.log('klok')
  }

  let getDate = new Date(movie.launchedDate);

  return (
    <div class="col-7 col-sm-5 col-md-4 col-xl-3 ms-4 mt-2">
      
							<div class="card bg-dark h-100">
								<div class="card__cover">
									<img src={movie.image} alt=""/>
                  <Link to={`/movie/${movie.id}`} class="card__play">
                  <i className="fas fa-play"></i>
                  </Link>
									<span class="card__rate card__rate--green">{getDate.getFullYear()}</span>
								</div>
								<div class="card__content p-3">
									<h3 class="card__title"><Link to={`/movie/${movie.id}`}><i class="fa-solid fa-film"></i> {movie.title}</Link></h3>
                  <p className='card-text text-white'>
                    {movie.description}
                  </p>
									<span class="card__category">
                  <a href="#"><i class="fa-solid fa-clapperboard"></i>&nbsp;&nbsp;{movie.category.name}</a>
									</span>
								</div>
							</div>
						</div>
  )
}
