import React from "react"
import './MovieDetails.css'
import '../home/Card'

export const MovieDetails = ({ movie }) =>{
    let getDate = new Date(movie.launchedDate);
    return(
        <section className="section section--details section--bg">

        <div className="container">
            <div className="row">
                <div className="col-12">
                <h1 className="section__title section__title--mb text-white">{movie.title}</h1>
                </div>
                <div className="col-12 col-xl-8">
                    <div className="card card--details bg-dark">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-5">
                            <div className="card__cover">
                                <img src={movie.image}/>
                                <span className="card__rate card__rate--green">{getDate.getFullYear()}</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-9 col-xl-7 p-5">
                            <div className="card__content">
                                <ul className="card__meta">
                                    <li><span>Genre: <a>{movie.category.name}</a></span></li>
                                    <li><span>Director: <a>{movie.directors[0].name} {movie.directors[0].lastName}</a></span></li>
                                    <li><span>Release Year: <a>{getDate.getFullYear()}</a></span></li>                                    
                                </ul>
                                <div className="card card__description">
                                <div className="card-body w-100">
                                    <p className="card-text">{movie.description}
                                    </p>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-4 col-xl-4">
                <iframe width="450" height="315" src={movie.youtubeVideoURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="mt-2"></iframe>
                </div>
            </div>
        </div>

        </section>
    )
}