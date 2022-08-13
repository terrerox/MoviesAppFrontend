import React from 'react'
import { useGetAll } from '../../../hooks/useGetAll'
import { Link } from 'react-router-dom';

export const MoviesTable = () => {
    const { response, error, errorMensage } = useGetAll()

    return (
        <table class="table">
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
                    error && <p className="errorMsg">{errorMensage}</p>
                }
                {
                    (!response && !error) && <p className="loading">Loading...</p>
                }
                {
                    (response && !error) && response.data.map(movie => (
                        <tr>
                            <th scope="row">{movie.id}</th>
                            <td>{movie.title}</td>
                            <td>{movie.image}</td>
                            <td>{movie.youtubeVideoURL}</td>
                            <td>{movie.launchedDate}</td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
