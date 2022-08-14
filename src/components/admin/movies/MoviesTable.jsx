import { useState, useEffect } from 'react'
import { useGetAll } from '../../../hooks/useGetAll'
import { useNavigate } from 'react-router-dom';
import movieService from '../../../services/movieService';

export const MoviesTable = () => {
    const { response, error, errorMensage } = useGetAll()
    const navigate = useNavigate()
    const [movies, setMovies] = useState()

    useEffect(() => {
        if (response) {
            setMovies(response.data)
        }

    }, [response])


    const deleteMovie = (id) => {
        return movieService.delete(id).then(() => {
            setMovies(movies => movies.filter(movie => movie.id !== id))
        })
    }

    const goToUpdateMovie = (movie) => {
        const locationData = {
            state: { movie }
        }
        navigate('/admin/movie', locationData)
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Image url</th>
                    <th scope="col">Trailer url</th>
                    <th scope="col">Release date</th>
                </tr>
            </thead>
            <tbody>
                {
                    error && <h4 className="errorMsg">{errorMensage}</h4>
                }
                {
                    ((!response && !error) && !movies) && <h4 className="loading">Loading...</h4>
                }
                {
                    ((response && !error) && movies) && movies.map(movie => (
                        <tr key={movie.id}>
                            <th scope="row">{movie.id}</th>
                            <td>{movie.title}</td>
                            <td>{movie.image}</td>
                            <td>{movie.youtubeVideoURL}</td>
                            <td>{movie.launchedDate}</td>
                            <td><button onClick={() => goToUpdateMovie(movie)}>Edit</button></td>
                            <td><button onClick={() => deleteMovie(movie.id)}>Delete</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
