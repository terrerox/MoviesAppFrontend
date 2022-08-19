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
        <table className="table text-white table-bordered border border-white border-2 shadow shadow-4">
            <thead className='text-dark fs-5 bg-custom'>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Image url</th>
                    <th scope="col">Trailer url</th>
                    <th scope="col">Release date</th>
                    <th scope='col'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    error && <tr><td ><h4 className="errorMsg">{errorMensage}</h4></td></tr>
                }
                {
                    ((!response && !error) && !movies) && <tr><td><h4 className="loading">Loading...</h4></td></tr>
                }
                {
                    ((response && !error) && movies) && movies.map(movie => (
                        <tr key={movie.id}>
                            <th scope="row">{movie.id}</th>
                            <td>{movie.title}</td>
                            <td>{movie.image}</td>
                            <td>{movie.youtubeVideoURL}</td>
                            <td>{movie.launchedDate}</td>
                            <td><button onClick={() => goToUpdateMovie(movie)} className="btn btn-warning w-50"><i className='fas fa-pen text-white'></i></button><button onClick={() => deleteMovie(movie.id)} className="btn btn-danger w-50"><i className='fas fa-trash text-white'></i></button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
