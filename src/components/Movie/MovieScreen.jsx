import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetById } from '../../hooks/useGetById';
import { useSearch } from '../../hooks/useSearch';
import { HomeHead } from '../layout/HomeHead'
import { MovieDetails } from './MovieDetails';

export const MovieScreen = () => {
  const params = useParams();

  const { response, error, errorMensage } = useGetById(params.movieId);

    return (
      <main className="App">
      <section className='content'>
      <HomeHead page="Details"/>

      {
          error && <p className="errorMsg">{ errorMensage }</p>
        }
        {
          (!response && !error) && <p className="loading">Loading...</p>
        }
        {
          response && (
            response.data.length === 0 && <h3 className="notFoundMsg text-center text-white">Movie not found</h3>
          )
        }

{response && (
    <MovieDetails movie={response.data}/>
)
}
      </section>
      </main>)}