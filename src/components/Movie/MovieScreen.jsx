import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetById } from '../../hooks/useGetById';
import { useSearch } from '../../hooks/useSearch';

export const MovieScreen = () => {
  const params = useParams();

  const { response, error, errorMensage } = useGetById(params.movieId);
  
  const [movies,setMovie] = useState({});

  useEffect(()=>{
    setMovie(response.data)
    console.log(movies)
  },[response])



    return (
      <main className="App">
      <section className='content'>

      </section>
      </main>
  )
}
