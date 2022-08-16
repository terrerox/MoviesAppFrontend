import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';

export const Card = ({ movie }) => {

  let getDate = new Date(movie.launchedDate);

  return (
    <div className="col-7 col-sm-5 col-md-4 col-xl-3 ms-4 mt-2">
      
							<div className="card bg-dark h-100">
								<div className="card__cover">
									<img src={movie.image} alt=""/>
                  <Link to={`/movie/${movie.id}`} className="card__play">
                  <i className="fas fa-play"></i>
                  </Link>
									<span className="card__rate card__rate--green">{getDate.getFullYear()}</span>
								</div>
								<div className="card__content p-3">
									<h3 className="card__title"><Link to={`/movie/${movie.id}`}><i className="fa-solid fa-film"></i> {movie.title}</Link></h3>
                  <p className='card-text text-white'>
                    {movie.description}
                  </p>
									<span className="card__category">
                  <a href="#"><i className="fa-solid fa-clapperboard"></i>&nbsp;&nbsp;{movie.category.name}</a>
									</span>
								</div>
							</div>
						</div>
  )
}
