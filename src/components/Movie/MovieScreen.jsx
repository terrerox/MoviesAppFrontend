import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetById } from '../../hooks/useGetById';
import { useSearch } from '../../hooks/useSearch';

export const MovieScreen = () => {
  const params = useParams();

  const { response, error, errorMensage } = useGetById(params.movieId);

    return (
    <div>Hello World</div>
  )
}
